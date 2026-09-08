import React from 'react';

const NH = 46;
const NR = 23;

// ── Pill node ────────────────────────────────────────────────────────────────
function Pill({ x, y, w, fill, label, dashed = false, dc = '#fff4' }) {
  const lines = label.split('\n');
  return (
    <g>
      <rect x={x + 2} y={y + 4} width={w} height={NH} rx={NR} fill="#00000055" />
      <rect x={x} y={y} width={w} height={NH} rx={NR} fill={fill}
        stroke={dashed ? dc : 'none'} strokeWidth={2}
        strokeDasharray={dashed ? '5 3' : undefined} />
      <rect x={x + 10} y={y + 5} width={w - 20} height={16} rx={10}
        fill="white" fillOpacity="0.13" />
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

// ── Arrow ────────────────────────────────────────────────────────────────────
function Arrow({ x1, x2, y, markerId = 'ahN' }) {
  return (
    <line x1={x1} y1={y} x2={x2} y2={y}
      stroke="#3f3f46" strokeWidth={1.8}
      markerEnd={`url(#${markerId})`} />
  );
}

// ── Arrow label ──────────────────────────────────────────────────────────────
function ArrowLabel({ x, y, text, color = '#52525b' }) {
  return (
    <text x={x} y={y}
      textAnchor="middle" dominantBaseline="central"
      fill={color} fontSize={7.5}
      fontFamily="'Roboto Mono', 'Courier New', monospace"
      letterSpacing="0.04em">
      {text}
    </text>
  );
}

// ── Step badge ───────────────────────────────────────────────────────────────
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

// ── Annotation box ───────────────────────────────────────────────────────────
function Ann({ cx, y, lines, accent }) {
  const bw = 154, bh = lines.length * 15 + 12;
  return (
    <g>
      <circle cx={cx} cy={y} r={2.5} fill={accent} fillOpacity="0.7" />
      <line x1={cx} y1={y + 3} x2={cx} y2={y + 13}
        stroke={accent} strokeWidth={1} strokeDasharray="3 2" strokeOpacity="0.55" />
      <rect x={cx - bw / 2} y={y + 13} width={bw} height={bh} rx={8}
        fill="#111118" stroke={accent} strokeWidth={0.8} strokeOpacity="0.4" />
      {lines.map((t, i) => (
        <text key={i}
          x={cx} y={y + 13 + 9 + i * 15}
          textAnchor="middle" dominantBaseline="central"
          fill="#94a3b8" fontSize={8}
          fontFamily="Inter, system-ui, sans-serif">{t}</text>
      ))}
    </g>
  );
}

// ── Section header ───────────────────────────────────────────────────────────
function SectionHeader({ x, y, label, color }) {
  return (
    <g>
      <line x1={x} y1={y + 6} x2={x + 16} y2={y + 6}
        stroke={color} strokeWidth={2.5} strokeLinecap="round" />
      <text x={x + 22} y={y + 7} dominantBaseline="central"
        fill={color} fontSize={8.5} fontWeight="700"
        fontFamily="Inter, system-ui, sans-serif"
        letterSpacing="0.12em">
        {label}
      </text>
    </g>
  );
}

// ── Callout badge (special highlight box) ────────────────────────────────────
function Callout({ cx, y, text, color }) {
  const w = 160;
  return (
    <g>
      <rect x={cx - w / 2} y={y} width={w} height={18} rx={9}
        fill={color} fillOpacity="0.15" stroke={color} strokeWidth={0.8} strokeOpacity="0.5" />
      <text x={cx} y={y + 9} textAnchor="middle" dominantBaseline="central"
        fill={color} fontSize={7.5} fontWeight="700"
        fontFamily="'Roboto Mono', monospace" letterSpacing="0.05em">
        {text}
      </text>
    </g>
  );
}

export default function NestQuestDiagram() {
  const W = 870;
  const H = 430;

  // ── Row 1: AI Chat Search (5 nodes, the star feature) ─────────────────────
  const R1 = 82;
  const nw1 = 148;
  const gap1 = 20;
  const totalW1 = 5 * nw1 + 4 * gap1;
  const sx1 = (W - totalW1) / 2;
  const xs1 = Array.from({ length: 5 }, (_, i) => sx1 + i * (nw1 + gap1));
  const cxs1 = xs1.map(x => x + nw1 / 2);
  const mid1 = R1 + NH / 2;
  const ann1 = R1 + NH + 18;

  // ── Row 2: Auth Pipeline (4 nodes) ────────────────────────────────────────
  const R2 = 295;
  const nw2 = 170;
  const gap2 = 28;
  const totalW2 = 4 * nw2 + 3 * gap2;
  const sx2 = (W - totalW2) / 2;
  const xs2 = Array.from({ length: 4 }, (_, i) => sx2 + i * (nw2 + gap2));
  const cxs2 = xs2.map(x => x + nw2 / 2);
  const mid2 = R2 + NH / 2;
  const ann2 = R2 + NH + 18;

  const divY = 252;

  return (
    <div style={{ width: '100%', overflowX: 'auto' }}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        height="auto"
        style={{ display: 'block', background: '#09090e', borderRadius: 14 }}
      >
        <defs>
          {/* AI Chat palette — amber / orange */}
          <linearGradient id="nUser" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#60a5fa" /><stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
          <linearGradient id="nChat" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f59e0b" /><stop offset="100%" stopColor="#b45309" />
          </linearGradient>
          <linearGradient id="nLLM" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a78bfa" /><stop offset="100%" stopColor="#6d28d9" />
          </linearGradient>
          <linearGradient id="nParse" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fb923c" /><stop offset="100%" stopColor="#c2410c" />
          </linearGradient>
          <linearGradient id="nResult" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#34d399" /><stop offset="100%" stopColor="#065f46" />
          </linearGradient>

          {/* Auth palette — blue / teal */}
          <linearGradient id="aReg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#38bdf8" /><stop offset="100%" stopColor="#0369a1" />
          </linearGradient>
          <linearGradient id="aHash" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#818cf8" /><stop offset="100%" stopColor="#3730a3" />
          </linearGradient>
          <linearGradient id="aJWT" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2dd4bf" /><stop offset="100%" stopColor="#0f766e" />
          </linearGradient>
          <linearGradient id="aGuard" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4ade80" /><stop offset="100%" stopColor="#15803d" />
          </linearGradient>

          {/* Arrowhead */}
          <marker id="ahN" markerWidth="9" markerHeight="7"
            refX="8" refY="3.5" orient="auto">
            <polygon points="0 0.5, 8 3.5, 0 6.5" fill="#52525b" />
          </marker>

          {/* Dot grid */}
          <pattern id="dotsN" width="26" height="26" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.9" fill="#ffffff09" />
          </pattern>
        </defs>

        {/* Background */}
        <rect width={W} height={H} fill="url(#dotsN)" />

        {/* ═══════════════════════════════════════════════════════════════
            ROW 1 — AI CHAT SEARCH  (the two-step LLM pattern)
            ═══════════════════════════════════════════════════════════════ */}
        <SectionHeader x={sx1} y={R1 - 38} color="#f59e0b"
          label="AI CHAT SEARCH  ·  Two-Step LLM Pattern  ·  LLM Never Touches DB Directly" />

        {/* Step badges */}
        {[0, 1, 2, 3, 4].map(i => (
          <Badge key={i} cx={cxs1[i]} y={R1 - 14} n={`0${i + 1}`} color="#f59e0b" />
        ))}

        {/* Nodes */}
        <Pill x={xs1[0]} y={R1} w={nw1} fill="url(#nUser)" label="USER QUERY" />
        <Pill x={xs1[1]} y={R1} w={nw1} fill="url(#nChat)" label="chat.py SYSTEM PROMPT" />
        <Pill x={xs1[2]} y={R1} w={nw1} fill="url(#nLLM)" label="OPENAI GPT-4o-mini" />
        <Pill x={xs1[3]} y={R1} w={nw1} fill="url(#nParse)" label="PARSE & DB QUERY" />
        <Pill x={xs1[4]} y={R1} w={nw1} fill="url(#nResult)" label="REPLY + PROPERTY CARDS" />

        {/* Arrows */}
        {[0, 1, 2, 3].map(i => (
          <Arrow key={i}
            x1={xs1[i] + nw1 + 3} x2={xs1[i + 1] - 3} y={mid1} />
        ))}

        {/* Special label on arrow 3→4: the JSON block concept */}
        {/* <ArrowLabel
          x={(xs1[2] + nw1 + xs1[3]) / 2}
          y={mid1 - 11}
          text="`propertysearch` JSON"
          color="#fb923c" /> */}

        {/* Annotations */}
        <Ann cx={cxs1[0]} y={ann1} accent="#60a5fa" lines={[
          '"2 BHK under 40k',
          'in Koramangala"',
        ]} />
        <Ann cx={cxs1[1]} y={ann1} accent="#f59e0b" lines={[
          'Full message history',
          '+ system instructions',
        ]} />
        <Ann cx={cxs1[2]} y={ann1} accent="#a78bfa" lines={[
          'Emits structured JSON',
          'block in its reply',
        ]} />
        <Ann cx={cxs1[3]} y={ann1} accent="#fb923c" lines={[
          'Regex extracts filters',
          'SQLAlchemy query (≤8)',
        ]} />
        <Ann cx={cxs1[4]} y={ann1} accent="#34d399" lines={[
          'Clean text + cards',
          'rendered in React UI',
        ]} />

        {/* Callout: Sandboxed LLM note */}
        {/* <Callout
          cx={cxs1[2]}
          y={ann1 + 50}
          text="LLM SANDBOXED QUERIES "
          color="#a78bfa" /> */}

        {/* Glow rings */}
        {[
          { i: 2, c: '#a78bfa22' },
          { i: 3, c: '#fb923c22' },
          { i: 4, c: '#34d39922' },
        ].map(({ i, c }) => (
          <rect key={i} x={xs1[i] - 4} y={R1 - 4} width={nw1 + 8} height={NH + 8}
            rx={NR + 4} fill="none" stroke={c} strokeWidth={6} />
        ))}

        {/* ── Divider ── */}
        <line x1={sx1} y1={divY} x2={sx1 + totalW1} y2={divY}
          stroke="#27272a" strokeWidth={1} strokeDasharray="6 4" />

        {/* ═══════════════════════════════════════════════════════════════
            ROW 2 — AUTH PIPELINE
            ═══════════════════════════════════════════════════════════════ */}
        <SectionHeader x={sx2} y={R2 - 38} color="#38bdf8"
          label="AUTH PIPELINE  ·  JWT + pbkdf2_sha256 + Depends(get_current_user)" />

        {/* Step badges */}
        {[0, 1, 2, 3].map(i => (
          <Badge key={i} cx={cxs2[i]} y={R2 - 14} n={`0${i + 1}`} color="#38bdf8" />
        ))}

        {/* Nodes */}
        <Pill x={xs2[0]} y={R2} w={nw2} fill="url(#aReg)" label="REGISTER / LOGIN" />
        <Pill x={xs2[1]} y={R2} w={nw2} fill="url(#aHash)" label="HASH & VERIFY" />
        <Pill x={xs2[2]} y={R2} w={nw2} fill="url(#aJWT)" label="JWT CREATED" />
        <Pill x={xs2[3]} y={R2} w={nw2} fill="url(#aGuard)" label="PROTECTED ENDPOINTS" />

        {/* Arrows */}
        {[0, 1, 2].map(i => (
          <Arrow key={i}
            x1={xs2[i] + nw2 + 3} x2={xs2[i + 1] - 3} y={mid2} />
        ))}

        {/* Annotations */}
        <Ann cx={cxs2[0]} y={ann2} accent="#38bdf8" lines={[
          'POST /api/auth/register',
          'or /api/auth/login',
        ]} />
        <Ann cx={cxs2[1]} y={ann2} accent="#818cf8" lines={[
          'pbkdf2_sha256 hash',
          '+ verify password',
        ]} />
        <Ann cx={cxs2[2]} y={ann2} accent="#2dd4bf" lines={[
          'python-jose JWT',
          'Authorization: Bearer',
        ]} />
        <Ann cx={cxs2[3]} y={ann2} accent="#4ade80" lines={[
          'Depends(get_current_user)',
          'RBAC: user / admin',
        ]} />
      </svg>
    </div>
  );
}
