import type { Metadata } from "next";
import { HomePage } from "@/components/finni/HomePage";
import { HOME_FAQ } from "@/lib/faq";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: { en: "/", es: "/es", "x-default": "/" },
  },
  openGraph: { url: "/" },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "en",
  mainEntity: HOME_FAQ.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

// WebPage with Speakable (for voice assistants) + a recent dateModified
// (freshness signal). dateModified is the build time, which reflects each deploy.
const webPageLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: "https://www.heyfinni.com",
  name: "Finni — Your money, finally on speaking terms.",
  dateModified: new Date().toISOString(),
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".finni-tldr", "#faq"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }}
      />
      <HomePage />
    </>
  );
}
