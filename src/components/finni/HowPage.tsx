"use client";

import React from "react";
import Link from "next/link";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Button, Icon } from "./ui";
import { useReveal } from "./useReveal";

/* ── Static chat visual (no animation; calm on a content page) ──── */
function HowChat({ lines }: { lines: { from: "user" | "bot"; text: string }[] }) {
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

/* ── "Finni does the math" — auto-categorized rows ──────────────── */
function HowCategorize() {
  const rows = [
    { label: "Groceries", val: 214, cap: 300, tone: "var(--finni-mint)" },
    { label: "Dining out", val: 168, cap: 150, tone: "var(--warning)" },
    { label: "Transport", val: 62, cap: 120, tone: "var(--mk-violet-400)" },
    { label: "Subscriptions", val: 41, cap: 60, tone: "var(--mk-blue-400)" },
  ];
  return (
    <div style={{ display: "grid", gap: 14 }}>
      <div
        style={{
          fontSize: "var(--text-xs)",
          letterSpacing: "var(--ls-caps)",
          textTransform: "uppercase",
          color: "var(--text-3)",
        }}
      >
        Sorted automatically
      </div>
      {rows.map((r) => (
        <div key={r.label}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "var(--text-sm)", marginBottom: 6 }}>
            <span style={{ color: "var(--text-2)" }}>{r.label}</span>
            <span style={{ fontWeight: 600 }}>${r.val}</span>
          </div>
          <div style={{ height: 6, borderRadius: 99, background: "rgba(255,255,255,0.08)", overflow: "hidden" }}>
            <div
              style={{
                width: Math.min(100, (r.val / r.cap) * 100) + "%",
                height: "100%",
                background: r.tone,
                borderRadius: 99,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── "You stay ahead" — safe-to-spend + nudge ───────────────────── */
function HowAhead() {
  return (
    <div style={{ display: "grid", gap: 20 }}>
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            fontSize: "var(--text-xs)",
            letterSpacing: "var(--ls-caps)",
            textTransform: "uppercase",
            color: "var(--text-3)",
            marginBottom: 10,
          }}
        >
          Safe to spend today
        </div>
        <div className="finni-stat finni-mint-text" style={{ fontSize: "clamp(2.6rem,6vw,3.8rem)" }}>
          $185
        </div>
        <div
          style={{
            height: 7,
            borderRadius: 99,
            background: "rgba(255,255,255,0.08)",
            overflow: "hidden",
            margin: "16px auto 0",
            maxWidth: 240,
          }}
        >
          <div style={{ width: "62%", height: "100%", background: "var(--finni-grad)", borderRadius: 99 }} />
        </div>
      </div>
      <div
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
            color: "var(--finni-mint)",
            flex: "none",
          }}
        >
          <Icon name="target" size={19} stroke="var(--finni-mint)" />
        </span>
        <div>
          <div style={{ fontWeight: 600, fontSize: "var(--text-sm)", marginBottom: 2 }}>Nice work 🎉</div>
          <div style={{ color: "var(--text-2)", fontSize: "var(--text-sm)" }}>
            You hit your savings goal 3 days early this month.
          </div>
        </div>
      </div>
    </div>
  );
}

function HowHero() {
  return (
    <header className="finni-section finni-section--tight" style={{ paddingTop: 56, textAlign: "center" }}>
      <div className="finni-container" style={{ maxWidth: 820 }}>
        <div className="reveal">
          <span className="finni-eyebrow finni-eyebrow--center" style={{ justifyContent: "center", marginBottom: 22 }}>
            How it works
          </span>
          <h1 className="finni-display finni-h1" style={{ marginBottom: 22, fontSize: "clamp(2.4rem,5.2vw,3.9rem)" }}>
            Money management <span className="finni-gradient-text">without the management.</span>
          </h1>
          <p className="finni-lead" style={{ margin: "0 auto 30px" }}>
            Logging and categorizing money has always been the chore that breaks budgeting. Finni handles it with your
            voice — one conversation does all the tracking, so you just talk and stay ahead.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/#download">
              <Button variant="primary" size="lg">
                Get the app
              </Button>
            </Link>
            <Link href="/features">
              <Button variant="secondary" size="lg">
                Explore features
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function StepRow({
  flip,
  n,
  icon,
  eyebrow,
  title,
  body,
  points,
  visual,
}: {
  flip?: boolean;
  n: string;
  icon: string;
  eyebrow: string;
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
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
            <span className="finni-icon">
              <Icon name={icon} />
            </span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", color: "var(--text-3)" }}>{n}</span>
          </div>
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

function HowCTA() {
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
            Talk to your money. Finni handles the rest.
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

export function HowPage() {
  useReveal();
  return (
    <>
      <Nav active="how" />
      <HowHero />
      <StepRow
        n="01"
        icon="chat"
        eyebrow="Just talk to it"
        title="Log spending like you'd text a friend."
        body="“Spent $40 on dinner.” “How much can I spend this weekend?” Finni reads plain language — type it the way you'd say it, by voice or text."
        points={["No forms, categories, or receipts to scan", "Works over text — no app to learn", "Ask anything about your money, anytime"]}
        visual={
          <HowChat
            lines={[
              { from: "user", text: "spent $12 on lunch 🌯" },
              { from: "bot", text: "Logged to Food 🍽️ — you've got $88 left this week." },
              { from: "user", text: "and $60 gas" },
              { from: "bot", text: "Got it. Transport's at $142 of $200 👍" },
            ]}
          />
        }
      />
      <StepRow
        flip
        n="02"
        icon="sparkles"
        eyebrow="Finni does the math"
        title="Categorized, tracked, and forecast — automatically."
        body="The moment something lands, Finni sorts it into the right bucket and updates your picture. No rules to set up, no manual tagging, no spreadsheets."
        points={["Accurate auto-categorization", "Live spending vs. your limits", "Bills and goals reserved for you"]}
        visual={<HowCategorize />}
      />
      <StepRow
        n="03"
        icon="trend"
        eyebrow="You stay ahead"
        title="One clear number, and a quiet heads-up."
        body="Finni tells you exactly what's safe to spend today and nudges you gently before you tip over — never a guilt trip, always on your side."
        points={["Safe-to-spend updates in real time", "Friendly nudges before you overspend", "Goals that actually move"]}
        visual={<HowAhead />}
      />
      <HowCTA />
      <Footer />
    </>
  );
}
