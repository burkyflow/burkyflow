// On-brand product-style illustrations per service: small UI scenes that show
// what each service actually does. Colors come from the CSS tokens; icons are
// Lucide SVGs nested in the scene. No external assets.
import type { ReactNode } from "react";
import {
  Bell,
  CalendarCheck,
  Check,
  MessageSquare,
  PhoneCall,
  Receipt,
  Sparkles,
  Star,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
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
            <linearGradient id="svc-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="hsl(var(--brand))" />
              <stop offset="100%" stopColor="hsl(var(--brand))" stopOpacity="0.7" />
            </linearGradient>
            <filter id="svc-shadow" x="-20%" y="-20%" width="140%" height="150%">
              <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#0f172a" floodOpacity="0.08" />
            </filter>
          </defs>
          {scenes[variant] ?? scenes.default}
        </svg>
      </div>
    </div>
  );
}

const BRAND = "hsl(var(--brand))";
const ACCENT = "hsl(var(--accent))";
const GREEN = "#1f9d6b";
const INK = "hsl(var(--foreground))";
const MUTED = "hsl(var(--muted-foreground))";
const SURFACE = "hsl(var(--surface))";
const BORDER = "hsl(var(--border))";

function Panel({ x, y, w, h, r = 16 }: { x: number; y: number; w: number; h: number; r?: number }) {
  return (
    <rect x={x} y={y} width={w} height={h} rx={r} fill="white" stroke={BORDER} filter="url(#svc-shadow)" />
  );
}

function Text({
  x,
  y,
  size = 11,
  weight = 500,
  fill = INK,
  anchor,
  children,
}: {
  x: number;
  y: number;
  size?: number;
  weight?: number;
  fill?: string;
  anchor?: "middle" | "end";
  children: ReactNode;
}) {
  return (
    <text x={x} y={y} fontSize={size} fontWeight={weight} fill={fill} textAnchor={anchor}>
      {children}
    </text>
  );
}

// Round icon chip centered on (cx, cy).
function Chip({
  cx,
  cy,
  r = 13,
  icon: Icon,
  fill = "url(#svc-grad)",
  color = "white",
}: {
  cx: number;
  cy: number;
  r?: number;
  icon: LucideIcon;
  fill?: string;
  color?: string;
}) {
  const s = r * 1.05;
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={fill} />
      <Icon x={cx - s / 2} y={cy - s / 2} width={s} height={s} color={color} strokeWidth={2.25} />
    </g>
  );
}

function Pill({ x, y, w, label, color }: { x: number; y: number; w: number; label: string; color: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={18} rx={9} fill={color} fillOpacity={0.12} />
      <Text x={x + w / 2} y={y + 12.5} size={9.5} weight={600} fill={color} anchor="middle">
        {label}
      </Text>
    </g>
  );
}

const waveform = [10, 18, 28, 16, 34, 22, 40, 26, 14, 30, 20, 36, 24, 12, 28, 18, 32, 16, 24, 10, 20, 14];

