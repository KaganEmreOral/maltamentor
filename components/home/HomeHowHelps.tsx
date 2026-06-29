import { getTranslations } from 'next-intl/server';

type Step = { title: string; items: string[] };

export async function HomeHowHelps() {
  const t = await getTranslations('home.howHelps');
  const steps = t.raw('steps') as Step[];

  return (
    <section className="border-b border-gray-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold text-gray-900 sm:text-3xl">{t('title')}</h2>
        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title}>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-malta-red text-sm font-semibold text-white">
                {index + 1}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{step.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                {step.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-malta-red" aria-hidden>
                      ·
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
