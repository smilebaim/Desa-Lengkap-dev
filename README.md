# Sistem Informasi Desa - Desa Remau Bako Tuo

Aplikasi Sistem Informasi Desa (SID) modern yang dibangun dengan **Next.js 15 (App Router)**, **Firebase (Firestore, Auth, Storage)**, dan **Shadcn/UI**. Platform ini dirancang untuk mendigitalkan administrasi desa, meningkatkan transparansi dana desa, dan mempermudah layanan publik bagi warga.

![Pratinjau Aplikasi](https://placehold.co/800x400/png?text=SID+Desa+Remau+Bako+Tuo)

## 🌟 Fitur Utama yang Telah Diimplementasikan

### 1. Administrasi & Layanan Publik (Aplikasi Desa)
Modul lengkap untuk manajemen persuratan digital yang terintegrasi dengan database penduduk:
- **Surat Masuk & Keluar**: Pengarsipan surat dengan dukungan unggah lampiran PDF ke Firebase Storage.
- **Surat Keterangan Usaha (SKU)**: Pembuatan surat untuk pelaku UMKM.
- **Surat Keterangan Domisili**: Layanan keterangan tempat tinggal.
- **Surat Kelahiran & Kematian**: Pendataan peristiwa kependudukan.
- **Surat Pengantar Nikah (N1-N4)**: Administrasi pra-nikah.
- **Surat Pindah & Pengantar Umum**: Manajemen mutasi penduduk dan keperluan umum lainnya.

### 2. Manajemen Konten & Navigasi Cerdas
- **Sidebar Otomatis**: Sistem navigasi publik yang cerdas; sidebar akan muncul otomatis di seksi Profil, Layanan, dan Kelembagaan berdasarkan deteksi URL.
- **Editor Halaman Statis**: Kelola konten seperti Sejarah Desa, Visi & Misi secara dinamis melalui dasbor.
- **Visualisasi Data (Placeholder)**: Sisipkan diagram (Piramida Penduduk, Anggaran, IDM) ke dalam halaman hanya dengan menempelkan teks placeholder seperti `[STATISTIK_PENDUDUK_CHART]`.

### 3. Database Kependudukan
- Manajemen data penduduk (CRUD) dengan fitur **Import Massal dari CSV**.
- Fitur **Seeding Data Dummy** untuk memudahkan pengujian sistem pertama kali.

### 4. Peta Interaktif & Tata Ruang
- Kontrol peta berbasis **Leaflet** untuk memetakan batas administrasi desa, fasilitas umum, dan penggunaan lahan.
- Manajemen marker dan poligon langsung dari dashboard admin.

### 5. Transparansi & Statistik
- **Dashboard Analitik**: Pantau jumlah penduduk, artikel berita, dan permintaan surat yang sedang diproses.
- **Statistik IDM**: Visualisasi Indeks Desa Membangun (Sosial, Ekonomi, Lingkungan) dengan grafik gauge dan bar.
- **Transparansi Anggaran**: Grafik sebaran pendapatan dan belanja desa (APBDes).

## 🚀 Teknologi Utama

- **Framework**: Next.js 15 (App Router)
- **Database & Auth**: Firebase Firestore & Authentication
- **Storage**: Firebase Storage (untuk arsip PDF dan gambar)
- **UI Components**: Shadcn/UI (Radix UI) & Tailwind CSS
- **Icons**: Lucide React
- **Charts**: Recharts
- **Maps**: Leaflet

## 🛠️ Cara Memulai

1. **Konfigurasi Firebase**:
   Pastikan file `src/firebase/config.ts` sudah berisi konfigurasi Firebase Project Anda.
2. **Instalasi**:
   ```bash
   npm install
   ```
3. **Menjalankan Server**:
   ```bash
   npm run dev
   ```
4. **Inisialisasi Data**:
   Masuk ke Dashboard, gunakan tombol **"Buat Menu Default"** di menu Kelola Menu dan **"Pulihkan Data Bawaan"** di menu Statistik untuk menyiapkan struktur awal.

## 📁 Repositori
Repositori ini tersedia di: [https://github.com/smilebaim/Desa-Lengkap](https://github.com/smilebaim/Desa-Lengkap)

---
*Dikembangkan dengan ❤️ untuk kemajuan digital Desa Remau Bako Tuo.*
