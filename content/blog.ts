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

function loadPosts(): Post[] {
  const bySlug = new Map<string, Post>();

  for (const file of BLOG_DIRS.flatMap(listFiles)) {
    const raw = fs.readFileSync(file, "utf8");
    const { data, content } = matter(raw);

    const slug = String(data.slug || path.basename(file).replace(/\.mdx?$/, "")).trim();
    const title = String(data.title || slug);
    // Accept `excerpt`, `metaDescription`, or `description`, whichever the publisher uses.
    const excerpt = String(data.excerpt || data.metaDescription || data.description || "");
    const date = String(data.date || "").slice(0, 10) || "1970-01-01";
    const modified = String(data.updated || date).slice(0, 10);
    const words = content.trim().split(/\s+/).filter(Boolean).length;
    const readMinutes = Number(data.readMinutes) || Math.max(1, Math.round(words / 200));

    const body = content
      // Drop a leading "# Title" that repeats the page heading.
      .replace(/^\s*#\s+(.+)\n/, (line, heading: string) => (heading.trim() === title.trim() ? "" : line))
      // MDX-style JSX attributes in raw HTML blocks; browsers only understand `class`.
      .replace(/\bclassName=/g, "class=");
    const html = renderBody(body);

    const post = { slug, title, excerpt, date, modified, readMinutes, html };
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
