import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import '../styles/global.scss'
import { SmoothScroll } from '@/animation/smoothScroll'
import Footer from '../component/footer/footer'
import Navbar from '@/component/navbar/navbar'

const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway', display: 'swap' })

export const metadata: Metadata = {
  title: 'M. Fauzan Athhar',
  description: 'This is my fucking personal website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={`${raleway.variable}`} lang='en'>
      <link rel='icon' href='/favicon.svg' sizes='any' />
      <body suppressHydrationWarning>
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