const scenes: Record<string, JSX.Element> = {
  // AI Voice Receptionist: a live after-hours call that ends in a booked job.
  "ai-voice-receptionist": (
    <g>
      <Panel x={36} y={34} w={228} h={232} />
      <Chip cx={62} cy={62} icon={PhoneCall} />
      <Text x={84} y={59} size={12} weight={700}>Incoming call</Text>
      <Text x={84} y={74} size={9.5} fill={MUTED}>After hours · 9:42 PM</Text>
      <circle cx={212} cy={60} r={3.5} fill={GREEN} />
      <Text x={220} y={64} size={10} weight={600} fill={GREEN}>Live</Text>
      {waveform.map((h, i) => (
        <rect key={i} x={58 + i * 8.6} y={112 - h / 2} width={4} height={h} rx={2} fill={BRAND} opacity={0.35 + (i % 4) * 0.15} />
      ))}
      <rect x={52} y={140} width={176} height={30} rx={12} fill={BRAND} fillOpacity={0.09} />
      <Text x={64} y={159} size={10.5}>How can we help tonight?</Text>
      <rect x={92} y={180} width={156} height={30} rx={12} fill={SURFACE} />
      <Text x={104} y={199} size={10.5}>My AC stopped cooling.</Text>
      <Text x={52} y={240} size={9.5} fill={MUTED}>Qualified · Emergency · Houston</Text>

      <Panel x={282} y={42} w={96} h={60} r={14} />
      <Text x={296} y={63} size={9.5} fill={MUTED}>Answered on</Text>
      <Text x={296} y={86} size={17} weight={700} fill={BRAND}>1st ring</Text>

      <Panel x={226} y={170} w={152} h={84} r={14} />
      <Chip cx={250} cy={198} r={12} icon={Check} fill={GREEN} />
      <Text x={270} y={195} size={12} weight={700}>Job booked</Text>
      <Text x={270} y={210} size={9.5} fill={MUTED}>Tue · 9:00 AM</Text>
      <Pill x={240} y={224} w={124} label="AC repair · CRM synced" color={BRAND} />
    </g>
  ),

  // Database Reactivation: past customers texted, a reply, and a booking.
  "database-reactivation": (
    <g>
      <Panel x={28} y={36} w={152} h={228} />
      <Text x={44} y={62} size={12} weight={700}>Past customers</Text>
      <Text x={44} y={77} size={9.5} fill={MUTED}>Last visit 12+ months ago</Text>
      {[0, 1, 2, 3, 4].map((i) => {
        const y = 104 + i * 32;
        const won = i === 0 || i === 2;
        return (
          <g key={i}>
            <circle cx={52} cy={y} r={10} fill={i % 2 ? ACCENT : BRAND} fillOpacity={0.16} />
            <rect x={70} y={y - 7} width={60 - (i % 3) * 8} height={6} rx={3} fill={INK} opacity={0.18} />
            <rect x={70} y={y + 3} width={38} height={5} rx={2.5} fill={INK} opacity={0.08} />
            {won ? (
              <Chip cx={160} cy={y} r={8} icon={Check} fill={GREEN} />
            ) : (
              <circle cx={160} cy={y} r={7} fill="none" stroke={BORDER} strokeWidth={2} />
            )}
          </g>
        );
      })}

      <Chip cx={190} cy={150} r={12} icon={MessageSquare} />

      <Panel x={204} y={36} w={170} h={228} />
      <Text x={220} y={62} size={11.5} weight={700}>Maria G.</Text>
      <Text x={358} y={62} size={9} fill={MUTED} anchor="end">SMS</Text>
      <rect x={232} y={78} width={130} height={58} rx={12} fill={BRAND} />
      <Text x={244} y={97} size={10} fill="white">Hi Maria, time for your</Text>
      <Text x={244} y={111} size={10} fill="white">yearly AC tune-up?</Text>
      <Text x={244} y={125} size={10} fill="white">Reply YES to book.</Text>
      <rect x={216} y={146} width={104} height={28} rx={12} fill={SURFACE} />
      <Text x={228} y={164} size={10}>YES, Thursday works</Text>
      <rect x={216} y={190} width={146} height={52} rx={12} fill={GREEN} fillOpacity={0.09} stroke={GREEN} strokeOpacity={0.3} />
      <Chip cx={236} cy={216} r={10} icon={CalendarCheck} fill={GREEN} />
      <Text x={252} y={213} size={10.5} weight={700} fill={GREEN}>Booked · Thu 2 PM</Text>
      <Text x={252} y={228} size={9} fill={MUTED}>Added to your calendar</Text>
    </g>
  ),

  // CRM and Lead Systems: one pipeline with every lead and its source.
  "crm-lead-systems": (
    <g>
      <Panel x={24} y={30} w={352} h={240} />
      <Text x={44} y={56} size={12.5} weight={700}>Pipeline</Text>
      <Pill x={288} y={43} w={72} label="All sources" color={BRAND} />
      {[
        { x: 44, label: "New", color: BRAND, cards: [["R. Patel", "Call"], ["K. Brooks", "Web form"], ["D. Nguyen", "Ads"]] },
        { x: 154, label: "Qualified", color: ACCENT, cards: [["M. Garcia", "Call"], ["S. Kim", "Web form"]] },
        { x: 264, label: "Booked", color: GREEN, cards: [["T. Owens", "Thu 9 AM"], ["L. Chen", "Fri 1 PM"]] },
      ].map((col) => (
        <g key={col.label}>
          <rect x={col.x} y={70} width={92} height={20} rx={10} fill={col.color} fillOpacity={0.12} />
          <Text x={col.x + 12} y={84} size={10} weight={700} fill={col.color}>{col.label}</Text>
          {col.cards.map(([name, tag], i) => (
            <g key={name}>
              <rect x={col.x} y={100 + i * 54} width={92} height={44} rx={10} fill="white" stroke={BORDER} filter="url(#svc-shadow)" />
              <Text x={col.x + 10} y={118 + i * 54} size={10} weight={600}>{name}</Text>
              <Text x={col.x + 10} y={133 + i * 54} size={9} fill={MUTED}>{tag}</Text>
              {col.label === "Booked" && <Chip cx={col.x + 78} cy={122 + i * 54} r={7} icon={Check} fill={GREEN} />}
            </g>
          ))}
        </g>
      ))}
      <rect x={264} y={208} width={92} height={44} rx={10} fill="none" stroke={GREEN} strokeOpacity={0.5} strokeDasharray="4 4" />
      <path d="M246 176 C 256 176, 254 228, 262 228" fill="none" stroke={GREEN} strokeWidth={2} strokeDasharray="4 4" />
      <path d="M257 224 l6 4 -6 4" fill="none" stroke={GREEN} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </g>
  ),

  // Workflow Automation: one booking flows through CRM, reminders, and invoicing.
  "workflow-automation": (
    <g>
      <path d="M156 82 H244" stroke={BRAND} strokeWidth={2.5} strokeOpacity={0.45} />
      <path d="M312 110 V190" stroke={BRAND} strokeWidth={2.5} strokeOpacity={0.45} />
      <path d="M244 218 H156" stroke={BRAND} strokeWidth={2.5} strokeOpacity={0.45} />
      {[
        { x: 200, y: 82 },
        { x: 312, y: 150 },
        { x: 200, y: 218 },
      ].map((p) => (
        <Chip key={`${p.x}-${p.y}`} cx={p.x} cy={p.y} r={9} icon={Check} fill={GREEN} />
      ))}
      {[
        { x: 28, y: 54, icon: CalendarCheck, fill: "url(#svc-grad)", title: "New booking", sub: "From your website" },
        { x: 244, y: 54, icon: Users, fill: "url(#svc-grad)", title: "CRM updated", sub: "Contact and job saved" },
        { x: 244, y: 190, icon: Bell, fill: ACCENT, title: "Reminder sent", sub: "SMS, 24h before" },
        { x: 28, y: 190, icon: Receipt, fill: GREEN, title: "Invoice sent", sub: "After the job" },
      ].map((n) => (
        <g key={n.title}>
          <Panel x={n.x} y={n.y} w={128} h={56} r={14} />
          <Chip cx={n.x + 24} cy={n.y + 28} r={13} icon={n.icon} fill={n.fill} />
          <Text x={n.x + 44} y={n.y + 25} size={10.5} weight={700}>{n.title}</Text>
          <Text x={n.x + 44} y={n.y + 40} size={8.5} fill={MUTED}>{n.sub}</Text>
        </g>
      ))}
      <Panel x={112} y={130} w={124} h={40} r={20} />
      <Chip cx={134} cy={150} r={11} icon={Workflow} />
      <Text x={152} y={154} size={10} weight={700}>Runs on its own</Text>
    </g>
  ),

  // Answer Engine Optimization: an AI assistant recommending your business.
  "answer-engine-optimization": (
    <g>
      <Panel x={30} y={28} w={340} h={244} />
      <rect x={156} y={46} width={196} height={30} rx={14} fill={SURFACE} />
      <Text x={170} y={65} size={10.5}>Best HVAC company near me?</Text>
      <Chip cx={60} cy={102} r={13} icon={Sparkles} />
      <Text x={82} y={106} size={11} weight={700}>Top-rated options nearby</Text>
      <rect x={50} y={124} width={300} height={36} rx={11} fill={BRAND} fillOpacity={0.08} stroke={BRAND} strokeOpacity={0.35} />
      <Text x={64} y={146} size={11} weight={700} fill={BRAND}>1. Your Business</Text>
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} x={168 + i * 12} y={136} width={10} height={10} color="#f5a524" fill="#f5a524" />
      ))}
      <Pill x={290} y={133} w={48} label="Cited" color={GREEN} />
      {[0, 1].map((i) => (
        <g key={i}>
          <rect x={50} y={170 + i * 44} width={300} height={36} rx={11} fill={SURFACE} />
          <Text x={64} y={192 + i * 44} size={11} weight={600} fill={MUTED}>{i + 2}.</Text>
          <rect x={80} y={184 + i * 44} width={110 - i * 24} height={7} rx={3.5} fill={INK} opacity={0.14} />
        </g>
      ))}
      <Text x={50} y={260} size={9} fill={MUTED}>Sources: yourbusiness.com · reviews · local listings</Text>
    </g>
  ),

  // Done For You: a weekly report from a system someone else runs.
  "done-for-you": (
    <g>
      <Panel x={26} y={30} w={348} h={240} />
      <Text x={46} y={56} size={12.5} weight={700}>Weekly report</Text>
      <Text x={46} y={71} size={9.5} fill={MUTED}>Managed by your BurkyFlow team</Text>
      <circle cx={258} cy={55} r={3.5} fill={GREEN} />
      <Text x={266} y={59} size={9.5} weight={600} fill={GREEN}>All systems running</Text>
      {[
        { x: 46, label: "Calls answered", color: BRAND, d: "M0 22 C 12 18, 18 24, 30 14 S 52 12, 76 4" },
        { x: 156, label: "Jobs booked", color: GREEN, d: "M0 20 C 14 22, 22 12, 36 14 S 58 6, 76 2" },
        { x: 266, label: "Follow-ups sent", color: ACCENT, d: "M0 18 C 10 22, 24 10, 38 16 S 60 8, 76 6" },
      ].map((k) => (
        <g key={k.label}>
          <rect x={k.x} y={88} width={92} height={66} rx={12} fill={SURFACE} />
          <Text x={k.x + 10} y={106} size={9} fill={MUTED}>{k.label}</Text>
          <path d={k.d} transform={`translate(${k.x + 8} 120)`} fill="none" stroke={k.color} strokeWidth={2.5} strokeLinecap="round" />
        </g>
      ))}
      {["Calls answered 24/7", "CRM kept up to date", "Reminders and follow-ups sent"].map((label, i) => (
        <g key={label}>
          <Chip cx={56} cy={186 + i * 26} r={8} icon={Check} fill={GREEN} />
          <Text x={72} y={190 + i * 26} size={10}>{label}</Text>
        </g>
      ))}
      {[30, 42, 36, 52, 48, 64].map((h, i) => (
        <rect key={i} x={262 + i * 16} y={246 - h} width={10} height={h} rx={3} fill={i === 5 ? ACCENT : BRAND} opacity={i === 5 ? 1 : 0.35 + i * 0.08} />
      ))}
    </g>
  ),

  default: (
    <g>
      <Panel x={60} y={60} w={280} h={180} />
      <Chip cx={92} cy={92} r={14} icon={Workflow} />
      <rect x={116} y={86} width={120} height={8} rx={4} fill={INK} opacity={0.16} />
      <rect x={84} y={124} width={110} height={90} rx={12} fill={SURFACE} />
      <rect x={206} y={124} width={110} height={40} rx={12} fill={SURFACE} />
      <rect x={206} y={174} width={110} height={40} rx={12} fill={SURFACE} />
    </g>
  ),
};
