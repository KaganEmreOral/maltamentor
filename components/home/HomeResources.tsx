import { getTranslations } from 'next-intl/server';
import { getStaticPosts } from '@/lib/static-posts';
import Image from 'next/image';
import { LocaleLink } from '@/components/LocaleLink';
import { HomeButtonLink } from './HomeButtonLink';

type Props = { locale: string };

const FEATURED_SLUGS = ['it-job-market-malta', 'cost-of-living-malta-it', 'weekends-culture-malta'] as const;

export async function HomeResources({ locale }: Props) {
  const t = await getTranslations('home.resources');
  const tBlog = await getTranslations('blog');
  const posts = getStaticPosts(locale).filter((p) =>
    FEATURED_SLUGS.includes(p.slug as (typeof FEATURED_SLUGS)[number])
  );

  return (
    <section className="border-b border-gray-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold text-gray-900 sm:text-3xl">{t('title')}</h2>
        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <LocaleLink
                href={`/blog/${post.slug}`}
                className="block overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative h-44 bg-gray-100">
                  <Image
                    src={post.thumbnailUrl}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 line-clamp-2">{post.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
                  <p className="mt-2 text-sm text-malta-red">{tBlog('readMore')} →</p>
                </div>
              </LocaleLink>
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <HomeButtonLink href="/blog" variant="secondary">
            {t('cta')}
          </HomeButtonLink>
        </div>
      </div>
    </section>
  );
}
