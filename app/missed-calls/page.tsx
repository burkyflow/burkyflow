import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Check,
  DatabaseZap,
  PhoneCall,
  PhoneOff,
  Sparkles,
  Workflow,
} from "lucide-react";
import { FAQAccordion } from "@/components/FAQAccordion";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/content/case-studies";
import { industries } from "@/content/industries";
import { posts } from "@/content/blog";
import { getService } from "@/content/services";
import { stats } from "@/content/stats";
import { getWedge } from "@/content/wedges";
import { faqPageLd, pageMetadata, serviceDetailLd } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Build Funnel 1, Missed-Call Recovery",
  description:
    "A missed-call recovery landing page built from BurkyFlow's AI voice, database reactivation, CRM, workflow, industry, case study, and content systems.",
  path: "/missed-calls",
});

const coreServiceSlugs = [
  "ai-voice-receptionist",
  "database-reactivation",
  "crm-lead-systems",
  "workflow-automation",
] as const;

const coreServices = coreServiceSlugs
  .map((slug) => getService(slug))
  .filter((service): service is NonNullable<ReturnType<typeof getService>> => Boolean(service));

const wedgeSlugs = ["always-on-voice", "database-reactivation"] as const;
const funnelWedges = wedgeSlugs
  .map((slug) => getWedge(slug))
  .filter((wedge): wedge is NonNullable<ReturnType<typeof getWedge>> => Boolean(wedge));

const proofIndustries = ["home-services", "healthcare", "real-estate", "automotive", "professional-firms"]
  .map((slug) => industries.find((industry) => industry.slug === slug))
  .filter((industry): industry is (typeof industries)[number] => Boolean(industry));

const proofStudies = caseStudies
  .filter((study) => study.relatedServices.some((slug) => coreServiceSlugs.includes(slug as (typeof coreServiceSlugs)[number])))
  .slice(0, 4);

const readingList = posts.filter((post) =>
  ["missed-calls-are-lost-revenue", "your-crm-is-a-revenue-list"].includes(post.slug)
);

const faqs = [
  {
    q: "What is missed-call recovery?",
    a:
      "It is the combination of AI voice reception, fast follow-up, CRM routing, and reactivation that turns unanswered rings into booked work instead of lost revenue.",
  },
  {
    q: "What powers this funnel?",
    a:
      "The same systems used across the site: AI Voice Receptionist, Database Reactivation, CRM and Lead Systems, and Workflow Automation.",
  },
  {
    q: "Does this replace my front desk?",
    a:
      "No. It covers overflow, after-hours, and the follow-up work that front desks cannot keep up with during busy periods.",
  },
  {
    q: "How fast can a first system go live?",
    a:
      "A focused first deployment, such as missed-call capture or a reactivation campaign, can usually be launched in a couple of weeks.",
  },
  {
    q: "Which businesses get the fastest lift?",
    a:
      "Home services, healthcare practices, real-estate teams, automotive shops, and professional firms that depend on phone and intake flow.",
  },
  {
    q: "Can this work with my CRM and scheduler?",
    a:
      "Yes. The system is designed to write qualified calls and bookings into the tools you already run.",
  },
];

