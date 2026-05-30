import "dotenv/config";
import pg from "pg";

async function main() {
  // Menggunakan pg.Pool native dengan tambahan opsi SSL
  const pool = new pg.Pool({ 
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false // Mengizinkan enkripsi SSL dari local ke AWS RDS
    }
  });

  const syllables = [
    "a", "ba", "be", "bi", "bo", "bu", 
    "e", "i", 
    "ma", "me", "mi", "mo", "mu", 
    "o", 
    "pa", "pe", "pi", "po", "pu", 
    "u"
  ];

  console.log("Memulai proses seeding via Native PG Driver dengan akun heartz_app...");

  try {
    for (const code of syllables) {
      const label = code.toUpperCase();
      
      // Query SQL murni untuk mensimulasikan perilaku upsert (abaikan jika data sudah ada)
      const query = `
        INSERT INTO syllables (id, code, label, "createdAt")
        VALUES (concat('c', replace(gen_random_uuid()::text, '-', '')), $1, $2, NOW())
        ON CONFLICT (code) DO NOTHING;
      `;
      
      await pool.query(query, [code, label]);
    }
    console.log(`\x1b[32m%s\x1b[0m`, `Seeding Sukses! Berhasil memastikan ${syllables.length} suku kata terdaftar di AWS RDS.`);
  } catch (error) {
    console.error("Gagal melakukan eksekusi query seeding:", error);
  } finally {
    // Menutup koneksi pool
    await pool.end();
  }
}

main();