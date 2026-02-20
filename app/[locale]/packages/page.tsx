import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { Link } from 'next-intl/navigation';

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
    { name: 'Starter', price: 75, popular: false },
    { name: 'Growth', price: 120, popular: true },
    { name: 'Premium', price: 180, popular: false },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">{t('title')}</h1>
        <p className="mt-4 text-lg text-gray-600">{t('subtitle')}</p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className={`relative rounded-xl border bg-white p-6 shadow-sm ${
              pkg.popular ? 'border-malta-red ring-2 ring-malta-red' : 'border-gray-200'
            }`}
          >
            {pkg.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-malta-red px-3 py-0.5 text-xs font-medium text-white">
                {t('popular')}
              </span>
            )}
            <h3 className="text-lg font-semibold text-gray-900">{pkg.name}</h3>
            <p className="mt-2">
              <span className="text-3xl font-bold text-gray-900">€{pkg.price}</span>
              <span className="text-gray-500"> {t('perSession')}</span>
            </p>
            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              <li>✓ {t('feature1')}</li>
              <li>✓ {t('feature2')}</li>
              <li>✓ {t('feature3')}</li>
              {pkg.popular && <li>✓ {t('feature4')}</li>}
            </ul>
            <Link
              href="/book"
              className={`mt-6 block w-full rounded-md py-2.5 text-center text-sm font-medium ${
                pkg.popular
                  ? 'bg-malta-red text-white hover:bg-malta-red-600'
                  : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {t('bookNow')}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
