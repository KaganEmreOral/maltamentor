import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

export async function HomeFounder() {
  const t = await getTranslations('home.founder');
  const paragraphs = t.raw('paragraphs') as string[];
  const credibility = t.raw('credibility') as string[];

  return (
    <section className="border-b border-gray-200 bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_280px] lg:px-8">
        <div>
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
        <div className="relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm lg:mx-0">
          {/* TODO: Replace with real founder photo at /public/founder.jpg */}
          <Image
            src="/founder-placeholder.svg"
            alt={t('photoAlt')}
            fill
            className="object-cover"
            sizes="280px"
          />
        </div>
      </div>
    </section>
  );
}
