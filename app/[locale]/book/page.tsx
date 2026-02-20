import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations('book');
  return { title: t('title'), description: t('subtitle') };
}

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com';

export default async function BookPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('book');

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">{t('title')}</h1>
        <p className="mt-4 text-lg text-gray-600">{t('subtitle')}</p>
      </div>

      <div className="mt-10 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <iframe
          src={CALENDLY_URL}
          title="Book a meeting"
          className="h-[700px] w-full min-h-[600px] border-0"
          loading="lazy"
        />
      </div>
    </div>
  );
}
