import React from 'react';

const NH = 46;
const NR = 23;

// ── Pill node ────────────────────────────────────────────────────────────────
function Pill({ x, y, w, fill, label, dashed = false, dc = '#fff4', pause = false }) {
  const lines = label.split('\n');
  return (
    <g>
      <rect x={x + 2} y={y + 4} width={w} height={NH} rx={NR} fill="#00000055" />
      <rect x={x} y={y} width={w} height={NH} rx={NR} fill={fill}
        stroke={dashed ? dc : 'none'} strokeWidth={dashed ? 2 : 0}
        strokeDasharray={dashed ? '5 3' : undefined} />
      <rect x={x + 10} y={y + 5} width={w - 20} height={16} rx={10}
        fill="white" fillOpacity="0.13" />
      {/* Pause indicator pip */}
      {pause && (
        <circle cx={x + w - 14} cy={y + 12} r={5}
          fill="#fbbf24" fillOpacity="0.9" />
      )}
      {lines.map((t, i) => (
        <text key={i}
          x={x + w / 2}
          y={y + NH / 2 + (i - (lines.length - 1) / 2) * 13}
          textAnchor="middle" dominantBaseline="central"
          fill="white" fontSize={9.5} fontWeight="700"
          fontFamily="Inter, system-ui, sans-serif"
          letterSpacing="0.06em">
          {t}
        </text>
      ))}
    </g>
  );
}

// ── Arrow ─────────────────────────────────────────────────────────────────────
function Arrow({ x1, x2, y, id = 'ahV' }) {
  return (
    <line x1={x1} y1={y} x2={x2} y2={y}
      stroke="#3f3f46" strokeWidth={1.8}
      markerEnd={`url(#${id})`} />
  );
}

// ── Step badge ────────────────────────────────────────────────────────────────
function Badge({ cx, y, n, color }) {
  return (
    <g>
      <circle cx={cx} cy={y} r={10} fill={color} fillOpacity="0.18"
        stroke={color} strokeWidth={1.2} />
      <text x={cx} y={y} textAnchor="middle" dominantBaseline="central"
        fill={color} fontSize={8} fontWeight="800"
        fontFamily="Inter, system-ui, sans-serif">{n}</text>
    </g>
  );
}

// ── Annotation box ────────────────────────────────────────────────────────────
function Ann({ cx, y, lines, accent }) {
  const bw = 134, bh = lines.length * 15 + 12;
  return (
    <g>
      <circle cx={cx} cy={y} r={2.5} fill={accent} fillOpacity="0.7" />
      <line x1={cx} y1={y + 3} x2={cx} y2={y + 13}
        stroke={accent} strokeWidth={1} strokeDasharray="3 2" strokeOpacity="0.55" />
      <rect x={cx - bw / 2} y={y + 13} width={bw} height={bh} rx={8}
        fill="#111118" stroke={accent} strokeWidth={0.8} strokeOpacity="0.4" />
      {lines.map((t, i) => (
        <text key={i} x={cx} y={y + 13 + 9 + i * 15}
          textAnchor="middle" dominantBaseline="central"
          fill="#94a3b8" fontSize={8}
          fontFamily="Inter, system-ui, sans-serif">{t}</text>
      ))}
    </g>
  );
}

// ── Section header ────────────────────────────────────────────────────────────
function SectionHeader({ x, y, label, color }) {
  return (
    <g>
      <line x1={x} y1={y + 6} x2={x + 16} y2={y + 6}
        stroke={color} strokeWidth={2.5} strokeLinecap="round" />
      <text x={x + 22} y={y + 7} dominantBaseline="central"
        fill={color} fontSize={8.5} fontWeight="700"
        fontFamily="Inter, system-ui, sans-serif"
        letterSpacing="0.12em">{label}</text>
    </g>
  );
}

// ── Pause label (⏸ badge on pause nodes) ──────────────────────────────────────
function PauseLabel({ cx, y }) {
  return (
    <g>
      <rect x={cx - 32} y={y} width={64} height={16} rx={8}
        fill="#000000" fillOpacity="0.18" stroke="#000000" strokeWidth={0.8} strokeOpacity="0" />
      <text x={cx} y={y + 8} textAnchor="middle" dominantBaseline="central"
        fill="#fbbf24" fontSize={7.5} fontWeight="700"
        fontFamily="Inter, system-ui, sans-serif"
        letterSpacing="0.06em"></text>
    </g>
  );
}

