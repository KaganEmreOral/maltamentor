'use client';

import { useTranslations } from 'next-intl';
import { LocaleLink } from './LocaleLink';
import { NewsletterForm } from './NewsletterForm';

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
              Mentor Malta
            </LocaleLink>
            <p className="mt-2 text-sm text-gray-600">{t('tagline')}</p>
            <div className="mt-6">
              <NewsletterForm />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">{t('links')}</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <LocaleLink href="/about" className="text-sm text-gray-600 hover:text-malta-red">
                  {tNav('about')}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/packages" className="text-sm text-gray-600 hover:text-malta-red">
                  {tNav('packages')}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/blog" className="text-sm text-gray-600 hover:text-malta-red">
                  {tNav('blog')}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/testimonials" className="text-sm text-gray-600 hover:text-malta-red">
                  {tNav('testimonials')}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/book" className="text-sm text-gray-600 hover:text-malta-red">
                  {tNav('bookMeeting')}
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
          © {currentYear} Mentor Malta. {t('copyright')}
        </div>
      </div>
    </footer>
  );
}
