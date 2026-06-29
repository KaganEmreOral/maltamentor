'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useState } from 'react';
import { LocaleLink } from './LocaleLink';
import { Link, usePathname } from '@/i18n/navigation';

const navLinks = [
  { key: 'home', href: '/' },
  { key: 'mentorship', href: '/packages' },
  { key: 'resources', href: '/blog' },
  { key: 'about', href: '/about' },
  { key: 'contact', href: '/contact' },
] as const;

export function Navbar() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const locale = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);

  const pathForActive = pathname || '/';
  const switchLocale = locale === 'en' ? 'tr' : 'en';
  const switchLabel = locale === 'en' ? 'TR' : 'EN';

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <LocaleLink href="/" className="flex items-center gap-2 font-semibold text-malta-red">
          <span className="text-xl tracking-tight">{t('brand')}</span>
        </LocaleLink>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map(({ key, href }) => {
            const isActive =
              pathForActive === href || (href !== '/' && pathForActive.startsWith(href));
            return (
              <LocaleLink
                key={key}
                href={href}
                className={`text-sm font-medium transition-colors ${
                  isActive ? 'text-malta-red' : 'text-gray-600 hover:text-malta-red'
                }`}
              >
                {t(key)}
              </LocaleLink>
            );
          })}
          <LocaleLink
            href="/career-fit"
            className="rounded-md bg-malta-red px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-malta-red-600"
          >
            {t('careerFitCta')}
          </LocaleLink>
          <Link
            href={pathname}
            locale={switchLocale}
            className="rounded-md border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:border-malta-red hover:text-malta-red"
          >
            {switchLabel}
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map(({ key, href }) => (
              <LocaleLink
                key={key}
                href={href}
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-malta-red"
                onClick={() => setMobileOpen(false)}
              >
                {t(key)}
              </LocaleLink>
            ))}
            <LocaleLink
              href="/career-fit"
              className="mt-2 rounded-md bg-malta-red px-3 py-2 text-center text-sm font-medium text-white"
              onClick={() => setMobileOpen(false)}
            >
              {t('careerFitCta')}
            </LocaleLink>
            <Link
              href={pathname}
              locale={switchLocale}
              className="rounded-md border border-gray-300 px-3 py-2 text-center text-sm font-medium text-gray-700"
              onClick={() => setMobileOpen(false)}
            >
              {switchLabel}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
