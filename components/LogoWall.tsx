// "Works seamlessly with the tools you already use", integrations section.
// Flat cards, no shadow. Paste each app's icon URL in the `logo` field below.
import { ShieldCheck, ImageIcon } from "lucide-react";

type Logo = { name: string; logo: string };

// ── Paste each app's icon URL here (a /images/... path or a full URL). ──
// Leave "" to show the placeholder.
const logos: Logo[] = [
  { name: "HubSpot", logo: "/images/hubspot.png" },
  { name: "Salesforce", logo: "/images/salesforce.webp" },
  { name: "Twilio", logo: "/images/twilio.png" },
  { name: "Zapier", logo: "/images/zapier.png" },
  { name: "Google", logo: "/images/google.png" },
  { name: "Slack", logo: "/images/slack.png" },
];

export function LogoWall({
  eyebrow = "Trusted by leading platforms",
  lead = "BurkyFlow integrates with the platforms you rely on every day, so you can automate follow-ups without changing your workflow.",
}: {
  eyebrow?: string;
  lead?: string;
}) {
  return (
    <div>
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand">
          <ShieldCheck className="size-4" />
          {eyebrow}
        </span>

        <h2 className="mt-5 text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl">
          Works seamlessly with the tools <span className="text-brand">you already use</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">{lead}</p>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {logos.map((item) => (
          <div
            key={item.name}
            className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-border/70 bg-white px-4 py-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-soft"
          >
            {item.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={item.logo}
                alt={item.name}
                className="h-10 w-10 object-contain grayscale transition-all duration-300 group-hover:scale-110 group-hover:grayscale-0"
              />
            ) : (
              <div className="flex size-10 items-center justify-center rounded-lg bg-surface text-muted-foreground/50">
                <ImageIcon className="size-5" strokeWidth={1.5} />
              </div>
            )}
            <span className="text-sm font-semibold text-foreground">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
