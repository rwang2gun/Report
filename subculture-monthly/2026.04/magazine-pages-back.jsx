// Page-type components — context (P.03–P.06) + back half (P.25 ─ P.29)
// All props-driven. Same component renders any month's data.
//
// Back-half pages use the same expansive scale as P.03–P.06: borderTop 2px
// ink, 17-19px body, 32-38px row heads, EB Garamond italic numerals, and
// generous row padding (18-22px) — sized for mobile readability.

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
// <CommunityEventsPage {...community} meta={...} />
// P.25 — 5 events (vertical list, 32px titles) + director letter card
// ═══════════════════════════════════════════════════════════════════════════
function CommunityEventsPage({ meta, section, headline, sub, events, directorLetter }) {
  const T = TONE_A;
  return (
    <PageFrame bg={T.paper} ink={T.ink} grain={1} pageNo="P.25" pageNoSide="left" ofTotal={meta.issue}>
      <FolioHeader left="SECTION · COMMUNITY PULSE" right={`SUBCULTURE MONTHLY · ${meta.issue}`} />
      <SectionTitle section={section} headline={headline} sub={sub} accent={T.red} ink={T.ink} maxWidth={1000} />

      {/* Events — vertical list, EB Garamond italic date + 32px title + meta line */}
      <div style={{ position: "absolute", top: 440, left: 56, right: 56 }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 8 }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.22em", color: T.red, textTransform: "uppercase" }}>
            FIG. C.1 · Five Events · {meta.coverDate}
          </div>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: T.muted, letterSpacing: "0.14em" }}>
            APR 2026 · 5 SIGNALS
          </div>
        </div>
        <div style={{ borderTop: `2px solid ${T.ink}` }}>
          {events.map((e, i) => (
            <Zoomable key={i} label={`Event ${e.when} — ${e.title}`} style={{ display: "grid", gridTemplateColumns: "130px 1fr", columnGap: 24, padding: "20px 0 22px", borderBottom: `1px solid ${T.hair}`, alignItems: "start", cursor: "zoom-in" }}>
              <div style={{ paddingTop: 4 }}>
                <div style={{ fontFamily: "'EB Garamond',serif", fontSize: 36, lineHeight: 1, color: T.red, fontWeight: 500, letterSpacing: "-0.02em", fontStyle: "italic" }}>
                  {e.when}
                </div>
              </div>
              <div>
                <div style={{ fontFamily: "'Noto Serif KR',serif", fontSize: 26, lineHeight: 1.25, color: T.ink, letterSpacing: "-0.01em", fontWeight: 600, textWrap: "pretty" }}>
                  {e.title}
                </div>
                <div style={{ marginTop: 8, display: "flex", gap: 18, fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: "0.14em", color: T.ink, opacity: 0.78 }}>
                  <span><span style={{ color: T.muted }}>WHERE</span> · {e.where}</span>
                  <span style={{ marginLeft: "auto", color: T.red, fontWeight: 600 }}>{e.scale}</span>
                </div>
              </div>
            </Zoomable>
          ))}
        </div>
      </div>

      {/* Director letter — full-width card */}
      <Zoomable label={`Director Letter — ${directorLetter.from}`} style={{ position: "absolute", left: 56, right: 56, bottom: 110, background: T.ink, color: T.paper, padding: "30px 32px 32px", position: "relative", cursor: "zoom-in" }}>
        <div style={{ position: "absolute", top: -12, left: 22, fontFamily: "'EB Garamond',serif", fontSize: 108, lineHeight: 1, color: T.red, fontStyle: "italic" }}>“</div>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.22em", color: T.red, textTransform: "uppercase", marginTop: 44, fontWeight: 700 }}>
          {directorLetter.head}
        </div>
        <div style={{ marginTop: 6, fontFamily: "'EB Garamond',serif", fontSize: 28, color: T.paper, fontStyle: "italic", letterSpacing: "-0.01em" }}>
          {directorLetter.from}
        </div>
        <div style={{ marginTop: 16, fontFamily: "'Noto Serif KR',serif", fontSize: 18, lineHeight: 1.7, color: T.paper, textWrap: "pretty", maxWidth: 1000 }}>
          {directorLetter.body}
        </div>
        <div style={{ marginTop: 18, fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.16em", color: T.paper, opacity: 0.65 }}>
          — {directorLetter.footer}
        </div>
      </Zoomable>
    </PageFrame>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// <CommunityWorksPage {...community} meta={...} />
// P.26 — fan works (vertical list, 32px titles)
// ═══════════════════════════════════════════════════════════════════════════
function CommunityWorksPage({ meta, fanWorks }) {
  const T = TONE_A;
  return (
    <PageFrame bg={T.paper} ink={T.ink} grain={1} pageNo="P.26" pageNoSide="right" ofTotal={meta.issue}>
      <FolioHeader left={`CONT'D · COMMUNITY · FAN WORKS`} right={`SUBCULTURE MONTHLY · ${meta.issue}`} />

      <div style={{ position: "absolute", top: 92, left: 56, right: 56 }}>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.22em", color: T.red, textTransform: "uppercase", marginBottom: 8 }}>
          26 / Community · Fan Works
        </div>
        <h1 style={{ fontFamily: "'EB Garamond',serif", fontSize: 60, lineHeight: 0.98, margin: 0, color: T.ink, letterSpacing: "-0.02em", fontWeight: 500 }}>
          본지가 골라 본 이번 호의<br/>
          <span style={{ fontStyle: "italic", color: T.red }}>팬 메이드 신호.</span>
        </h1>
      </div>

      <div style={{ position: "absolute", top: 360, left: 56, right: 56 }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 8 }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.22em", color: T.red, textTransform: "uppercase" }}>
            FIG. C.2 · Fan Works · 이번 호 픽
          </div>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: T.muted, letterSpacing: "0.14em" }}>
            {fanWorks.length} ITEMS · CURATED
          </div>
        </div>
        <div style={{ borderTop: `2px solid ${T.ink}` }}>
          {fanWorks.map((f, i) => (
            <Zoomable key={i} label={`Fan Work ${f.kind} — ${f.title}`} style={{ display: "grid", gridTemplateColumns: "120px 1fr 200px", columnGap: 24, padding: "22px 0 24px", borderBottom: `1px solid ${T.hair}`, alignItems: "start", cursor: "zoom-in" }}>
              <div style={{ paddingTop: 6 }}>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, letterSpacing: "0.22em", color: T.red, fontWeight: 700 }}>
                  {f.kind}
                </div>
                <div style={{ marginTop: 6, fontFamily: "'EB Garamond',serif", fontSize: 28, lineHeight: 1, color: T.red, fontWeight: 500, letterSpacing: "-0.02em", fontStyle: "italic" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
              <div>
                <div style={{ fontFamily: "'EB Garamond',serif", fontSize: 30, color: T.ink, letterSpacing: "-0.015em", lineHeight: 1.15, fontWeight: 500 }}>
                  {f.title}
                </div>
                <div style={{ marginTop: 10, fontFamily: "'Noto Serif KR',serif", fontSize: 16, lineHeight: 1.6, color: T.ink, opacity: 0.88, textWrap: "pretty" }}>
                  {f.note}
                </div>
              </div>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: "0.14em", color: T.ink, textAlign: "right", paddingTop: 8 }}>
                <span style={{ color: T.muted }}>BY</span><br/>
                <span style={{ fontWeight: 600 }}>{f.by}</span>
              </div>
            </Zoomable>
          ))}
        </div>
      </div>

      <div style={{ position: "absolute", left: 56, right: 56, bottom: 110, padding: "14px 18px", background: "rgba(255,255,255,0.5)", border: `1px solid ${T.hair}`, fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.14em", color: T.ink, opacity: 0.78, textTransform: "uppercase" }}>
        <span style={{ color: T.red, fontWeight: 700 }}>NOTE</span> · 본지는 팬 워크에서 다음 호 분석 단서를 찾는다 — 미메·일러스트·코스프레·클립의 양과 톤은 디자인 수용 신호다.
      </div>
    </PageFrame>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// <WatchlistPage items={[...]} meta={...} />
// P.27 — next month's 5 slots. Single page; row sizes match the trends-list
// scale used on P.03 / P.05.
// ═══════════════════════════════════════════════════════════════════════════
function WatchlistPage({ meta, section, headline, sub, items }) {
  const T = TONE_A;
  return (
    <PageFrame bg={T.paper} ink={T.ink} grain={1} pageNo="P.27" pageNoSide="left" ofTotal={meta.issue}>
      <FolioHeader left="SECTION · WATCHLIST" right={`SUBCULTURE MONTHLY · ${meta.issue}`} />
      <SectionTitle section={section} headline={headline} sub={sub} accent={T.red} ink={T.ink} maxWidth={1000} />

      <div style={{ position: "absolute", top: 440, left: 56, right: 56 }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 8 }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.22em", color: T.red, textTransform: "uppercase" }}>
            FIG. W · Five Slots to Watch · JUN 2026
          </div>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: T.muted, letterSpacing: "0.14em" }}>
            MAY 2026 · 5 BETS
          </div>
        </div>
        <div style={{ borderTop: `2px solid ${T.ink}` }}>
          {items.map((it, i) => (
            <Zoomable key={i} label={`Watchlist ${String(i + 1).padStart(2, "0")} — ${it.name}`} style={{ display: "grid", gridTemplateColumns: "80px 1fr 200px", gap: 22, padding: "22px 0 24px", borderBottom: `1px solid ${T.hair}`, alignItems: "start", cursor: "zoom-in" }}>
              <span style={{ fontFamily: "'EB Garamond',serif", fontSize: 60, lineHeight: 1, color: T.red, fontWeight: 500, letterSpacing: "-0.02em", paddingTop: 2 }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 14, flexWrap: "wrap" }}>
                  <span style={{ fontFamily: "'EB Garamond',serif", fontSize: 36, color: T.ink, letterSpacing: "-0.02em", fontWeight: 500, lineHeight: 1.1 }}>{it.name}</span>
                  <span style={{ fontFamily: "'EB Garamond',serif", fontStyle: "italic", fontSize: 22, color: T.red }}>/ {it.game}</span>
                </div>
                <div style={{ marginTop: 10, fontFamily: "'Noto Serif KR',serif", fontSize: 17, color: T.ink, opacity: 0.9, lineHeight: 1.65, textWrap: "pretty", maxWidth: 800 }}>
                  {it.why}
                </div>
              </div>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, letterSpacing: "0.14em", color: T.ink, textAlign: "right", paddingTop: 10 }}>
                <span style={{ color: T.muted }}>WHEN</span><br/>
                <span style={{ fontWeight: 600, fontSize: 15 }}>{it.when}</span>
              </div>
            </Zoomable>
          ))}
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 110, left: 56, right: 56, padding: "18px 22px", background: T.ink, color: T.paper, display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase" }}>
        <span><span style={{ color: T.red, fontWeight: 700 }}>NEXT</span> · 다음 호 발행일 · 2026.06.10</span>
        <span style={{ color: "rgba(245,241,232,0.65)" }}>다섯 슬롯에서 다음 트렌드가 결정된다</span>
      </div>
    </PageFrame>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// <ColophonSourcesPage {...colophon} meta={...} />
