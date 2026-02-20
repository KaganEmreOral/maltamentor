import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Link } from 'next-intl';
import { getPosts } from '@/lib/sanity';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations('blog');
  return { title: t('title'), description: t('subtitle') };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('blog');
  const posts = await getPosts(locale);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">{t('title')}</h1>
        <p className="mt-4 text-lg text-gray-600">{t('subtitle')}</p>
      </div>

      {posts.length === 0 ? (
        <p className="mt-12 text-center text-gray-500">{t('noPosts')}</p>
      ) : (
        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post._id}>
              <Link
                href={`/blog/${post.slug}`}
                className="block overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                {post.mainImage && (
                  <div className="relative h-48 bg-gray-100">
                    <Image
                      src={urlFor(post.mainImage).width(400).height(200).url()}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                )}
                <div className="p-4">
                  <h2 className="font-semibold text-gray-900">{post.title}</h2>
                  {post.excerpt && <p className="mt-1 text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>}
                  <p className="mt-2 text-sm text-malta-red">{t('readMore')} →</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
