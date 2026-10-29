"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { HomeLink } from "@/components/HomeLink";
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

function DesktopGroup({
  group,
  open,
  onOpen,
  onClose,
  onCloseNow,
}: {
  group: NavGroup;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  onCloseNow: () => void;
}) {
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

  const wide = group.columns.length > 1;

  return (
    <div
      // Full navbar height, so the pointer never leaves the hover area on its way to the panel.
      // Two-column panels position against the navbar instead, so they always fit on screen.
      className={cn("flex items-center self-stretch", !wide && "relative")}
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onFocus={onOpen}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) onCloseNow();
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") onCloseNow();
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
        <div
          className={cn(
            "absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2",
            wide ? "w-[min(42rem,calc(100vw-2rem))]" : "w-80"
          )}
        >
          <div className="rounded-2xl border border-border bg-white p-4 shadow-soft-lg">
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
                        onClick={onCloseNow}
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

// Hovering away closes the menu after a short pause, so a pointer moving diagonally
// from a trigger into its panel does not lose it. Only one menu is open at a time.
function DesktopNav() {
  const [openLabel, setOpenLabel] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  const open = (label: string) => {
    clearTimeout(closeTimer.current);
    setOpenLabel(label);
  };
  const close = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenLabel(null), 200);
  };
  const closeNow = () => {
    clearTimeout(closeTimer.current);
    setOpenLabel(null);
  };

  return (
    <div className="hidden items-center justify-center gap-1 self-stretch lg:gap-2 md:flex">
      {navGroups.map((g) => (
        <DesktopGroup
          key={g.href}
          group={g}
          open={openLabel === g.label}
          onOpen={() => open(g.label)}
          onClose={close}
          onCloseNow={closeNow}
        />
      ))}
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    menuRef.current?.querySelector<HTMLElement>("button")?.focus();
    return () => previous?.focus();
  }, [open]);

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
          "relative mx-auto grid h-16 grid-cols-[auto_1fr_auto] items-center gap-4 transition-all duration-300 ease-out md:h-[4.75rem]",
          scrolled
            ? "max-w-6xl rounded-full border border-border/70 bg-white/80 px-5 shadow-soft-lg backdrop-blur-xl sm:px-6 2xl:max-w-[84rem]"
            : "container-page border border-transparent bg-transparent"
        )}
      >
        <HomeLink className="inline-flex items-center rounded-lg">
          {/* Pre-sized WebP logo; skips the image optimizer on purpose. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo1.webp"
            alt={site.name}
            width={132}
            height={32}
            decoding="async"
            className="h-8 w-auto"
          />
        </HomeLink>

        <DesktopNav />

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

      {/* Mount only while open so hidden links cannot receive keyboard focus. */}
      {open && (
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
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          onKeyDown={(event) => {
            if (event.key === "Escape") { setOpen(false); return; }
            if (event.key !== "Tab") return;
            const items = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')).filter(item => item.getClientRects().length > 0);
            const first = items[0];
            const last = items[items.length - 1];
            if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
            if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
          }}
          className={cn(
            "absolute right-0 top-0 flex h-full w-full flex-col bg-white shadow-2xl transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* header */}
          <div className="flex items-center justify-between border-b border-border/70 px-5 py-4">
            <HomeLink onClick={() => setOpen(false)} className="inline-flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo1.webp"
                alt={site.name}
                width={132}
                height={32}
                decoding="async"
                className="h-8 w-auto"
              />
            </HomeLink>
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
      )}
    </>
  );
}
