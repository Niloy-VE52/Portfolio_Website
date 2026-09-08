import React from 'react';

const NH = 52;   // node height (taller for more presence)
const NR = 26;   // corner radius

// ── Pill node ──────────────────────────────────────────────────────────────────
function Pill({ x, y, w, fill, label, sublabel = '', icon = '' }) {
  const lines = label.split('\n');
  return (
    <g>
      {/* Drop shadow */}
      <rect x={x + 2} y={y + 5} width={w} height={NH} rx={NR} fill="#00000055" />
      {/* Body */}
      <rect x={x} y={y} width={w} height={NH} rx={NR} fill={fill} />
      {/* Glass shine */}
      <rect x={x + 12} y={y + 6} width={w - 24} height={18} rx={12} fill="white" fillOpacity="0.14" />
      {/* Icon (emoji via foreignObject not usable in SVG — use text instead) */}
      {icon && (
        <text x={x + 22} y={y + NH / 2 + 1}
          textAnchor="middle" dominantBaseline="central"
          fontSize={16} fontFamily="serif">
          {icon}
        </text>
      )}
      {/* Label lines */}
      {lines.map((t, i) => (
        <text key={i}
          x={icon ? x + w / 2 + 8 : x + w / 2}
          y={y + NH / 2 + (i - (lines.length - 1) / 2) * 14}
          textAnchor="middle" dominantBaseline="central"
          fill="white" fontSize={11} fontWeight="700"
          fontFamily="Inter, system-ui, sans-serif"
          letterSpacing="0.07em">
          {t}
        </text>
      ))}
    </g>
  );
}

// ── Annotation box (below each node) ──────────────────────────────────────────
function Annotation({ cx, y, lines, accent }) {
  const pw = 170;
  const ph = lines.length * 17 + 14;
  const px = cx - pw / 2;
  return (
    <g>
      {/* Connector dot */}
      <circle cx={cx} cy={y - 1} r={3} fill={accent} />
      {/* Vertical tick */}
      <line x1={cx} y1={y + 3} x2={cx} y2={y + 18}
        stroke={accent} strokeWidth={1.2} strokeDasharray="3 2" />
      {/* Box */}
      <rect x={px} y={y + 18} width={pw} height={ph} rx={10}
        fill="#18181f" stroke={accent} strokeWidth={1} strokeOpacity="0.5" />
      {lines.map((t, i) => (
        <text key={i}
          x={cx} y={y + 18 + 11 + i * 17}
          textAnchor="middle" dominantBaseline="central"
          fill="#cbd5e1" fontSize={9} fontFamily="Inter, system-ui, sans-serif"
          letterSpacing="0.04em">
          {t}
        </text>
      ))}
    </g>
  );
}

// ── Right-pointing arrow ───────────────────────────────────────────────────────
function Arrow({ x1, x2, y }) {
  return (
    <line x1={x1} y1={y} x2={x2} y2={y}
      stroke="#3f3f46" strokeWidth={2}
      markerEnd="url(#ahP)" />
  );
}

// ── Step badge ────────────────────────────────────────────────────────────────
function StepBadge({ cx, y, n, color }) {
  return (
    <g>
      <circle cx={cx} cy={y} r={11} fill={color} fillOpacity="0.2" stroke={color} strokeWidth={1.2} />
      <text x={cx} y={y} textAnchor="middle" dominantBaseline="central"
        fill={color} fontSize={9} fontWeight="800"
        fontFamily="Inter, system-ui, sans-serif">
        {n}
      </text>
    </g>
  );
}

