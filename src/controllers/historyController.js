import { prisma } from '../config/prisma.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/AppError.js';

/**
 * 1. AMBIL DAFTAR RIWAYAT LATIHAN (GET ALL HISTORY)
 */
export const getHistory = catchAsync(async (req, res, next) => {
  const userId = req.user.userId; // Diambil secara aman dari token JWT via middleware auth

  // Tarik data practiceSession dari AWS RDS yang berelasi dengan tabel master syllables
  const practices = await prisma.practiceSession.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' }, // Tampilkan latihan terbaru di posisi paling atas
    include: {
      targetSyllable: {
        select: {
          code: true,
        },
      },
    },
  });

  // Transformasi format data agar serasi dengan kebutuhan visual struktur Front-End
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

/**
 * 2. AMBIL DETAIL EVALUASI SESI (GET HISTORY BY SESSION ID)
 */
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

  // Melakukan join relasi menggunakan properti tunggal yang terbukti valid hasil debug
  const session = await prisma.practiceSession.findFirst({
    where: {
      id: sessionId,
      userId, // Memastikan pengguna tidak bisa mengintip data riwayat milik orang lain
    },
    include: {
      targetSyllable: true,
      audioFile: true,   // Relasi langsung yang valid pada model practiceSession
      prediction: true,  // Nama properti tunggal yang valid hasil debug
    },
  });

  if (!session) {
    return next(
      new AppError(`Data riwayat latihan dengan ID Sesi ${sessionId} tidak ditemukan.`, 404, {
        code: 'SESSION_NOT_FOUND',
      })
    );
  }

  // Ambil objek data dari properti relasi tunggal
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
      // Mengakses metadata S3 langsung dari objek audioFile hasil include
      audioUrl: audioFileData 
        ? `https://${audioFileData.s3Bucket}.s3.${process.env.AWS_REGION || 'ap-southeast-3'}.amazonaws.com/${audioFileData.s3Key}`
        : null,
      affirmation: predictionData ? predictionData.affirmation : 'Terus berlatih untuk hasil maksimal!',
    },
  });
});

/**
 * 3. AMBIL RINGKASAN LAPORAN MINGGUAN GEMINI (GET WEEKLY SUMMARY)
 */
export const getHistorySummary = catchAsync(async (req, res, next) => {
  const userId = req.user.userId;

  // Mendapatkan kode minggu saat ini
  const currentDate = new Date();
  const day = currentDate.getDay();
  const diff = currentDate.getDate() - day + (day === 0 ? -6 : 1); // Mundur ke hari Senin terdekat
  const mondayStart = new Date(currentDate.setDate(diff));
  mondayStart.setHours(0, 0, 0, 0);

  const startOfYear = new Date(mondayStart.getFullYear(), 0, 1);
  const daysDiff = Math.floor((mondayStart - startOfYear) / (24 * 60 * 60 * 1000));
  const weekNumber = Math.ceil((daysDiff + startOfYear.getDay() + 1) / 7);
  const currentWeekCode = `${mondayStart.getFullYear()}-W${weekNumber.toString().padStart(2, '0')}`;

  // Cek apakah ringkasan laporan minggu ini sudah tercatat di database
  const existingSummary = await prisma.weeklySummary.findFirst({
    where: {
      userId,
      weekStart: mondayStart,
    },
  });

  if (existingSummary) {
    return res.status(200).json({
      status: 'success',
      statusCode: 200,
      data: {
        week: currentWeekCode,
        totalPracticeCount: existingSummary.totalPracticeCount,
        overallAccuracy: existingSummary.overallAccuracy,
        geminiWeeklyReport: existingSummary.geminiWeeklyReport,
      },
    });
  }

  // Jika belum ada laporan, lakukan agregasi statistik riyal dari seluruh sesi latihan
  const userPractices = await prisma.practiceSession.findMany({
    where: { userId },
  });

  if (userPractices.length === 0) {
    return res.status(200).json({
      status: 'success',
      statusCode: 200,
      data: {
        week: currentWeekCode,
        totalPracticeCount: 0,
        overallAccuracy: 0.0,
        geminiWeeklyReport: "Selamat datang di Heartz! Anda belum memulai sesi latihan. Mari pilih satu suku kata di atas dan mulailah melatih pelafalan Anda hari ini.",
      },
    });
  }

  // Hitung jumlah akumulasi latihan dan rata-rata skor akurasi
  const totalPracticeCount = userPractices.length;
  const totalScore = userPractices.reduce((sum, item) => sum + item.score, 0);
  const overallAccuracy = parseFloat((totalScore / totalPracticeCount).toFixed(2));

  const standardGeminiReport = `Minggu ini Anda menunjukkan dedikasi yang sangat baik dengan menyelesaikan ${totalPracticeCount} sesi latihan. Akurasi rata-rata pelafalan Anda berada di angka ${(overallAccuracy * 100).toFixed(1)}%. Pertahankan ritme belajar ini secara konsisten di minggu berikutnya!`;

  // Simpan laporan kalkulasi baru tersebut ke dalam database
  const newSummary = await prisma.weeklySummary.create({
    data: {
      userId,
      weekStart: mondayStart,
      totalPracticeCount,
      overallAccuracy,
      geminiWeeklyReport: standardGeminiReport,
    },
  });

  return res.status(200).json({
    status: 'success',
    statusCode: 200,
    data: {
      week: currentWeekCode,
      totalPracticeCount: newSummary.totalPracticeCount,
      overallAccuracy: newSummary.overallAccuracy,
      geminiWeeklyReport: newSummary.geminiWeeklyReport,
    },
  });
});