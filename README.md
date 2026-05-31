## Back-End To-Do List (Isra)
*Tugas disusun secara sekuensial berdasarkan urutan pengerjaan.*

### Tahap 1: Setup Awal & Membuka Blokir Front-End
- [x] **Inisialisasi Server & RESTful API:** Membuat repositori lokal, inisialisasi lingkungan Node.js, menginstal Express.js, dan menyusun kerangka direktori (`routes`, `controllers`, `middlewares`).
- [x] **Sistem Error Handling Terpusat:** Membuat middleware khusus di Express.js untuk menangkap semua error agar peladen tidak crash dan merespons dengan HTTP status yang tepat.
- [x] **Konfigurasi CORS:** Menambahkan pengaturan pada Express.js untuk mengizinkan request lintas asal dari domain localhost milik aplikasi Front-End.
- [x] **Pembuatan Mock API:** Membuat endpoint sementara (`POST /api/predict`) yang langsung mengembalikan struktur JSON statis untuk diuji oleh Front-End.
- [x] **Penyusunan Dokumentasi API:** Mencatat endpoint Mock API, header, dan format JSON ke dalam Postman Collection dan mendistribusikannya ke tim Front-End.

### Tahap 2: Infrastruktur Database & Keamanan
- [x] **Konfigurasi PostgreSQL di AWS:** Membuat instans basis data relasional di AWS (Amazon RDS) dan mencatat kredensial koneksi.
- [x] **Koneksi Database:** Menghubungkan aplikasi Express.js dengan PostgreSQL menggunakan ORM/Query Builder (Prisma, Sequelize, atau pg), lalu merancang skema tabel pengguna dan riwayat latihan.
- [x] **Sistem Autentikasi Pengguna:** Membangun endpoint registrasi dan login, mengimplementasikan enkripsi kata sandi dengan bcrypt, dan merancang sistem otorisasi menggunakan JWT.

### Tahap 3: Integrasi Sistem Cerdas (AI)
- [x] **Pembuatan Proxy Inference AI:** Mengubah rute Mock API agar dapat menerima file `.wav` dari Front-End, lalu meneruskannya via Axios ke peladen inference AI (FastAPI).
- [x] **Integrasi Generative AI (Google Gemini):** Membangun layanan yang memanggil API Google Gemini untuk mengevaluasi data metrik latihan dan mengembalikan respons teks afirmasi yang dipersonalisasi.

### Tahap 4: Persiapan Rilis & Deployment
- [x] **Kontainerisasi Backend:** Menyusun file `Dockerfile` untuk mengemas seluruh aplikasi Express.js dan dependensinya, lalu melakukan pengujian container di lingkungan lokal.
- [x] **Deployment BE ke AWS:** Mengunggah dan menjalankan container Docker di instans komputasi AWS (Amazon EC2), serta memastikan port telah dibuka pada pengaturan jaringan awan.