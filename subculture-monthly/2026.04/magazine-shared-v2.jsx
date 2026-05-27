// Shared primitives for the props-driven page components.
// All data-aware primitives (charts, heatmap, timeline) accept their data
// via props instead of reading globals — so the same primitive renders any
// month's data when you swap the ISSUE object.

// ─── Tone A — Classic Print tokens ──────────────────────────────────────────
const TONE_A = /*EDITMODE-BEGIN*/{
  "paper": "#FBFBFA",
  "ink":   "#1A1A1A",
  "red":   "#C44536",
  "muted": "rgba(26,26,26,0.55)",
  "hair":  "rgba(26,26,26,0.18)"
}/*EDITMODE-END*/;

// ─── PageFrame (1200x1600 canvas) ───────────────────────────────────────────
function PageFrame({
  bg = TONE_A.paper,
  ink = TONE_A.ink,
  grain = 4,
  pageNo = null,
  ofTotal = "VOL.01",
  rule = true,
  pageNoSide = "right",
  pageNoColor = null,
  children,
  style = {},
}) {
  return (
    <div
      style={{
        position: "relative",
        width: 1200,
        height: 1600,
        background: bg,
        color: ink,
        overflow: "hidden",
        fontFamily: "'Noto Serif KR','EB Garamond',serif",
        ...style,
      }}
    >
      {children}

      {grain > 0 && (
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            mixBlendMode: "multiply",
            opacity: grain / 100,
          }}
        >
          <filter id={`g-${pageNo || Math.random().toString(36).slice(2, 8)}`}>
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0" />
          </filter>
          <rect width="100%" height="100%" filter={`url(#g-${pageNo || Math.random().toString(36).slice(2, 8)})`} />
        </svg>
      )}

      {pageNo !== null && (
        <div
          style={{
            position: "absolute",
            bottom: 36,
            [pageNoSide]: 56,
            fontFamily: "'JetBrains Mono','IBM Plex Mono',monospace",
            fontSize: 11,
            letterSpacing: "0.08em",
            color: pageNoColor || ink,
            display: "flex",
            alignItems: "baseline",
            gap: 10,
            opacity: 0.85,
          }}
        >
          {pageNoSide === "left" && <span style={{ opacity: 0.5 }}>{ofTotal}</span>}
          <span style={{ fontSize: 14, fontWeight: 600 }}>{pageNo}</span>
          {pageNoSide === "right" && <span style={{ opacity: 0.5 }}>{ofTotal}</span>}
        </div>
      )}

      {rule && pageNo !== null && (
        <div
          style={{
            position: "absolute",
            bottom: 58,
            [pageNoSide]: 110,
            width: 240,
            height: 1,
            background: pageNoColor || ink,
            opacity: 0.35,
          }}
        />
      )}
    </div>
  );
}

// ─── SplashSlot — striped placeholder for "drop your image here" ────────────
function SplashSlot({
  width = "100%",
  height = "100%",
  bg = "#E4E4DF",
  stripe = "rgba(0,0,0,0.06)",
  ink = TONE_A.ink,
  caption = "CHARACTER SPLASH ART",
  sub = "1200 × 1600 · drop image",
  angle = -28,
}) {
  const id = "stripes-" + (caption + sub).replace(/[^a-z0-9]/gi, "").slice(0, 16);
  return (
    <div style={{ position: "relative", width, height, background: bg, overflow: "hidden" }}>
      <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
        <defs>
          <pattern id={id} patternUnits="userSpaceOnUse" width="14" height="14" patternTransform={`rotate(${angle})`}>
            <line x1="0" y1="0" x2="0" y2="14" stroke={stripe} strokeWidth="6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
      <div
        style={{
          position: "absolute",
          left: 24,
          bottom: 24,
          right: 24,
          fontFamily: "'JetBrains Mono',monospace",
          fontSize: 11,
          letterSpacing: "0.14em",
          color: ink,
          textTransform: "uppercase",
          lineHeight: 1.6,
          opacity: 0.55,
        }}
      >
        <div>{caption}</div>
        <div style={{ opacity: 0.7 }}>{sub}</div>
      </div>
    </div>
  );
}

