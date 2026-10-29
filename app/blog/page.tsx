import { BlogCard, postTopic, themes } from "@/components/BlogCard";
import { BlogGrid } from "@/components/BlogGrid";
import { PageHeader } from "@/components/PageHeader";
import { posts } from "@/content/blog";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Blog",
  description: "Practical guides on AI call answering, missed-call recovery, and CRM follow-up for service businesses, from the BurkyFlow team.",
  path: "/blog",
});

export default function BlogIndex() {
  const items = posts.map((post) => ({ slug: post.slug, topic: postTopic(post).theme.key, card: <BlogCard post={post} /> }));
  // Only offer tabs for topics that have posts.
  const topics = Object.values(themes)
    .filter((t) => items.some((item) => item.topic === t.key))
    .map((t) => ({ key: t.key, label: t.label }));

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title={<>Notes on automation that <span className="text-gradient-brand">books revenue</span></>}
        lead="Practical guides on AI agents, n8n workflows, missed-call recovery, and the systems that turn demand into booked work."
      />

      <section className="section">
        <div className="container-page">
          <BlogGrid items={items} topics={topics} />
        </div>
      </section>
    </>
  );
}
