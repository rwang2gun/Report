// Page-type components — front half (P.00 ─ P.02, plus 6 game features P.05 ─ P.16)
// All props-driven. Same component renders any month's data.

// ═══════════════════════════════════════════════════════════════════════════
// <CoverPage meta={...} insights={[3]} />
// P.00 — masthead, cover-art slot, 3 design insights, editor note
// ═══════════════════════════════════════════════════════════════════════════
function CoverPage({ meta, insights }) {
  const T = TONE_A;
  return (
    <PageFrame bg={T.paper} ink={T.ink} grain={1} pageNo="P.00" ofTotal={meta.issue} pageNoSide="right" pageNoColor={T.ink}>
      {/* Top metadata strip */}
      <div style={{ position: "absolute", top: 40, left: 56, right: 56, display: "flex", justifyContent: "space-between", alignItems: "baseline", fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: T.ink }}>
        <span>{meta.issue} · {meta.coverDate} · {meta.price}</span>
        <span style={{ color: T.red }}>● 디자인 데스크 · A DESIGN REFERENCE</span>
        <span>{meta.issn}</span>
      </div>
      <div style={{ position: "absolute", top: 70, left: 56, right: 56, height: 1, background: T.ink, opacity: 0.25 }} />

      {/* Masthead */}
      <div style={{ position: "absolute", top: 96, left: 56, right: 56 }}>
        <div style={{ fontFamily: "'EB Garamond',serif", fontSize: 132, lineHeight: 0.92, fontWeight: 500, letterSpacing: "-0.02em", color: T.ink }}>
          Subculture
          <br />
          <span style={{ fontStyle: "italic" }}>Monthly</span>
        </div>
        <div style={{ marginTop: 18, fontFamily: "'Noto Serif KR',serif", fontSize: 22, color: T.ink, opacity: 0.85, letterSpacing: "-0.01em", maxWidth: 900 }}>
          {meta.coverLead.ko}
        </div>
      </div>

      {/* Splash slot (left) */}
      <div style={{ position: "absolute", left: 56, top: 460, width: 540, height: 760 }}>
        <SplashSlot bg="#F2EDDD" stripe="rgba(26,26,26,0.07)" ink={T.ink} caption="COVER ILLUSTRATION" sub="540 × 760 · drop edition art" angle={-22} />
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 28, background: T.red, color: T.paper, padding: "10px 18px", fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>
          {meta.coverArt.caption}
        </div>
      </div>

      {/* Right: 3 insight tracks */}
      <div style={{ position: "absolute", left: 640, top: 460, right: 56 }}>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: T.red, marginBottom: 14 }}>
          이번 호 · 디자인 인사이트 3트랙 / IN THIS ISSUE
        </div>
        <div style={{ borderTop: `2px solid ${T.ink}` }}>
          {insights.map((t) => (
            <Zoomable key={t.n} label={`Insight ${t.n} — ${t.head}`} style={{ padding: "22px 0", borderBottom: `1px solid ${T.hair}`, cursor: "zoom-in" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
                <span style={{ fontFamily: "'EB Garamond',serif", fontSize: 56, lineHeight: 1, color: T.red, letterSpacing: "-0.02em", fontWeight: 500, flex: "0 0 76px" }}>
                  {t.n}
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "'EB Garamond',serif", fontSize: 34, lineHeight: 1.08, color: T.ink, letterSpacing: "-0.02em", fontWeight: 500 }}>
                    {t.head}
                    <span style={{ fontStyle: "italic", color: T.muted, marginLeft: 10, fontSize: 22 }}>/ {t.en}</span>
                  </div>
                  <div style={{ marginTop: 8, fontFamily: "'Noto Serif KR',serif", fontSize: 16, lineHeight: 1.6, color: T.ink, opacity: 0.88, textWrap: "pretty" }}>
                    {t.body}
                  </div>
                  <div style={{ marginTop: 12, display: "flex", alignItems: "center", gap: 10, fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase" }}>
                    <span style={{ background: T.ink, color: T.paper, padding: "3px 8px", fontWeight: 600 }}>SIGNAL</span>
                    <span style={{ color: T.red, fontWeight: 600 }}>{t.signal.v}</span>
                    <span style={{ color: T.muted }}>· {t.signal.note}</span>
                  </div>
                </div>
              </div>
            </Zoomable>
          ))}
        </div>

        <div style={{ marginTop: 22, paddingTop: 14, borderTop: `2px solid ${T.ink}` }}>
          <div style={{ fontFamily: "'Noto Serif KR',serif", fontSize: 15, lineHeight: 1.55, color: T.ink, fontStyle: "italic", opacity: 0.85, textWrap: "pretty" }}>
            “{meta.editorNote}”
          </div>
          <div style={{ marginTop: 8, fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.16em", color: T.muted, textTransform: "uppercase" }}>
            — 편집부 / EDITORIAL DESK
          </div>
        </div>
      </div>
    </PageFrame>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// <TocPage meta={...} games={[6]} sections={[...]} />
// P.01 — Table of Contents. Auto-builds 6 game spreads + named sections.
// ═══════════════════════════════════════════════════════════════════════════
function TocPage({ meta, games, sections }) {
  const T = TONE_A;
  // Build TOC entries: 3 pre-feature, 6 features, 5 post-feature
  const pre = [
    { p: "P.00", ko: "표지 · 이번 호의 인사이트 3트랙",       en: "Cover · 3 Design Insight Tracks" },
    { p: "P.01", ko: "목차",                                   en: "Contents" },
    { p: "P.02", ko: "데이터 데스크 · 4월의 시장 검증",         en: "Data Desk · This Month in Numbers" },
    { p: "P.03", ko: "교차 분석 · 다섯 트렌드, 여섯 작품",     en: "Cross-Game Analysis" },
    { p: "P.04", ko: "산업 데스크 · 스튜디오·라인업·규제",     en: "Industry Desk" },
  ];
  const features = games.map((g, i) => {
    const left = String(5 + i * 2).padStart(2, "0");
    const right = String(6 + i * 2).padStart(2, "0");
    return { p: `P.${left}–${right}`, ko: `피처 ${String(i + 1).padStart(2, "0")} · ${g.ko}`, en: `Feature ${String(i + 1).padStart(2, "0")} · ${g.en}`, char: g.character.ko };
  });
  const post = [
    { p: "P.17", ko: "커뮤니티 펄스 · 팬, 디렉터, 그 사이",    en: "Community Pulse" },
    { p: "P.18", ko: "워치리스트 · 다음 한 달의 다섯 슬롯",    en: "Watchlist · JUN 2026" },
    { p: "P.19", ko: "콜로폰 · 출처, 방법, 한계",              en: "Colophon" },
  ];

  return (
    <PageFrame bg={T.paper} ink={T.ink} grain={1} pageNo="P.01" pageNoSide="left" ofTotal={meta.issue}>
      <FolioHeader left="● CONTENTS · 목차" right={`SUBCULTURE MONTHLY · ${meta.issue}`} />

      <div style={{ position: "absolute", top: 92, left: 56, right: 56 }}>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.22em", color: T.red, textTransform: "uppercase", marginBottom: 8 }}>
          01 / Table of Contents · {meta.coverDate}
        </div>
        <h1 style={{ fontFamily: "'EB Garamond',serif", fontSize: 88, lineHeight: 0.94, margin: 0, color: T.ink, letterSpacing: "-0.03em", fontWeight: 500 }}>
          이번 호의<br/>
          <span style={{ fontStyle: "italic", color: T.red }}>스무 페이지.</span>
        </h1>
        <div style={{ marginTop: 16, maxWidth: 700, fontFamily: "'Noto Serif KR',serif", fontSize: 15, lineHeight: 1.6, color: T.ink, opacity: 0.82 }}>
          편집 흐름은 단순합니다. 시장의 큰 그림 → 여섯 작품의 결정 → 다시 큰 그림. 같은 페이지 타입을 데이터만 바꿔서 매월 다시 만듭니다.
        </div>
      </div>

      {/* TOC body — flex column with explicit gaps so blocks can never overlap */}
      <div style={{ position: "absolute", top: 410, left: 56, right: 56, bottom: 140, display: "flex", flexDirection: "column", gap: 30 }}>
        <TocBlock title="OPEN" subtitle="00 ─ 04" items={pre} accent={T.red} ink={T.ink} hair={T.hair} muted={T.muted} />
        <TocBlock title="FEATURES · 6 GAMES, 12 PAGES" subtitle="05 ─ 16" items={features} accent={T.red} ink={T.ink} hair={T.hair} muted={T.muted} showChar />
        <TocBlock title="CLOSE" subtitle="17 ─ 19" items={post} accent={T.red} ink={T.ink} hair={T.hair} muted={T.muted} />
      </div>

      {/* Footer note */}
      <div style={{ position: "absolute", bottom: 88, left: 56, right: 56, display: "flex", justifyContent: "space-between", alignItems: "baseline", fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.16em", color: T.muted, textTransform: "uppercase" }}>
        <span>한 호 = 한 데이터 객체. 다음 호는 ISSUE_2026_06 = &#123; ... &#125;</span>
        <span style={{ color: T.red }}>10 PAGE TYPES · 20 RENDERS</span>
      </div>
    </PageFrame>
  );
}

function TocBlock({ title, subtitle, items, accent, ink, hair, muted, showChar }) {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", borderBottom: `2px solid ${ink}`, paddingBottom: 8, marginBottom: 8 }}>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 14, letterSpacing: "0.24em", color: ink, textTransform: "uppercase", fontWeight: 600 }}>
          {title}
        </div>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, letterSpacing: "0.18em", color: accent, textTransform: "uppercase" }}>
          {subtitle}
        </div>
      </div>
      <div>
        {items.map((it, i) => (
          <div key={i} style={{ display: "flex", alignItems: "baseline", gap: 14, padding: "11px 0", borderBottom: `1px solid ${hair}` }}>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 14, letterSpacing: "0.12em", color: accent, flex: "0 0 110px", fontWeight: 600 }}>
              {it.p}
            </span>
            <span style={{ fontFamily: "'EB Garamond',serif", fontSize: 26, color: ink, letterSpacing: "-0.01em", flex: showChar ? "0 0 420px" : "0 0 480px" }}>
              {it.ko}
            </span>
            <span style={{ flex: 1, borderBottom: `1px dotted ${hair}`, transform: "translateY(-4px)" }} />
            {showChar && (
              <span style={{ fontFamily: "'EB Garamond',serif", fontStyle: "italic", fontSize: 18, color: accent, flex: "0 0 150px", textAlign: "right" }}>
                / {it.char}
              </span>
            )}
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, letterSpacing: "0.12em", color: muted, textTransform: "uppercase", flex: "0 0 240px", textAlign: "right" }}>
              {it.en}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// <DataDashboardPage {...dashboard} meta={...} />
// P.02 — section + headline + line chart + donut + heatmap
// ═══════════════════════════════════════════════════════════════════════════
function DataDashboardPage({ meta, section, headline, sub, aside, lineChart, donut, heatmap }) {
  const T = TONE_A;
  return (
    <PageFrame bg={T.paper} ink={T.ink} grain={1} pageNo="P.02" pageNoSide="right" ofTotal={meta.issue}>
      <FolioHeader left="SECTION · DATA DESK" right={`SUBCULTURE MONTHLY · ${meta.issue}`} />

      <div style={{ position: "absolute", top: 92, left: 56, right: 56 }}>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.22em", color: T.red, textTransform: "uppercase", marginBottom: 8 }}>
          {section}
        </div>
        <h1 style={{ fontFamily: "'EB Garamond',serif", fontSize: 64, lineHeight: 0.98, margin: 0, color: T.ink, letterSpacing: "-0.02em", fontWeight: 500 }}>
          {headline.pre}<br/>
          <span style={{ fontStyle: "italic", color: T.red }}>{headline.emphasis}</span>
        </h1>
        <div style={{ marginTop: 14, maxWidth: 820, fontFamily: "'Noto Serif KR',serif", fontSize: 16, lineHeight: 1.55, color: T.ink, opacity: 0.82, textWrap: "pretty" }}>
          {sub}
        </div>
        <div style={{ marginTop: 12, fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.14em", color: T.muted, textTransform: "uppercase" }}>
          참고 — 6게임 합산 추정 매출 <span style={{ color: T.ink, fontWeight: 600 }}>{aside.totalRev}</span> · 전월 대비 <span style={{ color: T.red }}>{aside.momChange}</span>
        </div>
      </div>

      {/* Line chart */}
      <Zoomable label="FIG. 01 · 3-Month Revenue (6 titles)" style={{ position: "absolute", top: 410, left: 40, right: 40, cursor: "zoom-in" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "0 20px", marginBottom: 10 }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: "0.18em", color: T.ink, textTransform: "uppercase", fontWeight: 600 }}>
            {lineChart.label}
          </div>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: T.muted }}>
            {lineChart.source}
          </div>
        </div>
        <div style={{ background: "#F6F1E0", padding: "6px 20px 0", borderTop: `2px solid ${T.ink}`, borderBottom: `1px solid ${T.hair}` }}>
          <RevLineChart
            width={1120} height={380}
            ink={T.ink} grid={T.hair} accent={T.red}
            months={lineChart.months}
            series={lineChart.series}
            highlight={lineChart.highlight}
          />
        </div>
      </Zoomable>

      {/* Two-column bottom */}
      <div style={{ position: "absolute", left: 56, right: 56, top: 920, display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 28 }}>
        <Zoomable label="FIG. 02 · New Units by Gender" style={{ border: `1px solid ${T.hair}`, padding: 24, background: "rgba(255,255,255,0.4)", cursor: "zoom-in" }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.18em", color: T.red, textTransform: "uppercase", marginBottom: 8 }}>
            {donut.label}
          </div>
          <div style={{ fontFamily: "'EB Garamond',serif", fontSize: 28, color: T.ink, letterSpacing: "-0.01em", marginBottom: 14 }}>
            {donut.headline.pre} <span style={{ color: T.red, fontStyle: "italic" }}>{donut.headline.emphasis}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <GenderDonut size={280} ink={T.ink} accent={T.red} muted="rgba(0,0,0,0.18)" data={donut.data} />
          </div>
          <div style={{ marginTop: 14, fontFamily: "'Noto Serif KR',serif", fontSize: 13, lineHeight: 1.55, color: T.ink, opacity: 0.8, textWrap: "pretty" }}>
            {donut.caption}
          </div>
        </Zoomable>
        <Zoomable label="FIG. 03 · Element × Title Heatmap" style={{ border: `1px solid ${T.hair}`, padding: 24, background: "rgba(255,255,255,0.4)", cursor: "zoom-in" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.18em", color: T.red, textTransform: "uppercase" }}>
              {heatmap.label}
            </div>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, color: T.muted, letterSpacing: "0.12em" }}>
              {heatmap.scale}
            </div>
          </div>
          <div style={{ fontFamily: "'EB Garamond',serif", fontSize: 28, color: T.ink, letterSpacing: "-0.01em", marginBottom: 16, marginTop: 8 }}>
            {heatmap.headline.pre}<br/>
            <span style={{ fontStyle: "italic" }}>{heatmap.headline.emphasis}</span>
          </div>
          <Heatmap
            ink={T.ink} bg={T.paper} accent={T.red} cell={62}
            cols={heatmap.colsEn}
            rows={heatmap.rows}
          />
          <div style={{ marginTop: 14, fontFamily: "'Noto Serif KR',serif", fontSize: 13, lineHeight: 1.55, color: T.ink, opacity: 0.8, textWrap: "pretty" }}>
            {heatmap.caption}
          </div>
        </Zoomable>
      </div>
    </PageFrame>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// <GameFeatureVisualPage game={...} index={n} total={6} pageNo="P.05" />
// Left page of a 2-page spread. Visual-first.
// ═══════════════════════════════════════════════════════════════════════════
function GameFeatureVisualPage({ game, index, total, pageNo, issue }) {
  const T = TONE_A;
  const C = game.character;
  const pc = game.pageColor || { splash: "#E5DDC9", stripe: "rgba(0,0,0,0.06)", angle: -14 };
  // Title splits — first word stays roman, rest goes italic on a new line.
  const titleWords = game.en.split(":")[0].split(" ");
  const firstWord = titleWords[0];
  const restWord = titleWords.length > 1 ? titleWords.slice(1).join(" ") + "." : game.ko + ".";
  return (
    <PageFrame bg={T.paper} ink={T.ink} grain={1} pageNo={pageNo} pageNoSide="left" ofTotal={issue}>
      {/* Splash background — wrapped in Zoomable for click-to-enlarge */}
      <Zoomable label={`${C.ko} / ${C.en} — Cover Art`} style={{ position: "absolute", inset: 0, cursor: "zoom-in" }}>
        <div style={{ position: "absolute", inset: 0, background: pc.splash, overflow: "hidden" }}>
          {C.splashUrl ? (
            <React.Fragment>
              <img
                src={C.splashUrl}
                alt={`${C.ko} / ${C.en} hero portrait`}
                referrerPolicy="no-referrer"
                style={{
                  position: "absolute", inset: 0,
                  width: "100%", height: "100%",
                  objectFit: "cover",
                  objectPosition: C.splashFocus || "center 30%",
                  filter: "saturate(0.92) contrast(0.96)",
                }}
              />
              {/* Top fade — strong solid band then gentle fall-off so the masthead never sits on top of the image. */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 480,
                background: `linear-gradient(to bottom, ${pc.splash} 0%, ${pc.splash} 30%, ${pc.splash}EE 55%, rgba(0,0,0,0) 100%)`,
                pointerEvents: "none",
              }} />
              {/* Bottom fade — keeps the name plate readable. */}
              <div style={{
                position: "absolute", left: 0, right: 0, bottom: 0, height: 360,
                background: `linear-gradient(to top, ${pc.splash} 0%, ${pc.splash}DD 35%, rgba(0,0,0,0) 100%)`,
                pointerEvents: "none",
              }} />
            </React.Fragment>
          ) : (
            <SplashSlot
              bg={pc.splash}
              stripe={pc.stripe}
              ink={T.ink}
              caption={C.splashCaption}
              sub={`1200 × 1600 · drop hero image · ${C.en}`}
              angle={pc.angle}
            />
          )}
        </div>
      </Zoomable>

      {/* Top overprint masthead — game icon + Korean name as the brand
          marker, English title kept small/ghosted, tagline as hero. */}
      <div style={{ position: "absolute", top: 40, left: 56, right: 56, pointerEvents: "none" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", color: T.ink, opacity: 0.9 }}>
          <span style={{ color: T.red, fontWeight: 600 }}>● FEATURE · {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
          <span style={{ fontWeight: 600 }}>SUBCULTURE MONTHLY · {issue}</span>
        </div>

        {/* Game brand strip — icon + Korean name + studio·patch line.
            This is the new primary identifier; the English wordmark sits underneath. */}
        <div style={{ marginTop: 26, display: "flex", alignItems: "center", gap: 18 }}>
          {game.iconUrl && (
            <div style={{ width: 84, height: 84, borderRadius: 18, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.18), inset 0 0 0 1px rgba(255,255,255,0.6)", background: T.paper, flex: "0 0 auto" }}>
              <img
                src={game.iconUrl}
                alt={`${game.ko} app icon`}
                referrerPolicy="no-referrer"
                style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }}
              />
            </div>
          )}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 2 }}>
            <div style={{ fontFamily: "'Noto Serif KR',serif", fontSize: 44, color: T.ink, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.0 }}>
              {game.ko}
            </div>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: "0.16em", color: T.ink, opacity: 0.75, textTransform: "uppercase", fontWeight: 600 }}>
              {game.studio} · {game.patchTitle} · {C.release}
            </div>
          </div>
        </div>

        {/* English wordmark — ghosted, plays support role */}
        <div style={{ marginTop: 14, fontFamily: "'EB Garamond',serif", fontSize: 64, lineHeight: 0.95, letterSpacing: "-0.035em", fontWeight: 400, color: T.ink, opacity: 0.35, fontStyle: "italic" }}>
          {game.en.split(":")[0]}.
        </div>

        {/* Tagline — THE hero. Paper-tone backing for legibility over the splash. */}
        {C.tagline && (
          <div style={{ marginTop: 18, display: "inline-block", maxWidth: 660 }}>
            <div style={{
              background: "rgba(252,250,243,0.82)",
              backdropFilter: "blur(2px)",
              WebkitBackdropFilter: "blur(2px)",
              padding: "10px 18px 12px",
              borderLeft: `3px solid ${T.red}`,
              boxShadow: "0 1px 0 rgba(26,26,26,0.06)",
            }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.22em", color: T.red, fontWeight: 700, textTransform: "uppercase", marginBottom: 4 }}>
                THIS UNIT
              </div>
              <div style={{ fontFamily: "'Noto Serif KR',serif", fontSize: 30, color: T.ink, lineHeight: 1.25, letterSpacing: "-0.015em", fontWeight: 600 }}>
                {C.tagline}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom name plate — bigger, more readable */}
      <Zoomable label={`${C.ko} / ${C.en} — Spec Sheet`} style={{ position: "absolute", left: 56, right: 56, bottom: 110, background: T.paper, padding: "30px 32px 26px", boxShadow: "0 0 0 1px rgba(0,0,0,0.1)", cursor: "zoom-in" }}>
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 28, alignItems: "end" }}>
          <div>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: "0.24em", textTransform: "uppercase", color: T.red, fontWeight: 600 }}>
              NEW UNIT · {C.release}
            </div>
            <div style={{ marginTop: 8, fontFamily: "'EB Garamond',serif", fontSize: 96, lineHeight: 0.9, letterSpacing: "-0.02em", color: T.ink, fontWeight: 500 }}>
              {C.ko}<span style={{ fontStyle: "italic", color: T.red }}> / {C.en}</span>
            </div>
          </div>
          <div style={{ borderLeft: `1px solid ${T.hair}`, paddingLeft: 24, display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "8px 18px", fontFamily: "'JetBrains Mono',monospace", fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            <span style={{ color: T.muted }}>RARITY</span><span style={{ color: T.ink, fontWeight: 600 }}>{C.rarity}</span>
            <span style={{ color: T.muted }}>ROLE</span><span style={{ color: T.ink, fontWeight: 600 }}>{C.role}</span>
            <span style={{ color: T.muted }}>ELEMENT</span><span style={{ color: T.ink, fontWeight: 600 }}>{C.element}</span>
            <span style={{ color: T.muted }}>BANNER</span><span style={{ color: T.ink, fontWeight: 600 }}>{C.banner}</span>
            <span style={{ color: T.muted }}>FACTION</span><span style={{ color: T.ink, fontWeight: 600 }}>{C.faction}</span>
          </div>
          <div style={{ fontFamily: "'EB Garamond',serif", fontSize: 32, lineHeight: 1, color: T.red, fontStyle: "italic" }}>
            →
          </div>
        </div>
      </Zoomable>
    </PageFrame>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// <GameFeatureBodyPage game={...} index={n} total={6} pageNo="P.06" />
// Right page of a 2-page spread. Body, timeline, fields, patch, quote.
// ═══════════════════════════════════════════════════════════════════════════
function GameFeatureBodyPage({ game, index, total, pageNo, prevPageNo, issue }) {
  const T = TONE_A;
  const C = game.character;
  const rev = C.revTrend || {
    label: "3-MO REVENUE TREND",
    months: ["FEB", "MAR", "APR"],
    values: [0, 0, 0],
    highlight: 2,
    unit: "$M",
    note: "",
    source: "",
  };
  return (
    <PageFrame bg={T.paper} ink={T.ink} grain={1} pageNo={pageNo} pageNoSide="right" ofTotal={issue}>
      <div style={{ position: "absolute", top: 40, left: 56, right: 56, display: "flex", justifyContent: "space-between", fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", color: T.ink, opacity: 0.9 }}>
        <span style={{ color: T.red, fontWeight: 600 }}>● cont&apos;d from {prevPageNo}</span>
        <span style={{ fontWeight: 600 }}>FEATURE · {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")} · {game.ko} / {game.en.toUpperCase()}</span>
      </div>
      <div style={{ position: "absolute", top: 64, left: 56, right: 56, height: 1, background: T.ink, opacity: 0.45 }} />

      {/* Lead — character intro headline + body */}
      <Zoomable label={`${C.ko} — Character Intro`} style={{ position: "absolute", top: 92, left: 56, right: 56, cursor: "zoom-in" }}>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, letterSpacing: "0.22em", color: T.red, textTransform: "uppercase", marginBottom: 10, fontWeight: 600 }}>
          CHARACTER INTRO · 캐릭터 소개
        </div>
        <h2 style={{ fontFamily: "'EB Garamond',serif", fontSize: 66, lineHeight: 1.0, margin: 0, color: T.ink, letterSpacing: "-0.025em", fontWeight: 500 }}>
          {C.leadKo}<br/>
          <span style={{ fontStyle: "italic", color: T.red }}>{C.leadEmph}</span>
        </h2>
        {C.tagline && (
          <div style={{ marginTop: 14, fontFamily: "'Noto Serif KR',serif", fontSize: 19, lineHeight: 1.4, color: T.ink, opacity: 0.78, fontStyle: "italic", letterSpacing: "-0.01em" }}>
            {C.tagline}
          </div>
        )}
        <div style={{ marginTop: 18, fontFamily: "'Noto Serif KR',serif", fontSize: 17, lineHeight: 1.65, color: T.ink, opacity: 0.9, textWrap: "pretty", columns: 2, columnGap: 38 }}>
          {C.intro || C.body}
        </div>
      </Zoomable>

      {/* Good / Bad — 2 columns */}
      <div style={{ position: "absolute", top: 690, left: 56, right: 56, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
        <Zoomable label={`${C.ko} — Good Points`} style={{ border: `1px solid ${T.hair}`, padding: "16px 18px", background: "rgba(255,255,255,0.45)", cursor: "zoom-in" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, letterSpacing: "0.22em", color: T.ink, fontWeight: 700, textTransform: "uppercase" }}>● GOOD</span>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.14em", color: T.muted, textTransform: "uppercase" }}>디자인 강점</span>
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, fontFamily: "'Noto Serif KR',serif", fontSize: 14.5, lineHeight: 1.5, color: T.ink }}>
            {(C.good || []).map((g, i) => (
              <li key={i} style={{ display: "flex", gap: 10, padding: "5px 0", borderBottom: i < (C.good.length - 1) ? `1px solid ${T.hair}` : "none" }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", color: T.ink, opacity: 0.5, flex: "0 0 24px", fontSize: 12 }}>{String(i + 1).padStart(2, "0")}</span>
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </Zoomable>
        <Zoomable label={`${C.ko} — Bad Points`} style={{ border: `1px solid ${T.red}`, padding: "16px 18px", background: T.red, color: T.paper, cursor: "zoom-in" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, letterSpacing: "0.22em", color: T.paper, fontWeight: 700, textTransform: "uppercase" }}>○ BAD</span>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.14em", color: T.paper, opacity: 0.7, textTransform: "uppercase" }}>약점·개선점</span>
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, fontFamily: "'Noto Serif KR',serif", fontSize: 14.5, lineHeight: 1.5, color: T.paper }}>
            {(C.bad || []).map((g, i) => (
              <li key={i} style={{ display: "flex", gap: 10, padding: "5px 0", borderBottom: i < (C.bad.length - 1) ? "1px solid rgba(250,246,236,0.25)" : "none" }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", color: T.paper, opacity: 0.55, flex: "0 0 24px", fontSize: 12 }}>{String(i + 1).padStart(2, "0")}</span>
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </Zoomable>
      </div>

      {/* User reactions — 3 quote cards */}
      <Zoomable label={`${C.ko} — User Reactions`} style={{ position: "absolute", top: 980, left: 56, right: 56, cursor: "zoom-in" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 8 }}>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 13, letterSpacing: "0.22em", color: T.red, fontWeight: 700, textTransform: "uppercase" }}>USER REACTIONS · 유저 반응</span>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: T.muted, letterSpacing: "0.14em" }}>3 sources · 국내외 커뮤니티</span>
        </div>
        <div style={{ borderTop: `2px solid ${T.ink}`, paddingTop: 12, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
          {(C.reactions || []).map((r, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.55)", border: `1px solid ${T.hair}`, padding: "12px 14px", position: "relative" }}>
              <div style={{ position: "absolute", top: -4, left: 8, fontFamily: "'EB Garamond',serif", fontSize: 44, lineHeight: 1, color: T.red, fontStyle: "italic", opacity: 0.85 }}>“</div>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.18em", color: T.red, fontWeight: 600, textTransform: "uppercase", marginLeft: 22 }}>{r.src}</div>
              <div style={{ marginTop: 6, fontFamily: "'Noto Serif KR',serif", fontSize: 14, lineHeight: 1.55, color: T.ink, opacity: 0.92, textWrap: "pretty" }}>
                {r.body}
              </div>
            </div>
          ))}
        </div>
      </Zoomable>

      {/* Patch notes (left) + Revenue trend (right) */}
      <div style={{ position: "absolute", left: 56, right: 56, bottom: 110, display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: 22 }}>
        <Zoomable label={`${game.ko} — Patch Notes`} style={{ borderLeft: `3px solid ${T.red}`, paddingLeft: 16, cursor: "zoom-in" }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: "0.22em", color: T.red, textTransform: "uppercase", fontWeight: 700 }}>
            {game.patchEn}
          </div>
          <div style={{ fontFamily: "'EB Garamond',serif", fontSize: 24, marginTop: 4, color: T.ink, letterSpacing: "-0.01em" }}>
            {game.patchTitle}
          </div>
          <ul style={{ marginTop: 10, padding: 0, listStyle: "none", fontFamily: "'Noto Serif KR',serif", fontSize: 13.5, lineHeight: 1.55, color: T.ink, opacity: 0.9 }}>
            {game.patchBullets.map((b, i) => (
              <li key={i} style={{ padding: "2px 0", display: "flex", gap: 8 }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", color: T.red, flex: "0 0 26px", fontSize: 12, fontWeight: 600 }}>{String(i + 1).padStart(2, "0")}</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </Zoomable>
        <Zoomable label={`${game.ko} — Revenue Trend (3-mo)`} style={{ background: "rgba(0,0,0,0.04)", border: `1px solid ${T.hair}`, padding: "14px 16px 12px", cursor: "zoom-in" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: "0.22em", color: T.red, textTransform: "uppercase", fontWeight: 700 }}>
              {rev.label}
            </div>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: T.muted, letterSpacing: "0.12em" }}>{rev.unit} · MoM</div>
          </div>
          <div style={{ marginTop: 6, display: "flex", justifyContent: "center" }}>
            <MiniRevTrend
              width={480} height={170}
              ink={T.ink} accent={T.red} hair={T.hair} paper={T.paper}
              months={rev.months}
              values={rev.values}
              highlight={rev.highlight ?? rev.months.length - 1}
              unit={rev.unit || "$"}
            />
          </div>
          <div style={{ marginTop: 6, fontFamily: "'Noto Serif KR',serif", fontSize: 12.5, lineHeight: 1.5, color: T.ink, opacity: 0.85, textWrap: "pretty" }}>
            {rev.note}
          </div>
          <div style={{ marginTop: 6, fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: T.muted, letterSpacing: "0.12em" }}>
            SOURCE · {rev.source}
          </div>
        </Zoomable>
      </div>
    </PageFrame>
  );
}

// ─── Hard cover & endpaper components ──────────────────────────────────────
// These render under StPageFlip's showCover=true treatment: indices 0 and (n-1)
// flip as stiff hardback. Inner endpapers preserve game-feature page pairing
// while keeping the hardback pages free of any editorial content.

function HardFrontCover({ meta }) {
  return (
    <PageFrame bg="#F2EAD3" ink="#1A1A1A" grain={8} pageNo={null} rule={false}
      style={{ boxShadow: "inset 0 0 80px rgba(26,26,26,0.06)" }}>
      {/* Top edge band */}
      <div style={{ position: "absolute", top: 64, left: 96, right: 96,
                    display: "flex", justifyContent: "space-between",
                    fontFamily: "'JetBrains Mono',monospace", fontSize: 11,
                    letterSpacing: "0.28em", textTransform: "uppercase",
                    color: "rgba(26,26,26,0.7)" }}>
        <span>{meta.issn || "ISSN 0000-0001"}</span>
        <span style={{ color: "#C44536", fontWeight: 600 }}>● 월간 · MONTHLY</span>
        <span>{meta.price || "₩9,800"}</span>
      </div>

      {/* Centered masthead */}
      <div style={{ position: "absolute", top: 580, left: 96, right: 96, textAlign: "center" }}>
        <div style={{ fontFamily: "'EB Garamond',serif", fontSize: 168, lineHeight: 0.95,
                      letterSpacing: "-0.03em", color: "#1A1A1A", fontWeight: 500 }}>
          Subculture
        </div>
        <div style={{ fontFamily: "'EB Garamond',serif", fontStyle: "italic",
                      fontSize: 168, lineHeight: 0.95, letterSpacing: "-0.03em",
                      color: "#1A1A1A", fontWeight: 500, marginTop: -10 }}>
          Monthly
        </div>
      </div>

      {/* Bottom: issue label + accent rule */}
      <div style={{ position: "absolute", bottom: 140, left: 96, right: 96, textAlign: "center" }}>
        <div style={{ width: 140, height: 1, background: "#1A1A1A", opacity: 0.4, margin: "0 auto 24px" }} />
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 16,
                      letterSpacing: "0.5em", textTransform: "uppercase",
                      color: "#1A1A1A" }}>
          {meta.issue || "Vol.01"} · {meta.coverDate || "APR 2026"}
        </div>
        <div style={{ marginTop: 28, display: "flex", justifyContent: "center" }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#C44536" }} />
        </div>
      </div>

      {/* Bottom-edge mono tag */}
      <div style={{ position: "absolute", bottom: 56, left: 0, right: 0, textAlign: "center",
                    fontFamily: "'JetBrains Mono',monospace", fontSize: 10,
                    letterSpacing: "0.4em", textTransform: "uppercase",
                    color: "rgba(26,26,26,0.5)" }}>
        {meta.tagline || "월간 서브컬처 데이터 저널"}
      </div>
    </PageFrame>
  );
}

function EndpaperFront() {
  return (
    <PageFrame bg="#F4EDD9" ink="#1A1A1A" grain={2} pageNo={null} rule={false}>
      {/* Very subtle hatched pattern */}
      <svg style={{ position: "absolute", inset: 0, opacity: 0.06 }} width="100%" height="100%">
        <defs>
          <pattern id="endpaper-hatch-front" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="20" stroke="#1A1A1A" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#endpaper-hatch-front)" />
      </svg>

      {/* Tiny monogram */}
      <div style={{ position: "absolute", top: "50%", left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontFamily: "'EB Garamond',serif", fontStyle: "italic",
                    fontSize: 96, color: "rgba(26,26,26,0.18)",
                    letterSpacing: "-0.04em" }}>
        S · M
      </div>
    </PageFrame>
  );
}

function EndpaperBack() {
  return (
    <PageFrame bg="#F4EDD9" ink="#1A1A1A" grain={2} pageNo={null} rule={false}>
      <svg style={{ position: "absolute", inset: 0, opacity: 0.06 }} width="100%" height="100%">
        <defs>
          <pattern id="endpaper-hatch-back" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="rotate(-45)">
            <line x1="0" y1="0" x2="0" y2="20" stroke="#1A1A1A" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#endpaper-hatch-back)" />
      </svg>
      <div style={{ position: "absolute", top: "50%", left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontFamily: "'EB Garamond',serif", fontStyle: "italic",
                    fontSize: 96, color: "rgba(26,26,26,0.18)",
                    letterSpacing: "-0.04em" }}>
        S · M
      </div>
    </PageFrame>
  );
}

function HardBackCover({ meta }) {
  return (
    <PageFrame bg="#F2EAD3" ink="#1A1A1A" grain={8} pageNo={null} rule={false}
      style={{ boxShadow: "inset 0 0 80px rgba(26,26,26,0.06)" }}>
      {/* Top */}
      <div style={{ position: "absolute", top: 64, left: 96, right: 96,
                    display: "flex", justifyContent: "space-between",
                    fontFamily: "'JetBrains Mono',monospace", fontSize: 11,
                    letterSpacing: "0.28em", textTransform: "uppercase",
                    color: "rgba(26,26,26,0.7)" }}>
        <span>{meta.issn || "ISSN 0000-0001"}</span>
        <span style={{ color: "#C44536", fontWeight: 600 }}>● 월간 · MONTHLY</span>
        <span>{meta.price || "₩9,800"}</span>
      </div>

      {/* Center — single accent dot */}
      <div style={{ position: "absolute", top: "50%", left: "50%",
                    transform: "translate(-50%, -50%)", textAlign: "center" }}>
        <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#C44536",
                      margin: "0 auto 32px" }} />
        <div style={{ fontFamily: "'EB Garamond',serif", fontStyle: "italic",
                      fontSize: 42, color: "rgba(26,26,26,0.7)",
                      letterSpacing: "-0.02em", maxWidth: 700 }}>
          다음 호에 계속.
        </div>
        <div style={{ marginTop: 16, fontFamily: "'JetBrains Mono',monospace",
                      fontSize: 12, letterSpacing: "0.32em", textTransform: "uppercase",
                      color: "rgba(26,26,26,0.55)" }}>
          {meta.next || "NEXT ISSUE · Vol.02 · 2026.06.10"}
        </div>
      </div>

      {/* Bottom */}
      <div style={{ position: "absolute", bottom: 64, left: 96, right: 96,
                    display: "flex", justifyContent: "space-between",
                    fontFamily: "'JetBrains Mono',monospace", fontSize: 10,
                    letterSpacing: "0.32em", textTransform: "uppercase",
                    color: "rgba(26,26,26,0.55)" }}>
        <span>{meta.title || "Subculture Monthly"}</span>
        <span>{meta.issue || "Vol.01"} · {meta.coverDate || "APR 2026"}</span>
      </div>
    </PageFrame>
  );
}

Object.assign(window, {
  CoverPage, TocPage, DataDashboardPage,
  GameFeatureVisualPage, GameFeatureBodyPage,
  HardFrontCover, EndpaperFront, EndpaperBack, HardBackCover,
});
