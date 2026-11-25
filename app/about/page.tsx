import { StatBlock } from "@/components/StatBlock";
import { Reveal } from "@/components/Reveal";
import { stats } from "@/content/stats";
import { JsonLd } from "@/components/JsonLd";
import { pageMetadata, faqPageLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About: AI Automation for Service Businesses",
  description:
    "BurkyFlow is an AI automation agency that builds and runs the systems service businesses use to capture every call and book more revenue.",
  path: "/about",
});

const values = [
  {
    title: "Outcomes, not tools",
    body: "We are measured by booked jobs and captured calls, not by how many apps we set up. The system exists to move your numbers.",
  },
  {
    title: "One owned system",
    body: "A pile of disconnected tools is fragile. We build and operate one connected stack so you have something you can actually rely on.",
  },
  {
    title: "Honest and plain",
    body: "No hype, no jargon, no overpromising. We tell you what we would do, why, and what it should produce.",
  },
];

const services = [
  { name: "AI Receptionist", body: "Answers every call on the first ring, asks your qualifying questions, books against your real calendar, and transfers to a person by rules you set." },
  { name: "CRM and lead systems", body: "One pipeline for every call, form, and text, with automated follow-up for five days and reporting you can check against your own numbers." },
  { name: "Database reactivation", body: "Short messages in your own voice to past customers and quiet leads, with replies routed to booking instead of an inbox." },
  { name: "Workflow automation", body: "The connections between your booking app, CRM, invoicing, and inbox, built in n8n and GoHighLevel so the copy-paste stops." },
  { name: "AI search visibility", body: "Structured pages, consistent business details, and review signals so ChatGPT and Google AI answers can recommend you." },
];

const steps = [
  "A short call where you describe how calls, leads, and follow-up work today. We map where revenue is leaking and what to automate first.",
  "A written scope with the components, the handoff rules, the numbers we will report, and a launch date.",
  "Build and test on your real call types and lead sources before anything reaches a customer.",
  "Launch, then a weekly review for the first month and a monthly report after that, with changes made as your business changes.",
];

const faqs = [
  { q: "Do you work with businesses outside the United States?", a: "Yes. The systems are configured for your phone numbers, time zone, and calendar wherever you operate, and most engagements run entirely remotely." },
  { q: "Do we need to replace the tools we already use?", a: "Usually not. The AI receptionist, CRM, and workflows connect to common dispatch, booking, and practice systems, and we only replace a tool when it is the reason leads are lost." },
  { q: "Who runs the system after launch?", a: "We do. Done-for-you means we monitor every automation, adjust scripts and sequences, and send a monthly report. Your team answers the transfers and the hot replies." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={faqPageLd(faqs)} />
      <section className="section bg-surface">
        <div className="container-page mx-auto max-w-3xl text-center">
          <p className="eyebrow">About BurkyFlow</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
            We build the AI systems that catch the revenue you are losing
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            BurkyFlow is an AI automation agency for service businesses. We pair an AI
            receptionist, database reactivation, and CRM and workflow automation into one system
            we run for you, so missed calls and cold leads turn into booked work.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-6 md:grid-cols-3">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl bg-white p-6 shadow-soft ring-1 ring-border/60">
                <h2 className="text-xl font-semibold">{value.title}</h2>
                <p className="mt-3 text-muted-foreground">{value.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-page">
          <StatBlock stats={stats} />
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">What we build and run</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Five services, one connected system</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Each piece works on its own. Together they cover the path from the first ring to the
              completed job, and we run them for you under one done-for-you agreement.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((svc) => (
              <div key={svc.name} className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-border/60">
                <h3 className="text-lg font-semibold">{svc.name}</h3>
                <p className="mt-2 text-muted-foreground">{svc.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">How an engagement works</p>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">From first call to monthly report</h2>
            <ol className="mt-6 space-y-4">
              {steps.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-sm font-bold text-brand">{i + 1}</span>
                  <p className="text-foreground/80">{step}</p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <p className="eyebrow">Questions</p>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Before you work with us</h2>
            <div className="mt-6 divide-y divide-border/60">
              {faqs.map((f) => (
                <div key={f.q} className="py-4">
                  <h3 className="font-semibold text-foreground">{f.q}</h3>
                  <p className="mt-2 text-foreground/80">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
