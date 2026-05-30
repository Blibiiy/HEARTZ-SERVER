import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../config/prisma.js";
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/AppError.js";

// Konfigurasi durasi kedaluwarsa token JWT
const ACCESS_TOKEN_EXPIRES_IN = "15m"; // Token akses berlaku 15 menit
const REFRESH_TOKEN_EXPIRES_IN = "7d"; // Token penyegar berlaku 7 hari

/**
 * Helper untuk membuat Access Token
 */
const generateAccessToken = (userId, email) => {
  return jwt.sign({ userId, email }, process.env.JWT_SECRET, {
    expiresIn: ACCESS_TOKEN_EXPIRES_IN,
  });
};

/**
 * Helper untuk membuat Refresh Token
 */
const generateRefreshToken = (userId, email) => {
  return jwt.sign({ userId, email }, process.env.JWT_REFRESH_SECRET, {
    expiresIn: REFRESH_TOKEN_EXPIRES_IN,
  });
};

/**
 * Helper Konfigurasi Cookie HTTP-Only untuk Refresh Token (Standar Internasional Anti-XSS)
 */
const sendRefreshTokenCookie = (res, token) => {
  res.cookie("refreshToken", token, {
    httpOnly: true,                                // Mencegah akses script JavaScript pihak ketiga
    secure: process.env.NODE_ENV === "production", // Wajib bernilai TRUE (HTTPS) saat di-deploy ke Cloud Run
    sameSite: "strict",                            // Perlindungan penuh terhadap serangan CSRF
    maxAge: 7 * 24 * 60 * 60 * 1000,               // Masa aktif sinkron dengan JWT (7 hari dalam milidetik)
  });
};

/**
 * 1. FITUR REGISTRASI PENGGUNA (REGISTER)
 */
export const register = catchAsync(async (req, res, next) => {
  const { name, email, password } = req.body || {};

  // Validasi input wajib
  if (!name || !email || !password) {
    return next(
      new AppError(
        "Format data tidak valid. Pastikan semua kolom diisi dengan benar.",
        400,
        {
          code: "VALIDATION_ERROR",
        },
      ),
    );
  }

  // Cek apakah email sudah terdaftar di database
  const emailExists = await prisma.user.findUnique({
    where: { email: email.toLowerCase().trim() },
  });

  if (emailExists) {
    return next(
      new AppError(
        "Email sudah digunakan oleh akun lain. Silakan gunakan email yang berbeda.",
        400,
        {
          code: "EMAIL_ALREADY_USED",
        },
      ),
    );
  }

  // Hashing kata sandi menggunakan bcrypt dengan salt round = 10
  const hashedPassword = await bcrypt.hash(password, 10);

  // Simpan data pengguna baru ke database (tabel users)
  const newUser = await prisma.user.create({
    data: {
      name: name.trim(),
      email: email.toLowerCase().trim(),
      passwordHash: hashedPassword,
    },
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
    },
  });

  return res.status(201).json({
    status: "success",
    statusCode: 201,
    message: "Registrasi berhasil.",
    data: {
      userId: newUser.id,
      name: newUser.name,
      email: newUser.email,
    },
  });
});

/**
 * 2. FITUR MASUK LOG (LOGIN)
 */
