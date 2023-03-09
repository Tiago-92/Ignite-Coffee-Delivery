import { Plus, Minus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { Coffee } from '../Card'
import { ItemsContainer } from './styles'

interface ItemsProps {
  coffee: Coffee
}

export function ItemsInCart({ coffee }: ItemsProps) {
  const { handleAddQuantityById, removeCartItem } = useContext(CartContext)

  const totalValueByItem = coffee.quantity * coffee.price

  function handleIncrease() {
    handleAddQuantityById(coffee.id, 'increase')
  }

  function handleDecrease() {
    handleAddQuantityById(coffee.id, 'decrease')
  }

  function handleRemove() {
    removeCartItem(coffee.id)
  }

  return (
    <ItemsContainer>
      <img src={coffee.img} alt="" />
      <div className="coffee-details">
        <div className="coffee-type">
          <p>{coffee.title}</p>
          <span>{totalValueByItem}</span>
        </div>

        <div className="quantity">
          <span>
            <button disabled={coffee.quantity <= 1} onClick={handleDecrease}>
              <Minus color="#8047f8" />
            </button>
            {coffee.quantity}
            <button onClick={handleIncrease}>
              <Plus color="#8047f8" />
            </button>
          </span>
          <div>
            <button onClick={handleRemove}>
              <Trash color="#8047f8" />
              REMOVER
            </button>
          </div>
        </div>
      </div>
    </ItemsContainer>
  )
}
