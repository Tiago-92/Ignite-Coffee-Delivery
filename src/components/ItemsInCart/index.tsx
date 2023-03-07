import { Plus, Minus, Trash } from 'phosphor-react'
import { CartItem } from '../../contexts/CartContext'
import { Button } from '../Button'
import { ItemsContainer } from './styles'

interface ItemsProps {
  coffee: CartItem
}
export function ItemsInCart({ coffee }: ItemsProps) {
  return (
    <ItemsContainer>
      <img src={coffee.img} alt="" />
      <div className="coffee-details">
        <div className="coffee-type">
          <p>{coffee.title}</p>
          <span>{coffee.price}</span>
        </div>

        <div className="quantity">
          <span>
            <button>
              <Minus color="#8047f8" />
            </button>
            1
            <button>
              <Plus color="#8047f8" />
            </button>
          </span>
          <div>
            <Button title="REMOVER" icon={Trash} />
          </div>
        </div>
      </div>
    </ItemsContainer>
  )
}
