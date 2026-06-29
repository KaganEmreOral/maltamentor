import { getTranslations } from 'next-intl/server';
import { HomeButtonLink } from './HomeButtonLink';

export async function HomeFinalCta() {
  const t = await getTranslations('home.finalCta');

  return (
    <section className="bg-gray-900 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold sm:text-3xl">{t('title')}</h2>
        <p className="mt-4 text-lg leading-relaxed text-gray-300">{t('text')}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <HomeButtonLink href="/contact">{t('ctaPrimary')}</HomeButtonLink>
          <HomeButtonLink href="/blog" variant="outline">
            {t('ctaSecondary')}
          </HomeButtonLink>
        </div>
      </div>
    </section>
  );
}
