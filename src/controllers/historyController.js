import { prisma } from '../config/prisma.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/AppError.js';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const generateWeeklyReport = async (stats, rangeLabel) => {
  try {
    const model = 'gemini-2.5-flash';
    const systemInstruction = 'Anda adalah seorang Ahli Terapi Bicara (Speech Therapist) profesional yang ramah, empatik, dan suportif. Tugas Anda adalah memberikan evaluasi klinis singkat sepanjang 2 hingga 3 kalimat berdasarkan data statistik latihan pasien yang diberikan. Berikan motivasi yang membangun dan sebutkan poin performa mereka secara ringkas. JANGAN gunakan format markdown seperti tanda bintang (**) atau bullet-points. Kembalikan teks narasi murni.';

    const prompt = `
      Berikut adalah statistik latihan bicara pasien dalam rentang waktu ${rangeLabel}:
      - Total Sesi Latihan: ${stats.totalPracticeCount} kali
      - Pelafalan Benar (Sukses): ${stats.totalCorrect} kali
      - Pelafalan Salah: ${stats.totalIncorrect} kali
      - Rata-rata Skor Akurasi Sistem: ${(stats.overallAccuracy * 100).toFixed(1)}%

      Berikan ringkasan evaluasi perkembangan untuk pasien ini sesuai instruksi sistem!
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: { systemInstruction }
    });

    return response.text.trim();
  } catch (error) {
    console.error('Error pada Gemini Service:', error);
    return `Selamat atas dedikasi Anda dalam menyelesaikan ${stats.totalPracticeCount} sesi latihan selama rentang waktu ${rangeLabel} dengan tingkat akurasi ${(stats.overallAccuracy * 100).toFixed(1)}%. Teruskan latihan Anda secara konsisten untuk mencapai hasil yang optimal!`;
  }
};

export const getHistory = catchAsync(async (req, res, next) => {
  const userId = req.user.userId;

  const practices = await prisma.practiceSession.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
    include: {
      targetSyllable: {
        select: {
          code: true,
        },
      },
    },
  });

  const formattedHistory = practices.map((session) => ({
    sessionId: session.id,
    date: session.createdAt,
    targetSyllable: session.targetSyllable.code,
    isCorrect: session.isCorrect,
    score: session.score,
  }));

  return res.status(200).json({
    status: 'success',
    statusCode: 200,
    results: formattedHistory.length,
    data: formattedHistory,
  });
});

export const getHistoryBySessionId = catchAsync(async (req, res, next) => {
  const { sessionId } = req.params;
  const userId = req.user.userId;

  if (!sessionId) {
    return next(
      new AppError('Parameter Session ID tidak valid atau tidak disertakan.', 400, {
        code: 'INVALID_SESSION_ID',
      })
    );
  }

  const session = await prisma.practiceSession.findFirst({
    where: {
      id: sessionId,
      userId,
    },
    include: {
      targetSyllable: true,
      audioFile: true,
      prediction: true,
    },
  });

  if (!session) {
    return next(
      new AppError(`Data riwayat latihan dengan ID Sesi ${sessionId} tidak ditemukan.`, 404, {
        code: 'SESSION_NOT_FOUND',
      })
    );
  }

  const predictionData = session.prediction;
  const audioFileData = session.audioFile;

  return res.status(200).json({
    status: 'success',
    statusCode: 200,
    data: {
      sessionId: session.id,
      date: session.createdAt,
      targetSyllable: session.targetSyllable.code,
      predictedSyllable: predictionData ? session.targetSyllable.code : 'tidak terdeteksi',
      isCorrect: session.isCorrect,
      score: session.score,
      audioUrl: audioFileData
        ? `https://${audioFileData.s3Bucket}.s3.${process.env.AWS_REGION || 'ap-southeast-3'}.amazonaws.com/${audioFileData.s3Key}`
        : null,
      affirmation: predictionData ? predictionData.affirmation : 'Terus berlatih untuk hasil maksimal!',
    },
  });
});

export const getHistorySummary = catchAsync(async (req, res, next) => {
  const userId = req.user.userId;
  const { range } = req.query;

  const endDate = new Date();
  let startDate;
  let rangeLabel = '7 hari terakhir';
  let cacheKeyDate;

  if (range === '30d') {
    startDate = new Date();
    startDate.setDate(endDate.getDate() - 30);
    rangeLabel = '30 hari terakhir';
    cacheKeyDate = startDate;
  } else if (range === 'all') {
    startDate = new Date(0); 
    rangeLabel = 'seluruh waktu latihan (All-Time)';
    cacheKeyDate = new Date('1970-01-01T00:00:00.000Z');
  } else {
    startDate = new Date();
    startDate.setDate(endDate.getDate() - 7);
    rangeLabel = '7 hari terakhir';
    cacheKeyDate = startDate;
  }

  const historyData = await prisma.practiceSession.findMany({
    where: {
      userId,
      createdAt: {
        gte: startDate,
        lte: endDate,
      },
    },
  });

  const totalPracticeCount = historyData.length;

  if (totalPracticeCount === 0) {
    return res.status(200).json({
      status: 'success',
      statusCode: 200,
      data: {
        timeRange: {
          startDate: range === 'all' ? 'ALL_TIME' : startDate.toISOString(),
          endDate: endDate.toISOString(),
        },
        stats: {
          totalPracticeCount: 0,
          totalCorrect: 0,
          totalIncorrect: 0,
          overallAccuracy: 0.0,
        },
        geminiWeeklyReport: `Anda belum memiliki catatan sesi latihan dalam rentang ${rangeLabel}. Silakan lakukan latihan pelafalan terlebih dahulu untuk melihat perkembangan AI di sini!`,
      },
    });
  }

  let totalCorrect = 0;
  let totalIncorrect = 0;
  let totalScore = 0;

  historyData.forEach((item) => {
    if (item.isCorrect === true) {
      totalCorrect++;
    } else {
      totalIncorrect++;
    }
    totalScore += item.score || 0;
  });

  const overallAccuracy = parseFloat((totalScore / totalPracticeCount).toFixed(2));

  const currentStats = {
    totalPracticeCount,
    totalCorrect,
    totalIncorrect,
    overallAccuracy,
  };

  const existingSummary = await prisma.weeklySummary.findFirst({
    where: { 
      userId,
      weekStart: range === 'all' ? cacheKeyDate : { gte: cacheKeyDate }
    },
  });

  let reportText = '';

  if (existingSummary) {
    if (existingSummary.totalPracticeCount === totalPracticeCount) {
      reportText = existingSummary.geminiWeeklyReport;
    } else {
      reportText = await generateWeeklyReport(currentStats, rangeLabel);

      await prisma.weeklySummary.update({
        where: { id: existingSummary.id },
        data: {
          weekStart: cacheKeyDate,
          totalPracticeCount,
          overallAccuracy,
          geminiWeeklyReport: reportText,
        },
      });
    }
  } else {
    reportText = await generateWeeklyReport(currentStats, rangeLabel);

    await prisma.weeklySummary.create({
      data: {
        userId,
        weekStart: cacheKeyDate,
        totalPracticeCount,
        overallAccuracy,
        geminiWeeklyReport: reportText,
      },
    });
  }

  return res.status(200).json({
    status: 'success',
    statusCode: 200,
    data: {
      timeRange: {
        startDate: range === 'all' ? 'ALL_TIME' : startDate.toISOString(),
        endDate: endDate.toISOString(),
      },
      stats: currentStats,
      geminiWeeklyReport: reportText,
    },
  });
});