// Revenue Operations section — illustrated "how the revenue engine works" cards.
// Each card has a soft peach visual (a mini product mockup) above the copy.
import Link from "next/link";
import {
  ArrowRight,
  PhoneOff,
  PhoneCall,
  CalendarCheck,
  TrendingUp,
  Check,
  Repeat2,
} from "lucide-react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";

/* ── Mini product mockups (pure CSS, no images) ───────────────────────── */

function VizShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-accent/10 via-accent-soft/25 to-white p-6">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-8 -top-8 size-40 rounded-full bg-accent/20 blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-10 -left-6 size-32 rounded-full bg-accent-soft/30 blur-2xl"
      />
      <div className="relative w-full max-w-[15rem]">{children}</div>
    </div>
  );
}

// 01 — Diagnose: an audit report surfacing the leak
function DiagnoseViz() {
  return (
    <VizShell>
      <div className="rounded-2xl bg-white p-4 shadow-soft-lg ring-1 ring-border/60">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-foreground">Revenue audit</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-bold text-accent">
            <PhoneOff className="size-2.5" /> Leaking
          </span>
        </div>
        <div className="mt-3 space-y-2">
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-muted-foreground">Missed calls / mo</span>
            <span className="font-bold text-foreground">34</span>
          </div>
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-muted-foreground">Dormant leads</span>
            <span className="font-bold text-foreground">1,842</span>
          </div>
        </div>
        <div className="mt-3 rounded-lg bg-accent/10 px-3 py-2">
          <p className="text-[10px] font-medium text-accent/80">Lost revenue</p>
          <p className="text-base font-bold text-accent">≈ $18,400/mo</p>
        </div>
      </div>
    </VizShell>
  );
}

// 02 — Capture: AI voice answering a live call
function CaptureViz() {
  const bars = [5, 9, 14, 8, 16, 11, 18, 10, 6, 13, 8, 15, 7, 11];
  return (
    <VizShell>
      <div className="rounded-2xl bg-white p-4 shadow-soft-lg ring-1 ring-border/60">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground">
            <span className="size-1.5 rounded-full bg-emerald-500" /> AI Assistant
          </span>
          <span className="text-[10px] font-medium text-muted-foreground">00:12</span>
        </div>
        <div className="mt-4 flex h-8 items-center justify-center gap-[3px]">
          {bars.map((h, i) => (
            <span
              key={i}
              className="w-[3px] rounded-full bg-brand"
              style={{ height: `${h}px`, opacity: 0.4 + (h / 18) * 0.6 }}
            />
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2 rounded-lg bg-brand/10 px-3 py-2">
          <PhoneCall className="size-3.5 text-brand" />
          <span className="text-[11px] font-semibold text-brand">Call captured → booked</span>
        </div>
      </div>
    </VizShell>
  );
}

// 03 — Convert: leads turning into booked jobs
function ConvertViz() {
  const rows = [
    { name: "New booking", status: "Booked", done: true },
    { name: "Reactivated lead", status: "Booked", done: true },
    { name: "Follow-up sent", status: "Converting", done: false },
  ];
  return (
    <VizShell>
      <div className="space-y-2">
        {rows.map((r) => (
          <div
            key={r.name}
            className="flex items-center justify-between rounded-xl bg-white px-3 py-2 shadow-soft ring-1 ring-border/60"
          >
            <span className="flex items-center gap-2 text-[11px] font-semibold text-foreground">
              <span
                className={`flex size-5 items-center justify-center rounded-full ${
                  r.done ? "bg-emerald-500/15 text-emerald-600" : "bg-accent/15 text-accent"
                }`}
              >
                {r.done ? <Check className="size-3" /> : <Repeat2 className="size-3" />}
              </span>
              {r.name}
            </span>
            <span
              className={`rounded-full px-2 py-0.5 text-[9px] font-bold ${
                r.done ? "bg-emerald-500/15 text-emerald-600" : "bg-accent/15 text-accent"
              }`}
            >
              {r.status}
            </span>
          </div>
        ))}
      </div>
    </VizShell>
  );
}

// 04 — Compound: revenue climbing month over month
function CompoundViz() {
  return (
    <VizShell>
      <div className="rounded-2xl bg-white p-4 shadow-soft-lg ring-1 ring-border/60">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] font-medium text-muted-foreground">Revenue</p>
            <p className="text-xl font-bold text-foreground">$248K</p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-bold text-emerald-600">
            <TrendingUp className="size-2.5" /> +22%
          </span>
        </div>
        <div className="mt-3 flex h-12 items-end gap-1.5">
          {[30, 42, 38, 55, 60, 78, 92].map((h, i) => (
            <span
              key={i}
              className={`flex-1 rounded-t ${i >= 5 ? "bg-accent" : "bg-brand/70"}`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </VizShell>
  );
}

/* ── Steps ─────────────────────────────────────────────────────────────── */

const steps = [
  {
    step: "01",
    title: "Diagnose the leak",
    detail: "We audit your calls, CRM, and pipeline and put a dollar figure on what you are losing today.",
    Viz: DiagnoseViz,
  },
  {
    step: "02",
    title: "Capture it",
    detail: "AI voice answers every call and reactivation wakes the dormant leads already in your database.",
    Viz: CaptureViz,
  },
  {
    step: "03",
    title: "Convert it",
    detail: "Speed-to-lead follow-up and frictionless booking turn more of the same leads into paid jobs.",
    Viz: ConvertViz,
  },
  {
    step: "04",
    title: "Compound it",
    detail: "We report revenue per lead and return on spend, then keep tuning so the numbers climb.",
    Viz: CompoundViz,
  },
];

export function RevenueOps() {
  return (
    <section className="section bg-surface">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Revenue optimisation</p>
          <h2 className="mt-3 text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl">
            We don&apos;t just automate tasks.
            <br />
            We <span className="text-gradient-brand">optimise the revenue</span> you already have.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Automation is the tool. Revenue is the outcome. We measure where every dollar falls out
            of the funnel, fix the most expensive gap first, and keep optimising the numbers that
            decide what you actually earn.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2">
          {steps.map((s, i) => {
            const Viz = s.Viz;
            return (
              <Reveal key={s.step} delay={(i % 2) * 0.08} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-border/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft-lg hover:ring-accent/30">
                  <div className="transition-transform duration-500 group-hover:scale-[1.03]">
                    <Viz />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-2.5">
                      <span className="flex size-6 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-white">
                        {s.step}
                      </span>
                      <h3 className="text-lg font-bold tracking-tight text-foreground">{s.title}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Closing audit CTA */}
        <div className="mx-auto mt-8 flex max-w-5xl flex-col items-center gap-4 rounded-3xl border border-border bg-white px-7 py-6 sm:flex-row sm:justify-between">
          <p className="text-center text-sm text-muted-foreground sm:text-left">
            Not sure how much revenue you are leaking?{" "}
            <span className="font-semibold text-foreground">
              We will quantify it on the call — for free.
            </span>
          </p>
          <Button asChild className="w-full sm:w-auto">
            <Link href={site.ctaHref}>
              Get your revenue audit
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
