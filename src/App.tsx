import { useState } from 'react'

import { ThemeProvider } from 'styled-components'
import { Card } from './components/Card'
import { Header } from './components/Header'
import { Section } from './components/Section'
import { defaultTheme } from './styles/themes/default'

import { cart } from './cart'

import { HomeContainer } from './styles'

export function App() {
  const [carts, setCarts] = useState(cart)

  return (
    <ThemeProvider theme={defaultTheme}>
      <HomeContainer>
        <Header />
        <Section />
        <h2 className="coffee-title">Nossos cafés</h2>
        <div className="coffee-container">
          {carts.map((cart) => (
            <Card key={String(cart.id)} data={cart} />
          ))}
        </div>
      </HomeContainer>
    </ThemeProvider>
  )
}
