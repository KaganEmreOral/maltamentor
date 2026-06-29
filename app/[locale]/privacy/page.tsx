import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';

type Props = { params: Promise<{ locale: string }> };
type Section = { heading: string; body: string };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legal.privacy' });
  return { title: t('title'), description: t('metaDescription') };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('legal.privacy');
  const sections = t.raw('sections') as Section[];

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900">{t('title')}</h1>
      <p className="mt-4 rounded-md border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        {t('placeholderNotice')}
      </p>
      <div className="mt-8 space-y-8">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-xl font-semibold text-gray-900">{section.heading}</h2>
            <p className="mt-2 leading-relaxed text-gray-600">{section.body}</p>
          </section>
        ))}
      </div>
      {/* TODO: Replace with legally reviewed final privacy policy — see i18n legal.privacy.todo */}
      <p className="mt-10 text-xs text-gray-400">{t('todo')}</p>
    </div>
  );
}
