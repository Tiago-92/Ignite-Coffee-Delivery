import { useState, createContext, ReactNode } from 'react'

import { cart } from '../cart'

interface CartContextType {
  handleAddQuantity: (quantity: number) => void
  handleClearQuantity: (quantity: number) => void
  handleAddToCart: (cartId: number) => void
  quantity: number
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
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
    console.log(newCart)
  }

  return (
    <CartContext.Provider
      value={{
        handleAddQuantity,
        handleClearQuantity,
        handleAddToCart,
        quantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
