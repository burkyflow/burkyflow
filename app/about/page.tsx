import { StatBlock } from "@/components/StatBlock";
import { Reveal } from "@/components/Reveal";
import { stats } from "@/content/stats";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "BurkyFlow is an AI automation agency that builds and runs the systems service businesses use to capture every call and book more revenue.",
  path: "/about",
});

// TODO(you): replace placeholder narrative with the real BurkyFlow story,
// founder bio, and any credentials you want to lead with.
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

export default function AboutPage() {
  return (
    <>
      <section className="section bg-surface">
        <div className="container-page mx-auto max-w-3xl text-center">
          <p className="eyebrow">About BurkyFlow</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
            We build the AI systems that catch the revenue you are losing
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            BurkyFlow is an AI automation agency for service businesses. We pair an AI voice
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

    </>
  );
}