// P.28 — sources (vertical list, 24px labels) + methodology (numbered list)
// ═══════════════════════════════════════════════════════════════════════════
function ColophonSourcesPage({ meta, section, headline, sub, sources, methodology }) {
  const T = TONE_A;
  return (
    <PageFrame bg={T.paper} ink={T.ink} grain={1} pageNo="P.28" pageNoSide="right" ofTotal={meta.issue}>
      <FolioHeader left="SECTION · COLOPHON" right={`SUBCULTURE MONTHLY · ${meta.issue}`} />
      <SectionTitle section={section} headline={headline} sub={sub} accent={T.red} ink={T.ink} maxWidth={1000} />

      {/* Sources — vertical list with 24px labels */}
      <div style={{ position: "absolute", top: 440, left: 56, right: 56 }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 8 }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.22em", color: T.red, textTransform: "uppercase", fontWeight: 700 }}>
            01 · SOURCES · 출처
          </div>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: T.muted, letterSpacing: "0.14em" }}>
            {sources.length} CHANNELS
          </div>
        </div>
        <div style={{ borderTop: `2px solid ${T.ink}` }}>
          {sources.map((s, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 22, padding: "18px 0 20px", borderBottom: `1px solid ${T.hair}`, alignItems: "start" }}>
              <div>
                <div style={{ fontFamily: "'EB Garamond',serif", fontSize: 24, color: T.ink, letterSpacing: "-0.015em", fontWeight: 500, lineHeight: 1.15 }}>{s.label}</div>
                <div style={{ marginTop: 4, fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: T.red, letterSpacing: "0.08em", textWrap: "pretty" }}>{s.from}</div>
              </div>
              <div style={{ fontFamily: "'Noto Serif KR',serif", fontSize: 16, color: T.ink, opacity: 0.88, lineHeight: 1.6, textWrap: "pretty", paddingTop: 4 }}>
                {s.note}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Methodology — numbered list, full width */}
      <div style={{ position: "absolute", left: 56, right: 56, bottom: 110 }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 8 }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.22em", color: T.red, textTransform: "uppercase", fontWeight: 700 }}>
            02 · METHODOLOGY · 방법
          </div>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: T.muted, letterSpacing: "0.14em" }}>
            {methodology.length} STEPS
          </div>
        </div>
        <ol style={{ paddingLeft: 0, margin: 0, listStyle: "none", borderTop: `2px solid ${T.ink}` }}>
          {methodology.map((m, i) => (
            <li key={i} style={{ display: "flex", gap: 16, padding: "12px 0", borderBottom: `1px solid ${T.hair}`, fontFamily: "'Noto Serif KR',serif", fontSize: 16, color: T.ink, opacity: 0.9, lineHeight: 1.6, alignItems: "baseline" }}>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, color: T.red, flex: "0 0 36px", fontWeight: 700, letterSpacing: "0.14em" }}>{String(i + 1).padStart(2, "0")}</span>
              <span style={{ textWrap: "pretty" }}>{m}</span>
            </li>
          ))}
        </ol>
      </div>
    </PageFrame>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// <ColophonLimitsPage {...colophon} meta={...} />
