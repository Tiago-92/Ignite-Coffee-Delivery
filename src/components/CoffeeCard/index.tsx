import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { ItemsInCart } from '../ItemsInCart'
import { CoffeCardContainer } from './styles'

export function CoffeeCard() {
  const { cartItems } = useContext(CartContext)
  return (
    <CoffeCardContainer>
      {cartItems.map((cart) => (
        <ItemsInCart key={cart.id} coffee={cart} />
      ))}
      <div className="itens">
        <p>Total de itens</p>
        <span>R$ 29,70</span>
      </div>
      <div className="delivery">
        <p>Entrega</p>
        <span>R$ 3,50</span>
      </div>
      <div className="total">
        <p>Total</p>
        <span>R$ 32.20</span>
      </div>

      <button className="confirm">CONFIRMAR PEDIDO</button>
    </CoffeCardContainer>
  )
}
