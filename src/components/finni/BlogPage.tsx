"use client";

import React from "react";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Button, Eyebrow, Icon } from "./ui";
import { useReveal } from "./useReveal";

const CATS: Record<string, { c1: string; c2: string; icon: string }> = {
  "Money basics": { c1: "#7C5CFC", c2: "#5B3FD6", icon: "wallet" },
  Guides: { c1: "#FB923C", c2: "#B45309", icon: "target" },
  Privacy: { c1: "#3B82F6", c2: "#1E3A8A", icon: "lock" },
  Product: { c1: "#1FB89B", c2: "#0E7C6B", icon: "sparkles" },
  Psychology: { c1: "#EC4899", c2: "#9D174D", icon: "chat" },
};

const FALLBACK_CAT = { c1: "#7C5CFC", c2: "#5B3FD6", icon: "sparkles" };

function Thumb({ post, big }: { post: BlogPost; big?: boolean }) {
  const m = CATS[post.category] || FALLBACK_CAT;
  return (
    <div
      style={{
        position: "relative",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        background: post.coverImageUrl
          ? `center / cover no-repeat url(${post.coverImageUrl})`
          : `linear-gradient(135deg, ${m.c1}, ${m.c2})`,
        aspectRatio: big ? "16 / 10" : "16 / 9",
        display: "grid",
        placeItems: "center",
      }}
    >
      {!post.coverImageUrl && (
        <>
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)",
              backgroundSize: "34px 34px",
              maskImage: "radial-gradient(120% 120% at 70% 10%, #000, transparent 75%)",
              WebkitMaskImage: "radial-gradient(120% 120% at 70% 10%, #000, transparent 75%)",
              opacity: 0.5,
            }}
          />
          <Icon name={m.icon} size={big ? 76 : 50} stroke="rgba(255,255,255,0.9)" />
        </>
      )}
      <span
        style={{
          position: "absolute",
          top: 14,
          left: 14,
          padding: "5px 12px",
          borderRadius: 999,
          background: "rgba(7,10,18,0.5)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.18)",
          fontSize: "var(--text-xs)",
          fontWeight: 600,
          color: "#fff",
        }}
      >
        {post.category}
      </span>
    </div>
  );
}

function Meta({ author, date, read }: { author: string; date: string; read: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--text-3)", fontSize: "var(--text-xs)" }}>
      <span
        style={{
          width: 26,
          height: 26,
          borderRadius: 99,
          background: "var(--finni-grad)",
          display: "grid",
          placeItems: "center",
          color: "#fff",
          fontWeight: 700,
          fontSize: 11,
          fontFamily: "var(--font-display)",
          flex: "none",
        }}
      >
        {author[0]}
      </span>
      <span style={{ color: "var(--text-2)" }}>{author}</span>
      {date && (
        <>
          <span>·</span>
          <span>{date}</span>
        </>
      )}
      {read && (
        <>
          <span>·</span>
          <span>{read}</span>
        </>
      )}
    </div>
  );
}

function postHref(post: BlogPost) {
  return post.slug ? `/blog/${post.slug}` : "#";
}

function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <Link
      href={postHref(post)}
      className="finni-card finni-card--hover reveal"
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(0,1.05fr) minmax(0,0.95fr)",
        gap: 36,
        alignItems: "center",
        padding: 28,
      }}
    >
      <Thumb post={post} big />
      <div>
        <div className="finni-eyebrow" style={{ marginBottom: 14 }}>
          Featured
        </div>
        <h2 className="finni-display" style={{ fontSize: "clamp(1.6rem,2.6vw,2.3rem)", lineHeight: 1.1, marginBottom: 14 }}>
          {post.title}
        </h2>
        <p className="finni-lead" style={{ fontSize: "var(--text-md)", marginBottom: 22 }}>
          {post.excerpt}
        </p>
        <Meta author={post.author} date={post.date} read={post.read} />
      </div>
    </Link>
  );
}

