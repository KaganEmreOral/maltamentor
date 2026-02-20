import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Link } from 'next-intl';

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('home');

  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              {t('heroTitle')}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              {t('heroSubtitle')}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/book"
                className="rounded-md bg-malta-red px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-malta-red-600"
              >
                {t('heroCta')}
              </Link>
              <Link
                href="/packages"
                className="rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50"
              >
                {t('heroSecondary')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold text-gray-900 sm:text-3xl">
            {t('featuresTitle')}
          </h2>
          <ul className="mt-12 grid gap-8 sm:grid-cols-3">
            <li className="rounded-lg bg-white p-6 shadow-sm">
              <div className="h-10 w-10 rounded-md bg-malta-red/10 flex items-center justify-center">
                <span className="text-malta-red text-lg font-bold">1</span>
              </div>
              <p className="mt-4 text-gray-600">{t('features.one')}</p>
            </li>
            <li className="rounded-lg bg-white p-6 shadow-sm">
              <div className="h-10 w-10 rounded-md bg-malta-red/10 flex items-center justify-center">
                <span className="text-malta-red text-lg font-bold">2</span>
              </div>
              <p className="mt-4 text-gray-600">{t('features.two')}</p>
            </li>
            <li className="rounded-lg bg-white p-6 shadow-sm">
              <div className="h-10 w-10 rounded-md bg-malta-red/10 flex items-center justify-center">
                <span className="text-malta-red text-lg font-bold">3</span>
              </div>
              <p className="mt-4 text-gray-600">{t('features.three')}</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">{t('ctaTitle')}</h2>
          <p className="mt-2 text-gray-600">{t('ctaText')}</p>
          <Link
            href="/book"
            className="mt-6 inline-block rounded-md bg-malta-red px-6 py-3 text-base font-medium text-white hover:bg-malta-red-600"
          >
            {t('ctaButton')}
          </Link>
        </div>
      </section>
    </>
  );
}
