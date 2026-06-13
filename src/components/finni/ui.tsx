"use client";

import Link from "next/link";
import React from "react";
import { PLAY_STORE_URL } from "@/lib/links";

/* ── Line-icon set (Lucide-style, 1.75px stroke) ───────────────── */
export function Icon({
  name,
  size = 22,
  stroke = "currentColor",
}: {
  name: string;
  size?: number;
  stroke?: string;
}) {
  const paths: Record<string, React.ReactNode> = {
    chat: <path d="M21 11.5a8.4 8.4 0 0 1-12.1 7.5L3 21l2-5.9A8.4 8.4 0 1 1 21 11.5Z" />,
    wallet: (
      <>
        <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5H18a2 2 0 0 1 2 2v0H5.5" />
        <path d="M3 7.5V17a2 2 0 0 0 2 2h14a1 1 0 0 0 1-1v-3" />
        <path d="M21 11.5h-4a2 2 0 1 0 0 4h4Z" />
      </>
    ),
    trend: (
      <>
        <path d="M3 17l5.5-5.5 3.5 3.5L21 7" />
        <path d="M15 7h6v6" />
      </>
    ),
    bell: (
      <>
        <path d="M18 9a6 6 0 1 0-12 0c0 5-2 6-2 6h16s-2-1-2-6Z" />
        <path d="M10.5 20a1.8 1.8 0 0 0 3 0" />
      </>
    ),
    shield: <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />,
    target: (
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3.6" />
      </>
    ),
    calendar: (
      <>
        <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
        <path d="M3.5 9.5h17M8 3v4M16 3v4" />
      </>
    ),
    sparkles: (
      <>
        <path d="M12 4l1.6 4.4L18 10l-4.4 1.6L12 16l-1.6-4.4L6 10l4.4-1.6Z" />
        <path d="M18.5 15.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7Z" />
      </>
    ),
    lock: (
      <>
        <rect x="4.5" y="10.5" width="15" height="9.5" rx="2.5" />
        <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
      </>
    ),
    zap: <path d="M13 3 5 13h6l-1 8 8-10h-6l1-8Z" />,
    check: <path d="M5 12.5l4.5 4.5L19 6.5" />,
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    pie: (
      <>
        <path d="M12 3a9 9 0 1 0 9 9h-9Z" />
        <path d="M12 3v9h9A9 9 0 0 0 12 3Z" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

/* ── Finni logo mark: a chat bubble with an upward "money" spark ── */
export function FinniMark({ size = 34 }: { size?: number }) {
  return (
    <span className="finni-logo__mark" style={{ width: size, height: size, borderRadius: size * 0.32 }}>
      <svg width={size * 0.6} height={size * 0.6} viewBox="0 0 24 24" fill="none">
        <path
          d="M4 6.4C4 5.07 5.07 4 6.4 4h11.2C18.93 4 20 5.07 20 6.4v8.5c0 1.32-1.07 2.4-2.4 2.4H9.7L5.6 20.6a.8.8 0 0 1-1.3-.62V6.4Z"
          fill="rgba(255,255,255,0.95)"
        />
        <path
          d="M8 13.2l2.7-2.9 2 1.9 3.1-3.6"
          stroke="#7C5CFC"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="16.4" cy="8.4" r="1.15" fill="#3FE0C0" />
      </svg>
    </span>
  );
}

export function Logo({ size = 34 }: { size?: number }) {
  return (
    <Link href="/" className="finni-logo" aria-label="Finni home">
      <FinniMark size={size} />
      <span className="finni-logo__word">finni</span>
    </Link>
  );
}

/* ── Section eyebrow ──────────────────────────────────────────── */
export function Eyebrow({
  children,
  center = false,
}: {
  children: React.ReactNode;
  center?: boolean;
}) {
  return <span className={"finni-eyebrow" + (center ? " finni-eyebrow--center" : "")}>{children}</span>;
}

/* ── Button (ported from the Markopolo design system) ──────────── */
type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  style?: React.CSSProperties;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft = null,
  iconRight = null,
  disabled = false,
  fullWidth = false,
  style = {},
  ...rest
}: ButtonProps) {
  const sizes = {
    sm: { padding: "0 14px", height: 34, fontSize: "var(--text-sm)", gap: 6 },
    md: { padding: "0 18px", height: 42, fontSize: "var(--text-sm)", gap: 8 },
    lg: { padding: "0 24px", height: 50, fontSize: "var(--text-md)", gap: 10 },
  };
  const variants = {
    primary: {
      background: "var(--mk-grad-brand)",
      color: "var(--text-on-brand)",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-brand)",
    },
    secondary: {
      background: "var(--surface-3)",
      color: "var(--text-1)",
      border: "1px solid var(--border-strong)",
      boxShadow: "var(--inset-hairline)",
    },
    ghost: {
      background: "transparent",
      color: "var(--text-2)",
      border: "1px solid transparent",
      boxShadow: "none",
    },
    danger: {
      background: "var(--danger)",
      color: "#fff",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-sm)",
    },
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  return (
    <button
      disabled={disabled}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: s.gap,
        height: s.height,
        padding: s.padding,
        width: fullWidth ? "100%" : "auto",
        fontFamily: "var(--font-sans)",
        fontWeight: "var(--fw-semibold)" as unknown as number,
        fontSize: s.fontSize,
        letterSpacing: "var(--ls-snug)",
        borderRadius: "var(--radius-pill)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        whiteSpace: "nowrap",
        transition:
          "transform var(--dur-fast) var(--ease-out), filter var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)",
        ...v,
        ...style,
      }}
      onMouseDown={(e) => {
        if (!disabled) e.currentTarget.style.transform = "scale(0.97)";
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
      onMouseEnter={(e) => {
        if (!disabled) e.currentTarget.style.filter = "brightness(1.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.filter = "none";
        e.currentTarget.style.transform = "scale(1)";
      }}
      {...rest}
    >
      {iconLeft && <span style={{ display: "inline-flex" }}>{iconLeft}</span>}
      {children}
      {iconRight && <span style={{ display: "inline-flex" }}>{iconRight}</span>}
    </button>
  );
}

