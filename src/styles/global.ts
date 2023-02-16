import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;

  }

  header {
    font-family: 'Baloo 2', cursive;
  }

  body {
    font-family: 'Roboto', sans-serif;
    
  }
`
