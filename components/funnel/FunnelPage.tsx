import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Star, Phone, ShieldCheck, Clock, Quote } from "lucide-react";
import { site } from "@/lib/site";
import type { Funnel } from "@/content/funnels";
import type { Industry } from "@/content/industries";
import { FAQAccordion } from "@/components/FAQAccordion";

type Testimonial = { text: string; attribution: string; vertical?: string };

const BOOK_ID = "book";

function CTA({ label = "Book your call", className = "" }: { label?: string; className?: string }) {
  return (
    <a
      href={`#${BOOK_ID}`}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-brand-cta px-7 py-3.5 text-base font-semibold text-brand-cta-fg shadow-soft transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-brand-cta-hover hover:shadow-soft-lg active:translate-y-0 active:scale-[0.98] ${className}`}
    >
      {label}
      <ArrowRight className="size-4" />
    </a>
  );
}

export function FunnelPage({
  funnel,
  industry,
  testimonials,
}: {
  funnel: Funnel;
  industry: Industry;
  testimonials: Testimonial[];
}) {
  const calendly = `${site.calendly}?hide_gdpr_banner=1&background_color=ffffff&primary_color=f16b4d`;

  return (
    <div className="bg-white">
      {/* ── Minimal funnel nav ─────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-white/85 backdrop-blur-md">
        <nav className="container-page flex h-16 items-center justify-between">
          <Link href="/" className="inline-flex items-center">
            <Image src="/images/logo1.png" alt={site.name} width={3136} height={760} priority className="h-7 w-auto" />
          </Link>
          <CTA label="Book a call" className="px-5 py-2.5 text-sm" />
        </nav>
      </header>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand/[0.06] to-white">
        <div className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-accent/10 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -left-24 top-40 size-80 rounded-full bg-brand/10 blur-3xl" aria-hidden />

        <div className="container-page relative py-16 text-center md:py-24">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand shadow-soft">
            <ShieldCheck className="size-3.5" />
            {funnel.eyebrow}
          </p>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
            {funnel.headline} <span className="text-gradient-brand">{funnel.headlineAccent}</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">{funnel.subheadline}</p>

          <div className="mt-9 flex justify-center">
            <CTA />
          </div>

          <ul className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-foreground">
            {funnel.heroPoints.map((p) => (
              <li key={p} className="inline-flex items-center gap-2">
                <Check className="size-4 text-accent" strokeWidth={3} />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Results bar ────────────────────────────────────────── */}
      <section className="container-page py-14 md:py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {funnel.results.map((r) => (
            <div
              key={r.label}
              className="rounded-2xl bg-brand-cta p-6 text-center text-brand-cta-fg shadow-soft"
            >
              <p className="font-heading text-4xl font-bold tracking-tight">{r.value}</p>
              <p className="mt-2 text-sm font-medium text-brand-cta-fg/90">{r.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Problem framing ────────────────────────────────────── */}
      <section className="bg-surface py-16 md:py-20">
        <div className="container-page mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{funnel.problemHeading}</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            If any of these are true, you&apos;re paying for leads you never get to talk to.
          </p>
        </div>
        <div className="container-page mx-auto mt-10 grid max-w-3xl gap-3">
          {funnel.problems.map((p) => (
            <div
              key={p}
              className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-soft ring-1 ring-border/60"
            >
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Phone className="size-3.5" />
              </span>
              <p className="text-sm text-foreground">{p}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <CTA label="Fix this on a call" />
        </div>
      </section>

      {/* ── What we run for you ────────────────────────────────── */}
      <section className="container-page py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">The system</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{funnel.featuresHeading}</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We build it, run it, and keep it tuned. You get booked jobs, not another tool to manage.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
          {funnel.features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col rounded-3xl border border-border bg-white p-7 shadow-soft"
            >
              <h3 className="text-lg font-bold tracking-tight">{f.title}</h3>
              <ul className="mt-5 flex flex-col gap-3">
                {f.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────────────────── */}
      {testimonials.length > 0 && (
        <section className="bg-surface py-16 md:py-20">
          <div className="container-page mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What business owners say
            </h2>
          </div>
          <div className="container-page mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.attribution}
                className="flex flex-col rounded-3xl bg-white p-7 shadow-soft ring-1 ring-border/60"
              >
                <Quote className="size-6 text-accent" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-5 border-t border-border/60 pt-4">
                  <p className="text-sm font-bold text-foreground">{t.attribution}</p>
                  {t.vertical && <p className="text-xs text-muted-foreground">{t.vertical}</p>}
                  <div className="mt-2 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-accent text-accent" />
                    ))}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section className="container-page py-16 md:py-24">
        <FAQAccordion items={industry.faqs} eyebrow="Questions" heading="Frequently asked questions" />
      </section>

      {/* ── Booking ────────────────────────────────────────────── */}
      <section id={BOOK_ID} className="scroll-mt-20 bg-gradient-to-b from-brand/[0.08] to-white py-16 md:py-24">
        <div className="container-page mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent">
            <Clock className="size-3.5" />
            30-minute call
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
            {funnel.bookingHeading}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">{funnel.bookingLead}</p>
        </div>

        <div className="container-page mx-auto mt-10 max-w-4xl">
          <iframe
            src={calendly}
            title={`Book a call with ${site.name}`}
            className="h-[720px] w-full"
            loading="lazy"
          />
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Prefer to talk now? Call{" "}
            <a href={site.phone.href} className="font-semibold text-brand hover:underline">
              {site.phone.display}
            </a>{" "}
            or email{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-brand hover:underline">
              {site.email}
            </a>
            .
          </p>
        </div>
      </section>

      {/* ── Minimal footer ─────────────────────────────────────── */}
      <footer className="border-t border-border/60 bg-white">
        <div className="container-page flex flex-col items-center gap-4 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <Image src="/images/logo1.png" alt={site.name} width={3136} height={760} className="h-7 w-auto" />
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
