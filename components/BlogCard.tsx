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
import { CoverArt, tones, type CoverTone } from "@/components/CoverArt";
import { postPhotos, topicPhotoPools } from "@/content/photos";

type Theme = {
  key: "ai" | "calls" | "crm";
  label: string;
  tone: CoverTone;
  fallback: LucideIcon;
  satellites: [LucideIcon, LucideIcon];
};

const themes: Record<"ai" | "calls" | "crm", Theme> = {
  ai: { key: "ai", label: "AI Agents & n8n", tone: "blue", fallback: Bot, satellites: [Sparkles, Workflow] },
  calls: { key: "calls", label: "Missed Calls", tone: "peach", fallback: PhoneCall, satellites: [PhoneCall, CalendarCheck] },
  crm: { key: "crm", label: "CRM & Reactivation", tone: "green", fallback: DatabaseZap, satellites: [Users, MessageSquare] },
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

function postTopic(post: Post) {
  const text = `${post.title} ${post.slug} ${post.tags.join(" ")}`.toLowerCase();
  const theme =
    /missed[- ]call|receptionist|\bphone\b|\bvoice\b/.test(text)
      ? themes.calls
      : /\bcrm\b|reactivat|dormant/.test(text)
        ? themes.crm
        : themes.ai;
  const icon = subjectIcons.find(([pattern]) => pattern.test(text))?.[1] ?? theme.fallback;
  // Photo: the post's own, then a hand-picked one, then its topic's rotating set.
  const pool = topicPhotoPools[theme.key];
  const seed = [...post.slug].reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
  const photo = post.image ?? postPhotos[post.slug] ?? pool[seed % pool.length];
  return { theme, icon, photo };
}

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

export function BlogCard({ post }: { post: Post }) {
  const { theme, icon, photo } = postTopic(post);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-border/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg hover:ring-brand/30"
    >
      {/* Branded cover art, drawn from the post's topic. */}
      <CoverArt tone={theme.tone} seed={post.slug} icon={icon} satellites={theme.satellites} photo={photo} photoIcon={false} />

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">
          <span className={cn("rounded-full px-2.5 py-1 font-semibold", tones[theme.tone].tag)}>{theme.label}</span>
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
