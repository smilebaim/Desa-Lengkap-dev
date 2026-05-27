# Sistem Informasi Desa - Desa Remau Bako Tuo

Aplikasi Sistem Informasi Desa (SID) modern yang dibangun dengan **Next.js 15 (App Router)**, **Firebase (Firestore, Auth, Storage)**, dan **Shadcn/UI**. Platform ini dirancang untuk mendigitalkan administrasi desa, meningkatkan transparansi dana desa, dan mempermudah layanan publik bagi warga.

![Pratinjau Aplikasi](https://placehold.co/800x400/png?text=SID+Desa+Remau+Bako+Tuo)

## 🌟 Fitur Unggulan

### 1. Administrasi & Layanan Publik (Aplikasi Desa)
Modul lengkap untuk manajemen persuratan digital yang terintegrasi dengan database penduduk:
- **Surat Masuk & Keluar**: Pengarsipan surat dengan dukungan unggah lampiran PDF ke Firebase Storage.
- **Surat Keterangan Usaha (SKU)**: Pembuatan surat untuk pelaku UMKM.
- **Surat Keterangan Domisili**: Layanan keterangan tempat tinggal.
- **Surat Kelahiran & Kematian**: Pendataan peristiwa kependudukan.
- **Surat Pengantar Nikah (N1-N4)**: Administrasi pra-nikah.
- **Surat Pindah & Pengantar Umum**: Manajemen mutasi penduduk dan keperluan umum lainnya.

### 2. Manajemen Konten & Navigasi Cerdas
- **Sidebar Kontekstual Otomatis**: Navigasi yang cerdas; sidebar akan muncul secara otomatis di seksi Profil, Layanan, dan Kelembagaan berdasarkan deteksi URL halaman yang sedang dibuka.
- **Editor Halaman Dinamis**: Kelola konten seperti Sejarah Desa, Visi & Misi secara dinamis melalui dashboard admin tanpa menyentuh kode.
- **Visualisasi Data Placeholder**: Sisipkan diagram (Piramida Penduduk, Anggaran, IDM) ke dalam halaman hanya dengan menempelkan teks placeholder seperti `[STATISTIK_PENDUDUK_CHART]`.

### 3. Database Kependudukan
- Manajemen data penduduk (CRUD) dengan fitur **Import Massal dari CSV**.
- Fitur **Seeding Data Dummy** untuk memudahkan pengujian sistem pertama kali.

### 4. Peta Interaktif & Tata Ruang
- Kontrol peta berbasis **Leaflet** untuk memetakan batas administrasi desa, fasilitas umum, dan penggunaan lahan.
- Manajemen marker dan poligon langsung dari dashboard admin.

### 5. Transparansi & Statistik
- **Dashboard Analitik**: Pantau jumlah penduduk, artikel berita, dan permintaan surat yang sedang diproses.
- **Statistik IDM**: Visualisasi Indeks Desa Membangun (Sosial, Ekonomi, Lingkungan) dengan grafik gauge dan bar yang informatif.
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

1.  **Klon Repositori**:
    ```bash
    git clone https://github.com/smilebaim/Desa-Lengkap.git
    cd Desa-Lengkap
    ```
2.  **Instalasi Dependensi**:
    ```bash
    npm install
    ```
3.  **Konfigurasi Firebase**:
    Pastikan file `src/firebase/config.ts` sudah berisi konfigurasi Firebase Project Anda.
4.  **Menjalankan Server**:
    ```bash
    npm run dev
    ```
5.  **Inisialisasi Data**:
    Masuk ke Dashboard Admin, gunakan tombol **"Buat Menu Default"** di menu Kelola Menu dan **"Pulihkan Data Bawaan"** di menu Statistik untuk menyiapkan struktur awal.

---
*Dikembangkan dengan ❤️ untuk kemajuan digital Desa Remau Bako Tuo.*
