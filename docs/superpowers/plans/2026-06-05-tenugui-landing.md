# Tenugui Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** React + TypeScript Vite 기반 테누구이 브랜드 소개 랜딩 페이지를 구축한다.

**Architecture:** Approach A — App.tsx 중심 단일 페이지, SectionTitle + FaqAccordion 컴포넌트만 분리. CSS 변수 기반 단일 styles.css. Radix Accordion으로 FAQ 구현.

**Tech Stack:** React 18, TypeScript, Vite, @radix-ui/react-accordion, Google Fonts (Cormorant Garamond + Noto Sans KR)

---

## File Map

| File                                                         | Role                            |
| ------------------------------------------------------------ | ------------------------------- |
| `index.html`                                                 | 폰트 로드, 메타 태그, 앱 마운트 |
| `package.json`                                               | 의존성                          |
| `vite.config.ts`                                             | Vite 설정                       |
| `tsconfig.json` / `tsconfig.app.json` / `tsconfig.node.json` | TS 설정                         |
| `src/main.tsx`                                               | React 앱 진입점                 |
| `src/App.tsx`                                                | 모든 섹션 포함 메인 컴포넌트    |
| `src/styles.css`                                             | 디자인 토큰 + 전체 스타일       |
| `src/components/SectionTitle.tsx`                            | 섹션 제목 공통 컴포넌트         |
| `src/components/FaqAccordion.tsx`                            | Radix 기반 FAQ 아코디언         |

---

### Task 1: 프로젝트 스캐폴딩

**Files:**

- Create: `package.json`
- Create: `vite.config.ts`
- Create: `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
- Create: `index.html`
- Create: `src/main.tsx`

- [ ] **Step 1: package.json 작성**

```json
{
  "name": "tenugui-site",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@radix-ui/react-accordion": "^1.2.3",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "typescript": "^5.5.3",
    "vite": "^5.4.2"
  }
}
```

- [ ] **Step 2: vite.config.ts 작성**

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

- [ ] **Step 3: tsconfig 파일 세 개 작성**

`tsconfig.json`:

```json
{
  "files": [],
  "references": [{ "path": "./tsconfig.app.json" }, { "path": "./tsconfig.node.json" }]
}
```

`tsconfig.app.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
```

`tsconfig.node.json`:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["vite.config.ts"]
}
```

- [ ] **Step 4: index.html 작성**

```html
<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="BRAND_NAME — 테누구이 기반 스타일링 액세서리 브랜드" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
    <link
      href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Noto+Sans+KR:wght@300;400;500&display=swap"
      rel="stylesheet"
    />
    <title>BRAND_NAME</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 5: src/main.tsx 작성**

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
```

- [ ] **Step 6: 의존성 설치**

```bash
cd /Users/jiho/Documents/GitHub/tenugui-site && npm install
```

Expected: node_modules 생성, lock 파일 생성

---

### Task 2: 디자인 토큰 + 전체 CSS

**Files:**

- Create: `src/styles.css`

- [ ] **Step 1: styles.css 작성 — 전체 내용**

(Task 3에서 컴포넌트 스타일 추가되므로 이 파일은 전역 스타일만)

