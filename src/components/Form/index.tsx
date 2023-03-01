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
          <div className="zip-code">
            <Input placeholder="CEP" />
          </div>
          <div className="street">
            <Input placeholder="Rua" />
          </div>
          <div className="input-flex">
            <div className="number">
              <Input placeholder="Número" />
            </div>
            <div className="complement">
              <Input placeholder="Complemento" />
            </div>
          </div>

          <div className="input-flex2">
            <div className="neighborhood">
              <Input placeholder="Bairro" />
            </div>
            <div className="city">
              <Input placeholder="Cidade" />
            </div>
            <div className="FU">
              <Input placeholder="UF" />
            </div>
          </div>
        </div>
      </CheckoutForm>
    </CheckoutContainer>
  )
}
