import { ThemeProvider } from 'styled-components'
import { Card } from './components/Card'
import { Header } from './components/Header'
import { Section } from './components/Section'
import { defaultTheme } from './styles/themes/default'

import { cart } from './cart'

import { HomeContainer } from './styles'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <HomeContainer>
        <Header />
        <Section />
        <h2 className="coffee-title">Nossos cafés</h2>
        <div className="coffee-container">
          {cart.map((cart) => (
            <Card key={String(cart.id)} coffee={cart} />
          ))}
        </div>
      </HomeContainer>
    </ThemeProvider>
  )
}
