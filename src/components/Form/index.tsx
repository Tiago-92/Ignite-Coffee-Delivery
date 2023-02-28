import { CheckoutContainer, CheckoutForm } from './styles'

import { MapPinLine } from 'phosphor-react'
import { Input } from '../Input'

export function Form() {
  return (
    <CheckoutContainer>
      <CheckoutForm>
        <h1>
          <MapPinLine size={22} color="#C47F17" />
          Endereço de entrega
        </h1>
        <p>Informe o endereço onde deseja receber seu pedido</p>

        <div className="input-container">
          <Input placeholder="CEP" className="zip-code" />
          <Input placeholder="Rua" className="street" />

          <div className="input-flex">
            <Input placeholder="Número" className="number" />
            <Input placeholder="Complemento" className="complement" />
          </div>

          <div className="input-flex2">
            <Input placeholder="Bairro" className="neighborhood" />
            <Input placeholder="Cidade" className="city" />
            <Input placeholder="UF" className="FU" />
          </div>
        </div>
      </CheckoutForm>
    </CheckoutContainer>
  )
}
