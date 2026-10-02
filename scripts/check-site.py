"""Crawl a running production build: python scripts/check-site.py [base URL]."""
import concurrent.futures
import json
import re
import sys
import urllib.request
import urllib.error
import urllib.parse
import xml.etree.ElementTree as ET
from html.parser import HTMLParser

BASE = (sys.argv[1] if len(sys.argv) > 1 else "http://localhost:3000").rstrip("/")
PRODUCTION = "https://www.burkyflow.com"

def fetch(path):
    try:
        with urllib.request.urlopen(BASE + path, timeout=30) as response:
            return response.status, response.read().decode("utf-8", errors="replace"), response.headers.get_content_type()
    except urllib.error.HTTPError as error:
        return error.code, str(error), ""
    except Exception as error:
        return 0, str(error), ""

class Page(HTMLParser):
    def __init__(self, html):
        super().__init__()
        self.links=[]; self.assets=[]; self.ids=set(); self.headings=[]; self.errors=[]
        self.canonical=None; self.description=None; self.robots=""; self.schemas=[]
        self.script=False; self.buffer=""; self.text=[]; self.in_script=False
        self.feed(html)
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if a.get("id"): self.ids.add(a["id"])
        if re.fullmatch(r"h[1-6]",tag): self.headings.append(int(tag[1]))
        if tag == "a": self.links.append(a.get("href", ""))
        if tag == "img":
            if "alt" not in a: self.errors.append("image missing alt attribute")
            if a.get("src"): self.assets.append(a["src"])
        if tag == "form" and a.get("action", "") in ("", "#"): self.errors.append("form has no functional destination")
        if tag == "link" and a.get("rel") == "canonical": self.canonical=a.get("href")
        if tag == "meta" and a.get("name") == "description": self.description=a.get("content")
        if tag == "meta" and a.get("name") == "robots": self.robots=a.get("content", "")
        if tag == "script":
            self.in_script=True
            if a.get("type") == "application/ld+json": self.script=True; self.buffer=""
    def handle_data(self, data):
        if self.script: self.buffer+=data
        if not self.in_script: self.text.append(data)
    def handle_endtag(self, tag):
        if tag == "script":
            if self.script:
                try: self.schemas.append(json.loads(self.buffer))
                except Exception: self.errors.append("invalid JSON-LD")
            self.script=False; self.in_script=False

def internal(href, current):
    url=urllib.parse.urlsplit(urllib.parse.urljoin(BASE+current,href))
    if url.netloc not in (urllib.parse.urlsplit(BASE).netloc,"burkyflow.com","www.burkyflow.com"): return None
    return url.path or "/", url.fragment, url.query

def main():
    status,xml,_=fetch("/sitemap.xml")
    if status != 200: raise SystemExit("Sitemap unavailable: "+xml)
    paths={urllib.parse.urlsplit(n.text).path or "/" for n in ET.fromstring(xml).iter("{http://www.sitemaps.org/schemas/sitemap/0.9}loc")}
    errors=[]; pages={}; assets=set(); anchors=[]; external=set()
    paid={f"/for/{industry}" for industry in ("home-services", "healthcare", "real-estate", "automotive", "professional-firms")}
    aliases={f"/lp/{city}/{niche}" for niche,city in (("hvac","houston"),("plumbing","san-antonio"),("real-estate","charleston"),("dental","greenville"),("roofing","houston"))}
    pending=paths | paid | aliases
    with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
        while pending:
            batch=sorted(pending); pending=set()
            for path,result in zip(batch,pool.map(fetch,batch)):
                status,html,kind=result
                if status != 200: errors.append(f"{path}: HTTP failure {status}: {html[:100]}"); pages[path]=None; continue
                if kind != "text/html": pages[path]=None; continue
                page=Page(html); pages[path]=page
                if path == "/":
                    title=re.search(r"<title>(.*?)</title>",html,re.S)
                    if not title or not 50 <= len(title.group(1).replace("&amp;", "&")) <= 60: errors.append("/: homepage title must be 50-60 characters")
                    if re.search(r'<img\b[^>]*\balt=""',html): errors.append("/: use CSS for decorative artwork; content images need descriptions")
                errors.extend(f"{path}: {e}" for e in page.errors)
                if page.headings.count(1) != 1: errors.append(f"{path}: expected one H1")
                if not page.canonical: errors.append(f"{path}: missing canonical")
                if not page.description: errors.append(f"{path}: missing description")
                if path in paths and page.canonical.rstrip("/") != (PRODUCTION+path).rstrip("/"): errors.append(f"{path}: canonical mismatch {page.canonical}")
                if path in paths and "noindex" in page.robots: errors.append(f"{path}: sitemap contains noindex page")
                if not page.schemas: errors.append(f"{path}: missing JSON-LD")
                for prior,level in zip(page.headings,page.headings[1:]):
                    if level > prior+1: errors.append(f"{path}: skipped heading H{prior} -> H{level}")
                if re.search(r'\b(TODO|TBD|lorem ipsum|placeholder review)\b',' '.join(page.text),re.I): errors.append(f"{path}: visible draft content")
                for href in page.links:
                    if href in ("", "#"): errors.append(f"{path}: empty link"); continue
                    local=internal(href,path)
                    if local:
                        target,fragment,query=local
                        if fragment: anchors.append((path,target,urllib.parse.unquote(fragment)))
                        if target not in pages: pending.add(target)
                    elif href.startswith("http"): external.add(href)
                for src in page.assets:
                    local=internal(src,path)
                    if local: assets.add(local[0]+("?"+local[2] if local[2] else ""))
            pending.difference_update(pages)
        for src,result in zip(sorted(assets),pool.map(fetch,sorted(assets))):
            if result[0] != 200: errors.append(f"asset {src}: unavailable")
    for source,target,fragment in anchors:
        if pages.get(target) and fragment not in pages[target].ids: errors.append(f"{source}: broken anchor {target}#{fragment}")
    for path in paid | aliases:
        if pages.get(path) and "noindex" not in pages[path].robots: errors.append(f"{path}: paid page missing noindex")
    unknown=fetch("/services/not-a-real-service")[0]
    if unknown != 404: errors.append("unknown route does not return 404")
    print(json.dumps({"pages":len(pages),"sitemap_pages":len(paths),"assets":len(assets),"anchor_links":len(anchors),"external_links":sorted(external),"errors":errors},indent=2))
    return bool(errors)

if __name__ == "__main__": sys.exit(main())
