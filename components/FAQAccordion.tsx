"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type FAQItem = { q: string; a: string };

export function FAQAccordion({
  items,
  eyebrow = "FAQ",
  heading = "Frequently asked questions",
  lead,
}: {
  items: FAQItem[];
  eyebrow?: string;
  heading?: string;
  lead?: string;
}) {
  // First question open by default, like the reference.
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl">
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/70">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
          {heading}
        </h2>
        {lead && <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{lead}</p>}
      </div>

      <div className="mt-12 flex flex-col gap-3.5">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              className={cn(
                "bg-white shadow-soft ring-1 transition-all duration-300 ease-out",
                isOpen ? "rounded-3xl ring-brand/20" : "rounded-full ring-border/60 hover:ring-border"
              )}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-4 text-left sm:px-7"
              >
                <span className="text-[15px] font-semibold text-foreground sm:text-base">
                  {item.q}
                </span>
                <span
                  className={cn(
                    "flex size-8 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                    isOpen ? "rotate-90 bg-foreground text-white" : "bg-surface text-foreground/70"
                  )}
                >
                  {isOpen ? <X className="size-4" /> : <Plus className="size-4" />}
                </span>
              </button>

              {/* smooth height expand/collapse */}
              <div
                className={cn(
                  "grid transition-all duration-300 ease-out",
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 pt-0 text-sm leading-relaxed text-muted-foreground sm:px-7">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
