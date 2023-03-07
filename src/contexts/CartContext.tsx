/* eslint-disable no-undef */
import { useState, createContext, ReactNode, useEffect } from 'react'

import { Coffee } from '../components/Card'

import { produce } from 'immer'

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  handleAddCoffeeToCart: (coffee: CartItem) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

const COFFEE_STORAGE_KEY = 'coffeeDelivery:cartItens'

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItens = localStorage.getItem(COFFEE_STORAGE_KEY)
    if (storedCartItens) {
      return JSON.parse(storedCartItens)
    }
    return []
  })

  function handleAddCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistisInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id,
    )

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistisInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyExistisInCart].quantity += coffee.quantity
      }
    })
    setCartItems(newCart)
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        handleAddCoffeeToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
