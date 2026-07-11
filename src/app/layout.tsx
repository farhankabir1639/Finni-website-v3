import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { orgLd } from "@/lib/company";
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
    "Finni is a personal finance app that tracks spending by voice or text and gives clear answers about your money.",
  keywords: [
    "personal finance app",
    "AI budgeting",
    "expense tracker",
    "money management",
    "Finni AI",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Finni — Your money, finally on speaking terms.",
    description:
      "The personal finance app that feels like texting a friend. Now live on Google Play, iOS coming soon.",
    url: "https://www.heyfinni.com",
    siteName: "Finni",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finni — Your money, finally on speaking terms.",
    description:
      "The AI finance app that feels like texting a friend. Now live on Google Play.",
  },
  metadataBase: new URL("https://www.heyfinni.com"),
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
      <GoogleAnalytics gaId="G-KHSJXWQC35" />
    </html>
  );
}
