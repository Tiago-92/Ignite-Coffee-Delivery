import { PaymentContainer } from './styles'

import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import { Button } from '../Button'

export function Payment() {
  return (
    <PaymentContainer>
      <h1>
        <CurrencyDollar size={22} color="#8047f8" />
        Pagamento
      </h1>
      <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>

      <div className="button-container">
        <Button title="CARTÃO DE CRÉDITO" icon={CreditCard} />
        <Button title="CARTÃO DE DÉBITO" icon={Bank} />
        <Button title="DINHEIRO" icon={Money} />
      </div>
    </PaymentContainer>
  )
}
