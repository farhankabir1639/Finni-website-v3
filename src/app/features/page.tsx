import type { Metadata } from "next";
import { FeaturesPage } from "@/components/finni/FeaturesPage";

export const metadata: Metadata = {
  title: "Features — Finni",
  description:
    "Plain-English logging, auto-categorization, safe-to-spend, smart nudges, and private-by-design security. Everything in Finni works the same way: you talk, it handles the rest.",
  alternates: { canonical: "/features" },
  openGraph: {
    title: "Features — Finni",
    description:
      "Plain-English logging, auto-categorization, safe-to-spend, smart nudges, and private-by-design security.",
    url: "/features",
  },
};

export default function Page() {
  return <FeaturesPage />;
}
