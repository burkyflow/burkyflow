import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";
import { services } from "@/content/services";
import { CoverArt, tones, type CoverTone } from "@/components/CoverArt";
import { cn } from "@/lib/utils";
import { servicePhotos } from "@/content/photos";

const toneFor: Record<string, CoverTone> = {
  "ai-voice-receptionist": "peach",
  "database-reactivation": "green",
  "crm-lead-systems": "blue",
  "workflow-automation": "blue",
  "answer-engine-optimization": "peach",
  "done-for-you": "green",
};

// One card per service linking to its detail page. Used on Home and /services.
export function ServiceCardGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, i) => {
        const Icon = service.icon;
        return (
          <Reveal key={service.slug} delay={(i % 3) * 0.06}>
            <Link href={`/services/${service.slug}`} className="group block h-full">
              <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg hover:ring-brand/30">
                <CoverArt tone={toneFor[service.slug] ?? "blue"} seed={service.slug} icon={Icon} photo={servicePhotos[service.slug]} alt={`${service.name} photo`} className="h-44" />
                <CardHeader>
                  <p className={cn("text-xs font-semibold uppercase tracking-wider", tones[toneFor[service.slug] ?? "blue"].text)}>
                    {service.eyebrow}
                  </p>
                  <CardTitle className="mt-2 transition-colors group-hover:text-brand">{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.lead}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                    Learn more
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
