import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations('about');
  return {
    title: t('title'),
    description: t('intro'),
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('about');

  const services = [t('service1'), t('service2'), t('service3'), t('service4'), t('service5')];

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="flex flex-col gap-10 md:flex-row md:items-start">
        <div className="shrink-0">
          <div className="h-48 w-48 rounded-xl bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
            Profile photo
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">{t('title')}</h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">{t('intro')}</p>
        </div>
      </div>

      <div className="mt-12 rounded-xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-gray-900">{t('servicesTitle')}</h2>
        <ul className="mt-4 space-y-3">
          {services.map((service) => (
            <li key={service} className="flex items-center gap-2 text-gray-700">
              <span className="h-2 w-2 shrink-0 rounded-full bg-malta-red" />
              {service}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
