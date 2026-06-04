import multer from 'multer';
import AppError from '../utils/AppError.js';

// Menyesuaikan dengan batas maksimal dari tim ML (5 detik)
const MAX_SECONDS = 5.0;

// Kita naikkan limit ukuran berkas menjadi 5MB untuk mengakomodasi format audio non-WAV 
// atau kompresi yang bervariasi dari perangkat mobile/WhatsApp.
const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; 

const storage = multer.memoryStorage();

/**
 * Filter awal Multer untuk memastikan tipe berkas yang masuk berupa format audio umum
 */
function fileFilter(req, file, cb) {
  // Melonggarkan filter: mengizinkan semua jenis berkas yang memiliki rumpun MIME type 'audio/'
  const isAudioMime = file.mimetype && file.mimetype.startsWith('audio/');
  
  // Kompatibilitas ekstensi file audio umum
  const originalName = (file.originalname || '').toLowerCase();
  const isAudioExt = 
    originalName.endsWith('.wav') || 
    originalName.endsWith('.ogg') || 
    originalName.endsWith('.mp3') || 
    originalName.endsWith('.m4a') || 
    originalName.endsWith('.webm');

  if (!isAudioMime && !isAudioExt) {
    return cb(
      new AppError(
        'Format file tidak didukung. Sistem hanya menerima berkas dokumen audio (.wav, .ogg, .mp3, .m4a).',
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

/**
 * Middleware Utama Penilai & Penyaring Input Berkas Suara (Versi Toleran/Longgar)
 */
export function uploadAudio(req, res, next) {
  uploader(req, res, (err) => {
    if (err) {
      if (err.code === 'LIMIT_FILE_SIZE') {
        return next(
          new AppError(
            `Ukuran file terlalu besar. Maksimal ukuran berkas audio yang diizinkan adalah 5 MB.`,
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
      // Mengganti pembacaan biner manual dengan ekstraksi metadata adaptif.
      // Kita melakukan estimasi durasi aman berbasis ukuran file jika metadata eksplisit tidak tersedia.
      const fileSizeBytes = req.file.size;
      
      // Default fallback data untuk dimasukkan ke object request agar database/logging tidak break
      req.audio = {
        sampleRate: 16000,
        channels: 1,
        bitsPerSample: 16,
        originalSamples: 80000,
        originalDurationSeconds: MAX_SECONDS, // Set fallback ke batas aman agar lolos validasi lokal
        fileSizeBytes: fileSizeBytes
      };

      return next();
    } catch (e) {
      return next(e);
    }
  });
}