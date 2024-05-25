'use client'
import s from './portfolio.module.scss'
import Image from 'next/image'
import gsap from 'gsap'
import { useRef, useEffect } from 'react'
import { useGSAP } from '@/lib/useGSAP'

const Portfolio = () => {
  const slidePicWorksRef = useRef<HTMLDivElement>(null!)
  const slidePicsWorksRef = useRef<HTMLDivElement>(null!)
  const itemsWorksRef = useRef<HTMLDivElement>(null!)

  useGSAP(() => {
    const slidePicWorks = slidePicWorksRef.current
    const slidePicsWorks = slidePicsWorksRef.current
    const itemsWorks = itemsWorksRef.current

    gsap.set(slidePicWorks, { autoAlpha: 0 })
    const elementsWorks = document.querySelectorAll(`.${s.itemWork}`)
    const images = slidePicsWorks.querySelectorAll('img')
    let imageHeight = 0
    const checkImagesLoaded = () => {
      if (Array.from(images).every((img) => img.complete)) {
        imageHeight = images[0].offsetHeight
        setupEventListeners()
      } else {
        setTimeout(checkImagesLoaded, 50)
      }
    }

    const setupEventListeners = () => {
      elementsWorks.forEach((element: Element, index: number) => {
        element.addEventListener('mouseenter', function () {
          gsap.to(slidePicsWorks, {
            marginTop: `-${imageHeight * index}px`,
            duration: 0.2,
            ease: 'power1',
          })
        })

        element.addEventListener('mouseleave', function () {
          gsap.to(element, { color: 'initial', duration: 0.2, ease: 'power1' })
        })
      })

      window.addEventListener('mousemove', function (e: MouseEvent) {
        const scrollY = window.scrollY
        const scrollX = window.scrollX

        gsap.to(slidePicWorks, {
          top: `${e.clientY + scrollY}px`,
          left: `${e.clientX + scrollX}px`,
          xPercent: -50,
          yPercent: -50,
          duration: 0.1,
          ease: 'power1',
        })
      })

      if (itemsWorks) {
        itemsWorks.addEventListener('mouseenter', function () {
          gsap.to(slidePicWorks, {
            autoAlpha: 1,
            duration: 0.2,
            ease: 'power1',
          })
        })

        itemsWorks.addEventListener('mouseleave', function () {
          gsap.to(slidePicWorks, {
            autoAlpha: 0,
            duration: 0.2,
            ease: 'power1',
          })
        })
      }
    }

    checkImagesLoaded()
  })

  return (
    <section className={s.works}>
      <div className={s.containerWorks}>
        <div className={s.contentWorks}>
          <div className={s.headerWorks}>
            <h3>Recent Work</h3>
          </div>

          <div className={s.galleryWork} ref={slidePicWorksRef}>
            <div className={s.workImages} ref={slidePicsWorksRef}>
              {DATA.map((project) => (
                <Image
                  key={project.project}
                  className={s.workImage}
                  src={project.image}
                  alt={project.project}
                  width={1000}
                  height={1000}
                />
              ))}
            </div>
          </div>

          <div className={s.itemsWorks} ref={itemsWorksRef}>
            <div className={s.gridWorks}>
              {DATA.map((project) => (
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={s.itemWork}
                  key={project.project}
                >
                  <div className={s.title}>
                    <h4>{project.project}</h4>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio

const DATA = [
  {
    project: 'Studio Asa',
    image: '/studioasa.png',
    link: 'https://studio-asik.vercel.app/',
  },
  {
    project: 'StudyZone',
    image: '/studyzone.png',
    link: 'https://study-zone-nine.vercel.app/',
  },
  {
    project: 'Smart Backyard',
    image: '/backyard.png',
    link: '',
  },
]
