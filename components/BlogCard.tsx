import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  Bot,
  Braces,
  CalendarCheck,
  ContactRound,
  DatabaseZap,
  MessageSquare,
  PhoneCall,
  PhoneMissed,
  Plug,
  Radar,
  Shuffle,
  Sparkles,
  TriangleAlert,
  Users,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { Post } from "@/content/blog";

type Theme = {
  label: string;
  tag: string;
  cover: string;
  blobA: string;
  blobB: string;
  icon: string;
  dots: string;
  fallback: LucideIcon;
  satellites: [LucideIcon, LucideIcon];
};

// Static class strings so Tailwind keeps them in the build.
const themes: Record<"ai" | "calls" | "crm", Theme> = {
  ai: {
    label: "AI Agents & n8n",
    tag: "bg-brand/10 text-brand",
    cover: "from-brand/15 via-white to-accent-soft/30",
    blobA: "bg-brand/25",
    blobB: "bg-accent-soft/60",
    icon: "text-brand",
    dots: "text-brand/25",
    fallback: Bot,
    satellites: [Sparkles, Workflow],
  },
  calls: {
    label: "Missed Calls",
    tag: "bg-accent/10 text-accent",
    cover: "from-accent-soft/50 via-white to-brand/10",
    blobA: "bg-accent/20",
    blobB: "bg-brand/15",
    icon: "text-accent",
    dots: "text-accent/25",
    fallback: PhoneCall,
    satellites: [PhoneCall, CalendarCheck],
  },
  crm: {
    label: "CRM & Reactivation",
    tag: "bg-emerald-600/10 text-emerald-700",
    cover: "from-emerald-100 via-white to-brand/10",
    blobA: "bg-emerald-400/25",
    blobB: "bg-brand/15",
    icon: "text-emerald-600",
    dots: "text-emerald-600/25",
    fallback: DatabaseZap,
    satellites: [Users, MessageSquare],
  },
};

// The main icon follows the post's subject; the first match wins.
const subjectIcons: [RegExp, LucideIcon][] = [
  [/\bmcp\b|claude|cursor/, Plug],
  [/nodes?[- ]as[- ]tools/, Wrench],
  [/multi-tool/, Blocks],
  [/competit|tavily/, Radar],
  [/extract|data engineering/, Braces],
  [/fallback|gemini|\bgpt\b|\bllm\b/, Shuffle],
  [/breaking|migrat|upgrade/, TriangleAlert],
  [/missed[- ]call/, PhoneMissed],
  [/\bcrm\b|reactivat/, ContactRound],
];

// Three arrangements so neighboring covers don't look identical.
const layouts = [
  { dir: "bg-gradient-to-br", blobA: "-left-10 -top-12", blobB: "-bottom-12 -right-6", satA: "left-[17%] top-[20%]", satB: "bottom-[20%] right-[17%]" },
  { dir: "bg-gradient-to-bl", blobA: "-right-10 -top-12", blobB: "-bottom-12 -left-6", satA: "right-[18%] top-[18%]", satB: "bottom-[22%] left-[18%]" },
  { dir: "bg-gradient-to-tr", blobA: "-top-16 left-1/3", blobB: "-bottom-8 -right-12", satA: "bottom-[22%] left-[15%]", satB: "right-[15%] top-[20%]" },
];

function postTopic(post: Post) {
  const text = `${post.title} ${post.slug} ${post.tags.join(" ")}`.toLowerCase();
  const theme =
    /missed[- ]call|receptionist|\bphone\b|\bvoice\b/.test(text)
      ? themes.calls
      : /\bcrm\b|reactivat|dormant/.test(text)
        ? themes.crm
        : themes.ai;
  const icon = subjectIcons.find(([pattern]) => pattern.test(text))?.[1] ?? theme.fallback;
  const seed = [...post.slug].reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
  return { theme, icon, layout: layouts[seed % layouts.length] };
}

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

export function BlogCard({ post }: { post: Post }) {
  const { theme, icon: Icon, layout } = postTopic(post);
  const [SatA, SatB] = theme.satellites;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-border/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg hover:ring-brand/30"
    >
      {/* Branded cover art, drawn from the post's topic (decorative). */}
      <div aria-hidden className={cn("relative aspect-[16/9] overflow-hidden", layout.dir, theme.cover)}>
        <div className={cn("absolute size-40 rounded-full blur-2xl", theme.blobA, layout.blobA)} />
        <div className={cn("absolute size-32 rounded-full blur-2xl", theme.blobB, layout.blobB)} />
        <div
          className={cn(
            "absolute inset-0 bg-[radial-gradient(currentColor_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]",
            theme.dots
          )}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex size-16 items-center justify-center rounded-2xl bg-white shadow-soft-lg ring-1 ring-border/60 transition-transform duration-300 group-hover:scale-105">
            <Icon className={cn("size-7", theme.icon)} strokeWidth={1.75} />
          </span>
        </div>
        <span className={cn("absolute flex size-9 items-center justify-center rounded-xl bg-white/90 shadow-soft ring-1 ring-border/50", layout.satA)}>
          <SatA className={cn("size-4", theme.icon)} strokeWidth={2} />
        </span>
        <span className={cn("absolute flex size-9 items-center justify-center rounded-xl bg-white/90 shadow-soft ring-1 ring-border/50", layout.satB)}>
          <SatB className={cn("size-4", theme.icon)} strokeWidth={2} />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">
          <span className={cn("rounded-full px-2.5 py-1 font-semibold", theme.tag)}>{theme.label}</span>
          <span className="text-muted-foreground">
            <time dateTime={post.date}>{fmt(post.date)}</time> &middot; {post.readMinutes} min read
          </span>
        </div>
        <h2 className="mt-4 text-lg font-semibold leading-snug transition-colors group-hover:text-brand">
          {post.title}
        </h2>
        <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{post.excerpt}</p>
        <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-brand">
          Read post
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
