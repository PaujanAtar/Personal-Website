'use client'
import { usePathname, useRouter } from 'next/navigation'
import { animatePageOut } from '@/animation/transition'
import s from './routes.module.scss'

interface Props {
  href: string
  label: string
}

const RoutesLink = ({ href, label }: Props) => {
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router)
    }
  }

  const buttonClass = pathname === '/about' ? s.buttonBlack : s.buttonWhite

  return (
    <button className={buttonClass} onClick={handleClick}>
      {label}
    </button>
  )
}

export default RoutesLink
