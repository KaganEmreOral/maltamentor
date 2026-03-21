export type StaticPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  locale: string;
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
  },
  {
    slug: 'cost-of-living-malta-it',
    title: 'Cost of Living in Malta: What IT Professionals Should Budget For',
    excerpt:
      'Rent, utilities, transport, and daily costs in Malta—practical numbers and tips so you can plan your move with confidence.',
    publishedAt: '2024-02-01',
    locale: 'en',
  },
  {
    slug: 'weekends-culture-malta',
    title: 'Beyond the Office: Culture, Language, and Weekends in Malta',
    excerpt:
      'How English fits into daily life, local customs, and ways to enjoy Malta outside work—from Valletta to the coast.',
    publishedAt: '2024-02-10',
    locale: 'en',
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
  },
  {
    slug: 'cost-of-living-malta-it',
    title: "Malta'da Yaşam Maliyeti: IT Profesyonelleri Ne Kadar Bütçe Ayırmalı?",
    excerpt:
      'Kira, faturalar, ulaşım ve günlük harcamalar—taşınmayı planlarken işinize yarayacak pratik bilgiler.',
    publishedAt: '2024-02-01',
    locale: 'tr',
  },
  {
    slug: 'weekends-culture-malta',
    title: 'Ofis Dışında: Malta’da Kültür, Dil ve Hafta Sonları',
    excerpt:
      'Günlük hayatta İngilizce, yerel adetler ve iş dışında Malta’nın keyfini çıkarmanın yolları—Valletta’dan kıyılara.',
    publishedAt: '2024-02-10',
    locale: 'tr',
  },
];

export function getStaticPosts(locale: string): StaticPost[] {
  return locale === 'tr' ? postsTr : postsEn;
}

export function getStaticPostBySlug(slug: string, locale: string): StaticPost | null {
  const list = locale === 'tr' ? postsTr : postsEn;
  return list.find((p) => p.slug === slug) ?? null;
}
