import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { HomeHero } from '@/components/home/HomeHero';
import { HomeWhoFor } from '@/components/home/HomeWhoFor';
import { HomeHowHelps } from '@/components/home/HomeHowHelps';
import { HomeFounder } from '@/components/home/HomeFounder';
import { HomePackages } from '@/components/home/HomePackages';
import { HomeCareerFit } from '@/components/home/HomeCareerFit';
import { HomeResources } from '@/components/home/HomeResources';
import { HomeFinalCta } from '@/components/home/HomeFinalCta';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home.meta' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HomeHero />
      <HomeWhoFor />
      <HomeHowHelps />
      <HomeFounder />
      <HomePackages />
      <HomeCareerFit />
      <HomeResources locale={locale} />
      <HomeFinalCta />
    </>
  );
}
