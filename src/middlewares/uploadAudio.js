import multer from 'multer';
import AppError from '../utils/AppError.js';

// Konfigurasi spesifikasi audio WAV dari spesifikasi teknis
const WAV_SAMPLE_RATE = 16000;
const WAV_CHANNELS = 1;
const WAV_BITS_PER_SAMPLE = 16;

// Menyesuaikan dengan batas maksimal dari tim ML (5 detik)
const MAX_SECONDS = 5.0;

// Estimasi ukuran berkas maksimal untuk toleransi keamanan:
// WAV PCM 16-bit mono 16kHz durasi 5 detik berkisar antara ~160KB.
// Kita berikan batas aman maksimal 500KB untuk menampung header/meta tambahan.
const MAX_FILE_SIZE_BYTES = 500 * 1024; 

const storage = multer.memoryStorage();

/**
 * Filter awal Multer untuk memastikan tipe berkas yang masuk berupa audio WAV
 */
function fileFilter(req, file, cb) {
  const okMime =
    file.mimetype === 'audio/wav' ||
    file.mimetype === 'audio/x-wav' ||
    file.mimetype === 'audio/wave' ||
    file.mimetype === 'audio/vnd.wave';

  const okExt = (file.originalname || '').toLowerCase().endsWith('.wav');

  if (!okMime && !okExt) {
    return cb(
      new AppError(
        'Format file tidak didukung. Sistem hanya menerima file .wav PCM 16-bit mono dengan sample rate 16 kHz.',
        400,
        { code: 'INVALID_AUDIO_TYPE' }
      )
    );
  }

  cb(null, true);
}

const uploader = multer({
  storage,
  fileFilter,
  limits: { fileSize: MAX_FILE_SIZE_BYTES },
}).single('audio');

// Helper fungsi pembaca biner (little-endian)
function readUInt32LE(buf, offset) {
  return buf.readUInt32LE(offset);
}
function readUInt16LE(buf, offset) {
  return buf.readUInt16LE(offset);
}

/**
 * Membaca susunan struktur biner (RIFF/WAVE Chunks) berkas audio
 */
function parseWav(buffer) {
  if (!buffer || buffer.length < 44) {
    throw new AppError('File .wav tidak valid atau rusak.', 400, {
      code: 'WAV_TOO_SMALL',
    });
  }

  const riff = buffer.toString('ascii', 0, 4);
  const wave = buffer.toString('ascii', 8, 12);

  if (riff !== 'RIFF' || wave !== 'WAVE') {
    throw new AppError(
      'Format file tidak didukung. Sistem hanya menerima file .wav PCM 16-bit mono dengan sample rate 16 kHz.',
      400,
      { code: 'NOT_WAV_RIFF' }
    );
  }

  let offset = 12;
  let fmt = null;
  let data = null;

  while (offset + 8 <= buffer.length) {
    const chunkId = buffer.toString('ascii', offset, offset + 4);
    const chunkSize = readUInt32LE(buffer, offset + 4);
    const chunkDataStart = offset + 8;

    if (chunkDataStart + chunkSize > buffer.length) {
      throw new AppError('File .wav tidak valid atau rusak.', 400, {
        code: 'WAV_CHUNK_OUT_OF_RANGE',
      });
    }

    if (chunkId === 'fmt ') {
      if (chunkSize < 16) {
        throw new AppError('File .wav tidak valid atau rusak.', 400, {
          code: 'WAV_FMT_TOO_SMALL',
        });
      }

      const audioFormat = readUInt16LE(buffer, chunkDataStart + 0); // 1 = PCM
      const numChannels = readUInt16LE(buffer, chunkDataStart + 2);
      const sampleRate = readUInt32LE(buffer, chunkDataStart + 4);
      const byteRate = readUInt32LE(buffer, chunkDataStart + 8);
      const blockAlign = readUInt16LE(buffer, chunkDataStart + 12);
      const bitsPerSample = readUInt16LE(buffer, chunkDataStart + 14);

      fmt = {
        audioFormat,
        numChannels,
        sampleRate,
        byteRate,
        blockAlign,
        bitsPerSample,
      };
    }

    if (chunkId === 'data') {
      data = {
        dataSize: chunkSize,
        dataOffset: chunkDataStart,
      };
    }

    offset = chunkDataStart + chunkSize + (chunkSize % 2);
    if (fmt && data) break;
  }

  if (!fmt || !data) {
    throw new AppError('File .wav tidak valid atau tidak lengkap.', 400, {
      code: 'WAV_MISSING_CHUNK',
      errors: [{ hasFmt: Boolean(fmt), hasData: Boolean(data) }],
    });
  }

  return { fmt, data };
}

