import { CheckoutContainer, CheckoutForm } from './styles'

import { MapPinLine, Placeholder } from 'phosphor-react'
import { Input } from '../Input'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useState } from 'react'
import { FormProps, useNavigate } from 'react-router-dom'
import { CoffeeCard } from '../CoffeeCard'

const newFormValidationSchema = zod.object({
  cep2: zod.number(),
  street2: zod.string(),
  number2: zod.number(),
  complement2: zod.string(),
  neighborhood2: zod.string(),
  city2: zod.string(),
  state2: zod.string(),
})

export function Form() {
  const [form, setForm] = useState({})

  const navigate = useNavigate()

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(newFormValidationSchema),
  }) 

  function handleCreateAdress(data: FormProps) {
    setForm(data)
    navigate("/success", {
      state: data
    })
  }
  return (
    <CheckoutContainer>
      <CheckoutForm onSubmit={handleSubmit(handleCreateAdress)} action="">
        <div className="container-flex">
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
                {...register("cep2", { valueAsNumber: true })}
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
                  {...register("number2", { valueAsNumber: true })} 
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
        </div>
        <div className="flex-container2">
          <CoffeeCard/>
        </div>
      </CheckoutForm>
    </CheckoutContainer>
  )
}
