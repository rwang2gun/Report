// Page-type components — context (P.03–P.06) + back half (P.19 ─ P.21)
// All props-driven. Same component renders any month's data.

// ═══════════════════════════════════════════════════════════════════════════
// <CrossAnalysisTrendsPage {...crossAnalysis} meta={...} />
// P.03 — section title + 5 trends in vertical list (room to breathe)
// ═══════════════════════════════════════════════════════════════════════════
function CrossAnalysisTrendsPage({ meta, section, headline, sub, trends }) {
  const T = TONE_A;
  return (
    <PageFrame bg={T.paper} ink={T.ink} grain={1} pageNo="P.03" pageNoSide="left" ofTotal={meta.issue}>
      <FolioHeader left="SECTION · CROSS-GAME" right={`SUBCULTURE MONTHLY · ${meta.issue}`} />
      <SectionTitle section={section} headline={headline} sub={sub} accent={T.red} ink={T.ink} maxWidth={1000} />

      {/* 5 trend rows — vertical layout, each row gets generous room. */}
      <div style={{ position: "absolute", top: 440, left: 56, right: 56 }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 8 }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.22em", color: T.red, textTransform: "uppercase" }}>
            FIG. X.1 · Five Trends
          </div>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: T.muted, letterSpacing: "0.14em" }}>
            APR 2026 · CROSS-CUT
          </div>
        </div>
        <div style={{ borderTop: `2px solid ${T.ink}` }}>
          {trends.map((t, i) => (
            <Zoomable key={t.n} label={`Trend ${t.n} — ${t.head}`} style={{ display: "grid", gridTemplateColumns: "120px 1fr", columnGap: 28, padding: "22px 0 24px", borderBottom: `1px solid ${T.hair}`, alignItems: "start", cursor: "zoom-in" }}>
              <div style={{ paddingTop: 4 }}>
                <div style={{ fontFamily: "'EB Garamond',serif", fontSize: 56, lineHeight: 1, color: T.red, fontWeight: 500, letterSpacing: "-0.02em" }}>
                  {t.n}
                </div>
              </div>
              <div>
                <div style={{ fontFamily: "'Noto Serif KR',serif", fontSize: 32, lineHeight: 1.2, color: T.ink, letterSpacing: "-0.01em", fontWeight: 700 }}>
                  {t.head}
                </div>
                <div style={{ marginTop: 10, fontFamily: "'Noto Serif KR',serif", fontSize: 17, lineHeight: 1.65, color: T.ink, opacity: 0.85, textWrap: "pretty", maxWidth: 940 }}>
                  {t.why}
                </div>
              </div>
            </Zoomable>
          ))}
        </div>
      </div>
    </PageFrame>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// <CrossAnalysisPlaybookPage {...crossAnalysis} meta={...} />
