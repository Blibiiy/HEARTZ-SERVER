import axios from 'axios';
import FormData from 'form-data';
import { prisma } from '../config/prisma.js';
import { uploadAudioToS3 } from '../services/s3Service.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/AppError.js';

const capitalizeTarget = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const predictModelRendiWithRetry = async (buffer, originalname, mimetype, target_label, maxRetries = 5) => {
  const mlTargetUrl = `${process.env.ML_API_URL}/predict`;
  const formattedTarget = target_label.toLowerCase(); // 🌟 Paksa huruf kecil untuk Rendi
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const form = new FormData();
      form.append('audio', buffer, {
        filename: originalname || 'audio.wav',
        contentType: mimetype,
      });
      form.append('target_label', formattedTarget);

      const response = await axios.post(mlTargetUrl, form, {
        headers: { ...form.getHeaders() },
        timeout: 15000,
      });
      
      return { status: 'success', data: response.data };
    } catch (error) {
      console.warn(`[Model Rendi] Percobaan ${attempt} gagal:`, error.message);
      if (attempt === maxRetries) {
        return { status: 'error', message: error.message };
      }
    }
  }
};

const predictModelGhildan = async (buffer, target_label) => {
  const formattedTarget = capitalizeTarget(target_label); // 🌟 Paksa huruf besar di awal untuk Ghildan
  const targetUrl = `https://30gz15d4bh.execute-api.ap-southeast-2.amazonaws.com/prod/predict?target=${formattedTarget}`;
  
  try {
    const response = await axios.post(targetUrl, buffer, {
      headers: {
        'Content-Type': 'audio/wav',
      },
      timeout: 15000,
    });
    
    return { status: 'success', data: response.data };
  } catch (error) {
    console.error('[Model Ghildan] Gagal mendapatkan respons:', error.message);
    return { 
      status: 'error', 
      message: error.message,
      aws_error_detail: error.response?.data || 'Tidak ada detail data kembalian dari server AWS'
    };
  }
};

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
  const { target_label } = req.body;
  const userId = req.user?.userId;

  if (!target_label) {
    return next(
      new AppError('Parameter target_label wajib disertakan pada request body.', 400, {
        code: 'TARGET_LABEL_REQUIRED',
      })
    );
  }

  const targetSyllable = await prisma.syllable.findUnique({
    where: { code: target_label.toLowerCase() },
  });

  if (!targetSyllable) {
    return next(
      new AppError('Target suku kata yang Anda pilih tidak ditemukan di sistem.', 404, {
        code: 'TARGET_LABEL_NOT_FOUND',
      })
    );
  }

  const s3Result = await uploadAudioToS3(req.file.buffer, req.file.mimetype, userId);

  const [rendiResult, ghildanResult] = await Promise.all([
    predictModelRendiWithRetry(req.file.buffer, req.file.originalname, req.file.mimetype, target_label, 5),
    predictModelGhildan(req.file.buffer, target_label),
  ]);

  if (rendiResult.status === 'error' && ghildanResult.status === 'error') {
    return next(
      new AppError('Kedua server model AI Machine Learning gagal memproses audio Anda.', 502, {
        code: 'ALL_ML_SERVERS_ERROR',
        errors: [
          { model_rendi: rendiResult.message },
          { model_ghildan: ghildanResult.message }
        ],
      })
    );
  }

  let finalAccuracy = 0;
  let finalPredictionLabel = target_label;
  let finalIsCorrect = false;
  let finalAffirmation = 'Terus berlatih untuk hasil yang lebih maksimal!';
  let chosenModel = 'none';

  let rendiScore = -1;
  let ghildanScore = -1;

  if (rendiResult.status === 'success') {
    rendiScore = rendiResult.data.actual_confidence || 0;
  }
  if (ghildanResult.status === 'success') {
    ghildanScore = ghildanResult.data.target_confidence || 0;
  }

  if (rendiScore >= ghildanScore && rendiResult.status === 'success') {
    const rData = rendiResult.data;
    finalAccuracy = rData.actual_confidence;
    finalPredictionLabel = rData.predicted_label || target_label;
    finalIsCorrect = rData.is_match;
    finalAffirmation = rData.motivation_message || finalAffirmation;
    chosenModel = 'rendy';
  } else if (ghildanResult.status === 'success') {
    const gData = ghildanResult.data;
    finalAccuracy = gData.target_confidence;
    finalPredictionLabel = gData.predicted_class || target_label;
    finalIsCorrect = gData.match;
    finalAffirmation = gData.motivational_text || finalAffirmation;
    chosenModel = 'ghildan';
  }

  const predictedSyllableRecord = await prisma.syllable.findUnique({
    where: { code: finalPredictionLabel.toLowerCase() },
  });

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
        isCorrect: finalIsCorrect,
        score: finalAccuracy,
        audioFileId: audioFile.id,
      },
    });

    const predictionRecord = await tx.prediction.create({
      data: {
        practiceSessionId: practiceSession.id,
        audioFileId: audioFile.id,
        predictedSyllableId: predictedSyllableRecord ? predictedSyllableRecord.id : null,
        affirmation: finalAffirmation,
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
      predictedSyllable: finalPredictionLabel,
      isCorrect: finalIsCorrect,
      accuracyScore: finalAccuracy,
      affirmation: resultData.affirmation,
    },
    metadata_comparison: {
      chosen_model: chosenModel,
      model_rendi: rendiResult,
      model_ghildan: ghildanResult,
    },
  });
});

export const getAllSyllables = catchAsync(async (req, res, next) => {
  const syllables = await prisma.syllable.findMany({
    select: {
      id: true,
      code: true,
    },
    orderBy: {
      code: 'asc',
    },
  });

  return res.status(200).json({
    status: 'success',
    statusCode: 200,
    results: syllables.length,
    data: syllables,
  });
});