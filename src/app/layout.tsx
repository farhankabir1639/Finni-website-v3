import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Finni AI — Your Personal Money Buddy",
  description:
    "Finni AI is the personal finance app that feels like texting a friend. Log expenses in plain English, get smart insights, and finally understand your money. Coming soon.",
  keywords: [
    "personal finance app",
    "AI budgeting",
    "expense tracker",
    "money management",
    "Finni AI",
  ],
  openGraph: {
    title: "Finni AI — Your Personal Money Buddy",
    description:
      "No boring spreadsheets. No confusing charts. Just you and your money, finally on the same team.",
    url: "https://heyfinni.com",
    siteName: "Finni AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finni AI — Your Personal Money Buddy",
    description:
      "The AI finance app that feels like texting a friend. Coming soon.",
  },
  metadataBase: new URL("https://heyfinni.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="min-h-screen font-sans text-white">
        <div className="bg-glow-1" />
        <div className="bg-glow-2" />
        <div className="bg-glow-3" />
        {children}
      </body>
    </html>
  );
}
