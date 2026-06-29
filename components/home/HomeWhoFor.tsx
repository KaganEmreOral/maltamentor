import { getTranslations } from 'next-intl/server';

type Audience = { title: string; text: string };

export async function HomeWhoFor() {
  const t = await getTranslations('home.whoFor');
  const audiences = t.raw('audiences') as Audience[];

  return (
    <section className="border-b border-gray-200 bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold text-gray-900 sm:text-3xl">{t('title')}</h2>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {audiences.map((item) => (
            <li
              key={item.title}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
