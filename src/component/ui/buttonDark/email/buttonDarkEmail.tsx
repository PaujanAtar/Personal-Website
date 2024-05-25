'use client'
import { gsap, Elastic } from 'gsap'
import { useRef } from 'react'
import { useGSAP } from '@/lib/useGSAP'
import s from './buttonDarkEmail.module.scss'

const ButtonDarkEmail = () => {
  const wrapperRef = useRef<HTMLAnchorElement>(null!)

  useGSAP(() => {
    const wrapper = wrapperRef.current

    function handleMouseLeave() {
      gsap.to(`.${s.buttonEmail}, .${s.buttonText}`, {
        duration: 2,
        scale: 1,
        x: 0,
        y: 0,
        ease: Elastic.easeOut.config(0.8, 0.3),
      })
    }

    function handleMouseMove(e: any) {
      parallaxIt(e, `.${s.buttonEmail}`, 10)
      parallaxIt(e, `.${s.buttonText}`, 5)
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
    <a className={s.buttonEmail} href='mailto:fauzan.athhar@gmail.com' ref={wrapperRef}>
      <span className={s.buttonText}>fauzan.athhar@gmail.com</span>
    </a>
  )
}

export default ButtonDarkEmail
