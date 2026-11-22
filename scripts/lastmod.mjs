// Records when each page source file last changed, from git history, into
// content/lastmod.json. The sitemap reads that file, so Google gets a real
// "last modified" date per page instead of none.
//
// Run `npm run lastmod` before committing a release. It also runs before
// `next build`, but only rewrites the file when full git history is present
// (hosted builds often clone shallowly, and a shallow clone would date every
// file to the same commit, which is worse than a slightly stale date).
import { execSync } from "node:child_process";
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const OUT = "content/lastmod.json";
const MIN_HISTORY = 40; // commits; below this the clone is treated as shallow

const git = (args) => execSync(`git ${args}`, { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();

let history = 0;
try {
  history = Number(git("rev-list --count HEAD"));
} catch {
  /* no git */
}
if (history < MIN_HISTORY) {
  console.log(`lastmod: git history unavailable or shallow (${history} commits); keeping ${OUT}`);
  process.exit(0);
}

// Every file that can change what a page says.
const walk = (dir, keep) =>
  readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p, keep) : keep(p) ? [p] : [];
  });
const files = [
  ...walk("app", (p) => /\/page\.tsx$/.test(p)),
  ...walk("components", (p) => /\.tsx$/.test(p)),
  ...walk("content", (p) => /\.(ts|md|mdx)$/.test(p)),
];

let previous = {};
try {
  previous = JSON.parse(readFileSync(OUT, "utf8"));
} catch {
  /* first run */
}

const dates = {};
for (const f of files.sort()) {
  const iso = git(`log -1 --format=%cI -- "${f}"`);
  // Uncommitted edits to a tracked file count as "changed now".
  const dirty = git(`status --porcelain -- "${f}"`) !== "";
  dates[f] = dirty ? new Date().toISOString() : iso || previous[f] || new Date().toISOString();
}

writeFileSync(OUT, JSON.stringify(dates, null, 2) + "\n");
console.log(`lastmod: wrote ${Object.keys(dates).length} file dates to ${OUT}`);