export default function MissedCallsPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceDetailLd({
            name: "Missed-Call Recovery Funnel",
            description:
              "BurkyFlow's missed-call recovery landing page. It combines AI voice, database reactivation, CRM routing, and workflow automation to turn missed calls into booked revenue.",
            url: `${site.url}/missed-calls`,
          }),
          faqPageLd(faqs),
        ]}
      />

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.18),_transparent_35%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
        <div className="container-page py-16 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <div className="max-w-2xl">
                <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-medium text-muted-foreground shadow-soft ring-1 ring-border/60">
                  <Sparkles className="size-4 text-brand" />
                  Build Funnel 1
                </p>
                <h1 className="mt-6 text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl">
                  Missed-call recovery that turns unanswered rings into booked revenue
                </h1>
                <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
                  BurkyFlow uses the same AI voice, reactivation, CRM, and workflow systems across
                  the site to make sure every missed call gets a second chance, every old lead gets
                  a follow-up, and every booked opportunity lands where your team can close it.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg">
                    <Link href={site.ctaHref}>
                      {site.ctaLabel}
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="secondary" size="lg">
                    <Link href="#stack">See the funnel stack</Link>
                  </Button>
                </div>

                <div className="mt-8 flex flex-wrap gap-3 text-sm text-muted-foreground">
                  <Link
                    href="#proof"
                    className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 ring-1 ring-border/60 transition-colors hover:text-brand"
                  >
                    Proof
                  </Link>
                  <Link
                    href="#industries"
                    className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 ring-1 ring-border/60 transition-colors hover:text-brand"
                  >
                    Industries
                  </Link>
                  <Link
                    href="#reading"
                    className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 ring-1 ring-border/60 transition-colors hover:text-brand"
                  >
                    Reading
                  </Link>
                  <Link
                    href="#faq"
                    className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 ring-1 ring-border/60 transition-colors hover:text-brand"
                  >
                    FAQ
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-[2rem] border border-border/70 bg-white p-6 shadow-soft-lg">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                      Funnel map
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold">The missed-call recovery loop</h2>
                  </div>
                  <div className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                    Always on
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {[
                    {
                      title: "Answer the call",
                      detail:
                        "An AI voice receptionist catches the first ring, qualifies the caller, and pushes the lead into the right flow.",
                      icon: PhoneCall,
                    },
                    {
                      title: "Recover the old list",
                      detail:
                        "Database reactivation wakes up dormant customers and dead leads who already know your business.",
                      icon: DatabaseZap,
                    },
                    {
                      title: "Route and follow up",
                      detail:
                        "CRM and workflow automation keep the booking, reminders, and handoff moving without manual chasing.",
                      icon: Workflow,
                    },
                  ].map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <div key={step.title} className="flex gap-4 rounded-2xl bg-surface p-4">
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-white text-brand shadow-soft ring-1 ring-border/60">
                          {index + 1}
                        </span>
                        <div>
                          <div className="flex items-center gap-2">
                            <Icon className="size-4 text-brand" />
                            <p className="font-semibold">{step.title}</p>
                          </div>
                          <p className="mt-1 text-sm text-muted-foreground">{step.detail}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {[
                    stats[0],
                    stats[2],
                    {
                      value: "$45K–$120K",
                      label: "missed-call loss per year in home services",
                    },
                  ].map((item) => (
                    <div key={item.label} className="rounded-2xl bg-surface p-4 text-center">
                      <p className="text-2xl font-semibold text-brand font-heading">{item.value}</p>
                      <p className="mt-2 text-xs uppercase tracking-wide text-muted-foreground">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="stack" className="section">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">The stack</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Four systems that keep missed calls from becoming lost jobs
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              This funnel is built from the same core services used across the rest of the site,
              arranged around one job: respond first, recover fast, and keep the follow-up moving.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {coreServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.slug} delay={(index % 4) * 0.05}>
                  <Card className="h-full">
                    <CardHeader>
                      <span className="flex size-11 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                        <Icon className="size-5" />
                      </span>
                      <CardTitle className="mt-3 text-xl">{service.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{service.lead}</p>
                      <ul className="mt-4 space-y-2">
                        {service.outcomes.slice(0, 2).map((outcome) => (
                          <li key={outcome} className="flex items-start gap-2 text-sm">
                            <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="proof" className="section bg-surface">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Why this works</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              The wedge behind the funnel is the same one the rest of the site leads with
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Missed-call recovery usually starts with the always-on voice wedge and expands into
              reactivation and operational automation once the first revenue leak is closed.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {funnelWedges.map((wedge, index) => (
              <Reveal key={wedge.slug} delay={index * 0.06}>
                <Card className="h-full">
                  <CardHeader>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Wedge {wedge.letter}
                    </p>
                    <CardTitle className="mt-2 text-2xl">{wedge.shortName}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{wedge.pitch}</p>
                    <div className="mt-4 rounded-2xl bg-surface p-4">
                      <p className="text-sm font-semibold text-foreground">Risk reversal</p>
                      <p className="mt-1 text-sm text-muted-foreground">{wedge.riskReversal}</p>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {wedge.proofPoints.slice(0, 3).map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm">
                          <BadgeCheck className="mt-0.5 size-4 shrink-0 text-brand" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="section">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Where it lands first</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              The industries most likely to feel this leak immediately
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              These are the site's strongest vertical pages, and they all share the same problem:
              calls come in, nobody answers fast enough, and revenue leaves with the next click.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {proofIndustries.map((industry, index) => (
              <Reveal key={industry.slug} delay={(index % 3) * 0.06}>
                <Link href={`/industries/${industry.slug}`} className="group block h-full">
                  <Card className="h-full transition-shadow duration-200 hover:shadow-soft-lg">
                    <CardHeader>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {industry.name}
                      </p>
                      <CardTitle className="mt-2 text-2xl">{industry.h1}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {industry.stat && (
                        <div className="rounded-2xl bg-surface p-4">
                          <p className="text-2xl font-semibold text-brand font-heading">
                            {industry.stat.value}
                          </p>
                          <p className="mt-1 text-sm text-muted-foreground">{industry.stat.label}</p>
                        </div>
                      )}
                      <p className="mt-4 text-sm text-muted-foreground">{industry.lead}</p>
                      <p className="mt-4 text-sm font-medium text-foreground">{industry.offers[0]}</p>
                      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                        View industry page
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Live proof</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Real deployments that prove the same system works in the field
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              These case studies show the same ingredients in different shapes: phone capture,
              follow-up automation, CRM discipline, and fewer opportunities slipping through the
              cracks.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {proofStudies.map((study, index) => (
              <Reveal key={study.slug} delay={(index % 4) * 0.06}>
                <Link href={`/case-studies/${study.slug}`} className="group block h-full">
                  <Card className="h-full transition-shadow duration-200 hover:shadow-soft-lg">
                    <CardHeader>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {study.client}
                      </p>
                      <CardTitle className="mt-2 text-xl">{study.headline}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{study.summary}</p>
                      <ul className="mt-4 space-y-2">
                        {study.results.slice(0, 2).map((result) => (
                          <li key={result} className="flex items-start gap-2 text-sm">
                            <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                        Read the case study
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="reading" className="section">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Read more</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              The thinking behind the funnel lives in the blog too
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              If someone wants to understand the reasoning before they book a call, these are the
              two best articles to send them to.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {readingList.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.06}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <Card className="h-full transition-shadow duration-200 hover:shadow-soft-lg">
                    <CardHeader>
                      <span className="flex size-11 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                        <BookOpen className="size-5" />
                      </span>
                      <CardTitle className="mt-3 text-2xl">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                      <p className="mt-4 text-sm font-medium text-foreground">
                        {post.readMinutes} min read
                      </p>
                      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                        Open article
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="section bg-surface">
        <div className="container-page">
          <FAQAccordion
            items={faqs}
            heading="Missed-call recovery: common questions"
            lead="Straight answers for the part of the funnel most owners underestimate."
          />
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="mx-auto max-w-3xl rounded-3xl bg-surface p-6 text-center ring-1 ring-border/60 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Explore the rest of the site
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              {[
                ["Services", "/services"],
                ["Bundles", "/bundles"],
                ["Industries", "/industries"],
                ["Case Studies", "/case-studies"],
                ["Blog", "/blog"],
                ["About", "/about"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium ring-1 ring-border/60 transition-colors hover:text-brand"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}