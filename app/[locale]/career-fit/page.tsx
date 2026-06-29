import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import { CareerFitEmailForm } from '@/components/CareerFitEmailForm';

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
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">{t('title')}</h1>
        <p className="mt-4 text-lg text-gray-600">{t('subtitle')}</p>
        <p className="mt-6 text-gray-600 leading-relaxed">{t('intro')}</p>
        <p className="mt-4 text-sm text-gray-500">{t('note')}</p>
      </div>
      <CareerFitEmailForm />
    </div>
  );
}
