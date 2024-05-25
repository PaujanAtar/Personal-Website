'use client'
import { gsap, Elastic } from 'gsap'
import { useRef } from 'react'
import { useGSAP } from '@/lib/useGSAP'
import s from './circleFooter.module.scss'

const CircleFooter = () => {
  const wrapperRef = useRef<HTMLDivElement>(null!)

  useGSAP(() => {
    const wrapper = wrapperRef.current

    gsap.from(wrapper, {
      x: '-20%',
      scrollTrigger: {
        trigger: wrapper,
        start: '-3s0% bottom',
        end: 'center center',
        scrub: 1,
      },
    })

    function handleMouseLeave() {
      gsap.to(`.${s.buttonCircle}, .${s.buttonText}`, {
        duration: 2,
        scale: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut.config(0.8, 0.3),
      })
    }

    function handleMouseMove(e: any) {
      parallaxIt(e, `.${s.buttonCircle}`, 75)
      parallaxIt(e, `.${s.buttonText}`, 50)
    }

    function parallaxIt(e: MouseEvent, target: string, movement: number) {
      const boundingRect = wrapper.getBoundingClientRect()
      const relX = e.clientX - boundingRect.left
      const relY = e.clientY - boundingRect.top

      gsap.to(target, {
        duration: 0.8,
        x: ((relX - boundingRect.width / 2) / boundingRect.width) * movement,
        y: ((relY - boundingRect.height / 2) / boundingRect.height) * movement,
      })
    }

    wrapper.addEventListener('mouseleave', handleMouseLeave)
    wrapper.addEventListener('mousemove', handleMouseMove)
  })

  return (
    <a href='/contact'>
      <div className={s.buttonCircle} ref={wrapperRef}>
        <span className={s.buttonText}>Get in touch</span>
      </div>
    </a>
  )
}

export default CircleFooter
