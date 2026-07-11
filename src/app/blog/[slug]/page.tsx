import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { Nav } from "@/components/finni/Nav";
import { Footer } from "@/components/finni/Footer";
import { Icon } from "@/components/finni/ui";
import { portableTextComponents } from "@/lib/portableText";
import { getPost, getPostSlugs } from "@/lib/blog";
import { breadcrumbLd } from "@/lib/breadcrumb";

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return { title: "Post not found — Finni" };
  return {
    title: `${post.title} — Finni Blog`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${params.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `/blog/${params.slug}`,
      images: post.coverImageUrl ? [post.coverImageUrl] : undefined,
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  const blogPostingLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAtRaw,
    dateModified: post.updatedAt || post.publishedAtRaw,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "Finni",
      logo: { "@type": "ImageObject", url: "https://www.heyfinni.com/images/Finni_Logo_White_Text_1.png" },
    },
    mainEntityOfPage: `https://www.heyfinni.com/blog/${params.slug}`,
    image: post.coverImageUrl || "https://www.heyfinni.com/opengraph-image",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blog" },
              { name: post.title, path: `/blog/${params.slug}` },
            ])
          ),
        }}
      />
      <Nav active="blog" />
      <article className="finni-section finni-section--tight" style={{ paddingTop: 56 }}>
        <div className="finni-container" style={{ maxWidth: 760 }}>
          <Link
            href="/blog"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--text-3)", fontSize: "var(--text-sm)", marginBottom: 28 }}
          >
            <Icon name="arrow" size={16} stroke="currentColor" /> Back to the blog
          </Link>
          <div className="finni-eyebrow" style={{ marginBottom: 16 }}>
            {post.category}
          </div>
          <h1 className="finni-display finni-h2" style={{ marginBottom: 18 }}>
            {post.title}
          </h1>
          <div
            style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--text-3)", fontSize: "var(--text-sm)", marginBottom: 36 }}
          >
            <span
              style={{
                width: 30,
                height: 30,
                borderRadius: 99,
                background: "var(--finni-grad)",
                display: "grid",
                placeItems: "center",
                color: "#fff",
                fontWeight: 700,
                fontSize: 12,
                fontFamily: "var(--font-display)",
                flex: "none",
              }}
            >
              {post.author[0]}
            </span>
            <span style={{ color: "var(--text-2)" }}>{post.author}</span>
            {post.date && (
              <>
                <span>·</span>
                <span>{post.date}</span>
              </>
            )}
            {post.read && (
              <>
                <span>·</span>
                <span>{post.read}</span>
              </>
            )}
          </div>

          {post.body && post.body.length > 0 ? (
            <PortableText value={post.body} components={portableTextComponents} />
          ) : (
            <p style={{ color: "var(--text-2)", lineHeight: "var(--lh-relaxed)" }}>{post.excerpt}</p>
          )}
        </div>
      </article>
      <Footer />
    </>
  );
}
