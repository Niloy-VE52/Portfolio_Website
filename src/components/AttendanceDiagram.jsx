import React from 'react';

const NH = 46;
const NR = 23;

// ── Pill node ────────────────────────────────────────────────────────────────
function Pill({ x, y, w, fill, label, dashed = false, dc = '#fff3' }) {
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
          letterSpacing="0.07em">
          {t}
        </text>
      ))}
    </g>
  );
}

// ── Horizontal arrow ─────────────────────────────────────────────────────────
function Arrow({ x1, x2, y, id }) {
  return (
    <line x1={x1} y1={y} x2={x2} y2={y}
      stroke="#3f3f46" strokeWidth={1.8}
      markerEnd={`url(#${id})`} />
  );
}

// ── Step badge ───────────────────────────────────────────────────────────────
function StepBadge({ cx, y, n, color }) {
  return (
    <g>
      <circle cx={cx} cy={y} r={10} fill={color} fillOpacity="0.18"
        stroke={color} strokeWidth={1.2} />
      <text x={cx} y={y} textAnchor="middle" dominantBaseline="central"
        fill={color} fontSize={8.5} fontWeight="800"
        fontFamily="Inter, system-ui, sans-serif">{n}</text>
    </g>
  );
}

// ── Annotation box (below node) ──────────────────────────────────────────────
function Ann({ cx, y, lines, accent }) {
  const bw = 160, bh = lines.length * 16 + 12;
  return (
    <g>
      <circle cx={cx} cy={y} r={2.5} fill={accent} fillOpacity="0.7" />
      <line x1={cx} y1={y + 3} x2={cx} y2={y + 14}
        stroke={accent} strokeWidth={1} strokeDasharray="3 2" strokeOpacity="0.6" />
      <rect x={cx - bw / 2} y={y + 14} width={bw} height={bh} rx={9}
        fill="#14141c" stroke={accent} strokeWidth={0.8} strokeOpacity="0.4" />
      {lines.map((t, i) => (
        <text key={i}
          x={cx} y={y + 14 + 10 + i * 16}
          textAnchor="middle" dominantBaseline="central"
          fill="#94a3b8" fontSize={8.5}
          fontFamily="Inter, system-ui, sans-serif"
          letterSpacing="0.03em">{t}</text>
      ))}
    </g>
  );
}

// ── Section header ───────────────────────────────────────────────────────────
function SectionHeader({ x, y, label, color, W }) {
  return (
    <g>
      <line x1={x} y1={y + 6} x2={x + 16} y2={y + 6}
        stroke={color} strokeWidth={2.5} strokeLinecap="round" />
      <text x={x + 22} y={y + 7}
        dominantBaseline="central"
        fill={color} fontSize={8.5} fontWeight="700"
        fontFamily="Inter, system-ui, sans-serif"
        letterSpacing="0.12em">
        {label}
      </text>
    </g>
  );
}

