import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";
import { industries } from "@/content/industries";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Industries",
  description:
    "AI automation built for home services, healthcare practices, real estate teams, automotive shops, and professional firms.",
  path: "/industries",
});

export default function IndustriesIndex() {
  return (
    <>
      <section className="section bg-surface">
        <div className="container-page mx-auto max-w-3xl text-center">
          <p className="eyebrow">Industries</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
            Built for businesses that win on speed and follow-up
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            The mechanics are the same across industries: answer first, follow up fast, never let a
            lead go cold. We tune the system to how your trade actually works.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {industries.map((industry, i) => (
            <Reveal key={industry.slug} delay={(i % 2) * 0.06}>
              <Link href={`/industries/${industry.slug}`} className="group block h-full">
                <Card className="h-full transition-shadow duration-200 hover:shadow-soft-lg">
                  <CardHeader>
                    <CardTitle>{industry.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{industry.lead}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                      View industry
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

    </>
  );
}
