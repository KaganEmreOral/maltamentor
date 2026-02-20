'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export function NewsletterForm() {
  const t = useTranslations('newsletter');
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
        body: JSON.stringify({ email: email.trim() }),
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
    <div>
      <p className="text-sm font-medium text-gray-900">{t('title')}</p>
      <form onSubmit={handleSubmit} className="mt-2 flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t('placeholder')}
          disabled={status === 'loading'}
          className="min-w-0 flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-malta-red focus:outline-none focus:ring-1 focus:ring-malta-red"
          required
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="rounded-md bg-malta-red px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-malta-red-600 disabled:opacity-70"
        >
          {status === 'loading' ? '...' : t('subscribe')}
        </button>
      </form>
      {status === 'success' && <p className="mt-1 text-xs text-green-600">{t('success')}</p>}
      {status === 'error' && <p className="mt-1 text-xs text-red-600">{t('error')}</p>}
    </div>
  );
}
