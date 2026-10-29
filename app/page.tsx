import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { ProblemFraming } from "@/components/ProblemFraming";
import { RevenueOps } from "@/components/RevenueOps";
import { ServiceCardGrid } from "@/components/ServiceCardGrid";
import { AutomationExplainer } from "@/components/AutomationExplainer";
import { Testimonials } from "@/components/Testimonials";
import { testimonialsFor } from "@/content/testimonials";
import { WedgeGrid } from "@/components/WedgeGrid";
import { ResultsStats } from "@/components/ResultsStats";
import { IndustryStrip } from "@/components/IndustryStrip";
import { LogoWall } from "@/components/LogoWall";
import { FAQAccordion } from "@/components/FAQAccordion";
import { services } from "@/content/services";
import { homeFaqs } from "@/content/stats";
import { site } from "@/lib/site";
import { pageMetadata, faqPageLd, serviceItemListLd, localBusinessLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

export const metadata = pageMetadata({
  title: "AI Voice Receptionist & CRM Automation Services | BurkyFlow",
  description: "Capture missed calls and reactivate dormant leads with BurkyFlow's AI voice receptionist, CRM automation, and managed revenue operations for service businesses.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={[localBusinessLd(), faqPageLd(homeFaqs), serviceItemListLd({ name: "BurkyFlow AI automation services", services: services.map(s => ({ name: s.name, description: s.lead, url: `${site.url}/services/${s.slug}` })) })]} />
      <Hero />

      <TrustedBy />

      <AutomationExplainer />

      {/* Top 4 offers most clients start with */}
      <section id="offers" className="section bg-surface">
        <div className="container-page">
          <WedgeGrid />
        </div>
      </section>

      <ProblemFraming />

      {/* Revenue operations, how we actually grow the number, not just automate */}
      <RevenueOps />

      {/* Services: one compact card each; full detail lives on each service page */}
      <section id="services" className="section">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Services</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Everything we build and run for you
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Each service works on its own or as one connected system.
            </p>
          </div>
          <div className="mt-12">
            <ServiceCardGrid />
          </div>
        </div>
      </section>

      {/* Client testimonials: new reviews first, then case-study quotes */}
      <section id="testimonials" className="section bg-surface">
        <div className="container-page">
          <Testimonials items={testimonialsFor()} />
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
