import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations('about');
  return {
    title: t('title'),
    description: t('subtitle'),
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('about');

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">{t('title')}</h1>
      <p className="mt-4 text-lg text-gray-600">{t('subtitle')}</p>

      <div className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-malta-red">{t('mission')}</h2>
        <p className="mt-2 text-gray-600">{t('missionText')}</p>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-semibold text-gray-900">{t('values')}</h2>
        <ul className="mt-4 space-y-3">
          <li className="flex items-center gap-2 text-gray-600">
            <span className="h-2 w-2 rounded-full bg-malta-red" />
            {t('value1')}
          </li>
          <li className="flex items-center gap-2 text-gray-600">
            <span className="h-2 w-2 rounded-full bg-malta-red" />
            {t('value2')}
          </li>
          <li className="flex items-center gap-2 text-gray-600">
            <span className="h-2 w-2 rounded-full bg-malta-red" />
            {t('value3')}
          </li>
        </ul>
      </div>
    </div>
  );
}
