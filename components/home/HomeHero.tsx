import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { HomeButtonLink } from './HomeButtonLink';

export async function HomeHero() {
  const t = await getTranslations('home.hero');
  const tFounder = await getTranslations('home.founder');

  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24 lg:px-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-[2.75rem] lg:leading-tight">
            {t('title')}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">{t('subtitle')}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <HomeButtonLink href="/career-fit">{t('ctaPrimary')}</HomeButtonLink>
            <HomeButtonLink href="/packages" variant="secondary">
              {t('ctaSecondary')}
            </HomeButtonLink>
          </div>
          <p className="mt-6 text-sm text-gray-500">{t('trustNote')}</p>
        </div>

        {/* TODO: Replace /founder-placeholder.svg with /founder.jpg when a real founder photo is available */}
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm lg:max-w-md">
          <Image
            src="/founder-placeholder.svg"
            alt={tFounder('photoAlt')}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 80vw, 400px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
