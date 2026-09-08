import React from 'react';

const NH = 44;  // node height
const NR = 22;  // corner radius

function Pill({ x, y, w, fill, label, dashed = false, dc = '#ddd4' }) {
  const lines = label.split('\n');
  return (
    <g>
      {/* Drop shadow */}
      <rect x={x + 2} y={y + 4} width={w} height={NH} rx={NR} fill="#00000050" />
      {/* Body */}
      <rect x={x} y={y} width={w} height={NH} rx={NR} fill={fill}
        stroke={dashed ? dc : 'none'} strokeWidth={2}
        strokeDasharray={dashed ? '5 3' : undefined} />
      {/* Glass shine */}
      <rect x={x + 10} y={y + 5} width={w - 20} height={16} rx={10}
        fill="white" fillOpacity="0.12" />
      {/* Label */}
      {lines.map((t, i) => (
        <text key={i}
          x={x + w / 2}
          y={y + NH / 2 + (i - (lines.length - 1) / 2) * 13}
          textAnchor="middle" dominantBaseline="central"
          fill="white" fontSize={10} fontWeight="700"
          fontFamily="Inter, system-ui, sans-serif"
          letterSpacing="0.07em">
          {t}
        </text>
      ))}
    </g>
  );
}

export default function LeadGenDiagram() {
  const W = 870;
  const H = 420;

  // ── Row 1 nodes ─────────────────────────────────────────────────────────────
  const R1Y = 30;
  const a = { x: 14,  w: 154 };   // Apify Jobs Scraper
  const b = { x: 196, w: 130 };   // Sector Check
  const c = { x: 354, w: 154 };   // Apify Repeatability
  const d = { x: 536, w: 160 };   // Apollo Fund Checker
  const dcx = d.x + d.w / 2;      // right-column center x = 616

  // ── Right column ─────────────────────────────────────────────────────────────
  const gY = 142;   // Glassdoor
  const sY = 252;   // Scoring
  const rY = 364;   // Reject

  // ── Left branch (all at sY) ───────────────────────────────────────────────
  // Evenly spread so each gap = 38 px
  const k = { x: 382, w: 116 };   // Keep        right=498
  const l = { x: 224, w: 120 };   // Find LinkedIn right=344
  const e = { x: 56,  w: 130 };   // Find Email   right=186

  const mid = (y) => y + NH / 2;

  return (
    <div style={{ width: '100%', overflowX: 'auto' }}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        height="auto"
        style={{ display: 'block', background: '#09090e', borderRadius: 14 }}
      >
        <defs>
          {/* ── Gradient fills ── */}
          <linearGradient id="gPink" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f0277a" />
            <stop offset="100%" stopColor="#ad1457" />
          </linearGradient>
          <linearGradient id="gGray" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#607d8b" />
            <stop offset="100%" stopColor="#37474f" />
          </linearGradient>
          <linearGradient id="gBlue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#29b6f6" />
            <stop offset="100%" stopColor="#0277bd" />
          </linearGradient>
          <linearGradient id="gGreen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4caf50" />
            <stop offset="100%" stopColor="#2e7d32" />
          </linearGradient>
          <linearGradient id="gPurple" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ab47bc" />
            <stop offset="100%" stopColor="#6a1b9a" />
          </linearGradient>
          <linearGradient id="gRed" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ef5350" />
            <stop offset="100%" stopColor="#b71c1c" />
          </linearGradient>
          <linearGradient id="gNavy" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#42a5f5" />
            <stop offset="100%" stopColor="#1565c0" />
          </linearGradient>

          {/* ── Arrowhead — single definition ── */}
          <marker id="ah" markerWidth="9" markerHeight="7"
            refX="8" refY="3.5" orient="auto">
            <polygon points="0 0.5, 8 3.5, 0 6.5" fill="#52525b" />
          </marker>

          {/* ── Dot-grid background ── */}
          <pattern id="dots" width="26" height="26" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.9" fill="#ffffff0b" />
          </pattern>

          {/* ── Subtle glow filter ── */}
          <filter id="glow" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Background */}
        <rect width={W} height={H} fill="url(#dots)" />

        {/* ═════════════════════════════════════════
            ROW 1  –  Apify → Sector → Repeat → Apollo
            ═════════════════════════════════════════ */}
        <Pill x={a.x} y={R1Y} w={a.w} fill="url(#gPink)"   label="APIFY JOBS&#10;SCRAPER" />
        <Pill x={b.x} y={R1Y} w={b.w} fill="url(#gGray)"   label="SECTOR&#10;CHECK" />
        <Pill x={c.x} y={R1Y} w={c.w} fill="url(#gPink)"   label="APIFY&#10;REPEATABILITY" />
        <Pill x={d.x} y={R1Y} w={d.w} fill="url(#gBlue)"   label="APOLLO FUND&#10;CHECKER" />

        {/* Row 1 connectors */}
        <line x1={a.x + a.w + 3} y1={mid(R1Y)} x2={b.x - 2} y2={mid(R1Y)}
          stroke="#52525b" strokeWidth={1.6} strokeDasharray="5 3" markerEnd="url(#ah)" />
        <line x1={b.x + b.w + 3} y1={mid(R1Y)} x2={c.x - 2} y2={mid(R1Y)}
          stroke="#52525b" strokeWidth={1.6} markerEnd="url(#ah)" />
        <line x1={c.x + c.w + 3} y1={mid(R1Y)} x2={d.x - 2} y2={mid(R1Y)}
          stroke="#52525b" strokeWidth={1.6} markerEnd="url(#ah)" />

        {/* ═════════════════════════════════════════
            RIGHT COLUMN  –  Glassdoor → Scoring → Reject
            ═════════════════════════════════════════ */}
        <Pill x={d.x} y={gY} w={d.w} fill="url(#gGreen)"  label="GLASSDOOR&#10;REVIEW" />
        <Pill x={d.x} y={sY} w={d.w} fill="url(#gPurple)" label="SCORING" dashed dc="#ce93d8" />
        <Pill x={d.x} y={rY} w={d.w} fill="url(#gRed)"    label="REJECT" />

        {/* Right-column vertical arrows */}
        <line x1={dcx} y1={R1Y + NH + 3} x2={dcx} y2={gY - 2}
          stroke="#52525b" strokeWidth={1.6} markerEnd="url(#ah)" />
        <line x1={dcx} y1={gY + NH + 3} x2={dcx} y2={sY - 2}
          stroke="#52525b" strokeWidth={1.6} markerEnd="url(#ah)" />
        <line x1={dcx} y1={sY + NH + 3} x2={dcx} y2={rY - 2}
          stroke="#52525b" strokeWidth={1.6} markerEnd="url(#ah)" />

        {/* ═════════════════════════════════════════
            LEFT BRANCH  –  Scoring → Keep → LinkedIn → Email
            All at y = sY, arrows go ← (leftward)
            ═════════════════════════════════════════ */}

        {/* Scoring → Keep */}
        <line
          x1={d.x - 3} y1={mid(sY)}
          x2={k.x + k.w + 2} y2={mid(sY)}
          stroke="#52525b" strokeWidth={1.6} markerEnd="url(#ah)" />
        <Pill x={k.x} y={sY} w={k.w} fill="url(#gGreen)" label="KEEP" />

        {/* Keep → Find LinkedIn */}
        <line
          x1={k.x - 3} y1={mid(sY)}
          x2={l.x + l.w + 2} y2={mid(sY)}
          stroke="#52525b" strokeWidth={1.6} markerEnd="url(#ah)" />
        <Pill x={l.x} y={sY} w={l.w} fill="url(#gNavy)" label="FIND&#10;LINKEDIN" />

        {/* Find LinkedIn → Find Email */}
        <line
          x1={l.x - 3} y1={mid(sY)}
          x2={e.x + e.w + 2} y2={mid(sY)}
          stroke="#52525b" strokeWidth={1.6} markerEnd="url(#ah)" />
        <Pill x={e.x} y={sY} w={e.w} fill="url(#gRed)" label="FIND&#10;EMAIL" dashed dc="#ef9a9a" />

        {/* ── Subtle glow rings on key outcome nodes ── */}
        <rect x={k.x - 3} y={sY - 3} width={k.w + 6} height={NH + 6}
          rx={NR + 3} fill="none" stroke="#4caf5030" strokeWidth={4} />
        <rect x={d.x - 3} y={rY - 3} width={d.w + 6} height={NH + 6}
          rx={NR + 3} fill="none" stroke="#ef535030" strokeWidth={4} />
      </svg>
    </div>
  );
}
