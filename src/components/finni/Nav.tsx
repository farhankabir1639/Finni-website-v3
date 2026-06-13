"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo, Button } from "./ui";

const links = [
  { id: "features", label: "Features", href: "/features" },
  { id: "how", label: "How it works", href: "/how" },
];

export function Nav({ active = "home" }: { active?: string }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={"finni-nav" + (scrolled ? " finni-nav--scrolled" : "")}>
      <div className="finni-container finni-nav__inner">
        <Logo />
        <div className="finni-nav__links">
          {links.map((l) => (
            <Link
              key={l.id}
              href={l.href}
              className={"finni-nav__link" + (active === l.id ? " finni-nav__link--active" : "")}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Link href="/#download">
            <Button variant="primary" size="md">
              Get the app
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
