import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
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
          <p className="mt-8 text-sm text-muted-foreground">
            <time dateTime={post.date}>{fmt(post.date)}</time> &middot; {post.readMinutes} min read &middot; By <Link href="/about" className="text-brand underline">BurkyFlow</Link>
            {post.modified !== post.date && <> &middot; Updated <time dateTime={post.modified}>{fmt(post.modified)}</time></>}
          </p>
          <h1 className="mt-2 text-4xl font-semibold leading-tight sm:text-5xl">{post.title}</h1>
          <p className="mt-5 text-lg text-muted-foreground">{post.excerpt}</p>
          <div
            className="mt-8 text-lg leading-relaxed text-muted-foreground [&_a]:font-medium [&_a]:text-brand [&_a]:underline [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-foreground [&_li]:mt-1.5 [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:mt-4 [&_strong]:text-foreground [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </article>

    </>
  );
}
