/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react'

import { CardContainer } from './styles'

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { BsCartFill } from 'react-icons/bs'

import { cart } from '../../cart'

interface CardProps {
  data: {
    id: number
    img: string
    tag: []
    title: string
    description: string
    price: number
    quantity: number
  }
}

export function Card({ data }: CardProps) {
  const [carts, setCarts] = useState(cart)
  const [quantity, setQuantity] = useState(0)

  function handleAddQuantity() {
    setQuantity(quantity + 1)
  }

  function handleClearQuantity() {
    setQuantity(quantity - 1)
  }

  function handleAddToCart(cartId: number) {
    const newCart = carts.map((cart) => {
      if (cart.id === cartId) {
        return {
          ...cart,
          quantity,
        }
      }
      return cart
    })
    setCarts(newCart)
  }

  return (
    <CardContainer>
      <img src={data.img} />

      <span className="tag">{data.tag}</span>
      <p className="coffee-name">{data.title}</p>
      <p className="coffee-description">{data.description}</p>

      <div className="price-and-quantity">
        <div className="buy">R$ {data.price}</div>

        <span>
          <button onClick={handleClearQuantity}>
            <AiOutlineMinus color="#8047f8" />
          </button>
          {quantity}
          <button onClick={handleAddQuantity}>
            <AiOutlinePlus color="#8047f8" />
          </button>
        </span>

        <button className="add-cart" onClick={() => handleAddToCart(data.id)}>
          <BsCartFill size={19} />
        </button>
      </div>
    </CardContainer>
  )
}
