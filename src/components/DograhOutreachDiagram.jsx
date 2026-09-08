import React from 'react';

const NH = 48;
const NR = 24;

// ── Pill node ──────────────────────────────────────────────────────────────────
function Pill({ x, y, w, fill, label, icon = '' }) {
  const lines = label.split('\n');
  return (
    <g>
      {/* Drop shadow */}
      <rect x={x + 2} y={y + 5} width={w} height={NH} rx={NR} fill="#00000060" />
      {/* Body */}
      <rect x={x} y={y} width={w} height={NH} rx={NR} fill={fill} />
      {/* Glass shine */}
      <rect x={x + 12} y={y + 5} width={w - 24} height={16} rx={10} fill="white" fillOpacity="0.14" />
      {/* Label lines */}
      {lines.map((t, i) => (
        <text
          key={i}
          x={x + w / 2}
          y={y + NH / 2 + (i - (lines.length - 1) / 2) * 14}
          textAnchor="middle"
          dominantBaseline="central"
          fill="white"
          fontSize={10.5}
          fontWeight="700"
          fontFamily="Inter, system-ui, sans-serif"
          letterSpacing="0.06em"
        >
          {t}
        </text>
      ))}
    </g>
  );
}

// ── Annotation box (below each node) ──────────────────────────────────────────
function Annotation({ cx, y, lines, accent }) {
  const pw = 200;
  const ph = lines.length * 16 + 12;
  const px = cx - pw / 2;
  return (
    <g>
      {/* Connector dot */}
      <circle cx={cx} cy={y - 1} r={3} fill={accent} />
      {/* Vertical dashed tick */}
      <line x1={cx} y1={y + 3} x2={cx} y2={y + 14} stroke={accent} strokeWidth={1.2} strokeDasharray="3 2" />
      {/* Box */}
      <rect
        x={px}
        y={y + 14}
        width={pw}
        height={ph}
        rx={9}
        fill="#141419"
        stroke={accent}
        strokeWidth={1}
        strokeOpacity="0.45"
      />
      {lines.map((t, i) => (
        <text
          key={i}
          x={cx}
          y={y + 14 + 10 + i * 16}
          textAnchor="middle"
          dominantBaseline="central"
          fill="#cbd5e1"
          fontSize={8.5}
          fontFamily="Inter, system-ui, sans-serif"
          letterSpacing="0.03em"
        >
          {t}
        </text>
      ))}
    </g>
  );
}

// ── Right-pointing arrow ───────────────────────────────────────────────────────
function ArrowRight({ x1, x2, y, label = '', color = '#64748b' }) {
  const mx = (x1 + x2) / 2;
  return (
    <g>
      <line x1={x1} y1={y} x2={x2 - 5} y2={y} stroke={color} strokeWidth={1.8} strokeDasharray="4 3" />
      <polygon
        points={`${x2},${y} ${x2 - 7},${y - 4} ${x2 - 7},${y + 4}`}
        fill={color}
      />
      {label && (
        <text
          x={mx}
          y={y - 8}
          textAnchor="middle"
          fill={color}
          fontSize={8}
          fontWeight="600"
          fontFamily="Inter, system-ui, sans-serif"
          letterSpacing="0.04em"
        >
          {label}
        </text>
      )}
    </g>
  );
}

// ── Left-pointing arrow ────────────────────────────────────────────────────────
function ArrowLeft({ x1, x2, y, label = '', color = '#64748b' }) {
  const mx = (x1 + x2) / 2;
  return (
    <g>
      <line x1={x1} y1={y} x2={x2 + 5} y2={y} stroke={color} strokeWidth={1.8} strokeDasharray="4 3" />
      <polygon
        points={`${x2},${y} ${x2 + 7},${y - 4} ${x2 + 7},${y + 4}`}
        fill={color}
      />
      {label && (
        <text
          x={mx}
          y={y - 8}
          textAnchor="middle"
          fill={color}
          fontSize={8}
          fontWeight="600"
          fontFamily="Inter, system-ui, sans-serif"
          letterSpacing="0.04em"
        >
          {label}
        </text>
      )}
    </g>
  );
}

// ── Downward connector curve ──────────────────────────────────────────────────
function DownCurve({ x, y1, y2, color = '#8b5cf6', label = '' }) {
  return (
    <g>
      <path
        d={`M ${x} ${y1} C ${x + 40} ${(y1 + y2) / 2}, ${x + 40} ${(y1 + y2) / 2}, ${x} ${y2}`}
        fill="none"
        stroke={color}
        strokeWidth={1.8}
        strokeDasharray="4 3"
      />
      <polygon
        points={`${x},${y2} ${x + 4},${y2 - 6} ${x - 4},${y2 - 6}`}
        fill={color}
      />
      {label && (
        <text
          x={x + 48}
          y={(y1 + y2) / 2}
          textAnchor="start"
          dominantBaseline="central"
          fill={color}
          fontSize={8}
          fontWeight="600"
          fontFamily="Inter, system-ui, sans-serif"
          letterSpacing="0.04em"
        >
          {label}
        </text>
      )}
    </g>
  );
}

