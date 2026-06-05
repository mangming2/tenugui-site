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

export const metadata: Metadata = {
  title: 'KASANE',
  description: 'KASANE — 테누구이에서 출발한 스타일링 클로스 브랜드',
  openGraph: {
    title: 'KASANE',
    description: '테누구이에서 출발한 스타일링 클로스 브랜드',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${cormorant.variable} ${notoSansKR.variable}`}>
      <body>{children}</body>
    </html>
  )
}
