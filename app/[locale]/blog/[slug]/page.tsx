import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { getPostBySlug, getPosts } from '@/lib/sanity';
import { getStaticPostBySlug, SAMPLE_POST_SLUG } from '@/lib/static-posts';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';
import { notFound } from 'next/navigation';
import { SampleArticleContent } from '@/components/SampleArticleContent';

function localeHref(locale: string, path: string) {
  return locale === 'en' ? path : `/${locale}${path}`;
}

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  const sanityPosts = await getPosts('en', 50);
  const slugs = sanityPosts.map((p) => ({ slug: p.slug }));
  slugs.push({ slug: SAMPLE_POST_SLUG });
  return slugs;
}

export async function generateMetadata({ params }: Props) {
  const { slug, locale } = await params;
  const staticPost = getStaticPostBySlug(slug, locale);
  if (staticPost) return { title: staticPost.title, description: staticPost.excerpt };
  const post = await getPostBySlug(slug);
  if (!post) return { title: 'Post' };
  return { title: post.title, description: post.excerpt || undefined };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('blog');
  const staticPost = getStaticPostBySlug(slug, locale);
  const sanityPost = await getPostBySlug(slug);

  if (staticPost) {
    return (
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <Link href={localeHref(locale, '/blog')} className="text-sm text-malta-red hover:underline">
          ← {t('backToBlog')}
        </Link>
        <h1 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">{staticPost.title}</h1>
        <p className="mt-2 text-sm text-gray-500">
          {t('publishedOn')} {new Date(staticPost.publishedAt).toLocaleDateString(locale)}
        </p>
        <SampleArticleContent locale={locale} />
      </article>
    );
  }

  if (!sanityPost) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <Link href={localeHref(locale, '/blog')} className="text-sm text-malta-red hover:underline">
        ← {t('backToBlog')}
      </Link>
      <h1 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">{sanityPost.title}</h1>
      <p className="mt-2 text-sm text-gray-500">
        {t('publishedOn')} {new Date(sanityPost.publishedAt).toLocaleDateString(locale)}
      </p>
      {sanityPost.mainImage && (
        <div className="relative mt-6 aspect-video overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={urlFor(sanityPost.mainImage).width(800).height(450).url()}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
      <div className="prose prose-gray mt-8 max-w-none">
        {sanityPost.excerpt && <p className="text-lg text-gray-600">{sanityPost.excerpt}</p>}
      </div>
    </article>
  );
}
