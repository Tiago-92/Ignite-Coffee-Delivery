import { SuccessCardContainer } from './styles'

import mapIcon from '../../assets/map-icon.svg'
import timerIcon from '../../assets/timer-icon.svg'
import dollarIcon from '../../assets/dollar-icon.svg'

export function SuccessCard() {
  return (
    <SuccessCardContainer>
      <div className="adress">
        <img src={mapIcon} alt="" />
        <div className="text">
          <p>
            Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
          </p>
          <p>Farrapos - Porto Alegre, RS</p>
        </div>
      </div>
      <div className="delivery-forecast">
        <div className="timer-icon">
          <img src={timerIcon} alt="" />
        </div>
        <div className="text-2">
          <p>Previsão de entrega</p>
          <p>20 min - 30 min</p>
        </div>
      </div>
      <div className="payment">
        <div className="dollar-icon">
          <img src={dollarIcon} alt="" />
        </div>
        <div className="text-3">
          <p>Pagamento na entrega</p>
          <p>Cartão de Crédito</p>
        </div>
      </div>
    </SuccessCardContainer>
  )
}
