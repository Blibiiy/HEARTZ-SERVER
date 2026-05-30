import { prisma } from '../config/prisma.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/AppError.js';

/**
 * 1. AMBIL DATA PROFIL PENGGUNA (GET PROFILE)
 * Mengambil informasi data pribadi riyal beserta akumulasi sesi latihan dari database
 */
export const getProfile = catchAsync(async (req, res, next) => {
  const userId = req.user.userId; // Diambil dari payload token JWT yang valid

  // Ambil data user beserta hitungan total sesi latihan menggunakan agregasi Prisma
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
      // Melakukan hitung jumlah baris data latihan secara efisien di level database
      _count: {
        select: { sessions: true } // Menyesuaikan nama relasi valid hasil pembacaan error validator
      }
    }
  });

  if (!user) {
    return next(
      new AppError('Data pengguna tidak ditemukan di dalam sistem.', 404, {
        code: 'USER_NOT_FOUND',
      })
    );
  }

  return res.status(200).json({
    status: 'success',
    statusCode: 200,
    data: {
      userId: user.id,
      name: user.name,
      email: user.email,
      joinedAt: user.createdAt,
      totalSessions: user._count.sessions, // Menggunakan properti sessions yang valid
    },
  });
});

/**
 * 2. PERBARUI DATA PROFIL PENGGUNA (UPDATE PROFILE)
 * Mengubah informasi nama atau email pengguna aktif di database AWS RDS
 */
export const updateProfile = catchAsync(async (req, res, next) => {
  const userId = req.user.userId;
  const { name, email } = req.body || {};

  // Validasi Input: Nama wajib diisi dan minimal memiliki panjang 3 karakter
  if (!name || typeof name !== 'string' || name.trim().length < 3) {
    return next(
      new AppError('Format data tidak valid. Pastikan semua kolom diisi dengan benar.', 400, {
        code: 'VALIDATION_ERROR',
      })
    );
  }

  // Validasi Input: Jika email dikirim, harus memiliki format yang valid
  if (email && (typeof email !== 'string' || !email.includes('@'))) {
    return next(
      new AppError('Format data tidak valid. Pastikan semua kolom diisi dengan benar.', 400, {
        code: 'VALIDATION_ERROR',
      })
    );
  }

  const cleanEmail = email ? email.toLowerCase().trim() : undefined;

  // Cek konflik jika pengguna mencoba mengubah ke email yang sudah dipakai orang lain
  if (cleanEmail) {
    const emailConflict = await prisma.user.findFirst({
      where: {
        email: cleanEmail,
        NOT: { id: userId } // Mengecualikan ID pengguna saat ini
      }
    });

    if (emailConflict) {
      return next(
        new AppError('Email sudah digunakan oleh akun lain. Silakan gunakan email yang berbeda.', 400, {
          code: 'EMAIL_ALREADY_USED',
        })
      );
    }
  }

  // Eksekusi pembaruan data ke tabel users di AWS RDS
  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: {
      name: name.trim(),
      ...(cleanEmail && { email: cleanEmail }) // Hanya perbarui email jika parameter dikirim
    },
    select: {
      id: true,
      name: true,
      email: true
    }
  });

  return res.status(200).json({
    status: 'success',
    statusCode: 200,
    message: 'Profil berhasil diperbarui.',
    data: {
      userId: updatedUser.id,
      name: updatedUser.name,
      email: updatedUser.email,
    },
  });
});