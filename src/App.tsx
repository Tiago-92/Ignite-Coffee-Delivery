import { ThemeProvider } from 'styled-components'
import { Card } from './components/Card'
import { Header } from './components/Header'
import { Section } from './components/Section'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Section />
      <Card />
    </ThemeProvider>
  )
}
