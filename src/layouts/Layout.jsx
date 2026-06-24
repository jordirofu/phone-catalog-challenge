import { Outlet } from 'react-router-dom'
import CartIcon from '../components/CartIcon'
import Logo from '../components/Logo'

export default function Layout() {
  return (
    <>
      <header>
        <Logo />
        <CartIcon />
      </header>
      <main className="main-content">
        <Outlet />
      </main>
    </>
  )
}
