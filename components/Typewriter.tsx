"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

// Cycling typewriter for the hero heading.
// SSR-safe: renders the FULL first phrase on the server and on first paint, so the
// <h1> is never empty for crawlers and there is no layout shift on hydration.
// The animation only starts once mounted, and is skipped for reduced motion.
export function Typewriter({
  phrases,
  className,
  typingSpeed = 65,
  deletingSpeed = 35,
  holdFull = 2000,
  holdEmpty = 400,
}: {
  phrases: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  holdFull?: number;
  holdEmpty?: number;
}) {
  const reduce = useReducedMotion();

  // Keep the array out of the dependency list — an inline array is a new
  // reference every render and would restart the effect forever.
  const phrasesRef = useRef(phrases);
  phrasesRef.current = phrases;

  const [index, setIndex] = useState(0);
  const [text, setText] = useState(phrases[0] ?? "");
  const [deleting, setDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted || reduce) return;

    const list = phrasesRef.current;
    const current = list[index % list.length] ?? "";
    let timer: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      // fully typed → hold, then start deleting
      timer = setTimeout(() => setDeleting(true), holdFull);
    } else if (deleting && text === "") {
      // fully deleted → advance to the next phrase
      timer = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % list.length);
      }, holdEmpty);
    } else {
      const next = deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1);
      timer = setTimeout(() => setText(next), deleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [mounted, text, deleting, index, reduce, typingSpeed, deletingSpeed, holdFull, holdEmpty]);

  return (
    <span className="inline">
      <span className={className}>{text}</span>
      {!reduce && (
        <span
          aria-hidden
          className="animate-caret ml-1 inline-block w-[3px] translate-y-[0.08em] self-center bg-accent align-middle"
          style={{ height: "0.85em" }}
        />
      )}
    </span>
  );
}
