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
- SEO: JSON-LD (LocalBusiness 스키마), OG 태그

CMS·프레임워크 미사용.

---

## 파일 구조

```
├── index.html              # 단일 페이지 (전체 콘텐츠)
├── css/style.css           # 모바일 퍼스트 반응형 스타일
├── js/main.js              # 헤더 스크롤, 모바일 메뉴, 애니메이션, 클립보드
├── favicon.ico             # 브라우저 탭 아이콘 (32×32)
├── apple-touch-icon.png    # iOS 홈화면 아이콘 (180×180)
├── images/
│   ├── main.jpg            # 히어로 배경사진 (작업 현장)
│   ├── icon-192.png        # 헤더 로고 + Android 아이콘
│   ├── kakao-qr.png        # 카카오톡 오픈채팅 QR
│   ├── gallery/            # 시공 현장 사진 12장
│   └── reviews/            # 고객 후기 스크린샷 10장
```

---

## 페이지 구성

1. **헤더** — 스티키, 1024px+ 전화번호 노출 / 클릭 시 클립보드 복사 (데스크톱)
2. **히어로** — 핵심 카피 + 3가지 어필포인트 카드 + 전화/카카오 CTA, 입장 애니메이션
3. **보증 배너** — 현장 방문 원칙, 시공+점검 약속
4. **신뢰 지표** — 월 실적·경력·장비·A/S 4가지 수치
5. **서비스** — 6개 카드 (누수탐지, 막힘, 배관, 위생기기, 욕실, 상가)
6. **시공 갤러리** — 현장 사진 12장 (3열 그리드, 모바일 호버 시 상시 표시)
7. **고객 후기** — 숨은고수 리뷰 스크린샷 10장 가로 스크롤 (데스크톱 화살표 버튼)
8. **작업 항목** — 공간별 6가지 항목 그리드
9. **특장점** — 6가지 신뢰 포인트
10. **진행과정** — 4단계 프로세스 (1024px+ 가로 배치)
11. **요금 안내** — 출장비 0원 / 점검비 / 단순교체
12. **서비스 지역** — 서울 25개 구 태그 + 경기 일부
13. **A/S 보증** — 1년 무상 보증 안내
14. **FAQ** — 7개 아코디언 (자주 묻는 질문)
15. **문의 CTA** — 전화 + 카카오톡 + QR코드
16. **푸터** — 업체 정보, 대표자, 이메일, 인스타그램
17. **플로팅 버튼** — 카카오 + 전화 고정 하단

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

GitHub → Settings → Pages → Branch: main / root → Save  
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

---

## todo

- [ ] 네이버 서치어드바이저 등록 + sitemap 제출
- [ ] Google Search Console 등록

---

## SEO

- JSON-LD LocalBusiness 스키마 적용 (`@type: LocalBusiness`)
- OG 태그 (title, description, type, locale)
- 모바일 퍼스트, `word-break: keep-all` 한국어 최적화
- 이미지 `loading="lazy"`, `alt` 텍스트 전체 적용
