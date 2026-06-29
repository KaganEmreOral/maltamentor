import { getTranslations } from 'next-intl/server';
import { HomeButtonLink } from './HomeButtonLink';

type PackageItem = {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  popular?: boolean;
};

export async function HomePackages() {
  const t = await getTranslations('home.packages');
  const tPackages = await getTranslations('packages');
  const items = t.raw('items') as PackageItem[];

  return (
    <section id="packages" className="border-b border-gray-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">{t('title')}</h2>
          <p className="mt-4 text-gray-600">{t('subtitle')}</p>
        </div>
        <ul className="mt-12 grid gap-8 lg:grid-cols-3">
          {items.map((pkg) => {
            const isComingSoon = pkg.price === 'Coming Soon' || pkg.price === 'Yakında';
            return (
              <li
                key={pkg.name}
                className={`relative flex flex-col rounded-xl border bg-white p-6 shadow-sm ${
                  pkg.popular ? 'border-malta-red ring-2 ring-malta-red' : 'border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-malta-red px-3 py-0.5 text-xs font-medium text-white">
                    {tPackages('popular')}
                  </span>
                )}
                <h3 className="text-lg font-semibold text-gray-900">{pkg.name}</h3>
                <p className="mt-2 text-2xl font-bold text-gray-900">
                  {isComingSoon ? t('comingSoon') : pkg.price}
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
                <HomeButtonLink
                  href={pkg.href}
                  variant={pkg.popular ? 'primary' : 'secondary'}
                  className="mt-6 w-full text-center"
                >
                  {pkg.cta}
                </HomeButtonLink>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
