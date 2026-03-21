export type StaticPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  locale: string;
  /** Unsplash (or same-origin) thumbnail for blog cards */
  thumbnailUrl: string;
};

export const STATIC_SLUGS = [
  'it-job-market-malta',
  'cost-of-living-malta-it',
  'weekends-culture-malta',
] as const;

const postsEn: StaticPost[] = [
  {
    slug: 'it-job-market-malta',
    title: 'The IT Job Market in Malta: Opportunities for International Professionals',
    excerpt:
      'Malta offers a growing tech scene with demand for developers and DevOps engineers, competitive salaries, and a favourable environment for relocation.',
    publishedAt: '2024-01-15',
    locale: 'en',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'cost-of-living-malta-it',
    title: 'Cost of Living in Malta: What IT Professionals Should Budget For',
    excerpt:
      'Rent, utilities, transport, and daily costs in Malta—practical numbers and tips so you can plan your move with confidence.',
    publishedAt: '2024-02-01',
    locale: 'en',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'weekends-culture-malta',
    title: 'Beyond the Office: Culture, Language, and Weekends in Malta',
    excerpt:
      'How English fits into daily life, local customs, and ways to enjoy Malta outside work—from Valletta to the coast.',
    publishedAt: '2024-02-10',
    locale: 'en',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1539650116454-2920d5b0e6e9?q=80&w=800&auto=format&fit=crop',
  },
];

const postsTr: StaticPost[] = [
  {
    slug: 'it-job-market-malta',
    title: "Malta'da IT İş Piyasası: Uluslararası Profesyoneller İçin Fırsatlar",
    excerpt:
      'Malta, geliştiricilere ve DevOps mühendislerine olan talebi, rekabetçi maaşları ve taşınma için elverişli ortamıyla büyüyen bir teknoloji sahnesi sunuyor.',
    publishedAt: '2024-01-15',
    locale: 'tr',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'cost-of-living-malta-it',
    title: "Malta'da Yaşam Maliyeti: IT Profesyonelleri Ne Kadar Bütçe Ayırmalı?",
    excerpt:
      'Kira, faturalar, ulaşım ve günlük harcamalar—taşınmayı planlarken işinize yarayacak pratik bilgiler.',
    publishedAt: '2024-02-01',
    locale: 'tr',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=800&auto=format&fit=crop',
  },
  {
    slug: 'weekends-culture-malta',
    title: 'Ofis Dışında: Malta’da Kültür, Dil ve Hafta Sonları',
    excerpt:
      'Günlük hayatta İngilizce, yerel adetler ve iş dışında Malta’nın keyfini çıkarmanın yolları—Valletta’dan kıyılara.',
    publishedAt: '2024-02-10',
    locale: 'tr',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1539650116454-2920d5b0e6e9?q=80&w=800&auto=format&fit=crop',
  },
];

export function getStaticPosts(locale: string): StaticPost[] {
  return locale === 'tr' ? postsTr : postsEn;
}

export function getStaticPostBySlug(slug: string, locale: string): StaticPost | null {
  const list = locale === 'tr' ? postsTr : postsEn;
  return list.find((p) => p.slug === slug) ?? null;
}
