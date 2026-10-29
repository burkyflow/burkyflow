import type { ReactNode } from "react";

// Colorful page header shared by the index pages (blog, services, industries,
// case studies, bundles): soft peach and blue blobs over a near-white band.
export function PageHeader({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-[#fbfbfe]">
      <div aria-hidden className="pointer-events-none absolute -left-32 -top-32 size-[28rem] rounded-full bg-accent-soft/40 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-24 top-6 size-[22rem] rounded-full bg-brand/15 blur-3xl" />
      <div aria-hidden className="problem-dot-grid pointer-events-none absolute inset-y-0 left-0 w-1/3" />

      <div className="container-page relative mx-auto max-w-3xl py-16 text-center md:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">{lead}</p>
        {children}
      </div>
    </section>
  );
}
