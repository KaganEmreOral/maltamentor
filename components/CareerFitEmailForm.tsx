'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { LocaleLink } from '@/components/LocaleLink';

export function CareerFitEmailForm() {
  const t = useTranslations('careerFit');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), source: 'career-fit' }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else setStatus('error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="mt-8">
      <form onSubmit={handleSubmit} className="mx-auto max-w-md">
        <label htmlFor="career-fit-email" className="block text-sm font-medium text-gray-700">
          {t('emailLabel')}
        </label>
        <div className="mt-2 flex flex-col gap-2 sm:flex-row">
          <input
            id="career-fit-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('emailPlaceholder')}
            disabled={status === 'loading'}
            required
            className="min-w-0 flex-1 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-malta-red focus:outline-none focus:ring-1 focus:ring-malta-red"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="rounded-md bg-malta-red px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-malta-red-600 disabled:opacity-70"
          >
            {status === 'loading' ? '...' : t('submit')}
          </button>
        </div>
      </form>
      {status === 'success' && (
        <p className="mt-4 text-sm text-green-700" role="status">
          {t('success')}
        </p>
      )}
      {status === 'error' && <p className="mt-4 text-sm text-red-700">{t('error')}</p>}
      <p className="mt-6 text-center text-sm text-gray-600">
        <LocaleLink href="/contact" className="font-medium text-malta-red hover:underline">
          {t('contactLink')}
        </LocaleLink>
      </p>
    </div>
  );
}
