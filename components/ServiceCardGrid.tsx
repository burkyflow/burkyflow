import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";
import { services } from "@/content/services";

// One card per service linking to its detail page. Used on Home and /services.
export function ServiceCardGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, i) => {
        const Icon = service.icon;
        return (
          <Reveal key={service.slug} delay={(i % 3) * 0.06}>
            <Link href={`/services/${service.slug}`} className="group block h-full">
              <Card className="h-full transition-shadow duration-200 hover:shadow-soft-lg">
                <CardHeader>
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-brand/10 text-brand">
                    <Icon className="size-5" />
                  </span>
                  <CardTitle className="mt-3">{service.name}</CardTitle>
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