// ── Upward closed-loop connector curve ────────────────────────────────────────
function LoopBackCurve({ x, y1, y2, color = '#10b981', label = '' }) {
  return (
    <g>
      <path
        d={`M ${x} ${y1} C ${x - 38} ${(y1 + y2) / 2}, ${x - 38} ${(y1 + y2) / 2}, ${x} ${y2}`}
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeDasharray="5 3"
      />
      <polygon
        points={`${x},${y2} ${x - 4},${y2 + 6} ${x + 4},${y2 + 6}`}
        fill={color}
      />
      {label && (
        <text
          x={x - 44}
          y={(y1 + y2) / 2}
          textAnchor="end"
          dominantBaseline="central"
          fill={color}
          fontSize={8}
          fontWeight="700"
          fontFamily="'Roboto Mono', monospace"
          letterSpacing="0.05em"
        >
          {label}
        </text>
      )}
    </g>
  );
}

// ── Step badge ────────────────────────────────────────────────────────────────
function Badge({ cx, y, n, color }) {
  return (
    <g>
      <circle cx={cx} cy={y} r={9} fill="#0d0d12" stroke={color} strokeWidth={1.4} />
      <text
        x={cx}
        y={y + 0.5}
        textAnchor="middle"
        dominantBaseline="central"
        fill={color}
        fontSize={7.5}
        fontWeight="800"
        fontFamily="'Roboto Mono', monospace"
      >
        {n}
      </text>
    </g>
  );
}

// ── Section header ────────────────────────────────────────────────────────────
function SectionHeader({ x, y, label, color }) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={340}
        height={18}
        rx={9}
        fill={color}
        fillOpacity="0.12"
        stroke={color}
        strokeWidth={0.8}
        strokeOpacity="0.4"
      />
      <text
        x={x + 10}
        y={y + 9}
        dominantBaseline="central"
        fill={color}
        fontSize={8}
        fontWeight="700"
        fontFamily="'Roboto Mono', monospace"
        letterSpacing="0.08em"
      >
        {label}
      </text>
    </g>
  );
}

