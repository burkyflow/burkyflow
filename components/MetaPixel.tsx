"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { site } from "@/lib/site";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

// The base pixel fires PageView on the first load. Next.js route changes are
// client-side (no reload), so this re-fires PageView on every subsequent
// navigation. Skips the first render to avoid double-counting the landing view.
export function MetaPixel() {
  const pathname = usePathname();
  const first = useRef(true);
  const metaPixelOptions = site.metaPixelTestEventCode
    ? { test_event_code: site.metaPixelTestEventCode }
    : undefined;

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (metaPixelOptions) {
      window.fbq?.("track", "PageView", {}, metaPixelOptions);
      return;
    }
    window.fbq?.("track", "PageView");
  }, [pathname]);

  return null;
}