```css
/* ===== Design Tokens ===== */
:root {
  --color-bg: #f7f4ef;
  --color-surface: #f0ebe3;
  --color-surface-alt: #ede7dd;
  --color-warm-gray: #b8a99a;
  --color-muted: #9a8d81;
  --color-charcoal: #2c2825;
  --color-ink: #1a1714;
  --color-indigo: #3a3f5c;
  --color-border: #ddd5c8;
  --color-border-light: #e8e0d4;

  --font-serif: 'Cormorant Garamond', Georgia, serif;
  --font-sans: 'Noto Sans KR', -apple-system, sans-serif;

  --spacing-xs: 8px;
  --spacing-sm: 16px;
  --spacing-md: 32px;
  --spacing-lg: 64px;
  --spacing-xl: 96px;
  --spacing-2xl: 140px;

  --max-width: 960px;
  --radius-sm: 2px;
  --radius-md: 4px;

  --transition-fast: 0.18s ease;
  --transition-base: 0.28s ease;
  --transition-slow: 0.5s ease;

  --shadow-card: 0 2px 16px rgba(44, 40, 37, 0.06);
  --shadow-card-hover: 0 6px 24px rgba(44, 40, 37, 0.1);
}

/* ===== Reset & Base ===== */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--color-bg);
  color: var(--color-charcoal);
  font-family: var(--font-sans);
  font-weight: 300;
  font-size: 15px;
  line-height: 1.8;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font-family: inherit;
  cursor: pointer;
}

/* ===== Layout ===== */
.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

section {
  padding: var(--spacing-2xl) 0;
}

/* ===== Typography ===== */
.display {
  font-family: var(--font-serif);
  font-weight: 300;
  line-height: 1.15;
  letter-spacing: -0.01em;
  color: var(--color-ink);
}

.display-xl {
  font-size: clamp(3.5rem, 8vw, 7rem);
}

.display-lg {
  font-size: clamp(2.2rem, 5vw, 3.8rem);
}

.display-md {
  font-size: clamp(1.6rem, 3.5vw, 2.6rem);
}

.serif-italic {
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 300;
}

.caption {
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-muted);
  font-weight: 400;
}

/* ===== Divider ===== */
.divider {
  width: 40px;
  height: 1px;
  background: var(--color-border);
  margin: var(--spacing-md) 0;
}

.divider-full {
  width: 100%;
  height: 1px;
  background: var(--color-border-light);
}

/* ===== Buttons ===== */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  font-family: var(--font-sans);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.btn-primary {
  background-color: var(--color-ink);
  color: var(--color-bg);
}

.btn-primary:hover {
  background-color: var(--color-charcoal);
}

.btn-outline {
  background: transparent;
  color: var(--color-muted);
  border: 1px solid var(--color-border);
}

.btn-outline[aria-disabled='true'] {
  cursor: not-allowed;
  opacity: 0.5;
}

.btn-ghost {
  background: transparent;
  color: var(--color-charcoal);
  padding: 0;
  letter-spacing: 0.08em;
  font-size: 13px;
  text-decoration: none;
}

.btn-ghost::after {
  content: ' →';
  transition: transform var(--transition-fast);
  display: inline-block;
}

.btn-ghost:hover::after {
  transform: translateX(4px);
}

/* ===== Hero ===== */
.hero {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: var(--spacing-2xl) 0;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(ellipse at 20% 50%, rgba(184, 169, 154, 0.12) 0%, transparent 60%),
    radial-gradient(ellipse at 80% 20%, rgba(58, 63, 92, 0.06) 0%, transparent 50%);
  pointer-events: none;
}

.hero-noise {
  position: absolute;
  inset: 0;
  opacity: 0.025;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-size: 200px;
  pointer-events: none;
}

.hero-inner {
  position: relative;
  z-index: 1;
}

.hero-eyebrow {
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-muted);
  font-weight: 400;
  margin-bottom: var(--spacing-md);
}

.hero-heading {
  font-family: var(--font-serif);
  font-weight: 300;
  font-size: clamp(3.5rem, 8.5vw, 7.5rem);
  line-height: 1.08;
  letter-spacing: -0.02em;
  color: var(--color-ink);
  margin-bottom: var(--spacing-md);
  white-space: pre-line;
}

.hero-sub {
  font-size: 14px;
  color: var(--color-muted);
  letter-spacing: 0.04em;
  font-weight: 300;
  margin-bottom: var(--spacing-lg);
  max-width: 360px;
}

.hero-cta {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
}

.hero-scroll-hint {
  position: absolute;
  bottom: var(--spacing-lg);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  animation: scrollBounce 2.4s ease-in-out infinite;
}

.hero-scroll-hint span {
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-muted);
  opacity: 0.6;
}

.hero-scroll-hint::after {
  content: '';
  width: 1px;
  height: 36px;
  background: var(--color-border);
}

@keyframes scrollBounce {
  0%,
  100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(6px);
  }
}

/* ===== Fade-in animation ===== */
.fade-up {
  opacity: 0;
  transform: translateY(16px);
  animation: fadeUp 0.9s ease forwards;
}

.fade-up-delay-1 {
  animation-delay: 0.1s;
}
.fade-up-delay-2 {
  animation-delay: 0.25s;
}
.fade-up-delay-3 {
  animation-delay: 0.4s;
}
.fade-up-delay-4 {
  animation-delay: 0.55s;
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .fade-up,
  .hero-scroll-hint {
    animation: none;
    opacity: 1;
    transform: none;
  }
}

/* ===== Concept Section ===== */
.concept {
  background-color: var(--color-bg);
}

.concept-inner {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--spacing-xl);
  align-items: start;
}

.concept-label {
  padding-top: 6px;
}

.concept-body p {
  font-size: 15px;
  line-height: 1.9;
  color: var(--color-charcoal);
  font-weight: 300;
  margin-bottom: var(--spacing-sm);
}

.concept-body p + p {
  color: var(--color-muted);
}

/* ===== Use Cases Section ===== */
.use-cases {
  background-color: var(--color-surface);
}

.use-cases-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-sm);
  margin-top: var(--spacing-lg);
}

.use-case-card {
  background: var(--color-bg);
  border: 1px solid var(--color-border-light);
  padding: 0;
  overflow: hidden;
  transition:
    transform var(--transition-base),
    box-shadow var(--transition-base);
}

.use-case-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card-hover);
}

.use-case-visual {
  aspect-ratio: 3 / 4;
  position: relative;
  overflow: hidden;
}

.use-case-info {
  padding: var(--spacing-sm) var(--spacing-md) var(--spacing-md);
}

.use-case-number {
  font-size: 10px;
  letter-spacing: 0.12em;
  color: var(--color-warm-gray);
  margin-bottom: 8px;
}

.use-case-title {
  font-family: var(--font-serif);
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--color-ink);
  margin-bottom: 8px;
  line-height: 1.2;
}

.use-case-desc {
  font-size: 12px;
  color: var(--color-muted);
  line-height: 1.7;
  font-weight: 300;
}

/* Use case visual placeholders */
.uc-neck {
  background: linear-gradient(135deg, #e8ddd0 0%, #d4c9bb 40%, #c8bfb2 100%);
}
.uc-neck::after {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 20px,
    rgba(255, 255, 255, 0.08) 20px,
    rgba(255, 255, 255, 0.08) 21px
  );
}

.uc-hair {
  background: linear-gradient(160deg, #d6cec4 0%, #bfb5a8 50%, #a89e92 100%);
}
.uc-hair::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 30% 30%, rgba(255, 255, 255, 0.15) 0%, transparent 60%);
}

.uc-bag {
  background: linear-gradient(200deg, #c8c4be 0%, #b0a89e 50%, #9a9088 100%);
}
.uc-bag::after {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 24px,
    rgba(0, 0, 0, 0.04) 24px,
    rgba(0, 0, 0, 0.04) 25px
  );
}

.uc-wrist {
  background: linear-gradient(110deg, #3a3f5c 0%, #4a4e68 40%, #5a5e78 100%);
}
.uc-wrist::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 70% 70%, rgba(255, 255, 255, 0.08) 0%, transparent 60%);
}

/* ===== For Who Section ===== */
.for-who {
  background-color: var(--color-bg);
}

.for-who-list {
  list-style: none;
  margin-top: var(--spacing-lg);
  border-top: 1px solid var(--color-border-light);
}

.for-who-item {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--spacing-lg);
  align-items: start;
  padding: var(--spacing-md) 0;
  border-bottom: 1px solid var(--color-border-light);
}

.for-who-title {
  font-family: var(--font-serif);
  font-size: 1.3rem;
  font-weight: 400;
  color: var(--color-ink);
  line-height: 1.3;
}

.for-who-desc {
  font-size: 13px;
  color: var(--color-muted);
  line-height: 1.8;
  font-weight: 300;
  padding-top: 4px;
}

/* ===== Lookbook Section ===== */
.lookbook {
  background-color: var(--color-surface);
}

.lookbook-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-sm);
  margin-top: var(--spacing-lg);
}

.lookbook-card {
  position: relative;
  overflow: hidden;
  aspect-ratio: 2 / 3;
  cursor: default;
  transition: transform var(--transition-base);
}

.lookbook-card:hover {
  transform: scale(1.01);
}

.lookbook-visual {
  position: absolute;
  inset: 0;
  transition: transform var(--transition-slow);
}

.lookbook-card:hover .lookbook-visual {
  transform: scale(1.04);
}

.lb-street {
  background: linear-gradient(175deg, #2c2825 0%, #3d3530 40%, #4e4540 80%, #5a4f48 100%);
}
.lb-street::after {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 60% 40%, rgba(184, 169, 154, 0.15) 0%, transparent 55%),
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 40px,
      rgba(255, 255, 255, 0.015) 40px,
      rgba(255, 255, 255, 0.015) 41px
    );
}

.lb-daily {
  background: linear-gradient(140deg, #e8ddd0 0%, #d4c8b8 40%, #c0b4a4 100%);
}
.lb-daily::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 40% 60%, rgba(255, 255, 255, 0.2) 0%, transparent 60%);
}

.lb-quiet {
  background: linear-gradient(160deg, #e4e0da 0%, #d0c9c0 50%, #bfb8af 100%);
}
.lb-quiet::after {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    90deg,
    transparent,
    transparent 48px,
    rgba(0, 0, 0, 0.025) 48px,
    rgba(0, 0, 0, 0.025) 49px
  );
}

.lookbook-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: var(--spacing-md);
  background: linear-gradient(to top, rgba(26, 23, 20, 0.5) 0%, transparent 55%);
  z-index: 1;
}

.lb-street .lookbook-overlay {
  background: linear-gradient(to top, rgba(26, 23, 20, 0.65) 0%, transparent 50%);
}

.lookbook-tag {
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(247, 244, 239, 0.7);
  margin-bottom: 6px;
}

.lookbook-label {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 300;
  color: #f7f4ef;
  line-height: 1.2;
  margin-bottom: 6px;
}

.lb-daily .lookbook-label,
.lb-quiet .lookbook-label {
  color: var(--color-ink);
}

.lb-daily .lookbook-tag,
.lb-quiet .lookbook-tag {
  color: var(--color-muted);
}

.lb-daily .lookbook-overlay,
.lb-quiet .lookbook-overlay {
  background: linear-gradient(to top, rgba(224, 218, 210, 0.7) 0%, transparent 55%);
}

.lookbook-mood {
  font-size: 11px;
  color: rgba(247, 244, 239, 0.55);
  font-weight: 300;
}

.lb-daily .lookbook-mood,
.lb-quiet .lookbook-mood {
  color: var(--color-muted);
}

/* ===== Philosophy Section ===== */
.philosophy {
  background-color: var(--color-bg);
}

.philosophy-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-xl) var(--spacing-lg);
  margin-top: var(--spacing-xl);
}

.philosophy-item {
  padding-left: var(--spacing-md);
  border-left: 1px solid var(--color-border);
}

.philosophy-number {
  font-size: 10px;
  letter-spacing: 0.12em;
  color: var(--color-warm-gray);
  margin-bottom: var(--spacing-sm);
}

.philosophy-title {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--color-ink);
  margin-bottom: var(--spacing-xs);
  line-height: 1.3;
}

.philosophy-desc {
  font-size: 13px;
  color: var(--color-muted);
  line-height: 1.8;
  font-weight: 300;
}

/* ===== FAQ Section ===== */
.faq {
  background-color: var(--color-surface);
}

.faq-list {
  margin-top: var(--spacing-lg);
  border-top: 1px solid var(--color-border);
}

/* Radix Accordion overrides — in styles.css since no module */
[data-radix-accordion-root] {
  width: 100%;
}

[data-radix-accordion-item] {
  border-bottom: 1px solid var(--color-border);
}

[data-radix-accordion-trigger] {
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: var(--spacing-md) 0;
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 400;
  color: var(--color-charcoal);
  letter-spacing: 0.01em;
  cursor: pointer;
  transition: color var(--transition-fast);
}

[data-radix-accordion-trigger]:hover {
  color: var(--color-ink);
}

[data-radix-accordion-trigger][data-state='open'] {
  color: var(--color-ink);
}

.accordion-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  color: var(--color-warm-gray);
  transition: transform var(--transition-base);
}

[data-radix-accordion-trigger][data-state='open'] .accordion-icon {
  transform: rotate(45deg);
}

[data-radix-accordion-content] {
  overflow: hidden;
}

[data-radix-accordion-content][data-state='open'] {
  animation: slideDown 0.25s ease;
}

[data-radix-accordion-content][data-state='closed'] {
  animation: slideUp 0.22s ease;
}

@keyframes slideDown {
  from {
    height: 0;
    opacity: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    height: var(--radix-accordion-content-height);
    opacity: 1;
  }
  to {
    height: 0;
    opacity: 0;
  }
}

.accordion-content-inner {
  padding: 0 0 var(--spacing-md);
  font-size: 13px;
  color: var(--color-muted);
  line-height: 1.85;
  font-weight: 300;
  max-width: 600px;
}

/* ===== Footer / Final CTA ===== */
.footer {
  background-color: var(--color-ink);
  color: var(--color-bg);
  padding: var(--spacing-2xl) 0 var(--spacing-xl);
}

.footer-eyebrow {
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(247, 244, 239, 0.35);
  margin-bottom: var(--spacing-md);
}

.footer-heading {
  font-family: var(--font-serif);
  font-weight: 300;
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: var(--color-bg);
  line-height: 1.2;
  margin-bottom: var(--spacing-sm);
}

.footer-sub {
  font-size: 13px;
  color: rgba(247, 244, 239, 0.45);
  font-weight: 300;
  letter-spacing: 0.02em;
  margin-bottom: var(--spacing-xl);
}

.footer-links {
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
  flex-wrap: wrap;
}

.footer-link {
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(247, 244, 239, 0.5);
  transition: color var(--transition-fast);
  font-weight: 400;
}

.footer-link:hover {
  color: var(--color-bg);
}

.footer-link-disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: var(--spacing-lg);
  border-top: 1px solid rgba(247, 244, 239, 0.08);
}

.footer-brand {
  font-family: var(--font-serif);
  font-size: 1.2rem;
  font-weight: 300;
  letter-spacing: 0.08em;
  color: rgba(247, 244, 239, 0.6);
}

.footer-copy {
  font-size: 11px;
  color: rgba(247, 244, 239, 0.2);
  letter-spacing: 0.06em;
}

/* ===== Section Title Component ===== */
.section-title {
  margin-bottom: var(--spacing-lg);
}

.section-title .caption {
  margin-bottom: var(--spacing-xs);
}

.section-title .display {
  margin-bottom: 0;
}

/* ===== Responsive ===== */
@media (max-width: 900px) {
  .use-cases-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .concept-inner {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }

  .lookbook-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-xs);
  }

  .philosophy-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
}

@media (max-width: 640px) {
  section {
    padding: var(--spacing-xl) 0;
  }

  .container {
    padding: 0 var(--spacing-md);
  }

  .use-cases-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-xs);
  }

  .lookbook-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-sm);
  }

  .lookbook-card {
    aspect-ratio: 3 / 2;
  }

  .for-who-item {
    grid-template-columns: 1fr;
    gap: var(--spacing-xs);
  }

  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-sm);
  }
}

@media (max-width: 480px) {
  .use-cases-grid {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 2: TypeScript 컴파일 확인**

```bash
cd /Users/jiho/Documents/GitHub/tenugui-site && npx tsc --noEmit
```

---

### Task 3: SectionTitle 컴포넌트

**Files:**

- Create: `src/components/SectionTitle.tsx`

- [ ] **Step 1: 컴포넌트 작성**

```tsx
interface SectionTitleProps {
  eyebrow?: string
  heading: string
  headingSize?: 'xl' | 'lg' | 'md'
  italic?: boolean
  light?: boolean
}

