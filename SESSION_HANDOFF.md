# 세션 인수인계 — 서브컬처 게임 월간 트렌드 보고서 프로젝트

**작업 기간**: 2026.04.21
**상태**: 진행 중 · 다음 세션에서 계속

---

## 1. 프로젝트 개요

남성향 서브컬처 게임 프로젝트의 기획자·디자이너용 경쟁작 월간 트렌드 분석 시스템.

**분석 대상 6개 게임**:
- 원신 (Genshin Impact · HoYoverse)
- 붕괴: 스타레일 (Honkai: Star Rail · HoYoverse)
- 젠레스 존 제로 (Zenless Zone Zero · HoYoverse)
- 명조: 워더링 웨이브 (Wuthering Waves · Kuro Games)
- 명일방주: 엔드필드 (Arknights: Endfield · Hypergryph)
- 승리의 여신: 니케 (NIKKE · Shift Up)

Love and Deepspace는 남성향 타겟 외 제외.

---

## 2. 산출물 3종

### 2-1. Claude Code 스킬
- **경로**: `C:\Users\code1412\.claude\skills\subculture-trend-report\`
- **패키지**: `D:\Claude\subculture-trend-report.skill` (44 KB, .skill zip)
- **구성**:
  - `SKILL.md` — 메인 스킬 정의 (6단계 처리 순서)
  - `assets/template.html` — 2026.03 최종본 (88 KB 템플릿)
  - `scripts/fetch-fandom-image.sh` — Fandom 이미지 추출 (curl + UA 우회)
  - `scripts/fetch-app-icon.sh` — iTunes Search API 앱 아이콘
  - `references/terminology.md` — 용어집 + 성별 매트릭스 + 블랙리스트
  - `references/data-sources.md` — 소스 7종 우선순위 매핑
  - `references/fandom-guide.md` — 게임별 wiki 도메인·파일명 규칙

**트리거**: "서브컬처 트렌드 보고서 만들어줘", "경쟁작 캐릭터 분석", "2026.XX 보고서" 등

### 2-2. 월간 HTML 보고서 2종
- **2026-03 보고서** (VOL.01 · 최초 발행)
  - 로컬: `D:\Claude\Monthly Character Trend Report.html`
  - 웹: https://rwang2gun.github.io/Report/월간%20트랜드%20보고서/2026-03.html
  - 9 캐릭터: 바르카·스파키·애쉬베일·시그리카·구원·남궁우·탕탕·로시·아르카나
- **2026-02 보고서** (VOL.00 · 소급 백이슈)
  - 웹: https://rwang2gun.github.io/Report/월간%20트랜드%20보고서/2026-02.html
  - 8 캐릭터: 자백·효광·수나·아리아·에이메스·질베르타·이본·벨벳

### 2-3. GitHub Pages 사이트
- **리포**: https://github.com/rwang2gun/Report
- **메인 홈**: https://rwang2gun.github.io/Report/ (3번째 배너 "월간 트랜드 보고서" 추가)
- **랜딩 페이지**: https://rwang2gun.github.io/Report/월간%20트랜드%20보고서/
  - 2 REPORTS 카운트
  - 2026.03 카드 + 2026.02 카드

---

## 3. 보고서 구조 (HTML 섹션)

각 월별 HTML 보고서는 다음 구조로 고정:

1. **헤더** — 타이틀 + 메타(대상 월, 발행일, 게임/캐릭터 수, VOL)
2. **TOC 네비게이션** — 01~05 섹션 링크
3. **이달의 3대 기획 트렌드** — 번호 매긴 요약
4. **01 공통 트렌드 분석** (5 cross-cutting insights) — 인사이트 카드
5. **02 메커니즘·기믹 비교 매트릭스** — 6 games × 5 cols, 점(●) 범례
6. **03 Do / Don't 체크리스트** — 6 + 6 항목
7. **04 게임별 카탈로그** — 클릭 가능 게임 카드 그리드
   - 오버레이 열림 시: 매출 추이 SVG 차트 + 픽업 타임라인(3개월) + 캐릭터 카드(한글 메인, 영문 서브, Splash Art, 8 필드)
   - ← → 키보드 네비, Esc 닫기
8. **05 다음 달 주목 캐릭터 (Watchlist)** — 5개 항목 (날짜·게임 아이콘·캐릭터)
9. **방법론 주의사항 + 출처** (2열 카테고리 그리드)

---

## 4. 주요 디자인 규칙 (반드시 준수)

### 4-1. 용어·표기
- **캐릭터 이름**: 한글 메인 + `/` + 영문 서브 (예: `바르카 / Varka`)
- **§ 기호 사용 금지** — 섹션 번호는 `01~05`
- **더미 라벨 금지** — "GAME-A" 같은 placeholder 쓰지 말고 실게임명 사용

### 4-2. 한글화 블랙리스트 (자주 틀리는 표기)
| ❌ 잘못 | ✅ 맞음 |
|---|---|
| 로씨 | 로시 |
| 원석 기예 | 오리지늄 아츠 |
| 우링 | 무릉 (武陵) |
| Vulnerability 스택 | 취약 스택 |
| Arts Infliction | 아츠 감염 |
| AOD = Assault of Disciples | AOD = **Angels of Delusion (엔젤디)** |
| 남궁우 = 남성 | 남궁우 = **여성** (엔젤디 리더·리드 댄서) |
| 애쉬베일 = 여성 | 애쉬베일 = **남성** (He/him) |
| 자백 = 남성 | 자백 = **여성** |

### 4-3. 성별 매트릭스 (확인된 캐릭터)
| 캐릭터 | 성별 | 확인 포인트 |
|---|---|---|
| 바르카 | 남 | 대단장·거한형 |
| 콜롬비나 | 여 | 어린 소녀 외형 |
| 자백 | 여 | v6.3 후반 바위 한손검 |
| 스파키 | 여 | 스파클 기반 분신 |
| 애쉬베일 | 남 | He/him 대명사 |
| 효광 | 여 | 선주 융도 장군 |
| 엽빛나 | 여 | 청명검 공명 |
| 에이메스 | 여 | 금발·별 모양 동공 |
| 시그리카 | 여 | Her 대명사 |
| 구원 (Qiuyuan) | 남 | 검객·Him |
| 남궁우 | 여 | 엔젤디 리더·리드 댄서 |
| 수나·아리아 | 여 | 엔젤디 멤버 |
| 레바테인·질베르타·이본·탕탕·로시 | 여 | 엔드필드 (전원 여캐) |
| 아르카나·벨벳 | 여 | 니케 (전원 여성) |

### 4-4. 픽업 색상 코드
- 🟣 `PK.f` 여캐 신규 (#FF9FC9)
- 🔵 `PK.m` 남캐 신규 (#7DCFFF)
- ⚪ `PK.r` 복각 (#8B95A3)
- 🟣 `PK.x` 혼합 (#BB9AF7)
- ⚫ `PK.u` 자료 미확보 (#3A3A3A)

### 4-5. 별점 의미
**3개월 중 상대 매출 강도** (5 = 해당 게임의 3개월 최고 월)
- 매출 데이터와 일치해야 함

### 4-6. 매트릭스 점(●) 의미
**해당 특성의 도입 강도** (강점/약점 ❌):
- 🟢 full — 뚜렷한 도입·강한 적용
- 🟡 half — 부분적·조건부 적용
- ⚪ none — 미도입·해당 없음

---

## 5. 주요 정정 이력 (2026-03 보고서)

사용자 팩트체크로 반영된 수정 사항:

1. **콜롬비나** (잘못 3월에 배치) → 1월 출시로 정정, 3월은 **바르카**
2. **로씨 → 로시** (정확한 한글 표기)
3. **Wuling → 무릉 (武陵)** (엔드필드 2장 배경)
4. **Originium Arts → 오리지늄 아츠** (공식 음차)
5. **울프팀은 무릉 소속 아님** (별개 독립 팩션)
6. **AOD 풀네임** Assault of Disciples → **Angels of Delusion (엔젤디)**
7. **남궁우 성별** 남 → **여** (엔젤디 리더·리드 댄서)
8. **애쉬베일 성별** 여 → **남** (He/him)
9. **자백 성별** (2026-02) 남 → **여**
10. **별점 재매핑** — 실제 매출과 일치하도록 재조정
11. **니케 아르카나** 속성 보강 — SSR · 버닝 · 버스트 II · 샷건(Bittersweet) · 공격력 버퍼
12. **엔드필드 2월** "런칭 연장" → **질베르타(2/7) + 이본(2/24) 연속 신규**
13. **매트릭스 "버전 주기" → "신캐 출시 주기"** (이전 신캐 대비 간격 명시)

---

## 6. 기술 노트 (스킬 구현)

### 6-1. Fandom 이미지 추출
**중요**: WebFetch는 Fandom/wiki.gg에 **403 반환**. 반드시 curl 우회.

```bash
UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
curl -sL -A "$UA" -H "Referer: https://www.google.com/" "$URL" | \
  grep -oE 'og:image" content="[^"]+"' | head -1
