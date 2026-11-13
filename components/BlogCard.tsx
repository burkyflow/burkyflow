import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  Bot,
  Braces,
  CalendarCheck,
  ContactRound,
  DatabaseZap,
  MapPin,
  MessageSquare,
  PhoneCall,
  PhoneMissed,
  Plug,
  Radar,
  Search,
  Shuffle,
  Sparkles,
  Star,
  TriangleAlert,
  Users,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { posts, type Post } from "@/content/blog";
import { CoverArt, type CoverTone } from "@/components/CoverArt";
import { postPhotos, topicPhotoPools } from "@/content/photos";

export type TopicKey = "ai" | "calls" | "crm" | "search";

type Theme = {
  key: TopicKey;
  label: string;
  tone: CoverTone;
  pill: string;
  fallback: LucideIcon;
  satellites: [LucideIcon, LucideIcon];
};

export const themes: Record<TopicKey, Theme> = {
  ai: { key: "ai", label: "AI Agents & n8n", tone: "blue", pill: "bg-brand", fallback: Bot, satellites: [Sparkles, Workflow] },
  calls: { key: "calls", label: "Missed Calls", tone: "peach", pill: "bg-accent", fallback: PhoneCall, satellites: [PhoneCall, CalendarCheck] },
  crm: { key: "crm", label: "CRM & Reactivation", tone: "green", pill: "bg-emerald-600", fallback: DatabaseZap, satellites: [Users, MessageSquare] },
  // Category-only topic: posts join it by setting `category: "Search Visibility"`.
  search: { key: "search", label: "Search Visibility", tone: "violet", pill: "bg-violet-600", fallback: Search, satellites: [MapPin, Star] },
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

const postText = (post: Post) => `${post.title} ${post.slug} ${post.tags.join(" ")}`.toLowerCase();

// A front matter `category` that exactly names a topic ("AI Agents & n8n", "Missed Calls",
// "CRM & Reactivation", "Search Visibility") decides it; otherwise the topic is guessed
// from keywords.
function topicKey(post: Post): TopicKey {
  const named = Object.values(themes).find((t) => t.label === post.category);
  if (named) return named.key;
  const text = postText(post);
  return /missed[- ]call|receptionist|\bphone\b|\bvoice\b/.test(text) ? "calls" : /\bcrm\b|reactivat|dormant/.test(text) ? "crm" : "ai";
}

// Covers are unique: oldest post first, each takes the first photo no older post uses from
// its own `image`, its hand-picked photo, its topic's set, then the other topics' sets.
// A new post therefore never repeats a cover or changes an older post's cover.
const covers = (() => {
  const chosen = new Map<string, string>();
  const used = new Set<string>();
  const oldestFirst = [...posts].sort((a, b) => (a.date === b.date ? a.slug.localeCompare(b.slug) : a.date < b.date ? -1 : 1));
  for (const post of oldestFirst) {
    const key = topicKey(post);
    const otherSets = (Object.keys(topicPhotoPools) as TopicKey[]).filter((k) => k !== key).flatMap((k) => topicPhotoPools[k]);
    const candidates = [post.image, postPhotos[post.slug], ...topicPhotoPools[key], ...otherSets].filter((p): p is string => Boolean(p));
    let photo = candidates.find((p) => !used.has(p));
    if (!photo) {
      console.warn(`[blog] No unused cover photo left for "${post.slug}"; add photos to topicPhotoPools in content/photos.ts.`);
      photo = candidates[0];
    }
    chosen.set(post.slug, photo);
    used.add(photo);
  }
  return chosen;
})();

export function postTopic(post: Post) {
  const theme = themes[topicKey(post)];
  const text = postText(post);
  const icon = subjectIcons.find(([pattern]) => pattern.test(text))?.[1] ?? theme.fallback;
  const photo = covers.get(post.slug) ?? post.image ?? postPhotos[post.slug] ?? topicPhotoPools[theme.key][0];
  return { theme, icon, photo };
}

// The service page each topic leads to, linked from the end of every post.
export const topicService: Record<TopicKey, { href: string; name: string }> = {
  ai: { href: "/services/workflow-automation", name: "Workflow Automation" },
  calls: { href: "/services/ai-voice-receptionist", name: "AI Voice Receptionist" },
  crm: { href: "/services/database-reactivation", name: "Database Reactivation" },
  search: { href: "/services/answer-engine-optimization", name: "Answer Engine Optimization" },
};

// Newest posts on the given topics, in topic order; optionally topped up with other posts.
export function relatedPosts(topics: TopicKey[], { limit = 3, fill = false, exclude }: { limit?: number; fill?: boolean; exclude?: string } = {}) {
  const pool = posts.filter((p) => p.slug !== exclude);
  const picked = topics.flatMap((t) => pool.filter((p) => postTopic(p).theme.key === t));
  const rest = fill ? pool.filter((p) => !picked.includes(p)) : [];
  return [...picked, ...rest].slice(0, limit);
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
      {/* Cover photo with the topic pill on top. */}
      <div className="relative">
        <CoverArt tone={theme.tone} seed={post.slug} icon={icon} satellites={theme.satellites} photo={photo} alt={`Cover photo for ${post.title}`} />
        <span className={cn("absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-soft", theme.pill)}>
          {theme.label}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs text-muted-foreground">
          <time dateTime={post.date}>{fmt(post.date)}</time> &middot; {post.readMinutes} min read
        </p>
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
