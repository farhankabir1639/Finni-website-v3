import type { Metadata } from "next";
import { BlogPage } from "@/components/finni/BlogPage";
import { getPosts, SAMPLE_POSTS } from "@/lib/blog";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog — Finni",
  description:
    "Calm, jargon-free takes on spending, saving, and the psychology of money — written the way Finni talks.",
};

export default async function Page() {
  const posts = await getPosts();
  return <BlogPage posts={posts.length ? posts : SAMPLE_POSTS} />;
}
