import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { ProblemFraming } from "@/components/ProblemFraming";
import { RevenueOps } from "@/components/RevenueOps";
import { AlternatingFeatureBlock } from "@/components/AlternatingFeatureBlock";
import { WedgeGrid } from "@/components/WedgeGrid";
import { ResultsStats } from "@/components/ResultsStats";
import { IndustryStrip } from "@/components/IndustryStrip";
import { LogoWall } from "@/components/LogoWall";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Reveal } from "@/components/Reveal";
import { services } from "@/content/services";
import { homeFaqs } from "@/content/stats";
import { site } from "@/lib/site";
import { pageMetadata, faqPageLd, serviceItemListLd, localBusinessLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "AI Voice & CRM Automation for Service Businesses",
  description: "Capture missed calls and reactivate dormant leads with BurkyFlow's AI voice receptionist, CRM automation, and managed revenue operations for service businesses.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={[localBusinessLd(), faqPageLd(homeFaqs), serviceItemListLd({ name: "BurkyFlow AI automation services", services: services.map(s => ({ name: s.name, description: s.lead, url: `${site.url}/services/${s.slug}` })) })]} />
      <Hero />

      <TrustedBy />

      <section className="section" aria-labelledby="automation-overview">
        <div className="container-page mx-auto max-w-3xl">
          <h2 id="automation-overview" className="text-3xl font-semibold sm:text-4xl">How do AI voice receptionists help service businesses?</h2>
          <p className="mt-5 text-lg text-muted-foreground">AI automation connects call answering, lead follow-up, scheduling, and CRM updates. BurkyFlow builds and runs these systems for service businesses so enquiries reach the right person, appointments reach the calendar, and results can be measured.</p>
          <dl className="mt-6 space-y-4 text-muted-foreground">
            <div><dt className="font-semibold text-foreground">AI voice receptionist</dt><dd>Answers calls, gathers service details, follows booking rules, and escalates calls that need a person. <Link href="/services/ai-voice-receptionist" className="text-brand underline">Explore AI call answering</Link>.</dd></div>
            <div><dt className="font-semibold text-foreground">Database reactivation</dt><dd>Re-engages eligible past customers and dormant leads with relevant messages and booking follow-up. <Link href="/services/database-reactivation" className="text-brand underline">Explore customer reactivation</Link>.</dd></div>
            <div><dt className="font-semibold text-foreground">CRM and workflow automation</dt><dd>Connects lead capture, pipeline stages, reminders, and reporting across your existing tools. <Link href="/services/crm-lead-systems" className="text-brand underline">Explore CRM automation</Link>.</dd></div>
          </dl>
          <p className="mt-6 text-sm text-muted-foreground">We serve US businesses remotely, including Houston, San Antonio, Charleston, and Greenville. Scope, integrations, pricing, and human handoff rules are agreed before a build.</p>
        </div>
      </section>

      {/* Top 4 wedge offers, the sharpest pitches we lead with */}
      <section id="wedges" className="section bg-surface">
        <div className="container-page">
          <WedgeGrid />
        </div>
      </section>

      <ProblemFraming />

      {/* Revenue operations, how we actually grow the number, not just automate */}
      <RevenueOps />

      {/* Services as alternating M360-style sections */}
      <section id="services" className="section">
        <div className="container-page flex flex-col gap-20 md:gap-28">
          {services.map((service, i) => (
            <AlternatingFeatureBlock
              key={service.slug}
              id={`service-${service.slug}`}
              eyebrow={service.eyebrow}
              heading={service.h2}
              lead={service.lead}
              steps={service.steps}
              whyItMatters={service.whyItMatters}
              illustration={service.illustration}
              side={i % 2 === 0 ? "right" : "left"}
            />
          ))}
        </div>
      </section>

      <ResultsStats />

      {/* Industries strip */}
      <section id="industries" className="section">
        <div className="container-page">
          <IndustryStrip />
        </div>
      </section>

      {/* Logo wall + case studies anchor */}
      <section id="case-studies" className="section">
        <div className="container-page">
          <LogoWall />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section bg-surface">
        <div className="container-page">
          <FAQAccordion items={homeFaqs} />
        </div>
      </section>

    </>
  );
}
