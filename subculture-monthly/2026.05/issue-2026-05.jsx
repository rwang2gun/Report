// ISSUE_2026_05 — Subculture Monthly Vol.01 (May 2026)
// 한 호 = 한 데이터 객체. 다음 호는 ISSUE_2026_06 = { ... } 로 새로 작성해
// 동일 컴포넌트들에 넘기면 됩니다. 컴포넌트는 이 객체의 슬라이스만 props로 받습니다.
//
// 다루는 게임 6종은 동시대 가챠 시장의 편의상 라벨 — 실제 IP를 비평/논평하기 위한
// 편집적 참조이며, 디자인 자체는 본지의 오리지널입니다.

const ISSUE_2026_05 = {
  meta: {
    issue: "Vol.01",
    issueNo: "01",
    date: "2026.05",
    coverDate: "MAY 2026",
    price: "₩9,800",
    issn: "ISSN 0000-0001",
    tagline: "월간 서브컬처 데이터 저널",
    title: "Subculture Monthly",
    coverLead: {
      ko: "이 달 서브컬처 디자인이 시도한 것, 그리고 배운 것.",
      en: "What subculture design tried, and learned, this month.",
    },
    editorNote:
      "여섯 게임이 같은 달, 서로 다른 방식으로 \"한계\"를 시험했다. 매출은 회복했지만 화제성은 더 잘게 흩어졌다.",
    coverArt: {
      caption: "이 달의 표지 — 스네즈나야의 칼날",
      slot: "COVER ILLUSTRATION · 540 × 760",
    },
  },

  // ─── 3-track design insights (cover) ──────────────────────────────────────
  insights: [
    {
      n: "01",
      head: "서사로의 회귀",
      en: "Return to Narrative",
      body: "세 작품이 동시에 \"스토리 선행 패치\"를 도입했다. 캐릭터 출시보다 서사 비트를 먼저 깐 첫 사례.",
      signal: { v: "원신 5월 매출 +14%", note: "Ver. 5.7 패치 첫 주 / 직전 분기 평균 대비" },
    },
    {
      n: "02",
      head: "한정의 한계",
      en: "Limits of Limited",
      body: "한정 캐릭터의 복각 주기가 평균 89일 → 71일로 줄었다. 픽업 인플레이션의 첫 통계적 신호.",
      signal: { v: "즈나이다 복각 첫 주 픽업률 +9%", note: "동일 캐릭 직전 복각 대비 / 1Q26 표본" },
    },
    {
      n: "03",
      head: "PC 우선의 전환",
      en: "PC-First Shift",
      body: "스팀 동접 비중이 모바일 매출 비중을 처음으로 넘긴 작품 2종. \"휴대형 가챠\"의 정의가 흔들린다.",
      signal: { v: "명조 · 엔드필드 PC 동접 신기록", note: "주간 피크 동접 / Steam Charts" },
    },
  ],

  // ─── Data dashboard ───────────────────────────────────────────────────────
  dashboard: {
    section: "02 / Design Choices, Market-Tested",
    headline: {
      pre: "빙주 메타 회귀가 시장에서",
      emphasis: "검증된 한 달.",
    },
    sub:
      "\"스토리 선행 패치\"는 패치 노트 톤의 변화로, \"빙주 메타 재등장\"은 픽업 캐릭터 설계로 드러난 디자인 결정. 시장은 두 결정 모두에 반응했다 — 회복분의 대부분은 HoYo 두 작품에 집중, 나머지 네 작품은 정상화 국면을 유지.",
    aside: {
      totalRev: "$142.0M",
      momChange: "+9.4%",
      note: "6게임 합산 추정 매출 / 전월 대비",
    },
    lineChart: {
      label: "FIG. 01 · 3-Month Revenue · $ millions, est.",
      source: "source: SensorTower / AppMagic composite",
      months: ["MAR", "APR", "MAY"],
      series: [
        { id: "gi",  label: "GENSHIN",  data: [38.2, 41.4, 47.1] },
        { id: "hsr", label: "STARRAIL", data: [32.0, 35.8, 42.6] },
        { id: "zzz", label: "ZENLESS",  data: [18.5, 24.0, 22.1] },
        { id: "ww",  label: "WUTHER.",  data: [14.0, 16.3, 19.4] },
        { id: "ef",  label: "ENDFLD.",  data: [ 8.4, 12.1, 11.8] },
        { id: "nk",  label: "NIKKE",    data: [28.6, 26.5, 27.0] },
      ],
      highlight: ["gi", "hsr"],
    },
    donut: {
      label: "FIG. 02 · New Units by Gender",
      headline: { pre: "여성 우위,", emphasis: "여전히." },
      caption: "12명 중 8명이 여성. 한정 픽업의 67%가 여성 캐릭터에 집중 — 12개월 추세선과 거의 일치.",
      data: [
        { label: "여성", en: "Female", v: 8 },
        { label: "남성", en: "Male",   v: 3 },
        { label: "비공개", en: "N/A",  v: 1 },
      ],
    },
    heatmap: {
      label: "FIG. 03 · Element × Title · last 6 months",
      scale: "0 ─ 4 release count",
      headline: { pre: "얼음과 물리,", emphasis: "두 축이 굵어진다." },
      caption: "전기·양자의 빈 칸이 늘었다. 다음 분기 출시 라인업이 균형을 맞출 첫 신호.",
      cols:    ["불꽃", "얼음", "전기", "물리", "양자"],
      colsEn:  ["Pyro", "Cryo", "Electro", "Phys", "Quantum"],
      rows: [
        { id: "gi",  label: "GENSHIN",  values: [3, 1, 2, 0, 1] },
        { id: "hsr", label: "STARRAIL", values: [2, 0, 3, 1, 2] },
        { id: "zzz", label: "ZENLESS",  values: [1, 2, 2, 3, 0] },
        { id: "ww",  label: "WUTHER.",  values: [2, 1, 1, 2, 0] },
        { id: "ef",  label: "ENDFLD.",  values: [0, 1, 0, 2, 1] },
        { id: "nk",  label: "NIKKE",    values: [2, 0, 1, 3, 0] },
      ],
    },
  },

  // ─── 6 game features ──────────────────────────────────────────────────────
  // Each game renders to a 2-page spread (Visual + Body) using the SAME pair
  // of components. Add a new game by appending to this array; pages auto-scale.
  games: [
    {
      id: "gi",
      ko: "원신",
      en: "Genshin Impact",
      studio: "HoYoverse",
      patchTitle: "Ver. 5.7 · 파튜스의 칼날",
      patchEn: "PATCH NOTE",
      pageColor: { splash: "#E5DDC9", stripe: "rgba(0,0,0,0.06)", angle: -14 },
      character: {
        ko: "리오라",
        en: "Liora",
        rarity: "5★",
        role: "MAIN DPS",
        roleKo: "메인 딜러",
        element: "CRYO · 얼음",
        faction: "FATUI · 파튜스",
        banner: "Glacial Sovereign",
        release: "2026.05.14",
        leadKo: "빙토의 마지막 후계자가",
        leadEmph: "스네즈나야의 문을 연다.",
        leadAccent: "후계자",
        body:
          "5월 14일, Ver. 5.7 패치와 함께 출시된 5★ 한정 캐릭터 \"리오라\"는 동일 진영 직전 배너 대비 +27%의 첫 주 매출을 기록했다. 핵심은 5초 결빙 갱신이라는 한 가지 메커닉 — 응광·종려를 다시 코어로 묶는다. 빙주(永凍) 메타가 18개월 만에 1티어 후보로 복귀한 셈. 진영 측면에서는 본격적인 스네즈나야 진입 신호로 읽힌다. 다음 분기 진영 클러스터의 예고탄.",
        splashCaption: "HERO PORTRAIT · LIORA · 가로 풀폭",
        fields: [
          { label: "설정",   en: "Lore",        body: "파튜스 부단장. 빙토 공방의 마지막 후계. 자신의 검에 의해서만 무릎을 꿇는다는 칭호." },
          { label: "속성",   en: "Element",     body: "얼음. 차지 공격 시 광역 결빙 — 응고 시 추가 폭발 모듈." },
          { label: "전투",   en: "Combat",      body: "필드 외 대기 시 에너지 자동 충전. 교대 전후 1.5초 무적 프레임 제공." },
          { label: "연출",   en: "Animation",   body: "스킬 모션 7.4초, 폭발 모션 4.1초. 컷씬 의상 추가 1종." },
          { label: "성능",   en: "Performance", body: "DPS 환산 +18% (베넷·종려 표준 팀 대비). 빙주 메타 재정렬." },
          { label: "매출",   en: "Revenue",     body: "출시 첫 주 추정 $11.2M. 동일 진영 직전 배너 대비 +27%." },
          { label: "평가",   en: "Reception",   body: "픽업 평가 ★★★★☆. 의상 디테일·바람 시뮬레이션은 호평, 음성 컷 일부 지적." },
          { label: "시사점", en: "So What",     body: "스네즈나야 본격 진입 신호. 다음 분기 진영 픽업 클러스터 예고탄." },
        ],
      },
      patchBullets: [
        "신규 지역: 스네즈나야 외곽 \"칼리스토 빙해\" 4개 지점 개방",
        "월드 보스 신규 1종 · 주간 위령 보스 메커닉 갱신",
        "복각 배너: 즈나이다 / 알베도",
        "이벤트: \"심해의 의식\" 4주 · 한정 무기 \"동결의 서약\"",
      ],
      quote: {
        body: "\"5초마다 결빙 갱신이라니. 응광·종려 들고 가는 빙주 시대가 또 한 번 열린다.\"",
        by: "/r/Genshin_Impact · 6.4k upvotes",
      },
      pickupTimeline: [
        { m: "MAR", items: [{ x0: 0.04, w: 0.18, label: "Z. 보더라인" }, { x0: 0.26, w: 0.18, label: "엘렉트라 [복각]" }] },
        { m: "APR", items: [{ x0: 0.10, w: 0.18, label: "이즈" }, { x0: 0.32, w: 0.18, label: "솔레이" }] },
        { m: "MAY", items: [{ x0: 0.04, w: 0.22, label: "리오라", highlight: true }, { x0: 0.30, w: 0.18, label: "즈나이다 [복각]" }] },
      ],
      revSignal: { firstWeek: "$11.2M", change: "+27%", note: "동일 진영 직전 배너 대비" },
    },

    {
      id: "hsr",
      ko: "스타레일",
      en: "Honkai: Star Rail",
      studio: "HoYoverse",
      patchTitle: "Ver. 3.4 · 천공 회랑의 균열",
      patchEn: "PATCH NOTE",
      pageColor: { splash: "#DCD8C7", stripe: "rgba(0,0,0,0.06)", angle: -20 },
      character: {
        ko: "케일라스",
        en: "Caelas",
        rarity: "5★",
        role: "HARMONY",
        roleKo: "조화",
        element: "QUANTUM · 양자",
        faction: "STELLARON HUNTERS",
        banner: "Threadbare Sky",
        release: "2026.05.07",
        leadKo: "조화의 길에서 처음으로",
        leadEmph: "공격을 거절한 캐릭터.",
        leadAccent: "거절",
        body:
          "버프 전용 5★ 케일라스는 본인 행동 카드를 모두 \"전투 외 효과\"로 재설계했다. 양자 메타와 결합해 DOT 코어 팀의 천장을 +22% 끌어올렸다. 직접 데미지를 포기하면서 픽업률 1위 — 가챠 디자인이 \"숫자 깎기\"에서 \"역할 분담\"으로 옮겨가고 있다는 첫 강한 신호.",
        splashCaption: "HERO PORTRAIT · CAELAS",
        fields: [
          { label: "설정",   en: "Lore",        body: "균열 회랑의 시간 항해사. 자신의 시간선을 빌려주는 대가로 동료의 한계를 늘린다." },
          { label: "속성",   en: "Element",     body: "양자. 본인 공격 0회, 모든 카드 = 아군 행동 부스트." },
          { label: "전투",   en: "Combat",      body: "궁극기 = 모든 아군에 한 턴 추가. 90초 쿨, 3턴 후 발동." },
          { label: "연출",   en: "Animation",   body: "발현 시 무대 자체가 잠시 멈춤 — 카메라 정지 1.2초 효과." },
          { label: "성능",   en: "Performance", body: "DOT·종합딜 팀 천장 +22%. 솔로 사이클에는 부적합." },
          { label: "매출",   en: "Revenue",     body: "출시 첫 주 추정 $9.6M. 직전 한정 배너 대비 +18%." },
          { label: "평가",   en: "Reception",   body: "픽업 평가 ★★★★★. \"역할 분담의 새 표준\" 평. 사이클 학습곡선 지적." },
          { label: "시사점", en: "So What",     body: "DPS 인플레이션의 출구를 가챠 안에서 처음으로 제시." },
        ],
      },
      patchBullets: [
        "신규 시뮬레이션 우주: \"파편 회랑\" 3개 층 추가",
        "유물 세트 신규 2종 · 광추 5★ 1종",
        "복각 배너: 백로 / 카프카",
        "이벤트: \"잃어버린 음계\" 협주 미니게임",
      ],
      quote: {
        body: "\"공격을 안 한다고 했을 때 의심했는데, 케일라스 들고 나면 모든 데미지 캐릭이 다시 살아난다.\"",
        by: "/r/HonkaiStarRail · 4.8k upvotes",
      },
      pickupTimeline: [
        { m: "MAR", items: [{ x0: 0.06, w: 0.20, label: "아세나" }, { x0: 0.30, w: 0.18, label: "백로 [복각]" }] },
        { m: "APR", items: [{ x0: 0.08, w: 0.18, label: "오로빌" }, { x0: 0.32, w: 0.20, label: "카프카 [복각]" }] },
        { m: "MAY", items: [{ x0: 0.04, w: 0.22, label: "케일라스", highlight: true }, { x0: 0.30, w: 0.18, label: "린크스 [복각]" }] },
      ],
      revSignal: { firstWeek: "$9.6M", change: "+18%", note: "직전 한정 배너 대비" },
    },

    {
      id: "zzz",
      ko: "젠레스",
      en: "Zenless Zone Zero",
      studio: "HoYoverse",
      patchTitle: "Ver. 2.1 · 누벨 디아의 새벽",
      patchEn: "PATCH NOTE",
      pageColor: { splash: "#E2D8C2", stripe: "rgba(0,0,0,0.07)", angle: -8 },
      character: {
        ko: "노바",
        en: "Nova",
        rarity: "S",
        role: "ATTACK",
        roleKo: "어택",
        element: "ETHER · 에테르",
        faction: "CRIMINAL INVESTIGATION",
        banner: "Neon Procession",
        release: "2026.05.21",
        leadKo: "두 명이 한 팀처럼",
        leadEmph: "들어오는 새 어택커.",
        leadAccent: "두 명",
        body:
          "노바는 호출 시 \"대역 캐릭터\"가 함께 등장해 콤보를 분담한다. 한 슬롯이 두 캐릭터로 작동하는 첫 사례. 도시형 배경의 컷씬 톤도 한 단계 다듬어졌다. 매출은 평월선이지만, \"슬롯 효율\" 디자인이 향후 1년 메타의 시작점이 될 가능성.",
        splashCaption: "HERO PORTRAIT · NOVA",
        fields: [
          { label: "설정",   en: "Lore",        body: "익명 형사. 동료의 그림자를 빌려 두 사람으로 싸운다." },
          { label: "속성",   en: "Element",     body: "에테르. 호출 시 대역 캐릭 동시 출현. 자체 콤보 5단." },
          { label: "전투",   en: "Combat",      body: "기본 공격 분할 — 본체 60% / 대역 40%. 회피 공유." },
          { label: "연출",   en: "Animation",   body: "필살기 \"이중 보고\" — 11초 영화 컷, 자유 시점 1회." },
          { label: "성능",   en: "Performance", body: "단일 슬롯 효율 +31%. 3인 팀의 4인 효과." },
          { label: "매출",   en: "Revenue",     body: "첫 주 추정 $6.8M. 평월선이지만 리텐션 +9%." },
          { label: "평가",   en: "Reception",   body: "픽업 평가 ★★★★☆. \"슬롯 디자인의 신선함\" 호평. 학습난도 지적." },
          { label: "시사점", en: "So What",     body: "캐릭터 = 1슬롯 공식의 파괴. 향후 1년 메타의 디자인 가설." },
        ],
      },
      patchBullets: [
        "신규 지역: 누벨 디아 6구역 · 야간 차량 추적 모드",
        "신규 봉마 6장 · 보스 \"엑스타시\" 추가",
        "복각: 미야비 / 자네 / 키미코",
        "이벤트: \"심야 라디오\" 도시 탐험 카드 시스템",
      ],
      quote: {
        body: "\"한 슬롯에서 두 명을 굴리니까 팀 짜는 게임이 다시 재밌어졌다.\"",
        by: "/r/ZenlessZoneZero · 3.1k upvotes",
      },
      pickupTimeline: [
        { m: "MAR", items: [{ x0: 0.06, w: 0.20, label: "엘런 [복각]" }, { x0: 0.30, w: 0.18, label: "니콜" }] },
        { m: "APR", items: [{ x0: 0.06, w: 0.20, label: "비비안" }, { x0: 0.30, w: 0.18, label: "Q." }] },
        { m: "MAY", items: [{ x0: 0.04, w: 0.22, label: "노바", highlight: true }, { x0: 0.30, w: 0.18, label: "미야비 [복각]" }] },
      ],
      revSignal: { firstWeek: "$6.8M", change: "─", note: "리텐션 +9% / 평월선 매출" },
    },

    {
      id: "ww",
      ko: "명조",
      en: "Wuthering Waves",
      studio: "Kuro Games",
      patchTitle: "Ver. 2.4 · 안개의 시간",
      patchEn: "PATCH NOTE",
      pageColor: { splash: "#D8D0BB", stripe: "rgba(0,0,0,0.06)", angle: -16 },
      character: {
        ko: "리리",
        en: "Riri",
        rarity: "5★",
        role: "HEAL/SUPPORT",
        roleKo: "힐러·서포터",
        element: "GLACIO · 빙",
        faction: "BLACK SHORES",
        banner: "Mist & Mirror",
        release: "2026.05.10",
        leadKo: "PC 동접 비중이 처음으로",
        leadEmph: "모바일 매출을 넘었다.",
        leadAccent: "PC 동접",
        body:
          "Ver. 2.4의 안개 시간 시스템은 환경 자체가 메커닉이 되는 첫 사례. 동시에 PC 동접이 모바일 매출 비중을 처음으로 추월 — 휴대형 가챠의 정의를 흔드는 신호. 신규 5★ 리리는 \"환경에 반응하는\" 힐러로, 안개 농도 따라 힐량이 증감한다.",
        splashCaption: "HERO PORTRAIT · RIRI",
        fields: [
          { label: "설정",   en: "Lore",        body: "검은 해안의 비밀결사. 안개 속에서 길을 찾는 자." },
          { label: "속성",   en: "Element",     body: "빙. 안개 농도 비례 힐량 (0.6× ~ 1.6×)." },
          { label: "전투",   en: "Combat",      body: "필드 외 안개 감지. 필드 진입 시 0.8초 즉시 힐." },
          { label: "연출",   en: "Animation",   body: "안개 메쉬 인터랙티브 셰이더. PC 우선 최적화." },
          { label: "성능",   en: "Performance", body: "환경 의존 힐러 ─ 안개 시간대 팀 생존률 +44%." },
          { label: "매출",   en: "Revenue",     body: "첫 주 추정 $4.7M. PC 결제 비중 53% (사상 첫 과반)." },
          { label: "평가",   en: "Reception",   body: "픽업 평가 ★★★★☆. \"환경 = 캐릭\" 디자인 호평. 모바일 발열 지적." },
          { label: "시사점", en: "So What",     body: "휴대형 가챠 시장 정의 자체가 흔들리는 첫 정량 데이터." },
        ],
      },
      patchBullets: [
        "환경 시스템: \"안개 시간\" 매일 2회 30분 발생",
        "신규 지역: \"검은 해안\" 북부 4구역",
        "복각: 장리 / 인린",
        "이벤트: \"안개 너머의 신호\" 라디오 퀘스트 8주",
      ],
      quote: {
        body: "\"PC 모니터로 안개를 보는 게 게임이라는 걸 처음 느꼈다. 모바일에서는 절반도 안 보인다.\"",
        by: "/r/WutheringWaves · 2.6k upvotes",
      },
      pickupTimeline: [
        { m: "MAR", items: [{ x0: 0.06, w: 0.20, label: "장리 [복각]" }, { x0: 0.30, w: 0.18, label: "임이" }] },
        { m: "APR", items: [{ x0: 0.06, w: 0.20, label: "샤 코니" }, { x0: 0.32, w: 0.18, label: "예나" }] },
        { m: "MAY", items: [{ x0: 0.04, w: 0.22, label: "리리", highlight: true }, { x0: 0.30, w: 0.18, label: "인린 [복각]" }] },
      ],
      revSignal: { firstWeek: "$4.7M", change: "PC 53%", note: "PC 결제 비중 첫 과반" },
    },

    {
      id: "ef",
      ko: "엔드필드",
      en: "Arknights: Endfield",
      studio: "Hypergryph",
      patchTitle: "Ver. 1.2 · 결정의 도시",
      patchEn: "PATCH NOTE",
      pageColor: { splash: "#DAD3BC", stripe: "rgba(0,0,0,0.07)", angle: -18 },
      character: {
        ko: "옵시디안",
        en: "Obsidian",
        rarity: "6★",
        role: "DEFENDER",
        roleKo: "수비수",
        element: "ORIGINIUM · 원석",
        faction: "ENDFIELD CORPS",
        banner: "Crystal Edict",
        release: "2026.05.03",
        leadKo: "필드형 가챠의",
        leadEmph: "수비수 재발견.",
        leadAccent: "수비수",
        body:
          "엔드필드의 첫 6★ 수비수 옵시디안은 \"공격을 흡수해 동료에게 보내는\" 패시브가 핵심. 필드형 RTS 가챠의 새 직업 정의. PC 우선 빌드 — 모바일 빌드는 지연 출시. 신규 도시 \"크리스탈리아\"가 함께 공개되어 IP 전체 호흡이 한 박자 빨라졌다.",
        splashCaption: "HERO PORTRAIT · OBSIDIAN",
        fields: [
          { label: "설정",   en: "Lore",        body: "엔드필드 군단의 수비대장. 자신을 향한 모든 공격을 흡수해 회로로 보낸다." },
          { label: "속성",   en: "Element",     body: "원석. 받은 데미지 = 아군 SP 전환 (1:1.4)." },
          { label: "전투",   en: "Combat",      body: "필드 거치형 — 한 번 배치하면 30초 고정. 어그로 +200%." },
          { label: "연출",   en: "Animation",   body: "결정 갑옷 셰이더 신규 1종. 피격 시 굴절 효과." },
          { label: "성능",   en: "Performance", body: "팀 SP 회전율 +37%. 단일 적 시나리오엔 비효율." },
          { label: "매출",   en: "Revenue",     body: "첫 주 추정 $3.4M. 출시 후 PC 동접 신기록." },
          { label: "평가",   en: "Reception",   body: "픽업 평가 ★★★★☆. \"수비수 = 자원 펌프\" 패러다임." },
          { label: "시사점", en: "So What",     body: "필드형 RTS 가챠의 직업 정의 확장. 일러스트→배치까지 일관." },
        ],
      },
      patchBullets: [
        "신규 도시: 크리스탈리아 5구역 · 결정 채굴 미니게임",
        "신규 거점 12종 · 자동 라우팅 알고리즘 업데이트",
        "복각: 첸 / 위슬래시",
        "이벤트: \"결정 의회\" 협력전 4주",
      ],
      quote: {
        body: "\"수비수가 SP 펌프가 되는 순간, 엔드필드의 빌드가 다시 짜진다.\"",
        by: "/r/ArknightsEndfield · 1.9k upvotes",
      },
      pickupTimeline: [
        { m: "MAR", items: [{ x0: 0.04, w: 0.18, label: "코덱스" }, { x0: 0.30, w: 0.18, label: "윈터" }] },
        { m: "APR", items: [{ x0: 0.08, w: 0.20, label: "에피카" }, { x0: 0.32, w: 0.18, label: "첸 [복각]" }] },
        { m: "MAY", items: [{ x0: 0.04, w: 0.22, label: "옵시디안", highlight: true }, { x0: 0.30, w: 0.18, label: "위슬래시 [복각]" }] },
      ],
      revSignal: { firstWeek: "$3.4M", change: "PC 신기록", note: "출시 후 주간 피크 동접" },
    },

    {
      id: "nk",
      ko: "니케",
      en: "Nikke",
      studio: "Shift Up",
      patchTitle: "Ver. 4.2 · 부서진 시그널",
      patchEn: "PATCH NOTE",
      pageColor: { splash: "#DED5BE", stripe: "rgba(0,0,0,0.07)", angle: -12 },
      character: {
        ko: "할로우",
        en: "Hollow",
        rarity: "SSR",
        role: "BURST III",
        roleKo: "버스트 III",
        element: "FIRE · 화염",
        faction: "PILGRIM",
        banner: "Signal Lost",
        release: "2026.05.17",
        leadKo: "한정 픽업의",
        leadEmph: "복각 주기 71일.",
        leadAccent: "71일",
        body:
          "니케의 5월 신규 SSR \"할로우\"는 발표 직후 \"복각 예정\" 안내가 함께 나간 첫 사례. 한정 캐릭터의 복각 주기 평균이 89일에서 71일로 단축된 흐름을 그대로 반영. 픽업 인플레이션의 첫 통계적 신호이자, 픽업 신뢰도에 대한 시장 신호.",
        splongLine: "",
        splashCaption: "HERO PORTRAIT · HOLLOW",
        fields: [
          { label: "설정",   en: "Lore",        body: "순례자 출신. 모든 신호가 끊긴 도시에서 마지막으로 살아남은 통신병." },
          { label: "속성",   en: "Element",     body: "화염. 풀버스트 시 통신 차단 디버프 3턴." },
          { label: "전투",   en: "Combat",      body: "장거리 정밀 사격. 회피 시 자동 카운터 1회." },
          { label: "연출",   en: "Animation",   body: "버스트 컷씬 9초. 사진 톤 다큐 셰이더 신규." },
          { label: "성능",   en: "Performance", body: "통신 차단으로 보스 회복 무력화. 단일 표적에 강함." },
          { label: "매출",   en: "Revenue",     body: "첫 주 추정 $7.1M. 복각 안내 동시 공개로 페이스 분산." },
          { label: "평가",   en: "Reception",   body: "픽업 평가 ★★★★☆. \"투명한 복각\" 호평, \"한정의 의미\" 우려." },
          { label: "시사점", en: "So What",     body: "한정 정의의 약화. \"가챠 신뢰도\"가 다음 라운드의 디자인 변수." },
        ],
      },
      patchBullets: [
        "신규 챕터: \"부서진 시그널\" 4-8장",
        "심층사령부 메커닉 갱신 · 새 보스 \"이중방벽\"",
        "복각: 도로시 / 시락스",
        "이벤트: \"통신 복원 작전\" 협력 미션 4주",
      ],
      quote: {
        body: "\"한정이라 했는데 71일 후에 다시 나온다고? 이젠 \"한정\"이라는 단어 자체가 흔들린다.\"",
        by: "/r/NikkeMobile · 5.2k upvotes",
      },
      pickupTimeline: [
        { m: "MAR", items: [{ x0: 0.06, w: 0.20, label: "도로시" }, { x0: 0.30, w: 0.18, label: "시즈" }] },
        { m: "APR", items: [{ x0: 0.08, w: 0.20, label: "시락스" }, { x0: 0.32, w: 0.18, label: "비비" }] },
        { m: "MAY", items: [{ x0: 0.04, w: 0.22, label: "할로우", highlight: true }, { x0: 0.30, w: 0.18, label: "도로시 [복각]" }] },
      ],
      revSignal: { firstWeek: "$7.1M", change: "71일 복각", note: "한정 캐릭 평균 복각 89일 → 71일" },
    },
  ],

  // ─── Cross-game analysis ──────────────────────────────────────────────────
  crossAnalysis: {
    section: "15 / Cross-Game Analysis",
    headline: { pre: "여섯 작품이 한 달간", emphasis: "겹친 다섯 가지." },
    sub: "1) 스토리 선행 패치, 2) PC 우선 빌드, 3) 보조 캐릭터 픽업 1위, 4) 복각 주기 단축, 5) 환경/슬롯 메커닉. 다섯 트렌드는 서로를 보강한다.",
    trends: [
      { n: "T1", head: "스토리 선행 패치",   why: "캐릭터 출시 전 서사를 먼저 푼다. 캐릭터 = 결말이 된다." },
      { n: "T2", head: "PC 우선 빌드",       why: "모바일 발열·해상도 한계 도달. 스팀 동접이 새 KPI." },
      { n: "T3", head: "보조 캐릭이 1위",     why: "DPS 인플레의 출구. 픽업 = 팀 디자인." },
      { n: "T4", head: "복각 주기 단축",     why: "89일 → 71일. 픽업 신뢰도의 정량 신호." },
      { n: "T5", head: "환경 = 메커닉",       why: "안개·시간·도시. 캐릭만큼 환경이 슬롯이 된다." },
    ],
    matrix: {
      label: "FIG. X · Trend × Title Matrix",
      cols: ["T1", "T2", "T3", "T4", "T5"],
      rows: [
        { id: "gi",  label: "GENSHIN",  values: [1, 0, 0, 1, 0] },
        { id: "hsr", label: "STARRAIL", values: [1, 0, 1, 0, 0] },
        { id: "zzz", label: "ZENLESS",  values: [0, 0, 0, 0, 1] },
        { id: "ww",  label: "WUTHER.",  values: [1, 1, 0, 0, 1] },
        { id: "ef",  label: "ENDFLD.",  values: [0, 1, 0, 0, 0] },
        { id: "nk",  label: "NIKKE",    values: [0, 0, 0, 1, 0] },
      ],
    },
    dosDonts: {
      dos: [
        "캐릭터를 \"역할 분담\" 단위로 설계할 것 — 단일 슬롯 효율을 KPI로.",
        "환경/시간/맵을 슬롯의 연장으로 다룰 것 — 환경이 곧 빌드.",
        "복각 안내를 출시와 동시에 — 신뢰도 자체를 디자인 변수로.",
      ],
      donts: [
        "신규 캐릭의 숫자 인플레로 \"천장 갱신\" — 시장은 더 이상 반응 안 함.",
        "PC 빌드를 후순위로 — 동접 비중이 매출에 선행한다.",
        "복각 사실을 침묵으로 — 침묵이 가장 큰 신뢰 손실.",
      ],
    },
  },

  // ─── Industry desk ────────────────────────────────────────────────────────
  industry: {
    section: "16 / Industry Desk",
    headline: { pre: "스튜디오·라인업·규제,", emphasis: "한 페이지로." },
    sub: "5월의 비즈니스 신호. 직접 캐릭터를 만들지 않는 결정도 시장에 잡힌다.",
    studios: [
      { name: "HoYoverse",  ko: "호요버스",     change: "+", note: "신규 IP \"Project Sky\" 티저 1차. 채용 +120명." },
      { name: "Kuro Games", ko: "쿠로 게임즈",  change: "+", note: "PC 클라이언트 단독 빌드팀 신설. 콘솔 진입 발표." },
      { name: "Hypergryph", ko: "하이퍼그리프", change: "○", note: "엔드필드 1주년 사전 발표. 모바일 빌드 지연 확정." },
      { name: "Shift Up",   ko: "시프트업",     change: "○", note: "콘솔 신작 \"Project Stellar\" 2027Q1 → 2027Q2 연기." },
      { name: "miHoYo CN",  ko: "(중국법인)",   change: "-", note: "내부 구조조정 보고. 신규 IP 1건 보류." },
      { name: "Yostar",     ko: "요스타",       change: "+", note: "글로벌 퍼블리싱 신규 2종. 한국 지사 채용 +30명." },
    ],
    upcoming: [
      { when: "JUN", title: "원신 Ver. 5.8",       note: "스네즈나야 본진입 · 2번째 5★ 동시 공개 유력." },
      { when: "JUN", title: "스타레일 Ver. 3.5",   note: "조화 패스 신규 + 양자 메타 보강." },
      { when: "JUL", title: "Project Sky 1차 CBT", note: "HoYo 신규 IP · 클로즈드 베타 모집 6월." },
      { when: "JUL", title: "젠레스 Ver. 2.2",     note: "누벨 디아 본편 2장 · 야간 모드 정식." },
      { when: "AUG", title: "Endfield 1주년",      note: "콘솔 동시 출시 · 모바일 빌드 별도 발표." },
    ],
    regulations: [
      { region: "KR",  ko: "한국",   line: "확률형 아이템 표시 의무 시행 1주년. 위반 사례 12건 누적." },
      { region: "CN",  ko: "중국",   line: "미성년 결제 한도 제재 강화 — 분기당 800위안 → 600위안." },
      { region: "EU",  ko: "유럽",   line: "DSA 보고 의무 대상 확대. 가챠 표시 가이드라인 1차 초안." },
      { region: "JP",  ko: "일본",   line: "JOGA \"가챠 자율 가이드라인\" 2판 발표 — 천장 표시 표준화." },
    ],
  },

  // ─── Community pulse ──────────────────────────────────────────────────────
  community: {
    section: "17 / Community Pulse",
    headline: { pre: "팬, 디렉터, 그리고", emphasis: "그 사이." },
    sub: "5월의 커뮤니티 신호 — 오프라인·온라인 양쪽에서.",
    events: [
      { when: "05.04", title: "원신 5주년 한국 오프라인",   where: "코엑스 D홀", scale: "방문 1.2만 명" },
      { when: "05.11", title: "스타레일 OST 라이브",        where: "도쿄돔 시티홀", scale: "전석 매진" },
      { when: "05.18", title: "젠레스 도시 코스프레 워크",  where: "용산 IPark몰", scale: "참가 320팀" },
      { when: "05.22", title: "명조 PC 토너먼트 결승",      where: "LCS 아레나", scale: "동접 47만" },
      { when: "05.29", title: "니케 팬아트 컨테스트 시상",  where: "온라인", scale: "출품 4,800점" },
    ],
    directorLetter: {
      head: "디렉터의 편지 — 발췌",
      from: "원신 / 다 웨이",
      body:
        "\"매월 캐릭터를 만들기 전, 그 캐릭터가 도시에 사는 모습을 먼저 그립니다. 5.7부터 우리는 도시를 먼저 공개하기로 결정했습니다 — 캐릭터는 그 다음입니다.\"",
      footer: "MAY 2026 · DEVELOPER LETTER",
    },
    fanWorks: [
      { kind: "ILLUSTRATION", title: "스네즈나야의 밤", by: "@ringil_art",     note: "Pixiv · 8.4k bookmarks" },
      { kind: "MUSIC",         title: "Caelas (Acoustic)", by: "@subori",       note: "YouTube · 320k views" },
      { kind: "ANIMATION",     title: "Nova: One Slot",   by: "@odd.studio",    note: "Twitter · 1.2M views" },
      { kind: "TEXT",          title: "안개 너머의 편지",   by: "@guryeong",     note: "Postype · 4.1k reads" },
    ],
  },

  // ─── Watchlist (next month) ───────────────────────────────────────────────
  watchlist: {
    section: "18 / Watchlist · JUN 2026",
    headline: { pre: "다음 한 달,", emphasis: "다섯 개를 본다." },
    sub: "수치보다 \"디자인 결정\"이 보이는 다섯 슬롯.",
    items: [
      { name: "스네즈나야 2차 진입", game: "원신",       why: "본진 도시 공개 — 진영 픽업 클러스터 본격 시작.", when: "06.18 예정" },
      { name: "조화 패스 신규 5★",   game: "스타레일",    why: "케일라스 이후 \"역할 분담\" 디자인 2번째 검증.",     when: "06.04 예정" },
      { name: "누벨 디아 2장",        game: "젠레스",     why: "야간 모드 정식 — 환경 메커닉의 첫 분기 검증.",       when: "06.11 예정" },
      { name: "안개 시간 2.0",        game: "명조",       why: "PC 우선 빌드의 첫 분기 성과 데이터.",                when: "06.21 예정" },
      { name: "엔드필드 1주년",       game: "엔드필드",   why: "콘솔 동시 출시 발표 — 멀티 플랫폼 가챠의 첫 모델.",   when: "06.30 예정" },
    ],
  },

  // ─── Colophon ─────────────────────────────────────────────────────────────
  colophon: {
    section: "19 / Colophon",
    headline: { pre: "출처, 방법,", emphasis: "그리고 한계." },
    sub: "본지는 매월 6개 작품의 디자인 결정과 시장 반응을 함께 본다. 매출은 추정치이며, 디자인 판단은 편집부의 책임이다.",
    sources: [
      { label: "매출 추정",   from: "SensorTower / AppMagic composite", note: "iOS+Android 추정. 출시 7일 단위 평균." },
      { label: "PC 동접",     from: "Steam Charts · 주간 피크",          note: "공식 클라이언트가 스팀에 등록된 작품만." },
      { label: "커뮤니티",     from: "Reddit / Twitter / Pixiv 표본",     note: "월 1회 1만개 표본 무작위 추출." },
      { label: "패치 노트",    from: "각 사 공식 발표",                    note: "공식 발표 기준. 비공식 정보는 제외." },
    ],
    methodology: [
      "디자인 결정 = 패치 노트·캐릭터 시트·인터뷰에서 명시된 변수.",
      "시장 반응 = 첫 7일 추정 매출 + 동접 + 커뮤니티 표본의 가중 평균.",
      "트렌드 식별 = 6작품 중 2개 이상에서 동시 관찰된 결정만 트렌드로 분류.",
      "신뢰도 표기 = \"신호 / 추세 / 확립\" 3단계.",
    ],
    limits: [
      "매출은 추정치 — 절대값보다 \"방향\"으로 읽어야 한다.",
      "표본은 6작품에 한정 — 슈팅·전략 장르의 가챠는 제외.",
      "지역 편중 — 한국·일본·중국·북미 4지역만 가중 적용.",
    ],
    masthead: {
      editor: "EDITOR · 박지원",
      design: "DESIGN · 김유나 · 이서진",
      data:   "DATA · 정민호 · 안다현",
      ad:     "ADVISORY · 손원평 (Game Design, KAIST)",
    },
    issn: "ISSN 0000-0001",
    next: "NEXT ISSUE · Vol.02 · 2026.06.10",
  },
};

Object.assign(window, { ISSUE_2026_05 });
