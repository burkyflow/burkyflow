"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

// Standalone ad-funnel routes (/for/*) hide the global site nav + footer so the
// page is a single-purpose, leak-free landing experience with its own chrome.
export function ChromeGate({
  navbar,
  footer,
  children,
}: {
  navbar: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}) {
  const pathname = usePathname() || "";
  const bare = pathname.startsWith("/for/");

  return (
    <>
      {!bare && navbar}
      <main>{children}</main>
      {!bare && footer}
    </>
  );
}
