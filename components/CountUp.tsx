"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

// Animates a stat up from zero when it scrolls into view.
// Handles values like "62%", "$1,200", "10,000+", "25+", "Under 60s".
// Falls back to the static string for non-numeric values or reduced motion.
export function CountUp({
  value,
  duration = 1.6,
  className,
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();

  // Render the real value on the server / first paint (no layout shift, SEO-safe).
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    // Derive inside the effect: `match` returns a NEW array each render, so it
    // must never be a dependency or the effect re-runs forever.
    const parts = value.match(/^([^\d]*)([\d,]+)(.*)$/);

    if (!parts || reduce || !inView) {
      setDisplay(value);
      return;
    }

    const [, prefix, digits, suffix] = parts;
    const target = parseInt(digits.replace(/,/g, ""), 10);
    const grouped = digits.includes(",");
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const current = Math.round(target * eased);
      setDisplay(`${prefix}${grouped ? current.toLocaleString("en-US") : current}${suffix}`);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration, reduce]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
