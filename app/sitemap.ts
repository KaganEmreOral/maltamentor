import { routing } from '@/i18n/routing';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mentormalta.com';

export default function sitemap() {
  const paths = ['', '/about', '/packages', '/blog', '/contact', '/privacy', '/terms', '/blog/it-job-market-malta'];
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
