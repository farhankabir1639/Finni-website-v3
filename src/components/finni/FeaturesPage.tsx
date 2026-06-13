"use client";

import React from "react";
import Link from "next/link";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Button, Icon } from "./ui";
import { useReveal } from "./useReveal";

/* small static chat visual */
function MiniChat({ lines }: { lines: { from: "user" | "bot"; text: string }[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {lines.map((l, i) => (
        <div
          key={i}
          className={"finni-bubble " + (l.from === "user" ? "finni-bubble--user" : "finni-bubble--bot")}
          style={{ animation: "none" }}
        >
          {l.text}
        </div>
      ))}
    </div>
  );
}

/* safe-to-spend number card */
function SafeToSpend() {
  return (
    <div style={{ textAlign: "center", padding: "8px 6px" }}>
      <div
        style={{
          fontSize: "var(--text-xs)",
          letterSpacing: "var(--ls-caps)",
          textTransform: "uppercase",
          color: "var(--text-3)",
          marginBottom: 12,
        }}
      >
        Safe to spend today
      </div>
      <div className="finni-stat finni-mint-text" style={{ fontSize: "clamp(3rem,7vw,4.4rem)" }}>
        $185
      </div>
      <div
        style={{
          height: 7,
          borderRadius: 99,
          background: "rgba(255,255,255,0.08)",
          overflow: "hidden",
          margin: "20px auto 12px",
          maxWidth: 240,
        }}
      >
        <div style={{ width: "62%", height: "100%", background: "var(--finni-grad)", borderRadius: 99 }} />
      </div>
      <div style={{ color: "var(--text-2)", fontSize: "var(--text-sm)" }}>Rent, bills &amp; goals already set aside ✓</div>
    </div>
  );
}

/* category donut + chips */
function Categories() {
  const cats: [string, number, string][] = [
    ["Groceries", 38, "var(--finni-mint)"],
    ["Dining", 24, "var(--mk-violet-400)"],
    ["Transport", 18, "var(--mk-blue-400)"],
    ["Other", 20, "var(--mk-slate-400)"],
  ];
  let acc = 0;
  const stops = cats
    .map(([, pct, c]) => {
      const s = `${c} ${acc}% ${acc + pct}%`;
      acc += pct;
      return s;
    })
    .join(", ");
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 28, flexWrap: "wrap", justifyContent: "center" }}>
      <div
        style={{
          width: 150,
          height: 150,
          borderRadius: "50%",
          background: `conic-gradient(${stops})`,
          position: "relative",
          flex: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 24,
            borderRadius: "50%",
            background: "var(--surface-2)",
            display: "grid",
            placeItems: "center",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.3rem" }}>$1,240</div>
            <div style={{ fontSize: 11, color: "var(--text-3)" }}>this month</div>
          </div>
        </div>
      </div>
      <div style={{ display: "grid", gap: 11, minWidth: 150 }}>
        {cats.map(([n, pct, c]) => (
          <div key={n} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "var(--text-sm)" }}>
            <span style={{ width: 10, height: 10, borderRadius: 3, background: c, flex: "none" }} />
            <span style={{ color: "var(--text-2)", flex: 1 }}>{n}</span>
            <span style={{ fontWeight: 600 }}>{pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* nudge notification */
function Nudge() {
  const items: [string, string, string, string][] = [
    ["bell", "var(--warning)", "Heads up 👋", "You're $12 from your Dining budget. Maybe cook tonight?"],
    ["target", "var(--finni-mint)", "Nice work 🎉", "You hit your savings goal 3 days early this month."],
  ];
  return (
    <div style={{ display: "grid", gap: 14 }}>
      {items.map(([ic, c, h, b]) => (
        <div
          key={h}
          style={{
            display: "flex",
            gap: 13,
            alignItems: "flex-start",
            padding: "15px 16px",
            borderRadius: "var(--radius-lg)",
            background: "var(--surface-3)",
            border: "1px solid var(--finni-hairline)",
          }}
        >
          <span
            style={{
              width: 38,
              height: 38,
              borderRadius: 11,
              display: "grid",
              placeItems: "center",
              background: "rgba(255,255,255,0.05)",
              color: c,
              flex: "none",
            }}
          >
            <Icon name={ic} size={19} stroke={c} />
          </span>
          <div>
            <div style={{ fontWeight: 600, fontSize: "var(--text-sm)", marginBottom: 2 }}>{h}</div>
            <div style={{ color: "var(--text-2)", fontSize: "var(--text-sm)" }}>{b}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function FeatureHero() {
  return (
    <header className="finni-section finni-section--tight" style={{ paddingTop: 56, textAlign: "center" }}>
      <div className="finni-container" style={{ maxWidth: 800 }}>
        <div className="reveal">
          <span className="finni-eyebrow finni-eyebrow--center" style={{ justifyContent: "center", marginBottom: 22 }}>
            Features
          </span>
          <h1 className="finni-display finni-h1" style={{ marginBottom: 22, fontSize: "clamp(2.4rem,5.2vw,3.9rem)" }}>
            Built to make money feel <span className="finni-gradient-text">easy.</span>
          </h1>
          <p className="finni-lead" style={{ margin: "0 auto 30px" }}>
            Everything in Finni works the same way: you talk, it handles the rest. No dashboards to learn, no budgets to
            babysit — just clear answers and quiet, helpful nudges.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/#download">
              <Button variant="primary" size="lg">
                Get the app
              </Button>
            </Link>
            <Link href="/how">
              <Button variant="secondary" size="lg">
                How it works
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function FeatureRow({
  flip,
  eyebrow,
  icon,
  title,
  body,
  points,
  visual,
}: {
  flip?: boolean;
  eyebrow: string;
  icon: string;
  title: string;
  body: string;
  points?: string[];
  visual: React.ReactNode;
}) {
  return (
    <section className="finni-section--tight">
      <div
        className="finni-container"
        style={{ display: "grid", gap: 56, gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", alignItems: "center" }}
      >
        <div className="reveal" style={{ order: flip ? 2 : 1 }}>
          <span className="finni-icon" style={{ marginBottom: 20 }}>
            <Icon name={icon} />
          </span>
          <div className="finni-eyebrow" style={{ marginBottom: 10 }}>
            {eyebrow}
          </div>
          <h2 className="finni-display finni-h3" style={{ marginBottom: 14 }}>
            {title}
          </h2>
          <p className="finni-lead" style={{ fontSize: "var(--text-md)", marginBottom: points ? 20 : 0 }}>
            {body}
          </p>
          {points && (
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 11 }}>
              {points.map((p) => (
                <li
                  key={p}
                  style={{ display: "flex", gap: 10, alignItems: "center", color: "var(--text-2)", fontSize: "var(--text-sm)" }}
                >
                  <span style={{ color: "var(--finni-mint)", display: "inline-flex" }}>
                    <Icon name="check" size={18} stroke="var(--finni-mint)" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="reveal" style={{ order: flip ? 1 : 2 }}>
          <div className="finni-card" style={{ padding: 28 }}>
            {visual}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureGrid() {
  const feats: [string, string, string][] = [
    ["wallet", "Plain-English logging", "“Coffee $5.” Done. No forms, no categories, no friction."],
    ["pie", "Auto-categorize", "Every transaction sorted the moment it lands — accurately."],
    ["trend", "Safe-to-spend", "One number that tells you exactly what's free to spend today."],
    ["bell", "Smart nudges", "Friendly heads-ups before you tip over a budget, never after."],
    ["target", "Goals on autopilot", "Set it once. Finni quietly moves money toward what matters."],
    ["lock", "Private by design", "Bank-grade encryption. We never sell or share your data."],
  ];
  return (
    <section className="finni-section">
      <div className="finni-container">
        <div className="reveal" style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 52px" }}>
          <span className="finni-eyebrow finni-eyebrow--center" style={{ justifyContent: "center" }}>
            Everything else
          </span>
          <h2 className="finni-display finni-h2" style={{ margin: "16px 0 0" }}>
            The whole toolkit, none of the homework.
          </h2>
        </div>
        <div className="finni-grid finni-grid--3">
          {feats.map(([ic, h, b], i) => (
            <div key={h} className="finni-card finni-card--hover reveal" style={{ transitionDelay: (i % 3) * 70 + "ms" }}>
              <span className="finni-icon" style={{ marginBottom: 20 }}>
                <Icon name={ic} />
              </span>
              <h3 className="finni-display" style={{ fontSize: "1.25rem", marginBottom: 9 }}>
                {h}
              </h3>
              <p style={{ color: "var(--text-2)", margin: 0, fontSize: "var(--text-sm)", lineHeight: "var(--lh-relaxed)" }}>
                {b}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="finni-section">
      <div className="finni-container">
        <div
          className="finni-card reveal"
          style={{
            padding: "clamp(40px,6vw,64px)",
            textAlign: "center",
            background: "radial-gradient(120% 120% at 50% 0%, rgba(124,92,252,0.18), transparent 60%), var(--surface-2)",
            border: "1px solid var(--border-brand)",
          }}
        >
          <h2 className="finni-display finni-h2" style={{ marginBottom: 14 }}>
            Ready to meet your money buddy?
          </h2>
          <p className="finni-lead" style={{ margin: "0 auto 28px" }}>
            Free on Android today, iOS coming soon. Set up in two minutes.
          </p>
          <Link href="/#download">
            <Button variant="primary" size="lg">
              Get the app
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function FeaturesPage() {
  useReveal();
  return (
    <>
      <Nav active="features" />
      <FeatureHero />
      <FeatureRow
        eyebrow="Just talk"
        icon="chat"
        title="Log spending like you'd text a friend."
        body="Type it the way you'd say it. Finni reads plain language, figures out the amount and category, and logs it instantly."
        points={["“Spent $40 on dinner” → logged to Dining", "Ask “how am I doing this week?” anytime", "Works over text, no app-switching"]}
        visual={
          <MiniChat
            lines={[
              { from: "user", text: "spent $12 on lunch 🌯" },
              { from: "bot", text: "Logged to Food 🍽️ — you've got $88 left this week." },
              { from: "user", text: "and $60 gas" },
              { from: "bot", text: "Got it. Transport's at $142 of $200 👍" },
            ]}
          />
        }
      />
      <FeatureRow
        flip
        eyebrow="Safe to spend"
        icon="trend"
        title="One number that means everything."
        body="Finni does the mental math — rent, bills, goals, upcoming charges — and tells you the single number that's actually free to spend today."
        points={["Updates live as money moves", "Bills & goals reserved automatically", "Never accidentally dip into rent again"]}
        visual={<SafeToSpend />}
      />
      <FeatureRow
        eyebrow="Auto-categorize"
        icon="pie"
        title="Sorted before you even think about it."
        body="Every transaction lands in the right bucket the moment it happens. See exactly where your money goes — no spreadsheets, no manual tagging."
        visual={<Categories />}
      />
      <FeatureRow
        flip
        eyebrow="Smart nudges"
        icon="bell"
        title="A gentle heads-up, never a guilt trip."
        body="Finni taps you on the shoulder before you overspend and quietly celebrates when you're ahead. Calm, kind, and always on your side."
        visual={<Nudge />}
      />
      <FeatureGrid />
      <CTA />
      <Footer />
    </>
  );
}
