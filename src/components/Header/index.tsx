import { HeaderContainer } from './styles'

import logoCoffeDellivery from '../../assets/logo.svg'
import locationIcon from '../../assets/location-icon.svg'
import cartEmpty from '../../assets/cart-empty.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffeDellivery} alt="" />

      <div className="location">
        <span>
          <img src={locationIcon} alt="ícone de localização" />
          <p>Porto Alegre, RS</p>
        </span>

        <img src={cartEmpty} alt="imagem de um carrinho de compras" />
      </div>
    </HeaderContainer>
  )
}
