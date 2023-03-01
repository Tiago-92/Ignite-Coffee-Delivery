import styled from 'styled-components'

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  border: none;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
  transition: 0.3s;
  box-shadow: none;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
    border: 1px solid ${(props) => props.theme['purple-']};
  }

  svg {
    color: ${(props) => props.theme['purple-']};

    width: 1rem;
    height: 1rem;
  }
`
