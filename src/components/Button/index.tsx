/* eslint-disable no-undef */
import { ButtonContainer } from './styles'

interface ButtonProps {
  icon: React.ComponentType
  title: string
}

export function Button({ icon: Icon, title, ...rest }: ButtonProps) {
  return (
    <ButtonContainer {...rest}>
      {Icon && <Icon />}
      {title}
    </ButtonContainer>
  )
}
