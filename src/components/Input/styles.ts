import styled from 'styled-components'

export const InputContainer = styled.input`
  height: 2.62rem;

  border: none;
  border-radius: 4px;
  padding: 0.75rem;
  background: ${(props) => props.theme['base-input']};

  font-family: 'Roboto', sans-serif;
  font-size: 0.87rem;
  font-weight: 400;
  line-height: 1.12rem;

  &::placeholder {
    font-family: 'Roboto', sans-serif;
    font-size: 0.87rem;
    font-weight: 400;
    line-height: 1.12rem;

    color: ${(props) => props.theme['base-label']};
  }

  &:focus-visible {
    outline: 1px solid ${(props) => props.theme['yellow-dark']};
    box-shadow: none;
  }
`
