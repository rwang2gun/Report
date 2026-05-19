// Page-type components — back half (P.15 ─ P.19)
// All props-driven. Same component renders any month's data.

// ═══════════════════════════════════════════════════════════════════════════
// <CrossAnalysisPage {...crossAnalysis} meta={...} />
// P.15 — 5 trends × 6 titles matrix + dos/don'ts
// ═══════════════════════════════════════════════════════════════════════════
function CrossAnalysisPage({ meta, section, headline, sub, trends, matrix, dosDonts }) {
  const T = TONE_A;
  return (
    <PageFrame bg={T.paper} ink={T.ink} grain={1} pageNo="P.15" pageNoSide="left" ofTotal={meta.issue}>
      <FolioHeader left="SECTION · CROSS-GAME" right={`SUBCULTURE MONTHLY · ${meta.issue}`} />
      <SectionTitle section={section} headline={headline} sub={sub} accent={T.red} ink={T.ink} maxWidth={840} />

      {/* 5 trend cards */}
      <div style={{ position: "absolute", top: 410, left: 56, right: 56 }}>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.22em", color: T.red, textTransform: "uppercase", marginBottom: 8 }}>
          FIG. X.1 · Five Trends
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 0, borderTop: `2px solid ${T.ink}`, borderBottom: `1px solid ${T.hair}` }}>
          {trends.map((t, i) => (
            <div key={t.n} style={{ padding: "16px 14px", borderRight: i < trends.length - 1 ? `1px solid ${T.hair}` : "none" }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.2em", color: T.red, fontWeight: 600 }}>
                {t.n}
              </div>
              <div style={{ marginTop: 6, fontFamily: "'EB Garamond',serif", fontSize: 22, lineHeight: 1.1, color: T.ink, letterSpacing: "-0.01em", minHeight: 50 }}>
                {t.head}
              </div>
              <div style={{ marginTop: 6, fontFamily: "'Noto Serif KR',serif", fontSize: 12.5, lineHeight: 1.55, color: T.ink, opacity: 0.82, textWrap: "pretty" }}>
                {t.why}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Matrix */}
      <div style={{ position: "absolute", top: 660, left: 56, right: 56 }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 6 }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.22em", color: T.red, textTransform: "uppercase" }}>
            {matrix.label}
          </div>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, color: T.muted, letterSpacing: "0.12em" }}>● = observed</div>
        </div>
        <CrossMatrix cols={matrix.cols} rows={matrix.rows} ink={T.ink} accent={T.red} hair={T.hair} muted={T.muted} />
      </div>

      {/* Do / Don't */}
      <div style={{ position: "absolute", left: 56, right: 56, bottom: 110, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
        <div style={{ border: `1px solid ${T.hair}`, padding: "20px 22px", background: "rgba(255,255,255,0.4)" }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.22em", color: T.ink, fontWeight: 600 }}>● DO</div>
          <ul style={{ listStyle: "none", padding: 0, margin: "10px 0 0 0", fontFamily: "'Noto Serif KR',serif", fontSize: 14, lineHeight: 1.55, color: T.ink, opacity: 0.88 }}>
            {dosDonts.dos.map((d, i) => (
              <li key={i} style={{ display: "flex", gap: 10, padding: "5px 0", borderBottom: i < dosDonts.dos.length - 1 ? `1px solid ${T.hair}` : "none" }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", color: T.ink, opacity: 0.6, flex: "0 0 28px" }}>{String(i + 1).padStart(2, "0")}</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ border: `1px solid ${T.red}`, padding: "20px 22px", background: T.red, color: T.paper }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.22em", color: T.paper, fontWeight: 600 }}>○ DON&apos;T</div>
          <ul style={{ listStyle: "none", padding: 0, margin: "10px 0 0 0", fontFamily: "'Noto Serif KR',serif", fontSize: 14, lineHeight: 1.55, color: T.paper }}>
            {dosDonts.donts.map((d, i) => (
              <li key={i} style={{ display: "flex", gap: 10, padding: "5px 0", borderBottom: i < dosDonts.donts.length - 1 ? "1px solid rgba(250,246,236,0.25)" : "none" }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", color: T.paper, opacity: 0.6, flex: "0 0 28px" }}>{String(i + 1).padStart(2, "0")}</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageFrame>
  );
}

function CrossMatrix({ cols, rows, ink, accent, hair, muted }) {
  const cellW = 100;
  const labelW = 200;
  const rowH = 38;
  return (
    <div style={{ borderTop: `2px solid ${ink}` }}>
      <div style={{ display: "grid", gridTemplateColumns: `${labelW}px repeat(${cols.length}, ${cellW}px) 1fr`, alignItems: "center", height: 32, fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.18em", color: muted, textTransform: "uppercase" }}>
        <span>TITLE</span>
        {cols.map((c) => (
          <span key={c} style={{ textAlign: "center", color: accent, fontWeight: 600 }}>{c}</span>
        ))}
        <span style={{ paddingLeft: 12, color: muted }}>OBSERVED COUNT</span>
      </div>
      {rows.map((r) => {
        const count = r.values.reduce((s, v) => s + v, 0);
        return (
          <div key={r.id} style={{ display: "grid", gridTemplateColumns: `${labelW}px repeat(${cols.length}, ${cellW}px) 1fr`, alignItems: "center", height: rowH, borderTop: `1px solid ${hair}`, fontFamily: "'EB Garamond',serif", fontSize: 18, color: ink }}>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: "0.1em", fontWeight: 600 }}>{r.label}</span>
            {r.values.map((v, j) => (
              <span key={j} style={{ textAlign: "center", color: v ? accent : muted, fontSize: v ? 20 : 14 }}>{v ? "●" : "○"}</span>
            ))}
            <span style={{ paddingLeft: 12, fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: ink, opacity: 0.7 }}>
              {count} / {cols.length}
            </span>
          </div>
        );
      })}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// <IndustryDeskPage {...industry} meta={...} />
// P.16 — studios · upcoming · regulations
// ═══════════════════════════════════════════════════════════════════════════
function IndustryDeskPage({ meta, section, headline, sub, studios, upcoming, regulations }) {
  const T = TONE_A;
  return (
    <PageFrame bg={T.paper} ink={T.ink} grain={1} pageNo="P.16" pageNoSide="right" ofTotal={meta.issue}>
      <FolioHeader left="SECTION · INDUSTRY DESK" right={`SUBCULTURE MONTHLY · ${meta.issue}`} />
      <SectionTitle section={section} headline={headline} sub={sub} accent={T.red} ink={T.ink} maxWidth={820} />

      {/* Studios */}
      <div style={{ position: "absolute", top: 410, left: 56, right: 56 }}>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.22em", color: T.red, textTransform: "uppercase", marginBottom: 6 }}>
          FIG. I.1 · Studios in Motion
        </div>
        <div style={{ borderTop: `2px solid ${T.ink}` }}>
          {studios.map((s, i) => {
            const tone = s.change === "+" ? T.ink : s.change === "-" ? T.red : T.muted;
            return (
              <div key={s.name} style={{ display: "grid", gridTemplateColumns: "44px 230px 1fr", alignItems: "center", padding: "10px 0", borderBottom: `1px solid ${T.hair}`, gap: 14 }}>
                <span style={{ fontFamily: "'EB Garamond',serif", fontSize: 32, lineHeight: 1, color: tone, fontWeight: 500, textAlign: "center" }}>
                  {s.change}
                </span>
                <div>
                  <div style={{ fontFamily: "'EB Garamond',serif", fontSize: 22, color: T.ink, letterSpacing: "-0.01em" }}>{s.name}</div>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: T.muted, letterSpacing: "0.12em" }}>{s.ko}</div>
                </div>
                <div style={{ fontFamily: "'Noto Serif KR',serif", fontSize: 14, lineHeight: 1.5, color: T.ink, opacity: 0.85 }}>
                  {s.note}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Upcoming + Regulations side-by-side */}
      <div style={{ position: "absolute", left: 56, right: 56, top: 900, display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 28 }}>
        <div>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.22em", color: T.red, textTransform: "uppercase", marginBottom: 6 }}>
            FIG. I.2 · Upcoming · 다음 90일
          </div>
          <div style={{ borderTop: `2px solid ${T.ink}` }}>
            {upcoming.map((u, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "60px 1fr", padding: "10px 0", borderBottom: `1px solid ${T.hair}`, alignItems: "baseline", gap: 14 }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.16em", color: T.red, fontWeight: 600 }}>
                  {u.when}
                </span>
                <div>
                  <div style={{ fontFamily: "'EB Garamond',serif", fontSize: 20, color: T.ink, letterSpacing: "-0.01em" }}>{u.title}</div>
                  <div style={{ fontFamily: "'Noto Serif KR',serif", fontSize: 13, color: T.ink, opacity: 0.78, marginTop: 2 }}>{u.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.22em", color: T.red, textTransform: "uppercase", marginBottom: 6 }}>
            FIG. I.3 · Regulations Watch
          </div>
          <div style={{ borderTop: `2px solid ${T.ink}`, background: "rgba(255,255,255,0.4)" }}>
            {regulations.map((r, i) => (
              <div key={r.region} style={{ padding: "11px 12px", borderBottom: i < regulations.length - 1 ? `1px solid ${T.hair}` : "none" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.2em", color: T.red, fontWeight: 600 }}>{r.region}</span>
                  <span style={{ fontFamily: "'EB Garamond',serif", fontSize: 16, color: T.ink, fontStyle: "italic" }}>{r.ko}</span>
                </div>
                <div style={{ marginTop: 3, fontFamily: "'Noto Serif KR',serif", fontSize: 13, color: T.ink, opacity: 0.8, lineHeight: 1.5 }}>
                  {r.line}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageFrame>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// <CommunityPulsePage {...community} meta={...} />
// P.17 — events · director letter · fan works
// ═══════════════════════════════════════════════════════════════════════════
function CommunityPulsePage({ meta, section, headline, sub, events, directorLetter, fanWorks }) {
  const T = TONE_A;
  return (
    <PageFrame bg={T.paper} ink={T.ink} grain={1} pageNo="P.17" pageNoSide="left" ofTotal={meta.issue}>
      <FolioHeader left="SECTION · COMMUNITY PULSE" right={`SUBCULTURE MONTHLY · ${meta.issue}`} />
      <SectionTitle section={section} headline={headline} sub={sub} accent={T.red} ink={T.ink} maxWidth={820} />

      {/* Events */}
      <div style={{ position: "absolute", top: 410, left: 56, right: 56 }}>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.22em", color: T.red, textTransform: "uppercase", marginBottom: 6 }}>
          FIG. C.1 · Five Events · MAY 2026
        </div>
        <div style={{ borderTop: `2px solid ${T.ink}` }}>
          {events.map((e, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "100px 1fr 200px 160px", gap: 16, alignItems: "baseline", padding: "11px 0", borderBottom: `1px solid ${T.hair}` }}>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: "0.14em", color: T.red, fontWeight: 600 }}>{e.when}</span>
              <span style={{ fontFamily: "'EB Garamond',serif", fontSize: 22, color: T.ink, letterSpacing: "-0.01em" }}>{e.title}</span>
              <span style={{ fontFamily: "'Noto Serif KR',serif", fontSize: 13, color: T.ink, opacity: 0.75 }}>{e.where}</span>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: T.ink, textAlign: "right", letterSpacing: "0.08em" }}>{e.scale}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Director letter + fan works */}
      <div style={{ position: "absolute", left: 56, right: 56, top: 820, display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 28 }}>
        <div style={{ background: T.ink, color: T.paper, padding: "26px 28px 28px", position: "relative" }}>
          <div style={{ position: "absolute", top: -10, left: 18, fontFamily: "'EB Garamond',serif", fontSize: 88, lineHeight: 1, color: T.red, fontStyle: "italic" }}>“</div>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.22em", color: T.red, textTransform: "uppercase", marginTop: 36 }}>
            {directorLetter.head}
          </div>
          <div style={{ marginTop: 4, fontFamily: "'EB Garamond',serif", fontSize: 22, color: T.paper, fontStyle: "italic" }}>
            {directorLetter.from}
          </div>
          <div style={{ marginTop: 14, fontFamily: "'Noto Serif KR',serif", fontSize: 16, lineHeight: 1.65, color: T.paper, textWrap: "pretty" }}>
            {directorLetter.body}
          </div>
          <div style={{ marginTop: 18, fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.16em", color: T.paper, opacity: 0.65 }}>
            — {directorLetter.footer}
          </div>
        </div>
        <div>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.22em", color: T.red, textTransform: "uppercase", marginBottom: 6 }}>
            FIG. C.2 · Fan Works · 이번 호 픽
          </div>
          <div style={{ borderTop: `2px solid ${T.ink}` }}>
            {fanWorks.map((f, i) => (
              <div key={i} style={{ padding: "11px 0", borderBottom: `1px solid ${T.hair}` }}>
                <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 10 }}>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.18em", color: T.red, fontWeight: 600 }}>{f.kind}</span>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: T.muted, letterSpacing: "0.1em" }}>{f.by}</span>
                </div>
                <div style={{ marginTop: 3, fontFamily: "'EB Garamond',serif", fontSize: 19, color: T.ink, letterSpacing: "-0.01em" }}>
                  {f.title}
                </div>
                <div style={{ marginTop: 1, fontFamily: "'Noto Serif KR',serif", fontSize: 12, color: T.ink, opacity: 0.7 }}>
                  {f.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageFrame>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// <WatchlistPage items={[...]} meta={...} />
// P.18 — next month's 5 slots
// ═══════════════════════════════════════════════════════════════════════════
function WatchlistPage({ meta, section, headline, sub, items }) {
  const T = TONE_A;
  return (
    <PageFrame bg={T.paper} ink={T.ink} grain={1} pageNo="P.18" pageNoSide="right" ofTotal={meta.issue}>
      <FolioHeader left="SECTION · WATCHLIST" right={`SUBCULTURE MONTHLY · ${meta.issue}`} />
      <SectionTitle section={section} headline={headline} sub={sub} accent={T.red} ink={T.ink} maxWidth={820} />

      <div style={{ position: "absolute", top: 410, left: 56, right: 56 }}>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.22em", color: T.red, textTransform: "uppercase", marginBottom: 8 }}>
          FIG. W · Five Slots to Watch · JUN 2026
        </div>
        <div style={{ borderTop: `2px solid ${T.ink}` }}>
          {items.map((it, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "60px 1fr 200px", gap: 18, padding: "20px 0 22px", borderBottom: `1px solid ${T.hair}`, alignItems: "baseline" }}>
              <span style={{ fontFamily: "'EB Garamond',serif", fontSize: 56, lineHeight: 1, color: T.red, fontWeight: 500, letterSpacing: "-0.02em" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                  <span style={{ fontFamily: "'EB Garamond',serif", fontSize: 32, color: T.ink, letterSpacing: "-0.02em", fontWeight: 500 }}>{it.name}</span>
                  <span style={{ fontFamily: "'EB Garamond',serif", fontStyle: "italic", fontSize: 18, color: T.red }}>/ {it.game}</span>
                </div>
                <div style={{ marginTop: 6, fontFamily: "'Noto Serif KR',serif", fontSize: 15, color: T.ink, opacity: 0.85, lineHeight: 1.55, textWrap: "pretty", maxWidth: 700 }}>
                  {it.why}
                </div>
              </div>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.14em", color: T.ink, textAlign: "right" }}>
                <span style={{ color: T.muted }}>WHEN</span><br/>
                <span style={{ fontWeight: 600 }}>{it.when}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 110, left: 56, right: 56, padding: "16px 20px", background: T.ink, color: T.paper, display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase" }}>
        <span><span style={{ color: T.red }}>NEXT</span> · 다음 호 발행일 · 2026.06.10</span>
        <span style={{ color: "rgba(245,241,232,0.65)" }}>다섯 슬롯에서 다음 트렌드가 결정된다</span>
      </div>
    </PageFrame>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// <ColophonPage {...colophon} meta={...} />
// P.19 — sources · methodology · limits · masthead
// ═══════════════════════════════════════════════════════════════════════════
function ColophonPage({ meta, section, headline, sub, sources, methodology, limits, masthead, issn, next }) {
  const T = TONE_A;
  return (
    <PageFrame bg={T.paper} ink={T.ink} grain={1} pageNo="P.19" pageNoSide="left" ofTotal={meta.issue}>
      <FolioHeader left="SECTION · COLOPHON" right={`SUBCULTURE MONTHLY · ${meta.issue}`} />
      <SectionTitle section={section} headline={headline} sub={sub} accent={T.red} ink={T.ink} maxWidth={820} />

      {/* Sources */}
      <div style={{ position: "absolute", top: 410, left: 56, right: 56 }}>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.22em", color: T.red, textTransform: "uppercase", marginBottom: 6 }}>
          01 · SOURCES · 출처
        </div>
        <div style={{ borderTop: `2px solid ${T.ink}` }}>
          {sources.map((s, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "180px 1fr 1fr", gap: 18, padding: "10px 0", borderBottom: `1px solid ${T.hair}`, alignItems: "baseline" }}>
              <span style={{ fontFamily: "'EB Garamond',serif", fontSize: 18, color: T.ink, letterSpacing: "-0.01em" }}>{s.label}</span>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: T.red, letterSpacing: "0.08em" }}>{s.from}</span>
              <span style={{ fontFamily: "'Noto Serif KR',serif", fontSize: 13, color: T.ink, opacity: 0.78, lineHeight: 1.55 }}>{s.note}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Methodology + Limits */}
      <div style={{ position: "absolute", left: 56, right: 56, top: 720, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
        <div>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.22em", color: T.red, textTransform: "uppercase", marginBottom: 6 }}>
            02 · METHODOLOGY · 방법
          </div>
          <ol style={{ paddingLeft: 0, margin: 0, listStyle: "none", borderTop: `2px solid ${T.ink}` }}>
            {methodology.map((m, i) => (
              <li key={i} style={{ display: "flex", gap: 10, padding: "9px 0", borderBottom: `1px solid ${T.hair}`, fontFamily: "'Noto Serif KR',serif", fontSize: 13.5, color: T.ink, opacity: 0.85, lineHeight: 1.55 }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", color: T.red, flex: "0 0 28px" }}>{String(i + 1).padStart(2, "0")}</span>
                <span>{m}</span>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.22em", color: T.red, textTransform: "uppercase", marginBottom: 6 }}>
            03 · LIMITS · 한계
          </div>
          <ol style={{ paddingLeft: 0, margin: 0, listStyle: "none", borderTop: `2px solid ${T.ink}` }}>
            {limits.map((m, i) => (
              <li key={i} style={{ display: "flex", gap: 10, padding: "9px 0", borderBottom: `1px solid ${T.hair}`, fontFamily: "'Noto Serif KR',serif", fontSize: 13.5, color: T.ink, opacity: 0.85, lineHeight: 1.55 }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", color: T.red, flex: "0 0 28px" }}>{String(i + 1).padStart(2, "0")}</span>
                <span>{m}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Masthead */}
      <div style={{ position: "absolute", left: 56, right: 56, bottom: 200 }}>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.22em", color: T.red, textTransform: "uppercase", marginBottom: 6 }}>
          04 · MASTHEAD · 편집부
        </div>
        <div style={{ borderTop: `2px solid ${T.ink}`, borderBottom: `2px solid ${T.ink}`, padding: "12px 0", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 14, fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.1em", color: T.ink }}>
          <span>{masthead.editor}</span>
          <span>{masthead.design}</span>
          <span>{masthead.data}</span>
          <span>{masthead.ad}</span>
        </div>
      </div>

      {/* Footer slug */}
      <div style={{ position: "absolute", left: 56, right: 56, bottom: 100, display: "flex", justifyContent: "space-between", alignItems: "baseline", fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.18em", color: T.muted, textTransform: "uppercase" }}>
        <span>{issn} · © Subculture Monthly · {meta.issue}</span>
        <span style={{ color: T.red }}>{next}</span>
      </div>
    </PageFrame>
  );
}

Object.assign(window, {
  CrossAnalysisPage, IndustryDeskPage, CommunityPulsePage, WatchlistPage, ColophonPage,
});
