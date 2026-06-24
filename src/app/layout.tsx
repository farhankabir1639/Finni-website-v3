import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Finni — Your money, finally on speaking terms.",
  description:
    "Finni is the personal finance app that feels like texting a friend. Log spending in plain English and get calm, clear answers — no spreadsheets. Now live on Google Play.",
  keywords: [
    "personal finance app",
    "AI budgeting",
    "expense tracker",
    "money management",
    "Finni AI",
  ],
  openGraph: {
    title: "Finni — Your money, finally on speaking terms.",
    description:
      "The personal finance app that feels like texting a friend. Now live on Google Play, iOS coming soon.",
    url: "https://heyfinni.com",
    siteName: "Finni",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finni — Your money, finally on speaking terms.",
    description:
      "The AI finance app that feels like texting a friend. Now live on Google Play.",
  },
  metadataBase: new URL("https://heyfinni.com"),
};

// Organization schema. Only verified fields are included — address, telephone,
// founder, sameAs (real social profiles), and aggregateRating are intentionally
// omitted until real values are provided, to avoid fabricated structured data.
const orgLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Finni",
  legalName: "Finni Money, Inc.",
  url: "https://www.heyfinni.com",
  logo: "https://www.heyfinni.com/images/Finni_Logo_White_Text_1.png",
  description:
    "Finni is the personal finance app that feels like texting a friend. Log spending in plain English and get calm, clear answers — no spreadsheets. Now live on Google Play.",
  email: "company@heyfinni.com",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "company@heyfinni.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
        />
        <div className="finni-root">{children}</div>

        {/* daamdekhi AEO tracking tag — detects human visitors and JS-capable AI crawlers.
            Rendered as a literal tag in the SSR HTML (before </body>) per the vendor's
            instructions, so single-fetch / non-JS crawlers can find it too. */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script async src="https://shop.daamdekhi.com/aeo/tag.js" data-site="4N34mgvy" />
        {/* No-script pixel so AI crawlers that don't run JavaScript are still detected */}
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://shop.daamdekhi.com/aeo/tag/collect.gif?site=4N34mgvy"
            height="1"
            width="1"
            alt=""
            style={{ position: "absolute", left: "-9999px" }}
            referrerPolicy="no-referrer"
          />
        </noscript>
      </body>
    </html>
  );
}
