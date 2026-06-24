import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/finni/Nav";
import { Footer } from "@/components/finni/Footer";
import { Button } from "@/components/finni/ui";
import { PLAY_STORE_URL } from "@/lib/links";
import { EMAIL, PHONE } from "@/lib/company";

const SLUG = "/press/finni-launches-on-google-play";
const HEADLINE =
  "Finni Launches AI Finance Tracker on Google Play, Letting Anyone Track Money Just by Texting or Talking";
const SUBHEAD =
  "The new app turns expense tracking into a plain-language conversation — no forms, no spreadsheets — as fresh data shows many households remain financially stretched.";
const PUBLISHED = "2026-06-24";

const FED_URL = "https://www.federalreserve.gov/consumerscommunities/sheddataviz/unexpectedexpenses-table.html";
const BANKRATE_URL = "https://www.bankrate.com/banking/savings/emergency-savings-report/";

export const metadata: Metadata = {
  title: `${HEADLINE} — Finni`,
  description: SUBHEAD,
  alternates: { canonical: SLUG },
  openGraph: { title: HEADLINE, description: SUBHEAD, url: SLUG, type: "article" },
};

const articleLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: HEADLINE,
  description: SUBHEAD,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  inLanguage: "en",
  mainEntityOfPage: `https://www.heyfinni.com${SLUG}`,
  image: "https://www.heyfinni.com/opengraph-image",
  author: { "@type": "Organization", name: "Finni", url: "https://www.heyfinni.com" },
  publisher: {
    "@type": "Organization",
    name: "Finni",
    logo: { "@type": "ImageObject", url: "https://www.heyfinni.com/images/Finni_Logo_White_Text_1.png" },
  },
};

const para: React.CSSProperties = {
  color: "var(--text-2)",
  lineHeight: "var(--lh-relaxed)",
  margin: "0 0 18px",
};
const h2: React.CSSProperties = { fontSize: "1.5rem", margin: "40px 0 14px" };
const link: React.CSSProperties = { color: "var(--finni-mint)", textDecoration: "underline" };

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <Nav />
      <article className="finni-section finni-section--tight" style={{ paddingTop: 56 }}>
        <div className="finni-container" style={{ maxWidth: 760 }}>
          <Link
            href="/"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--text-3)", fontSize: "var(--text-sm)", marginBottom: 28 }}
          >
            ← Finni home
          </Link>

          <div className="finni-eyebrow" style={{ marginBottom: 16 }}>
            For immediate release
          </div>
          <h1 className="finni-display finni-h2" style={{ marginBottom: 18 }}>
            {HEADLINE}
          </h1>
          <p className="finni-lead" style={{ marginBottom: 32 }}>
            {SUBHEAD}
          </p>

          <p style={para}>
            <strong style={{ color: "var(--text-1)" }}>SAN FRANCISCO &amp; DHAKA — June 24, 2026 —</strong> Finni, the
            personal finance app that works like texting a friend, today announced its launch on the Google Play Store.
            Finni lets people log spending in plain language — by voice or text — and instantly turns it into clear,
            calm answers about their money, with no forms, categories, or spreadsheets to manage.
          </p>

          <p style={para}>
            Money stress remains widespread. According to the{" "}
            <a href={FED_URL} target="_blank" rel="noopener noreferrer" style={link}>
              Federal Reserve&apos;s 2024 Survey of Household Economics and Decisionmaking
            </a>
            , 63% of U.S. adults said they would cover a $400 emergency expense entirely with cash or its equivalent —
            meaning more than a third could not. Separately,{" "}
            <a href={BANKRATE_URL} target="_blank" rel="noopener noreferrer" style={link}>
              Bankrate&apos;s 2026 Emergency Savings Report
            </a>{" "}
            found that just 47% of Americans could cover a $1,000 emergency from savings, and 24% have no emergency
            savings at all. Finni is built to make the everyday habit underneath those numbers — tracking and
            understanding where your money goes — effortless.
          </p>

          <p style={para}>
            Instead of complicated menus, users simply tell Finni what they spent — &ldquo;I spent $12 on lunch&rdquo;
            or &ldquo;paid $80 for electricity&rdquo; — and it logs and categorizes the expense automatically. Finni
            keeps a complete spending history, surfaces a single &ldquo;safe-to-spend&rdquo; number for the day, sends
            gentle nudges before users overspend, and tracks progress toward savings goals. Financial data is encrypted
            and stored securely, and Finni never sells users&apos; personal information.
          </p>

          <p style={para}>
            &ldquo;Most money apps still feel like homework — forms, categories, dashboards no one wants to open,&rdquo;
            said Farhan K, CEO of Finni. &ldquo;We built Finni so the hardest part of managing money becomes the easiest:
            you just say what happened, and Finni handles the rest. It should feel like texting a friend who happens to
            be great with money.&rdquo;
          </p>

          <p style={para}>
            &ldquo;Plain-language logging is only useful if the intelligence behind it is genuinely helpful,&rdquo; said
            Farshid A, CTO of Finni. &ldquo;Finni categorizes spending accurately the moment it lands and turns it into
            insights and recommendations people can actually act on — privately and securely.&rdquo;
          </p>

          <h2 className="finni-display" style={h2}>
            Availability
          </h2>
          <p style={para}>
            Finni is free to download on Android via the{" "}
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" style={link}>
              Google Play Store
            </a>{" "}
            today, with no credit card required. An iOS version is coming soon. Learn more at{" "}
            <a href="https://www.heyfinni.com" style={link}>
              heyfinni.com
            </a>
            .
          </p>

          <div style={{ margin: "28px 0" }}>
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="lg">
                Get the app on Google Play
              </Button>
            </a>
          </div>

          <h2 className="finni-display" style={h2}>
            About Finni
          </h2>
          <p style={para}>
            Finni (Finni Money, Inc.) is a personal finance app that makes managing money as easy as sending a message.
            Users log expenses in plain language by voice or text, and Finni automatically categorizes spending, shows
            what&apos;s safe to spend, delivers personalized insights and budget recommendations, and tracks savings
            goals — all with bank-grade encryption and a promise never to sell personal data. Finni was founded by
            Farhan K (CEO) and Farshid A (CTO), with engineering led by Prionto, and operates from San Francisco,
            California and Dhaka, Bangladesh.
          </p>

          <h2 className="finni-display" style={h2}>
            Media contact
          </h2>
          <p style={para}>
            Finni Media Relations
            <br />
            <a href={`mailto:${EMAIL}`} style={link}>
              {EMAIL}
            </a>
            <br />
            <a href={`tel:${PHONE}`} style={{ color: "var(--text-1)" }}>
              {PHONE}
            </a>
          </p>

          <hr className="finni-divider" style={{ margin: "32px 0 20px" }} />
          <p style={{ color: "var(--text-3)", fontSize: "var(--text-xs)", lineHeight: "var(--lh-relaxed)", margin: 0 }}>
            Sources: Federal Reserve, Survey of Household Economics and Decisionmaking (2024 data, published May 2025);
            Bankrate 2026 Emergency Savings Report. Figures are quoted from the publishers&apos; official pages, linked
            above.
          </p>
        </div>
      </article>
      <Footer />
    </>
  );
}
