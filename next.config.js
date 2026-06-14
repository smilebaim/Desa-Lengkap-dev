/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  // HTTP-level redirects — jauh lebih efisien dari useEffect + router.replace
  async redirects() {
    return [
      {
        source: '/berita',
        destination: '/info',
        permanent: true,
      },
      {
        source: '/berita/:path*',
        destination: '/info/:path*',
        permanent: true,
      },
      {
        // Redirect URL lama ke URL baru yang sudah di-rename
        source: '/profil-desa',
        destination: '/profil/profil-desa',
        permanent: true,
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
      {
        // Firebase Storage untuk gambar yang diupload
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/**",
      },
      {
        // Firebase Storage alternatif
        protocol: "https",
        hostname: "storage.googleapis.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;

