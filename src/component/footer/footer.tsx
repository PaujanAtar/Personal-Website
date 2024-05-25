'use client'
import s from '../footer/footer.module.scss'
import Image from 'next/image'
import gsap from 'gsap'
import { useRef } from 'react'
import { useGSAP } from '@/lib/useGSAP'
import { usePathname } from 'next/navigation'
import { Arrow } from '@/icon/arrow'
import CircleFooter from '../ui/circleFooter/circleFooter'
import ButtonDarkEmail from '../ui/buttonDark/email/buttonDarkEmail'
import ButtonDarkPhone from '../ui/buttonDark/phone/buttonDarkPhone'

const Footer = () => {
  const tl = useRef<GSAPTimeline>(null)
  const button = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useGSAP(() => {})

  const sectionClass = pathname === '/contact' ? s.sectionNone : s.section

  return (
    <section className={sectionClass}>
      {/* ////////////////////////////////////////////////////////////////////////////////// */}
      <div className={s.content}>
        <div className={s.contentContainer}>
          <div className={s.text}>
            <span>
              <div className={s.image}>
                <Image src='/athhar.jpg' alt='Athhar' width={100} height={100} />
              </div>
              <p>Let&apos;s work</p>
            </span>
            <span>together</span>
          </div>
          <div className={s.arrow}>
            <Arrow />
          </div>
        </div>
        <div className={s.line}>
          <hr />
          <CircleFooter />
        </div>
        <div className={s.button}>
          <ButtonDarkEmail />
          <ButtonDarkPhone />
        </div>
      </div>
      {/* ////////////////////////////////////////////////////////////////////////////////// */}
      <div></div>
    </section>
  )
}

export default Footer
