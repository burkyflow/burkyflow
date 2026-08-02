// Small inline US flag (emoji flags render as "US" text on Windows).
export function UsFlag({ className = "" }: { className?: string }) {
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
