import { SectionContainer } from './styles'

import cupCoffee from '../../assets/cup-coffee.png'
import cartIcon from '../../assets/cart-icon.svg'
import clockTimer from '../../assets/clock-timer.svg'
import boxIcon from '../../assets/box-icon.svg'
import coffeeIcon from '../../assets/coffee-icon.svg'

export function Section() {
  return (
    <SectionContainer>
      <div className="title-subtitle">
        <h1 className="title">
          Encontre o café perfeito para qualquer hora do dia
        </h1>
        <h2 className="subtitle">
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h2>

        <div className="list">
          <span>
            <img src={cartIcon} alt="ícone de um carrinho de compras" />
            Compra simples e segura
          </span>
          <span className="item-right-1">
            <img src={boxIcon} alt="ícone de uma caixa" />
            Embalagem mantém o café intacto
          </span>
          <span>
            <img src={clockTimer} alt="ícone de um relógio" />
            Entrega rápida e rastreada
          </span>
          <span className="item-right-2">
            <img src={coffeeIcon} alt="ícone de um copo de café" />O café chega
            fresquinho até você
          </span>
        </div>
      </div>

      <div className="coffee-image">
        <img src={cupCoffee} alt="imagem de um copo de café" />
      </div>
    </SectionContainer>
  )
}