export default function PlantDiseaseDiagram() {
  const W = 780;
  const H = 310;

  // Node widths
  const nw = 194;
  const gap = 64;  // gap between nodes

  // X positions (3 nodes centred)
  const totalW = 3 * nw + 2 * gap;
  const startX = (W - totalW) / 2;

  const n1x = startX;              // Upload
  const n2x = startX + nw + gap;   // Analyze
  const n3x = startX + 2 * (nw + gap); // Diagnose

  const nodeY = 60;
  const midY = nodeY + NH / 2;
  const annY = nodeY + NH + 28;    // annotation top

  // Node center-xs for arrows and annotations
  const c1 = n1x + nw / 2;
  const c2 = n2x + nw / 2;
  const c3 = n3x + nw / 2;

  return (
    <div style={{ width: '100%', overflowX: 'auto' }}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        height="auto"
        style={{ display: 'block', background: '#09090e', borderRadius: 14 }}
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="gUpload" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0369a1" />
          </linearGradient>
          <linearGradient id="gGemini" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>
          <linearGradient id="gDiagnose" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#6d28d9" />
          </linearGradient>

          {/* Arrow marker */}
          <marker id="ahP" markerWidth="9" markerHeight="7"
            refX="8" refY="3.5" orient="auto">
            <polygon points="0 0.5, 8 3.5, 0 6.5" fill="#52525b" />
          </marker>

          {/* Dot grid */}
          <pattern id="dotsP" width="26" height="26" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.9" fill="#ffffff09" />
          </pattern>

          {/* Glow filter */}
          <filter id="glowP" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Background */}
        <rect width={W} height={H} fill="url(#dotsP)" />

        {/* ── Title strip ── */}
        <text x={W / 2} y={22} textAnchor="middle" dominantBaseline="central"
          fill="#71717a" fontSize={9} fontWeight="600"
          fontFamily="Inter, system-ui, sans-serif"
          letterSpacing="0.14em">
          FLORAVISION AI — 3-STAGE PIPELINE
        </text>

        {/* ── Step badges (above nodes) ── */}
        <StepBadge cx={c1} y={nodeY - 20} n="01" color="#38bdf8" />
        <StepBadge cx={c2} y={nodeY - 20} n="02" color="#4ade80" />
        <StepBadge cx={c3} y={nodeY - 20} n="03" color="#a78bfa" />

        {/* ── Pipeline nodes ── */}
        <Pill x={n1x} y={nodeY} w={nw} fill="url(#gUpload)"   label="UPLOAD"   sublabel="React Frontend" />
        <Pill x={n2x} y={nodeY} w={nw} fill="url(#gGemini)"   label="ANALYZE"  sublabel="FastAPI + Gemini" />
        <Pill x={n3x} y={nodeY} w={nw} fill="url(#gDiagnose)" label="DIAGNOSE&#10;& RESPOND" sublabel="Structured Result" />

        {/* ── Connecting arrows ── */}
        <Arrow x1={n1x + nw + 3} x2={n2x - 3} y={midY} />
        <Arrow x1={n2x + nw + 3} x2={n3x - 3} y={midY} />

        {/* Arrow labels */}
        <text x={(n1x + nw + n2x) / 2} y={midY - 10}
          textAnchor="middle" fill="#52525b" fontSize={8}
          fontFamily="Inter, system-ui, sans-serif" letterSpacing="0.05em">
          image payload
        </text>
        <text x={(n2x + nw + n3x) / 2} y={midY - 10}
          textAnchor="middle" fill="#52525b" fontSize={8}
          fontFamily="Inter, system-ui, sans-serif" letterSpacing="0.05em">
          JSON response
        </text>

        {/* ── Annotation boxes (below nodes) ── */}
        <Annotation cx={c1} y={annY} accent="#38bdf8" lines={[
          'React drag-and-drop UI',
          'Image captured & sent',
          'via REST API POST',
        ]} />
        <Annotation cx={c2} y={annY} accent="#4ade80" lines={[
          'FastAPI receives image',
          'Calls Gemini Vision API',
          'Parses structured output',
        ]} />
        <Annotation cx={c3} y={annY} accent="#a78bfa" lines={[
          'Disease name + severity',
          'Confidence score',
          'Care recommendations',
        ]} />

        {/* ── Glow halos on nodes ── */}
        <rect x={n1x - 4} y={nodeY - 4} width={nw + 8} height={NH + 8}
          rx={NR + 4} fill="none" stroke="#38bdf820" strokeWidth={6} />
        <rect x={n2x - 4} y={nodeY - 4} width={nw + 8} height={NH + 8}
          rx={NR + 4} fill="none" stroke="#4ade8020" strokeWidth={6} />
        <rect x={n3x - 4} y={nodeY - 4} width={nw + 8} height={NH + 8}
          rx={NR + 4} fill="none" stroke="#a78bfa20" strokeWidth={6} />
      </svg>
    </div>
  );
}
