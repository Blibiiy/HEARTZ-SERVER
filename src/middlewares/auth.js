import jwt from 'jsonwebtoken';
import AppError from '../utils/AppError.js';

/**
 * Middleware Keamanan Utama (JWT Guard)
 * Memeriksa dan memvalidasi Access Token yang dikirim oleh Front-End via HTTP Header
 */
export default function auth(req, res, next) {
  // 1. Ambil data dari header Authorization
  const authHeader = req.headers.authorization;

  // 2. Validasi format header (Wajib menggunakan format: Bearer <TOKEN>)
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return next(
      new AppError('Akses ditolak. Token tidak valid atau sesi Anda telah berakhir.', 401, {
        code: 'UNAUTHORIZED',
      })
    );
  }

  // 3. Potong string untuk mengambil token enkripsinya saja
  const token = authHeader.slice('Bearer '.length).trim();

  try {
    // 4. Verifikasi keaslian token menggunakan kunci rahasia dari .env
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 5. Jika valid, tempelkan data payload token ke objek request (req.user)
    // Ini membuat id pengguna tersedia secara global di semua controller berikutnya
    req.user = {
      userId: decoded.userId,
      email: decoded.email,
    };

    // 6. Loloskan ke tahapan logika bisnis berikutnya (Controller)
    next();
  } catch (error) {
    // 7. Tangkap jenis kesalahan spesifik dari pustaka jsonwebtoken
    if (error.name === 'TokenExpiredError') {
      return next(
        new AppError('Sesi Anda telah berakhir. Silakan lakukan login ulang.', 401, {
          code: 'TOKEN_EXPIRED',
        })
      );
    }

    return next(
      new AppError('Akses ditolak. Token keamanan tidak sah.', 401, {
        code: 'INVALID_TOKEN',
      })
    );
  }
}