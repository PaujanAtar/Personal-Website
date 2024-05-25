'use client'
import Image from 'next/image'
import gsap from 'gsap'
import { useRef } from 'react'
import { useGSAP } from '@/lib/useGSAP'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import s from './work.module.scss'
import Portfolio from '@/component/ui/portfolio/portfolio'

export default function Contact() {
  const tl = useRef<GSAPTimeline>(null!)
  const text = useRef<HTMLDivElement>(null!)

  useGSAP(() => {})

  return (
    <section className={s.section}>
      <Portfolio />
    </section>
  )
}
