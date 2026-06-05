# Tenugui Brand Landing Page — Design Spec

**Date:** 2026-06-05  
**Status:** Approved

---

## Overview

React + TypeScript (Vite) 기반의 단일 랜딩 페이지. 테누구이 스타일링 액세서리 브랜드 BRAND_NAME의 사전 공개용 브랜드 소개 페이지. 상업적 판매보다 무드와 방향성 전달에 집중.

---

## Stack & Architecture

- **Framework:** React 18 + TypeScript, Vite
- **Styling:** 단일 `src/styles.css` (CSS Custom Properties 기반 토큰 시스템)
- **외부 패키지:** `@radix-ui/react-accordion` (FAQ 섹션)
- **폰트:** Cormorant Garamond (헤딩, Google Fonts) + Noto Sans KR (본문, Google Fonts)
- **구조:** Approach A — App.tsx 중심, SectionTitle + FaqAccordion만 분리

### 파일 구조

```
tenugui-site/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── styles.css
    └── components/
        ├── SectionTitle.tsx
        └── FaqAccordion.tsx
```

---

## Design Tokens

```css
--color-bg:
  #f7f4ef /* 아이보리 배경 */ --color-surface: #f0ebe3 /* 카드/섹션 배경 */
    --color-warm-gray: #b8a99a /* 보조 텍스트 */ --color-charcoal: #2c2825 /* 주요 텍스트 */
    --color-ink: #1a1714 /* 헤딩 */ --color-indigo: #3a3f5c /* 포인트 컬러, 아주 제한적 사용 */
    --color-border: #ddd5c8 /* 라인, 구분선 */ --font-serif: 'Cormorant Garamond',
  Georgia, serif --font-sans: 'Noto Sans KR',
  sans-serif --spacing-section: 120px /* 섹션 간 여백 (모바일 80px) */ --max-width: 960px;
```

---

## Sections

### 1. Hero

- 풀스크린 높이, 세로 중앙 정렬
- 배경: CSS 텍스처 패턴 (pseudo-element 노이즈 그라데이션)
- 대형 카피 (Cormorant Garamond, 7rem), 짧은 서브 카피
- CTA 2개: "브랜드 소개 보기" (앵커 링크), "인스타그램 — 준비중" (disabled 스타일)
- 아주 은은한 fade-in 애니메이션 (prefers-reduced-motion 대응)

### 2. Brand Concept

- 텍스트 중심, 좌우 여백 넉넉
- 브랜드 철학 단락 + 테누구이 소재 설명
- 얇은 수평선 디바이더

### 3. Styling Use Cases

- 4개 카드 그리드 (목 / 머리 / 가방 / 손목)
- 카드: CSS 배경 패턴 플레이스홀더 + 제목 + 한 줄 설명
- 아주 약한 box-shadow, hover 시 미세 lift

### 4. For Who

- 타겟 3개를 감성적 문장으로 — 노골적 세일즈 없이
- 배경 tint 변환으로 섹션 구분

### 5. Brand Mood / Lookbook Preview

- 3개 카드 (street snap / daily layer / quiet accent)
- 카드마다 CSS 그라데이션 배경 + 소제목 + 짧은 무드 설명
- 가로 스크롤 없이 그리드

### 6. Value / Philosophy

- 4개 핵심 가치 — 아이콘 없이 타이포만으로 구성
- 각 항목: 한 줄 제목 + 짧은 설명

### 7. FAQ

- Radix UI Accordion
- 4-5개 Q&A
- 스타일: 기본 Radix 스타일 완전 오버라이드, 브랜드 톤에 맞게

### 8. Footer / Final CTA

- "곧 공개됩니다" 마무리 카피
- 인스타그램, 문의 메일 링크
- 브랜드명 + 짧은 태그라인

---

## Animation

- Hero fade-in: `opacity 0→1`, `translateY 12px→0`, 0.8s ease-out
- 카드 hover: `translateY -4px`, 0.2s ease
- Accordion open/close: Radix 내장 + CSS height transition
- `@media (prefers-reduced-motion: reduce)` 블록으로 모든 애니메이션 비활성화

---

## Responsive

- **Desktop:** max-width 960px, 섹션 padding 120px
- **Tablet (≤768px):** 2컬럼 그리드 → 1컬럼, 섹션 padding 80px
- **Mobile (≤480px):** 헤딩 크기 축소, 카드 1열, 패딩 조정

---

## Accessibility

- 시맨틱 HTML: `<main>`, `<section>`, `<nav>`, `<footer>`, `<h1>`–`<h3>`
- CTA 버튼 `aria-label` 명시
- disabled 버튼 `aria-disabled="true"`
- Radix Accordion 기본 접근성 내장
- 색상 대비 WCAG AA 기준 준수
