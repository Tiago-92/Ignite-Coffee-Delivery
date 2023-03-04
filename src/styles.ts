import styled from 'styled-components'

export const HomeContainer = styled.div`
  .coffee-title {
    margin-top: 8.75rem;
    margin-left: 10rem;

    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: 800;
    line-height: 2.62rem;

    color: ${(props) => props.theme['base-subtitle']};
  }

  .coffee-container {
    margin-top: 3.37rem;
    margin-left: 10rem;

    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
`
