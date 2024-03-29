import React from 'react'
import *  as ReactDOMClient from 'react-dom/client'

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);

import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { CartContextProvider } from './contexts/CartContext'
// import { Success } from './pages/Success'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import { Router } from './Router'

root.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
