import { redirect } from 'next/navigation';

type Props = { params: Promise<{ locale: string }> };

export default async function TestimonialsPage({ params }: Props) {
  const { locale } = await params;
  redirect(locale === 'en' ? '/contact' : `/${locale}/contact`);
}
