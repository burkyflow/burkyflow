import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { BlogCard, postTopic } from "@/components/BlogCard";
import { photoSrc } from "@/content/photos";
import { cn } from "@/lib/utils";
import { posts, getPost } from "@/content/blog";
import { pageMetadata, articleLd, breadcrumbLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return pageMetadata({ title: "Not found", description: "", path: "/blog" });
  const meta = pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
  return { ...meta, openGraph: { ...meta.openGraph, type: "article", publishedTime: post.date, modifiedTime: post.modified, authors: [`${site.url}/about`] } };
}

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

export default async function BlogPost({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const { theme, photo } = postTopic(post);
  // Recommended reading: same topic first, then the newest others.
  const others = posts.filter((p) => p.slug !== post.slug);
  const related = [
    ...others.filter((p) => postTopic(p).theme.key === theme.key),
    ...others.filter((p) => postTopic(p).theme.key !== theme.key),
  ].slice(0, 3);

  return (
    <>
      <JsonLd data={[articleLd(post), breadcrumbLd([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: post.title, path: `/blog/${post.slug}` }])]} />
      <article className="section">
        <div className="container-page mx-auto max-w-2xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            All posts
          </Link>
        </div>
        <div className="container-page mx-auto mt-8 max-w-4xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-surface shadow-soft ring-1 ring-border/60">
            <Image
              src={photoSrc(photo)}
              alt={`Cover photo for ${post.title}`}
              fill
              priority
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="container-page mx-auto max-w-2xl">
          <p className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
            <span className={cn("rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white", theme.pill)}>
              {theme.label}
            </span>
            <span>
              <time dateTime={post.date}>{fmt(post.date)}</time> &middot; {post.readMinutes} min read &middot; By <Link href="/about" className="text-brand underline">BurkyFlow</Link>
              {post.modified !== post.date && <> &middot; Updated <time dateTime={post.modified}>{fmt(post.modified)}</time></>}
            </span>
          </p>
          <h1 className="mt-2 text-4xl font-semibold leading-tight sm:text-5xl">{post.title}</h1>
          <p className="mt-6 text-xl leading-relaxed text-foreground/70">{post.excerpt}</p>
          <div
            className="prose-post mt-10 border-t border-border/60 pt-10"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </article>

      {related.length > 0 && (
        <section className="section bg-surface">
          <div className="container-page">
            <h2 className="text-center text-3xl font-semibold sm:text-4xl">Recommended reading</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
