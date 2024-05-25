'use client'
import s from '../tapes/tapes.module.scss'
import gsap from 'gsap'
import { useRef } from 'react'
import { useGSAP } from '@/lib/useGSAP'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

const Tapes = () => {
  const tl = useRef<GSAPTimeline>(null!)
  const tape1 = useRef<HTMLDivElement>(null!)
  const tape2 = useRef<HTMLDivElement>(null!)

  useGSAP(() => {
    //Tape Animation
    gsap.to(tape1.current, {
      x: '-5%',
      ease: 'none',
      scrollTrigger: {
        trigger: tape1.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    })
    gsap.to(tape2.current, {
      x: '5%',
      ease: 'none',
      scrollTrigger: {
        trigger: tape2.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    })
  })

  return (
    <section className={s.section}>
      <div className={s.tape}>
        {/* ////////////////////////////////////////////////////////////////////////////////// */}
        <div className={s.tapeContainer1}>
          <div className={s.tape1} ref={tape1}>
            {DATA.map((video, i) => (
              <div className={s.video} key={i}>
                <video autoPlay muted loop>
                  <source src={video} type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        </div>
        {/* ////////////////////////////////////////////////////////////////////////////////// */}
        <div className={s.tapeContainer2}>
          <div className={s.tape2} ref={tape2}>
            {DATA.map((video, i) => (
              <div className={s.video} key={i}>
                <video autoPlay muted loop>
                  <source src={video} type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        </div>
        {/* ////////////////////////////////////////////////////////////////////////////////// */}
      </div>
    </section>
  )
}

export default Tapes

const DATA = [
  '/video1.mp4',
  '/video2.mp4',
  '/video3.mp4',
  '/video4.mp4',
  '/video1.mp4',
  '/video2.mp4',
  '/video3.mp4',
  '/video4.mp4',
  '/video1.mp4',
  '/video2.mp4',
  '/video3.mp4',
  '/video4.mp4',
]
