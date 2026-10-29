"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Item = { slug: string; topic: string; card: ReactNode };

// Blog index grid with topic tabs. Cards are rendered on the server and passed in.
export function BlogGrid({ items, topics }: { items: Item[]; topics: { key: string; label: string }[] }) {
  const [active, setActive] = useState("all");
  const tabs = [{ key: "all", label: "All posts" }, ...topics];
  const shown = active === "all" ? items : items.filter((item) => item.topic === active);

  return (
    <>
      <div role="group" aria-label="Filter posts by topic" className="flex flex-wrap justify-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            aria-pressed={active === tab.key}
            onClick={() => setActive(tab.key)}
            className={cn(
              "rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
              active === tab.key
                ? "bg-foreground text-white shadow-soft"
                : "bg-white text-muted-foreground ring-1 ring-border/70 hover:text-foreground hover:ring-brand/40"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((item) => (
          <div key={item.slug} className="h-full">
            {item.card}
          </div>
        ))}
      </div>
    </>
  );
}
