'use client';

import { useTranslations } from 'next-intl';
import { Link } from 'next-intl/navigation';
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
            <Link href="/" className="text-lg font-semibold text-malta-red">
              Mentor Malta
            </Link>
            <p className="mt-2 text-sm text-gray-600">{t('tagline')}</p>
            <div className="mt-6">
              <NewsletterForm />
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">{t('links')}</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-malta-red">
                  {tNav('about')}
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-sm text-gray-600 hover:text-malta-red">
                  {tNav('packages')}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-600 hover:text-malta-red">
                  {tNav('blog')}
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-sm text-gray-600 hover:text-malta-red">
                  {tNav('testimonials')}
                </Link>
              </li>
              <li>
                <Link href="/book" className="text-sm text-gray-600 hover:text-malta-red">
                  {tNav('bookMeeting')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-malta-red">
                  {tNav('contact')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">{t('legal')}</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-gray-600 hover:text-malta-red">
                  {t('privacy')}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-malta-red">
                  {t('terms')}
                </Link>
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
