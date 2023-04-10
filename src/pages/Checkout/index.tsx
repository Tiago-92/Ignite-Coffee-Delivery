/* eslint-disable array-callback-return */
import { Container } from './styles'

import { Form } from '../../components/Form'
import { Header } from '../../components/Header'
import { Payment } from '../../components/Payment'
import { CoffeeCard } from '../../components/CoffeeCard'

export function Checkout() {
  return (
    <Container>
      <Header />
      <div className="flex-container">
        <div className="first-container">
          <h1 className="title">Complete seu pedido</h1>
          <Form />
          <Payment />
        </div>
        <div className="second-container">
          <>
            <h1 className="title-2">Cafés selecionados</h1>
          </>
        </div>
      </div>
    </Container>
  )
}
