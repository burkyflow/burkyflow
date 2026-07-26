import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram, Facebook, Youtube } from "lucide-react";
import { site } from "@/lib/site";
import { services } from "@/content/services";
import { industries } from "@/content/industries";
import { CTABand } from "@/components/CTABand";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-brand/[0.12] via-accent-soft/[0.12] to-white">
      {/* Pre-footer CTA — sits on the shared gradient, flowing into the footer card */}
      <div className="mx-auto w-full max-w-[95rem] px-4 pb-14 pt-20 sm:px-6 sm:pb-16 sm:pt-24 lg:px-8">
        <CTABand />
      </div>

      <div className="mx-auto w-full max-w-[95rem] px-4 pb-8 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-border/60 bg-white/70 p-8 shadow-soft backdrop-blur-sm sm:p-10 lg:p-14">
          <div className="grid gap-12 lg:grid-cols-[1.25fr_2fr] lg:gap-16">
            {/* Brand + newsletter */}
            <div>
              <Link href="/" className="inline-block">
                <Image
                  src="/images/logo1.png"
                  alt={site.name}
                  width={3136}
                  height={760}
                  className="h-8 w-auto"
                />
              </Link>

              <p className="mt-6 text-sm font-medium text-foreground">
                Sign up for automation tips that book revenue.
              </p>
              <form className="mt-3 flex max-w-sm gap-2" action="#" method="post">
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="h-11 flex-1 rounded-full border border-border bg-white px-4 text-sm outline-none transition focus:border-brand focus:ring-2 focus:ring-ring"
                />
                <button
                  type="submit"
                  className="h-11 shrink-0 cursor-pointer rounded-full bg-brand-cta px-5 text-sm font-semibold text-brand-cta-fg shadow-soft transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-brand-cta-hover hover:shadow-soft-lg active:translate-y-0 active:scale-[0.98]"
                >
                  Submit
                </button>
              </form>
              <p className="mt-3 max-w-sm text-xs leading-relaxed text-muted-foreground">
                By subscribing you agree to our{" "}
                <Link href="/privacy" className="underline underline-offset-2 hover:text-foreground">
                  Privacy Policy
                </Link>{" "}
                and consent to receive updates from {site.name}.
              </p>

              <div className="mt-6 flex gap-3">
                <SocialLink href={site.social.linkedin} label="LinkedIn">
                  <Linkedin className="size-4" />
                </SocialLink>
                <SocialLink href={site.social.instagram} label="Instagram">
                  <Instagram className="size-4" />
                </SocialLink>
                <SocialLink href={site.social.facebook} label="Facebook">
                  <Facebook className="size-4" />
                </SocialLink>
                <SocialLink href={site.social.youtube} label="YouTube">
                  <Youtube className="size-4" />
                </SocialLink>
              </div>
            </div>

            {/* Link columns */}
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              <FooterColumn title="Services">
                {services.map((s) => (
                  <FooterLink key={s.slug} href={`/services/${s.slug}`}>
                    {s.name}
                  </FooterLink>
                ))}
              </FooterColumn>

              <FooterColumn title="Industries">
                {industries.map((i) => (
                  <FooterLink key={i.slug} href={`/industries/${i.slug}`}>
                    {i.name}
                  </FooterLink>
                ))}
              </FooterColumn>

              <FooterColumn title="Company">
                <FooterLink href="/about">About</FooterLink>
                <FooterLink href="/case-studies">Case Studies</FooterLink>
                <FooterLink href="/blog">Blog</FooterLink>
                <FooterLink href="/contact">Contact</FooterLink>
                <FooterLink href="/sitemap.xml">Sitemap</FooterLink>
              </FooterColumn>

              <FooterColumn title="Legal">
                <FooterLink href="/privacy">Privacy Policy</FooterLink>
                <FooterLink href="/terms">Terms &amp; Conditions</FooterLink>
              </FooterColumn>
            </div>
          </div>

          {/* SMS consent disclosure (A2P 10DLC compliance) */}
          <div className="mt-12 border-t border-border/60 pt-6">
            <p className="mx-auto max-w-4xl text-center text-xs leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">SMS Consent:</span> By providing your
              phone number to {site.legalName}, you agree to receive text messages including
              appointment confirmations, reminders, follow-ups, and replies to your enquiries.
              Message frequency varies. Message and data rates may apply. Reply STOP to opt out at
              any time, or HELP for help. See our{" "}
              <Link href="/privacy" className="underline underline-offset-2 hover:text-foreground">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/terms" className="underline underline-offset-2 hover:text-foreground">
                Terms
              </Link>
              .
            </p>
          </div>

          {/* Bottom bar */}
          <div className="mt-6 border-t border-border/60 pt-6 text-center text-sm text-muted-foreground">
            &copy; {year} {site.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-sm font-bold text-foreground">{title}</h4>
      <div className="mt-4 flex flex-col gap-3">{children}</div>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm text-muted-foreground transition-colors hover:text-brand"
    >
      {children}
    </Link>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex size-9 items-center justify-center rounded-full bg-white text-muted-foreground shadow-soft ring-1 ring-border/60 transition-all duration-200 hover:-translate-y-0.5 hover:text-brand hover:shadow-soft-lg"
    >
      {children}
    </a>
  );
}
