// Problem-framing section — the "you're losing the leads you already have" pitch.
import { PhoneOff, Voicemail, CircleDollarSign, Info, type LucideIcon } from "lucide-react";
import { CountUp } from "@/components/CountUp";

type Accent = "brand" | "accent";

type Stat = { stat: string; label: string; icon: LucideIcon; accent: Accent; image?: string };

const stats: Stat[] = [
  {
    stat: "62%",
    label: "of calls to contractors go unanswered while crews are on jobs",
    icon: PhoneOff,
    accent: "brand",
    image: "/images/c1.png", // ← card background (full cover)
  },
  {
    stat: "78%",
    label: "of callers will not leave a voicemail, they call the next business",
    icon: Voicemail,
    accent: "accent",
    image: "/images/c2.png", // ← card background (full cover)
  },
  {
    stat: "$1,200",
    label: "average lost revenue per missed call for home services",
    icon: CircleDollarSign,
    accent: "brand",
    image: "/images/c1.png", // ← add e.g. "/images/c3.png" once you have it
  },
];

// Static class strings so Tailwind keeps them in the build.
const accents: Record<Accent, { icon: string; wave: string }> = {
  brand: { icon: "text-brand", wave: "from-brand/10" },
  accent: { icon: "text-accent", wave: "from-accent/10" },
};

function StatCard({ stat, label, icon: Icon, accent, image }: Stat) {
  const a = accents[accent];
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-b from-white to-surface/50 p-8 text-center shadow-soft ring-1 ring-border/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg hover:ring-brand/30">
      {image ? (
        // Full-cover card background
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        /* soft colored wave at the bottom (fallback when no image) */
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t ${a.wave} to-transparent`}
        />
      )}

      <div className="relative">
        <div
          className={`mx-auto flex size-14 items-center justify-center rounded-full bg-white shadow-soft ring-1 ring-border/50 transition-transform duration-300 group-hover:scale-110 ${a.icon}`}
        >
          <Icon className="size-6" strokeWidth={1.75} />
        </div>

        <p className="mt-6 text-5xl font-bold tracking-tight text-brand font-heading">
          <CountUp value={stat} />
        </p>
        <div className="mx-auto mt-3 h-1 w-8 rounded-full bg-brand/30" />

        <p className="mx-auto mt-4 max-w-[16rem] text-sm leading-relaxed text-muted-foreground">
          {label}
        </p>
      </div>
    </div>
  );
}

export function ProblemFraming() {
  return (
    <section className="section relative overflow-hidden">
      {/* Decorations — soft pink glow + fading dot grid on the left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-0 size-[32rem] rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-10 left-0 h-[26rem] w-80"
        style={{
          backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
          backgroundSize: "16px 16px",
          color: "rgba(148, 163, 184, 0.45)",
          maskImage: "radial-gradient(circle at left bottom, black, transparent 72%)",
          WebkitMaskImage: "radial-gradient(circle at left bottom, black, transparent 72%)",
        }}
      />

      <div className="container-page relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">The leak most owners underestimate</p>
          <h2 className="mt-3 text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl">
            You are not short on leads.
            <br />
            You are <span className="text-brand">losing the ones</span> you already have.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Most owners guess they miss a couple of calls a week. Pull the phone logs and it is
            usually a third of them. The customers already in your CRM go months without a single
            follow-up. Both are revenue you already paid for, walking out the door to whoever
            responds first.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-3">
          {stats.map((item) => (
            <StatCard key={item.label} {...item} />
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl items-center justify-center gap-2.5 rounded-2xl bg-surface px-5 py-3 text-center text-xs text-muted-foreground ring-1 ring-border/60">
          <Info className="size-4 shrink-0 text-brand" />
          <span>
            Sources: Invoca and contractor call-tracking research. TODO(you): confirm citations
            before publishing.
          </span>
        </div>
      </div>
    </section>
  );
}
