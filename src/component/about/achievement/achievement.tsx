'use client'
import s from './achievement.module.scss'
import Image from 'next/image'
import gsap from 'gsap'
import { useRef } from 'react'
import { useGSAP } from '@/lib/useGSAP'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

const Achievement = () => {
  const tl = useRef<GSAPTimeline>(null!)
  const image = useRef<HTMLDivElement>(null!)
  const toilet = useRef<HTMLImageElement>(null!)

  useGSAP(() => {
    //Rotate
    gsap.to(toilet.current, {
      rotation: 180,
      ease: 'none',
      scrollTrigger: {
        trigger: toilet.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    //Parallax
    gsap.to(image.current, {
      yPercent: 40,
      ease: 'none',
      scrollTrigger: {
        trigger: image.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0,
      },
    })
  })

  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.image}>
          <div ref={image}>
            <Image src='/about2.jpg' alt='When everything was fun' width={400} height={500} />
          </div>
        </div>
        <div className={s.text}>
          <div>
            <Image src='/toilet.png' alt='Fuck you too' width={50} height={50} ref={toilet} />
          </div>
          <h2>
            Douchebag of <br /> the Year 2021
          </h2>
          <p>
            I am a proud awardee of the DotY, where I judge the worst people in the world using my expertise as an
            asshole and a bitch. Self entitled assholes have my full attention and get me thrilled with every details.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Achievement