// P.04 — matrix (bigger cells) + DO/DON'T (bigger text)
// ═══════════════════════════════════════════════════════════════════════════
function CrossAnalysisPlaybookPage({ meta, matrix, dosDonts }) {
  const T = TONE_A;
  return (
    <PageFrame bg={T.paper} ink={T.ink} grain={1} pageNo="P.04" pageNoSide="right" ofTotal={meta.issue}>
      <FolioHeader left={`CONT'D · CROSS-GAME PLAYBOOK`} right={`SUBCULTURE MONTHLY · ${meta.issue}`} />

      <div style={{ position: "absolute", top: 92, left: 56, right: 56 }}>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.22em", color: T.red, textTransform: "uppercase", marginBottom: 8 }}>
          04 / Cross-Game · Playbook
        </div>
        <h1 style={{ fontFamily: "'EB Garamond',serif", fontSize: 60, lineHeight: 0.98, margin: 0, color: T.ink, letterSpacing: "-0.02em", fontWeight: 500 }}>
          여섯 작품의 응답을 한 줄로,<br/>
          <span style={{ fontStyle: "italic", color: T.red }}>해야 할 것과 하지 말아야 할 것.</span>
        </h1>
      </div>

      {/* Matrix */}
      <div style={{ position: "absolute", top: 360, left: 56, right: 56 }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 8 }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.22em", color: T.red, textTransform: "uppercase" }}>
            {matrix.label}
          </div>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: T.muted, letterSpacing: "0.14em" }}>● = observed</div>
        </div>
        <CrossMatrix cols={matrix.cols} rows={matrix.rows} ink={T.ink} accent={T.red} hair={T.hair} muted={T.muted} big />
      </div>

      {/* Do / Don't — bigger text, more spacing */}
      <div style={{ position: "absolute", left: 56, right: 56, top: 780, bottom: 110, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
        <Zoomable label="Cross-Game — DO list" style={{ border: `1px solid ${T.hair}`, padding: "24px 26px", background: "rgba(255,255,255,0.4)", cursor: "zoom-in" }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 14, letterSpacing: "0.22em", color: T.ink, fontWeight: 700, marginBottom: 4 }}>● DO</div>
          <ul style={{ listStyle: "none", padding: 0, margin: "12px 0 0 0", fontFamily: "'Noto Serif KR',serif", fontSize: 16, lineHeight: 1.6, color: T.ink, opacity: 0.9 }}>
            {dosDonts.dos.map((d, i) => (
              <li key={i} style={{ display: "flex", gap: 12, padding: "9px 0", borderBottom: i < dosDonts.dos.length - 1 ? `1px solid ${T.hair}` : "none" }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 14, color: T.red, opacity: 0.85, flex: "0 0 32px", fontWeight: 600 }}>{String(i + 1).padStart(2, "0")}</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </Zoomable>
        <Zoomable label="Cross-Game — DON'T list" style={{ border: `1px solid ${T.red}`, padding: "24px 26px", background: T.red, color: T.paper, cursor: "zoom-in" }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 14, letterSpacing: "0.22em", color: T.paper, fontWeight: 700, marginBottom: 4 }}>○ DON&apos;T</div>
          <ul style={{ listStyle: "none", padding: 0, margin: "12px 0 0 0", fontFamily: "'Noto Serif KR',serif", fontSize: 16, lineHeight: 1.6, color: T.paper }}>
            {dosDonts.donts.map((d, i) => (
              <li key={i} style={{ display: "flex", gap: 12, padding: "9px 0", borderBottom: i < dosDonts.donts.length - 1 ? "1px solid rgba(250,246,236,0.28)" : "none" }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 14, color: T.paper, opacity: 0.75, flex: "0 0 32px", fontWeight: 600 }}>{String(i + 1).padStart(2, "0")}</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </Zoomable>
      </div>
    </PageFrame>
  );
}

function CrossMatrix({ cols, rows, ink, accent, hair, muted, big }) {
  // `big` mode uses larger cells/rows for full-page playbook layouts; default
  // sticks with the original compact sizing for in-page placements.
  const cellW   = big ? 130 : 100;
  const labelW  = big ? 240 : 200;
  const rowH    = big ? 56  : 38;
  const headerH = big ? 40  : 32;
  const headerFS  = big ? 12 : 10;
  const rowLabelFS = big ? 15 : 12;
  const dotOnFS  = big ? 26 : 20;
  const dotOffFS = big ? 18 : 14;
  const countFS  = big ? 13 : 12;
  return (
    <div style={{ borderTop: `2px solid ${ink}` }}>
      <div style={{ display: "grid", gridTemplateColumns: `${labelW}px repeat(${cols.length}, ${cellW}px) 1fr`, alignItems: "center", height: headerH, fontFamily: "'JetBrains Mono',monospace", fontSize: headerFS, letterSpacing: "0.18em", color: muted, textTransform: "uppercase" }}>
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
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: rowLabelFS, letterSpacing: "0.1em", fontWeight: 600 }}>{r.label}</span>
            {r.values.map((v, j) => (
              <span key={j} style={{ textAlign: "center", color: v ? accent : muted, fontSize: v ? dotOnFS : dotOffFS }}>{v ? "●" : "○"}</span>
            ))}
            <span style={{ paddingLeft: 12, fontFamily: "'JetBrains Mono',monospace", fontSize: countFS, color: ink, opacity: 0.7 }}>
              {count} / {cols.length}
            </span>
          </div>
        );
      })}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// <IndustryStudiosPage {...industry} meta={...} />
