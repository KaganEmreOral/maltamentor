import { routing } from '@/i18n/routing';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mentormalta.com';

export default function sitemap() {
  const paths = [
    '',
    '/about',
    '/packages',
    '/blog',
    '/contact',
    '/career-fit',
    '/privacy',
    '/terms',
    '/blog/it-job-market-malta',
    '/blog/cost-of-living-malta-it',
    '/blog/weekends-culture-malta',
  ];
  const entries: { url: string; lastModified: string; changeFrequency: 'weekly' | 'daily' | 'monthly'; priority: number }[] = [];

  for (const locale of routing.locales) {
    const prefix = locale === routing.defaultLocale ? '' : `/${locale}`;
    for (const path of paths) {
      entries.push({
        url: `${baseUrl}${prefix}${path}`,
        lastModified: new Date().toISOString(),
        changeFrequency: path === '/blog' ? 'daily' : 'monthly',
        priority: path === '' ? 1 : 0.8,
      });
    }
  }

  return entries;
}
