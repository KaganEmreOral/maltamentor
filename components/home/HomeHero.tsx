import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { HomeButtonLink } from './HomeButtonLink';

/** Local hero visual — see TODO below for final licensed photograph. */
const HERO_IMAGE_SRC = '/images/malta-career-hero.svg';

export async function HomeHero() {
  const t = await getTranslations('home.hero');

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

        {/* TODO: Replace with a properly licensed photograph at /images/malta-career-hero.jpg (Valletta harbour, skyline or urban Malta). */}
        <div className="relative mx-auto aspect-[16/10] w-full max-w-xl overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-sm">
          <Image
            src={HERO_IMAGE_SRC}
            alt={t('imageAlt')}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 560px"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
