import { HeaderContainer } from './styles'

import logoCoffeDellivery from '../../assets/logo.svg'
import locationIcon from '../../assets/location-icon.svg'
import cartEmpty from '../../assets/cart-empty.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { totalIntemsInCart } = useContext(CartContext)
  return (
    <HeaderContainer>
      <img src={logoCoffeDellivery} alt="" />

      <div className="location">
        <span>
          <img src={locationIcon} alt="ícone de localização" />
          <p>Porto Alegre, RS</p>
        </span>

        <button>
          {totalIntemsInCart > 0 ? (
            <span className="totalCart">{totalIntemsInCart}</span>
          ) : (
            ''
          )}
          <img src={cartEmpty} alt="imagem de um carrinho de compras" />
        </button>
      </div>
    </HeaderContainer>
  )
}
