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
        <div className="finni-root">{children}</div>
      </body>
    </html>
  );
}
