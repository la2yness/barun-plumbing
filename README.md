# 명동수도설비 홈페이지

서울 전지역 누수탐지·배관수리 전문업체 **명동수도설비**의 비즈니스 홈페이지.

---

## 개요

| 항목 | 내용 |
|------|------|
| 유형 | 지역 소규모 서비스업체 홈페이지 |
| 목적 | 신규 고객 유입 (전화 상담 전환) 및 검색엔진 노출 |
| 주 타겟 | 30~60대 중장년층 서울·경기 거주자 |
| 호스팅 | GitHub Pages |
| 도메인 | 미정 (Gabia `.co.kr` 예정) |

---

## 기술 스택

- **HTML5 / CSS3 / Vanilla JS** — 빌드 툴 없음, 정적 사이트
- **GitHub Pages** — 무료 호스팅, HTTPS 자동
- SEO: JSON-LD (LocalBusiness 스키마), OG 태그, sitemap.xml

CMS·프레임워크 미사용. 네이버 블로그를 별도 운영하여 워드프레스 불필요.

---

## 구조

```
├── index.html        # 단일 페이지 (전체 콘텐츠)
├── css/style.css     # 모바일 퍼스트 반응형 스타일
├── js/main.js        # 헤더 스크롤, 모바일 메뉴, 스크롤 애니메이션
├── sitemap.xml
├── robots.txt
└── .nojekyll         # GitHub Pages Jekyll 비활성화
```

---

## 페이지 구성

1. **헤더** — 스티키, 전화번호 항상 노출
2. **히어로** — 핵심 카피 + 전화/카카오 CTA
3. **서비스** — 6개 카드 (누수탐지, 막힘, 배관, 위생기기, 욕실, 상가)
4. **특장점** — 6가지 신뢰 포인트
5. **진행과정** — 4단계 프로세스
6. **서비스 지역** — 서울 25개 구 태그 + 경기 일부
7. **블로그 연결** — 네이버 블로그 CTA
8. **문의 CTA** — 전화 + 카카오톡 대형 버튼
9. **푸터**
10. **플로팅 전화버튼** — 모바일 고정 하단

---

## 배포 방법

```bash
git add .
git commit -m "..."
git push origin main
```

GitHub → Settings → Pages → Branch: main / root → Save  
배포 주소: `https://la2yness.github.io/myeongdong-plumbing/`

### todo: 도메인 확보 후 커스텀 도메인 연결

1. Settings → Pages → Custom domain 입력
2. Gabia DNS에 A 레코드 4개 추가 (`185.199.108~111.153`)
3. CNAME: `www` → `la2yness.github.io`

---

## 콘텐츠 수정 가이드

| 수정 항목 | 파일 | 위치 |
|---|---|---|
| 전화번호 | `index.html` | `tel:` href 전체 |
| 카카오 링크 | `index.html` | `open.kakao.com` href |
| 도메인 | `index.html`, `sitemap.xml`, `robots.txt` | `[도메인입력필요]` |
| 서비스 내용 | `index.html` | `#services` 섹션 |
| 색상 | `css/style.css` | `:root` CSS 변수 |

---

## SEO 체크리스트

- [ ] 도메인 확정 후 `[도메인입력필요]` 전체 교체
- [ ] 네이버 서치어드바이저 등록 + sitemap 제출
- [ ] 네이버 스마트플레이스 등록
- [ ] Google Search Console 등록
- [ ] 카카오맵 업체 등록
