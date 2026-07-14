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
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Revenue operations and AI automation for service businesses",
  description: site.tagline,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />

      <TrustedBy />

      {/* Top 4 wedge offers — the sharpest pitches we lead with */}
      <section id="wedges" className="section bg-surface">
        <div className="container-page">
          <WedgeGrid />
        </div>
      </section>

      <ProblemFraming />

      {/* Revenue operations — how we actually grow the number, not just automate */}
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
