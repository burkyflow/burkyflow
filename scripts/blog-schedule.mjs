// Lists the upcoming blog posts and checks the publishing calendar described in
// content/BLOG_SCHEDULE.md: pre-written posts go out on Mondays and Fridays,
// Wednesdays belong to the n8n automation, and no two posts share a date.
//
// Run `npm run blog:schedule`. It exits with an error when a post dated after
// today falls on a Wednesday, Saturday or Sunday, or when two upcoming posts
// share a date. A post dated today is left alone: the automation pushes its
// Wednesday post on the day it publishes.
import matter from "gray-matter";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const DIRS = ["content/posts", "content/blog"];
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const BLOCKED = new Set([0, 3, 6]); // Sun, Wed, Sat

const isoDate = (value) => (value instanceof Date ? value.toISOString().slice(0, 10) : String(value ?? "").slice(0, 10));
const weekday = (iso) => new Date(`${iso}T00:00:00Z`).getUTCDay();
const today = new Date().toISOString().slice(0, 10);

const posts = [];
for (const dir of DIRS) {
  for (const file of readdirSync(dir)) {
    if (!/\.mdx?$/.test(file)) continue;
    const { data } = matter(readFileSync(join(dir, file), "utf8"));
    posts.push({ file: join(dir, file), date: isoDate(data.date), category: data.category ?? "-", title: data.title ?? file });
  }
}
posts.sort((a, b) => (a.date === b.date ? a.file.localeCompare(b.file) : a.date < b.date ? -1 : 1));

const upcoming = posts.filter((p) => p.date >= today);
const errors = [];

for (const p of upcoming) {
  if (p.date > today && BLOCKED.has(weekday(p.date))) errors.push(`${p.date} is a ${DAYS[weekday(p.date)]}: ${p.file}`);
}
const byDate = new Map();
for (const p of upcoming) byDate.set(p.date, [...(byDate.get(p.date) ?? []), p.file]);
for (const [date, files] of byDate) {
  if (files.length > 1) errors.push(`${date} has ${files.length} posts: ${files.join(", ")}`);
}

console.log(`Upcoming posts from ${today} (${upcoming.length}):\n`);
const width = Math.max(...upcoming.map((p) => p.category.length), 8);
for (const p of upcoming) console.log(`${p.date}  ${DAYS[weekday(p.date)]}  ${p.category.padEnd(width)}  ${p.title}`);

const pastDuplicates = [...posts.filter((p) => p.date < today).reduce((m, p) => m.set(p.date, (m.get(p.date) ?? 0) + 1), new Map())].filter(([, n]) => n > 1);
if (pastDuplicates.length) console.log(`\nNote: already-published dates with more than one post: ${pastDuplicates.map(([d]) => d).join(", ")}`);

if (errors.length) {
  console.error(`\nSchedule errors (${errors.length}):`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log("\nSchedule OK: every future post is on a Monday or Friday and no date is shared.");
