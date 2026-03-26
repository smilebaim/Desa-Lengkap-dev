'use client';
import Hero from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { recentPosts } from '@/lib/placeholder-images.json';
import type { SiteSettings } from "@/lib/site-settings-actions";

const LandingPage = ({ settings }: { settings: SiteSettings | null }) => {
  return (
    <div className="flex-1">
      <Hero 
        heroUrl={settings?.heroUrl} 
        heroTitle={settings?.heroTitle}
        heroSubtitle={settings?.heroSubtitle}
        heroDescription={settings?.heroDescription}
      />
      
      <section className="py-12 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Info & Berita Terkini</h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Ikuti perkembangan terbaru dari Desa Remau Bako Tuo.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden flex flex-col group">
                <div className="relative aspect-video">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={post.imageHint}
                  />
                </div>
                <CardHeader>
                  <CardDescription>{post.category}</CardDescription>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button asChild variant="link" className="p-0">
                    <Link href={`/info/${post.id}`}>
                      Baca Selengkapnya <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/info">Lihat Semua Berita</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
