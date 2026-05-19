// Page-type components — front half (P.00 ─ P.14)
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
            <div key={t.n} style={{ padding: "22px 0", borderBottom: `1px solid ${T.hair}` }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
                <span style={{ fontFamily: "'EB Garamond',serif", fontSize: 52, lineHeight: 1, color: T.red, letterSpacing: "-0.02em", fontWeight: 500, flex: "0 0 70px" }}>
                  {t.n}
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "'EB Garamond',serif", fontSize: 32, lineHeight: 1.05, color: T.ink, letterSpacing: "-0.02em", fontWeight: 500 }}>
                    {t.head}
                    <span style={{ fontStyle: "italic", color: T.muted, marginLeft: 10, fontSize: 22 }}>/ {t.en}</span>
                  </div>
                  <div style={{ marginTop: 6, fontFamily: "'Noto Serif KR',serif", fontSize: 15, lineHeight: 1.55, color: T.ink, opacity: 0.85, textWrap: "pretty" }}>
                    {t.body}
                  </div>
                  <div style={{ marginTop: 10, display: "flex", alignItems: "center", gap: 10, fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase" }}>
                    <span style={{ background: T.ink, color: T.paper, padding: "2px 6px" }}>SIGNAL</span>
                    <span style={{ color: T.red, fontWeight: 600 }}>{t.signal.v}</span>
                    <span style={{ color: T.muted }}>· {t.signal.note}</span>
                  </div>
                </div>
              </div>
            </div>
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
    { p: "P.02", ko: "데이터 데스크 · 5월의 시장 검증",         en: "Data Desk · This Month in Numbers" },
  ];
  const features = games.map((g, i) => {
    const left = String(3 + i * 2).padStart(2, "0");
    const right = String(4 + i * 2).padStart(2, "0");
    return { p: `P.${left}–${right}`, ko: `피처 ${String(i + 1).padStart(2, "0")} · ${g.ko}`, en: `Feature ${String(i + 1).padStart(2, "0")} · ${g.en}`, char: g.character.ko };
  });
  const post = [
    { p: "P.15", ko: "교차 분석 · 다섯 트렌드, 여섯 작품",     en: "Cross-Game Analysis" },
    { p: "P.16", ko: "산업 데스크 · 스튜디오·라인업·규제",     en: "Industry Desk" },
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

      {/* TOC body — 3 columns of dotted leaders */}
      <div style={{ position: "absolute", top: 410, left: 56, right: 56 }}>
        <TocBlock title="OPEN" subtitle="00 ─ 02" items={pre} accent={T.red} ink={T.ink} hair={T.hair} muted={T.muted} />
      </div>

      <div style={{ position: "absolute", top: 580, left: 56, right: 56 }}>
        <TocBlock title="FEATURES · 6 GAMES, 12 PAGES" subtitle="03 ─ 14" items={features} accent={T.red} ink={T.ink} hair={T.hair} muted={T.muted} showChar />
      </div>

      <div style={{ position: "absolute", top: 1110, left: 56, right: 56 }}>
        <TocBlock title="CLOSE" subtitle="15 ─ 19" items={post} accent={T.red} ink={T.ink} hair={T.hair} muted={T.muted} />
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
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", borderBottom: `2px solid ${ink}`, paddingBottom: 6, marginBottom: 6 }}>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.24em", color: ink, textTransform: "uppercase", fontWeight: 600 }}>
          {title}
        </div>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.18em", color: accent, textTransform: "uppercase" }}>
          {subtitle}
        </div>
      </div>
      <div>
        {items.map((it, i) => (
          <div key={i} style={{ display: "flex", alignItems: "baseline", gap: 12, padding: "9px 0", borderBottom: `1px solid ${hair}` }}>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.12em", color: accent, flex: "0 0 90px", fontWeight: 600 }}>
              {it.p}
            </span>
            <span style={{ fontFamily: "'EB Garamond',serif", fontSize: 22, color: ink, letterSpacing: "-0.01em", flex: showChar ? "0 0 380px" : "0 0 440px" }}>
              {it.ko}
            </span>
            <span style={{ flex: 1, borderBottom: `1px dotted ${hair}`, transform: "translateY(-4px)" }} />
            {showChar && (
              <span style={{ fontFamily: "'EB Garamond',serif", fontStyle: "italic", fontSize: 15, color: accent, flex: "0 0 130px", textAlign: "right" }}>
                / {it.char}
              </span>
            )}
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.12em", color: muted, textTransform: "uppercase", flex: "0 0 200px", textAlign: "right" }}>
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
      <div style={{ position: "absolute", top: 410, left: 40, right: 40 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "0 20px", marginBottom: 10 }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.18em", color: T.ink, textTransform: "uppercase" }}>
            {lineChart.label}
          </div>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: T.muted }}>
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
      </div>

      {/* Two-column bottom */}
      <div style={{ position: "absolute", left: 56, right: 56, top: 920, display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 28 }}>
        <div style={{ border: `1px solid ${T.hair}`, padding: 24, background: "rgba(255,255,255,0.4)" }}>
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
        </div>
        <div style={{ border: `1px solid ${T.hair}`, padding: 24, background: "rgba(255,255,255,0.4)" }}>
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
        </div>
      </div>
    </PageFrame>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// <GameFeatureVisualPage game={...} index={n} total={6} pageNo="P.03" />
// Left page of a 2-page spread. Visual-first.
// ═══════════════════════════════════════════════════════════════════════════
function GameFeatureVisualPage({ game, index, total, pageNo, issue }) {
  const T = TONE_A;
  const C = game.character;
  const pc = game.pageColor || { splash: "#E5DDC9", stripe: "rgba(0,0,0,0.06)", angle: -14 };
  return (
    <PageFrame bg={T.paper} ink={T.ink} grain={1} pageNo={pageNo} pageNoSide="left" ofTotal={issue}>
      <div style={{ position: "absolute", inset: 0 }}>
        <SplashSlot
          bg={pc.splash}
          stripe={pc.stripe}
          ink={T.ink}
          caption={C.splashCaption}
          sub={`1200 × 1600 · drop hero image · ${C.en}`}
          angle={pc.angle}
        />
      </div>

      {/* Top overprint masthead */}
      <div style={{ position: "absolute", top: 40, left: 56, right: 56 }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: T.ink, opacity: 0.85 }}>
          <span style={{ color: T.red }}>● FEATURE · {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
          <span>SUBCULTURE MONTHLY · {issue}</span>
        </div>
        <div style={{ marginTop: 56, fontFamily: "'EB Garamond',serif", fontSize: 152, lineHeight: 0.86, letterSpacing: "-0.04em", fontWeight: 500, color: T.ink }}>
          {game.en.split(":")[0].split(" ")[0]}
          {game.en.split(":")[0].split(" ").length > 1 && <><br/><span style={{ fontStyle: "italic" }}>{game.en.split(":")[0].split(" ").slice(1).join(" ")}.</span></>}
          {game.en.split(":")[0].split(" ").length === 1 && <><br/><span style={{ fontStyle: "italic" }}>{game.ko}.</span></>}
        </div>
        <div style={{ marginTop: 8, fontFamily: "'Noto Serif KR',serif", fontSize: 26, color: T.ink, opacity: 0.85, letterSpacing: "-0.01em" }}>
          {game.ko} · {game.studio} · {game.patchTitle} · {C.release}
        </div>
      </div>

      {/* Bottom name plate */}
      <div style={{ position: "absolute", left: 56, right: 56, bottom: 110, background: T.paper, padding: "26px 28px 22px", boxShadow: "0 0 0 1px rgba(0,0,0,0.08)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 28, alignItems: "end" }}>
          <div>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.24em", textTransform: "uppercase", color: T.red }}>
              NEW UNIT · {C.release}
            </div>
            <div style={{ marginTop: 6, fontFamily: "'EB Garamond',serif", fontSize: 88, lineHeight: 0.9, letterSpacing: "-0.02em", color: T.ink, fontWeight: 500 }}>
              {C.ko}<span style={{ fontStyle: "italic", color: T.red }}> / {C.en}</span>
            </div>
          </div>
          <div style={{ borderLeft: `1px solid ${T.hair}`, paddingLeft: 24, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 18px", fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            <span style={{ color: T.muted }}>RARITY</span><span style={{ color: T.ink, fontWeight: 600 }}>{C.rarity}</span>
            <span style={{ color: T.muted }}>ROLE</span><span style={{ color: T.ink, fontWeight: 600 }}>{C.role}</span>
            <span style={{ color: T.muted }}>ELEMENT</span><span style={{ color: T.ink, fontWeight: 600 }}>{C.element}</span>
            <span style={{ color: T.muted }}>BANNER</span><span style={{ color: T.ink, fontWeight: 600 }}>{C.banner}</span>
            <span style={{ color: T.muted }}>FACTION</span><span style={{ color: T.ink, fontWeight: 600 }}>{C.faction}</span>
          </div>
          <div style={{ fontFamily: "'EB Garamond',serif", fontSize: 28, lineHeight: 1, color: T.red, fontStyle: "italic" }}>
            →
          </div>
        </div>
      </div>
    </PageFrame>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// <GameFeatureBodyPage game={...} index={n} total={6} pageNo="P.04" />
// Right page of a 2-page spread. Body, timeline, fields, patch, quote.
// ═══════════════════════════════════════════════════════════════════════════
function GameFeatureBodyPage({ game, index, total, pageNo, prevPageNo, issue }) {
  const T = TONE_A;
  const C = game.character;
  return (
    <PageFrame bg={T.paper} ink={T.ink} grain={1} pageNo={pageNo} pageNoSide="right" ofTotal={issue}>
      <div style={{ position: "absolute", top: 40, left: 56, right: 56, display: "flex", justifyContent: "space-between", fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: T.ink, opacity: 0.85 }}>
        <span style={{ color: T.red }}>● cont&apos;d from {prevPageNo}</span>
        <span>FEATURE · {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")} · {game.ko} / {game.en.toUpperCase()}</span>
      </div>
      <div style={{ position: "absolute", top: 64, left: 56, right: 56, height: 1, background: T.ink, opacity: 0.4 }} />

      {/* Lead */}
      <div style={{ position: "absolute", top: 92, left: 56, right: 56 }}>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.22em", color: T.red, textTransform: "uppercase", marginBottom: 8 }}>
          DESIGN READ
        </div>
        <h2 style={{ fontFamily: "'EB Garamond',serif", fontSize: 60, lineHeight: 1.0, margin: 0, color: T.ink, letterSpacing: "-0.025em", fontWeight: 500 }}>
          {C.leadKo}<br/>
          <span style={{ fontStyle: "italic", color: T.red }}>{C.leadEmph}</span>
        </h2>
        <div style={{ marginTop: 16, fontFamily: "'Noto Serif KR',serif", fontSize: 15.5, lineHeight: 1.6, color: T.ink, opacity: 0.85, textWrap: "pretty", columns: 2, columnGap: 36 }}>
          {C.body}
        </div>
      </div>

      {/* Pickup timeline */}
      <div style={{ position: "absolute", top: 460, left: 56, right: 56 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.22em", color: T.ink, textTransform: "uppercase" }}>
            FIG. A · 3-Month Banner Timeline
          </span>
          <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: T.muted, letterSpacing: "0.12em" }}>RED = THIS ISSUE</span>
        </div>
        <PickupTimeline ink={T.ink} grid={T.hair} accent={T.red} width={1088} height={150} lanes={game.pickupTimeline} />
        <div style={{ marginTop: 6, padding: "10px 14px", background: T.ink, color: T.paper, display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            <span><span style={{ color: T.red }}>SIGNAL</span> · 첫 주 추정 매출 <b style={{ color: T.paper }}>{game.revSignal.firstWeek}</b> · <b style={{ color: "#F2B5A8" }}>{game.revSignal.change}</b> · {game.revSignal.note}</span>
          <span style={{ color: "rgba(245,241,232,0.6)" }}>SOURCE · SENSORTOWER COMP.</span>
        </div>
      </div>

      {/* 8-field grid */}
      <div style={{ position: "absolute", top: 730, left: 56, right: 56 }}>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.22em", color: T.red, textTransform: "uppercase", marginBottom: 8 }}>
          CHARACTER FILE · 8 FIELDS
        </div>
        <div style={{ borderTop: `2px solid ${T.ink}`, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
          {C.fields.map((f, i) => (
            <div key={f.label} style={{ padding: "13px 18px 13px 0", borderBottom: i < 6 ? `1px solid ${T.hair}` : "none", borderRight: i % 2 === 0 ? `1px solid ${T.hair}` : "none", paddingLeft: i % 2 === 1 ? 18 : 0 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.18em", color: T.red, textTransform: "uppercase" }}>0{i + 1}</span>
                <span style={{ fontFamily: "'EB Garamond',serif", fontSize: 22, color: T.ink, letterSpacing: "-0.01em" }}>{f.label}</span>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, color: T.muted, letterSpacing: "0.16em", textTransform: "uppercase" }}>/ {f.en}</span>
              </div>
              <div style={{ marginTop: 3, fontFamily: "'Noto Serif KR',serif", fontSize: 13, lineHeight: 1.55, color: T.ink, opacity: 0.82, textWrap: "pretty" }}>
                {f.body}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Patch + Quote */}
      <div style={{ position: "absolute", left: 56, right: 56, bottom: 110, display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 24 }}>
        <div style={{ borderLeft: `3px solid ${T.red}`, paddingLeft: 14 }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, letterSpacing: "0.22em", color: T.red, textTransform: "uppercase" }}>
            {game.patchEn}
          </div>
          <div style={{ fontFamily: "'EB Garamond',serif", fontSize: 22, marginTop: 4, color: T.ink, letterSpacing: "-0.01em" }}>
            {game.patchTitle}
          </div>
          <ul style={{ marginTop: 8, padding: 0, listStyle: "none", fontFamily: "'Noto Serif KR',serif", fontSize: 12.5, lineHeight: 1.55, color: T.ink, opacity: 0.85 }}>
            {game.patchBullets.map((b, i) => (
              <li key={i} style={{ padding: "2px 0", display: "flex", gap: 8 }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", color: T.red, flex: "0 0 24px" }}>{String(i + 1).padStart(2, "0")}</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ background: T.ink, color: T.paper, padding: 18, position: "relative" }}>
          <div style={{ position: "absolute", top: -6, left: 14, fontFamily: "'EB Garamond',serif", fontSize: 64, lineHeight: 1, color: T.red, fontStyle: "italic" }}>“</div>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, letterSpacing: "0.22em", color: T.red, textTransform: "uppercase", marginTop: 18 }}>
            COMMUNITY PULSE
          </div>
          <div style={{ fontFamily: "'Noto Serif KR',serif", fontSize: 13.5, lineHeight: 1.55, marginTop: 8, color: T.paper, textWrap: "pretty" }}>
            {game.quote.body}
          </div>
          <div style={{ marginTop: 12, fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: T.paper, opacity: 0.7, letterSpacing: "0.12em" }}>
            — {game.quote.by}
          </div>
        </div>
      </div>
    </PageFrame>
  );
}

Object.assign(window, {
  CoverPage, TocPage, DataDashboardPage,
  GameFeatureVisualPage, GameFeatureBodyPage,
});
