import { BlogCard } from "@/components/BlogCard";
import { PageHeader } from "@/components/PageHeader";
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
      <PageHeader
        eyebrow="Blog"
        title={<>Notes on automation that <span className="text-gradient-brand">books revenue</span></>}
        lead="Practical guides on AI agents, n8n workflows, missed-call recovery, and the systems that turn demand into booked work."
      />

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
