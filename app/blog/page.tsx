import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { posts } from "@/content/blog";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Blog",
  description: "Practical guides on AI call answering, missed-call recovery, and CRM follow-up for service businesses, from the BurkyFlow team.",
  path: "/blog",
});

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

export default function BlogIndex() {
  return (
    <>
      <section className="section bg-surface">
        <div className="container-page mx-auto max-w-3xl text-center">
          <p className="eyebrow">Blog</p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
            Notes on automation that books revenue
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Practical thinking on missed calls, reactivation, and the systems that turn demand into
            booked work.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page mx-auto max-w-3xl divide-y divide-border">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.05}>
              <Link href={`/blog/${post.slug}`} className="group block py-8">
                <p className="text-sm text-muted-foreground">
                  {fmt(post.date)} &middot; {post.readMinutes} min read
                </p>
                <h2 className="mt-2 text-2xl font-semibold transition-colors group-hover:text-brand">
                  {post.title}
                </h2>
                <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  Read post
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
