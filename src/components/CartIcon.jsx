import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'

export default function CartIcon() {
  const { state } = useCart()

  return (
    <div className="cart-container">
      <Link to="/cart">
        <img src="/cartIcon.png" alt="icono cesta compra" />
      </Link>
      <span className="badge-count">{state.cartItems.length}</span>
    </div>
  )
}
