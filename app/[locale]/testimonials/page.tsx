import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations('testimonials');
  return { title: t('title'), description: t('subtitle') };
}

const testimonials = [
  {
    quote: 'Professional, insightful and genuinely helpful. My goals became much clearer after just a few sessions.',
    author: 'Client A',
    role: 'Entrepreneur',
  },
  {
    quote: 'The structured approach and follow-up made a real difference. I highly recommend Mentor Malta.',
    author: 'Client B',
    role: 'Manager',
  },
  {
    quote: 'Clear communication and practical advice. Exactly what I needed to move forward.',
    author: 'Client C',
    role: 'Professional',
  },
];

export default async function TestimonialsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('testimonials');

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">{t('title')}</h1>
        <p className="mt-4 text-lg text-gray-600">{t('subtitle')}</p>
      </div>

      <ul className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, i) => (
          <li key={i} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-gray-600">&ldquo;{item.quote}&rdquo;</p>
            <p className="mt-4 font-medium text-gray-900">{item.author}</p>
            <p className="text-sm text-gray-500">{item.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
