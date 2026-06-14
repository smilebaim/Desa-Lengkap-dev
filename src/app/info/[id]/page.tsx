import PublicLayout from "@/layouts/PublicLayout";
import { getPost, getPublishedPosts, incrementPostView } from "@/lib/posts-actions";
import { notFound } from 'next/navigation';
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

type Props = { params: Promise<{ id: string }> };

// Pre-generate semua halaman post saat build time (ISR di Vercel)
export async function generateStaticParams() {
    try {
        const posts = await getPublishedPosts();
        return posts.map((post) => ({ id: post.id }));
    } catch {
        return [];
    }
}

// Metadata dinamis per post untuk SEO & Open Graph
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const post = await getPost(id);

    if (!post || post.status !== 'Published') {
        return { title: 'Berita Tidak Ditemukan' };
    }

    const description = post.content.slice(0, 160).replace(/\n/g, ' ');

    return {
        title: post.title,
        description,
        openGraph: {
            title: post.title,
            description,
            type: 'article',
            publishedTime: post.createdAt ?? undefined,
            authors: [post.author],
        },
        twitter: {
            card: 'summary',
            title: post.title,
            description,
        },
    };
}

export default async function PostDetailPage({ params }: Props) {
    const { id } = await params;

    if (!id) {
        notFound();
    }

    const post = await getPost(id);

    if (!post || post.status !== 'Published') {
        notFound();
    }

    incrementPostView(id);

    return (
        <PublicLayout>
             <div className="container mx-auto px-4 py-8 mt-24 mb-20">
                <article className="prose lg:prose-xl max-w-4xl mx-auto">
                    <div className="mb-8 border-b pb-4">
                         <Badge className="mb-4">
                            {post.category}
                        </Badge>
                        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{post.title}</h1>
                        <p className="text-muted-foreground">
                            Ditulis oleh {post.author} pada {post.createdAt ? new Date(post.createdAt).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }) : ''}
                        </p>
                    </div>
                    <div className="whitespace-pre-wrap text-foreground/90 leading-relaxed">
                        {post.content}
                    </div>
                </article>
             </div>
        </PublicLayout>
    );
}
