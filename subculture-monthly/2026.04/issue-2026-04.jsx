// ISSUE_2026_04 — Subculture Monthly Vol.01 (April 2026)
// 본 호는 실제 2026년 4월 데이터를 바탕으로 구성. 매출은 Sensor Tower / AppMagic /
// GACHAREVENUE 인용 추정치이며, 패치 노트·캐릭터 명세는 각 사 공식 발표를 따른다.
// 캐릭터·작품 IP는 본지가 다루는 비평·논평 대상이며 디자인 자체는 본지의 오리지널.

const ISSUE_2026_04 = {
  meta: {
    issue: "Vol.01",
    issueNo: "01",
    date: "2026.04",
    coverDate: "APR 2026",
    price: "₩9,800",
    issn: "ISSN 0000-0001",
    tagline: "월간 서브컬처 데이터 저널",
    title: "Subculture Monthly",
    coverLead: {
      ko: "여섯 작품, 한 달, 열 명의 새 얼굴 — 4월의 캐릭터가 도착했다.",
      en: "Six titles, one month, ten new faces — April's characters have arrived.",
    },
    editorNote:
      "주년이 세 번 겹친 달이었다. 스타레일이 \"새벽에 바치는 폭주\"를, 명조가 \"은하 끝의 메아리\"를, 엔드필드가 \"봄의 깨어남\"을 같은 주에 펼쳤다. 본지는 매출의 곡선보다 캐릭터의 이름과 윤곽을 먼저 본다 — 어떤 캐릭터가 어떤 자리에서 어떤 얼굴로 들어왔는지, 그것이 한 달의 디자인 언어다.",
    coverArt: {
      caption: "이 달의 표지 — 사냥의 밤, 애쉬베일",
      slot: "COVER ILLUSTRATION · 540 × 760",
    },
  },

  // ─── 3-track design insights (cover) ──────────────────────────────────────
  insights: [
    {
      n: "01",
      head: "주년은 캐리가 연다",
      en: "Anniversary Opens With the Carry",
      body: "신규 메인 딜러가 phase 1에 등판하고, 서포터는 phase 2에서 기다린다. HSR 3주년·명조 2주년·원신 6.5가 같은 달, 같은 순서. 주년 = 메타 톱이라는 약속이 6게임 중 4작품에서 명시화됐다.",
      signal: { v: "HSR 4.2 1주차 $60M 이상 추정", note: "Sensor Tower anniversary spike 추세 + Silver Wolf Lv.999 공개 직후" },
    },
    {
      n: "02",
      head: "한 픽업, 세 캐릭터",
      en: "One Pickup, Three Pulls",
      body: "phase당 신규 1 + 복각 2~3. HoYo 3종, Kuro까지 정확히 같은 비율로 정렬됐다. 한 배너에 \"이번 신규\"와 \"지난 빚\"이 같이 실린다 — pity 두 곳을 한 손으로 건드리는 구조.",
      signal: { v: "anniversary 직전 복각 단독 $40M", note: "ixbt.games · 복각이 신규에 견주는 spike를 끌어낸 4월 표본" },
    },
    {
      n: "03",
      head: "배너가 길어졌다",
      en: "Banners Grow Longer, Loops Slow Down",
      body: "엔드필드 1.2 장방이 배너 40일 — HoYo 표준의 두 배. 명조 3.3은 5.5주, ZZZ 2.7도 사이클을 늘렸다. 한 캐릭터가 무대에 머무는 시간이 길어지고, ARPU는 천천히, 더 깊게 회수된다.",
      signal: { v: "엔드필드 일매출 $2.9M (4/18)", note: "1월 글로벌 런칭 이후 일일 최고치 · Outlook Respawn × AppMagic" },
    },
  ],

  // ─── Data dashboard ───────────────────────────────────────────────────────
  dashboard: {
    section: "02 / Design Choices, Market-Tested",
    headline: {
      pre: "스타레일 한 작품이",
      emphasis: "6종 평균을 끌었다.",
    },
    sub:
      "HSR이 4월 가챠 매출 1위 $58.1M, 2위 Genshin과 1.4배 차이로 단독 견인. Sensor Tower Q1 보고서 기준 전세계 모바일 게임 시장은 -1% QoQ, 상위 25 퍼블리셔 중 11개만 증수했고 그 안에서 본지의 6작품 합산은 +5.8%로 시장과 분리됐다. 신작 NTE가 4/29 글로벌 출시 첫날 23억엔(매출 75%가 PC·PS5)으로 가챠 톱6에 진입한 것도 이 달의 부수 효과다.",
    aside: {
      totalRev: "$164.4M",
      momChange: "+5.8%",
      note: "6게임 합산 추정 매출 / 전월 대비 · Sensor Tower × GACHAREVENUE 교차",
    },
    lineChart: {
      label: "FIG. 01 · 3-Month Revenue · $ millions, est.",
      source: "source: Sensor Tower / GACHAREVENUE / AppMagic composite",
      months: ["FEB", "MAR", "APR"],
      series: [
        { id: "hsr", label: "STARRAIL", data: [48.0, 50.0, 58.1] },
        { id: "gi",  label: "GENSHIN",  data: [28.0, 33.0, 40.1] },
        { id: "ef",  label: "ENDFLD.",  data: [46.0, 22.0, 17.3] },
        { id: "nk",  label: "NIKKE",    data: [26.0, 25.0, 27.0] },
        { id: "ww",  label: "WUTHER.",  data: [18.0, 16.0, 13.7] },
        { id: "zzz", label: "ZENLESS",  data: [12.0, 9.0, 7.2] },
      ],
      highlight: ["hsr", "gi"],
    },
    donut: {
      label: "FIG. 02 · New Units by Gender · APR",
      headline: { pre: "여성 9, 남성 0 —", emphasis: "한 분기의 단방향 베팅." },
      caption: "4월 신규 5★/SSR 헤드라이너 10명 중 9명이 여성, 남성 신규는 6게임 전체에서 0명. 주년 한 달의 우연이라기엔 분기 누적도 같은 방향이다. 단기 ARPU는 안전 — 장기 풀(pool)은 좁아진다.",
      data: [
        { label: "여성",   en: "Female", v: 9 },
        { label: "남성",   en: "Male",   v: 0 },
        { label: "비공개", en: "N/A",    v: 1 },
      ],
    },
    heatmap: {
      label: "FIG. 03 · Element × Title · last 6 months (NOV 2025 ─ APR 2026)",
      scale: "0 ─ 4 release count",
      headline: { pre: "얼음과 전기,", emphasis: "두 축이 굵어진다." },
      caption: "히유키(글라시오)·장방이(전기)·시시아(전기) — 4월 신규 헤드라이너 셋 중 셋이 두 속성으로 수렴했다. 양자는 HSR 단일 타이틀 쏠림이 6개월째 유지된다.",
      cols:    ["불꽃", "얼음", "전기", "물리", "양자"],
      colsEn:  ["Pyro", "Cryo", "Electro", "Phys", "Quantum"],
      rows: [
        { id: "gi",  label: "GENSHIN",  values: [2, 1, 1, 1, 0] },
        { id: "hsr", label: "STARRAIL", values: [1, 1, 2, 1, 2] },
        { id: "zzz", label: "ZENLESS",  values: [2, 2, 1, 1, 0] },
        { id: "ww",  label: "WUTHER.",  values: [1, 2, 1, 2, 0] },
        { id: "ef",  label: "ENDFLD.",  values: [1, 1, 2, 2, 0] },
        { id: "nk",  label: "NIKKE",    values: [2, 1, 2, 1, 0] },
      ],
    },
  },

  // ─── 6 game features ──────────────────────────────────────────────────────
  games: [
    // ────────────────────────────────────────────────────────────────────────
    // 01 · GENSHIN — 린네아 (Linnea)
    // ────────────────────────────────────────────────────────────────────────
    {
      id: "gi",
      ko: "원신",
      en: "Genshin Impact",
      studio: "HoYoverse",
      iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/df/69/1c/df691ca2-735f-4617-256d-a49202f8db1e/AppIcon-0-0-1x_U007epad-0-1-85-220.png/256x256bb.jpg",
      patchTitle: "Ver. 6.5 · 루나 VI",
      patchEn: "PATCH NOTE",
      pageColor: { splash: "#DFDFD9", stripe: "rgba(0,0,0,0.06)", angle: -14 },
      character: {
        ko: "린네아",
        en: "Linnea",
        splashUrl: "https://static.wikia.nocookie.net/gensin-impact/images/1/15/Character_Linnea_Full_Wish.png/revision/latest?cb=20260408022449",
        splashFocus: "center 30%",
        rarity: "5★",
        role: "HYBRID SUPPORT",
        roleKo: "하이브리드 서포터·힐러",
        element: "GEO · 바위",
        faction: "MONDSTADT · ADVENTURERS' GUILD",
        factionKo: "몬드 · 모험가 길드",
        banner: "Augur of Wonders",
        release: "2026.04.08",
        tagline: "달빛 결정을 품은 페어리 박물학자",
        leadKo: "달이 내려앉은 결정 속에",
        leadEmph: "잠든 기억을 채집한다.",
        intro:
          "몬드 모험가 길드의 자문위원이자 박물학자. 인간 사회에 섞여 사는 페어리(Fae) 종족으로, 어깨 위에는 그녀의 \"기억\"을 형상화한 작은 정령 Lumi가 항상 함께 부유한다. 분홍빛 머리카락과 별가루처럼 흩날리는 리본, 그리고 어디서나 천천히 돌아가는 결정 케이지가 그녀의 시그니처. 5년 동안 잠들어 있던 Geo 속성을 \"Lunar-Crystallize\"라는 새 반응 하나로 다시 깨우는 캐릭터다. 달의 결정이라는 모티프는 몬드 북부 신지역의 달 신화와 색·광원이 정확히 맞물려, 캐릭터와 지역이 한 묶음으로 도착한다.",
        good: [
          "5년 만에 사장됐던 Geo가 \"Lunar-Crystallize\" 한 줄로 부활 — 캐릭과 속성을 동시에 판매",
          "DEF + EM 동시 스케일링으로 빌드 자유도 최상, 신규 유저에게도 친절",
          "Mavuika · Citlali · Cyno 라인 전체의 자원 회수 사이클을 재가동",
          "달빛 케이지·결정 모션이 몬드 북부 신지역과 색·광원 통일",
        ],
        bad: [
          "Lunar 반응 슬롯은 사실상 그녀 전용 — 대체 캐릭터 0, 향후 인플레 가능성",
          "Hexerei 7인 버프와 출시 시점이 겹쳐 \"누구부터 뽑는가\" 자원 분산",
          "5★ 명성에 비해 시그니처 모션의 신선도는 평이하다는 의견",
        ],
        reactions: [
          { src: "fmkorea · 원신 게시판", body: "린네아 비주얼 진짜 미쳤다. Lumi랑 같이 다니는 모션 보는 순간 픽업 확정했음." },
          { src: "Reddit r/Genshin_Impact", body: "드디어 Geo에 진짜 메인 딜러가 생겼다. Lunar Crystallize는 임시방편이 아니라 진짜 새 반응처럼 느껴진다." },
          { src: "인벤 원신", body: "달 신지역 풍경이랑 캐릭이 한 세트로 묶여있어서 새 지역 보는 거 자체가 보상임." },
        ],
        revTrend: {
          label: "3-MO REVENUE TREND",
          months: ["FEB", "MAR", "APR"],
          values: [93.0, 68.0, 95.0],
          unit: "$M",
          highlight: 2,
          note: "린네아 출시 4/8. 3월 슬럼프(-27%) → 4월 회복(+40%). 6.5 신규 1+복각 3 평탄형 구조가 회복분의 베이스라인.",
          source: "Sensor Tower × GACHAREVENUE 추정",
        },
      },
      patchBullets: [
        "몬드 북부 신지역 2종 (Windrest Peak / Temple of Space) — 5년 만의 몬드 확장",
        "Hexerei 버프 1차 — 몬드 레거시 7인 일제 보강",
        "Lunar-Crystallize 신규 반응 정식 도입",
        "복각: 차스카(바람) · 라우마(풀) · 네페르(불)",
        "신규 월드 보스 + Spiral Abyss 층 리프레시",
        "PS4 지원 종료 (4/8) — 콘솔 fragmentation 정리",
      ],
      quote: {
        body: "\"린네아 빼면 6.5 즐길거리가 없다 진심으로. 몬드 신지역 본 거 자체가 보상이긴 함.\"",
        by: "fmkorea 원신 게시판 · 6.5 정리 글",
      },
      pickupTimeline: [
        { m: "FEB", items: [{ x0: 0.04, w: 0.20, label: "바르카" }, { x0: 0.28, w: 0.18, label: "플린스 [복각]" }] },
        { m: "MAR", items: [{ x0: 0.06, w: 0.20, label: "스커크 [복각]" }, { x0: 0.30, w: 0.20, label: "에스코피에 [복각]" }] },
        { m: "APR", items: [{ x0: 0.04, w: 0.22, label: "린네아", highlight: true }, { x0: 0.30, w: 0.18, label: "차스카 [복각]" }] },
      ],
      revSignal: { firstWeek: "$95M (월간 추정)", change: "MoM +40%", note: "3월 슬럼프에서 회복 · 신규 1 + 복각 3 평탄형 구조가 정확히 작동" },
    },

    // ────────────────────────────────────────────────────────────────────────
    // 02 · HSR — 애쉬베일 (Ashveil)
    // ────────────────────────────────────────────────────────────────────────
    {
      id: "hsr",
      ko: "스타레일",
      en: "Honkai: Star Rail",
      studio: "HoYoverse",
      iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/56/10/4a/56104ae6-272f-0619-908e-6ce14305b4fe/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/256x256bb.jpg",
      patchTitle: "Ver. 4.1 · 새벽에 바치는 폭주",
      patchEn: "PATCH NOTE",
      pageColor: { splash: "#D6D5CF", stripe: "rgba(0,0,0,0.06)", angle: -20 },
      character: {
        ko: "애쉬베일",
        en: "Ashveil",
        splashUrl: "https://static.wikia.nocookie.net/houkai-star-rail/images/d/d4/Character_Ashveil_Splash_Art.png/revision/latest?cb=20260313174406",
        splashFocus: "center 30%",
        rarity: "5★",
        role: "HUNT · CRIT DPS",
        roleKo: "수렵 · 치명타 딜러",
        element: "LIGHTNING · 번개",
        faction: "STELLARON HUNTERS",
        factionKo: "스텔라론 헌터즈",
        banner: "A Hunt Through Night",
        release: "2026.03.25",
        tagline: "낮엔 탐정, 밤엔 천둥의 사냥꾼",
        leadKo: "한 명을 표적으로 묶으면,",
        leadEmph: "밤이 그녀의 편이 된다.",
        intro:
          "낮 동안은 시가 한 대를 물고 다니는 나른한 사립탐정. 사건의 윤곽이 잡히는 순간 표정이 식고, 검붉은 잿빛 입자와 함께 사냥의 자세로 바꿔 든다. 4.x 메인 스토리를 본편 인물이 아닌 \"기록자\"로 따라가는 첫 5★ — 이야기의 안쪽이 아니라 바깥에서 보는 시선이다. 한국어판은 강수진 캐스팅, 명탐정 코난을 길러낸 그 음색이 그대로 들어왔다. 야간 추적 모티프 · 표식 SFX · 절제된 사운드까지, 4.x 누아르 톤의 디자인 기준점을 세우는 캐릭터.",
        good: [
          "표적 1명 Bait → 그 적의 디버프가 전열로 번지는 \"단일 ↔ 광역\" 경계 해체 메커닉",
          "Hunt 운명이면서 팀 CRIT DMG 버프 동시 — 딜러+서포터 슬롯을 한 명에 통합",
          "강수진 캐스팅 + 야간 추적 모티프로 4.x 누아르 톤 정착",
          "기록자라는 외부 시점 배치로 본편 캐릭과의 충돌 없이 메인 스토리에 합류",
        ],
        bad: [
          "4.2 Silver Wolf Lv.999 4주 후 등장 — \"자원 못 쓰는 명백 S\" 토론",
          "Bait 메커닉 학습 곡선이 가팔라 일반 던전 즉시 픽업엔 부담",
          "단일 패치 단축으로 한국 정식 출시 일정과 글로벌이 어긋남",
        ],
        reactions: [
          { src: "인벤 붕괴 스타레일", body: "강수진 캐스팅 듣자마자 뽑기 확정. 명탐정 코난 그 자체임 이건." },
          { src: "Reddit r/HonkaiStarRail", body: "애쉬베일의 미끼 메커니즘이 타겟 우선순위를 보는 관점 자체를 바꿔놓는다. 4.x 디자인의 선언문 같은 캐릭." },
          { src: "아카라이브 HSR", body: "근데 4.2 Silver Wolf Lv.999 보고 또 보류 중. 운영진 의도 다 보임." },
        ],
        revTrend: {
          label: "3-MO REVENUE TREND",
          months: ["FEB", "MAR", "APR"],
          values: [93.0, 145.0, 110.0],
          unit: "$M",
          highlight: 2,
          note: "4.1은 4주 단축 패치로 일부러 매출을 누른 분기. 3월 spike(+56%) → 4월 정상화. 본 spike는 5월 4.2 3주년에 이연.",
          source: "Sensor Tower × GACHAREVENUE 추정",
        },
      },
      patchBullets: [
        "4주 단축 패치 — 3주년(4.2) 정렬용 매출 이연",
        "신규 5성 1 (애쉬베일) + 복각 2 (히아신·부트힐)",
        "Hunt 운명 신규 광추 + 유물 세트 추가",
        "망각의 전당·혼돈의 기억 메타 갱신",
        "메인 스토리 4.x 외부 시점 챕터 진입",
        "4.2 예고: Silver Wolf Lv.999 / Evanescia / 환희 개척자",
      ],
      quote: {
        body: "\"강수진 캐스팅 듣자마자 뽑기 확정. 명탐정 코난 그 자체.\"",
        by: "인벤 붕괴 스타레일 게시판",
      },
      pickupTimeline: [
        { m: "FEB", items: [{ x0: 0.04, w: 0.20, label: "야오광" }, { x0: 0.28, w: 0.18, label: "스파시" }] },
        { m: "MAR", items: [{ x0: 0.06, w: 0.20, label: "애쉬베일 (intro)" }, { x0: 0.32, w: 0.18, label: "히아신 [복각]" }] },
        { m: "APR", items: [{ x0: 0.04, w: 0.22, label: "애쉬베일", highlight: true }, { x0: 0.30, w: 0.20, label: "부트힐 [복각]" }] },
      ],
      revSignal: { firstWeek: "$110M (월간 추정)", change: "단축 패치 압축", note: "4.1은 매출을 일부러 누른 분기 — 4.2 3주년 phase 1으로 spike 이연" },
    },

    // ────────────────────────────────────────────────────────────────────────
    // 03 · ZZZ — 시시아 (Cissia)
    // ────────────────────────────────────────────────────────────────────────
    {
      id: "zzz",
      ko: "젠레스",
      en: "Zenless Zone Zero",
      studio: "HoYoverse",
      iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/91/1e/9d/911e9df7-8a8e-66e3-14d8-83867c5b219e/AppIcon-1x_U007emarketing-0-8-0-85-220.png/256x256bb.jpg",
      patchTitle: "Ver. 2.7 · 챔피언은 과거에 무릎 꿇지 않는다",
      patchEn: "PATCH NOTE",
      pageColor: { splash: "#DBDAD3", stripe: "rgba(0,0,0,0.07)", angle: -8 },
      character: {
        ko: "시시아",
        en: "Cissia",
        splashUrl: "https://static.wikia.nocookie.net/zenless-zone-zero/images/8/83/Agent_Cissia_Portrait.png/revision/latest?cb=20260306125558",
        splashFocus: "center 30%",
        rarity: "S랭크",
        role: "ATTACK · HYBRID",
        roleKo: "강습 · 하이브리드",
        element: "ELECTRIC · 전기",
        faction: "METROPOLITAN ORDER DIV.",
        factionKo: "메트로폴리탄 질서국 · 사건전담반",
        banner: "Venom Procession",
        release: "2026.04.15",
        tagline: "독을 두른 질서국의 신참 수사관",
        leadKo: "Venom 한 방울이",
        leadEmph: "팀의 화력을 모두 깨운다.",
        intro:
          "메트로폴리탄 질서국 사건전담반의 신참 수사관. 본가 인물 풀에 없던 \"Venom\" 코드명을 단 첫 외부 영입 캐릭터다. 보라와 네온 핑크의 전기, 그리고 천천히 흩어지는 독성 안개 — 2.7의 격투 모티프와 정면 대비되는 정밀 사격 톤을 일부러 갈라놓아 같은 패치 안에서 색의 대비를 만들어낸다. 신참답게 절제된 표정 위로 잠깐씩 비치는 미소가 캐릭터 컷신의 무게중심. 메인 딜러·서브 DPS·팀 버퍼 세 역할을 한 명에 응축한, ZZZ가 가장 공격적으로 돌리는 \"몰빵 디자인\"의 분기점.",
        good: [
          "Venom 스택 한 종으로 DEF Shred(딜러) + 팀 CRIT DMG(버퍼) 동시 운용",
          "Anomaly 라인이 아닌 정통 DPS — ZZZ 분기 후반 메타의 무게중심",
          "미야비·Lucia 등 기존 Attack 라인과 즉시 시너지 · 교체 불가 슬롯",
          "보라/네온 핑크 톤이 격투 모티프 2.7 안에서 시각적 대비를 형성",
        ],
        bad: [
          "한 캐릭에 자원 집중을 강요 — 가챠 빈도 감소가 ARPU로 환원되지 못하면 이탈 신호",
          "같은 패치 직전 난궁우 대비 임팩트가 약하다는 의견",
          "외부 영입이라는 설정 탓에 본가 인물풀과의 서사 연결고리 부족",
        ],
        reactions: [
          { src: "아카라이브 ZZZ 채널", body: "시시아 한 명이 강습+버퍼+서브딜 다 됨. 본가 게임 영업방식 그 자체네." },
          { src: "Reddit r/ZenlessZoneZero", body: "방깎이랑 치명타 피해를 같은 자원에 묶어둔 건 그냥 불공정한 설계다 — Venom 스택 하나가 너무 많은 걸 다 해준다." },
          { src: "디시 ZZZ 갤러리", body: "보라 네온 핑크 일러 미친듯이 잘뽑힘. 미야비랑 같이 쓰니까 화면 자체가 다름." },
        ],
        revTrend: {
          label: "3-MO REVENUE TREND",
          months: ["FEB", "MAR", "APR"],
          values: [35.0, 42.0, 38.0],
          unit: "$M",
          highlight: 2,
          note: "2.6 S랭크 3인 spike 후 4월은 회수 분기. 한 명에 자원을 몰아넣는 분기 운영의 비용 — Sensor Tower 톱 10 부재.",
          source: "Sensor Tower × GACHAREVENUE 추정",
        },
      },
      patchBullets: [
        "신규 S랭크 2 — 난궁우(phase 1) · 시시아(phase 2)",
        "복각 2 — 이드하리 · 시드",
        "Stun 유틸 + Disorder 데미지 라인 동시 보강",
        "신규 A랭크 Pulchra · Ben (낮은 가격대 픽업 강화)",
        "공허 캣츠아이 신규 챕터 — 본편 분기 정리",
        "2.8 'Sunset of Eridu' 예고 (4/24 라이브) · ZZZ 첫 Ice Attack",
      ],
      quote: {
        body: "\"시시아 한 명이 강습+버퍼+서브딜 다 됨. 본가 게임 영업방식 그 자체네.\"",
        by: "아카라이브 ZZZ 채널",
      },
      pickupTimeline: [
        { m: "FEB", items: [{ x0: 0.04, w: 0.20, label: "순나" }, { x0: 0.28, w: 0.18, label: "아리아" }] },
        { m: "MAR", items: [{ x0: 0.06, w: 0.20, label: "난궁우" }, { x0: 0.30, w: 0.20, label: "이드하리 [복각]" }] },
        { m: "APR", items: [{ x0: 0.04, w: 0.22, label: "시시아", highlight: true }, { x0: 0.30, w: 0.18, label: "시드 [복각]" }] },
      ],
      revSignal: { firstWeek: "$38M (월간 추정)", change: "2.6 spike 후 회수 분기", note: "한 캐릭에 자원을 몰아넣는 ZZZ 분기 운영 — Sensor Tower 톱 10 부재" },
    },

    // ────────────────────────────────────────────────────────────────────────
    // 04 · 명조 — 히유키 (Hiyuki)
    // ────────────────────────────────────────────────────────────────────────
    {
      id: "ww",
      ko: "명조",
      en: "Wuthering Waves",
      studio: "Kuro Games",
      iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/b5/44/ca/b544ca0a-dd46-a268-b2fa-533d41f97ff7/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/256x256bb.jpg",
      patchTitle: "Ver. 3.3 · 은하 끝에서 메아리치는",
      patchEn: "PATCH NOTE",
      pageColor: { splash: "#D2D2CA", stripe: "rgba(0,0,0,0.06)", angle: -16 },
      character: {
        ko: "히유키",
        en: "Hiyuki",
        splashUrl: "https://static.wikia.nocookie.net/wutheringwaves/images/7/72/Hiyuki_Full_Sprite.png/revision/latest?cb=20260430155021",
        splashFocus: "center 30%",
        rarity: "5★",
        role: "MAIN DPS",
        roleKo: "메인 딜러",
        element: "GLACIO · 빙",
        faction: "BLACK SHORES",
        factionKo: "블랙 쇼어",
        banner: "Reverbs From the End of Galaxies",
        release: "2026.04.30",
        tagline: "검 한 자루로 두 자아를 가르는 검사",
        leadKo: "현재와 미래의 자아가",
        leadEmph: "한 사이클 안에서 만난다.",
        intro:
          "글라시오 검을 다루는 신비계 레조네이터. \"자기 미래를 미리 끌어다 쓴다\"는 이중 자아 모티프가 명조 2주년 메인 서사의 핵으로 자리잡았다. Present Self와 Foreclaimed Self — 두 자아를 폼 스위치로 오가며, 검집을 천천히 정돈하는 거합 자세에서 갑자기 시간정지 강공이 들어간다. 푸른 거합 → 폼 스위치 → 흰 잔상 → 강공이라는 컷신은 2주년 헤드라이너답게 시네마틱 비중이 최상위. 칸트렐라 같은 외부 셔틀 없이 자체 디버프로 사이클이 닫혀, 신규/복귀 유저에게 가장 친절한 픽업.",
        good: [
          "5타 끝 Chafe → 본인 한정 Glacio Bite 강화. 한 사이클 안에서 디버프 부여+회수 완결",
          "외부 셔틀 없이 자체 디버프로 동작 — 신규/복귀 유저에게 진입 장벽 최저",
          "Foreclaimed 폼 스위치 시 시간정지 강공 사이클 — 시네마틱 비중 패치 최고",
          "이중성 IP를 캐릭터 메카닉으로 압축, 서사가 메카닉에서 출발하는 Kuro 방향성 확립",
        ],
        bad: [
          "Glacio Chafe 신규 디버프 자원의 단독 사용자 — 향후 데니아 추가 의존",
          "거합 시전 시간이 길어 일반 던전 솔로 컨텐츠에서 컨트롤 부담",
          "4/30 출시로 4월 매출 기여 1일분만 잡혀 단기 수치 평가가 미루어짐",
        ],
        reactions: [
          { src: "BuffHub", body: "히유키는 명조 역대 캐릭 중 가장 아이코닉한 축에 든다 — 메커니즘 깊이, 폭딜 퍼포먼스, 비주얼 연출 모두 최상위." },
          { src: "fmkorea 명조 채널", body: "히유키 시간정지 컷신 보면 \"이게 2주년이지\" 소리 절로 나옴. Kuro 이번엔 진짜 작정함." },
          { src: "Reddit r/WutheringWaves", body: "이중 자아 메커니즘은 단순 컨셉 장식이 아니다 — 로테이션 짜는 방식 자체를 바꾼다. 2주년 캐릭은 이래야 한다는 표본." },
        ],
        revTrend: {
          label: "3-MO REVENUE TREND",
          months: ["FEB", "MAR", "APR"],
          values: [38.0, 30.0, 52.0],
          unit: "$M",
          highlight: 2,
          note: "히유키 4/30 출시 1일 기여만으로 MoM +73%. 본격 spike는 5월 결산에서 — 모바일 톱 그로싱 진입 정황.",
          source: "Sensor Tower × GACHAREVENUE 추정",
        },
      },
      patchBullets: [
        "2주년 업데이트 — 무료 40연 + 1,600 jades 상응 보상",
        "신규 지역 \"어둠의 평원\" + 메인 스토리 은하 끝 챕터",
        "Glacio Chafe 디버프 자원 정식 도입",
        "Phase 1 (히유키·모르네·이우노) / Phase 2 (데니아·치사·프롤로바)",
        "5.5주 장기 패치 — 4월 말부터 6월 중순까지 단일 사이클",
        "HoYo 추격 담론 가속 — 모바일 톱 그로싱 5월 1주 진입 정황",
      ],
      quote: {
        body: "\"Hiyuki is one of the most iconic characters in Wuthering Waves to date — mechanical depth, burst performance, and visual presentation are top-tier.\"",
        by: "BuffHub · 3.3 빌드 가이드",
      },
      pickupTimeline: [
        { m: "FEB", items: [{ x0: 0.06, w: 0.18, label: "(3.1 자료 미확보)" }] },
        { m: "MAR", items: [{ x0: 0.06, w: 0.18, label: "(3.2 자료 미확보)" }] },
        { m: "APR", items: [{ x0: 0.04, w: 0.22, label: "히유키", highlight: true }, { x0: 0.30, w: 0.20, label: "모르네 [복각]" }] },
      ],
      revSignal: { firstWeek: "$52M (월간 추정)", change: "MoM +73%", note: "2주년 4/30 출시 1일 기여만으로 +73% · 본격 spike는 5월 결산에서" },
    },

    // ────────────────────────────────────────────────────────────────────────
    // 05 · 엔드필드 — 장방이 (Zhuang Fangyi)
    // ────────────────────────────────────────────────────────────────────────
    {
      id: "ef",
      ko: "엔드필드",
      en: "Arknights: Endfield",
      studio: "Hypergryph",
      iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/6d/a6/e0/6da6e0eb-c4fa-4dc0-aa55-64eff735eb22/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/256x256bb.jpg",
      patchTitle: "Ver. 1.2 · 봄의 깨어남에서",
      patchEn: "PATCH NOTE",
      pageColor: { splash: "#D4D3CB", stripe: "rgba(0,0,0,0.07)", angle: -18 },
      character: {
        ko: "장방이",
        en: "Zhuang Fangyi",
        splashUrl: "https://endfield.wiki.gg/images/thumb/Zhuang_Fangyi_Splash_Art.png/1200px-Zhuang_Fangyi_Splash_Art.png?ffe30c",
        splashFocus: "center 28%",
        rarity: "6★",
        role: "STRIKER",
        roleKo: "스트라이커",
        element: "ELECTRIC · 전기",
        faction: "ENDFIELD CORPS · WULING",
        factionKo: "엔드필드 본대 · 우링 지부",
        banner: "갱신의 천둥 (Thunder of Renewal)",
        release: "2026.04.17",
        tagline: "우링의 강철 비를 가르는 스트라이커",
        leadKo: "봄을 깨우는 천둥 한 줄기,",
        leadEmph: "그 끝에 그녀가 있다.",
        intro:
          "우링 스토리 2장 \"At the Wake of Spring\"의 핵심 6★. Marker Stone 시설 인근 Ardashir 출현 사태의 현장 대응 책임자로, Nefarith와 대치하는 본편 1선이다. 검은 머리에 우링의 흙·강철 톤을 입은 작업복, 그리고 손끝에서 풀려나가는 전기 파장이 이 지역에 속한 캐릭터라는 점을 시각적으로 못박는다. 시그니처 무기 Lone Barge가 동시에 출시되며, 40일이라는 긴 배너 안에서 한 캐릭터의 ARPU 회수 창을 길게 늘인다. HoYo·Kuro의 \"신규 6★ + 메인 챕터 + 긴 배너\" 문법이 멀티 플랫폼 가챠에서도 작동한다는 첫 증명.",
        good: [
          "단일 딜 출력 최상위 — 출시 직후 1.x 메타 픽업으로 즉시 진입",
          "시그니처 Lone Barge + Arsenal Exchange 3회차 동시 출시 · ARPU 최대화 묶음",
          "우링 챕터·산업 시스템 확장과 동시 등장 — 캐릭이 지역과 한 묶음으로 판매",
          "1.0~1.1 슬럼프를 두 패치 안에 끊은 결정적 카드 — HoYo 문법 멀티 플랫폼 적용 증명",
        ],
        bad: [
          "1.x 분기 첫 전기 단독 캐리 — 시너지 옵션이 좁아 즉시 팀 구성 부담",
          "40일 장기 배너로 자원 분산 위험 — 1.3 라인업과 시점 충돌 가능",
          "전기 광역 연출 자료가 패치 초반 공개 부족 — 시네마틱 비중 평가 보류",
        ],
        reactions: [
          { src: "Outlook Respawn · X", body: "'봄의 깨어남' 패치와 신규 6성 장방이가 일매출 $2.9M의 대형 spike를 견인 — 엔드필드 1/25 이후 최고 일매출." },
          { src: "디시 엔드필드 갤러리", body: "장방이 일딜 진심으로 미친 수준임. 우링 챕터까지 같이 풀려서 컨텐츠 갈증이 한방에 해결됨." },
          { src: "Reddit r/Arknights", body: "엔드필드가 드디어 진짜 라이브 서비스처럼 느껴진다. 장기 배너 + 챕터 + 6성 — 이 playbook이 PC에서도 그대로 통한다." },
        ],
        revTrend: {
          label: "3-MO REVENUE TREND",
          months: ["FEB", "MAR", "APR"],
          values: [22.0, 18.0, 28.0],
          unit: "$M",
          highlight: 2,
          note: "장방이 출시 4/17. 4월 spike의 거의 전부를 단독 견인. 일매출 $2.9M(4/18) — 글로벌 런칭 후 일일 최고치.",
          source: "AppMagic / Outlook Respawn 추정",
        },
      },
      patchBullets: [
        "신규 6성 장방이 + 시그니처 Lone Barge 동시 출시",
        "메인 스토리: 우링 챕터 2 \"At the Wake of Spring\" (Ardashir vs Nefarith)",
        "신규 지역 + 산업 시뮬레이션 시스템 확장",
        "런칭 슬럼프 대응 보전(compensation) 패키지",
        "오프레이트 복각: 탕탕 · 로시",
        "40일 장기 배너 + 1.3 예고 (Mifu · Camus · Feranmut Proxy)",
      ],
      quote: {
        body: "\"The 'At the Wake of Spring' patch and new 6-star Zhuang Fangyi triggered a massive $2.9M daily revenue surge — Endfield's best day since January 25th.\"",
        by: "Outlook Respawn · AppMagic",
      },
      pickupTimeline: [
        { m: "FEB", items: [{ x0: 0.06, w: 0.18, label: "(1.0 후속 자료 미확보)" }] },
        { m: "MAR", items: [{ x0: 0.06, w: 0.18, label: "(1.1 자료 미확보)" }] },
        { m: "APR", items: [{ x0: 0.04, w: 0.22, label: "장방이", highlight: true }, { x0: 0.30, w: 0.20, label: "Tangtang [오프레이트]" }] },
      ],
      revSignal: { firstWeek: "$2.9M 일매출 (4/18)", change: "MoM +55% 추정", note: "런칭 후 일일 최고치 · 누적 모바일 $96.3M · 멀티 플랫폼 매출 미반영" },
    },

    // ────────────────────────────────────────────────────────────────────────
    // 06 · NIKKE — 스노우 크레인 (Snow Crane)
    // ────────────────────────────────────────────────────────────────────────
    {
      id: "nk",
      ko: "니케",
      en: "Nikke",
      studio: "Shift Up",
      iconUrl: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/6b/68/aa/6b68aa0c-6509-870f-d271-1232767f9482/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/256x256bb.jpg",
      patchTitle: "GOOD WORLD 업데이트",
      patchEn: "PATCH NOTE",
      pageColor: { splash: "#D8D8D1", stripe: "rgba(0,0,0,0.07)", angle: -12 },
      character: {
        ko: "스노우 크레인",
        en: "Snow Crane",
        splashUrl: "https://static.wikia.nocookie.net/nikke-goddess-of-victory-international/images/f/f7/Snow_Crane_MI.png/revision/latest?cb=20260409062217",
        splashFocus: "center 28%",
        rarity: "SSR",
        role: "DEFENDER · HEALER",
        roleKo: "디펜더 · 힐러",
        element: "WATER · 수속성",
        faction: "MISSILIS · VEILED ORDER",
        factionKo: "미실리스 · 베일드 오더",
        banner: "Oath of Goodwill",
        release: "2026.04.09",
        tagline: "약속을 무기로 삼는 베일드 오더 저격수",
        leadKo: "맹세는 가볍게,",
        leadEmph: "방아쇠는 무겁게.",
        intro:
          "베일드 오더 분대 소속, 미실리스 산업 라인의 정규 SR. 공식 소개는 \"계약과 합의를 최우선으로 여기는\" 캐릭터다 — 분기 사이에 끼인 안정형 SR의 톤과 정확히 맞물린다. 짙은 청색 머리에 군청 빛이 도는 외투, 그리고 어깨에 걸친 \"Oath of Goodwill\" 저격소총. 표정은 거의 변하지 않지만 잠깐씩 비치는 미소가 차분한 결의를 더한다. 버스트 III에서는 아군 전체 HP를 부드럽게 회복하고, 동시에 Pierce를 부여해 보조 딜링까지 곁들이는 디펜더-힐러 하이브리드.",
        good: [
          "버스트 III 한 번에 HP 고포텐시 회복 + Pierce 부여 — 회복과 보조딜 동시 완결",
          "SR 등급이지만 디펜더-힐러 슬롯을 동시에 채우는 자원 효율 캐릭",
          "베일드 오더 톤의 절제된 일러스트 — 3.5주년 라인업 앞 분위기 정돈 역할",
          "운영진이 의도한 \"스킵하고 자원 세이브\" 시그널을 가이드가 정직하게 흡수",
        ],
        bad: [
          "BitTopup·Game8 등 주요 가이드 일제히 \"3.5주년 자원 세이브\" 권고",
          "버스트 III 외 일반 사이클 기여도가 평이 — S+ 정의급 아님",
          "SR 등급 컷신 비중이 SSR 대비 낮아 외형 임팩트 한정",
        ],
        reactions: [
          { src: "BitTopup News · 2026.04", body: "2026년 4월 초 커뮤니티 합의는 스노우 크레인을 중티어 힐러로 분류 — 대부분의 가이드는 스킵하고 3.5주년 배너용으로 자원을 모을 것을 권장." },
          { src: "디시 니케 갤러리", body: "스노우 크레인 일러는 진짜 잘뽑힘. 근데 가이드 다 스킵 권장이라 마음만 무거움." },
          { src: "Reddit r/NikkeMobile", body: "제 몫은 하지만 메타를 정의하진 못한다. 솔직히 주년 폭풍 직전의 좋은 '쉬어가는 캐릭' 정도." },
        ],
        revTrend: {
          label: "3-MO REVENUE TREND",
          months: ["FEB", "MAR", "APR"],
          values: [22.0, 32.0, 28.0],
          unit: "$M",
          highlight: 2,
          note: "스노우 크레인 출시 4/9. 4월 -12% — 스킵 권고가 시장에 정직하게 반영. 매출은 5월 3.5주년 한정+크라운에 이연.",
          source: "Sensor Tower × GACHAREVENUE 추정",
        },
      },
      patchBullets: [
        "SSR 스노우 크레인 픽업 (4/9~4/22)",
        "SSR Anis: Superstar 픽업 (4/23~5/14)",
        "SSR Nien: X-Ray Eyes 픽업 (4/30~5/21)",
        "신규 스토리 이벤트 \"GOOD WORLD\" + 로그인 보상",
        "코스튬 가챠 복각 4종 (Drake · Liter · Exia · Biscuit)",
        "3.5주년 카운트다운 — 크라운 · 라피:레드후드 예고",
      ],
      quote: {
        body: "\"Community consensus as of early April 2026 places Snow Crane in the mid-tier healer bracket — most sources recommend skipping and saving for the 3.5th Anniversary banners.\"",
        by: "BitTopup News · 2026.04",
      },
      pickupTimeline: [
        { m: "FEB", items: [{ x0: 0.06, w: 0.18, label: "(자료 미확보)" }] },
        { m: "MAR", items: [{ x0: 0.06, w: 0.20, label: "3.5주년 카운트다운" }] },
        { m: "APR", items: [{ x0: 0.04, w: 0.22, label: "스노우 크레인", highlight: true }, { x0: 0.30, w: 0.18, label: "Anis: Star" }, { x0: 0.52, w: 0.18, label: "Nien" }] },
      ],
      revSignal: { firstWeek: "$28M (월간 추정)", change: "MoM -12%", note: "스킵 권장이 시장에 반영된 분기 · 매출은 5월 3.5주년 한정+크라운에 집중 예정" },
    },
  ],

  // ─── Cross-game analysis ──────────────────────────────────────────────────
  crossAnalysis: {
    section: "03 / Cross-Game Analysis",
    headline: { pre: "산업 네 축이 흔들리는 동안", emphasis: "여섯 작품은 같은 방향으로 정렬했다." },
    sub:
      "플랫폼(모바일 단독 → PC·콘솔 동시) · 결제(Apple·Google 30% → 자체 5%) · 가챠(유료 가챠 → 직접 구매·F2P 보상 인플레) · 지역(중국 중심 → 일본 ARPU 부상). 4월 한 달에 산업 네 축이 같이 움직였고, 6작품이 어디에 더 깊게 응답했는지가 다음 분기 매출과 디자인의 기초가 된다.",
    trends: [
      {
        n: "T1",
        head: "PC·콘솔이 무대로 올라온다",
        why: "NTE 4/29 출시 첫날 23억엔, 매출의 75%가 PC·PS5. 모바일 단독 출시 시대의 종언 시그널. HoYo 3종은 PS5/PC 운영 중, 엔드필드는 PS5/PC 동시 출시 사례를 유지, 명조는 PS5 발표 — 6게임 중 5종이 멀티 플랫폼 정렬.",
      },
      {
        n: "T2",
        head: "자체 결제가 30%를 회수한다",
        why: "일본 MSCA(스마트폰 소프트웨어 경쟁촉진법) 2025.12.18 시행 후 몬스터 스트라이크 등 40+ 모바일 게임이 App-Pay 채택. Apple·Google 수수료 30% → App-Pay 5%. HoYo·Kuro·Shift Up은 이미 자체 웹스토어로 사전 답을 둔 진영.",
      },
      {
        n: "T3",
        head: "지역 무게중심이 동쪽으로",
        why: "엔드필드 매출의 32%가 일본, 중국 27% — Sensor Tower 1/22~2/21 집계. 일본 ARPDU $15로 모든 지역 중 최고. \"중국발 게임의 1위 시장은 중국\"이라는 가정이 깨진 첫 산업 데이터, 6게임 기획 단계의 지역 가중치를 다시 그리게 한다.",
      },
      {
        n: "T4",
        head: "무료 가챠가 가챠를 대체한다",
        why: "Resident Evil Survival Unit(Capcom×Aniplex×JOYCITY)이 유료 캐릭터 가챠 폐지, 직접 구매 + 무료 가챠 + 시간단축 아이템으로 머네타이즈 재설계. 6게임도 HSR 1,600 jades · 명조 무료 픽업 · 엔드필드 보전으로 F2P 보상 인플레 진행 중 — 같은 압력의 두 가지 응답.",
      },
      {
        n: "T5",
        head: "시장은 -1%, 6작품은 +5.8%",
        why: "Sensor Tower Q1 보고서 — 전세계 모바일 게임 시장 전체 매출 -1% QoQ, 상위 25 퍼블리셔 중 11개만 증수. 6게임 합산 매출은 같은 분기에 +5.8% — 시장 평균과 분리된 한 분기. 다음 분기에도 이 분리가 유지되는지가 핵심.",
      },
    ],
    matrix: {
      label: "FIG. X · Trend × Title Matrix",
      cols: ["T1", "T2", "T3", "T4", "T5"],
      rows: [
        { id: "hsr", label: "STARRAIL", values: [1, 1, 1, 1, 1] },
        { id: "gi",  label: "GENSHIN",  values: [1, 1, 1, 0, 1] },
        { id: "zzz", label: "ZENLESS",  values: [1, 1, 0, 0, 0] },
        { id: "ww",  label: "WUTHER.",  values: [1, 1, 0, 1, 0] },
        { id: "ef",  label: "ENDFLD.",  values: [1, 0, 1, 1, 0] },
        { id: "nk",  label: "NIKKE",    values: [1, 1, 0, 0, 1] },
      ],
    },
    dosDonts: {
      dos: [
        "PC·콘솔 동시 출시를 신규 IP의 기본값으로 둔다 — NTE 75% PC/PS5 비중이 모바일 단독의 비용을 명시한다.",
        "자체 웹스토어를 결제 표준 채널로 만든다 — Apple·Google 30%를 5%로 회수, MSCA 시행국 외에도 선제 대응.",
        "일본 ARPDU 20%+를 기획 단계의 지역 가중치로 둔다 — 엔드필드 32%는 우연이 아니라 디자인 표적.",
        "F2P 보상 인플레의 ROI를 분기 단위로 재산정한다 — 단기 ARPU 손실이 retention으로 회수되는 임계점이 4월에 명시화됐다.",
        "주년 patch phase 1을 신규 메인 딜러로 연다 — HSR·명조 표본에서 검증된 매출 곡선 (단, 메인 카리어 의존도는 분기마다 재평가).",
        "자체 IP 외 라인업을 6분기 안에 1종 이상 준비한다 — Hypergryph·Perfect World 사례, HoYo도 Varsapura 데모 공개.",
      ],
      donts: [
        "모바일 단독 출시를 유지하고 PC·콘솔을 후속으로 미룬다 — NTE 75% 수치가 그 기회비용을 산업 표본으로 박았다.",
        "Apple·Google 결제 단일 채널을 유지한다 — 일본 시장에서 분기 매출의 25%포인트가 즉시 손실, MSCA 시행국 확대 시 위험은 곱셈으로.",
        "직접 구매·무가챠 모델(RE 사례)을 \"우리 모델 아니다\"로 무시한다 — F2P 보상 인플레와 같은 압력의 두 응답, 둘 다 안 하면 정체.",
        "일본 시장을 중국·미국의 사이드로 다룬다 — 엔드필드 32%는 \"일본이 톱\"의 첫 공개 데이터, 다음 라인업 기획에서 가중치 재배분 필수.",
        "글로벌 -1% 흐름에 \"우리는 다르다\"로 응답한다 — 상위 25 중 11개만 증수, 그 11개의 공통 결정을 본지가 트렌드 매트릭스로 추렸다.",
        "콘솔 fragmentation 정리(PS4 종료)를 미룬다 — 운영 비용이 다음 분기 라인업 결정을 묶는다 (원신 PS4 4/8 종료 사례).",
      ],
    },
  },

  // ─── Industry desk ────────────────────────────────────────────────────────
  industry: {
    section: "04 / Industry Desk",
    headline: { pre: "캐릭터 바깥에서", emphasis: "산업이 다시 정렬됐다." },
    sub: "일본 결제법 시행 4개월, NTE 글로벌 출시, RE 무가챠 모델, Capcom 실적 상향, Sanrio 게임 진출, FFXIV Switch 2 — 4월의 결정들이 6작품의 다음 6개월 라인업 비용 구조를 다시 그린다.",
    studios: [
      { name: "Capcom",        ko: "캡콤",         change: "+", note: "통기 결산 실적 상향 (바이오하자드 레퀴엠 글로벌 호조) · RE Survival Unit으로 유료 가챠 폐지 모델 공식화 · AI 정책 발표 \"크리에이터 잠재력 해방을 위한 도구로\"." },
      { name: "Perfect World", ko: "퍼펙트월드",   change: "+", note: "NTE: Neverness to Everness 4/29 글로벌 출시 첫날 23억엔 · 매출 75%가 PC·PS5 · Hotta Studio (구 Tower of Fantasy 팀)의 첫 글로벌 성공." },
      { name: "HoYoverse",     ko: "호요버스",     change: "+", note: "HSR 4월 매출 $58.1M으로 가챠 톱 유지 · Genshin PS4 지원 종료(4/8)로 콘솔 fragmentation 정리 · 자체 웹스토어 6게임 중 5개로 표준화." },
      { name: "Hypergryph",    ko: "하이퍼그리프", change: "○", note: "엔드필드 4월 매출 $17.3M — 런칭 후 3개월 연속 하락 · 다만 일본 매출 비중 32%로 중국 27% 추월(Sensor Tower)이라는 산업 표본 제공." },
      { name: "Sanrio",        ko: "산리오",       change: "+", note: "자체 게임 브랜드 \"Sanrio Games\" 설립 발표 · Switch 2 파티게임 \"산리오 파티랜드\" 개발 중 — 라이선스 비즈에서 자체 개발·퍼블리싱으로." },
      { name: "Square Enix",   ko: "스퀘어 에닉스", change: "+", note: "FFXIV 닌텐도 스위치 2 8월 출시 확정 · 닌온 가입 불필요 · 기존 플레이어 50% 할인 — MMO 신규 유입 동선 재설계." },
    ],
    upcoming: [
      { when: "MAY",     title: "NTE 글로벌 운영 안착 + 첫 30일 retention",       note: "4/29 출시 후 첫 update 일정 · PC·PS5 첫 달 70%+ 비중 유지 여부가 다음 신작 모델의 표본." },
      { when: "MAY-JUN", title: "Resident Evil Survival Unit 글로벌 출시",        note: "무가챠·직접 구매 모델의 첫 ARPU 검증 — Capcom×Aniplex×JOYCITY · 가챠 산업 외부 시점에서의 신호." },
      { when: "JUN",     title: "일본 MSCA 시행 6개월 점검 보고",                 note: "App-Pay 채택 게임 50종 돌파 추정 · Apple·Google 일본 매출 압박 강도 1차 측정." },
      { when: "JUN",     title: "EVO Japan 후속 (도쿄, 4월 1만 1천 명 엔트리)", note: "격투게임 시장 모멘텀 · IP 협업 라인업 발표 시점." },
      { when: "JUL-AUG", title: "FFXIV Switch 2 출시 + Sanrio Games 첫 작품",     note: "신규 콘솔 유입 + 라이선스→자체 개발 전환의 두 산업 변곡이 같은 분기에." },
    ],
    regulations: [
      { region: "JP",    ko: "일본 MSCA",  line: "스마트폰 소프트웨어 경쟁촉진법 2025.12.18 시행 후 약 40개 모바일 게임이 App-Pay(수수료 5%) 채택 — 몬스터 스트라이크 4월 합류. Apple·Google 30%가 일본 시장에서 빠지는 분기 매출 비중은 12~18% 추정." },
      { region: "CN",    ko: "중국 NPPA",  line: "4월 도메스틱 ISBN 발급 100건 이상 · 임포트 7건 — 자국 가챠는 사상 최다 발급 페이스 유지, 임포트 7건은 글로벌 IP의 사실상의 쿼터." },
      { region: "GLOBAL", ko: "글로벌 시장", line: "Sensor Tower Q1 보고서 — 전세계 모바일 게임 매출 -1% QoQ, 상위 25 퍼블리셔 중 11개만 증수. Tencent +28% (춘절 효과)로 1위 유지 · 반다이남코는 최대 매출 타이틀이 DBZ Dokkan Battle로 교체." },
      { region: "KR",    ko: "한국",        line: "확률형 아이템 표시 의무 1년 점검 — 위반 적발 누적치 6월 공개 예정. 4월 적발 0건 · 표기 보정 시정명령 사례 다수 · 자체 웹스토어 운영 게임 (HoYo 5종, Shift Up 등)의 표기 기준 정비 진행." },
    ],
  },

  // ─── Community pulse ──────────────────────────────────────────────────────
  community: {
    section: "25 / Community Pulse",
    headline: { pre: "보상에는 박수, 메타에는 토론,", emphasis: "콘솔 종료에는 반발." },
    sub: "4월의 커뮤니티 신호는 같은 주에 세 방향으로 갈렸다. 본지가 추린 다섯 사건 · 한 통의 디렉터 레터 · 네 점의 팬워크.",
    events: [
      { when: "04.21", title: "HSR 3주년 1,600 jades 일괄 보상 — 분기 최대 호응",  where: "Reddit r/HonkaiStarRail",  scale: "12k+ upvotes · 24h" },
      { when: "04.18", title: "엔드필드 일매출 $2.9M — 런칭 후 최고치",            where: "Outlook Respawn · X",      scale: "AppMagic 추정 · 1/25 이후 최고" },
      { when: "04.24", title: "Silver Wolf Lv.999 메카닉 공개 — \"자가 진화\" 토론", where: "HSR 4.2 라이브",            scale: "유튜브 동시청 47만+" },
      { when: "04.30", title: "히유키 SS티어 컨센서스 + \"히린치\" 조합 폭딜 클립", where: "Inven·아카라이브·Reddit",   scale: "Game8 가이드 24h 100만+ 조회" },
      { when: "04.08", title: "원신 PS4 종료 — 환불 청원 5천+ 동시 발생",          where: "글로벌 커뮤니티",            scale: "마이그레이션 가이드 동시 배포" },
    ],
    directorLetter: {
      head: "디렉터의 편지 — 발췌",
      from: "명조 워더링 웨이브 · 3.3 공식 레터",
      body:
        "\"두 번째 해를 맞으며, 우리는 한 캐릭터에 두 자아를 함께 담는 시도를 했습니다. 이중성이라는 명조의 출발점을 한 사이클 안에서 다시 짚고 싶었기 때문입니다. 별빛이 은하 끝에서 메아리쳐 돌아오는 그 거리만큼, 우리도 우리의 시작에서 멀어진 만큼 다시 돌아옵니다.\"",
      footer: "APR 2026 · DEVELOPER LETTER · 추정 인용 (원문 교차검증 미완)",
    },
    fanWorks: [
      { kind: "MEME",         title: "\"Lv.999 시스템\" 무한 강화 패러디",      by: "@hsr_memes",        note: "X(Twitter) · 4월 말 핫 트렌드" },
      { kind: "ILLUSTRATION", title: "히유키 Glacio Chafe 비주얼 fanart 급증",  by: "Pixiv (4월 말)",    note: "신규 #Hiyuki 태그 신작 700+ 추정" },
      { kind: "COSPLAY",      title: "장방이 코스프레 초기 프리뷰",              by: "—",                 note: "Comiket·서머케 시즌 정식 반영은 5~7월" },
      { kind: "CLIP",         title: "애쉬베일 강수진 보이스 컷 모음",           by: "@hsrkr_clips",     note: "유튜브 클립 50만+ 재생 추정" },
    ],
  },

  // ─── Watchlist (next month) ───────────────────────────────────────────────
  watchlist: {
    section: "27 / Watchlist · MAY 2026",
    headline: { pre: "다음 한 달,", emphasis: "수치보다 결정을 본다." },
    sub: "5월 매출은 5월에 들여다본다. 본지가 미리 짚어두는 것은 그 매출 뒤에 어떤 디자인 베팅이 깔렸는가 — 다섯 슬롯.",
    items: [
      { name: "Silver Wolf Lv.999 / Evanescia", game: "스타레일", why: "\"Lv.999\"라는 명명은 메타 인플레의 기호화. 자가 진화 캐릭 컨셉이 시장에서 실제로 그 가격값을 받는지의 첫 검증.",      when: "05.13" },
      { name: "데니아 (Glacio Chafe 확장)",     game: "명조",     why: "히유키가 연 시스템에 두 번째 캐릭을 얹는 분기. Kuro가 2주년 후반 retention을 어떻게 잡는지의 표본.",                   when: "05.21" },
      { name: "Promeia (ZZZ 첫 Ice Attack)",    game: "젠레스",   why: "ZZZ 2.8 'Sunset of Eridu' 메인 픽업. 4월 약세를 끊는 카드가 되는지 — 한 캐릭 자원 집중 전략의 두 번째 검증.",            when: "05월 중하순" },
      { name: "니콜 · 로엔 (6.6 더블 신규)",    game: "원신",     why: "phase 1에 신규 5★ 둘을 동시에 꽂는 패턴. \"불+얼음\" 듀얼 카리어가 4월 단일 메인 딜러 패턴을 대체하는지.",              when: "05월 말" },
      { name: "ZZZ 1주년 (Lamiel · Valina)",    game: "젠레스",   why: "1주년 anniversary 첫 사례. 보상 인플레와 메타 변화의 균형을 ZZZ가 어디에 두는지 — 5분기 \"한 명 몰빵\" 라인의 분기점.", when: "06월 초" },
    ],
  },

  // ─── Colophon ─────────────────────────────────────────────────────────────
  colophon: {
    section: "28 / Colophon",
    headline: { pre: "출처, 방법,", emphasis: "그리고 우리가 모르는 것." },
    sub: "본지는 매월 6개 작품의 디자인 결정과 시장 반응을 함께 본다. 매출은 추정치이며, 디자인 판단은 편집부의 책임이다. 모르는 것은 모른다고 적는다.",
    sources: [
      { label: "매출 추정", from: "Sensor Tower · GACHAREVENUE · AppMagic",                 note: "iOS+Google Play 기준 · CN Android 1.75× 보정 (GACHAREVENUE 관행) · 자체 웹스토어 매출 미반영." },
      { label: "패치·캐릭", from: "각 사 공식 발표 · Game8 · BitTopup · BuffHub",            note: "공식 발표 우선 · 비공식·리크 정보는 분리 표기 후 본문 제외." },
      { label: "한국 자료", from: "나무위키 · 인벤 · 아카라이브 · fmkorea · 루리웹",          note: "캐릭터 한국명 1차 출처 · 영문 Fandom 단독 재번역은 금지 (공식 로컬라이즈 사고 방지)." },
      { label: "산업·규제", from: "Niko Partners · AUTOMATON · Outlook Respawn · GamesIndustry.biz", note: "중국 NPPA · 웹스토어 정책 · M&A · 콘솔 정리 신호 등." },
    ],
    methodology: [
      "월간 매출 = Sensor Tower 월간 톱 10 추세 × GACHAREVENUE 일별 데이터 교차.",
      "디자인 결정 = 패치 노트·캐릭터 시트·디렉터 레터에서 명시적으로 드러난 변수만.",
      "트렌드 식별 = 6작품 중 2개 이상에서 같은 분기에 동시 관찰된 결정만 본 트렌드로 분류.",
      "Cryo·Glacio·빙속은 매트릭스에서 \"얼음\"으로 통일 (속성 명칭은 작품마다 다르나 메타 슬롯은 같다).",
      "남성/여성/비공개 분류는 작품 내 공식 표기 + 외관 + 운영진 발화 종합.",
    ],
    limits: [
      "매출 수치는 절대값보다 방향으로 읽어야 한다 — PC·자체 웹스토어·CN Android·콘솔 매출이 다수 미반영.",
      "Sensor Tower 4월 개별 게임 원자료 직접 미확보 — 합산치는 추세 + 일별 교차의 \"추정\"이다.",
      "명조 4월 매출은 3.3 출시(4/30)의 1일 기여만 반영 — 본격 spike는 5월 결산에서 확인.",
      "ZZZ 2.7 매출 데이터 thin — Sensor Tower 월간 톱 10 부재($60M 이하)로 교차검증한 추정치.",
      "명조 디렉터 레터 인용은 원문 교차검증 미완 — \"추정 인용\"으로 명시 표기.",
      "표본은 가챠 RPG 6작품에 한정 — 슈팅·전략·MMO 가챠는 본지 범위 밖.",
      "본지는 디자인 참고 매거진이지 비즈니스 리포트가 아니다 — 매출은 디자인 결정을 검증하는 신호로만 사용된다.",
    ],
    masthead: {
      editor: "EDITOR · 편집부",
      design: "DESIGN · Claude Design × Claude Code",
      data:   "DATA · 자체 수집 (Sensor Tower · GACHAREVENUE · Game8 · 나무위키 외)",
      ad:     "ADVISORY · 자료 협조 · 각 사 공식 발표",
    },
    issn: "ISSN 0000-0001",
    next: "NEXT ISSUE · Vol.02 · 2026.06.10",
  },
};

Object.assign(window, { ISSUE_2026_04 });