export const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body || {};

  if (!email || !password) {
    return next(
      new AppError("Email atau kata sandi yang Anda masukkan salah.", 401, {
        code: "INVALID_CREDENTIALS",
      }),
    );
  }

  // Cari data pengguna berdasarkan email
  const user = await prisma.user.findUnique({
    where: { email: email.toLowerCase().trim() },
  });

  if (!user) {
    return next(
      new AppError("Email atau kata sandi yang Anda masukkan salah.", 401, {
        code: "INVALID_CREDENTIALS",
      }),
    );
  }

  // Bandingkan kata sandi teks mentah dari klien dengan hash di database
  const isPasswordMatch = await bcrypt.compare(password, user.passwordHash);

  if (!isPasswordMatch) {
    return next(
      new AppError("Email atau kata sandi yang Anda masukkan salah.", 401, {
        code: "INVALID_CREDENTIALS",
      }),
    );
  }

  // Ambil informasi metadata user-agent (perangkat) jika tersedia untuk pencatatan sesi
  const clientUserAgent = req.headers["user-agent"] || "Unknown Device";

  // Produksi token JWT riyal
  const accessToken = generateAccessToken(user.id, user.email);
  const refreshToken = generateRefreshToken(user.id, user.email);

  // Hitung tanggal kedaluwarsa riyal untuk database (7 hari dari sekarang)
  const expiresAtDate = new Date();
  expiresAtDate.setDate(expiresAtDate.getDate() + 7);

  // Catat sesi aktif ke dalam tabel auth_sessions di AWS RDS secara transaksional
  await prisma.authSession.create({
    data: {
      userId: user.id,
      refreshTokenHash: refreshToken,
      userAgent: clientUserAgent,
      expiresAt: expiresAtDate,
    },
  });

  // Set refresh token ke dalam HTTP-Only cookie secara aman
  sendRefreshTokenCookie(res, refreshToken);

  return res.status(200).json({
    status: "success",
    statusCode: 200,
    message: "Login berhasil.",
    accessToken, // Hanya kirim access token di body respon
    data: {
      userId: user.id,
      name: user.name,
      email: user.email,
    },
  });
});

/**
 * 3. FITUR KELUAR LOG (LOGOUT)
 */
export const logout = catchAsync(async (req, res, next) => {
  // Membaca token dari cookie (atau fallback ke body JSON untuk kompatibilitas testing Postman lama)
  const refreshToken = req.cookies?.refreshToken || req.body?.refreshToken;

  // 1. Validasi Input
  if (!refreshToken) {
    return next(
      new AppError(
        "Refresh token wajib disertakan untuk melakukan logout.",
        400,
        {
          code: "REFRESH_TOKEN_REQUIRED",
        },
      ),
    );
  }

  // 2. Cari Sesi Langsung Menggunakan String Refresh Token
  const session = await prisma.authSession.findFirst({
    where: {
      refreshTokenHash: refreshToken,
    },
  });

  // 3. Jika Sesi Tidak Ditemukan di Database
  if (!session) {
    // Hapus sisa kuki di client jika ada walaupun sesi di DB sudah hilang
    res.clearCookie("refreshToken");
    return next(
      new AppError(
        "Sesi tidak ditemukan atau Anda telah keluar sebelumnya.",
        404,
        {
          code: "SESSION_NOT_FOUND",
        },
      ),
    );
  }

  // 4. Hapus Sesi dari Tabel auth_sessions AWS RDS
  await prisma.authSession.delete({
    where: {
      id: session.id,
    },
  });

  // 5. Bersihkan cookie token di sisi klien
  res.clearCookie("refreshToken");

  return res.status(200).json({
    status: "success",
    statusCode: 200,
    message: "Berhasil keluar dari sistem (Logout sukses).",
  });
});

/**
 * 4. FITUR REFRESH TOKEN DENGAN ROTASI & DETEKSI ANOMALI (POST /api/auth/refresh)
 */
