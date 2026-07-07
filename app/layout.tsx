import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kishore Textiles — Royal Attire | Premium Suiting & Shirting Fabrics in Hyderabad',
  description:
    'Kishore Textiles offers premium suiting, shirting, denim, cotton, linen and corporate uniform fabrics at wholesale and retail prices in Secunderabad, Hyderabad. Rated 4.9★ by 223+ customers.',
  keywords: [
    'textile wholesaler Hyderabad',
    'suiting fabric Secunderabad',
    'shirting fabric',
    'wholesale fabric Hyderabad',
    'Kishore Textiles',
    'premium fabrics',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'Kishore Textiles — Royal Attire',
    description:
      'Premium suiting & shirting fabrics crafted for every occasion. Wholesale & retail in Secunderabad, Hyderabad.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0f0f0f',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
