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
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-gray-900">
        <Image
          src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=2070&q=80"
          alt=""
          fill
          className="object-cover opacity-60"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
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
