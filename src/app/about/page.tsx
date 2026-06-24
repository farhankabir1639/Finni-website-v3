import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/finni/Nav";
import { Footer } from "@/components/finni/Footer";
import { Button } from "@/components/finni/ui";
import { PLAY_STORE_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "About — Finni",
  description:
    "About Finni — the personal finance app that feels like texting a friend. Founders, offices, and how to get in touch.",
};

const LINKEDIN = "https://www.linkedin.com/company/finni-ai/";
const FACEBOOK = "https://www.facebook.com/profile.php?id=61577421939695";
const PHONE = "+8801346060562";
const EMAIL = "company@heyfinni.com";

const offices = [
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

const founders = ["Farhan K", "Farshid A"];

const orgLd = {
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
  founder: founders.map((name) => ({ "@type": "Person", name })),
  address: offices.map((o) => o.address),
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: EMAIL,
    telephone: PHONE,
  },
  sameAs: [LINKEDIN, FACEBOOK],
};

// App schema. aggregateRating is intentionally omitted until the Play Store
// listing exposes a real rating value + count (won't be fabricated).
const appLd = {
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

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="finni-card" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div
        style={{
          fontSize: "var(--text-xs)",
          letterSpacing: "var(--ls-caps)",
          textTransform: "uppercase",
          color: "var(--text-3)",
          fontWeight: 600,
        }}
      >
        {title}
      </div>
      {children}
    </div>
  );
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appLd) }} />
      <Nav />
      <header className="finni-section finni-section--tight" style={{ paddingTop: 56, textAlign: "center" }}>
        <div className="finni-container" style={{ maxWidth: 780 }}>
          <span className="finni-eyebrow finni-eyebrow--center" style={{ justifyContent: "center", marginBottom: 22 }}>
            About
          </span>
          <h1 className="finni-display finni-h1" style={{ marginBottom: 20, fontSize: "clamp(2.4rem,5.2vw,3.9rem)" }}>
            The team behind <span className="finni-gradient-text">Finni.</span>
          </h1>
          <p className="finni-lead" style={{ margin: "0 auto" }}>
            Finni is the personal finance app that feels like texting a friend. Log spending in plain language by voice
            or text, and Finni handles the tracking, categorizing, and gentle nudges — so money finally feels calm.
          </p>
        </div>
      </header>

      <section className="finni-section--tight" style={{ paddingTop: 8 }}>
        <div className="finni-container" style={{ maxWidth: 980 }}>
          <div className="finni-grid finni-grid--2">
            <Card title="Founders">
              <div style={{ fontSize: "var(--text-lg)", color: "var(--text-1)", fontWeight: 600 }}>
                {founders.join(" · ")}
              </div>
              <p style={{ color: "var(--text-2)", fontSize: "var(--text-sm)", margin: 0 }}>
                Building a money buddy that actually talks back.
              </p>
            </Card>

            <Card title="Get in touch">
              <a href={`mailto:${EMAIL}`} style={{ color: "var(--finni-mint)", fontWeight: 600 }}>
                {EMAIL}
              </a>
              <a href={`tel:${PHONE}`} style={{ color: "var(--text-1)" }}>
                {PHONE}
              </a>
              <div style={{ display: "flex", gap: 14, marginTop: 4 }}>
                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-2)", fontSize: "var(--text-sm)" }}>
                  LinkedIn
                </a>
                <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-2)", fontSize: "var(--text-sm)" }}>
                  Facebook
                </a>
              </div>
            </Card>

            {offices.map((o) => (
              <Card key={o.label} title={`Office — ${o.label}`}>
                <address style={{ fontStyle: "normal", color: "var(--text-2)", lineHeight: "var(--lh-relaxed)" }}>
                  {o.lines.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </address>
              </Card>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginTop: 44 }}>
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="lg">
                Get the app
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
