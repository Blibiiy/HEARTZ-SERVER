import multer from 'multer';
import AppError from '../utils/AppError.js';

const MAX_SECONDS = 5.0;
const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; 

const storage = multer.memoryStorage();

function fileFilter(req, file, cb) {
  const isAudioMime = file.mimetype && file.mimetype.startsWith('audio/');
  
  const originalName = (file.originalname || '').toLowerCase();
  const isAudioExt = 
    originalName.endsWith('.wav') || 
    originalName.endsWith('.ogg') || 
    originalName.endsWith('.mp3') || 
    originalName.endsWith('.mpeg') || 
    originalName.endsWith('.m4a') || 
    originalName.endsWith('.webm');

  if (!isAudioMime && !isAudioExt) {
    return cb(
      new AppError(
        'Format file tidak didukung. Sistem hanya menerima berkas dokumen audio (.wav, .ogg, .mp3, .mpeg, .m4a).',
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
      const fileSizeBytes = req.file.size;
      
      req.audio = {
        sampleRate: 16000,
        channels: 1,
        bitsPerSample: 16,
        originalSamples: 80000,
        originalDurationSeconds: MAX_SECONDS, 
        fileSizeBytes: fileSizeBytes
      };

      return next();
    } catch (e) {
      return next(e);
    }
  });
}