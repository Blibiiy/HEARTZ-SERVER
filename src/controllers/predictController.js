import axios from 'axios';
import FormData from 'form-data';
import { prisma } from '../config/prisma.js';
import { uploadAudioToS3 } from '../services/s3Service.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/AppError.js';

export const predictSyllable = catchAsync(async (req, res, next) => {
  const { targetSyllableId } = req.body;
  const userId = req.user?.userId; // Diambil dari payload token JWT yang valid

  // 1. Validasi Input Awal
  if (!targetSyllableId) {
    return next(
      new AppError('Parameter targetSyllableId wajib disertakan pada request body.', 400, {
        code: 'TARGET_SYLLABLE_REQUIRED',
      })
    );
  }

  // 2. Pastikan Target Suku Kata Eksis di Database (Menggunakan prisma.syllable)
  const targetSyllable = await prisma.syllable.findUnique({
    where: { id: targetSyllableId },
  });

  if (!targetSyllable) {
    return next(
      new AppError('Target suku kata yang Anda pilih tidak ditemukan di sistem.', 404, {
        code: 'TARGET_SYLLABLE_NOT_FOUND',
      })
    );
  }

  // 3. Unggah Berkas Audio Asli ke Amazon S3 Bucket
  const s3Result = await uploadAudioToS3(req.file.buffer, req.file.mimetype, userId);

  // 4. Kirim Berkas Biner ke Flask ML API via Axios + FormData
  const form = new FormData();
  form.append('audio', req.file.buffer, {
    filename: req.file.originalname || 'audio.wav',
    contentType: req.file.mimetype,
  });

  let mlResponse;
  try {
    const mlTargetUrl = `${process.env.ML_API_URL}/predict`;
    
    const response = await axios.post(mlTargetUrl, form, {
      headers: { ...form.getHeaders() },
      timeout: 10000, // Batas toleransi tunggu respons 10 detik
    });
    
    mlResponse = response.data;
  } catch (error) {
    return next(
      new AppError('Gagal mendapatkan hasil evaluasi dari server AI Machine Learning.', 502, {
        code: 'ML_SERVER_ERROR',
        errors: [{ rawMessage: error.response?.data || error.message }],
      })
    );
  }

  // Ekstraksi data murni dari format respons riyal model tim ML
  const { confidence, prediction, motivation_message } = mlResponse;

  // 5. Logika Bisnis: Cari ID dari Suku Kata Hasil Prediksi (Menggunakan prisma.syllable)
  const predictedSyllableRecord = await prisma.syllable.findUnique({
    where: { code: prediction.toLowerCase() },
  });

  // 6. Evaluasi Hasil: Bandingkan Kode Suku Kata Target vs Hasil Prediksi Model
  const isCorrect = targetSyllable.code.toLowerCase() === prediction.toLowerCase();

  // 7. Operasi Transaksional ACID Database (Menggunakan nama model runtime singular camelCase)
  const resultData = await prisma.$transaction(async (tx) => {
    
    // A. Simpan metadata berkas audio ke model tx.audioFile
    const audioFile = await tx.audioFile.create({
      data: {
        userId,
        s3Key: s3Result.s3Key,
        s3Bucket: s3Result.s3Bucket,
        s3Region: process.env.AWS_REGION || 'ap-southeast-3',
        contentType: req.file.mimetype,
        sizeBytes: req.file.size, 
        durationMs: req.audio?.durationMs || 1000, 
      },
    });

    // B. Simpan data sesi latihan ke model tx.practiceSession
    const practiceSession = await tx.practiceSession.create({
      data: {
        userId,
        targetSyllableId: targetSyllable.id,
        isCorrect,
        score: confidence,
        audioFileId: audioFile.id,
      },
    });

    // C. Simpan data hasil prediksi AI ke model tx.prediction
    const predictionRecord = await tx.prediction.create({
      data: {
        practiceSessionId: practiceSession.id,
        audioFileId: audioFile.id,
        // Jika kode prediksi tidak terdaftar di data master, kolom diset null agar tidak melanggar foreign key constraint
        predictedSyllableId: predictedSyllableRecord ? predictedSyllableRecord.id : null,
        affirmation: motivation_message || 'Terus berlatih untuk hasil yang lebih maksimal!',
      },
    });

    return {
      sessionId: practiceSession.id,
      date: practiceSession.createdAt,
      affirmation: predictionRecord.affirmation,
    };
  });

  // 8. Kembalikan Respons Akhir yang Bersih dan Akurat ke Front-End
  return res.status(200).json({
    status: 'success',
    statusCode: 200,
    message: 'Audio berhasil diproses oleh model AI.',
    data: {
      sessionId: resultData.sessionId,
      date: resultData.date,
      targetSyllable: targetSyllable.code,
      predictedSyllable: prediction,
      isCorrect,
      accuracyScore: confidence,
      affirmation: resultData.affirmation,
    },
  });
});