'use client'
import s from './profile.module.scss'
import Image from 'next/image'
import gsap from 'gsap'
import { useRef } from 'react'
import { useGSAP } from '@/lib/useGSAP'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import CircleAbout from '@/component/ui/circleAbout/circleAbout'
import { Star } from '@/icon/star'
import { ArrowDark } from '@/icon/arrowDark'

const Profile = () => {
  const tl = useRef<GSAPTimeline>(null!)
  const image = useRef<HTMLDivElement>(null!)
  const section = useRef<HTMLDivElement>(null!)
  const text = useRef<HTMLDivElement>(null!)
  const arrow = useRef<HTMLImageElement>(null!)

  useGSAP(() => {
    //Color Change
    gsap.fromTo(
      section.current,
      { backgroundColor: '#ffffff' },
      {
        backgroundColor: '#E9EAEB',
        scrollTrigger: {
          trigger: section.current,
          start: 'top top',
          end: '80% bottom',
          scrub: true,
        },
      },
    )

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

    //Text
    gsap.to(text.current, {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: text.current,
        start: 'top 80%',
        end: 'bottom top',
        scrub: 0,
      },
    })

    //Rotate
    gsap.fromTo(
      arrow.current,
      { rotation: -45 },
      {
        rotation: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: arrow.current,
          start: 'top 80%',
          end: 'bottom top',
          scrub: true,
        },
      },
    )
  })

  return (
    <section className={s.section} ref={section}>
      <div className={s.header}>
        <h1>
          Helping brands thrive <br />
          in the digital world
        </h1>
        <div className={s.line}>
          <hr />
          <CircleAbout />
        </div>
      </div>

      {/* ///////////////////////////////////////////////// */}

      <div className={s.profile}>
        <div className={s.profileText} ref={text}>
          <div className={s.arrow} ref={arrow}>
            <ArrowDark />
          </div>
          <p>
            I help companies from all over the world to talk shit behind everyone&apos;s back. With each project, I push
            my sarcasm to new horizons, always putting quality first.
            <br />
            <br />
            Always judging...
          </p>
        </div>
        <div className={s.profileImage}>
          <div ref={image}>
            <Image src='/about1.jpg' alt='Me and the OG Gang' width={600} height={800} />
          </div>
        </div>
      </div>

      {/* ///////////////////////////////////////////////// */}

      <div className={s.service}>
        <h2>I can help you with...</h2>
        <div className={s.services}>
          <div className={s.columns}>
            <h6>01</h6>
            <hr />
            <h3>Condescend</h3>
            <p>
              With a solid track record in designing websites, I deliver strong and user-friendly digital designs.
              (Since 2024 only in combination with development)
            </p>
          </div>
          <div className={s.columns}>
            <h6>02</h6>
            <hr />
            <h3>Degrade</h3>
            <p>
              With a solid track record in designing websites, I deliver strong and user-friendly digital designs.
              (Since 2024 only in combination with development)
            </p>
          </div>
          <div className={s.columns}>
            <h6>01</h6>
            <hr />
            <h3>
              <span>
                <Star />
              </span>
              Many More!
            </h3>
            <p>
              With a solid track record in designing websites, I deliver strong and user-friendly digital designs.
              (Since 2024 only in combination with development)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile
