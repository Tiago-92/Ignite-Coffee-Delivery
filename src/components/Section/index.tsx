import { SectionContainer } from './styles'

import cupCoffee from '../../assets/cup-coffee.png'

export function Section() {
  return (
    <SectionContainer>
      <div className="title-subtitle">
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h2>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h2>

        <div className="list">
          <span>Compra simples e segura</span>
          <span>Embalagem mantém o café intacto</span>
          <span>Entrega rápida e rastreada</span>
          <span>O café chega fresquinho até você</span>
        </div>
      </div>

      <div>
        <img src={cupCoffee} alt="imagem de um copo de café" />
      </div>
    </SectionContainer>
  )
}
