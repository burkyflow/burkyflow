import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Post } from "@/content/blog";
import { BlogCard } from "@/components/BlogCard";
import { cn } from "@/lib/utils";

// "From the blog" strip for service and industry pages: links readers (and crawlers) to related posts.
export function RelatedPosts({ items, heading, className }: { items: Post[]; heading: string; className?: string }) {
  if (items.length === 0) return null;
  return (
    <section className={cn("section", className)}>
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">From the blog</p>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">{heading}</h2>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-1 text-sm font-semibold text-brand">
            All posts
            <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
