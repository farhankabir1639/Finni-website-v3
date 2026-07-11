import type { PortableTextBlock } from "@portabletext/types";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client, sanityConfigured, urlFor } from "./sanity";

export type BlogPost = {
  title: string;
  slug?: string;
  excerpt: string;
  category: string;
  author: string;
  date: string; // display string, e.g. "Jun 9, 2026"
  read: string;
  coverImageUrl?: string;
};

export type BlogPostFull = BlogPost & {
  body?: PortableTextBlock[];
  publishedAtRaw?: string;
  updatedAt?: string;
};

type RawPost = {
  title: string;
  slug?: string;
  excerpt: string;
  category: string;
  author?: string;
  publishedAt?: string;
  _updatedAt?: string;
  readTime?: string;
  coverImage?: SanityImageSource;
  body?: PortableTextBlock[];
};

function fmtDate(iso?: string): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

function toPost(r: RawPost): BlogPostFull {
  return {
    title: r.title,
    slug: r.slug,
    excerpt: r.excerpt,
    category: r.category,
    author: r.author || "Finni",
    date: fmtDate(r.publishedAt),
    read: r.readTime || "",
    coverImageUrl: r.coverImage ? urlFor(r.coverImage).width(800).height(500).fit("crop").url() : undefined,
    body: r.body,
    publishedAtRaw: r.publishedAt,
    updatedAt: r._updatedAt,
  };
}

const LIST_FIELDS = `
  title,
  "slug": slug.current,
  excerpt,
  category,
  "author": author->name,
  publishedAt,
  readTime,
  coverImage
`;

const POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc){${LIST_FIELDS}}`;
const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{${LIST_FIELDS}, _updatedAt, body}`;
const SLUGS_QUERY = `*[_type == "post" && defined(slug.current)]{"slug": slug.current}`;

/** Published posts from Sanity. Empty when unconfigured or on error. */
export async function getPosts(): Promise<BlogPost[]> {
  if (!sanityConfigured) return [];
  try {
    const rows = await client.fetch<RawPost[]>(POSTS_QUERY);
    return (rows || []).map(toPost);
  } catch {
    return [];
  }
}

export async function getPost(slug: string): Promise<BlogPostFull | null> {
  if (!sanityConfigured) return null;
  try {
    const row = await client.fetch<RawPost | null>(POST_QUERY, { slug });
    return row ? toPost(row) : null;
  } catch {
    return null;
  }
}

export async function getPostSlugs(): Promise<string[]> {
  if (!sanityConfigured) return [];
  try {
    const rows = await client.fetch<{ slug: string }[]>(SLUGS_QUERY);
    return (rows || []).map((r) => r.slug).filter(Boolean);
  } catch {
    return [];
  }
}

/* Fallback content shown until posts exist in Sanity, so the blog index
   is never empty on first deploy. These have no slug → cards aren't
   clickable (matching the design's placeholder behaviour). Real Sanity
   posts replace these as soon as they're published. */
export const SAMPLE_POSTS: BlogPost[] = [
  {
    category: "Money basics",
    title: "Why “safe-to-spend” beats budgeting every single time",
    excerpt:
      "Budgets ask you to predict the future. Safe-to-spend just tells you what's actually free right now — here's why that one number changes everything.",
    author: "Maya Rao",
    date: "Jun 9, 2026",
    read: "5 min",
  },
  {
    category: "Guides",
    title: "The 50/30/20 rule, explained like you're texting a friend",
    excerpt:
      "No charts, no lectures. The simplest way to split your money into needs, wants, and future-you — and how to bend it when life happens.",
    author: "Devin Kerr",
    date: "Jun 2, 2026",
    read: "6 min",
  },
  {
    category: "Privacy",
    title: "How Finni keeps your money data genuinely private",
    excerpt:
      "Bank-grade encryption, no credential storage, and a promise we'll never sell your data. A plain-English tour of how we protect you.",
    author: "Priya Shah",
    date: "May 27, 2026",
    read: "4 min",
  },
  {
    category: "Product",
    title: "5 money questions to ask Finni tonight",
    excerpt:
      "“Can I afford this?” is just the start. Five quick prompts that turn your money buddy into a genuinely useful nightly check-in.",
    author: "Sam Olsen",
    date: "May 20, 2026",
    read: "3 min",
  },
  {
    category: "Psychology",
    title: "The psychology of the impulse buy — and how to outsmart it",
    excerpt:
      "Why your brain loves a 2am checkout, and the tiny friction that helps you pause without feeling deprived.",
    author: "Maya Rao",
    date: "May 14, 2026",
    read: "7 min",
  },
  {
    category: "Guides",
    title: "Sinking funds: the calmest way to save for big things",
    excerpt:
      "Holidays, car repairs, that wedding you forgot about. How to fund the predictable surprises so they never blow up your month.",
    author: "Devin Kerr",
    date: "May 6, 2026",
    read: "5 min",
  },
];
