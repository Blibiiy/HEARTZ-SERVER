import cron from 'node-cron';
import { prisma } from '../config/prisma.js';

// Menjadwalkan tugas otomatis setiap pukul 00:00 tengah malam
cron.schedule('0 0 * * *', async () => {
  console.log('🧹 [CRON] Memulai pembersihan berkala sesi auth yang kedaluwarsa...');
  try {
    const now = new Date();
    const result = await prisma.authSession.deleteMany({
      where: {
        expiresAt: { lt: now } // Hapus semua yang expiresAt-nya kurang dari waktu sekarang
      }
    });
    console.log(`✅ [CRON] Pembersihan selesai. Berhasil menghapus ${result.count} sesi sampah.`);
  } catch (error) {
    console.error('❌ [CRON] Gagal mengeksekusi pembersihan sesi:', error);
  }
});