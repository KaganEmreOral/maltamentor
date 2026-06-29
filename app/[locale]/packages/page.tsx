import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { LocaleLink } from '@/components/LocaleLink';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations('packages');
  return { title: t('title'), description: t('subtitle') };
}

export default async function PackagesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('packages');

  const packages = [
    {
      name: t('p1Name'),
      price: t('p1Price'),
      description: t('p1Description'),
      features: t.raw('p1Features') as string[],
      cta: t('p1Cta'),
      popular: false,
      comingSoon: false,
    },
    {
      name: t('p2Name'),
      price: t('p2Price'),
      description: t('p2Description'),
      features: t.raw('p2Features') as string[],
      cta: t('p2Cta'),
      popular: true,
      comingSoon: false,
    },
    {
      name: t('p3Name'),
      price: t('p3Price'),
      description: t('p3Description'),
      features: t.raw('p3Features') as string[],
      cta: t('p3Cta'),
      popular: false,
      comingSoon: true,
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">{t('title')}</h1>
        <p className="mt-4 text-lg text-gray-600">{t('subtitle')}</p>
      </div>

      <ul className="mt-12 grid gap-8 lg:grid-cols-3">
        {packages.map((pkg) => (
          <li
            key={pkg.name}
            className={`relative flex flex-col rounded-xl border bg-white p-6 shadow-sm ${
              pkg.popular ? 'border-malta-red ring-2 ring-malta-red' : 'border-gray-200'
            }`}
          >
            {pkg.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-malta-red px-3 py-0.5 text-xs font-medium text-white">
                {t('popular')}
              </span>
            )}
            <h2 className="text-lg font-semibold text-gray-900">{pkg.name}</h2>
            <p className="mt-2 text-2xl font-bold text-gray-900">
              {pkg.comingSoon ? t('comingSoon') : pkg.price}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">{pkg.description}</p>
            <ul className="mt-6 flex-1 space-y-2 text-sm text-gray-600">
              {pkg.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="text-malta-red" aria-hidden>
                    ✓
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <LocaleLink
              href="/contact"
              className={`mt-6 block w-full rounded-md py-2.5 text-center text-sm font-medium transition-colors ${
                pkg.popular
                  ? 'bg-malta-red text-white hover:bg-malta-red-600'
                  : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {pkg.cta}
            </LocaleLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
