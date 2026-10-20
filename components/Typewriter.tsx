"use client";

import { useEffect, useState } from "react";

const TYPE_MS = 65;
const DELETE_MS = 35;
const HOLD_FULL_MS = 2000;
const HOLD_EMPTY_MS = 400;

// Types, holds, and deletes each phrase in turn.
// The server renders the first phrase in full, so crawlers and the first paint
// always see real text. Animation only runs in the browser, and never for
// visitors who prefer reduced motion. No animation library is needed.
export function Typewriter({ phrases, className }: { phrases: string[]; className?: string }) {
  const [step, setStep] = useState({ index: 0, length: phrases[0]?.length ?? 0, deleting: false });

  useEffect(() => {
    if (phrases.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const full = phrases[step.index].length;
    let delay = step.deleting ? DELETE_MS : TYPE_MS;
    let next = { ...step, length: step.length + (step.deleting ? -1 : 1) };

    if (!step.deleting && step.length === full) {
      delay = HOLD_FULL_MS;
      next = { ...step, deleting: true };
    } else if (step.deleting && step.length === 0) {
      delay = HOLD_EMPTY_MS;
      next = { index: (step.index + 1) % phrases.length, length: 0, deleting: false };
    }

    const timer = setTimeout(() => setStep(next), delay);
    return () => clearTimeout(timer);
  }, [step, phrases]);

  return (
    <>
      <span className={className}>{phrases[step.index].slice(0, step.length)}</span>
      {/* Zero-width caret, so it never changes where the line wraps */}
      <span aria-hidden className="relative inline-block h-[0.85em] w-0 align-[-0.08em] motion-reduce:hidden">
        <span className="animate-caret absolute left-1 top-0 h-full w-[3px] bg-accent" />
      </span>
    </>
  );
}
