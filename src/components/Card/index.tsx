/* eslint-disable jsx-a11y/alt-text */
import { CardContainer } from './styles'

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { BsCartFill } from 'react-icons/bs'
import { useContext, useState } from 'react'
import { CartContext, CartItem } from '../../contexts/CartContext'

export interface Coffee {
  id: number
  img: string
  tag: string[]
  title: string
  description: string
  price: number
  quantity: number
}

interface CoffeeProps {
  coffee: Coffee
}

export function Card({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1)
  const { handleAddCoffeeToCart } = useContext(CartContext)

  function handleAddToCart(coffee: CartItem) {
    const coffeToAdd = {
      ...coffee,
      quantity,
    }
    handleAddCoffeeToCart(coffeToAdd)
  }

  function addQuantity() {
    setQuantity(quantity + 1)
  }

  function removeQuantity() {
    setQuantity(quantity - 1)
  }

  return (
    <CardContainer>
      <img src={coffee.img} />

      <span className="tag">{coffee.tag}</span>
      <p className="coffee-name">{coffee.title}</p>
      <p className="coffee-description">{coffee.description}</p>

      <div className="price-and-quantity">
        <div className="buy">R$ {coffee.price}</div>

        <span>
          <button disabled={coffee.quantity <= 1} onClick={removeQuantity}>
            <AiOutlineMinus color="#8047f8" />
          </button>
          {quantity}
          <button onClick={addQuantity}>
            <AiOutlinePlus color="#8047f8" />
          </button>
        </span>

        <button className="add-cart" onClick={() => handleAddToCart(coffee)}>
          <BsCartFill size={19} />
        </button>
      </div>
    </CardContainer>
  )
}
