'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { LocaleLink } from '@/components/LocaleLink';
import type { CareerFitInsights, ResultBandId, ScoreResult } from '@/lib/career-fit/types';
import { RESULT_BANDS } from '@/lib/career-fit/config';

type Props = {
  score: ScoreResult;
  insights: CareerFitInsights;
  onRetake: () => void;
};

export function CareerFitResult({ score, insights, onRetake }: Props) {
  const t = useTranslations('careerFit.result');
  const tInsights = useTranslations('careerFit.insights');
  const bandConfig = RESULT_BANDS.find((b) => b.id === score.band)!;
  const band = score.band as ResultBandId;

  const [email, setEmail] = useState('');
  const [emailStatus, setEmailStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setEmailStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          source: 'career-fit-result',
          score: score.percentage,
          band: score.band,
        }),
      });
      if (res.ok) {
        setEmailStatus('success');
        setEmail('');
      } else setEmailStatus('error');
    } catch {
      setEmailStatus('error');
    }
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-wide text-malta-red">
          {t('readinessLabel')}
        </p>
        <p className="mt-2 text-5xl font-bold text-gray-900 sm:text-6xl">{score.percentage}%</p>
        <h2 className="mt-4 text-2xl font-semibold text-gray-900 sm:text-3xl">
          {t(`bands.${band}.title`)}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-gray-600 leading-relaxed">
          {t(`bands.${band}.explanation`)}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <h3 className="font-semibold text-gray-900">{t('strengthsTitle')}</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            {insights.strengths.map((key) => (
              <li key={key} className="flex gap-2">
                <span className="text-malta-red" aria-hidden>
                  +
                </span>
                <span>{tInsights(key)}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <h3 className="font-semibold text-gray-900">{t('improveTitle')}</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            {insights.improvements.map((key) => (
              <li key={key} className="flex gap-2">
                <span className="text-gray-400" aria-hidden>
                  →
                </span>
                <span>{tInsights(key)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rounded-xl border border-malta-red/20 bg-red-50/40 p-5">
        <h3 className="font-semibold text-gray-900">{t('nextStepTitle')}</h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-700">{tInsights(insights.nextStep)}</p>
      </div>

      <p className="rounded-md border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-950">
        {t('disclaimer')}
      </p>

      <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
        <LocaleLink
          href={bandConfig.ctaHref}
          className="inline-flex items-center justify-center rounded-md bg-malta-red px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-malta-red-600"
        >
          {t(`bands.${band}.cta`)}
        </LocaleLink>
        <button
          type="button"
          onClick={onRetake}
          className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-50"
        >
          {t('retake')}
        </button>
        <LocaleLink
          href="/packages"
          className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-50"
        >
          {t('exploreMentorship')}
        </LocaleLink>
      </div>

      {/* Optional email — uses existing /api/newsletter; requires RESEND_* env for persistence */}
      <div className="border-t border-gray-200 pt-8">
        <p className="text-sm font-medium text-gray-900">{t('emailTitle')}</p>
        <p className="mt-1 text-xs text-gray-500">{t('emailHint')}</p>
        <form onSubmit={handleEmailSubmit} className="mt-3 flex flex-col gap-2 sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('emailPlaceholder')}
            disabled={emailStatus === 'loading'}
            className="min-w-0 flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-malta-red focus:outline-none focus:ring-1 focus:ring-malta-red"
          />
          <button
            type="submit"
            disabled={emailStatus === 'loading' || !email.trim()}
            className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 disabled:opacity-60"
          >
            {emailStatus === 'loading' ? '...' : t('emailSubmit')}
          </button>
        </form>
        {emailStatus === 'success' && (
          <p className="mt-2 text-sm text-green-700" role="status">
            {t('emailSuccess')}
          </p>
        )}
        {emailStatus === 'error' && (
          <p className="mt-2 text-sm text-red-700">{t('emailError')}</p>
        )}
      </div>
    </div>
  );
}
