'use client'
import Portfolio from '@/component/ui/portfolio/portfolio'
import Hero from '../component/homepage/hero/hero'
import Tapes from '../component/homepage/tapes/tapes'

export default function Home() {
  return (
    <main>
      <Hero />
      <Portfolio />
      <Tapes />
    </main>
  )
}
