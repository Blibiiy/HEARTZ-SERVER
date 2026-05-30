import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import dotenv from 'dotenv';
import AppError from '../utils/AppError.js';

dotenv.config();

// Inisialisasi S3 Client dengan kredensial dari .env
const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

/**
 * Fungsi untuk mengunggah berkas biner audio dari memori ke AWS S3 Bucket
 * @param {Buffer} fileBuffer - Buffer audio mentah dari req.file.buffer
 * @param {string} mimeType - Tipe konten berkas (audio/wav)
 * @param {string} userId - ID Pengguna untuk penamaan folder di S3 (opsional)
 * @returns {Promise<{s3Key: string, s3Bucket: string, s3Url: string}>}
 */
export async function uploadAudioToS3(fileBuffer, mimeType, userId = 'anonymous') {
  const bucketName = process.env.AWS_S3_BUCKET_NAME;
  
  if (!bucketName) {
    throw new AppError('Konfigurasi server tidak lengkap: AWS_S3_BUCKET_NAME belum diatur.', 500, {
      code: 'S3_CONFIG_ERROR',
    });
  }

  // Membuat nama berkas unik berbasis timestamp agar tidak saling menimpa
  const uniqueId = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}`;
  const s3Key = `audio-practices/${userId}/${uniqueId}.wav`;

  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: s3Key,
    Body: fileBuffer,
    ContentType: mimeType,
  });

  try {
    // Eksekusi perintah unggah ke S3
    await s3Client.send(command);

    // Menyusun URL publik objek S3
    const s3Url = `https://${bucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${s3Key}`;

    return {
      s3Key,
      s3Bucket: bucketName,
      s3Url,
    };
  } catch (error) {
    // Tangkap eror infrastruktur AWS dan bungkus ke dalam AppError terpusat
    throw new AppError('Gagal mengunggah berkas suara ke server penyimpanan S3.', 500, {
      code: 'S3_UPLOAD_FAILED',
      errors: [{ rawMessage: error.message }],
    });
  }
}