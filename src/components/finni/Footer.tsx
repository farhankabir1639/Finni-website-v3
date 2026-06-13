import Link from "next/link";
import { Logo, StoreButtons } from "./ui";

const cols: { h: string; items: [string, string][] }[] = [
  {
    h: "Product",
    items: [
      ["Features", "/features"],
      ["How it works", "/how"],
      ["Blog", "/blog"],
      ["Get the app", "/#download"],
    ],
  },
  {
    h: "Legal",
    items: [
      ["Privacy Policy", "/privacy-policy"],
      ["Delete my data", "/data-deletion"],
    ],
  },
];

export function Footer() {
  return (
    <footer className="finni-footer">
      <div className="finni-container">
        <div
          style={{
            display: "grid",
            gap: 40,
            gridTemplateColumns: "minmax(220px, 1.4fr) repeat(2, 1fr)",
          }}
          className="finni-footer__grid"
        >
          <div>
            <Logo />
            <p className="finni-lead" style={{ fontSize: "var(--text-sm)", marginTop: 16, maxWidth: "34ch" }}>
              The money buddy that actually talks back. Track, plan, and grow your money like you&apos;re texting a
              friend.
            </p>
            <div style={{ marginTop: 22 }}>
              <StoreButtons />
            </div>
            <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
              {["X", "in", "ig"].map((s) => (
                <span
                  key={s}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 11,
                    display: "grid",
                    placeItems: "center",
                    border: "1px solid var(--finni-hairline)",
                    background: "rgba(255,255,255,0.03)",
                    fontSize: 13,
                    color: "var(--text-3)",
                    fontWeight: 600,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <div
                style={{
                  fontSize: "var(--text-xs)",
                  letterSpacing: "var(--ls-caps)",
                  textTransform: "uppercase",
                  color: "var(--text-3)",
                  fontWeight: 600,
                  marginBottom: 16,
                }}
              >
                {c.h}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 11 }}>
                {c.items.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} style={{ color: "var(--text-2)", fontSize: "var(--text-sm)" }}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr className="finni-divider" style={{ margin: "44px 0 24px" }} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
            color: "var(--text-3)",
            fontSize: "var(--text-xs)",
          }}
        >
          <span>© 2026 Finni Money, Inc. All rights reserved.</span>
          <span>Made for people who&apos;d rather text than spreadsheet.</span>
        </div>
      </div>
    </footer>
  );
}
