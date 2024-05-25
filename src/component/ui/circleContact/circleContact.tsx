'use client'
import { gsap, Elastic } from 'gsap'
import { useRef } from 'react'
import { useGSAP } from '@/lib/useGSAP'
import s from './circleContact.module.scss'

const CircleContact = () => {
  const wrapperRef = useRef<HTMLButtonElement>(null!)

  useGSAP(() => {
    const wrapper = wrapperRef.current

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
    <button typeof='submit' className={s.buttonCircle} ref={wrapperRef}>
      <span className={s.buttonText}>Button</span>
    </button>
  )
}

export default CircleContact
