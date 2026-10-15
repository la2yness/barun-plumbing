# 바른누수센터 홈페이지

서울 전지역 누수탐지·배관수리 전문업체 **바른누수센터**의 비즈니스 홈페이지.

---

## 개요

| 항목 | 내용 |
|------|------|
| 유형 | 지역 소규모 서비스업체 홈페이지 |
| 목적 | 신규 고객 유입 (전화 상담 전환) 및 검색엔진 노출 |
| 주 타겟 | 30~60대 중장년층 서울·경기 거주자 |
| 호스팅 | GitHub Pages |
| 도메인 | `nusoo6422.co.kr` (Gabia) |

---

## 기술 스택

- **HTML5 / CSS3 / Vanilla JS** — 빌드 툴 없음, 정적 사이트
- **GitHub Pages** — 무료 호스팅, HTTPS 자동
- SEO: JSON-LD (Plumber 스키마), OG 태그, canonical

CMS·프레임워크 미사용.

---

## 파일 구조

```
├── index.html              # 단일 페이지
├── css/style.css           # 모바일 퍼스트 반응형 스타일
├── js/main.js              # 헤더 스크롤, 모바일 메뉴, 클릭 추적, 클립보드
├── favicon.ico             # 브라우저 탭 아이콘 (32×32)
├── apple-touch-icon.png    # iOS 홈화면 아이콘 (180×180)
├── images/
│   ├── main.jpg            # 히어로 사진 (데스크톱, 1920px)
│   ├── main-m.jpg          # 히어로 배경 (모바일·태블릿, 1000px)
│   ├── og-image.jpg        # 공유 썸네일 이미지 1200×630
│   ├── icon-192.png        # 헤더 로고 / Android 아이콘
│   ├── kakao-qr.png        # 카카오톡 오픈채팅 QR
│   ├── gallery/            # 현장 사진 12장
│   └── reviews/            # 고객 후기 스크린샷 28장
```

---

## 페이지 구성

1. **헤더** — 스티키, 768px+ 우측 "무료상담" 전화 버튼 (데스크톱은 클릭 시 번호 클립보드 복사)
2. **히어로** — 헤드라인 + 체크 포인트 3개 + 전화/카카오 CTA. 모바일은 `main-m.jpg`, 데스크톱은 `main.jpg`
3. **신뢰 지표** — 월 실적·경력·장비·A/S 4가지 수치
4. **증상별 안내** (`#symptoms`) — "이런 증상 있으세요?" 8개 증상 + 전화 CTA
5. **서비스** — 6개 카드, 현장 사진 썸네일
6. **장비 갤러리** (`#gallery`) — 전문 장비 6장 사진, 캡션 상시 표시
7. **고객 후기** — 숨은고수 리뷰 스크린샷 28장 가로 스크롤 (화살표 버튼, 5초마다 자동 넘김, 클릭 시 크게 보기)
8. **다른 점** (`#features`) — 특징 4가지 (직접 방문 / 본사 직영 / 연관 배관 점검 / 1년 A/S)
9. **요금과 진행 순서** (`#pricing`) — 4단계 + 요금표 (출장비 0원 / 점검비 / 단순교체)
10. **서비스 지역** — 서울 25개 구 태그 + 경기 일부
11. **FAQ** — 7개 아코디언
12. **문의 CTA** — 전화/카카오 CTA + QR코드
13. **푸터** — 업체 정보, 대표자, 이메일, 인스타그램
14. **플로팅 버튼** — 모바일: 하단 고정 바(전화+카카오) / 768px+: 우하단 버튼(전화+카카오)

---

## 외부 연결

| 채널 | 링크 |
|---|---|
| 숨은고수 리뷰 | `soomgo.com/profile/users/18574378` |
| 카카오 오픈채팅 | `open.kakao.com/o/sPRMAewi` |
| 인스타그램 | `instagram.com/md_nusoo` |

---

## 배포 방법

```bash
git add .
git commit -m "..."
git push origin main
```

GitHub → Settings → Pages → Branch: re-design / root → Save  
배포 주소: `https://nusoo6422.co.kr` (커스텀 도메인 연결됨, GitHub Pages 기본 주소는 `https://la2yness.github.io/barun-plumbing/`)

---

## 콘텐츠 수정 가이드

| 수정 항목 | 파일 | 위치 |
|---|---|---|
| 전화번호 | `index.html` | `tel:` href 전체 검색 |
| 카카오 링크 | `index.html` | `open.kakao.com` href |
| 숨은고수 링크 | `index.html` | `soomgo.com` href |
| 도메인 | `index.html` | `nusoo6422.co.kr` 전체 검색 |
| 서비스 내용 | `index.html` | `#services` 섹션 |
| 색상 | `css/style.css` | `:root` CSS 변수 |
| 폰트 사이즈 원본값 | `css/style.css` | 파일 상단 주석 참고 |
| 후기 사진 추가 | `images/reviews/` | 파일 추가 후 `index.html` `#reviews` 섹션에 img 태그 추가 |
| 현장·장비 사진 교체 | `images/gallery/` | 서비스 카드는 4:3, 갤러리는 4:5로 표시(가운데 기준 `cover`) — 해당 비율로 크롭해서 800px 폭으로 저장 |

---

## todo

- [ ] 구글 비즈니스 프로필 수정

---

## SEO

- JSON-LD Plumber(LocalBusiness 하위) 스키마 적용 (`@type: Plumber`)
- `<link rel="canonical">` → `https://nusoo6422.co.kr/` (`/index.html` 중복 URL 방지)
- OG 태그 (title, description, type, locale, 1200×630 `images/og-image.jpg`) — 이미지 교체 시 `og:image`·JSON-LD `image`의 `?v=` 숫자를 올려 카카오/페이스북 캐시 갱신
- 전환 추적: GA4 이벤트 `call_click` / `kakao_click` (`link_location` = 클릭 위치 섹션 id)
- 모바일 퍼스트, `word-break: keep-all` 한국어 최적화
- 이미지 `loading="lazy"`, `alt` 텍스트 전체 적용
