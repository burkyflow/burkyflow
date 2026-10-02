"use client";

import { useState } from "react";
import { Workflow } from "lucide-react";

// Use a decorative workflow mark if optional artwork is unavailable.
export function WedgeCardImage({ src, alt }: { src?: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className="flex h-full min-h-[200px] w-full flex-col items-center justify-center gap-2 rounded-2xl bg-surface text-brand/50">
        <Workflow className="size-9" strokeWidth={1.5} />

      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      loading="lazy"
      decoding="async"
      width={640}
      height={400}
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className="h-full min-h-[200px] w-full rounded-2xl object-cover"
    />
  );
}
