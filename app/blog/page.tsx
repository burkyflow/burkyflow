import { BlogCard } from "@/components/BlogCard";
import { Reveal } from "@/components/Reveal";
import { posts } from "@/content/blog";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Blog",
  description: "Practical guides on AI call answering, missed-call recovery, and CRM follow-up for service businesses, from the BurkyFlow team.",
  path: "/blog",
});

export default function BlogIndex() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60 bg-[#fbfbfe]">
        <div aria-hidden className="pointer-events-none absolute -left-32 -top-32 size-[28rem] rounded-full bg-accent-soft/40 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -right-24 top-6 size-[22rem] rounded-full bg-brand/15 blur-3xl" />
        <div aria-hidden className="problem-dot-grid pointer-events-none absolute inset-y-0 left-0 w-1/3" />

        <div className="container-page relative mx-auto max-w-3xl py-16 text-center md:py-24">
          <p className="eyebrow">Blog</p>
          <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Notes on automation that <span className="text-gradient-brand">books revenue</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Practical guides on AI agents, n8n workflows, missed-call recovery, and the systems that
            turn demand into booked work.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.05} className="h-full">
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
