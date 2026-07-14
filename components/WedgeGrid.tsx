import Link from "next/link";
import {
  ArrowRight,
  DollarSign,
  TrendingUp,
  User,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { wedges, type Wedge } from "@/content/wedges";
import { WedgeCardImage } from "@/components/WedgeCardImage";
import { Reveal } from "@/components/Reveal";

// Per-wedge accent + highlight icon. Alternates the two BurkyFlow brand colors
// (blue / orange) so the cards echo the two-tone logo mark.
const accents: Record<
  Wedge["letter"],
  { badge: string; text: string; chip: string; icon: LucideIcon }
> = {
  A: { badge: "bg-brand/10 text-brand", text: "text-brand", chip: "bg-brand/10 text-brand", icon: DollarSign },
  B: { badge: "bg-accent/10 text-accent", text: "text-accent", chip: "bg-accent/10 text-accent", icon: TrendingUp },
  C: { badge: "bg-brand/10 text-brand", text: "text-brand", chip: "bg-brand/10 text-brand", icon: User },
  D: { badge: "bg-accent/10 text-accent", text: "text-accent", chip: "bg-accent/10 text-accent", icon: ShieldCheck },
};

function WedgeCard({ wedge }: { wedge: Wedge }) {
  const a = accents[wedge.letter];
  const HighlightIcon = a.icon;

  return (
    <article className="group grid h-full overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-border/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg hover:ring-brand/30 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
      {/* Image — paste a URL into the wedge's `image` field; placeholder until then */}
      <div className="p-5 sm:p-6 sm:pr-0">
        <WedgeCardImage src={wedge.image} alt={wedge.name} />
      </div>

      {/* Content */}
      <div className="flex flex-col p-5 sm:p-6">
        <div className="flex items-start gap-2.5">
          <span
            className={`flex size-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${a.badge}`}
          >
            {wedge.letter}
          </span>
          <div>
            <p className={`text-[11px] font-bold uppercase tracking-wider ${a.text}`}>
              {wedge.shortName}
            </p>
            <h3 className="mt-0.5 text-lg font-bold leading-snug tracking-tight">{wedge.name}</h3>
          </div>
        </div>

        <p className="mt-3 text-sm leading-snug text-muted-foreground">{wedge.tagline}</p>

        <div className="mt-3 flex items-start gap-2.5">
          <span
            className={`flex size-7 shrink-0 items-center justify-center rounded-full ${a.chip}`}
          >
            <HighlightIcon className="size-3.5" />
          </span>
          <p className="text-sm leading-snug text-muted-foreground">{wedge.pitch}</p>
        </div>

        <div className="mt-3 rounded-xl bg-surface p-3 text-xs leading-snug text-muted-foreground ring-1 ring-border/60">
          <span className={`font-bold ${a.text}`}>Best for: </span>
          {wedge.bestFor.slice(0, 3).join(" · ")}
        </div>

        <Link
          href={`/wedges/${wedge.slug}`}
          className={`group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold ${a.text}`}
        >
          See the full pitch
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}

export function WedgeGrid({
  heading = "The four wedges most clients enter through",
  eyebrow = "Top offers",
  lead = "Each one stands alone, is priced for fast proof, and plugs into the rest of the stack when it's time to expand.",
}: {
  heading?: string;
  eyebrow?: string;
  lead?: string;
}) {
  return (
    <div>
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{heading}</h2>
        <p className="mt-4 text-lg text-muted-foreground">{lead}</p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {wedges.map((w, i) => (
          <Reveal key={w.slug} delay={(i % 2) * 0.08} className="h-full">
            <WedgeCard wedge={w} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