/**
 * Validasi spesifikasi teknis audio sesuai kebutuhan model AI
 */
function validateFormat(fmt, data) {
  if (fmt.audioFormat !== 1) {
    throw new AppError(
      'Format file tidak didukung. Sistem hanya menerima WAV PCM (audioFormat=1).',
      400,
      { code: 'WAV_NOT_PCM', errors: [{ audioFormat: fmt.audioFormat }] }
    );
  }

  if (fmt.numChannels !== WAV_CHANNELS) {
    throw new AppError(
      'Channel audio tidak sesuai. Sistem hanya menerima audio mono (1 channel).',
      400,
      { code: 'WAV_INVALID_CHANNELS', errors: [{ numChannels: fmt.numChannels }] }
    );
  }

  if (fmt.sampleRate !== WAV_SAMPLE_RATE) {
    throw new AppError(
      'Sample rate tidak sesuai. Sistem hanya menerima sample rate 16 kHz (16000 Hz).',
      400,
      { code: 'WAV_INVALID_SAMPLE_RATE', errors: [{ sampleRate: fmt.sampleRate }] }
    );
  }

  if (fmt.bitsPerSample !== WAV_BITS_PER_SAMPLE) {
    throw new AppError('Bit depth tidak sesuai. Sistem hanya menerima WAV PCM 16-bit.', 400, {
      code: 'WAV_INVALID_BIT_DEPTH',
      errors: [{ bitsPerSample: fmt.bitsPerSample }],
    });
  }

  // Validasi durasi waktu berdasarkan kalkulasi ukuran byte data PCM masuk
  const bytesPerSample = (fmt.bitsPerSample / 8) * fmt.numChannels;
  const originalSamples = Math.floor(data.dataSize / bytesPerSample);
  const originalDurationSeconds = originalSamples / fmt.sampleRate;

  if (originalDurationSeconds > MAX_SECONDS) {
    throw new AppError(
      `Durasi audio terlalu panjang. Maksimal waktu perekaman adalah ${MAX_SECONDS} detik.`,
      400,
      {
        code: 'WAV_DURATION_TOO_LONG',
        errors: [
          {
            maxSeconds: MAX_SECONDS,
            originalSeconds: originalDurationSeconds,
            sampleRate: fmt.sampleRate,
          },
        ],
      }
    );
  }

  return { originalSamples, originalDurationSeconds };
}

/**
 * Middleware Utama Penilai & Penyaring Input Berkas Suara
 */
export function uploadAudio(req, res, next) {
  uploader(req, res, (err) => {
    if (err) {
      if (err.code === 'LIMIT_FILE_SIZE') {
        return next(
          new AppError(
            `Ukuran file terlalu besar. Maksimal durasi perekaman ${MAX_SECONDS} detik untuk berkas WAV PCM 16-bit mono 16 kHz.`,
            400,
            { code: 'FILE_TOO_LARGE' }
          )
        );
      }
      return next(err);
    }

    if (!req.file) {
      return next(
        new AppError('File audio wajib dikirim pada field "audio".', 400, {
          code: 'AUDIO_REQUIRED',
        })
      );
    }

    try {
      // 1. Parsing struktur biner berkas WAV masuk
      const { fmt, data } = parseWav(req.file.buffer);
      
      // 2. Validasi format sekaligus kalkulasi durasi rekaman asli (maks 5 detik)
      const { originalSamples, originalDurationSeconds } = validateFormat(fmt, data);

      // 3. Masukkan metadata ke dalam objek request untuk kebutuhan controller/logging
      // Kita mempertahankan Buffer asli tanpa pemotongan lokal karena pemotongan 1 detik dilakukan oleh tim ML
      req.audio = {
        sampleRate: fmt.sampleRate,
        channels: fmt.numChannels,
        bitsPerSample: fmt.bitsPerSample,
        originalSamples,
        originalDurationSeconds,
        fileSizeBytes: req.file.size
      };

      return next();
    } catch (e) {
      return next(e);
    }
  });
}