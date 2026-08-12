// Blog posts are Markdown files in content/blog/*.md, so they can be published
// by dropping a new .md file into that folder (e.g. via an n8n GitHub commit).
// Each file has YAML frontmatter + a Markdown body. See the example posts.
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO (YYYY-MM-DD)
  readMinutes: number;
  html: string; // rendered Markdown body
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function loadPosts(): Post[] {
  let files: string[] = [];
  try {
    files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));
  } catch {
    return []; // folder may not exist yet
  }

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
      const { data, content } = matter(raw);

      const slug = String(data.slug || file.replace(/\.mdx?$/, "")).trim();
      const title = String(data.title || slug);
      // Accept `excerpt` or `metaDescription` (n8n uses metaDescription).
      const excerpt = String(data.excerpt || data.metaDescription || "");
      const date = String(data.date || "").slice(0, 10) || "1970-01-01";
      const words = content.trim().split(/\s+/).filter(Boolean).length;
      const readMinutes = Number(data.readMinutes) || Math.max(1, Math.round(words / 200));
      const html = marked.parse(content, { async: false }) as string;

      return { slug, title, excerpt, date, readMinutes, html };
    })
    // newest first
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export const posts: Post[] = loadPosts();

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
