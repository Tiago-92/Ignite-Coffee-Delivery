/* eslint-disable no-undef */
import { useState, createContext, ReactNode, useEffect } from 'react'

import { produce } from 'immer'

export interface Coffee {
  id: number
  img: string
  tag: string[]
  title: string
  description: string
  price: number
  quantity: number
}

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  totalByItem: number
  totalIntemsInCart: number
  handleAddCoffeeToCart: (coffee: CartItem) => void
  handleAddQuantityById: (
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) => void
  removeCartItem: (cartItemId: number) => void
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

  const totalIntemsInCart = cartItems.length
  console.log(totalIntemsInCart)

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

  function handleAddQuantityById(
    cartItemId: number,
    type: 'increase' | 'decrease',
  ) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (coffeeExistsInCart >= 0) {
        const item = draft[coffeeExistsInCart]
        draft[coffeeExistsInCart].quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1
      }
    })

    setCartItems(newCart)
  }

  function removeCartItem(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (coffeeExistsInCart >= 0) {
        draft.splice(coffeeExistsInCart, 1)
      }
    })

    setCartItems(newCart)
  }

  const totalByItem = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0)

  console.log(cartItems)

  useEffect(() => {
    localStorage.setItem(COFFEE_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        handleAddCoffeeToCart,
        handleAddQuantityById,
        removeCartItem,
        totalByItem,
        totalIntemsInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