```

게임별 Fandom 도메인:
- 원신: `genshin-impact.fandom.com` (CDN: `gensin-impact` ← 오탈자 그대로)
- 스타레일: `honkai-star-rail.fandom.com` (CDN: `houkai-star-rail`)
- 젠레스: `zenless-zone-zero.fandom.com`
- 명조: `wutheringwaves.fandom.com` (**하이픈 없음**)
- 엔드필드: `endfield.wiki.gg` (Fandom 아님, 자체 CDN)
- 니케: `nikke-goddess-of-victory-international.fandom.com` (`-international` 필수)

### 6-2. iTunes 앱 아이콘 추출
```bash
curl -s "https://itunes.apple.com/search?term=<게임명>&entity=software&limit=1" | \
  grep -oE '"artworkUrl512":"[^"]+"'
```

### 6-3. 스킬 재패키징 (PowerShell)
```powershell
$src="C:\Users\code1412\.claude\skills\subculture-trend-report"
$stage="D:\Claude\_stage_skill"
$out="D:\Claude\subculture-trend-report.skill"
Remove-Item $stage,$out -Recurse -Force -ErrorAction SilentlyContinue
New-Item -ItemType Directory $stage | Out-Null
Copy-Item $src $stage -Recurse
Add-Type -Assembly System.IO.Compression.FileSystem
[System.IO.Compression.ZipFile]::CreateFromDirectory($stage,$out,"Optimal",$false)
Remove-Item $stage -Recurse -Force
```

---

## 7. Git 작업 흐름

```bash
# 1. 클론 (임시)
cd "D:/Claude"
git clone https://github.com/rwang2gun/Report.git _repo

