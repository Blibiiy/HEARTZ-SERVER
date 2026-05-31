const { GoogleGenAI } = require("@google/generative-ai");

// Inisialisasi SDK dengan API Key dari environment variable
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

/**
 * Fungsi untuk menghasilkan narasi laporan klinis berdasarkan data statistik pasien
 * @param {Object} stats - Objek berisi data agregasi latihan pasien
 * @returns {Promise<string>} Teks ringkasan dari Gemini
 */
const generateWeeklyReport = async (stats) => {
  try {
    // Menggunakan model flash yang cepat dan efisien untuk teks teks pendek
    const model = ai.getGenerativeModel({ 
      model: "gemini-2.5-flash",
      // Mengunci instruksi sistem agar Gemini konsisten bertindak sebagai Speech Therapist
      systemInstruction: "Anda adalah seorang Ahli Terapi Bicara (Speech Therapist) profesional yang ramah, empatik, dan suportif. Tugas Anda adalah memberikan evaluasi klinis singkat sepanjang 2 hingga 3 kalimat berdasarkan data statistik latihan pasien yang diberikan. Berikan motivasi yang membangun dan sebutkan poin performa mereka secara ringkas. JANGAN gunakan format markdown seperti tanda bintang (**) atau bullet-points. Kembalikan teks narasi murni."
    });

    // Menyusun fakta data transaksional menjadi petunjuk konteks untuk AI
    const prompt = `
      Berikut adalah statistik latihan bicara pasien dalam 7 hari terakhir:
      - Total Sesi Latihan: ${stats.totalPracticeCount} kali
      - Pelafalan Benar (Sukses): ${stats.totalCorrect} kali
      - Pelafalan Salah: ${stats.totalIncorrect} kali
      - Rata-rata Skor Akurasi Sistem: ${(stats.overallAccuracy * 100).toFixed(1)}%

      Berikan ringkasan evaluasi perkembangan mingguan untuk pasien ini sesuai instruksi sistem!
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    // Kembalikan teks bersih dan hapus spasi/baris baru yang tidak diperlukan di ujung string
    return response.text().trim();
  } catch (error) {
    console.error("Error pada Gemini Service:", error);
    // Kebijakan Fallback: Kembalikan teks generik jika API Google mengalami gangguan
    return `Selamat atas dedikasi Anda dalam menyelesaikan ${stats.totalPracticeCount} sesi latihan selama 7 hari terakhir dengan tingkat akurasi ${(stats.overallAccuracy * 100).toFixed(1)}%. Teruskan latihan Anda secara konsisten untuk mencapai hasil yang optimal!`;
  }
};

module.exports = { generateWeeklyReport };