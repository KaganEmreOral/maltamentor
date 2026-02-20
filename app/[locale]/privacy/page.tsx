import { setRequestLocale } from 'next-intl/server';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata() {
  return { title: 'Privacy Policy', description: 'Mentor Malta privacy policy.' };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
      <p className="mt-4 text-gray-600">
        This page will contain your privacy policy. Add your content here or connect a CMS.
      </p>
    </div>
  );
}