// ── Polling badge ─────────────────────────────────────────────────────────────
function PollingBadge({ x, y }) {
  return (
    <g>
      <rect x={x} y={y} width={148} height={17} rx={8}
        fill="#000000ff" fillOpacity="0.12" stroke="#000000ff" strokeWidth={0.8} strokeOpacity="0" />
      <text x={x + 74} y={y + 8.5} textAnchor="middle" dominantBaseline="central"
        fill="#000000ff" fontSize={7.5} fontWeight="700"
        fontFamily="'Roboto Mono', monospace"
        letterSpacing="0.05em">POLL /status  800ms</text>
    </g>
  );
}

export default function VFSDiagram() {
  const W = 870;
  const H = 430;

  // ── Row 1: Auth + Setup (4 nodes) ─────────────────────────────────────────
  const R1 = 72;
  const nw1 = 168;
  const gap1 = 26;
  const totalW1 = 4 * nw1 + 3 * gap1;
  const sx1 = (W - totalW1) / 2;
  const xs1 = Array.from({ length: 4 }, (_, i) => sx1 + i * (nw1 + gap1));
  const cxs1 = xs1.map(x => x + nw1 / 2);
  const mid1 = R1 + NH / 2;
  const ann1 = R1 + NH + 18;

  // ── Row 2: 6-stage booking state machine ─────────────────────────────────
  const R2 = 272;
  const nw2 = 114;
  const gap2 = 18;
  const totalW2 = 6 * nw2 + 5 * gap2;
  const sx2 = (W - totalW2) / 2;
  const xs2 = Array.from({ length: 6 }, (_, i) => sx2 + i * (nw2 + gap2));
  const cxs2 = xs2.map(x => x + nw2 / 2);
  const mid2 = R2 + NH / 2;
  const ann2 = R2 + NH + 18;

  const divY = 228;

  return (
    <div style={{ width: '100%', overflowX: 'auto' }}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        height="auto"
        style={{ display: 'block', background: '#09090e', borderRadius: 14 }}
      >
        <defs>
          {/* Setup palette — rose/pink */}
          <linearGradient id="vAuth" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fb7185" /><stop offset="100%" stopColor="#be123c" />
          </linearGradient>
          <linearGradient id="vCred" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f472b6" /><stop offset="100%" stopColor="#9d174d" />
          </linearGradient>
          <linearGradient id="vAppl" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c084fc" /><stop offset="100%" stopColor="#6d28d9" />
          </linearGradient>
          <linearGradient id="vTrig" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#818cf8" /><stop offset="100%" stopColor="#3730a3" />
          </linearGradient>

          {/* Booking state machine palette */}
          <linearGradient id="b1Login" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#38bdf8" /><stop offset="100%" stopColor="#0369a1" />
          </linearGradient>
          <linearGradient id="b2Cap" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fbbf24" /><stop offset="100%" stopColor="#b45309" />
          </linearGradient>
          <linearGradient id="b3Det" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#818cf8" /><stop offset="100%" stopColor="#4338ca" />
          </linearGradient>
          <linearGradient id="b4Slot" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22d3ee" /><stop offset="100%" stopColor="#0e7490" />
          </linearGradient>
          <linearGradient id="b5Pay" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fb923c" /><stop offset="100%" stopColor="#c2410c" />
          </linearGradient>
          <linearGradient id="b6Conf" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4ade80" /><stop offset="100%" stopColor="#15803d" />
          </linearGradient>

          {/* Arrow marker */}
          <marker id="ahV" markerWidth="9" markerHeight="7"
            refX="8" refY="3.5" orient="auto">
            <polygon points="0 0.5, 8 3.5, 0 6.5" fill="#52525b" />
          </marker>

          {/* Dot grid */}
          <pattern id="dotsV" width="26" height="26" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.9" fill="#ffffff09" />
          </pattern>
        </defs>

        <rect width={W} height={H} fill="url(#dotsV)" />

        {/* ═══════════════════════════════════════════════════
            ROW 1 — AUTH + SETUP PIPELINE
            ═══════════════════════════════════════════════════ */}
        <SectionHeader x={sx1} y={R1 - 38}
          label="SETUP PIPELINE  ·  FastAPI + Neon PostgreSQL + passlib pbkdf2_sha256"
          color="#fb7185" />

        {[0, 1, 2, 3].map(i => (
          <Badge key={i} cx={cxs1[i]} y={R1 - 14} n={`0${i + 1}`} color="#fb7185" />
        ))}

        <Pill x={xs1[0]} y={R1} w={nw1} fill="url(#vAuth)" label="REGISTER / LOGIN" />
        <Pill x={xs1[1]} y={R1} w={nw1} fill="url(#vCred)" label="SAVE VFS CREDENTIALS" />
        <Pill x={xs1[2]} y={R1} w={nw1} fill="url(#vAppl)" label="MANAGE APPLICANTS" />
        <Pill x={xs1[3]} y={R1} w={nw1} fill="url(#vTrig)" label="SELECT & TRIGGER" />

        {[0, 1, 2].map(i => (
          <Arrow key={i} x1={xs1[i] + nw1 + 3} x2={xs1[i + 1] - 3} y={mid1} />
        ))}

        <Ann cx={cxs1[0]} y={ann1} accent="#fb7185" lines={[
          'passlib pbkdf2_sha256',
          'users table → Neon',
        ]} />
        <Ann cx={cxs1[1]} y={ann1} accent="#f472b6" lines={[
          'VFS user + password',
          'card saved once',
        ]} />
        <Ann cx={cxs1[2]} y={ann1} accent="#c084fc" lines={[
          'CRUD: create, list,',
          'update, delete',
        ]} />
        <Ann cx={cxs1[3]} y={ann1} accent="#818cf8" lines={[
          'POST /batch-book',
          'asyncio.create_task',
        ]} />

        {/* ── Divider ── */}
        <line x1={sx2 - 10} y1={divY} x2={sx2 + totalW2 + 10} y2={divY}
          stroke="#27272a" strokeWidth={1} strokeDasharray="6 4" />

        {/* ═══════════════════════════════════════════════════
            ROW 2 — 6-STAGE BOOKING STATE MACHINE
            ═══════════════════════════════════════════════════ */}
        <SectionHeader x={sx2} y={R2 - 38}
          label="BOOKING STATE MACHINE  ·  asyncio background task  ·  800ms frontend polling"
          color="#22d3ee" />

        {[0, 1, 2, 3, 4, 5].map(i => (
          <Badge key={i} cx={cxs2[i]} y={R2 - 14} n={`0${i + 1}`} color="#22d3ee" />
        ))}

        {/* Pause labels above pause nodes */}
        <PauseLabel cx={cxs2[1]} y={R2 - 30} />
        <PauseLabel cx={cxs2[4]} y={R2 - 30} />

        {/* Nodes — pause=true on captcha + payment */}
        <Pill x={xs2[0]} y={R2} w={nw2} fill="url(#b1Login)" label="LOGIN" />
        <Pill x={xs2[1]} y={R2} w={nw2} fill="url(#b2Cap)" label="CAPTCHA" pause dashed dc="#fbbf2488" />
        <Pill x={xs2[2]} y={R2} w={nw2} fill="url(#b3Det)" label="APPLICANT DETAILS" />
        <Pill x={xs2[3]} y={R2} w={nw2} fill="url(#b4Slot)" label="SLOT SEARCH" />
        <Pill x={xs2[4]} y={R2} w={nw2} fill="url(#b5Pay)" label="PAYMENT" pause dashed dc="#fb923c88" />
        <Pill x={xs2[5]} y={R2} w={nw2} fill="url(#b6Conf)" label="CONFIRM" />

        {[0, 1, 2, 3, 4].map(i => (
          <Arrow key={i} x1={xs2[i] + nw2 + 3} x2={xs2[i + 1] - 3} y={mid2} />
        ))}

        {/* Polling badge above the middle of the stepper */}
        <PollingBadge x={(xs2[0] + xs2[5] + nw2) / 2 - 74} y={R2 - 50} />

        <Ann cx={cxs2[0]} y={ann2} accent="#38bdf8" lines={[
          'Simulates VFS login',
          'with saved credentials',
        ]} />
        <Ann cx={cxs2[1]} y={ann2} accent="#fbbf24" lines={[
          'action_required set',
          'CaptchaModal pops',
        ]} />
        <Ann cx={cxs2[2]} y={ann2} accent="#818cf8" lines={[
          'Fills applicant data',
          'from DB record',
        ]} />
        <Ann cx={cxs2[3]} y={ann2} accent="#22d3ee" lines={[
          'Searches available',
          'appointment slots',
        ]} />
        <Ann cx={cxs2[4]} y={ann2} accent="#fb923c" lines={[
          'action_required set',
          'PaymentModal pops',
        ]} />
        <Ann cx={cxs2[5]} y={ann2} accent="#4ade80" lines={[
          'VFS-XXXXXXXX issued',
          'Applicant → Confirmed',
        ]} />

        {/* Glow rings on pause + confirm nodes */}
        {[
          { i: 1, c: '#fbbf2422' },
          { i: 4, c: '#fb923c22' },
          { i: 5, c: '#4ade8022' },
        ].map(({ i, c }) => (
          <rect key={i} x={xs2[i] - 4} y={R2 - 4} width={nw2 + 8} height={NH + 8}
            rx={NR + 4} fill="none" stroke={c} strokeWidth={6} />
        ))}
      </svg>
    </div>
  );
}
