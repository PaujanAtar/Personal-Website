'use client'
import { gsap, Elastic } from 'gsap'
import Image from 'next/image'
import { useRef } from 'react'
import { useGSAP } from '@/lib/useGSAP'
import s from './circleAbout.module.scss'

const CircleAbout = () => {
  const wrapperRef = useRef<HTMLDivElement>(null!)

  useGSAP(() => {
    /*     const wrapper = wrapperRef.current

    gsap.from(wrapper, {
      yPercent: 70,
      ease: 'none',
      scrollTrigger: {
        trigger: wrapper,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    function handleMouseLeave() {
      gsap.to(`.${s.buttonCircle}, .${s.buttonText}`, {
        duration: 2,
        scale: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut.config(2, 0.3),
      })
    }

    function handleMouseMove(e: any) {
      parallaxIt(e, `.${s.buttonCircle}`, 75)
      parallaxIt(e, `.${s.buttonText}`, 50)
    }

    function parallaxIt(e: any, target: any, movement: any) {
      const boundingRect = wrapper.getBoundingClientRect()
      const relX = e.pageX - boundingRect.left
      const relY = e.pageY - boundingRect.top

      console.log(boundingRect)

      gsap.to(target, {
        duration: 0.8,
        x: ((relX - boundingRect.width / 2) / boundingRect.width) * movement,
        y: ((relY - boundingRect.height / 2) / boundingRect.width) * movement,
      })
    }

    wrapper.addEventListener('mouseleave', handleMouseLeave)
    wrapper.addEventListener('mousemove', handleMouseMove) */
  })

  return (
    <div className={s.buttonCircle} ref={wrapperRef}>
      <div className={s.globeAnimation}>
        <Image src='/globe.gif' alt='Globe' width={100} height={100} />
      </div>
    </div>
  )
}

export default CircleAbout
