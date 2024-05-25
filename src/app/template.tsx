'use client'

import { animatePageIn } from '@/animation/transition'
import { useEffect } from 'react'
import s from '@/styles/template.module.scss'

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn()
  }, [])

  return (
    <div>
      <div id='banner1' className={`${s.banner} ${s['banner1']}`} />
      <div id='banner2' className={`${s.banner} ${s['banner2']}`} />
      <div id='banner3' className={`${s.banner} ${s['banner3']}`} />
      <div id='banner4' className={`${s.banner} ${s['banner4']}`} />
      {children}
    </div>
  )
}
