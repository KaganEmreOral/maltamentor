import { getTranslations } from 'next-intl/server';

export async function HomeFounder() {
  const t = await getTranslations('home.founder');
  const paragraphs = t.raw('paragraphs') as string[];
  const credibility = t.raw('credibility') as string[];

  return (
    <section className="border-b border-gray-200 bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">{t('title')}</h2>
        <div className="mt-6 space-y-4 text-gray-600">
          {paragraphs.map((p) => (
            <p key={p.slice(0, 40)} className="leading-relaxed">
              {p}
            </p>
          ))}
        </div>
        <ul className="mt-8 space-y-2 text-sm text-gray-700">
          {credibility.map((point) => (
            <li key={point} className="flex gap-2">
              <span className="font-medium text-malta-red" aria-hidden>
                ✓
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
