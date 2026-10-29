"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps, MouseEvent } from "react";

// Links to the homepage. On the homepage itself it scrolls back to the top
// instead, because navigating to the page you're on doesn't move the viewport.
export function HomeLink({ onClick, ...props }: Omit<ComponentProps<typeof Link>, "href">) {
  const pathname = usePathname();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (pathname !== "/" || event.defaultPrevented) return;

    event.preventDefault();
    if (window.location.hash) window.history.replaceState(null, "", "/");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Wait a frame: closing the mobile menu re-enables page scrolling, which would
    // otherwise cut a smooth scroll short.
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));
    // A mouse click shouldn't leave the keyboard focus ring on the logo;
    // keyboard activation (detail 0) keeps focus where it is.
    if (event.detail > 0) event.currentTarget.blur();
  };

  return <Link {...props} href="/" onClick={handleClick} />;
}
