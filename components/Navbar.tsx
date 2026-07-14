"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { services } from "@/content/services";
import { branches } from "@/content/catalogue";
import { industries } from "@/content/industries";
import { caseStudies } from "@/content/case-studies";
import { wedges } from "@/content/wedges";
import { bundleGroups } from "@/content/catalogue";

type SubLink = { label: string; href: string; description?: string };
type NavGroup = { label: string; href: string; columns?: SubLink[][] };

const navGroups: NavGroup[] = [
  {
    label: "Services",
    href: "/services",
    columns: [
      [
        { label: "All services", href: "/services", description: "Index of every offer" },
        ...wedges.map((w) => ({
          label: `${w.letter} · ${w.shortName}`,
          href: `/wedges/${w.slug}`,
          description: w.tagline,
        })),
      ],
      [
        ...branches.map((b) => ({
          label: b.name,
          href: `/services/${b.slug}`,
          description: b.lead.split(".")[0] + ".",
        })),
        ...services.map((s) => ({
          label: s.name,
          href: `/services/${s.slug}`,
          description: s.eyebrow,
        })),
      ],
    ],
  },
  {
    label: "Bundles",
    href: "/bundles",
    columns: [
      [
        { label: "All bundles", href: "/bundles", description: "Every pre-configured combo" },
        ...bundleGroups[0].bundles.slice(0, 5).map((b) => ({
          label: b.name,
          href: `/bundles/${b.slug}`,
          description: b.tagline,
        })),
      ],
      [
        ...(bundleGroups[1]?.bundles ?? []).slice(0, 4).map((b) => ({
          label: b.name,
          href: `/bundles/${b.slug}`,
          description: b.tagline,
        })),
        ...(bundleGroups[2]?.bundles ?? []).slice(0, 2).map((b) => ({
          label: b.name,
          href: `/bundles/${b.slug}`,
          description: b.tagline,
        })),
      ],
    ],
  },
  {
    label: "Case Studies",
    href: "/case-studies",
    columns: [
      [
        { label: "All case studies", href: "/case-studies", description: "Every live deployment" },
        ...caseStudies.slice(0, Math.ceil(caseStudies.length / 2)).map((c) => ({
          label: c.client,
          href: `/case-studies/${c.slug}`,
          description: c.vertical,
        })),
      ],
      caseStudies.slice(Math.ceil(caseStudies.length / 2)).map((c) => ({
        label: c.client,
        href: `/case-studies/${c.slug}`,
        description: c.vertical,
      })),
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    columns: [
      [
        { label: "All industries", href: "/industries", description: "Every vertical we serve" },
        ...industries.map((i) => ({
          label: i.name,
          href: `/industries/${i.slug}`,
          description: i.lead.split(".")[0] + ".",
        })),
      ],
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function DesktopGroup({ group }: { group: NavGroup }) {
  const [open, setOpen] = useState(false);

  if (!group.columns) {
    return (
      <Link
        href={group.href}
        className="whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-foreground/75 transition-colors hover:text-foreground"
      >
        {group.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <Link
        href={group.href}
        className="inline-flex items-center gap-1 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-foreground/75 transition-colors hover:text-foreground"
      >
        {group.label}
        <ChevronDown className={cn("size-3.5 opacity-60 transition-transform", open && "rotate-180")} />
      </Link>

      {open && (
        <div className="absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 pt-2">
          <div
            className={cn(
              "rounded-2xl border border-border bg-white p-4 shadow-soft-lg",
              group.columns.length > 1 ? "min-w-[640px]" : "min-w-[320px]"
            )}
          >
            <div
              className={cn(
                "grid gap-x-4",
                group.columns.length > 1 ? "grid-cols-2" : "grid-cols-1"
              )}
            >
              {group.columns.map((col, ci) => (
                <ul key={ci} className="flex flex-col gap-1">
                  {col.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block rounded-xl px-3 py-2 transition-colors hover:bg-surface"
                      >
                        <span className="block text-sm font-semibold text-foreground">
                          {item.label}
                        </span>
                        {item.description && (
                          <span className="mt-0.5 block text-xs text-muted-foreground">
                            {item.description}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Disable background scrolling when mobile menu is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
    return;
  }, [open]);

  return (
    <>
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 ease-out",
        scrolled ? "px-3 pt-3 sm:px-4" : "px-0 pt-0"
      )}
    >
      <nav
        className={cn(
          "mx-auto grid h-16 grid-cols-[auto_1fr_auto] items-center gap-4 transition-all duration-300 ease-out md:h-[4.75rem]",
          scrolled
            ? "max-w-6xl rounded-full border border-border/70 bg-white/80 px-5 shadow-soft-lg backdrop-blur-xl sm:px-6"
            : "container-page max-w-7xl border border-transparent bg-transparent"
        )}
      >
        <Link href="/" className="inline-flex items-center">
          <Image
            src="/images/logo1.png"
            alt={site.name}
            width={3136}
            height={760}
            priority
            className="h-8 w-auto"
          />
        </Link>

        <div className="hidden items-center justify-center gap-1 lg:gap-2 md:flex">
          {navGroups.map((g) => (
            <DesktopGroup key={g.href} group={g} />
          ))}
        </div>

        <div className="flex items-center justify-end gap-3">
          <div className="hidden md:block">
            <Button asChild size="sm">
              <Link href={site.ctaHref}>
                {site.ctaLabel}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="-mr-5 inline-flex size-10 items-center justify-center rounded-md text-foreground hover:bg-surface md:hidden cursor-pointer"
          >
            <Menu className="size-6" />
          </button>
        </div>
      </nav>
    </header>

      {/* Mobile drawer — always mounted for smooth slide in/out */}
      <div
        className={cn("fixed inset-0 z-[60] md:hidden", open ? "pointer-events-auto" : "pointer-events-none")}
        aria-hidden={!open}
      >
        {/* backdrop */}
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-slate-950/50 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0"
          )}
        />

        {/* sliding panel */}
        <div
          className={cn(
            "absolute right-0 top-0 flex h-full w-full flex-col bg-white shadow-2xl transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* header */}
          <div className="flex items-center justify-between border-b border-border/70 px-5 py-4">
            <Link href="/" onClick={() => setOpen(false)} className="inline-flex items-center">
              <Image
                src="/images/logo1.png"
                alt={site.name}
                width={3136}
                height={760}
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="-mr-1 inline-flex size-10 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-surface hover:text-foreground cursor-pointer"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* scrollable nav */}
          <nav className="flex-1 overflow-y-auto px-3 py-4">
            <div className="flex flex-col gap-0.5">
              {navGroups.map((g) => {
                if (!g.columns) {
                  return (
                    <Link
                      key={g.href}
                      href={g.href}
                      onClick={() => setOpen(false)}
                      className="rounded-xl px-4 py-3 text-[15px] font-semibold text-foreground transition-colors hover:bg-surface"
                    >
                      {g.label}
                    </Link>
                  );
                }
                const expanded = mobileExpanded === g.href;
                return (
                  <div key={g.href}>
                    <button
                      type="button"
                      onClick={() => setMobileExpanded(expanded ? null : g.href)}
                      className={cn(
                        "flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-[15px] font-semibold transition-colors hover:bg-surface",
                        expanded ? "text-brand" : "text-foreground"
                      )}
                    >
                      {g.label}
                      <ChevronDown
                        className={cn("size-4 text-muted-foreground transition-transform duration-300", expanded && "rotate-180 text-brand")}
                      />
                    </button>
                    {/* smooth expand/collapse */}
                    <div
                      className={cn(
                        "grid transition-all duration-300 ease-out",
                        expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="ml-4 mt-0.5 flex flex-col gap-0.5 border-l border-border pl-3 pb-1">
                          {g.columns.flat().map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setOpen(false)}
                              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </nav>

          {/* footer CTA */}
          <div className="border-t border-border/70 p-4">
            <Button asChild className="w-full" size="lg">
              <Link href={site.ctaHref} onClick={() => setOpen(false)}>
                {site.ctaLabel}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
