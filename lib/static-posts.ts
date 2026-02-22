export type StaticPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  locale: string;
};

export const SAMPLE_POST_SLUG = 'it-job-market-malta';

const samplePostEn: StaticPost = {
  slug: SAMPLE_POST_SLUG,
  title: 'The IT Job Market in Malta: Opportunities for International Professionals',
  excerpt:
    'Malta offers a growing tech scene with demand for developers and DevOps engineers, competitive salaries, and a favourable environment for relocation.',
  publishedAt: '2024-01-15',
  locale: 'en',
};

const samplePostTr: StaticPost = {
  slug: SAMPLE_POST_SLUG,
  title: "Malta'da IT İş Piyasası: Uluslararası Profesyoneller İçin Fırsatlar",
  excerpt:
    'Malta, geliştiricilere ve DevOps mühendislerine olan talebi, rekabetçi maaşları ve taşınma için elverişli ortamıyla büyüyen bir teknoloji sahnesi sunuyor.',
  publishedAt: '2024-01-15',
  locale: 'tr',
};

export function getStaticPosts(locale: string): StaticPost[] {
  return [locale === 'tr' ? samplePostTr : samplePostEn];
}

export function getStaticPostBySlug(slug: string, locale: string): StaticPost | null {
  if (slug !== SAMPLE_POST_SLUG) return null;
  return locale === 'tr' ? samplePostTr : samplePostEn;
}
