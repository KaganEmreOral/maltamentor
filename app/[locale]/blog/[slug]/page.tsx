import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Link } from 'next-intl';
import { getPostBySlug, getPosts } from '@/lib/sanity';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';
import { notFound } from 'next/navigation';

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  const posts = await getPosts('en', 50);
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: 'Post' };
  return { title: post.title, description: post.excerpt || undefined };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('blog');
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <Link href="/blog" className="text-sm text-malta-red hover:underline">
        ← {t('backToBlog')}
      </Link>
      <h1 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">{post.title}</h1>
      <p className="mt-2 text-sm text-gray-500">
        {t('publishedOn')} {new Date(post.publishedAt).toLocaleDateString(locale)}
      </p>
      {post.mainImage && (
        <div className="relative mt-6 aspect-video overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={urlFor(post.mainImage).width(800).height(450).url()}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
      <div className="prose prose-gray mt-8 max-w-none">
        {post.excerpt && <p className="text-lg text-gray-600">{post.excerpt}</p>}
        {/* Full body from Sanity portable text can be rendered with @portabletext/react when configured */}
      </div>
    </article>
  );
}
