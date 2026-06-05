import type { Metadata } from 'next'
import { Cormorant_Garamond, Noto_Sans_KR } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
  display: 'swap',
})

// TODO: 도메인 확정 후 .env에 NEXT_PUBLIC_SITE_URL=https://실제도메인.com 설정
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kasane.kr'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'KASANE — 스타일링 클로스 브랜드',
    template: '%s | KASANE',
  },
  description:
    '테누구이에서 출발한 스타일링 클로스 브랜드. 목, 머리, 가방, 손목 — 묶는 방식에서 시작되는 스타일.',
  keywords: ['KASANE', '카사네', '테누구이', '스타일링', '패션 액세서리', '클로스 브랜드'],
  openGraph: {
    title: 'KASANE — 스타일링 클로스 브랜드',
    description: '테누구이에서 출발한 스타일링 클로스 브랜드. 묶는 방식에서 시작되는 무드.',
    type: 'website',
    url: SITE_URL,
    siteName: 'KASANE',
    locale: 'ko_KR',
    // TODO: OG 이미지 제작 후 추가 — public/og-image.png (권장 1200×630)
    // images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'KASANE' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KASANE — 스타일링 클로스 브랜드',
    description: '테누구이에서 출발한 스타일링 클로스 브랜드. 묶는 방식에서 시작되는 무드.',
    // TODO: OG 이미지 추가 후 images 필드도 여기 동일하게 추가
  },
  robots: {
    index: true,
    follow: true,
  },
  // TODO: favicon 제작 후 app/icon.png (32×32), app/apple-icon.png (180×180) 배치
  // Next.js App Router는 app/ 디렉토리에 파일만 두면 자동으로 <link rel="icon"> 생성
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${cormorant.variable} ${notoSansKR.variable}`}>
      <body>{children}</body>
    </html>
  )
}
