// "Results that matter", homepage stat cards.
// Each card has a slot for a progress-bar / chart background image.
import { LineChart, Users, Clock, Zap, TrendingUp, ShieldCheck, User, type LucideIcon } from "lucide-react";
import { CountUp } from "@/components/CountUp";
import { Reveal } from "@/components/Reveal";

type Accent = "brand" | "accent";

// Two-tone BurkyFlow palette (blue / orange), echoing the logo mark.
// Static class strings so Tailwind keeps them in the build.
const accents: Record<Accent, { badge: string; icon: string; value: string; box: string; boxText: string }> = {
  brand: { badge: "bg-brand/10", icon: "text-brand", value: "text-brand", box: "bg-brand/5", boxText: "text-brand" },
  accent: { badge: "bg-accent/10", icon: "text-accent", value: "text-accent", box: "bg-accent/5", boxText: "text-accent" },
};

const avatarTints = [
  "from-brand/30 to-brand/60",
  "from-accent/30 to-accent/60",
  "from-brand/40 to-brand/70",
  "from-accent/40 to-accent/70",
];

type InfoBox = { icon: LucideIcon; title: string; sub: string };

type Card = {
  accent: Accent;
  icon: LucideIcon;
  value: string;
  label: string;
  // Progress-bar / chart background image. A /images/... path or full URL; "" for none.
  image?: string;
  avatars?: { count: string; caption: string };
  info?: InfoBox;
};

const cards: Card[] = [
  {
    accent: "brand",
    icon: Users,
    value: "25+",
    label: "Businesses served",
    image: "/images/pro1.png",
    avatars: { count: "+21", caption: "Join 25+ growing businesses" },
  },
  {
    accent: "accent",
    icon: Clock,
    value: "10,000+",
    label: "Hours of automation deployed",
    image: "/images/pro2.png",
    info: { icon: TrendingUp, title: "That's 416+ days saved", sub: "Back to your business" },
  },
  {
    accent: "brand",
    icon: Zap,
    value: "Under 60s",
    label: "Average lead response time",
    image: "/images/pro1.png",
    info: { icon: Clock, title: "3x faster than industry average", sub: "Respond before your competitors even see it" },
  },
];

function StatCard({ card }: { card: Card }) {
  const a = accents[card.accent];
  const Icon = card.icon;
  const bg = card.image;

  return (
    <div className="group relative h-full overflow-hidden rounded-3xl bg-white p-7 shadow-soft ring-1 ring-border/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg hover:ring-brand/30">
      {/* Background chart/progress image slot */}
      {bg ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={bg}
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-2 w-full transition-transform duration-500 group-hover:scale-105"
        />
      ) : null}

      <div className="relative z-10">
        <div
          className={`flex size-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${a.badge} ${a.icon}`}
        >
          <Icon className="size-6" strokeWidth={1.75} />
        </div>

        <p className={`mt-8 text-4xl font-bold tracking-tight font-heading ${a.value}`}>
          <CountUp value={card.value} />
        </p>
        <p className="mt-2 font-semibold text-foreground">{card.label}</p>

        <hr className="my-5 border-border/60" />

        {card.avatars && (
          <div>
            <div className="flex items-center">
              <div className="flex -space-x-3">
                {avatarTints.map((tint, i) => (
                  <span
                    key={i}
                    className={`flex size-10 items-center justify-center rounded-full bg-gradient-to-br ${tint} ring-2 ring-white`}
                  >
                    <User className="size-5 text-white/90" />
                  </span>
                ))}
              </div>
              <span className="ml-3 flex size-10 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand ring-2 ring-white">
                {card.avatars.count}
              </span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{card.avatars.caption}</p>
          </div>
        )}

        {card.info && (
          <div className={`rounded-xl ${a.box} p-4`}>
            <p className={`flex items-center gap-2 text-sm font-semibold ${a.boxText}`}>
              <card.info.icon className="size-4 shrink-0" />
              {card.info.title}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{card.info.sub}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export function ResultsStats() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand">
            <LineChart className="size-4" />
            Results that matter
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl">
            Early, focused, and <span className="text-brand">accountable to the numbers</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            We don&apos;t just automate, we deliver measurable impact that drives real business growth.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal key={card.label} delay={i * 0.1} className="h-full">
              <StatCard card={card} />
            </Reveal>
          ))}
        </div>

        <p className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <ShieldCheck className="size-4 text-brand" />
          Real results from real businesses using BurkyFlow
        </p>
      </div>
    </section>
  );
}
