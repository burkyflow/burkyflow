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
  columns = 1,
}: {
  items: FAQItem[];
  eyebrow?: string;
  heading?: string;
  lead?: string;
  columns?: 1 | 2;
}) {
  // First question open by default in single-column; all closed in two-column.
  const [open, setOpen] = useState<number | null>(columns === 2 ? null : 0);

  const renderItem = ({ item, i }: { item: FAQItem; i: number }) => {
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
          <span className="text-[15px] font-semibold text-foreground sm:text-base">{item.q}</span>
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
  };

  const withIdx = items.map((item, i) => ({ item, i }));
  // In two-column mode, interleave so reading order stays row-major (0,1 / 2,3 / 4,5).
  const groups =
    columns === 2
      ? [withIdx.filter((x) => x.i % 2 === 0), withIdx.filter((x) => x.i % 2 === 1)]
      : [withIdx];

  return (
    <div className={cn("mx-auto", columns === 2 ? "max-w-4xl" : "max-w-3xl")}>
      <div className="text-center">
        {eyebrow && (
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/70">{eyebrow}</p>
        )}
        <h2 className="mt-3 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">{heading}</h2>
        {lead && <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{lead}</p>}
      </div>

      {columns === 2 ? (
        <div className="mt-12 grid items-start gap-3.5 md:grid-cols-2">
          {groups.map((g, gi) => (
            <div key={gi} className="flex flex-col gap-3.5">
              {g.map(renderItem)}
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-12 flex flex-col gap-3.5">{groups[0].map(renderItem)}</div>
      )}
    </div>
  );
}
