import type { Metadata } from "next";
import { BlogPage } from "@/components/finni/BlogPage";
import { getPosts, SAMPLE_POSTS } from "@/lib/blog";
import { breadcrumbLd } from "@/lib/breadcrumb";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog — Finni",
  description:
    "Calm, jargon-free takes on spending, saving, and the psychology of money — written the way Finni talks.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "The Finni Blog",
    description:
      "Calm, jargon-free takes on spending, saving, and the psychology of money — written the way Finni talks.",
    url: "/blog",
  },
};

export default async function Page() {
  const posts = await getPosts();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blog" },
            ])
          ),
        }}
      />
      <BlogPage posts={posts.length ? posts : SAMPLE_POSTS} />
    </>
  );
}
