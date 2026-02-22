import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

type Props = { params: Promise<{ locale: string }> };

function localeHref(locale: string, path: string) {
  return locale === 'en' ? path : `/${locale}${path}`;
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations('packages');
  return { title: t('title'), description: t('subtitle') };
}

export default async function PackagesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('packages');

  const p1Features = t.raw('p1Features') as string[];
  const p2Features = t.raw('p2Features') as string[];
  const p3Features = t.raw('p3Features') as string[];

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">{t('title')}</h1>
        <p className="mt-4 text-lg text-gray-600">{t('subtitle')}</p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        <div className="relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">{t('p1Name')}</h3>
          <p className="mt-2 text-2xl font-bold text-gray-900">{t('p1Price')}</p>
          <ul className="mt-6 space-y-2 text-sm text-gray-600">
            {p1Features.map((f) => (
              <li key={f}>✓ {f}</li>
            ))}
          </ul>
          <Link
            href={localeHref(locale, '/contact')}
            className="mt-6 block w-full rounded-md border border-gray-300 bg-white py-2.5 text-center text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            {t('requestCta')}
          </Link>
        </div>

        <div className="relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">{t('p2Name')}</h3>
          <p className="mt-2 text-2xl font-bold text-gray-900">{t('p2Price')}</p>
          <ul className="mt-6 space-y-2 text-sm text-gray-600">
            {p2Features.map((f) => (
              <li key={f}>✓ {f}</li>
            ))}
          </ul>
          <Link
            href={localeHref(locale, '/contact')}
            className="mt-6 block w-full rounded-md border border-gray-300 bg-white py-2.5 text-center text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            {t('requestCta')}
          </Link>
        </div>

        <div className="relative rounded-xl border-2 border-malta-red bg-white p-6 shadow-sm ring-2 ring-malta-red">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-malta-red px-3 py-0.5 text-xs font-medium text-white">
            {t('popular')}
          </span>
          <h3 className="text-lg font-semibold text-gray-900">{t('p3Name')}</h3>
          <p className="mt-2 text-2xl font-bold text-gray-900">{t('p3Price')}</p>
          <ul className="mt-6 space-y-2 text-sm text-gray-600">
            {p3Features.map((f) => (
              <li key={f}>✓ {f}</li>
            ))}
          </ul>
          <Link
            href={localeHref(locale, '/contact')}
            className="mt-6 block w-full rounded-md bg-malta-red py-2.5 text-center text-sm font-medium text-white hover:bg-malta-red-600"
          >
            {t('requestCta')}
          </Link>
        </div>
      </div>
    </div>
  );
}