export default function AttendanceDiagram() {
  const W = 870;
  const H = 450;

  // 4-node layout centred in W
  const nw = 160;
  const gap = 24;
  const totalW = 4 * nw + 3 * gap;
  const sx = (W - totalW) / 2;  // start x ≈ 75

  // X positions for each column
  const xs = [sx, sx + nw + gap, sx + 2 * (nw + gap), sx + 3 * (nw + gap)];
  const cxs = xs.map(x => x + nw / 2);  // center x of each column

  // Row 1 — Attendance Pipeline
  const R1 = 80;
  const mid1 = R1 + NH / 2;
  const ann1 = R1 + NH + 18;

  // Row 2 — Data Analyst Module
  const R2 = 280;
  const mid2 = R2 + NH / 2;
  const ann2 = R2 + NH + 18;

  // Divider Y
  const divY = 230;

  return (
    <div style={{ width: '100%', overflowX: 'auto' }}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        height="auto"
        style={{ display: 'block', background: '#09090e', borderRadius: 14 }}
      >
        <defs>
          {/* ── Attendance palette (cyan → blue) ── */}
          <linearGradient id="aEnroll" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#38bdf8" /><stop offset="100%" stopColor="#0369a1" />
          </linearGradient>
          <linearGradient id="aTrain" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#818cf8" /><stop offset="100%" stopColor="#3730a3" />
          </linearGradient>
          <linearGradient id="aRecog" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22d3ee" /><stop offset="100%" stopColor="#0e7490" />
          </linearGradient>
          <linearGradient id="aReport" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2dd4bf" /><stop offset="100%" stopColor="#0f766e" />
          </linearGradient>

          {/* ── Analyst palette (emerald → violet) ── */}
          <linearGradient id="dUpload" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4ade80" /><stop offset="100%" stopColor="#15803d" />
          </linearGradient>
          <linearGradient id="dQuery" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a3e635" /><stop offset="100%" stopColor="#4d7c0f" />
          </linearGradient>
          <linearGradient id="dViz" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fb923c" /><stop offset="100%" stopColor="#c2410c" />
          </linearGradient>
          <linearGradient id="dDeep" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c084fc" /><stop offset="100%" stopColor="#7e22ce" />
          </linearGradient>

          {/* ── Arrow markers ── */}
          <marker id="ahA" markerWidth="9" markerHeight="7"
            refX="8" refY="3.5" orient="auto">
            <polygon points="0 0.5, 8 3.5, 0 6.5" fill="#38bdf850" />
          </marker>
          <marker id="ahD" markerWidth="9" markerHeight="7"
            refX="8" refY="3.5" orient="auto">
            <polygon points="0 0.5, 8 3.5, 0 6.5" fill="#4ade8050" />
          </marker>

          {/* ── Dot grid ── */}
          <pattern id="dotsA" width="26" height="26" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.9" fill="#ffffff09" />
          </pattern>
        </defs>

        {/* Background */}
        <rect width={W} height={H} fill="url(#dotsA)" />

        {/* ══════════════════════════════════════════════════════
            SECTION 1 — ATTENDANCE PIPELINE
            ══════════════════════════════════════════════════════ */}
        <SectionHeader x={sx} y={R1 - 36} color="#38bdf8"
          label="ATTENDANCE PIPELINE  ·  OpenCV + RandomForest + SQLite" W={W} />

        {/* Step badges */}
        {[0, 1, 2, 3].map(i => (
          <StepBadge key={i} cx={cxs[i]} y={R1 - 14} n={`0${i + 1}`} color="#38bdf8" />
        ))}

        {/* Nodes */}
        <Pill x={xs[0]} y={R1} w={nw} fill="url(#aEnroll)" label="ENROLL" />
        <Pill x={xs[1]} y={R1} w={nw} fill="url(#aTrain)" label="TRAIN MODEL" />
        <Pill x={xs[2]} y={R1} w={nw} fill="url(#aRecog)" label="RECOGNIZE & LOG" />
        <Pill x={xs[3]} y={R1} w={nw} fill="url(#aReport)" label="REPORT" />

        {/* Arrows */}
        {[0, 1, 2].map(i => (
          <Arrow key={i} x1={xs[i] + nw + 3} x2={xs[i + 1] - 3} y={mid1} id="ahA" />
        ))}

        {/* Annotations */}
        <Ann cx={cxs[0]} y={ann1} accent="#38bdf8" lines={['Webcam → 5-10+ face photos', 'stored per student']} />
        <Ann cx={cxs[1]} y={ann1} accent="#818cf8" lines={['RandomForest on face data', 'serialised → model.pkl']} />
        <Ann cx={cxs[2]} y={ann1} accent="#22d3ee" lines={['Haar Cascade detect', 'RF classify → 1× / day log']} />
        <Ann cx={cxs[3]} y={ann1} accent="#2dd4bf" lines={['Day/week/month filter', 'SQLite3 → CSV export']} />

        {/* ── Divider ── */}
        <line x1={sx - 10} y1={divY} x2={sx + totalW + 10} y2={divY}
          stroke="#27272a" strokeWidth={1} strokeDasharray="6 4" />

        {/* ══════════════════════════════════════════════════════
            SECTION 2 — AI DATA ANALYST MODULE
            ══════════════════════════════════════════════════════ */}
        <SectionHeader x={sx} y={R2 - 36} color="#4ade80"
          label="AI DATA ANALYST MODULE  ·  LangChain + Gemini 2.5 Flash + Plotly" W={W} />

        {/* Step badges */}
        {[0, 1, 2, 3].map(i => (
          <StepBadge key={i} cx={cxs[i]} y={R2 - 14} n={`0${i + 1}`} color="#4ade80" />
        ))}

        {/* Nodes */}
        <Pill x={xs[0]} y={R2} w={nw} fill="url(#dUpload)" label="UPLOAD CSV" />
        <Pill x={xs[1]} y={R2} w={nw} fill="url(#dQuery)" label="QUERY: NL → SQL" />
        <Pill x={xs[2]} y={R2} w={nw} fill="url(#dViz)" label="VISUALIZE PLOTLY" />
        <Pill x={xs[3]} y={R2} w={nw} fill="url(#dDeep)" label="DEEP DIVE AI" />

        {/* Arrows */}
        {[0, 1, 2].map(i => (
          <Arrow key={i} x1={xs[i] + nw + 3} x2={xs[i + 1] - 3} y={mid2} id="ahD" />
        ))}

        {/* Annotations */}
        <Ann cx={cxs[0]} y={ann2} accent="#4ade80" lines={['CSV → SQLite table', 'metadata + 4 auto-charts']} />
        <Ann cx={cxs[1]} y={ann2} accent="#a3e635" lines={['LangChain NL→SQL', 'Gemini 2.5 Flash Lite']} />
        <Ann cx={cxs[2]} y={ann2} accent="#fb923c" lines={['Sandboxed Plotly runner', 'on-demand chart gen']} />
        <Ann cx={cxs[3]} y={ann2} accent="#c084fc" lines={['AI chart analysis', 'deeper LLM summary']} />

        {/* ── Glow halos on key nodes ── */}
        {[
          { x: xs[2], y: R1, c: '#22d3ee20' },
          { x: xs[1], y: R2, c: '#a3e63520' },
          { x: xs[3], y: R2, c: '#c084fc20' },
        ].map((g, i) => (
          <rect key={i} x={g.x - 4} y={g.y - 4} width={nw + 8} height={NH + 8}
            rx={NR + 4} fill="none" stroke={g.c} strokeWidth={6} />
        ))}
      </svg>
    </div>
  );
}
