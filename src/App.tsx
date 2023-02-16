import { ThemeProvider } from 'styled-components'
import { Container } from './App2'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>Olá Café</Container>
    </ThemeProvider>
  )
}
