import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { CareerFitQuiz } from '@/components/career-fit/CareerFitQuiz';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'careerFit.meta' });
  return { title: t('title'), description: t('description') };
}

export default async function CareerFitPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('careerFit');

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">{t('title')}</h1>
        <p className="mt-4 text-lg text-gray-600">{t('subtitle')}</p>
        <p className="mt-4 text-sm leading-relaxed text-gray-600">{t('intro')}</p>
        <p className="mt-3 text-sm text-gray-500">{t('note')}</p>
      </header>
      <CareerFitQuiz />
    </div>
  );
}
