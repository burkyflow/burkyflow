// Blog posts are Markdown files (.md or .mdx) in content/blog/ or content/posts/,
// so they can be published by dropping a new file into either folder (e.g. via an
// n8n GitHub commit). Each file has YAML frontmatter + a Markdown body.
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { Marked } from "marked";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO (YYYY-MM-DD)
  modified: string;
  readMinutes: number;
  tags: string[]; // free-form front matter tags, used for the card's topic and cover
  html: string; // rendered Markdown body
};

const BLOG_DIRS = ["blog", "posts"].map((dir) => path.join(process.cwd(), "content", dir));

const markdown = new Marked();

// The page already renders the title as the only <h1>, so body headings start at
// <h2> without skipping levels, whatever level the source file starts at.
function renderBody(body: string) {
  const tokens = markdown.lexer(body);
  let top = 6;
  markdown.walkTokens(tokens, (t) => {
    if (t.type === "heading") top = Math.min(top, t.depth);
  });
  markdown.walkTokens(tokens, (t) => {
    if (t.type === "heading") t.depth = Math.min(6, t.depth + 2 - top);
  });
  return markdown.parser(tokens);
}

function listFiles(dir: string) {
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
      .map((f) => path.join(dir, f));
  } catch {
    return []; // folder may not exist yet
  }
}

// Front matter dates arrive as strings ("2026-10-20") or, when written unquoted with a
// time ("2026-10-22T00:00:00.000-04:00"), as Date objects. Normalize both to YYYY-MM-DD.
function isoDay(value: unknown, fallback: string) {
  if (value instanceof Date && !Number.isNaN(value.getTime())) return value.toISOString().slice(0, 10);
  const text = String(value ?? "").trim();
  return /^\d{4}-\d{2}-\d{2}/.test(text) ? text.slice(0, 10) : fallback;
}

function loadPosts(): Post[] {
  const bySlug = new Map<string, Post>();

  for (const file of BLOG_DIRS.flatMap(listFiles)) {
    const raw = fs.readFileSync(file, "utf8");
    const { data, content } = matter(raw);

    const slug = String(data.slug || path.basename(file).replace(/\.mdx?$/, "")).trim();
    const title = String(data.title || slug);
    // Accept `excerpt`, `metaDescription`, or `description`, whichever the publisher uses.
    const excerpt = String(data.excerpt || data.metaDescription || data.description || "");
    const date = isoDay(data.date, "1970-01-01");
    const modified = isoDay(data.updated, date);
    const words = content.trim().split(/\s+/).filter(Boolean).length;
    const readMinutes = Number(data.readMinutes) || Math.max(1, Math.round(words / 200));

    const body = content
      // Drop a leading "# Title" that repeats the page heading.
      .replace(/^\s*#\s+(.+)\n/, (line, heading: string) => (heading.trim() === title.trim() ? "" : line))
      // MDX-style JSX attributes in raw HTML blocks; browsers only understand `class`.
      .replace(/\bclassName=/g, "class=");
    const html = renderBody(body);

    const tags = Array.isArray(data.tags) ? data.tags.map((t: unknown) => String(t).trim()).filter(Boolean) : [];

    const post = { slug, title, excerpt, date, modified, readMinutes, tags, html };
    const existing = bySlug.get(slug);
    if (!existing || existing.modified < post.modified) bySlug.set(slug, post);
  }

  // newest first
  return [...bySlug.values()].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export const posts: Post[] = loadPosts();

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