# 2. 작업 + 커밋
cd _repo
git config user.name "rwang2gun"
git config user.email "rwang2gun@gmail.com"
# ... 파일 수정 ...
git add "월간 트랜드 보고서/"
git commit -m "커밋 메시지 ... 

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>"
git push origin main

# 3. 정리 (PowerShell, 파일 락 회피)
Remove-Item "D:\Claude\_repo" -Recurse -Force
```

---

## 8. 다음 세션 TODO

### 8-1. 2026-02 보고서 팩트체크 필요 항목
사용자의 지식 기반으로 다음을 확인·정정:

- [ ] **자백 캐릭터 상세**: 실제 설정·성능·스킬 메커니즘 확인
- [ ] **효광**: 선주 융도 장군 배경 정확성, 웃음 포인트 시스템 디테일
- [ ] **수나·아리아**: 엔젤디 소속 확인, 정확한 속성·성능
- [ ] **에이메스**: 용융 속성·공중전 시스템 정확성
- [ ] **질베르타**: 자연 서포터 맞는지, 로도스 아일랜드 소속 확인
- [ ] **이본**: 정확한 속성명 (냉기/Frost/Ice?), Top-tier 포지션 검증
- [ ] **벨벳**: Code/버스트/무기 상세 정보
- [ ] **치사토·타키나·쿠루미** 콜라보 픽업 정보

### 8-2. 1월 자료 미확보 보강
- [ ] 원신 1월 실제 매출 수치 (현재 $42M 추정)
- [ ] 스타레일 v3.7 후반 픽업 정확한 캐릭터 (현재 "키레네 복각 계열"로 추정)
- [ ] 젠레스 엽빛나 상세, 자오 배포 구체적 기간
- [ ] 명조 v3.0 라하이 로이 런칭 캐릭터 상세
- [ ] 니케 12월·1월 픽업 자료

### 8-3. 12월 2025 자료 추가 (롤링 윈도우용)
2월 보고서의 Dec 슬롯이 대부분 "자료 미확보" 상태. 필요시 보강.

### 8-4. 운영 개선
- [ ] **정기 발행 스케줄러** 세팅 (매월 1일 자동 생성)
- [ ] 월간 랜딩 페이지에 **년도별 아카이브 필터** 추가 (2027년 시작 시 필요)
- [ ] 스킬의 **자동 Git 푸시 스크립트** 추가 (scripts/publish-report.ps1)

### 8-5. 다음 월 보고서 준비
- [ ] 2026-04 보고서 작성 (4월 픽업: 젠레스 시시아, 이환 런칭, 명조 3.3, 스타레일 4.2 등)

### 8-6. 2026-03 보고서 캐릭터 재검증 (2026.04.22 작업 예정)

**완료** (2026.04.21):
- ✅ **로시(엔드필드)** — 한국 공식 번역 반영 재검증 완료
  - "울프팀(The Pack)" 공식 표기 확인 (내부 추정 "울프팩"은 틀렸음)
  - "적기사(Red Knight)" 1.1 로시 스토리 이벤트명 확인
  - "랜드브레이커 분파" 로서 엔드필드 공업 협력 관계 명시
  - 탕탕 라이벌 서사 날조 제거, 본 크러셔 분쟁 서사로 교체
  - 로시 울프팀 리더 승계 설정 추가

**재검증 완료 8명** (2026.04.22 작업):
- ✅ **바르카(원신)** — "북풍 기사" 칭호는 왕랑 가교 역할의 독자적 칭호. 켄리아 유적 조사 대원정 명시
- ✅ **스파키(스타레일)** — "파생 인격"→"독립 개체"(연생 환조종)로 교정, "휴대폰 화면 속 스파클" 날조 삭제
- ✅ **애쉬베일(스타레일)** — "전직 갤럭시 레인저 → 선주 라오푸 명탐정 사무소" 공식 설정으로 교체, "자칭 괴수" 날조 삭제
- ✅ **시그리카(명조)** — "공명자"→"**기류 공명자**"로 속성 명시, "플로로·갈브레나 잇는 3번째 에코 피해 메인 딜러" 보강
- ✅ **구원(명조)** — 설정 유지 (나무위키 일치)
- ✅ **남궁우(젠레스)** — "천사 리더" 추가 능력, "타고난 댄서"·"댄스 스택"·"극성 혼돈" 스킬명 반영, AOD 유일 날개·헤일로 설정
- ✅ **탕탕(엔드필드)** — **중대 수정**: "물 속성"→"**냉기**", "듀얼핸드캐논"→"**아츠 유닛**"(캐스터), "고아" 배경→"강에서 태어난 소녀", "혈통 복선"→"마안 각성 시 미브 상해 죄책감"
- ✅ **아르카나(니케)** — 원본 아르카나(SSR 전격 런처, 타로 가게 운영자) 명시, 에이미 동반 전학생 컨셉 반영

**검증 방법 (필수)**:
1. **공식 한국 소스 우선**: 나무위키 > 공식 퍼블리셔 한국 사이트 > 게임인사이트·게임톡·게임메카·루리웹·아카라이브
2. 영문 wiki는 2차 참조용 (오역·오표기 가능성 — 예: "울프팀" 공식을 "울프팩"으로 잘못 제안)
3. `fetch-fandom-image.sh` 방식으로 curl + UA 우회 (나무위키도 WebFetch 403)
4. 설정·성능 날조 제거, "라이벌 대사·팔짱·삐진 포즈" 같은 추측성 세부는 삭제
5. 한글 공식명 없는 경우만 영문 병기 (예: "적기사(Red Knight)")

---

## 9. 주요 파일 경로 요약

| 항목 | 경로 |
|---|---|
| 최신 3월 보고서 (로컬) | `D:\Claude\Monthly Character Trend Report.html` |
| 스킬 패키지 | `D:\Claude\subculture-trend-report.skill` |
| 스킬 설치 경로 | `C:\Users\code1412\.claude\skills\subculture-trend-report\` |
| GitHub 리포 | https://github.com/rwang2gun/Report |
| GitHub Pages 홈 | https://rwang2gun.github.io/Report/ |
| 월간 랜딩 | https://rwang2gun.github.io/Report/월간%20트랜드%20보고서/ |
| 이 문서 | `D:\Claude\SESSION_HANDOFF.md` |

---

## 10. 빠른 재개 가이드 (다음 세션)

**시작 멘트 예시**:
> "D:\Claude\SESSION_HANDOFF.md 읽고 서브컬처 트렌드 보고서 작업 이어가자. [구체적 TODO] 부터 시작."

**첫 단계**:
1. 이 문서 읽기
2. 최신 월 보고서 상태 확인 (2026-02 팩트체크 항목부터)
3. 사용자 피드백 받아 수정 반영
4. 수정 → 로컬 + 스킬 템플릿 + GitHub 3곳 동기화

**동기화 체인** (한 번 수정 시):
1. `D:\Claude\Monthly Character Trend Report.html` (3월 최신, 템플릿 역할)
2. `C:\Users\code1412\.claude\skills\subculture-trend-report\assets\template.html`
3. `D:\Claude\subculture-trend-report.skill` (재패키징)
4. GitHub `월간 트랜드 보고서/2026-XX.html` (clone → edit → commit → push)

---

## 11. 상관 작업 맥락

사용자는 이 프로젝트 외에도 다음 작업 환경을 가지고 있음:
- **ZZZ_SNA 프로젝트**: 젠레스 스킬 키워드 맵 (같은 리포에 있음)
- **원신 속성 분석**: 같은 리포의 `genshin_element_analysis_report.html`
- **드로우아이오 플로우차트**: 전투 시스템 설계 관련

이 작업들과 공통으로 적용되는 개인 환경 설정:
- Git 사용자: `rwang2gun` / `rwang2gun@gmail.com`
- Windows 환경, bash는 Git Bash, PowerShell 병행 사용 가능
- Python은 WindowsApps 스텁 문제로 직접 실행 어려움 → PowerShell이나 외부 Python 필요

---

**작성**: Claude (2026.04.21 세션)
**버전**: v1.0 · 인수인계 초판
