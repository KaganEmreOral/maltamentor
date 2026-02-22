'use client';

import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { LocaleLink } from './LocaleLink';
import Link from 'next/link';

const navLinks = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  { key: 'packages', href: '/packages' },
  { key: 'blog', href: '/blog' },
  { key: 'contact', href: '/contact' },
] as const;

const defaultLocale = 'en';

export function Navbar() {
  const t = useTranslations('nav');
  const fullPathname = usePathname();
  const locale = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);

  const pathWithoutLocale = locale === defaultLocale ? fullPathname : fullPathname?.replace(/^\/tr/, '') || '/';
  const pathForActive = pathWithoutLocale || '/';

  const switchLocale = locale === 'en' ? 'tr' : 'en';
  const switchHref = switchLocale === 'en' ? pathWithoutLocale || '/' : `/${switchLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
  const switchLabel = locale === 'en' ? 'TR' : 'EN';

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <LocaleLink href="/" className="flex items-center gap-2 font-semibold text-malta-red">
          <span className="text-xl tracking-tight">Mentor Malta</span>
        </LocaleLink>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ key, href }) => {
            const isActive = pathForActive === href || (href !== '/' && pathForActive.startsWith(href));
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
          <Link
            href={switchHref}
            className="rounded-md border border-malta-red bg-malta-red px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-malta-red-600"
          >
            {switchLabel}
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 md:hidden"
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
        <div className="border-t border-gray-200 bg-white px-4 py-4 md:hidden">
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
            <Link
              href={switchHref}
              className="mt-2 rounded-md bg-malta-red px-3 py-2 text-center text-sm font-medium text-white"
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
