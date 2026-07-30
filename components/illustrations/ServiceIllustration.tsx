// Distinct, light, on-brand SVG illustrations per service.
// Uses the --brand token via currentColor where possible. No external assets.
import { cn } from "@/lib/utils";

type Props = { variant: string; className?: string; title?: string };

const frame =
  "h-full w-full overflow-hidden rounded-3xl bg-gradient-to-br from-surface to-white shadow-soft-lg ring-1 ring-border/60";

export function ServiceIllustration({ variant, className, title }: Props) {
  return (
    <div
      role="img"
      aria-label={title ?? variant}
      className={cn("relative aspect-[4/3] w-full", className)}
    >
      <div className={frame}>
        <svg viewBox="0 0 400 300" className="h-full w-full" aria-hidden>
          <defs>
            <linearGradient id="uz-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="hsl(var(--brand))" stopOpacity="0.9" />
              <stop offset="100%" stopColor="hsl(var(--brand))" stopOpacity="0.55" />
            </linearGradient>
          </defs>
          {scenes[variant] ?? scenes.default}
        </svg>
      </div>
    </div>
  );
}

const card = (x: number, y: number, w: number, h: number) => (
  <rect x={x} y={y} width={w} height={h} rx="14" fill="white" stroke="hsl(var(--border))" />
);
const bar = (x: number, y: number, w: number, opacity = 0.25) => (
  <rect x={x} y={y} width={w} height="8" rx="4" fill="hsl(var(--brand))" opacity={opacity} />
);

const scenes: Record<string, JSX.Element> = {
  // AI Voice Receptionist, phone with sound waves
  "ai-voice-receptionist": (
    <g>
      {card(60, 50, 200, 200)}
      <circle cx="160" cy="120" r="34" fill="url(#uz-grad)" />
      <path
        d="M150 110c0 14 8 22 22 22l-6 8c-3 4-9 4-13 1-9-7-16-16-21-26-2-4-1-9 3-12l8-5c3 9 7 12 7 12z"
        fill="white"
      />
      {bar(120, 178, 80, 0.3)}
      {bar(120, 196, 50, 0.18)}
      {/* sound waves */}
      <path d="M290 110a48 48 0 010 80" fill="none" stroke="hsl(var(--brand))" strokeWidth="6" strokeLinecap="round" opacity="0.7" />
      <path d="M310 90a80 80 0 010 120" fill="none" stroke="hsl(var(--brand))" strokeWidth="6" strokeLinecap="round" opacity="0.4" />
      <circle cx="270" cy="150" r="6" fill="hsl(var(--brand))" />
    </g>
  ),
  // Database Reactivation, stacked DB cylinders + spark
  "database-reactivation": (
    <g>
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(110 ${80 + i * 46})`}>
          <ellipse cx="60" cy="0" rx="60" ry="16" fill="white" stroke="hsl(var(--border))" />
          <path d="M0 0v22a60 16 0 00120 0V0" fill="hsl(var(--brand))" opacity={0.12 + i * 0.06} />
        </g>
      ))}
      <circle cx="280" cy="90" r="26" fill="url(#uz-grad)" />
      <path d="M282 76l-12 18h10l-4 14 14-20h-10z" fill="white" />
    </g>
  ),
  // CRM and Lead Systems, pipeline columns
  "crm-lead-systems": (
    <g>
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${70 + i * 100} 60)`}>
          {card(0, 0, 80, 180)}
          <rect x="0" y="0" width="80" height="34" rx="14" fill="hsl(var(--brand))" opacity={0.15} />
          {bar(14, 50, 52, 0.22)}
          {card(10, 70, 60, 36)}
          {card(10, 116, 60, 36)}
        </g>
      ))}
      <path d="M150 150h100" stroke="hsl(var(--brand))" strokeWidth="4" strokeDasharray="6 6" opacity="0.5" />
    </g>
  ),
  // Workflow Automation, connected nodes
  "workflow-automation": (
    <g>
      <path d="M100 90L200 60M200 60L300 110M200 60L180 200M180 200L290 200" stroke="hsl(var(--brand))" strokeWidth="3" opacity="0.4" fill="none" />
      {[
        [100, 90],
        [200, 60],
        [300, 110],
        [180, 200],
        [290, 200],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="26" fill="white" stroke="hsl(var(--border))" />
          <circle cx={x} cy={y} r="11" fill="url(#uz-grad)" />
        </g>
      ))}
    </g>
  ),
  // Answer Engine Optimization, search bar + AI sparkle results
  "answer-engine-optimization": (
    <g>
      {card(60, 70, 280, 46)}
      <circle cx="92" cy="93" r="11" fill="none" stroke="hsl(var(--brand))" strokeWidth="4" />
      <line x1="100" y1="101" x2="110" y2="111" stroke="hsl(var(--brand))" strokeWidth="4" strokeLinecap="round" />
      {bar(120, 89, 150, 0.25)}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(60 ${136 + i * 40})`}>
          {card(0, 0, 280, 30)}
          <path d="M22 15l-5 7 5-2 5 2-5-7z" fill="hsl(var(--brand))" opacity={0.8} />
          {bar(44, 11, 120 - i * 20, 0.2)}
        </g>
      ))}
    </g>
  ),
  // Done For You, dashboard + check
  "done-for-you": (
    <g>
      {card(56, 56, 288, 188)}
      <rect x="56" y="56" width="288" height="40" rx="14" fill="hsl(var(--brand))" opacity="0.1" />
      {bar(76, 72, 90, 0.3)}
      {card(76, 116, 120, 108)}
      {card(212, 116, 120, 50)}
      {card(212, 174, 120, 50)}
      <circle cx="300" cy="78" r="14" fill="url(#uz-grad)" />
      <path d="M294 78l4 4 8-9" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  ),
  default: (
    <g>
      {card(70, 70, 260, 160)}
      {bar(90, 96, 120, 0.3)}
      {card(90, 124, 110, 86)}
      {card(210, 124, 100, 40)}
      {card(210, 170, 100, 40)}
    </g>
  ),
};
