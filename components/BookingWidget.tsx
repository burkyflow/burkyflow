import Script from "next/script";
import { site } from "@/lib/site";

// GoHighLevel booking widget. `form_embed.js` resizes the iframe to fit the
// content when it fires, its inline height then wins over the classes below.
// When it doesn't fire (unreliable cross-domain), the fixed heights are tall
// enough to show the whole form (incl. the Continue button) with no scrollbar.
// Mobile stacks the form, so it needs more height than the desktop two-column.
export function BookingWidget({ className = "" }: { className?: string }) {
  return (
    <>
      <iframe
        src={site.booking.src}
        id={site.booking.id}
        title={`Book a call with ${site.name}`}
        scrolling="no"
        className={`h-[1180px] w-full sm:h-[940px] ${className}`}
        style={{ border: "none" }}
      />
      <Script src={site.booking.script} strategy="afterInteractive" />
    </>
  );
}
