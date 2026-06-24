import { PLAY_STORE_URL } from "./links";

export const EMAIL = "company@heyfinni.com";
export const PHONE = "+8801346060562";
export const LINKEDIN = "https://www.linkedin.com/company/finni-ai/";
export const FACEBOOK = "https://www.facebook.com/profile.php?id=61577421939695";

export const founders = [
  { name: "Farhan K", role: "CEO" },
  { name: "Farshid A", role: "CTO" },
];
export const team = [...founders, { name: "Prionto", role: "Lead Engineering" }];

export const offices = [
  {
    label: "United States",
    lines: ["1390 Market Street, Suite 200", "San Francisco, CA 94102", "United States"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "1390 Market Street, Suite 200",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      postalCode: "94102",
      addressCountry: "US",
    },
  },
  {
    label: "Bangladesh",
    lines: ["House 12, Road 5, Block C, Mirpur 10", "Dhaka 1216", "Bangladesh"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "House 12, Road 5, Block C, Mirpur 10",
      addressLocality: "Dhaka",
      addressRegion: "Dhaka",
      postalCode: "1216",
      addressCountry: "BD",
    },
  },
];

// Organization schema — rendered site-wide (in the root layout) so every page,
// including the homepage that auditors scan, carries it.
export const orgLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Finni",
  legalName: "Finni Money, Inc.",
  url: "https://www.heyfinni.com",
  logo: "https://www.heyfinni.com/images/Finni_Logo_White_Text_1.png",
  description:
    "Finni is the personal finance app that feels like texting a friend. Log spending in plain English and get calm, clear answers — no spreadsheets. Now live on Google Play.",
  email: EMAIL,
  telephone: PHONE,
  founder: founders.map((p) => ({ "@type": "Person", name: p.name, jobTitle: p.role })),
  employee: [{ "@type": "Person", name: "Prionto", jobTitle: "Lead Engineering" }],
  address: offices.map((o) => o.address),
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: EMAIL,
    telephone: PHONE,
  },
  sameAs: [LINKEDIN, FACEBOOK],
};

// App schema for the /about page. aggregateRating intentionally omitted until
// the Play Store listing exposes a real rating value + count.
export const appLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Finni - AI Finance Tracker",
  operatingSystem: "Android",
  applicationCategory: "FinanceApplication",
  url: "https://www.heyfinni.com",
  downloadUrl: PLAY_STORE_URL,
  installUrl: PLAY_STORE_URL,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  publisher: { "@type": "Organization", name: "Finni" },
};
