'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

type Props = { className?: string };

export function ContactForm({ className = '' }: Props) {
  const t = useTranslations('contact');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const packageOptions = [
    t('packages.assessment'),
    t('packages.sprint'),
    t('packages.toolkit'),
    t('packages.careerFit'),
    t('packages.other'),
  ];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
          package: data.get('package') || 'Not specified',
        }),
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else setStatus('error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            {t('name')}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-malta-red focus:outline-none focus:ring-1 focus:ring-malta-red"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            {t('email')}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-malta-red focus:outline-none focus:ring-1 focus:ring-malta-red"
          />
        </div>
        <div>
          <label htmlFor="package" className="block text-sm font-medium text-gray-700">
            {t('package')}
          </label>
          <select
            id="package"
            name="package"
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-malta-red focus:outline-none focus:ring-1 focus:ring-malta-red"
          >
            <option value="">{t('packagePlaceholder')}</option>
            {packageOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            {t('message')}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-malta-red focus:outline-none focus:ring-1 focus:ring-malta-red"
          />
        </div>
      </div>
      {status === 'success' && (
        <p className="mt-4 rounded-md bg-green-50 p-3 text-sm font-medium text-green-800" role="status">
          {t('success')}
        </p>
      )}
      {status === 'error' && (
        <p className="mt-4 rounded-md bg-red-50 p-3 text-sm text-red-700">{t('error')}</p>
      )}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-6 w-full rounded-md bg-malta-red px-4 py-3 text-base font-medium text-white hover:bg-malta-red-600 disabled:opacity-70 sm:w-auto sm:px-8"
      >
        {status === 'loading' ? '...' : t('send')}
      </button>
    </form>
  );
}
