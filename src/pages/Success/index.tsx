import { Header } from '../../components/Header'
import { SuccessCard } from '../../components/SuccessCard'
import { SuccessContainer } from './styles'

import delivery from '../../assets/delivery.png'

export function Success() {
  return (
    <SuccessContainer>
      <Header />
      <div className="container">
        <div className="flex-container-1">
          <h1>Uhu! Pedido confirmado</h1>
          <h2>Agora é só aguardar que logo o café chegará até você</h2>
          <SuccessCard />
        </div>
        <div className="flex-container-2">
          <img src={delivery} alt="" />
        </div>
      </div>
    </SuccessContainer>
  )
}
