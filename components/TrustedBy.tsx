import {
  Wind,
  Droplets,
  Zap,
  Home,
  HardHat,
  Stethoscope,
  Building2,
  Scale,
  CarFront,
  HandCoins,
  BriefcaseBusiness,
  type LucideIcon,
} from "lucide-react";

type BrandLogo = { name: string; sub: string; icon: LucideIcon };

const logos: BrandLogo[] = [
  { name: "HVAC", sub: "Services", icon: Wind },
  { name: "Plumbing", sub: "Services", icon: Droplets },
  { name: "Electrical", sub: "Services", icon: Zap },
  { name: "Roofing", sub: "Services", icon: Home },
  { name: "Construction", sub: "Companies", icon: HardHat },
  { name: "Automotive", sub: "Services", icon: CarFront },
  { name: "Auto Finance", sub: "Companies", icon: HandCoins },
  { name: "Staffing", sub: "Companies", icon: BriefcaseBusiness },
  { name: "Healthcare", sub: "Practices", icon: Stethoscope },
  { name: "Real Estate", sub: "Teams", icon: Building2 },
  { name: "Professional", sub: "Firms", icon: Scale },
];

function LogoItem({ name, sub, icon: Icon, className = "" }: BrandLogo & { className?: string }) {
  return (
    <span
      className={`flex shrink-0 items-center gap-2.5 whitespace-nowrap text-muted-foreground ${className}`}
    >
      <span className="flex size-7 shrink-0 items-center justify-center">
        <Icon className="size-7" strokeWidth={1.75} />
      </span>
      <span className="leading-tight">
        <span className="block text-sm font-bold tracking-tight">{name}</span>
        <span className="block text-[10px] font-medium uppercase tracking-[0.16em]">
          {sub}
        </span>
      </span>
    </span>
  );
}

export function TrustedBy({
  heading = "Built for service businesses across industries",
}: {
  heading?: string;
}) {
  return (
    <section className="overflow-hidden border-y border-border/60 bg-white py-12 md:py-14">
      <div className="container-page">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {heading}
        </p>
      </div>

      {/* Infinite right-to-left marquee at every width; pauses on hover. */}
      <div className="container-page mt-9 motion-reduce:hidden">
        <div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused] md:gap-14">
            {[...logos, ...logos].map((logo, i) => (
              <LogoItem key={i} {...logo} />
            ))}
          </div>
        </div>
      </div>

      {/* Reduced motion: every industry once, wrapped and still. */}
      <div className="container-page mt-9 hidden motion-reduce:block">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-x-10 gap-y-6">
          {logos.map((logo) => (
            <LogoItem key={logo.name} {...logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
