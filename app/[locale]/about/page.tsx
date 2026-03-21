import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations('about');
  return {
    title: t('title'),
    description: t('introShort'),
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('about');

  const paragraphs = t.raw('story') as string[];
  const services = [t('service1'), t('service2'), t('service3'), t('service4'), t('service5')];

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">{t('title')}</h1>
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-gray-600">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
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
