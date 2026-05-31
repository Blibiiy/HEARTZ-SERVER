import axios from 'axios';
import FormData from 'form-data';
import { prisma } from '../config/prisma.js';
import { uploadAudioToS3 } from '../services/s3Service.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/AppError.js';

export const warmupPredictServer = catchAsync(async (req, res, next) => {
  const mlTargetUrl = `${process.env.ML_API_URL}/predict`;
  
  axios.get(mlTargetUrl)
    .catch((err) => {
      console.error('[Warmup] Gagal memicu pemanasan API AI:', err.message);
    });

  return res.status(200).json({
    status: 'success',
    statusCode: 200,
    message: 'Proses pemanasan server AI berhasil dipicu di latar belakang.',
  });
});

export const predictSyllable = catchAsync(async (req, res, next) => {
  const { targetSyllableId } = req.body;
  const userId = req.user?.userId;

  if (!targetSyllableId) {
    return next(
      new AppError('Parameter targetSyllableId wajib disertakan pada request body.', 400, {
        code: 'TARGET_SYLLABLE_REQUIRED',
      })
    );
  }

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

  const s3Result = await uploadAudioToS3(req.file.buffer, req.file.mimetype, userId);

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
      timeout: 10000,
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

  const { confidence, prediction, motivation_message } = mlResponse;

  const predictedSyllableRecord = await prisma.syllable.findUnique({
    where: { code: prediction.toLowerCase() },
  });

  const isCorrect = targetSyllable.code.toLowerCase() === prediction.toLowerCase();

  const resultData = await prisma.$transaction(async (tx) => {
    
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

    const practiceSession = await tx.practiceSession.create({
      data: {
        userId,
        targetSyllableId: targetSyllable.id,
        isCorrect,
        score: confidence,
        audioFileId: audioFile.id,
      },
    });

    const predictionRecord = await tx.prediction.create({
      data: {
        practiceSessionId: practiceSession.id,
        audioFileId: audioFile.id,
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