"use client";

import { useEffect } from "react";

/* Scroll-based reveal. Content is visible by default; this adds `.reveal-on`
   to <html> only after confirming the animation timeline is live, then toggles
   `.is-in` on `.reveal` elements as they scroll into view. Mirrors the design's
   initReveal so a no-JS / reduced-motion environment always shows content. */
export function useReveal() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let onScroll: (() => void) | null = null;

    const enable = () => {
      document.documentElement.classList.add("reveal-on");
      const check = () => {
        const h = window.innerHeight;
        document.querySelectorAll(".reveal:not(.is-in)").forEach((e) => {
          if (e.getBoundingClientRect().top < h * 0.92) e.classList.add("is-in");
        });
      };
      onScroll = check;
      check();
      window.addEventListener("scroll", check, { passive: true });
      window.addEventListener("resize", check, { passive: true });
    };

    const t0 = document.timeline && document.timeline.currentTime;
    const raf = requestAnimationFrame(() => {
      const t1 = document.timeline && document.timeline.currentTime;
      if (t0 != null && t1 != null && (t1 as number) > (t0 as number)) enable();
    });

    return () => {
      cancelAnimationFrame(raf);
      if (onScroll) {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      }
    };
  }, []);
}
