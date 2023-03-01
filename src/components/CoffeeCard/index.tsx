import { CoffeCardContainer } from './styles'

import traditionalCoffee from '../../assets/traditional-coffee.png'

import { Plus, Minus, Trash } from 'phosphor-react'
import { Button } from '../Button'

export function CoffeeCard() {
  return (
    <CoffeCardContainer>
      <div className="coffee-details">
        <div className="coffee-type">
          <img
            src={traditionalCoffee}
            alt="imagem de uma xicára com café tipo latte"
          />
          <p>Expresso Tradicional</p>
          <span>R$ 9,90</span>
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
