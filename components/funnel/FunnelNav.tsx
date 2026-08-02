"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { site } from "@/lib/site";

// Small inline US flag (emoji flags render as "US" text on Windows).
function FlagUS({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 14" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="20" height="14" fill="#fff" />
      <g fill="#b22234">
        <rect width="20" height="1.08" y="0" />
        <rect width="20" height="1.08" y="2.15" />
        <rect width="20" height="1.08" y="4.31" />
        <rect width="20" height="1.08" y="6.46" />
        <rect width="20" height="1.08" y="8.62" />
        <rect width="20" height="1.08" y="10.77" />
        <rect width="20" height="1.08" y="12.92" />
      </g>
      <rect width="8" height="7.54" fill="#3c3b6e" />
      <g fill="#fff">
        <circle cx="1.3" cy="1.2" r="0.32" />
        <circle cx="3" cy="1.2" r="0.32" />
        <circle cx="4.7" cy="1.2" r="0.32" />
        <circle cx="6.4" cy="1.2" r="0.32" />
        <circle cx="2.1" cy="2.5" r="0.32" />
        <circle cx="3.8" cy="2.5" r="0.32" />
        <circle cx="5.5" cy="2.5" r="0.32" />
        <circle cx="1.3" cy="3.8" r="0.32" />
        <circle cx="3" cy="3.8" r="0.32" />
        <circle cx="4.7" cy="3.8" r="0.32" />
        <circle cx="6.4" cy="3.8" r="0.32" />
        <circle cx="2.1" cy="5.1" r="0.32" />
        <circle cx="3.8" cy="5.1" r="0.32" />
        <circle cx="5.5" cy="5.1" r="0.32" />
      </g>
    </svg>
  );
}

// Anchor links to the funnel's own sections (standalone, no leak off-page).
const LINKS = [
  { label: "Home", href: "#top" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Benefits", href: "#benefits" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#faq" },
];

export function FunnelNav() {
  // Transparent over the dark hero, solid once the user scrolls past it.
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-white/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-page relative flex h-16 items-center justify-between">
        {/* logo, same asset, rendered white while transparent over the dark hero */}
        <Link href="#top" className="inline-flex items-center">
          <Image
            src="/images/logo1.png"
            alt={site.name}
            width={3136}
            height={760}
            priority
            className={`h-7 w-auto transition duration-300 ${scrolled ? "" : "brightness-0 invert"}`}
          />
        </Link>

        {/* centered nav links */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled ? "text-foreground/70 hover:text-foreground" : "text-white/80 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* right: USA tag + primary button */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            className={`hidden items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors sm:inline-flex ${
              scrolled
                ? "border-border text-foreground/70 hover:bg-surface"
                : "border-white/20 text-white/85 hover:bg-white/10"
            }`}
          >
            <FlagUS className="h-3 w-[1.1rem] shrink-0 rounded-[2px] ring-1 ring-black/5" />
            USA
            <ChevronDown className="size-3.5 opacity-70" />
          </button>

          <a
            href="#book"
            className="inline-flex items-center gap-2 rounded-full bg-brand-cta px-5 py-2.5 text-sm font-semibold text-brand-cta-fg shadow-soft transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-brand-cta-hover hover:shadow-soft-lg active:translate-y-0"
          >
            Book Free Demo
            <ArrowRight className="size-4" />
          </a>
        </div>
      </nav>
    </header>
  );
}
