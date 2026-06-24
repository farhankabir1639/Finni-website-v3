import type { Metadata } from "next";
import { HomePage } from "@/components/finni/HomePage";
import { PLAY_STORE_URL } from "@/lib/links";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "en",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Finni?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Finni is a personal finance app that works like texting a friend. You log spending in plain language by voice or text, and Finni automatically categorizes it, shows you what's safe to spend, and sends gentle nudges before you overspend. It's free on Android (Google Play), with iOS coming soon.",
      },
    },
    {
      "@type": "Question",
      name: "How does Finni work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Just tell Finni what you spent in everyday language — for example, \"I spent $12 on lunch.\" Finni logs and categorizes it instantly, keeps a complete history of your spending, and turns it into clear insights and personalized budget recommendations. No forms, no manual categories, no spreadsheets.",
      },
    },
    {
      "@type": "Question",
      name: "Is Finni free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Finni is free to download on Google Play and free to start using — no credit card required.",
      },
    },
    {
      "@type": "Question",
      name: "Is my financial data private and secure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Your financial data is encrypted and stored securely, and Finni never sells your personal information.",
      },
    },
    {
      "@type": "Question",
      name: "What platforms is Finni available on?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Finni is available now on Android via Google Play. An iOS version is coming soon.",
      },
    },
    {
      "@type": "Question",
      name: "Can Finni help me budget and reach savings goals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Finni analyzes your spending to give personalized budget recommendations and lets you set savings goals it tracks automatically, so you can see your progress without any manual work.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I download Finni?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Finni is available on the Google Play Store at ${PLAY_STORE_URL}. iOS is coming soon.`,
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <HomePage />
    </>
  );
}
