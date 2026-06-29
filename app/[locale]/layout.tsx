import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import '@/app/globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { LocaleHtml } from '@/components/LocaleHtml';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mentormalta.com';
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: isEn
        ? 'Malta Mentor | IT Careers and Relocation Guidance'
        : 'Malta Mentor | IT Kariyeri ve Taşınma Rehberliği',
      template: `%s | Malta Mentor`,
    },
    description: isEn
      ? 'Practical career and relocation guidance for international IT professionals exploring Malta.'
      : 'Malta’yı değerlendiren uluslararası IT profesyonelleri için pratik kariyer ve taşınma rehberliği.',
    openGraph: {
      type: 'website',
      locale: locale === 'tr' ? 'tr_TR' : 'en_GB',
      siteName: 'Malta Mentor',
      url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://mentormalta.com'}${locale === 'en' ? '' : `/${locale}`}`,
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as 'en' | 'tr')) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <LocaleHtml />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}
