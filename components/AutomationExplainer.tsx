import Link from "next/link";
import { ArrowRight, DatabaseZap, MapPin, PhoneCall, Workflow, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";

type Item = { icon: LucideIcon; title: string; body: string; cta: string; href: string };

const items: Item[] = [
  {
    icon: PhoneCall,
    title: "AI voice receptionist",
    body: "Answers calls, gathers service details, follows booking rules, and escalates calls that need a person.",
    cta: "Explore AI call answering",
    href: "/services/ai-voice-receptionist",
  },
  {
    icon: DatabaseZap,
    title: "Database reactivation",
    body: "Re-engages eligible past customers and dormant leads with relevant messages and booking follow-up.",
    cta: "Explore customer reactivation",
    href: "/services/database-reactivation",
  },
  {
    icon: Workflow,
    title: "CRM and workflow automation",
    body: "Connects lead capture, pipeline stages, reminders, and reporting across your existing tools.",
    cta: "Explore CRM automation",
    href: "/services/crm-lead-systems",
  },
];

// Answer-first explainer: the question and a plain answer on the left (what answer
// engines quote), the three systems it involves on the right as linked cards.
export function AutomationExplainer() {
  return (
    <section className="section" aria-labelledby="automation-overview">
      <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow">AI automation, explained</p>
          <h2
            id="automation-overview"
            className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
          >
            How do AI voice receptionists help service businesses?
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            AI automation connects call answering, lead follow-up, scheduling, and CRM updates.
            BurkyFlow builds and runs these systems for service businesses so inquiries reach the
            right person, appointments reach the calendar, and results can be measured.
          </p>

          <div className="mt-8 rounded-2xl bg-surface p-5 ring-1 ring-border/60">
            <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <MapPin className="size-4 text-brand" aria-hidden />
              We serve US businesses remotely, including:
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {site.serviceAreas.map((city) => (
                <li
                  key={city}
                  className="rounded-full bg-white px-3 py-1 text-sm font-medium text-foreground ring-1 ring-border/70"
                >
                  {city}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-muted-foreground">
              Scope, integrations, pricing, and human handoff rules are agreed before a build.
            </p>
          </div>
        </div>

        <ul className="grid gap-4">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <Reveal delay={i * 0.06}>
                  <Link
                    href={item.href}
                    className="group flex gap-5 rounded-3xl bg-white p-6 shadow-soft ring-1 ring-border/60 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft-lg hover:ring-brand/30 sm:p-7"
                  >
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                      <span className="mt-1.5 block text-muted-foreground">{item.body}</span>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                        {item.cta}
                        <ArrowRight
                          className="size-4 transition-transform group-hover:translate-x-0.5"
                          aria-hidden
                        />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