/* ── Badge (ported from the Markopolo design system) ───────────── */
type BadgeTone = "neutral" | "brand" | "success" | "danger" | "warning" | "info";
export function Badge({
  children,
  tone = "neutral",
  variant = "soft",
  dot = false,
  size = "md",
  style = {},
  ...rest
}: {
  children: React.ReactNode;
  tone?: BadgeTone;
  variant?: "soft" | "solid" | "outline";
  dot?: boolean;
  size?: "sm" | "md";
  style?: React.CSSProperties;
} & React.HTMLAttributes<HTMLSpanElement>) {
  const tones: Record<BadgeTone, { fg: string; soft: string; solid: string }> = {
    neutral: { fg: "var(--mk-slate-300)", soft: "rgba(148,163,184,0.14)", solid: "var(--mk-slate-400)" },
    brand: { fg: "var(--mk-violet-300)", soft: "var(--mk-violet-soft)", solid: "var(--brand)" },
    success: { fg: "var(--mk-emerald-400)", soft: "var(--success-soft)", solid: "var(--success)" },
    danger: { fg: "var(--mk-red-400)", soft: "var(--danger-soft)", solid: "var(--danger)" },
    warning: { fg: "var(--mk-amber-400)", soft: "var(--warning-soft)", solid: "var(--warning)" },
    info: { fg: "var(--mk-blue-400)", soft: "var(--info-soft)", solid: "var(--info)" },
  };
  const t = tones[tone] || tones.neutral;
  const sizes = {
    sm: { fontSize: "var(--text-2xs)", padding: "2px 8px", gap: 5, dotSize: 5 },
    md: { fontSize: "var(--text-xs)", padding: "4px 11px", gap: 6, dotSize: 6 },
  };
  const s = sizes[size] || sizes.md;
  const isSolid = variant === "solid";
  const isOutline = variant === "outline";
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: s.gap,
        padding: s.padding,
        fontFamily: "var(--font-sans)",
        fontWeight: "var(--fw-semibold)" as unknown as number,
        fontSize: s.fontSize,
        letterSpacing: "var(--ls-wide)",
        lineHeight: 1,
        borderRadius: "var(--radius-pill)",
        whiteSpace: "nowrap",
        color: isSolid ? "#fff" : t.fg,
        background: isSolid ? t.solid : isOutline ? "transparent" : t.soft,
        border: isOutline ? `1px solid ${t.fg}` : "1px solid transparent",
        ...style,
      }}
      {...rest}
    >
      {dot && (
        <span
          style={{
            width: s.dotSize,
            height: s.dotSize,
            borderRadius: "50%",
            background: isSolid ? "#fff" : t.solid,
            boxShadow: isSolid ? "none" : `0 0 0 3px ${t.soft}`,
            flex: "none",
          }}
        />
      )}
      {children}
    </span>
  );
}

/* ── App store download buttons (Android live, iOS coming soon) ── */
export function StoreButtons({ center = false }: { center?: boolean }) {
  return (
    <div className="finni-stores" style={{ justifyContent: center ? "center" : "flex-start" }}>
      <a
        className="finni-store finni-store--live"
        href={PLAY_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="finni-store__glyph">
          <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3.6 2.3 13.3 12 3.6 21.7c-.3-.2-.5-.6-.5-1.1V3.4c0-.5.2-.9.5-1.1Z" fill="#3FE0C0" />
            <path d="m16.2 9.1 3 1.7c1 .6 1 1.8 0 2.4l-3 1.7L13.3 12l2.9-2.9Z" fill="#FBBF24" />
            <path d="M3.6 2.3c.4-.2.9-.2 1.4.1l11.2 6.7L13.3 12 3.6 2.3Z" fill="#7C5CFC" />
            <path d="m3.6 21.7 9.7-9.7 2.9 2.9-11.2 6.7c-.5.3-1 .3-1.4.1Z" fill="#EC4899" />
          </svg>
        </span>
        <span>
          <small>Now on</small>
          <strong>Google Play</strong>
        </span>
      </a>
      <span className="finni-store finni-store--soon" aria-label="iOS coming soon">
        <span className="finni-store__glyph">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--text-2)" aria-hidden="true">
            <path d="M16.4 12.7c0-2 1.6-2.9 1.7-3-1-1.4-2.4-1.6-3-1.6-1.3-.1-2.5.7-3.1.7-.7 0-1.6-.7-2.6-.7-1.4 0-2.6.8-3.3 2-1.4 2.4-.4 6 1 8 .7 1 1.4 2 2.4 2 1 0 1.3-.6 2.5-.6s1.5.6 2.5.6 1.7-.9 2.3-1.9c.7-1 1-2 1-2.1 0 0-2-.8-2-3.1Z" />
            <path d="M14.6 6.8c.5-.7.9-1.6.8-2.6-.8 0-1.8.6-2.4 1.2-.5.6-1 1.5-.8 2.4.9.1 1.8-.4 2.4-1Z" />
          </svg>
        </span>
        <span>
          <small>Coming soon</small>
          <strong>App Store</strong>
        </span>
      </span>
    </div>
  );
}
