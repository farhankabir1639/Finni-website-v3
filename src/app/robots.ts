import type { MetadataRoute } from "next";

// AI/search crawlers we explicitly welcome. Each gets the same policy as the
// catch-all (* below): allow everything except /studio/ (the Sanity admin).
// Note: once a bot has its own group it ignores the * group, so the /studio/
// disallow is repeated here to keep behavior identical.
const AI_BOTS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Google-CloudVertexBot",
  "Googlebot",
  "Bingbot",
  "Applebot",
  "Amazonbot",
  "Bytespider",
  "PetalBot",
  "CCBot",
  "DuckAssistBot",
  "MistralAI-User",
  "Timpibot",
  "ProRataInc",
  "DeepSeekBot",
  "FacebookBot",
  "Meta-ExternalAgent",
  "Meta-ExternalFetcher",
  "archive.org_bot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: AI_BOTS, allow: "/", disallow: ["/studio/"] },
      { userAgent: "*", allow: "/", disallow: ["/studio/"] },
    ],
    sitemap: "https://www.heyfinni.com/sitemap.xml",
  };
}
