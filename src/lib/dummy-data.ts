/**
 * dummy-data.ts
 *
 * Data dummy lokal untuk mode development (NEXT_PUBLIC_DEV_MODE=true).
 * Tidak memerlukan koneksi Firebase / Firestore.
 *
 * Untuk mematikan: set NEXT_PUBLIC_DEV_MODE=false di .env.local
 */

import type { Menu, MenuItem } from './menu-data';
import type { SiteSettings } from './site-settings-actions';
import type { PostData } from './posts-actions';

// ─── Site Settings ────────────────────────────────────────────────────────────
export const DUMMY_SITE_SETTINGS: SiteSettings = {
  logoUrl: '/logo-desa.png',
  heroUrl: '/Background utama.png',
  heroTitle: 'SELAMAT DATANG DI LAMAN INFORMASI',
  heroSubtitle: 'DESA REMAU BAKO TUO',
  heroDescription:
    'Laman ini merupakan pengembangan Sistem Informasi Desa untuk menampilkan layanan publik dan meningkatkan peran masyarakat dalam mendukung program pembangunan desa yang lebih partisipatif dan berkelanjutan',
  updatedAt: null,
};

// ─── Menu Items Helper ────────────────────────────────────────────────────────
const makeItem = (
  id: string,
  title: string,
  path: string,
  icon: string,
  order: number,
  parentId: string | null = null
): MenuItem => ({ id, title, path, icon, order, parentId });

// ─── Top Nav Menu ─────────────────────────────────────────────────────────────
const topNavItems: MenuItem[] = [
  makeItem('tn-profil', 'Profil', '/profil', 'User', 0),
  makeItem('tn-layanan', 'Layanan Publik', '/layanan', 'Briefcase', 1),
  makeItem('tn-kelembagaan', 'Kelembagaan', '/kelembagaan', 'Library', 2),
  makeItem('tn-ekonomi', 'Ekonomi', '/ekonomi', 'TrendingUp', 3),
  makeItem('tn-aktivitas', 'Aktivitas', '/aktivitas', 'Activity', 4),
  makeItem('tn-aktivitas-agenda', 'Agenda Kegiatan', '/aktivitas/agenda', 'ChevronRight', 0, 'tn-aktivitas'),
  makeItem('tn-aktivitas-kalender', 'Kalender Kegiatan', '/aktivitas/kalender-kegiatan', 'ChevronRight', 1, 'tn-aktivitas'),
  makeItem('tn-aktivitas-pangan', 'Kalender Pangan', '/aktivitas/kalender-pangan', 'ChevronRight', 2, 'tn-aktivitas'),
  makeItem('tn-pustaka', 'Pustaka', '/pustaka', 'BookOpen', 5),
];

export const DUMMY_TOPNAV_MENU: Menu = {
  id: 'dummy-topnav',
  name: 'Menu Utama',
  description: 'Menu navigasi utama.',
  location: 'topnav',
  items: topNavItems,
  createdAt: new Date().toISOString(),
};

// ─── Bottom Nav Menu ──────────────────────────────────────────────────────────
const bottomNavItems: MenuItem[] = [
  makeItem('bn-peta', 'Peta', '/tata-ruang', 'Map', 0),
  makeItem('bn-pembangunan', 'Pembangunan', '/pembangunan', 'Construction', 1),
  makeItem('bn-dana', 'Dana Desa', '/dana-desa', 'Wallet', 2),
  makeItem('bn-indeks', 'Indeks', '/indeks', 'BarChart3', 3),
];

export const DUMMY_BOTTOMNAV_MENU: Menu = {
  id: 'dummy-bottomnav',
  name: 'Navigasi Bawah',
  description: 'Menu utama di bagian bawah layar.',
  location: 'bottomnav',
  items: bottomNavItems,
  createdAt: new Date().toISOString(),
};

// ─── Sidebar Menus ────────────────────────────────────────────────────────────
const profilSidebarItems: MenuItem[] = [
  makeItem('sb-profil-desa', 'Profil Desa', '/profil/profil-desa', 'ChevronRight', 0),
  makeItem('sb-sejarah', 'Sejarah Desa', '/sejarah-desa', 'ChevronRight', 1),
  makeItem('sb-visi-misi', 'Visi & Misi', '/visi-misi', 'ChevronRight', 2),
  makeItem('sb-struktur-pemdes', 'Struktur Pemerintahan', '/struktur-pemerintahan', 'ChevronRight', 3),
  makeItem('sb-struktur-bpd', 'Struktur BPD', '/struktur-badan', 'ChevronRight', 4),
];

export const DUMMY_PROFIL_SIDEBAR: Menu = {
  id: 'dummy-sidebar-profil',
  name: 'Profil Desa',
  description: 'Menu khusus untuk halaman profil.',
  location: 'sidebar',
  icon: 'Landmark',
  items: profilSidebarItems,
  createdAt: new Date().toISOString(),
};

// ─── All Menus Combined ───────────────────────────────────────────────────────
export const DUMMY_ALL_MENUS: Menu[] = [
  DUMMY_TOPNAV_MENU,
  DUMMY_BOTTOMNAV_MENU,
  DUMMY_PROFIL_SIDEBAR,
];

// ─── Published Posts ──────────────────────────────────────────────────────────
export const DUMMY_POSTS: (PostData & { id: string })[] = [
  {
    id: 'dummy-post-1',
    title: 'Pembangunan Jalan Usaha Tani di Dusun Harapan',
    content:
      'Pemerintah Desa Remau Bako Tuo telah menyelesaikan pembangunan jalan usaha tani sepanjang 500 meter di Dusun Harapan. Pembangunan ini diharapkan dapat mempermudah akses petani dalam mengangkut hasil panen dan meningkatkan perekonomian warga. Jalan yang sebelumnya berupa tanah kini telah diperkeras dengan beton, sehingga dapat dilalui kendaraan roda empat.',
    category: 'Berita',
    status: 'Published',
    author: 'Admin Desa',
    userId: 'dummy-user',
    views: 120,
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: null,
  },
  {
    id: 'dummy-post-2',
    title: 'Jadwal Posyandu Balita Bulan Mei 2025',
    content:
      'Diberitahukan kepada seluruh warga yang memiliki balita, jadwal Posyandu untuk bulan Mei akan dilaksanakan pada:\n\nHari/Tanggal: Sabtu, 17 Mei 2025\nWaktu: 09:00 WIB - Selesai\nTempat: Balai Desa\n\nKegiatan meliputi penimbangan berat badan, pengukuran tinggi badan, dan pemberian vitamin A. Diharapkan para ibu dapat membawa balitanya sesuai jadwal.',
    category: 'Pengumuman',
    status: 'Published',
    author: 'Admin Desa',
    userId: 'dummy-user',
    views: 85,
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: null,
  },
  {
    id: 'dummy-post-3',
    title: 'Pelatihan Pembuatan Kompos untuk Kelompok Tani',
    content:
      'Dalam rangka mendukung pertanian berkelanjutan, akan diadakan pelatihan pembuatan kompos dari limbah organik. Pelatihan ini akan diselenggarakan pada tanggal 25 Mei 2025 di Balai Desa. Warga yang berminat dapat mendaftarkan diri ke kantor desa sebelum tanggal 22 Mei 2025.',
    category: 'Berita',
    status: 'Published',
    author: 'Admin Desa',
    userId: 'dummy-user',
    views: 43,
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: null,
  },
];