// P.29 — limits + masthead + footer slug
// ═══════════════════════════════════════════════════════════════════════════
function ColophonLimitsPage({ meta, limits, masthead, issn, next }) {
  const T = TONE_A;
  return (
    <PageFrame bg={T.paper} ink={T.ink} grain={1} pageNo="P.29" pageNoSide="left" ofTotal={meta.issue}>
      <FolioHeader left={`CONT'D · COLOPHON · LIMITS`} right={`SUBCULTURE MONTHLY · ${meta.issue}`} />

      <div style={{ position: "absolute", top: 92, left: 56, right: 56 }}>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.22em", color: T.red, textTransform: "uppercase", marginBottom: 8 }}>
          29 / Colophon · Limits & Masthead
        </div>
        <h1 style={{ fontFamily: "'EB Garamond',serif", fontSize: 60, lineHeight: 0.98, margin: 0, color: T.ink, letterSpacing: "-0.02em", fontWeight: 500 }}>
          우리가 본 것, 보지 못한 것,<br/>
          <span style={{ fontStyle: "italic", color: T.red }}>그리고 이 호를 만든 사람들.</span>
        </h1>
      </div>

      {/* Limits — full width numbered list */}
      <div style={{ position: "absolute", top: 360, left: 56, right: 56 }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 8 }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.22em", color: T.red, textTransform: "uppercase", fontWeight: 700 }}>
            03 · LIMITS · 한계
          </div>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: T.muted, letterSpacing: "0.14em" }}>
            {limits.length} CAVEATS
          </div>
        </div>
        <ol style={{ paddingLeft: 0, margin: 0, listStyle: "none", borderTop: `2px solid ${T.ink}` }}>
          {limits.map((m, i) => (
            <li key={i} style={{ display: "flex", gap: 16, padding: "12px 0", borderBottom: `1px solid ${T.hair}`, fontFamily: "'Noto Serif KR',serif", fontSize: 16, color: T.ink, opacity: 0.9, lineHeight: 1.6, alignItems: "baseline" }}>
              <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, color: T.red, flex: "0 0 36px", fontWeight: 700, letterSpacing: "0.14em" }}>{String(i + 1).padStart(2, "0")}</span>
              <span style={{ textWrap: "pretty" }}>{m}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Masthead */}
      <div style={{ position: "absolute", left: 56, right: 56, bottom: 200 }}>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.22em", color: T.red, textTransform: "uppercase", marginBottom: 8, fontWeight: 700 }}>
          04 · MASTHEAD · 편집부
        </div>
        <div style={{ borderTop: `2px solid ${T.ink}`, borderBottom: `2px solid ${T.ink}`, padding: "16px 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 28px", fontFamily: "'JetBrains Mono',monospace", fontSize: 13, letterSpacing: "0.1em", color: T.ink }}>
          <span>{masthead.editor}</span>
          <span>{masthead.design}</span>
          <span>{masthead.data}</span>
          <span>{masthead.ad}</span>
        </div>
      </div>

      {/* Footer slug */}
      <div style={{ position: "absolute", left: 56, right: 56, bottom: 100, display: "flex", justifyContent: "space-between", alignItems: "baseline", fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.18em", color: T.muted, textTransform: "uppercase" }}>
        <span>{issn} · © Subculture Monthly · {meta.issue}</span>
        <span style={{ color: T.red, fontWeight: 700 }}>{next}</span>
      </div>
    </PageFrame>
  );
}

Object.assign(window, {
  CrossAnalysisTrendsPage, CrossAnalysisPlaybookPage,
  IndustryStudiosPage, IndustryOutlookPage,
  CommunityEventsPage, CommunityWorksPage, WatchlistPage,
  ColophonSourcesPage, ColophonLimitsPage,
});
