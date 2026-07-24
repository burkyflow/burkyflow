import Script from "next/script";
import { site } from "@/lib/site";

// GoHighLevel booking widget. `form_embed.js` finds the iframe by its id and
// resizes it to fit the content, so the id must match the embed code exactly.
// min-height prevents the iframe collapsing to 0 before the script runs.
export function BookingWidget({ className = "" }: { className?: string }) {
  return (
    <>
      <iframe
        src={site.booking.src}
        id={site.booking.id}
        title={`Book a call with ${site.name}`}
        scrolling="no"
        className={`w-full ${className}`}
        style={{ border: "none", overflow: "hidden", minHeight: "700px" }}
      />
      <Script src={site.booking.script} strategy="afterInteractive" />
    </>
  );
}
