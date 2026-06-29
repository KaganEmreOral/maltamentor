import { getTranslations } from 'next-intl/server';
import { HomeButtonLink } from './HomeButtonLink';

export async function HomeCareerFit() {
  const t = await getTranslations('home.careerFit');

  return (
    <section className="border-b border-gray-200 bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">{t('title')}</h2>
        <p className="mt-4 text-lg leading-relaxed text-gray-600">{t('text')}</p>
        <div className="mt-8">
          <HomeButtonLink href="/career-fit">{t('cta')}</HomeButtonLink>
        </div>
        <p className="mt-4 text-sm text-gray-500">{t('note')}</p>
      </div>
    </section>
  );
}