export function SectionTitle({
  eyebrow,
  heading,
  headingSize = 'lg',
  italic = false,
  light = false,
}: SectionTitleProps) {
  return (
    <div className="section-title">
      {eyebrow && <p className="caption">{eyebrow}</p>}
      <h2
        className={[
          'display',
          `display-${headingSize}`,
          italic ? 'serif-italic' : '',
          light ? 'display-light' : '',
        ]
          .filter(Boolean)
          .join(' ')}
        style={{ whiteSpace: 'pre-line' }}
      >
        {heading}
      </h2>
    </div>
  )
}
```

---

### Task 4: FaqAccordion 컴포넌트

**Files:**

- Create: `src/components/FaqAccordion.tsx`

- [ ] **Step 1: 컴포넌트 작성**

```tsx
import * as Accordion from '@radix-ui/react-accordion'

interface FaqItem {
  id: string
  question: string
  answer: string
}

interface FaqAccordionProps {
  items: FaqItem[]
}

function PlusIcon() {
  return (
    <svg
      className="accordion-icon"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <line x1="8" y1="2" x2="8" y2="14" />
      <line x1="2" y1="8" x2="14" y2="8" />
    </svg>
  )
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <Accordion.Root type="single" collapsible className="faq-list">
      {items.map((item) => (
        <Accordion.Item key={item.id} value={item.id}>
          <Accordion.Header>
            <Accordion.Trigger>
              {item.question}
              <PlusIcon />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content>
            <div className="accordion-content-inner">{item.answer}</div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
```

---

### Task 5: App.tsx — 전체 랜딩 페이지

**Files:**

- Create: `src/App.tsx`

- [ ] **Step 1: App.tsx 전체 작성**

(아래 내용은 Task 6에서 구체적으로 작성)

---

### Task 6: 개발 서버 확인 + 최종 커밋

- [ ] **Step 1: 개발 서버 실행**

```bash
cd /Users/jiho/Documents/GitHub/tenugui-site && npm run dev
```

Expected: http://localhost:5173 에서 페이지 확인

- [ ] **Step 2: TypeScript 타입 체크**

```bash
cd /Users/jiho/Documents/GitHub/tenugui-site && npx tsc --noEmit
```

Expected: 에러 없이 종료

- [ ] **Step 3: 빌드 확인**

```bash
cd /Users/jiho/Documents/GitHub/tenugui-site && npm run build
```

Expected: dist/ 폴더 생성

- [ ] **Step 4: 초기 커밋**

```bash
cd /Users/jiho/Documents/GitHub/tenugui-site && git add -A && git commit -m "feat: initial tenugui brand landing page"
```
