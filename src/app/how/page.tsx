import type { Metadata } from "next";
import { HowPage } from "@/components/finni/HowPage";
import { breadcrumbLd } from "@/lib/breadcrumb";

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

const howToLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to manage your money with Finni",
  description:
    "Track spending and stay ahead of your budget with Finni's plain-language, voice-or-text logging.",
  step: [
    {
      "@type": "HowToStep",
      name: "Log what you spent",
      text: 'Tell Finni what you spent in plain language, by voice or text — for example, "Spent $40 on dinner." No forms or categories to pick.',
    },
    {
      "@type": "HowToStep",
      name: "Let Finni do the math",
      text: "Finni categorizes, tracks, and forecasts your spending automatically — no rules to set up and no manual tagging.",
    },
    {
      "@type": "HowToStep",
      name: "Stay ahead",
      text: "See a single safe-to-spend number, get gentle nudges before you overspend, and watch your savings goals move.",
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "How it works", path: "/how" },
            ])
          ),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToLd) }} />
      <HowPage />
    </>
  );
}
