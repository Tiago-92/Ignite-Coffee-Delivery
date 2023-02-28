import { Container } from './styles'

import { Form } from '../../components/Form'
import { Header } from '../../components/Header'

export function Checkout() {
  return (
    <Container>
      <Header />

      <h1 className="title">Complete seu pedido</h1>

      <Form />
    </Container>
  )
}
