"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Button, Eyebrow, FinniMark, Icon, StoreButtons } from "./ui";
import { useReveal } from "./useReveal";

type ChatMsg = { from: "user" | "bot"; text?: string; card?: React.ReactNode; delay?: number };

/* ── Animated chat thread ──────────────────────────────────────── */
function ChatThread({
  script,
  loop = false,
  startDelay = 500,
}: {
  script: ChatMsg[];
  loop?: boolean;
  startDelay?: number;
}) {
  const [shown, setShown] = useState(0);
  const [typing, setTyping] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShown(script.length);
      return;
    }
    const clearAll = () => {
      timers.current.forEach(clearTimeout);
      timers.current = [];
    };
    const run = () => {
      clearAll();
      setShown(0);
      setTyping(false);
      let t = startDelay;
      script.forEach((m, i) => {
        if (m.from === "bot") {
          timers.current.push(setTimeout(() => setTyping(true), t));
          t += m.delay || 950;
          timers.current.push(
            setTimeout(() => {
              setTyping(false);
              setShown(i + 1);
            }, t)
          );
          t += 380;
        } else {
          t += m.delay || 700;
          timers.current.push(setTimeout(() => setShown(i + 1), t));
          t += 120;
        }
      });
      if (loop) timers.current.push(setTimeout(run, t + 3200));
    };
    run();
    return clearAll;
  }, [script, loop, startDelay]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [shown, typing]);

  return (
    <div
      ref={scrollRef}
      style={{ display: "flex", flexDirection: "column", gap: 10, overflowY: "hidden", flex: 1, padding: "4px 2px" }}
    >
      {script.slice(0, shown).map((m, i) => (
        <div key={i} className={"finni-bubble " + (m.from === "user" ? "finni-bubble--user" : "finni-bubble--bot")}>
          {m.card ? m.card : m.text}
        </div>
      ))}
      {typing && (
        <div className="finni-bubble finni-bubble--bot" style={{ padding: "13px 16px" }}>
          <span className="finni-typing">
            <span />
            <span />
            <span />
          </span>
        </div>
      )}
    </div>
  );
}

