import RoutesLink from '@/utils/routes'
import s from './navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={s.section}>
      <h1>
        <RoutesLink href='/' label='Mochamad Fauzan Athhar' />
      </h1>
      <div className={s.page}>
        <RoutesLink href='/about' label='About' />
        <RoutesLink href='/contact' label='Contact' />
      </div>
    </nav>
  )
}

export default Navbar
