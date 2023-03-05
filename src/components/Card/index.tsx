/* eslint-disable jsx-a11y/alt-text */
import { useContext } from 'react'

import { CardContainer } from './styles'

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { BsCartFill } from 'react-icons/bs'

import { CartContext } from '../../contexts/CartContext'

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
  const { handleAddQuantity, handleClearQuantity, handleAddToCart, quantity } =
    useContext(CartContext)
  return (
    <CardContainer>
      <img src={data.img} />

      <span className="tag">{data.tag}</span>
      <p className="coffee-name">{data.title}</p>
      <p className="coffee-description">{data.description}</p>

      <div className="price-and-quantity">
        <div className="buy">R$ {data.price}</div>

        <span>
          <button onClick={() => handleClearQuantity(data.quantity)}>
            <AiOutlineMinus color="#8047f8" />
          </button>
          {quantity}
          <button onClick={() => handleAddQuantity(data.quantity)}>
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
