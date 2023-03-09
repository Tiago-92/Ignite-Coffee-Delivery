/* eslint-disable no-undef */
import { ButtonContainer } from './styles'

interface ButtonProps {
  icon: React.ComponentType
  title: string
  onClick: string
}

export function Button({ icon: Icon, title, onClick, ...rest }: ButtonProps) {
  return (
    <ButtonContainer {...rest}>
      {Icon && <Icon />}
      {title}
      {onClick}
    </ButtonContainer>
  )
}
