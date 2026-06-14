import { redirect } from 'next/navigation';

// Redirect /berita → /info (juga dikonfigurasi di next.config.js untuk performa HTTP-level)
export default function BeritaPage() {
  redirect('/info');
}