export default function DograhOutreachDiagram() {
  const W = 870;
  const H = 430;

  // Layout coordinates
  const nw = 210;
  const xs = [56, 330, 604];
  const cxs = xs.map((x) => x + nw / 2);

  const R1 = 58;
  const mid1 = R1 + NH / 2;
  const ann1 = R1 + NH + 6;

  const R2 = 245;
  const mid2 = R2 + NH / 2;
  const ann2 = R2 + NH + 6;

  return (
    <div className="w-full overflow-x-auto bg-[#0d0d12] p-2 flex justify-center">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full max-w-[870px] select-none"
        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="dSheetsIn" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>
          <linearGradient id="dN8n" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#c2410c" />
          </linearGradient>
          <linearGradient id="dDograh" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#6d28d9" />
          </linearGradient>
          <linearGradient id="dCarrier" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
          <linearGradient id="dCall" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#be185d" />
          </linearGradient>
          <linearGradient id="dSheetsOut" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#0f766e" />
          </linearGradient>
        </defs>

        {/* ── Background Subtle Watermark ──────────────────────────────── */}
        <text
          x={W / 2}
          y={202}
          textAnchor="middle"
          fill="#ffffff"
          fillOpacity="0.03"
          fontSize={38}
          fontWeight="900"
          fontFamily="'Roboto Mono', monospace"
          letterSpacing="0.12em"
        >
          CLOSED-LOOP CALLING AUTOMATION
        </text>

        {/* ── ROW 1: TRIGGER & DISPATCH ─────────────────────────────────── */}
        <SectionHeader
          x={xs[0]}
          y={R1 - 32}
          label="PHASE 1: TRIGGER &amp; WORKFLOW DISPATCH"
          color="#34d399"
        />

        {/* Step Badges Row 1 */}
        <Badge cx={cxs[0]} y={R1 - 12} n="01" color="#34d399" />
        <Badge cx={cxs[1]} y={R1 - 12} n="02" color="#fb923c" />
        <Badge cx={cxs[2]} y={R1 - 12} n="03" color="#a78bfa" />

        {/* Nodes Row 1 */}
        <Pill
          x={xs[0]}
          y={R1}
          w={nw}
          fill="url(#dSheetsIn)"
          label="GOOGLE SHEETS&#10;DATA SOURCE / TRIGGER"
        />
        <Pill
          x={xs[1]}
          y={R1}
          w={nw}
          fill="url(#dN8n)"
          label="n8n ORCHESTRATION&#10;WORKFLOW GLUE"
        />
        <Pill
          x={xs[2]}
          y={R1}
          w={nw}
          fill="url(#dDograh)"
          label="DOGRAH PLATFORM&#10;AI VOICE ENGINE"
        />

        {/* Arrows Row 1 */}
        <ArrowRight
          x1={xs[0] + nw + 3}
          x2={xs[1] - 3}
          y={mid1}
          label="New Row Added"
          color="#34d399"
        />
        <ArrowRight
          x1={xs[1] + nw + 3}
          x2={xs[2] - 3}
          y={mid1}
          label="Trigger Autocall"
          color="#fb923c"
        />

        {/* Annotations Row 1 */}
        <Annotation
          cx={cxs[0]}
          y={ann1}
          accent="#34d399"
          lines={[
            'New phone number added to row',
            'Acts as zero-DB event trigger',
            'Double duty: source + record',
          ]}
        />
        <Annotation
          cx={cxs[1]}
          y={ann1}
          accent="#fb923c"
          lines={[
            'Webhook / sheet poll listener',
            'Orchestrates API handoff',
            'Keeps calling logic in Dograh',
          ]}
        />
        <Annotation
          cx={cxs[2]}
          y={ann1}
          accent="#a78bfa"
          lines={[
            'Activates autocall workflow',
            'Configures conversational bot',
            'Dispatches via calling provider',
          ]}
        />

        {/* Downward Connector: Dograh -> Telephony Carrier */}
        <DownCurve
          x={cxs[2]}
          y1={R1 + NH}
          y2={R2}
          color="#a78bfa"
          label="Dial Out"
        />

        {/* ── ROW 2: TELEPHONY & CLOSED-LOOP WRITEBACK ──────────────────── */}
        <SectionHeader
          x={xs[0]}
          y={R2 - 32}
          label="PHASE 2: LIVE CALL &amp; CLOSED-LOOP SYNC"
          color="#22d3ee"
        />

        {/* Step Badges Row 2 (Right to Left: 04, 05, 06) */}
        <Badge cx={cxs[2]} y={R2 - 12} n="04" color="#22d3ee" />
        <Badge cx={cxs[1]} y={R2 - 12} n="05" color="#f472b6" />
        <Badge cx={cxs[0]} y={R2 - 12} n="06" color="#2dd4bf" />

        {/* Nodes Row 2 */}
        <Pill
          x={xs[2]}
          y={R2}
          w={nw}
          fill="url(#dCarrier)"
          label="TELEPHONY PROVIDER&#10;SWAPPABLE DIALER"
        />
        <Pill
          x={xs[1]}
          y={R2}
          w={nw}
          fill="url(#dCall)"
          label="LIVE AI PHONE CALL&#10;AUTOMATED VOICE BOT"
        />
        <Pill
          x={xs[0]}
          y={R2}
          w={nw}
          fill="url(#dSheetsOut)"
          label="GOOGLE SHEETS&#10;RECORD UPDATED"
        />

        {/* Arrows Row 2 (Right to Left) */}
        <ArrowLeft
          x1={xs[2] - 3}
          x2={xs[1] + nw + 3}
          y={mid2}
          label="Connect Call"
          color="#22d3ee"
        />
        <ArrowLeft
          x1={xs[1] - 3}
          x2={xs[0] + nw + 3}
          y={mid2}
          label="Summary"
          color="#f472b6"
        />

        {/* Annotations Row 2 */}
        <Annotation
          cx={cxs[2]}
          y={ann2}
          accent="#22d3ee"
          lines={[
            'Cloudonix / Telnyx / Vonage / Plivo',
            'Provider-agnostic dialer layer',
            'Circumvents trial-tier limits',
          ]}
        />
        <Annotation
          cx={cxs[1]}
          y={ann2}
          accent="#f472b6"
          lines={[
            'Real-time voice bot dialogue',
            'Autonomous conversation flow',
            'Generates call summary & disposition',
          ]}
        />
        <Annotation
          cx={cxs[0]}
          y={ann2}
          accent="#2dd4bf"
          lines={[
            'Call outcome written back to row',
            'Full summary & status synced',
            'Complete closed loop achieved',
          ]}
        />

        {/* Upward Closed-Loop Curve: Sheets Out -> Sheets In */}
        <LoopBackCurve
          x={xs[0]}
          y1={mid2}
          y2={mid1}
          color="#34d399"
          label="CLOSED LOOP"
        />

        {/* Center Pill: Architecture Highlights */}
        {/* <g>
          <rect
            x={W / 2 - 170}
            y={184}
            width={340}
            height={26}
            rx={13}
            fill="#18181f"
            stroke="#64748b"
            strokeWidth={0.8}
            strokeOpacity="0.5"
          />
          <text
            x={W / 2}
            y={197}
            textAnchor="middle"
            dominantBaseline="central"
            fill="#cbd5e1"
            fontSize={9}
            fontWeight="600"
            fontFamily="'Roboto Mono', monospace"
            letterSpacing="0.04em"
          >
            
          </text>
        </g> */}
      </svg>
    </div>
  );
}
