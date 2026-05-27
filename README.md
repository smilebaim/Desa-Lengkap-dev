# Sistem Informasi Desa (SID) - Desa Remau Bako Tuo

Aplikasi Sistem Informasi Desa modern yang dirancang untuk mempercepat pelayanan publik, meningkatkan transparansi anggaran, dan mendigitalkan administrasi desa. Dibangun menggunakan teknologi web terkini untuk memberikan pengalaman terbaik bagi warga dan perangkat desa.

## 🚀 Fitur Utama

### 1. Administrasi & Layanan Publik
- **Digitalisasi Persuratan**: Modul lengkap untuk pembuatan berbagai surat keterangan (Domisili, Kelahiran, Kematian, Nikah, dll).
- **Arsip Surat Masuk/Keluar**: Sistem penyimpanan dokumen digital yang rapi dan terorganisir dengan dukungan lampiran PDF.
- **Database Penduduk**: Manajemen data penduduk yang terintegrasi dengan fitur impor massal.

### 2. Transparansi & Statistik
- **Visualisasi Data Dinamis**: Menampilkan data demografi, pendidikan, dan pekerjaan menggunakan grafik interaktif (Recharts).
- **Indeks Desa Membangun (IDM)**: Pantau skor Ketahanan Sosial, Ekonomi, dan Lingkungan secara *real-time*.
- **Transparansi Anggaran**: Grafik sebaran pendapatan dan belanja desa (APBDes) yang mudah dipahami.

### 3. Konten & Navigasi Cerdas
- **Sidebar Kontekstual**: Navigasi yang muncul otomatis berdasarkan halaman yang sedang dibuka.
- **Editor Halaman Dinamis**: Kelola konten Profil, Visi-Misi, dan Sejarah langsung dari dasbor tanpa menyentuh kode.
- **Agenda & Kalender**: Pantau jadwal kegiatan desa dan kalender pangan (pertanian) yang interaktif.

### 4. Peta Interaktif
- **Pemetaan Tata Ruang**: Peta berbasis Leaflet untuk menampilkan batas desa, fasilitas umum, dan penggunaan lahan.

## 🛠️ Teknologi yang Digunakan

- **Framework**: Next.js 15 (App Router)
- **UI/UX**: Tailwind CSS, Shadcn/UI, Lucide React
- **Backend/Database**: Firebase (Firestore, Authentication, Storage)
- **Visualisasi**: Recharts (Charts), Leaflet (Maps)
- **Language**: TypeScript

## 📦 Cara Instalasi

1. **Clone Repositori**:
   ```bash
   git clone https://github.com/smilebaim/Desa-Lengkap.git
   cd Desa-Lengkap
   ```

2. **Instal Dependensi**:
   ```bash
   npm install
   ```

3. **Konfigurasi Firebase**:
   Pastikan berkas `src/firebase/config.ts` sudah berisi konfigurasi proyek Firebase Anda.

4. **Menjalankan Server**:
   ```bash
   npm run dev
   ```

5. **Inisialisasi Data**:
   Masuk ke Dashboard Admin, gunakan fitur **"Pulihkan Data Bawaan"** pada menu Statistik dan **"Buat Menu Default"** untuk menyiapkan konten awal.

---
*Dikembangkan untuk kemajuan digital Desa Remau Bako Tuo.*