/* mini spending card rendered inside a chat bubble */
function SpendCard() {
  const rows = [
    { label: "Groceries", val: 214, cap: 300, tone: "var(--finni-mint)" },
    { label: "Dining out", val: 168, cap: 150, tone: "var(--warning)" },
    { label: "Transport", val: 62, cap: 120, tone: "var(--mk-violet-400)" },
  ];
  return (
    <div style={{ width: 210 }}>
      <div style={{ fontWeight: 600, marginBottom: 10, fontSize: 13 }}>Here&apos;s your week so far 👇</div>
      <div style={{ display: "grid", gap: 9 }}>
        {rows.map((r) => (
          <div key={r.label}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 4 }}>
              <span style={{ color: "var(--text-2)" }}>{r.label}</span>
              <span style={{ fontWeight: 600 }}>${r.val}</span>
            </div>
            <div style={{ height: 5, borderRadius: 99, background: "rgba(255,255,255,0.08)", overflow: "hidden" }}>
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
    </div>
  );
}

/* ── Phone with looping hero chat ──────────────────────────────── */
function PhoneMockup() {
  const script: ChatMsg[] = [
    { from: "user", text: "how much did I spend on coffee this month? ☕️" },
    {
      from: "bot",
      text: "$58 across 14 visits — about $4.15 a cup. You're trending 12% under last month 📉",
      delay: 1100,
    },
    { from: "user", text: "nice. can I afford a $200 concert ticket?" },
    { from: "bot", text: "Yep — you'll still hit your savings goal. Want me to set aside the $200 now?", delay: 1200 },
    { from: "user", text: "do it 🙌" },
    { from: "bot", text: "Done. Moved to Fun money. You're all set 💚", delay: 900 },
  ];

  return (
    <div className="finni-phone" aria-hidden="true">
      <div className="finni-phone__screen">
        <div className="finni-phone__notch" />
        <div
          style={{
            padding: "44px 16px 12px",
            display: "flex",
            alignItems: "center",
            gap: 10,
            borderBottom: "1px solid var(--finni-hairline)",
          }}
        >
          <FinniMark size={30} />
          <div>
            <div style={{ fontWeight: 700, fontSize: 14, fontFamily: "var(--font-display)" }}>Finni</div>
            <div style={{ fontSize: 11, color: "var(--finni-mint)", display: "flex", alignItems: "center", gap: 5 }}>
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: 99,
                  background: "var(--finni-mint)",
                  boxShadow: "0 0 8px var(--finni-mint)",
                }}
              />
              online
            </div>
          </div>
        </div>
        <div style={{ flex: 1, padding: "12px 14px", display: "flex", flexDirection: "column", minHeight: 0 }}>
          <ChatThread script={script} loop />
        </div>
        <div style={{ padding: "10px 12px 16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "var(--surface-3)",
              border: "1px solid var(--finni-hairline)",
              borderRadius: 999,
              padding: "9px 9px 9px 15px",
            }}
          >
            <span style={{ color: "var(--text-3)", fontSize: 13, flex: 1 }}>Message Finni…</span>
            <span
              style={{
                width: 30,
                height: 30,
                borderRadius: 99,
                background: "var(--finni-grad)",
                display: "grid",
                placeItems: "center",
              }}
            >
              <Icon name="zap" size={15} stroke="#fff" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Waitlist / notify form ────────────────────────────────────── */
function WaitlistForm({ size = "lg", id, cta = "Join the waitlist" }: { size?: "lg" | "md"; id?: string; cta?: string }) {
  const [val, setVal] = useState("");
  const [done, setDone] = useState(false);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (val.includes("@")) setDone(true);
  };
  if (done) {
    return (
      <div
        className="finni-chip"
        style={{ padding: "12px 18px", borderColor: "var(--finni-mint-soft)", background: "var(--finni-mint-soft)" }}
        id={id}
      >
        <Icon name="sparkles" size={18} stroke="var(--finni-mint)" />
        <span style={{ color: "var(--text-1)", fontWeight: 600 }}>
          You&apos;re on the list — we&apos;ll be in touch soon 💚
        </span>
      </div>
    );
  }
  return (
    <form onSubmit={submit} id={id} style={{ display: "flex", gap: 10, flexWrap: "wrap", maxWidth: 470 }}>
      <input
        type="email"
        required
        value={val}
        onChange={(e) => setVal(e.target.value)}
        placeholder="you@email.com"
        style={{
          flex: "1 1 220px",
          height: size === "lg" ? 52 : 46,
          padding: "0 18px",
          borderRadius: 999,
          border: "1px solid var(--finni-hairline-strong)",
          background: "rgba(255,255,255,0.04)",
          color: "var(--text-1)",
          fontFamily: "var(--font-sans)",
          fontSize: "var(--text-md)",
          outline: "none",
        }}
        onFocus={(e) => (e.target.style.borderColor = "var(--border-brand)")}
        onBlur={(e) => (e.target.style.borderColor = "var(--finni-hairline-strong)")}
      />
      <Button variant="primary" size={size} type="submit">
        {cta}
      </Button>
    </form>
  );
}

/* ── Sections ──────────────────────────────────────────────────── */
const HERO_LEAD =
  "Logging and categorizing money has always been the budgeting chore that wears you down. Finni fixes it with your voice — one conversation handles all the tracking, so you just talk and get calm, clear answers.";

