'use client'
import s from './contact.module.scss'
import Image from 'next/image'
import gsap from 'gsap'
import { useRef } from 'react'
import { useGSAP } from '@/lib/useGSAP'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { Arrow } from '@/icon/arrow'
import CircleContact from '@/component/ui/circleContact/circleContact'

export default function Contact() {
  const tl = useRef<GSAPTimeline>(null!)
  const text = useRef<HTMLDivElement>(null!)

  useGSAP(() => {})

  return (
    <section className={s.section}>
      {/* ////////////////////////////////////////////////////////////////////////////////// */}

      <div className={s.contact}>
        <div className={s.form}>
          <h1>
            Let&apos;s start a <br />
            project together
          </h1>
          <form className={s.formContainer}>
            {DATA.map((form, i) => (
              <div className={s.row} key={i}>
                <label htmlFor={form.for}>{form.label}</label>
                <input type='text' name={form.name} placeholder={form.placeholder}></input>
              </div>
            ))}
            <div className={s.line}>
              <hr />
              <CircleContact />
            </div>
          </form>
        </div>

        {/* ////////////////////////////////////////////////////////////////////////////////// */}

        <div className={s.profile}>
          <div>
            <div className={s.image}>
              <Image src='/athhar.jpg' alt='Athhar' width={100} height={100} />
            </div>
            <div className={s.arrow}>
              <Arrow />
            </div>
          </div>
          <div className={s.links}>
            <h1>CONTACT DETAILS</h1>
            <a>fauzan.athhar@gmail.com</a>
            <a>+6281284256773</a>
          </div>
          <div>
            <h1>BUSINESS DETAILS</h1>
            <p>Noneofyabusiness</p>
            <p>Location: Guess Bitch</p>
          </div>
          <div className={s.links}>
            <h1>SOCIALS</h1>
            <a>Instagram</a>
            <a>Linkedin</a>
          </div>
        </div>
      </div>

      {/* ////////////////////////////////////////////////////////////////////////////////// */}
    </section>
  )
}

const DATA = [
  {
    for: 'name',
    label: "What's your name?",
    name: 'name',
    placeholder: 'John Doe *',
  },
  {
    for: 'email',
    label: "What's your email?",
    name: 'email',
    placeholder: 'john@doe.com',
  },
  {
    for: 'organization',
    label: "What's the name of your organization?",
    name: 'organization',
    placeholder: 'John & Doe',
  },
  {
    for: 'service',
    label: 'What services are you looking for?',
    name: 'service',
    placeholder: 'Prostitutes, Drugs...',
  },
  {
    for: 'message',
    label: 'Wanna talk shit?',
    name: 'message',
    placeholder: 'say it here',
  },
]
