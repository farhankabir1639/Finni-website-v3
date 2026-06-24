import type { Metadata } from "next";
import { HowPage } from "@/components/finni/HowPage";

export const metadata: Metadata = {
  title: "How it works — Finni",
  description:
    "Just talk to it, Finni does the math, and you stay ahead. Logging and categorizing money handled by your voice — one conversation does all the tracking.",
  alternates: { canonical: "/how" },
  openGraph: {
    title: "How it works — Finni",
    description:
      "Just talk to it, Finni does the math, and you stay ahead — one conversation does all the tracking.",
    url: "/how",
  },
};

export default function Page() {
  return <HowPage />;
}