export const refresh = catchAsync(async (req, res, next) => {
  const refreshToken = req.cookies?.refreshToken || req.body?.refreshToken;

  // ==========================================
  // 🔍 DEBUG BLOCK 1: INSPEKSI DATA MASUK
  // ==========================================
  console.log("================ [DEBUG REFRESH START] ================");
  console.log("1. Token dari Klien:", refreshToken ? `${refreshToken.substring(0, 20)}...` : "TIDAK ADA");
  console.log("2. Sumber Token:", req.cookies?.refreshToken ? "Via COOKIE" : req.body?.refreshToken ? "Via REQ.BODY" : "TIDAK TERDETEKSI");

  if (!refreshToken) {
    return next(new AppError("Refresh token wajib disertakan.", 400, { code: "REFRESH_TOKEN_REQUIRED" }));
  }

  // 2. Cari Sesi Aktif di Database AWS RDS
  const session = await prisma.authSession.findFirst({
    where: {
      refreshTokenHash: refreshToken,
    },
    include: {
      user: true,
    },
  });

  // ==========================================
  // 🔍 DEBUG BLOCK 2: HASIL KUERI DATABASE
  // ==========================================
  console.log("3. Apakah Sesi Ditemukan di DB?:", session ? "YA, DITEMUKAN" : "TIDAK DITEMUKAN (NULL)");
  if (session) {
    console.log("4. Detail Sesi di DB:", {
      sessionId: session.id,
      userId: session.userId,
      expiresAt: session.expiresAt,
    });
  }

  if (!session) {
    const decoded = jwt.decode(refreshToken);
    console.log("🚨 [REUSE] Pemicu Reuse Detection. Payload Token Mentah:", decoded);

    if (decoded && decoded.userId) {
      // Hitung berapa sesi yang akan dihapus sebelum dieksekusi
      const activeSessionsCount = await prisma.authSession.count({ where: { userId: decoded.userId } });
      console.log(`🚨 [REUSE] Jumlah sesi aktif user ini di DB sebelum disapu bersih: ${activeSessionsCount}`);

      const deleteResult = await prisma.authSession.deleteMany({
        where: { userId: decoded.userId },
      });
      console.log(`🚨 [REUSE] Eksekusi deleteMany selesai. Jumlah baris terhapus riyal: ${deleteResult.count}`);
    }

    res.clearCookie("refreshToken");
    console.log("================ [DEBUG REFRESH END (REUSE)] ================");
    return next(
      new AppError(
        "Peringatan keamanan: Sesi tidak valid atau telah digunakan sebelumnya. Semua perangkat Anda telah dikeluarkan demi keamanan.",
        401,
        { code: "TOKEN_REUSE_DETECTED" },
      ),
    );
  }

  // 4. Periksa Apakah Refresh Token secara Waktu Sudah Kedaluwarsa
  const now = new Date();
  if (session.expiresAt < now) {
    await prisma.authSession.delete({ where: { id: session.id } });
    res.clearCookie("refreshToken");
    return next(new AppError("Sesi Anda telah kedaluwarsa. Silakan login ulang.", 401, { code: "REFRESH_TOKEN_EXPIRED" }));
  }

  // 5. Verifikasi Validitas Struktur dan Signature JWT via Library
  try {
    jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
  } catch (err) {
    await prisma.authSession.delete({ where: { id: session.id } });
    res.clearCookie("refreshToken");
    return next(new AppError("Token tidak valid atau rusak. Otentikasi gagal.", 401, { code: "INVALID_TOKEN_SIGNATURE" }));
  }

  // 6. Produksi Pasangan Token Baru
  const newAccessToken = jwt.sign(
    { userId: session.user.id, email: session.user.email },
    process.env.JWT_SECRET,
    { expiresIn: "15m" },
  );

  const newRefreshToken = jwt.sign(
    { userId: session.user.id, email: session.user.email },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: "7d" },
  );

  const newExpiresAt = new Date();
  newExpiresAt.setDate(newExpiresAt.getDate() + 7);

  // ==========================================
  // 🔍 DEBUG BLOCK 3: EKSEKUSI ROTASI TOKEN
  // ==========================================
  console.log("5. Menjalankan Transaksi Database...");
  try {
    await prisma.$transaction([
      prisma.authSession.delete({
        where: { id: session.id },
      }),
      prisma.authSession.create({
        data: {
          userId: session.user.id,
          refreshTokenHash: newRefreshToken,
          userAgent: session.userAgent,
          expiresAt: newExpiresAt,
        },
      }),
    ]);
    console.log("✅ Transaksi Sukses: Sesi lama dihapus, sesi baru dibuat.");
  } catch (txError) {
    console.error("❌ TRANSAKSI GAGAL TERSEKUSI:", txError.message);
    console.error("Detail Error Prisma:", txError);
    return next(txError); // Lempar ke global error handler agar stack trace terlihat di Postman
  }

  sendRefreshTokenCookie(res, newRefreshToken);
  console.log("================ [DEBUG REFRESH END (SUCCESS)] ================");

  return res.status(200).json({
    status: "success",
    statusCode: 200,
    accessToken: newAccessToken,
    data: {
      userId: session.user.id,
      name: session.user.name,
      email: session.user.email,
    },
  });
});