// P.05 — section title + 6 studios in motion (vertical list, bigger notes)
// ═══════════════════════════════════════════════════════════════════════════
function IndustryStudiosPage({ meta, section, headline, sub, studios }) {
  const T = TONE_A;
  return (
    <PageFrame bg={T.paper} ink={T.ink} grain={1} pageNo="P.05" pageNoSide="left" ofTotal={meta.issue}>
      <FolioHeader left="SECTION · INDUSTRY DESK" right={`SUBCULTURE MONTHLY · ${meta.issue}`} />
      <SectionTitle section={section} headline={headline} sub={sub} accent={T.red} ink={T.ink} maxWidth={1000} />

      <div style={{ position: "absolute", top: 440, left: 56, right: 56 }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 8 }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.22em", color: T.red, textTransform: "uppercase" }}>
            FIG. I.1 · Studios in Motion
          </div>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: T.muted, letterSpacing: "0.14em" }}>
            APR 2026 · 6 STUDIOS
          </div>
        </div>
        <div style={{ borderTop: `2px solid ${T.ink}` }}>
          {studios.map((s) => {
            const tone = s.change === "+" ? T.ink : s.change === "-" ? T.red : T.muted;
            return (
              <div key={s.name} style={{ display: "grid", gridTemplateColumns: "60px 280px 1fr", alignItems: "start", padding: "20px 0 22px", borderBottom: `1px solid ${T.hair}`, gap: 18 }}>
                <span style={{ fontFamily: "'EB Garamond',serif", fontSize: 48, lineHeight: 1, color: tone, fontWeight: 500, textAlign: "center", paddingTop: 2 }}>
                  {s.change}
                </span>
                <div style={{ paddingTop: 4 }}>
                  <div style={{ fontFamily: "'EB Garamond',serif", fontSize: 32, color: T.ink, letterSpacing: "-0.015em", lineHeight: 1.1 }}>{s.name}</div>
                  <div style={{ marginTop: 4, fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: T.muted, letterSpacing: "0.14em" }}>{s.ko}</div>
                </div>
                <div style={{ fontFamily: "'Noto Serif KR',serif", fontSize: 16, lineHeight: 1.6, color: T.ink, opacity: 0.88, textWrap: "pretty", paddingTop: 6 }}>
                  {s.note}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageFrame>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// <IndustryOutlookPage {...industry} meta={...} />
// P.06 — upcoming (next 90 days) + regulations (issues watch)
// ═══════════════════════════════════════════════════════════════════════════
function IndustryOutlookPage({ meta, upcoming, regulations }) {
  const T = TONE_A;
  return (
    <PageFrame bg={T.paper} ink={T.ink} grain={1} pageNo="P.06" pageNoSide="right" ofTotal={meta.issue}>
      <FolioHeader left={`CONT'D · INDUSTRY OUTLOOK`} right={`SUBCULTURE MONTHLY · ${meta.issue}`} />

      <div style={{ position: "absolute", top: 92, left: 56, right: 56 }}>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.22em", color: T.red, textTransform: "uppercase", marginBottom: 8 }}>
          06 / Industry Desk · Outlook
        </div>
        <h1 style={{ fontFamily: "'EB Garamond',serif", fontSize: 60, lineHeight: 0.98, margin: 0, color: T.ink, letterSpacing: "-0.02em", fontWeight: 500 }}>
          다음 90일에 결정되는 것,<br/>
          <span style={{ fontStyle: "italic", color: T.red }}>이번 분기에 이미 흔들린 것.</span>
        </h1>
      </div>

      {/* Upcoming — full width */}
      <div style={{ position: "absolute", top: 340, left: 56, right: 56 }}>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.22em", color: T.red, textTransform: "uppercase", marginBottom: 8 }}>
          FIG. I.2 · Upcoming · 다음 90일
        </div>
        <div style={{ borderTop: `2px solid ${T.ink}` }}>
          {upcoming.map((u, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "120px 1fr", padding: "16px 0 18px", borderBottom: `1px solid ${T.hair}`, alignItems: "baseline", gap: 20 }}>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 14, letterSpacing: "0.18em", color: T.red, fontWeight: 600 }}>
                {u.when}
              </span>
              <div>
                <div style={{ fontFamily: "'EB Garamond',serif", fontSize: 28, color: T.ink, letterSpacing: "-0.015em", lineHeight: 1.15 }}>{u.title}</div>
                <div style={{ fontFamily: "'Noto Serif KR',serif", fontSize: 15, color: T.ink, opacity: 0.82, marginTop: 6, lineHeight: 1.55 }}>{u.note}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Regulations — full width, below */}
      <div style={{ position: "absolute", left: 56, right: 56, bottom: 110 }}>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.22em", color: T.red, textTransform: "uppercase", marginBottom: 8 }}>
          FIG. I.3 · Issues Watch
        </div>
        <div style={{ borderTop: `2px solid ${T.ink}`, display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: 0 }}>
          {regulations.map((r, i) => (
            <div key={r.region} style={{ padding: "14px 18px", borderBottom: i < regulations.length - (regulations.length % 2 === 0 ? 2 : 1) ? `1px solid ${T.hair}` : "none", borderRight: i % 2 === 0 ? `1px solid ${T.hair}` : "none", background: "rgba(255,255,255,0.4)" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, letterSpacing: "0.22em", color: T.red, fontWeight: 700 }}>{r.region}</span>
                <span style={{ fontFamily: "'EB Garamond',serif", fontSize: 20, color: T.ink, fontStyle: "italic", letterSpacing: "-0.01em" }}>{r.ko}</span>
              </div>
              <div style={{ marginTop: 6, fontFamily: "'Noto Serif KR',serif", fontSize: 14.5, color: T.ink, opacity: 0.85, lineHeight: 1.6 }}>
                {r.line}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageFrame>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// <CommunityPulsePage {...community} meta={...} />
// P.19 — events · director letter · fan works
// ═══════════════════════════════════════════════════════════════════════════
function CommunityPulsePage({ meta, section, headline, sub, events, directorLetter, fanWorks }) {
  const T = TONE_A;
  return (
    <PageFrame bg={T.paper} ink={T.ink} grain={1} pageNo="P.19" pageNoSide="left" ofTotal={meta.issue}>
      <FolioHeader left="SECTION · COMMUNITY PULSE" right={`SUBCULTURE MONTHLY · ${meta.issue}`} />
      <SectionTitle section={section} headline={headline} sub={sub} accent={T.red} ink={T.ink} maxWidth={820} />

      {/* Events */}
      <div style={{ position: "absolute", top: 410, left: 56, right: 56 }}>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.22em", color: T.red, textTransform: "uppercase", marginBottom: 6 }}>
          FIG. C.1 · Five Events · {meta.coverDate}
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
// P.20 — next month's 5 slots
// ═══════════════════════════════════════════════════════════════════════════
function WatchlistPage({ meta, section, headline, sub, items }) {
  const T = TONE_A;
  return (
    <PageFrame bg={T.paper} ink={T.ink} grain={1} pageNo="P.20" pageNoSide="right" ofTotal={meta.issue}>
      <FolioHeader left="SECTION · WATCHLIST" right={`SUBCULTURE MONTHLY · ${meta.issue}`} />
      <SectionTitle section={section} headline={headline} sub={sub} accent={T.red} ink={T.ink} maxWidth={820} />

      <div style={{ position: "absolute", top: 410, left: 56, right: 56 }}>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.22em", color: T.red, textTransform: "uppercase", marginBottom: 8 }}>
          FIG. W · Five Slots to Watch · JUN 2026
        </div>
        <div style={{ borderTop: `2px solid ${T.ink}` }}>
          {items.map((it, i) => (
            <Zoomable key={i} label={`Watchlist ${String(i + 1).padStart(2, "0")} — ${it.name}`} style={{ display: "grid", gridTemplateColumns: "60px 1fr 200px", gap: 18, padding: "20px 0 22px", borderBottom: `1px solid ${T.hair}`, alignItems: "baseline", cursor: "zoom-in" }}>
              <span style={{ fontFamily: "'EB Garamond',serif", fontSize: 58, lineHeight: 1, color: T.red, fontWeight: 500, letterSpacing: "-0.02em" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                  <span style={{ fontFamily: "'EB Garamond',serif", fontSize: 34, color: T.ink, letterSpacing: "-0.02em", fontWeight: 500 }}>{it.name}</span>
                  <span style={{ fontFamily: "'EB Garamond',serif", fontStyle: "italic", fontSize: 19, color: T.red }}>/ {it.game}</span>
                </div>
                <div style={{ marginTop: 6, fontFamily: "'Noto Serif KR',serif", fontSize: 15.5, color: T.ink, opacity: 0.88, lineHeight: 1.55, textWrap: "pretty", maxWidth: 700 }}>
                  {it.why}
                </div>
              </div>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: "0.14em", color: T.ink, textAlign: "right" }}>
                <span style={{ color: T.muted }}>WHEN</span><br/>
                <span style={{ fontWeight: 600 }}>{it.when}</span>
              </div>
            </Zoomable>
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
// P.21 — sources · methodology · limits · masthead
// ═══════════════════════════════════════════════════════════════════════════
function ColophonPage({ meta, section, headline, sub, sources, methodology, limits, masthead, issn, next }) {
  const T = TONE_A;
  return (
    <PageFrame bg={T.paper} ink={T.ink} grain={1} pageNo="P.21" pageNoSide="left" ofTotal={meta.issue}>
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
  CrossAnalysisTrendsPage, CrossAnalysisPlaybookPage,
  IndustryStudiosPage, IndustryOutlookPage,
  CommunityPulsePage, WatchlistPage, ColophonPage,
});
