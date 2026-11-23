import { BlogCard, postTopic, themes } from "@/components/BlogCard";
import { BlogGrid } from "@/components/BlogGrid";
import { PageHeader } from "@/components/PageHeader";
import { posts } from "@/content/blog";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Blog: AI Call Answering and Automation Guides",
  description: "Practical guides on AI call answering, missed-call recovery, and CRM follow-up for service businesses, from the BurkyFlow team.",
  path: "/blog",
});
// Advertise the RSS feed to browsers, readers and crawlers.
metadata.alternates = { ...metadata.alternates, types: { "application/rss+xml": "/blog/feed.xml" } };

export default function BlogIndex() {
  // "All posts" rotates through the topics (newest of each, then the next of each) so the
  // list is not a run of one subject. Each tab still shows its own blogs newest first.
  const byTopic = new Map<string, typeof posts>();
  for (const post of posts) {
    const key = postTopic(post).theme.key;
    byTopic.set(key, [...(byTopic.get(key) ?? []), post]);
  }
  const queues = [...byTopic.values()].sort((a, b) => (a[0].date < b[0].date ? 1 : -1));
  const rotated: typeof posts = [];
  for (let i = 0; rotated.length < posts.length; i++) {
    for (const q of queues) if (q[i]) rotated.push(q[i]);
  }
  const items = rotated.map((post) => ({ slug: post.slug, topic: postTopic(post).theme.key, card: <BlogCard post={post} /> }));
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
