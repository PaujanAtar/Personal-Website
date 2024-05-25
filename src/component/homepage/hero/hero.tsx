'use client'
import s from '../hero/hero.module.scss'
import Image from 'next/image'
import gsap from 'gsap'
import { useRef } from 'react'
import { useGSAP } from '@/lib/useGSAP'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { Arrow } from '@/icon/arrow'
import CircleHome from '@/component/ui/circleHome/circleHome'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const tl = useRef<GSAPTimeline>(null!)
  const text = useRef<HTMLDivElement>(null!)
  const image = useRef<HTMLDivElement>(null!)
  const portfolio = useRef<HTMLDivElement>(null!)
  const line = useRef<HTMLDivElement>(null!)

  useGSAP(() => {
    // Text Animation
    gsap.to(text.current, {
      x: '-5%',
      ease: 'none',
      scrollTrigger: {
        trigger: text.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    })

    const rows = document.querySelectorAll(`.${s.runningText}`)
    rows.forEach(function (e, i) {
      const duration = 100 * (i + 1)
      tl.current = gsap.timeline({
        invalidateOnRefresh: true,
      })
      tl.current.fromTo(
        e,
        {
          xPercent: 0,
        },
        {
          ease: 'none',
          duration: duration,
          xPercent: () => {
            const row_width = e.getBoundingClientRect().width
            const row_item_width = e.children[0].getBoundingClientRect().width
            const initial_offset = ((2 * row_item_width) / row_width) * 100 * -1
            return initial_offset
          },
          repeat: -1,
        },
      )
    })

    // Parallax
    gsap.to(image.current, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: image.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    // Portfolio Animation
    gsap.fromTo(
      portfolio.current,
      { y: '50%', opacity: 0 },
      {
        y: '0%',
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: portfolio.current,
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: 1,
        },
      },
    )
    gsap.fromTo(
      line.current,
      { opacity: 0 },
      {
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: portfolio.current,
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: 1,
        },
      },
    )
  })

  return (
    <section className={s.section}>
      <div className={s.hero}>
        {/* ////////////////////////////////////////////////////////////////////////////////// */}
        <div className={s.image}>
          <div ref={image}>
            <Image src='/athhar.png' alt='Athhar' width={1000} height={1000} />
          </div>
        </div>
        {/* ////////////////////////////////////////////////////////////////////////////////// */}
        <div className={s.runningText} ref={text}>
          <p>-Mochamad Fauzan Athhar</p>
          <p>-Mochamad Fauzan Athhar</p>
          <p>-Mochamad Fauzan Athhar</p>
          <p>-Mochamad Fauzan Athhar</p>
          <p>-Mochamad Fauzan Athhar</p>
          <p>-Mochamad Fauzan Athhar</p>
          <p>-Mochamad Fauzan Athhar</p>
          <p>-Mochamad Fauzan Athhar</p>
          <p>-Mochamad Fauzan Athhar</p>
        </div>
        {/* ////////////////////////////////////////////////////////////////////////////////// */}
        <div className={s.title}>
          <Arrow />
          <p>
            Procrastinator <br /> Judger & Shit Talker
          </p>
        </div>
        {/* ////////////////////////////////////////////////////////////////////////////////// */}
        <div className={s.globeContainer}>
          <div className={s.globeAnimation}>
            <Image src='/globe.gif' alt='Globe' width={100} height={100} />
          </div>
          <div className={s.globeText}>
            <p>
              Located <br /> in wherever
              <br /> the fuck you want{' '}
            </p>
          </div>
        </div>
        {/* ////////////////////////////////////////////////////////////////////////////////// */}
      </div>
      <div className={s.portfolio} ref={portfolio}>
        <div className={s.paragraph1}>
          Helping people to be shitty. <br />
          Together we will set the new status quo. No bullshit, always on the edge of the cliff
        </div>
        <div className={s.paragraph2}>
          The combination of my passion for hatred, dread & despair positions me in a unique place in the web design
          world.
        </div>
      </div>
      <div className={s.line} ref={line}>
        <hr />
        <CircleHome />
      </div>
    </section>
  )
}

export default Hero
