import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';

type Props = { params: Promise<{ locale: string }> };

function localeHref(locale: string, path: string) {
  return locale === 'en' ? path : `/${locale}${path}`;
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('home');

  return (
    <>
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden">
        {/* Base: navy → Malta red tint (avoids flat black) */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0b1628] via-[#1a3a5c] to-[#5c1515]"
          aria-hidden
        />
        {/* Malta coastline photo */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1596484552994-0ae9c2bc33f4?q=80&w=2400&auto=format&fit=crop"
            alt=""
            fill
            priority
            className="object-cover opacity-[0.72]"
            sizes="100vw"
          />
        </div>
        {/* Brand watermark (logo / wordmark from public SVG) */}
        <div
          className="pointer-events-none absolute inset-0 bg-[url('/mentor-malta-hero.svg')] bg-center bg-no-repeat opacity-90 [background-size:min(95vw,820px)]"
          aria-hidden
        />
        {/* Readability overlay — lighter than before so sea/sky stay visible */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/40 to-black/55"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white drop-shadow-md">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {t('heroTitle')}
          </h1>
          <Link
            href={localeHref(locale, '/contact')}
            className="mt-10 inline-block rounded-md bg-malta-red px-8 py-4 text-lg font-medium text-white shadow-lg transition-colors hover:bg-malta-red-600"
          >
            {t('heroCta')}
          </Link>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            {t('introTitle')}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            {t('introText')}
          </p>
          <Link
            href={localeHref(locale, '/contact')}
            className="mt-10 inline-block rounded-md bg-malta-red px-8 py-3 text-base font-medium text-white hover:bg-malta-red-600"
          >
            {t('ctaButton')}
          </Link>
        </div>
      </section>
    </>
  );
}
