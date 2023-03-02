import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;

  }
  
  body {
    font-family: 'Roboto', sans-serif;

    
  }

  button {
    cursor: pointer;
    transition: filter 0.2s;
  }
`