/* Bold, centered hero (totalis-inspired) */
function Hero({
  headline,
  accentPhrase,
  lead = HERO_LEAD,
}: {
  headline: string;
  accentPhrase: string;
  lead?: string;
}) {
  return (
    <header
      className="finni-section finni-section--tight"
      style={{ paddingTop: 60, position: "relative", overflow: "hidden", textAlign: "center" }}
    >
      <div className="finni-aurora" aria-hidden="true">
        <span className="a1" />
        <span className="a2" />
      </div>
      <div className="finni-container" style={{ position: "relative", zIndex: 1, maxWidth: 1000 }}>
        <div className="reveal">
          <span className="finni-chip" style={{ marginBottom: 30 }}>
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: 99,
                background: "var(--finni-mint)",
                boxShadow: "0 0 10px var(--finni-mint)",
              }}
            />
            Now live on Google Play · iOS coming soon
          </span>
          <h1
            className="finni-display"
            style={{ fontSize: "clamp(2.9rem, 8.2vw, 6.4rem)", lineHeight: 0.97, letterSpacing: "-0.035em", margin: "0 0 26px" }}
          >
            {headline}
            <br />
            <span className="finni-gradient-text">{accentPhrase}</span>
          </h1>
          <p className="finni-lead" style={{ margin: "0 auto 34px", maxWidth: "60ch" }}>
            {lead}
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <StoreButtons center />
          </div>
          <div
            style={{
              display: "flex",
              gap: 22,
              marginTop: 26,
              flexWrap: "wrap",
              justifyContent: "center",
              color: "var(--text-3)",
              fontSize: "var(--text-sm)",
            }}
          >
            <span style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
              <Icon name="lock" size={16} stroke="var(--finni-mint)" /> Bank-grade encryption
            </span>
            <span style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
              <Icon name="zap" size={16} stroke="var(--finni-mint)" /> Set up in 2 minutes
            </span>
            <span style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
              <Icon name="shield" size={16} stroke="var(--finni-mint)" /> We never sell your data
            </span>
          </div>
        </div>
        <div className="reveal" style={{ display: "flex", justifyContent: "center", marginTop: 58 }}>
          <PhoneMockup />
        </div>
      </div>
    </header>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      icon: "chat",
      h: "Just talk to it",
      b: "“Spent $40 on dinner.” “How much can I spend this weekend?” Finni understands plain language — type it like you'd text a friend.",
    },
    {
      n: "02",
      icon: "sparkles",
      h: "Finni does the math",
      b: "It categorizes, tracks, and forecasts automatically. No rules to set up, no receipts to scan, no manual tagging.",
    },
    {
      n: "03",
      icon: "trend",
      h: "You stay ahead",
      b: "Gentle nudges before you overspend, a clear picture of what's safe to spend, and goals that actually move.",
    },
  ];
  return (
    <section className="finni-section" id="how">
      <div className="finni-container">
        <div className="reveal" style={{ maxWidth: 640, marginBottom: 56 }}>
          <Eyebrow>How it works</Eyebrow>
          <h2 className="finni-display finni-h2" style={{ margin: "16px 0 0" }}>
            Money management without the management.
          </h2>
        </div>
        <div className="finni-grid finni-grid--3">
          {steps.map((s, i) => (
            <Link
              key={s.n}
              href="/how"
              className="finni-card finni-card--hover reveal"
              style={{ display: "block", transitionDelay: i * 70 + "ms" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 22,
                }}
              >
                <span className="finni-icon">
                  <Icon name={s.icon} />
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-sm)", color: "var(--text-3)" }}>
                  {s.n}
                </span>
              </div>
              <h3 className="finni-display finni-h3" style={{ fontSize: "1.4rem", marginBottom: 10 }}>
                {s.h}
              </h3>
              <p style={{ color: "var(--text-2)", margin: 0, lineHeight: "var(--lh-relaxed)", fontSize: "var(--text-sm)" }}>
                {s.b}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChatDemoSection() {
  const script: ChatMsg[] = [
    { from: "user", text: "ugh I think I overspent this month 😬" },
    { from: "bot", text: "Let's take a look — no stress. Here's where things landed:", delay: 1000 },
    { from: "bot", card: <SpendCard />, delay: 700 },
    {
      from: "bot",
      text: "Dining out is a little over, everything else is healthy. Want me to nudge you next time you're near the limit?",
      delay: 1300,
    },
    { from: "user", text: "yes please. and how much can I safely spend this weekend?" },
    {
      from: "bot",
      text: "You've got $185 of flex money left and rent is already covered. $120 keeps you comfortably on track 👍",
      delay: 1300,
    },
  ];
  const lenses: [string, string, string][] = [
    ["chat", "Ask anything", "“Can I afford this?” gets a straight answer in seconds."],
    ["bell", "Quiet nudges", "A heads-up before you overspend — never a guilt trip."],
    ["target", "Goals that move", "Watch savings grow without thinking about it."],
  ];
  return (
    <section className="finni-section">
      <div
        className="finni-container"
        style={{ display: "grid", gap: 56, gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", alignItems: "center" }}
      >
        <div className="reveal">
          <Eyebrow>The conversation</Eyebrow>
          <h2 className="finni-display finni-h2" style={{ margin: "16px 0 20px" }}>
            It&apos;s like having a money person in your pocket.
          </h2>
          <p className="finni-lead" style={{ marginBottom: 26 }}>
            No dashboards to decode. No budgets to babysit. Just ask Finni what you want to know and get a real, human
            answer — backed by your actual numbers.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 16 }}>
            {lenses.map(([ic, h, b]) => (
              <li key={h} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <span className="finni-icon" style={{ width: 40, height: 40 }}>
                  <Icon name={ic} size={19} />
                </span>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: 2 }}>{h}</div>
                  <div style={{ color: "var(--text-2)", fontSize: "var(--text-sm)" }}>{b}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="reveal" style={{ display: "flex", justifyContent: "center" }}>
          <div
            className="finni-card"
            style={{
              width: "100%",
              maxWidth: 420,
              height: 540,
              display: "flex",
              flexDirection: "column",
              padding: 0,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "18px 20px",
                borderBottom: "1px solid var(--finni-hairline)",
                display: "flex",
                alignItems: "center",
                gap: 11,
              }}
            >
              <FinniMark size={34} />
              <div>
                <div style={{ fontWeight: 700, fontFamily: "var(--font-display)" }}>Finni</div>
                <div style={{ fontSize: 12, color: "var(--finni-mint)", display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ width: 6, height: 6, borderRadius: 99, background: "var(--finni-mint)" }} /> typically
                  replies instantly
                </div>
              </div>
            </div>
            <div style={{ flex: 1, padding: "16px 18px", display: "flex", flexDirection: "column", minHeight: 0 }}>
              <ChatThread script={script} loop startDelay={700} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const feats: [string, string, string][] = [
    ["wallet", "Plain-English logging", "“Coffee $5.” Done. No forms, no categories, no friction."],
    ["sparkles", "Auto-categorize", "Every transaction sorted the moment it lands — accurately."],
    ["trend", "Safe-to-spend", "One number that tells you exactly what's free to spend today."],
    ["bell", "Smart nudges", "Friendly heads-ups before you tip over a budget, never after."],
    ["target", "Goals on autopilot", "Set it once. Finni quietly moves money toward what matters."],
    ["lock", "Private by design", "Bank-grade encryption. We never sell or share your data."],
  ];
  return (
    <section className="finni-section" id="features">
      <div className="finni-container">
        <div className="reveal" style={{ maxWidth: 640, marginBottom: 52 }}>
          <Eyebrow>Features</Eyebrow>
          <h2 className="finni-display finni-h2" style={{ margin: "16px 0 0" }}>
            Everything you&apos;d nag a friend to do for you.
          </h2>
        </div>
        <div className="finni-grid finni-grid--3">
          {feats.map(([ic, h, b], i) => (
            <Link
              key={h}
              href="/features"
              className="finni-card finni-card--hover reveal"
              style={{ display: "block", transitionDelay: (i % 3) * 70 + "ms" }}
            >
              <span className="finni-icon" style={{ marginBottom: 20 }}>
                <Icon name={ic} />
              </span>
              <h3 className="finni-display" style={{ fontSize: "1.25rem", marginBottom: 9 }}>
                {h}
              </h3>
              <p style={{ color: "var(--text-2)", margin: 0, fontSize: "var(--text-sm)", lineHeight: "var(--lh-relaxed)" }}>
                {b}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUp({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  dur = 1400,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  dur?: number;
}) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setV(to);
      return;
    }
    const steps = Math.max(1, Math.round(dur / 16));
    let i = 0;
    const id = setInterval(() => {
      i++;
      const p = Math.min(1, i / steps);
      setV(to * (1 - Math.pow(1 - p, 3)));
      if (p >= 1) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [to, dur]);
  const num = decimals ? v.toFixed(decimals) : Math.round(v).toLocaleString();
  return (
    <span>
      {prefix}
      {num}
      {suffix}
    </span>
  );
}

function Stats() {
  const stats = [
    { prefix: "$", to: 2400, suffix: "", dec: 0, l: "saved per user, first year", c: "var(--finni-mint)" },
    { prefix: "", to: 2, suffix: " min", dec: 0, l: "to set up — then it's hands-off", c: "var(--mk-violet-300)" },
    { prefix: "", to: 4.9, suffix: "★", dec: 1, l: "average app rating", c: "var(--finni-mint)" },
    { prefix: "", to: 68, suffix: "%", dec: 0, l: "spend less in month one", c: "var(--mk-violet-300)" },
  ];
  return (
    <section className="finni-section--tight">
      <div className="finni-container">
        <div
          className="finni-card finni-stats-card reveal"
          style={{
            padding: "44px 40px",
            background: "linear-gradient(135deg, rgba(124,92,252,0.10), rgba(63,224,192,0.06)), var(--surface-2)",
          }}
        >
          <span className="finni-orb" style={{ width: 12, height: 12, top: 24, left: "11%" }} />
          <span className="finni-orb" style={{ width: 7, height: 7, top: 64, right: "15%", animationDelay: "1.4s" }} />
          <span className="finni-orb" style={{ width: 9, height: 9, bottom: 28, left: "46%", animationDelay: "2.3s" }} />
          <div className="finni-grid finni-grid--4" style={{ gap: 32 }}>
            {stats.map((s) => (
              <div key={s.l} style={{ textAlign: "center" }}>
                <div className="finni-stat" style={{ color: s.c }}>
                  <CountUp to={s.to} prefix={s.prefix} suffix={s.suffix} decimals={s.dec} />
                </div>
                <div style={{ color: "var(--text-2)", fontSize: "var(--text-sm)", marginTop: 10 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    {
      q: "I stopped dreading my bank app. Now I just ask Finni and it tells me straight. It feels like a friend who happens to be great with money.",
      n: "Maya R.",
      r: "Designer, Austin",
    },
    {
      q: "The safe-to-spend number changed everything. No more guessing if I can grab dinner out. I've saved more in 3 months than all of last year.",
      n: "Devin K.",
      r: "Engineer, Toronto",
    },
    {
      q: "I've tried every budgeting app. They all feel like homework. Finni feels like texting. That's the whole difference.",
      n: "Priya S.",
      r: "Founder, London",
    },
  ];
  return (
    <section className="finni-section">
      <div className="finni-container">
        <div className="reveal" style={{ maxWidth: 640, marginBottom: 48 }}>
          <Eyebrow>Loved by early users</Eyebrow>
          <h2 className="finni-display finni-h2" style={{ margin: "16px 0 0" }}>
            People who&apos;d rather not think about money.
          </h2>
        </div>
        <div className="finni-grid finni-grid--3">
          {quotes.map((t, i) => (
            <figure
              key={t.n}
              className="finni-card reveal"
              style={{ margin: 0, transitionDelay: i * 70 + "ms", display: "flex", flexDirection: "column", gap: 20 }}
            >
              <div
                style={{
                  color: "var(--finni-mint)",
                  fontFamily: "var(--font-display)",
                  fontSize: "2.2rem",
                  lineHeight: 0.5,
                  height: 18,
                }}
              >
                “
              </div>
              <blockquote
                style={{ margin: 0, color: "var(--text-1)", fontSize: "var(--text-md)", lineHeight: "var(--lh-relaxed)" }}
              >
                {t.q}
              </blockquote>
              <figcaption style={{ display: "flex", alignItems: "center", gap: 12, marginTop: "auto" }}>
                <span
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 99,
                    background: "var(--finni-grad)",
                    display: "grid",
                    placeItems: "center",
                    color: "#fff",
                    fontWeight: 700,
                    fontFamily: "var(--font-display)",
                  }}
                >
                  {t.n[0]}
                </span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: "var(--text-sm)" }}>{t.n}</div>
                  <div style={{ color: "var(--text-3)", fontSize: "var(--text-xs)" }}>{t.r}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="finni-section" id="download">
      <span id="waitlist" aria-hidden="true" style={{ position: "absolute", marginTop: -90 }} />
      <div className="finni-container">
        <div
          className="finni-card reveal"
          style={{
            padding: "clamp(40px, 6vw, 72px)",
            textAlign: "center",
            background: "radial-gradient(120% 120% at 50% 0%, rgba(124,92,252,0.18), transparent 60%), var(--surface-2)",
            border: "1px solid var(--border-brand)",
          }}
        >
          <span className="finni-chip" style={{ marginBottom: 24 }}>
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: 99,
                background: "var(--finni-mint)",
                boxShadow: "0 0 10px var(--finni-mint)",
              }}
            />
            Now live on Google Play
          </span>
          <h2 className="finni-display finni-h2" style={{ marginBottom: 16, maxWidth: 720, marginInline: "auto" }}>
            Get on speaking terms with your money.
          </h2>
          <p className="finni-lead" style={{ margin: "0 auto 30px", textAlign: "center" }}>
            Download Finni free on Android today — iOS is coming soon. Set up in two minutes, no card required.
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <StoreButtons center />
          </div>
          <div style={{ marginTop: 30, maxWidth: 480, marginInline: "auto" }}>
            <p style={{ color: "var(--text-3)", fontSize: "var(--text-sm)", marginBottom: 12 }}>
              Want it on iOS? Get notified the day it launches.
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <WaitlistForm id="ios-notify" cta="Notify me" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  useReveal();
  return (
    <>
      <Nav active="home" />
      <Hero headline="Your money, finally" accentPhrase="on speaking terms." />
      <HowItWorks />
      <ChatDemoSection />
      <Features />
      <Stats />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </>
  );
}
