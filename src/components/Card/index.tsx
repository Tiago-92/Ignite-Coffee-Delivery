import { CardContainer } from './styles'

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { BsCartFill } from 'react-icons/bs'

import traditionalCoffee from '../../assets/traditional-coffee.png'

export function Card() {
  return (
    <CardContainer>
      <img
        src={traditionalCoffee}
        alt="imagem de uma xicára com café tradicional"
      />

      <span className="tag">TRADICIONAL</span>
      <p className="coffee-name">Expresso Tradicional</p>
      <p className="coffee-description">
        O tradicional café feito com água quente e grãos moídos
      </p>

      <div className="price-and-quantity">
        <div className="buy">R$ 9,90</div>

        <span>
          <button>
            <AiOutlineMinus color="#8047f8" />
          </button>
          1
          <button>
            <AiOutlinePlus color="#8047f8" />
          </button>
        </span>

        <button className="add-cart">
          <BsCartFill size={19} />
        </button>
      </div>
    </CardContainer>
  )
}