function PostCard({ post, i }: { post: BlogPost; i: number }) {
  return (
    <Link
      href={postHref(post)}
      className="finni-card finni-card--hover reveal"
      style={{ display: "flex", flexDirection: "column", gap: 18, padding: 18, transitionDelay: (i % 3) * 70 + "ms" }}
    >
      <Thumb post={post} />
      <div style={{ display: "flex", flexDirection: "column", gap: 12, padding: "2px 6px 8px", flex: 1 }}>
        <h3 className="finni-display" style={{ fontSize: "1.22rem", lineHeight: 1.2, margin: 0 }}>
          {post.title}
        </h3>
        <p style={{ color: "var(--text-2)", fontSize: "var(--text-sm)", lineHeight: "var(--lh-relaxed)", margin: 0, flex: 1 }}>
          {post.excerpt}
        </p>
        <Meta author={post.author} date={post.date} read={post.read} />
      </div>
    </Link>
  );
}

function BlogHero() {
  return (
    <header className="finni-section finni-section--tight" style={{ paddingTop: 56, position: "relative" }}>
      <div className="finni-aurora" aria-hidden="true">
        <span className="a1" />
        <span className="a2" />
      </div>
      <div className="finni-container" style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: 760 }}>
        <div className="reveal">
          <span className="finni-eyebrow finni-eyebrow--center" style={{ justifyContent: "center", marginBottom: 22 }}>
            The Finni Blog
          </span>
          <h1 className="finni-display finni-h1" style={{ marginBottom: 20, fontSize: "clamp(2.4rem,5.2vw,3.9rem)" }}>
            Money, in <span className="finni-gradient-text">plain language.</span>
          </h1>
          <p className="finni-lead" style={{ margin: "0 auto" }}>
            Calm, jargon-free takes on spending, saving, and the psychology of money — written the way Finni talks. No
            homework, no shame, no spreadsheets.
          </p>
        </div>
      </div>
    </header>
  );
}

function Subscribe() {
  return (
    <section className="finni-section--tight">
      <div className="finni-container">
        <div
          className="finni-card reveal"
          style={{
            padding: "clamp(32px,5vw,52px)",
            textAlign: "center",
            background: "radial-gradient(120% 120% at 50% 0%, rgba(63,224,192,0.10), transparent 60%), var(--surface-2)",
            border: "1px solid var(--border-brand)",
          }}
        >
          <h2 className="finni-display finni-h3" style={{ marginBottom: 12 }}>
            Get the good stuff, monthly.
          </h2>
          <p className="finni-lead" style={{ margin: "0 auto 24px", fontSize: "var(--text-md)" }}>
            One calm email a month. Money tips, product news, zero spam.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center", maxWidth: 460, margin: "0 auto" }}
          >
            <input
              type="email"
              required
              placeholder="you@email.com"
              style={{
                flex: "1 1 220px",
                height: 50,
                padding: "0 18px",
                borderRadius: 999,
                border: "1px solid var(--finni-hairline-strong)",
                background: "rgba(255,255,255,0.04)",
                color: "var(--text-1)",
                fontFamily: "var(--font-sans)",
                fontSize: "var(--text-md)",
                outline: "none",
              }}
            />
            <Button variant="primary" size="lg" type="submit">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export function BlogPage({ posts }: { posts: BlogPost[] }) {
  useReveal();
  const [featured, ...rest] = posts;
  return (
    <>
      <Nav active="blog" />
      <BlogHero />
      {featured && (
        <section className="finni-section--tight" style={{ paddingTop: 16 }}>
          <div className="finni-container">
            <FeaturedPost post={featured} />
          </div>
        </section>
      )}
      {rest.length > 0 && (
        <section className="finni-section" style={{ paddingTop: 24 }}>
          <div className="finni-container">
            <div className="reveal" style={{ marginBottom: 36 }}>
              <Eyebrow>Latest stories</Eyebrow>
            </div>
            <div className="finni-grid finni-grid--3">
              {rest.map((p, i) => (
                <PostCard key={p.slug || p.title} post={p} i={i} />
              ))}
            </div>
          </div>
        </section>
      )}
      <Subscribe />
      <Footer />
    </>
  );
}
