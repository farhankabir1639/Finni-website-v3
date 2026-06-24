import type { Metadata } from "next";
import { Nav } from "@/components/finni/Nav";
import { Footer } from "@/components/finni/Footer";
import { Button } from "@/components/finni/ui";
import { PLAY_STORE_URL } from "@/lib/links";
import { EMAIL, PHONE, LINKEDIN, FACEBOOK, team, offices, appLd } from "@/lib/company";
import { breadcrumbLd } from "@/lib/breadcrumb";

export const metadata: Metadata = {
  title: "About — Finni",
  description:
    "About Finni — the personal finance app that feels like texting a friend. Founders, offices, and how to get in touch.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Finni",
    description:
      "About Finni — the personal finance app that feels like texting a friend. Founders, offices, and how to get in touch.",
    url: "/about",
  },
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
      {/* Organization JSON-LD is rendered site-wide in the root layout. */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbLd([
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
            ])
          ),
        }}
      />
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
            <Card title="Team">
              <div style={{ display: "grid", gap: 10 }}>
                {team.map((p) => (
                  <div
                    key={p.name}
                    style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12 }}
                  >
                    <span style={{ fontSize: "var(--text-md)", color: "var(--text-1)", fontWeight: 600 }}>{p.name}</span>
                    <span
                      style={{
                        fontSize: "var(--text-xs)",
                        letterSpacing: "var(--ls-caps)",
                        textTransform: "uppercase",
                        color: "var(--finni-mint)",
                        fontWeight: 600,
                      }}
                    >
                      {p.role}
                    </span>
                  </div>
                ))}
              </div>
              <p style={{ color: "var(--text-2)", fontSize: "var(--text-sm)", margin: "6px 0 0" }}>
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
