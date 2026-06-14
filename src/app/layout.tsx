import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { FirebaseClientProvider } from "@/firebase/client-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Desa Remau Bako Tuo",
    template: "%s | Desa Remau Bako Tuo",
  },
  description:
    "Sistem Informasi Desa Remau Bako Tuo — Kabupaten Tanjung Jabung Timur. Informasi profil desa, layanan publik, berita, agenda kegiatan, dan data pembangunan desa.",
  keywords: [
    "Desa Remau Bako Tuo",
    "Tanjung Jabung Timur",
    "sistem informasi desa",
    "layanan publik desa",
    "berita desa",
  ],
  authors: [{ name: "Pemerintah Desa Remau Bako Tuo" }],
  creator: "Pemerintah Desa Remau Bako Tuo",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Desa Remau Bako Tuo",
    title: "Desa Remau Bako Tuo",
    description:
      "Sistem Informasi Desa Remau Bako Tuo — Kabupaten Tanjung Jabung Timur.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Desa Remau Bako Tuo",
    description:
      "Sistem Informasi Desa Remau Bako Tuo — Kabupaten Tanjung Jabung Timur.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FirebaseClientProvider>
          <TooltipProvider>
            {children}
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
