'use client'
import { useEffect } from 'react'
import { useGSAP } from '@/lib/useGSAP'
import gsap from 'gsap'
import ScrollSmoother from 'gsap/dist/ScrollSmoother'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin)

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  useGSAP(() => {
    const smoother = ScrollSmoother.create({
      smooth: 2,
      smoothTouch: 0.1,
      effects: true,
    })

    // Scroll to top on page refresh
    smoother.scrollTop(0)

    // Ensure ScrollTrigger is refreshed
    ScrollTrigger.refresh()

    gsap.to(window, {
      scrollTo: { y: 0 },
      duration: 0,
    })
  })

  return (
    <div id='smooth-wrapper'>
      <div id='smooth-content'>{children}</div>
    </div>
  )
}
