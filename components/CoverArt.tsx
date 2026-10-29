import { Sparkles, Workflow, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type CoverTone = "blue" | "peach" | "green";

// Static class strings so Tailwind keeps them in the build.
export const tones: Record<
  CoverTone,
  { tag: string; cover: string; blobA: string; blobB: string; icon: string; dots: string; text: string }
> = {
  blue: {
    tag: "bg-brand/10 text-brand",
    cover: "from-brand/15 via-white to-accent-soft/30",
    blobA: "bg-brand/25",
    blobB: "bg-accent-soft/60",
    icon: "text-brand",
    dots: "text-brand/25",
    text: "text-brand",
  },
  peach: {
    tag: "bg-accent/10 text-accent",
    cover: "from-accent-soft/50 via-white to-brand/10",
    blobA: "bg-accent/20",
    blobB: "bg-brand/15",
    icon: "text-accent",
    dots: "text-accent/25",
    text: "text-accent",
  },
  green: {
    tag: "bg-emerald-600/10 text-emerald-700",
    cover: "from-emerald-100 via-white to-brand/10",
    blobA: "bg-emerald-400/25",
    blobB: "bg-brand/15",
    icon: "text-emerald-600",
    dots: "text-emerald-600/25",
    text: "text-emerald-700",
  },
};

// Three arrangements so neighboring covers don't look identical.
const layouts = [
  { dir: "bg-gradient-to-br", blobA: "-left-10 -top-12", blobB: "-bottom-12 -right-6", satA: "left-[17%] top-[20%]", satB: "bottom-[20%] right-[17%]" },
  { dir: "bg-gradient-to-bl", blobA: "-right-10 -top-12", blobB: "-bottom-12 -left-6", satA: "right-[18%] top-[18%]", satB: "bottom-[22%] left-[18%]" },
  { dir: "bg-gradient-to-tr", blobA: "-top-16 left-1/3", blobB: "-bottom-8 -right-12", satA: "bottom-[22%] left-[15%]", satB: "right-[15%] top-[20%]" },
];

const seedOf = (key: string) => [...key].reduce((sum, ch) => sum + ch.charCodeAt(0), 0);

// Decorative, CSS-drawn cover: tinted gradient, soft blobs, dot texture, and either
// a centered icon chip with two satellite chips, or custom centered content.
export function CoverArt({
  tone,
  seed,
  icon: Icon,
  satellites = [Sparkles, Workflow],
  className,
  children,
}: {
  tone: CoverTone;
  seed: string;
  icon?: LucideIcon;
  satellites?: [LucideIcon, LucideIcon];
  className?: string;
  children?: ReactNode;
}) {
  const t = tones[tone];
  const layout = layouts[seedOf(seed) % layouts.length];
  const [SatA, SatB] = satellites;

  return (
    <div aria-hidden={!children} className={cn("relative overflow-hidden", layout.dir, t.cover, className ?? "aspect-[16/9]")}>
      <div aria-hidden className={cn("absolute size-40 rounded-full blur-2xl", t.blobA, layout.blobA)} />
      <div aria-hidden className={cn("absolute size-32 rounded-full blur-2xl", t.blobB, layout.blobB)} />
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 bg-[radial-gradient(currentColor_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]",
          t.dots
        )}
      />
      {children ? (
        <div className="relative flex h-full items-center justify-center p-6">{children}</div>
      ) : (
        <>
          {Icon && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex size-16 items-center justify-center rounded-2xl bg-white shadow-soft-lg ring-1 ring-border/60 transition-transform duration-300 group-hover:scale-105">
                <Icon className={cn("size-7", t.icon)} strokeWidth={1.75} />
              </span>
            </div>
          )}
          <span className={cn("absolute flex size-9 items-center justify-center rounded-xl bg-white/90 shadow-soft ring-1 ring-border/50", layout.satA)}>
            <SatA className={cn("size-4", t.icon)} strokeWidth={2} />
          </span>
          <span className={cn("absolute flex size-9 items-center justify-center rounded-xl bg-white/90 shadow-soft ring-1 ring-border/50", layout.satB)}>
            <SatB className={cn("size-4", t.icon)} strokeWidth={2} />
          </span>
        </>
      )}
    </div>
  );
}
