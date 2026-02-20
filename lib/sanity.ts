import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: { _type: string; asset?: { _ref: string } }) {
  return builder.image(source);
}

export type Post = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  mainImage?: { _type: string; asset?: { _ref: string } };
  publishedAt: string;
  body?: unknown;
};

const postFields = `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  mainImage,
  publishedAt,
  body
`;

export async function getPosts(locale: string, limit = 20): Promise<Post[]> {
  if (!projectId) return [];
  try {
    const posts = await sanityClient.fetch<Post[]>(
      `*[_type == "post"] | order(publishedAt desc) [0...${limit}] { ${postFields} }`
    );
    return posts;
  } catch {
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (!projectId) return null;
  try {
    const result = await sanityClient.fetch<Post[]>(
      `*[_type == "post" && slug.current == $slug][0...1] { ${postFields} }`,
      { slug }
    );
    const post = result?.[0];
    return post ?? null;
  } catch {
    return null;
  }
}
