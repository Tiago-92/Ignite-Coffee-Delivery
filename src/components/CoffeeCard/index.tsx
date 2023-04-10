import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { ItemsInCart } from '../ItemsInCart'
import { CoffeCardContainer } from './styles'

export function CoffeeCard() {
  const { cartItems, totalByItem } = useContext(CartContext)

  const delivery = 3.5
  const totalValueWithDelivery = totalByItem + delivery

  return (
    <CoffeCardContainer>
      {cartItems.map((cart) => (
        <ItemsInCart key={cart.id} coffee={cart} />
      ))}
      <div className="itens">
        <p>Total de itens</p>
        <span>R$ {totalByItem}</span>
      </div>
      <div className="delivery">
        <p>Entrega</p>
        <span>R$ 3,50</span>
      </div>
      <div className="total">
        <p>Total</p>
        <span>R$ {totalValueWithDelivery}</span>
      </div>

      <button type="submit" className="confirm">CONFIRMAR PEDIDO</button>
    </CoffeCardContainer>
  )
}
