import { Routes, Route } from 'react-router-dom'

import { App } from './App'
import { Checkout } from './pages/Checkout'
import { Success } from './pages/Success'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  )
}
