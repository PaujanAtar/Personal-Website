import ScrollSmoother from 'gsap/dist/ScrollSmoother'
import gsap from 'gsap'

declare global {
  interface Window {
    scrollSmoother: ScrollSmoother
    preload: GSAP.core.Timeline
  }
}
