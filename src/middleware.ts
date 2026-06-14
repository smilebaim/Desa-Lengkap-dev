import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware Next.js yang berjalan di Edge Runtime (sangat cepat).
 * Memproteksi route /dashboard agar hanya bisa diakses setelah login.
 *
 * Cara kerja:
 * - Saat login berhasil → set cookie 'auth-session' di browser
 * - Saat logout → hapus cookie 'auth-session'
 * - Middleware cek cookie ini sebelum render halaman apapun
 *
 * Catatan: Keamanan data sesungguhnya diterapkan melalui Firestore Security Rules.
 * Middleware ini memberikan perlindungan UX-level (mencegah flash konten dashboard).
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const authSession = request.cookies.get('auth-session');
  const isAuthenticated = !!authSession?.value;

  const isDashboardRoute = pathname.startsWith('/dashboard');
  const isLoginRoute = pathname === '/login';

  // Proteksi dashboard: redirect ke /login jika belum auth
  if (isDashboardRoute && !isAuthenticated) {
    const loginUrl = new URL('/login', request.url);
    // Simpan tujuan awal untuk redirect balik setelah login
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Jika sudah auth dan akses /login, redirect ke dashboard
  if (isLoginRoute && isAuthenticated) {
    const redirectTo = request.nextUrl.searchParams.get('redirect') || '/dashboard';
    return NextResponse.redirect(new URL(redirectTo, request.url));
  }

  return NextResponse.next();
}

// Tentukan route mana yang diproses middleware ini
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/login',
  ],
};