// ─── RevLineChart — 3-month, N series ──────────────────────────────────────
// series item: { id, label, data: [n,n,n], ko?, iconUrl? }
// When ko/iconUrl are present the line-end label uses the Korean name and
// shows a small circular icon (the game's app icon).
function RevLineChart({
  width = 1100,
  height = 360,
  ink = TONE_A.ink,
  grid = TONE_A.hair,
  accent = TONE_A.red,
  months = ["MAR", "APR", "MAY"],
  series = [],
  highlight = [],
}) {
  const chartId = React.useId();
  // Right padding widened from 110 to 140 so the icon + Korean label fits.
  const pad = { l: 64, r: 140, t: 30, b: 36 };
  const W = width - pad.l - pad.r;
  const H = height - pad.t - pad.b;
  const allVals = series.flatMap((s) => s.data);
  const max = Math.ceil(Math.max(...allVals, 10) / 10) * 10;
  const min = 0;
  const x = (i) => pad.l + (W * i) / (months.length - 1);
  const y = (v) => pad.t + H - ((v - min) / (max - min)) * H;
  const ticks = [];
  for (let t = 0; t <= max; t += Math.max(10, Math.round(max / 5 / 10) * 10)) ticks.push(t);

  // Avoid stacking labels for non-highlighted series on top of each other.
  // Gap widened to 20 to make room for the 18px icon row.
  const ordered = series
    .map((s, i) => ({ ...s, _i: i, lastY: y(s.data[s.data.length - 1]) }))
    .sort((a, b) => a.lastY - b.lastY);
  const minGap = 20;
  for (let i = 1; i < ordered.length; i++) {
    if (ordered[i].lastY - ordered[i - 1].lastY < minGap) ordered[i].lastY = ordered[i - 1].lastY + minGap;
  }

  return (
    <svg width={width} height={height} style={{ display: "block" }}>
      {ticks.map((t) => (
        <g key={t}>
          <line x1={pad.l} x2={pad.l + W} y1={y(t)} y2={y(t)} stroke={grid} strokeWidth="1" />
          <text x={pad.l - 10} y={y(t) + 3} fontFamily="'JetBrains Mono',monospace" fontSize="10" textAnchor="end" fill={ink} opacity="0.6">
            {`$${t}M`}
          </text>
        </g>
      ))}
      {months.map((m, i) => (
        <text key={m} x={x(i)} y={pad.t + H + 22} fontFamily="'JetBrains Mono',monospace" fontSize="10" textAnchor="middle" fill={ink} opacity="0.7" letterSpacing="2">
          {m}
        </text>
      ))}
      {series.map((g, i) => {
        const data = g.data;
        const isHi = highlight.includes(g.id);
        const lvl = [0.92, 0.78, 0.64, 0.5, 0.36, 0.22][i] ?? 0.4;
        const stroke = isHi ? accent : `rgba(0,0,0,${lvl})`;
        const sw = isHi ? 2 : 1;
        const d = data.map((v, j) => `${j === 0 ? "M" : "L"}${x(j)},${y(v)}`).join(" ");
        const labelY = ordered.find((o) => o._i === i).lastY;
        const lineEnd = x(months.length - 1);
        const hasIcon = !!g.iconUrl;
        const labelText = g.ko || g.label;
        const iconR = 9;
        const iconCx = lineEnd + 13 + iconR;
        const clipId = `${chartId}-clip-${g.id}`;
        return (
          <g key={g.id}>
            <path d={d} fill="none" stroke={stroke} strokeWidth={sw} />
            {data.map((v, j) => (
              <circle key={j} cx={x(j)} cy={y(v)} r={isHi ? 3 : 2} fill={stroke} />
            ))}
            {hasIcon && (
              <React.Fragment>
                <defs>
                  <clipPath id={clipId}>
                    <circle cx={iconCx} cy={labelY} r={iconR} />
                  </clipPath>
                </defs>
                <image
                  href={g.iconUrl}
                  x={iconCx - iconR}
                  y={labelY - iconR}
                  width={iconR * 2}
                  height={iconR * 2}
                  clipPath={`url(#${clipId})`}
                  preserveAspectRatio="xMidYMid slice"
                />
                <circle
                  cx={iconCx} cy={labelY} r={iconR + 0.5}
                  fill="none" stroke={stroke}
                  strokeWidth={isHi ? 1.2 : 0.6}
                  opacity={isHi ? 0.9 : 0.55}
                />
              </React.Fragment>
            )}
            <text
              x={lineEnd + (hasIcon ? 36 : 12)}
              y={labelY + 4}
              fontFamily={g.ko ? "'Noto Serif KR','EB Garamond',serif" : "'JetBrains Mono',monospace"}
              fontSize={g.ko ? 12 : 10}
              fill={stroke}
              opacity={isHi ? 1 : 0.85}
              fontWeight={isHi ? 600 : 500}
            >
              {labelText}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

// ─── GenderDonut — donut with center total ─────────────────────────────────
function GenderDonut({
  size = 280,
  ink = TONE_A.ink,
  accent = TONE_A.red,
  muted = "rgba(0,0,0,0.18)",
  data = [],   // [{label, en, v}]
}) {
  const cx = size / 2, cy = size / 2, r = size * 0.36, rIn = r * 0.62;
  const total = data.reduce((s, d) => s + d.v, 0);
  let a0 = -Math.PI / 2;
  const tones = [ink, "rgba(0,0,0,0.45)", muted];
  return (
    <svg width={size} height={size}>
      {data.map((d, i) => {
        const a1 = a0 + (d.v / total) * Math.PI * 2;
        const large = a1 - a0 > Math.PI ? 1 : 0;
        const p1 = [cx + r * Math.cos(a0), cy + r * Math.sin(a0)];
        const p2 = [cx + r * Math.cos(a1), cy + r * Math.sin(a1)];
        const p3 = [cx + rIn * Math.cos(a1), cy + rIn * Math.sin(a1)];
        const p4 = [cx + rIn * Math.cos(a0), cy + rIn * Math.sin(a0)];
        const path = `M${p1} A${r},${r} 0 ${large} 1 ${p2} L${p3} A${rIn},${rIn} 0 ${large} 0 ${p4} Z`;
        const am = (a0 + a1) / 2;
        const lx = cx + (r + 14) * Math.cos(am);
        const ly = cy + (r + 14) * Math.sin(am);
        a0 = a1;
        return (
          <g key={d.label}>
            <path d={path} fill={tones[i] || muted} />
            <text x={lx} y={ly} fontFamily="'JetBrains Mono',monospace" fontSize="10" textAnchor={lx < cx ? "end" : "start"} fill={ink} opacity="0.75">
              {`${d.en} ${Math.round((d.v / total) * 100)}%`}
            </text>
          </g>
        );
      })}
      <text x={cx} y={cy - 2} textAnchor="middle" fontFamily="'EB Garamond',serif" fontSize="28" fill={ink}>{total}</text>
      <text x={cx} y={cy + 14} textAnchor="middle" fontFamily="'JetBrains Mono',monospace" fontSize="9" fill={ink} opacity="0.6" letterSpacing="1.5">NEW UNITS</text>
    </svg>
  );
}

// ─── Heatmap — N rows × M cols ──────────────────────────────────────────────
function Heatmap({
  ink = TONE_A.ink,
  bg = TONE_A.paper,
  inverted = false,
  accent = TONE_A.red,
  cell = 62,
  cols = [],            // ["Pyro", ...]
  rows = [],            // [{label, values: [n, n, n, ...]}]
  max = 4,
}) {
  const tone = (v) => {
    if (inverted) {
      const t = v / max;
      return `rgba(232,226,213,${0.08 + t * 0.7})`;
    }
    const t = v / max;
    return `rgba(0,0,0,${0.06 + t * 0.65})`;
  };
  return (
    <svg width={cell * cols.length + 90} height={cell * rows.length + 24}>
      {cols.map((c, j) => (
        <text key={c} x={90 + cell * j + cell / 2} y={14} fontFamily="'JetBrains Mono',monospace" fontSize="9" textAnchor="middle" fill={ink} opacity="0.7" letterSpacing="1">
          {c.toUpperCase()}
        </text>
      ))}
      {rows.map((r, i) => (
        <g key={r.label} transform={`translate(0, ${24 + i * cell})`}>
          <text x={82} y={cell / 2 + 4} fontFamily="'JetBrains Mono',monospace" fontSize="10" textAnchor="end" fill={ink} opacity="0.85">
            {r.label}
          </text>
          {r.values.map((v, j) => (
            <g key={j}>
              <rect x={90 + cell * j} y={0} width={cell - 2} height={cell - 2} fill={tone(v)} />
              <text
                x={90 + cell * j + (cell - 2) / 2}
                y={cell / 2 + 4}
                fontFamily="'JetBrains Mono',monospace"
                fontSize="11"
                textAnchor="middle"
                fill={v >= Math.ceil(max * 0.65) ? (inverted ? "#1B1B1B" : "#F1F1ED") : ink}
                opacity={v === 0 ? 0.35 : 1}
              >
                {v}
              </text>
            </g>
          ))}
        </g>
      ))}
    </svg>
  );
}

// ─── PickupTimeline — 3 lanes of horizontal bars ────────────────────────────
function PickupTimeline({
  ink = TONE_A.ink,
  grid = TONE_A.hair,
  accent = TONE_A.red,
  width = 520,
  height = 160,
  lanes = [],
}) {
  const rowH = 36;
  return (
    <svg width={width} height={height} style={{ display: "block" }}>
      {lanes.map((ln, i) => (
        <g key={ln.m} transform={`translate(0, ${i * rowH + 14})`}>
          <text x={0} y={14} fontFamily="'JetBrains Mono',monospace" fontSize="10" fill={ink} opacity="0.7" letterSpacing="1.5">{ln.m}</text>
          <line x1={48} y1={11} x2={width - 10} y2={11} stroke={grid} strokeWidth="1" />
          {ln.items.map((it, j) => {
            const x = 48 + (width - 58) * it.x0;
            const w = (width - 58) * it.w;
            return (
              <g key={j}>
                <rect x={x} y={4} width={w} height={14} fill={it.highlight ? accent : "rgba(0,0,0,0.62)"} />
                <text x={x} y={32} fontFamily="'JetBrains Mono',monospace" fontSize="9" fill={ink} opacity={it.highlight ? 1 : 0.7} fontWeight={it.highlight ? 600 : 400}>
                  {it.label}
                </text>
              </g>
            );
          })}
        </g>
      ))}
    </svg>
  );
}

// ─── Small folio header used by inner pages ─────────────────────────────────
function FolioHeader({ left, right, ink = TONE_A.ink, accent = TONE_A.red }) {
  return (
    <>
      <div style={{ position: "absolute", top: 40, left: 56, right: 56, display: "flex", justifyContent: "space-between", fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: ink, opacity: 0.85 }}>
        <span style={{ color: accent }}>{left}</span>
        <span>{right}</span>
      </div>
      <div style={{ position: "absolute", top: 64, left: 56, right: 56, height: 1, background: ink, opacity: 0.4 }} />
    </>
  );
}

// ─── SectionTitle — top headline block used by inner pages ──────────────────
function SectionTitle({ section, headline, sub, accent = TONE_A.red, ink = TONE_A.ink, maxWidth = 900 }) {
  return (
    <div style={{ position: "absolute", top: 92, left: 56, right: 56 }}>
      {section && (
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.22em", color: accent, textTransform: "uppercase", marginBottom: 8 }}>
          {section}
        </div>
      )}
      <h1 style={{ fontFamily: "'EB Garamond',serif", fontSize: 64, lineHeight: 0.98, margin: 0, color: ink, letterSpacing: "-0.02em", fontWeight: 500 }}>
        {headline.pre}
        <br />
        <span style={{ fontStyle: "italic", color: accent }}>{headline.emphasis}</span>
      </h1>
      {sub && (
        <div style={{ marginTop: 14, maxWidth, fontFamily: "'Noto Serif KR',serif", fontSize: 16, lineHeight: 1.55, color: ink, opacity: 0.82, textWrap: "pretty" }}>
          {sub}
        </div>
      )}
    </div>
  );
}

// ─── Zoomable — wrap any block so users can tap/click to enlarge it ───────
// Touch on iPad: page-flip's native touchstart listener on the book element
// runs during bubble before any React handler attached at the React root, so
// React's onTouchStart/onClick can't actually block page-flip from
// preventDefault-ing the touch (which suppresses the synthesized click).
// To beat that timing we attach native listeners directly to this element via
// a ref — they fire first during bubble and we trigger the zoom from touchend
// when the gesture is a tap (small total movement).
function Zoomable({ label = "", children, style = {}, className = "" }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let tap = null;
    const fire = (target) => {
      if (typeof window === "undefined" || !window.openZoom) return;
      window.openZoom(target, label);
    };
    const onTouchStart = (e) => {
      e.stopPropagation();
      const t = e.touches && e.touches[0];
      tap = t ? { x: t.clientX, y: t.clientY, ok: true } : null;
    };
    const onTouchMove = (e) => {
      if (!tap || !tap.ok) return;
      const t = e.touches && e.touches[0];
      if (!t) return;
      if (Math.hypot(t.clientX - tap.x, t.clientY - tap.y) > 12) tap.ok = false;
    };
    const onTouchEnd = (e) => {
      if (tap && tap.ok) {
        e.stopPropagation();
        e.preventDefault();
        fire(el);
      }
      tap = null;
    };
    const onMouseDown = (e) => e.stopPropagation();
    const onClick = (e) => {
      e.stopPropagation();
      fire(el);
    };
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove",  onTouchMove,  { passive: true });
    el.addEventListener("touchend",   onTouchEnd);
    el.addEventListener("mousedown",  onMouseDown);
    el.addEventListener("click",      onClick);
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove",  onTouchMove);
      el.removeEventListener("touchend",   onTouchEnd);
      el.removeEventListener("mousedown",  onMouseDown);
      el.removeEventListener("click",      onClick);
    };
  }, [label]);

  return (
    <div
      ref={ref}
      className={`zoomable ${className}`}
      data-zoom-label={label}
      style={{ cursor: "zoom-in", ...style }}
    >
      {children}
    </div>
  );
}

// ─── MiniRevTrend — small 3-month bar chart for character body pages ───────
// Cleaner: no Y-axis ticks, value above each bar in $93M form, MoM badge
// floated top-right with its own label, month axis below. No more collisions.
function MiniRevTrend({
  width = 460,
  height = 170,
  ink = TONE_A.ink,
  accent = TONE_A.red,
  hair = TONE_A.hair,
  paper = TONE_A.paper,
  months = ["FEB", "MAR", "APR"],
  values = [0, 0, 0],
  highlight = 2,
  unit = "$M",
}) {
  // Split unit like "$M" → prefix "$" + suffix "M" so we render "$93M" instead of "$M93".
  const sym = /[$₩€¥£]/.test(unit && unit[0]) ? unit[0] : "$";
  const suf = unit && unit.length > 1 ? unit.slice(1) : "M";

  const pad = { l: 14, r: 14, t: 48, b: 36 };
  const W = width - pad.l - pad.r;
  const H = height - pad.t - pad.b;
  const max = Math.ceil(Math.max(...values, 10) / 10) * 10;
  const x = (i) => pad.l + (W * (i + 0.5)) / months.length;
  const y = (v) => pad.t + H - (v / max) * H;
  const barW = (W / months.length) * 0.5;

  const prev = values[values.length - 2] || 0;
  const curr = values[values.length - 1] || 0;
  const mom = prev > 0 ? Math.round(((curr - prev) / prev) * 100) : 0;

  return (
    <svg width={width} height={height} style={{ display: "block" }}>
      {/* baseline */}
      <line x1={pad.l} x2={pad.l + W} y1={y(0)} y2={y(0)} stroke={ink} strokeWidth="1" opacity="0.35" />

      {/* MoM badge — anchored top-right, two-line so it never collides with bar labels */}
      <g transform={`translate(${width - pad.r}, 14)`}>
        <text textAnchor="end" fontFamily="'JetBrains Mono',monospace" fontSize="10"
              letterSpacing="1.6" fill={ink} opacity="0.55">
          MOM
        </text>
        <text x="0" y="18" textAnchor="end" fontFamily="'JetBrains Mono',monospace"
              fontSize="17" fontWeight="700" fill={mom >= 0 ? accent : ink}>
          {`${mom >= 0 ? "+" : ""}${mom}%`}
        </text>
      </g>

      {/* bars + value labels + month labels */}
      {values.map((v, i) => {
        const isHi = i === highlight;
        const cx = x(i);
        const valLabel = `${sym}${v}${suf}`;
        return (
          <g key={i}>
            <rect
              x={cx - barW / 2}
              y={y(v)}
              width={barW}
              height={y(0) - y(v)}
              fill={isHi ? accent : "rgba(0,0,0,0.2)"}
            />
            <text
              x={cx}
              y={y(v) - 10}
              textAnchor="middle"
              fontFamily="'JetBrains Mono',monospace"
              fontSize={isHi ? 15 : 13}
              fontWeight={isHi ? 700 : 500}
              fill={isHi ? accent : ink}
              opacity={isHi ? 1 : 0.72}
            >
              {valLabel}
            </text>
            <text
              x={cx}
              y={pad.t + H + 22}
              textAnchor="middle"
              fontFamily="'JetBrains Mono',monospace"
              fontSize="12"
              letterSpacing="1.8"
              fontWeight={isHi ? 700 : 400}
              fill={ink}
              opacity={isHi ? 1 : 0.6}
            >
              {months[i]}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

Object.assign(window, {
  TONE_A,
  PageFrame, SplashSlot,
  RevLineChart, GenderDonut, Heatmap, PickupTimeline,
  MiniRevTrend, Zoomable,
  FolioHeader, SectionTitle,
});
