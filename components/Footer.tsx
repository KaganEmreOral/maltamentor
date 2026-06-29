'use client';

import { useTranslations } from 'next-intl';
import { LocaleLink } from './LocaleLink';

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <LocaleLink href="/" className="text-lg font-semibold text-malta-red">
              {tNav('brand')}
            </LocaleLink>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-gray-600">{t('tagline')}</p>
            <p className="mt-4 max-w-lg text-xs leading-relaxed text-gray-500">{t('disclaimerText')}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">{t('links')}</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <LocaleLink href="/" className="text-sm text-gray-600 hover:text-malta-red">
                  {tNav('home')}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/packages" className="text-sm text-gray-600 hover:text-malta-red">
                  {tNav('mentorship')}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/blog" className="text-sm text-gray-600 hover:text-malta-red">
                  {tNav('resources')}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/about" className="text-sm text-gray-600 hover:text-malta-red">
                  {tNav('about')}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/contact" className="text-sm text-gray-600 hover:text-malta-red">
                  {tNav('contact')}
                </LocaleLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">{t('legal')}</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <LocaleLink href="/privacy" className="text-sm text-gray-600 hover:text-malta-red">
                  {t('privacy')}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/terms" className="text-sm text-gray-600 hover:text-malta-red">
                  {t('terms')}
                </LocaleLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
          © {currentYear} {tNav('brand')}. {t('copyright')}
        </div>
      </div>
    </footer>
  );
}
