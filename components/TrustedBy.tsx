// "Trusted by service businesses across industries", logo strip under the hero.
// Desktop: centered wrap. Mobile: infinite right-to-left marquee.
// Placeholder service-business marks (icon + wordmark) in muted "logo" grey.
// TODO(you): swap in real client logos when you have permission to display them.
import { Wind, Droplets, Zap, Home, SprayCan, Bug, type LucideIcon } from "lucide-react";

type BrandLogo = { name: string; sub: string; icon: LucideIcon };

const logos: BrandLogo[] = [
  { name: "HVAC", sub: "Pros", icon: Wind },
  { name: "PlumbRight", sub: "Solutions", icon: Droplets },
  { name: "Elevate", sub: "Electrical", icon: Zap },
  { name: "RoofMax", sub: "Exteriors", icon: Home },
  { name: "CleanSpace", sub: "Restoration", icon: SprayCan },
  { name: "PestFree", sub: "Solutions", icon: Bug },
];

function LogoItem({ name, sub, icon: Icon, className = "" }: BrandLogo & { className?: string }) {
  return (
    <span
      className={`flex shrink-0 items-center gap-2.5 whitespace-nowrap text-slate-400 ${className}`}
    >
      <span className="flex size-7 shrink-0 items-center justify-center">
        <Icon className="size-7" strokeWidth={1.75} />
      </span>
      <span className="leading-tight">
        <span className="block text-sm font-bold tracking-tight">{name}</span>
        <span className="block text-[10px] font-medium uppercase tracking-[0.16em] opacity-80">
          {sub}
        </span>
      </span>
    </span>
  );
}

export function TrustedBy({
  heading = "Trusted by service businesses across industries",
}: {
  heading?: string;
}) {
  return (
    <section className="overflow-hidden border-y border-border/60 bg-white py-12 md:py-14">
      <div className="container-page">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground/70">
          {heading}
        </p>
      </div>

      {/* Desktop / tablet: centered wrap */}
      <div className="container-page hidden sm:block">
        <div className="mx-auto mt-9 flex max-w-5xl flex-wrap justify-center gap-x-8 gap-y-8">
          {logos.map((logo) => (
            <LogoItem key={logo.name} {...logo} className="w-36" />
          ))}
        </div>
      </div>

      {/* Mobile: infinite right-to-left marquee */}
      <div className="mt-9 sm:hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-10">
          {[...logos, ...logos].map((logo, i) => (
            <LogoItem key={i} {...logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
