import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../config/prisma.js";
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/AppError.js";

const ACCESS_TOKEN_EXPIRES_IN = "15m";
const REFRESH_TOKEN_EXPIRES_IN = "7d";

const generateAccessToken = (userId, email) => {
  return jwt.sign({ userId, email }, process.env.JWT_SECRET, {
    expiresIn: ACCESS_TOKEN_EXPIRES_IN,
  });
};

const generateRefreshToken = (userId, email) => {
  return jwt.sign({ userId, email }, process.env.JWT_REFRESH_SECRET, {
    expiresIn: REFRESH_TOKEN_EXPIRES_IN,
  });
};

const sendRefreshTokenCookie = (res, token) => {
  const isProduction = process.env.NODE_ENV === "production";
  
  res.cookie("refreshToken", token, {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
    path: "/",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
};

export const register = catchAsync(async (req, res, next) => {
  const { name, email, password } = req.body || {};

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

  const hashedPassword = await bcrypt.hash(password, 10);

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

export const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body || {};

  if (!email || !password) {
    return next(
      new AppError("Email atau kata sandi yang Anda masukkan salah.", 401, {
        code: "INVALID_CREDENTIALS",
      }),
    );
  }

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

  const isPasswordMatch = await bcrypt.compare(password, user.passwordHash);

  if (!isPasswordMatch) {
    return next(
      new AppError("Email atau kata sandi yang Anda masukkan salah.", 401, {
        code: "INVALID_CREDENTIALS",
      }),
    );
  }

  const clientUserAgent = req.headers["user-agent"] || "Unknown Device";

  const accessToken = generateAccessToken(user.id, user.email);
  const refreshToken = generateRefreshToken(user.id, user.email);

  const expiresAtDate = new Date();
  expiresAtDate.setDate(expiresAtDate.getDate() + 7);

  await prisma.authSession.create({
    data: {
      userId: user.id,
      refreshTokenHash: refreshToken,
      userAgent: clientUserAgent,
      expiresAt: expiresAtDate,
    },
  });

  sendRefreshTokenCookie(res, refreshToken);

  return res.status(200).json({
    status: "success",
    statusCode: 200,
    message: "Login berhasil.",
    accessToken,
    data: {
      userId: user.id,
      name: user.name,
      email: user.email,
    },
  });
});

export const logout = catchAsync(async (req, res, next) => {
  const refreshToken = req.cookies?.refreshToken || req.body?.refreshToken;
  const isProduction = process.env.NODE_ENV === "production";

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

  const session = await prisma.authSession.findFirst({
    where: {
      refreshTokenHash: refreshToken,
    },
  });

  if (!session) {
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "lax",
      path: "/",
    });
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

  await prisma.authSession.delete({
    where: {
      id: session.id,
    },
  });

  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
    path: "/",
  });

  return res.status(200).json({
    status: "success",
    statusCode: 200,
    message: "Berhasil keluar dari sistem (Logout sukses).",
  });
});

export const refresh = catchAsync(async (req, res, next) => {
  const refreshToken = req.cookies?.refreshToken || req.body?.refreshToken;
  const isProduction = process.env.NODE_ENV === "production";

  console.log("================ [DEBUG REFRESH START] ================");
  console.log("1. Token dari Klien:", refreshToken ? `${refreshToken.substring(0, 20)}...` : "TIDAK ADA");
  console.log("2. Sumber Token:", req.cookies?.refreshToken ? "Via COOKIE" : req.body?.refreshToken ? "Via REQ.BODY" : "TIDAK TERDETEKSI");

  if (!refreshToken) {
    return next(new AppError("Refresh token wajib disertakan.", 400, { code: "REFRESH_TOKEN_REQUIRED" }));
  }

  const session = await prisma.authSession.findFirst({
    where: {
      refreshTokenHash: refreshToken,
    },
    include: {
      user: true,
    },
  });

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
      const activeSessionsCount = await prisma.authSession.count({ where: { userId: decoded.userId } });
      console.log(`🚨 [REUSE] Jumlah sesi aktif user ini di DB sebelum disapu bersih: ${activeSessionsCount}`);

      const deleteResult = await prisma.authSession.deleteMany({
        where: { userId: decoded.userId },
      });
      console.log(`🚨 [REUSE] Eksekusi deleteMany selesai. Jumlah baris terhapus riyal: ${deleteResult.count}`);
    }

    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "lax",
      path: "/",
    });
    console.log("================ [DEBUG REFRESH END (REUSE)] ================");
    return next(
      new AppError(
        "Peringatan keamanan: Sesi tidak valid atau telah digunakan sebelumnya. Semua perangkat Anda telah dikeluarkan demi keamanan.",
        401,
        { code: "TOKEN_REUSE_DETECTED" },
      ),
    );
  }

  const now = new Date();
  if (session.expiresAt < now) {
    await prisma.authSession.delete({ where: { id: session.id } });
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "lax",
      path: "/",
    });
    return next(new AppError("Sesi Anda telah kedaluwarsa. Silakan login ulang.", 401, { code: "REFRESH_TOKEN_EXPIRED" }));
  }

  try {
    jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
  } catch (err) {
    await prisma.authSession.delete({ where: { id: session.id } });
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "none" : "lax",
      path: "/",
    });
    return next(new AppError("Token tidak valid atau rusak. Otentikasi gagal.", 401, { code: "INVALID_TOKEN_SIGNATURE" }));
  }

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
    return next(txError);
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