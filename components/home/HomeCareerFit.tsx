import { getTranslations } from 'next-intl/server';
import { HomeButtonLink } from './HomeButtonLink';

export async function HomeCareerFit() {
  const t = await getTranslations('home.careerFit');
  const factors = t.raw('previewFactors') as string[];

  return (
    <section className="border-b border-gray-200 bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">{t('title')}</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">{t('text')}</p>
            <p className="mt-3 text-sm font-medium text-gray-500">{t('meta')}</p>
            <div className="mt-8">
              <HomeButtonLink href="/career-fit">{t('cta')}</HomeButtonLink>
            </div>
            <p className="mt-4 text-sm text-gray-500">{t('note')}</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              {t('title')}
            </p>
            <ul className="mt-4 space-y-3">
              {factors.map((factor) => (
                <li key={factor} className="flex items-center gap-3 text-sm text-gray-700">
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-50 text-xs font-medium text-malta-red"
                    aria-hidden
                  >
                    ·
                  </span>
                  {factor}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
