import { CheckoutContainer, CheckoutForm } from './styles'

import { MapPinLine, Placeholder } from 'phosphor-react'
import { Input } from '../Input'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

const newFormValidationSchema = zod.object({
  cep2: zod.number().max(8, 'CEP inválido'),
  street2: zod.string().min(1, 'Rua inválida'),
  number2: zod.string().min(1, 'Número inválido'),
  complement2: zod.string().min(1, 'Complemento inválido'),
  neighborhood2: zod.string().min(1, 'Bairro inválido'),
  city2: zod.string().min(1, 'Cidade inválida'),
  state2: zod.string().min(1, 'UF inválida'),
})

export function Form() {
  const { register, handleSubmit, watch, formState } = useForm({
    resolver: zodResolver(newFormValidationSchema),
  }) 

  function handleCreateAdress(data: any) {
    console.log(data)
  }

  return (
    <CheckoutContainer>
      <CheckoutForm onSubmit={handleSubmit(handleCreateAdress)} action="">
        <h1>
          <MapPinLine size={22} color="#C47F17" />
          Endereço de entrega
        </h1>
        <p>Informe o endereço onde deseja receber seu pedido</p>

        <div className="input-container">
          <label htmlFor="cep2" className="zip-code">
            <Input 
              placeholder="CEP"
              id="cep2"
              {...register("cep2")}
            />
          </label>
          <label htmlFor="street2" className="street">
            <Input
              placeholder="Rua"
              id="street2"
              {...register("street2")} 
            />
          </label>
          <div className="input-flex">
            <label htmlFor="number2" className="number">
              <Input 
                placeholder="Número"
                id="number2"
                {...register("number2")} 
                />
            </label>
            <label htmlFor="complement2" className="complement">
              <Input 
                placeholder="Complemento"
                id="complement2"
                {...register("complement2")} 
              />
            </label>
          </div>

          <div className="input-flex2">
            <label htmlFor="neighborhood2" className="neighborhood">
              <Input 
                placeholder="Bairro"
                id="neighborhood2"
                {...register("neighborhood2")} 
              />
            </label>
            <label htmlFor="city2" className="city">
              <Input 
                placeholder="Cidade"
                id="city2"
                {...register("city2")} 
              />
            </label>
            <label htmlFor="state2" className="FU">
              <Input 
                placeholder="UF"
                id="state2"
                {...register("state2")} 
              />
            </label>
          </div>
        </div>
        <button type="submit">SUBMIT</button>
      </CheckoutForm>
    </CheckoutContainer>
  )
}
