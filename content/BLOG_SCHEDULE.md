# Blog publishing schedule

- Pre-written posts in `content/posts` and `content/blog` are dated on **Mondays and Fridays** only.
- **Wednesdays** belong to the n8n "Burky blog Automation", which pushes `content/posts/<slug>-<date>.mdx` dated the day it runs.
- Never date a repo post on a Wednesday, Saturday or Sunday, and never put two posts on the same date.
- A post dated after today stays out of the list, sitemap and feed until a build on or after its date. Builds run on each push to `main`, so the Monday or Friday post appears at the next deploy on or after that day.
- `npm run blog:schedule` lists the upcoming posts and fails if a future post falls on a Wednesday or weekend, or if two upcoming posts share a date. Run it before committing a new or re-dated post.
