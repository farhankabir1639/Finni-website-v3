import type { PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "./sanity";

/* Dark-theme Portable Text styling shared by Sanity-backed pages
   (blog posts, etc.), matching the Finni design tokens. */
export const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="finni-display" style={{ fontSize: "1.7rem", margin: "40px 0 14px" }}>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="finni-display" style={{ fontSize: "1.3rem", margin: "30px 0 10px" }}>
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p style={{ color: "var(--text-2)", lineHeight: "var(--lh-relaxed)", margin: "0 0 18px" }}>{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote
        style={{
          borderLeft: "3px solid var(--finni-mint)",
          paddingLeft: 18,
          margin: "24px 0",
          color: "var(--text-2)",
          fontStyle: "italic",
        }}
      >
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul style={{ color: "var(--text-2)", lineHeight: "var(--lh-relaxed)", paddingLeft: 22, margin: "0 0 18px" }}>
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol style={{ color: "var(--text-2)", lineHeight: "var(--lh-relaxed)", paddingLeft: 22, margin: "0 0 18px" }}>
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => <strong style={{ color: "var(--text-1)" }}>{children}</strong>,
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "var(--finni-mint)", textDecoration: "underline" }}
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <span style={{ display: "block", margin: "28px 0" }}>
          <Image
            src={urlFor(value).width(1200).fit("max").url()}
            alt={value.alt || ""}
            width={1200}
            height={750}
            style={{ width: "100%", height: "auto", borderRadius: "var(--radius-lg)" }}
          />
        </span>
      );
    },
    // Inline image from imported/generated content: { image: {asset}, alt, caption }
    inlineImage: ({ value }) => {
      if (!value?.image?.asset) return null;
      return (
        <span style={{ display: "block", margin: "28px 0" }}>
          <Image
            src={urlFor(value.image).width(1200).fit("max").url()}
            alt={value.alt || ""}
            width={1200}
            height={750}
            style={{ width: "100%", height: "auto", borderRadius: "var(--radius-lg)" }}
          />
          {value.caption ? (
            <span
              style={{
                display: "block",
                color: "var(--text-3)",
                fontSize: "var(--text-sm)",
                marginTop: 8,
                textAlign: "center",
              }}
            >
              {value.caption}
            </span>
          ) : null}
        </span>
      );
    },
  },
};
