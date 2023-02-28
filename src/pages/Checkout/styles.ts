import styled from 'styled-components'

export const Container = styled.div`
  .title {
    font-family: 'Baloo 2', cursive;
    font-size: 1.12rem;
    font-weight: 700;
    line-height: 1.44rem;
    text-align: left;
    color: ${(props) => props.theme['base-subtitle']};

    margin-top: 2.5rem;
    margin-left: 10rem;
  }
`
