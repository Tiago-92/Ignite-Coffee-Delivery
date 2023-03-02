import styled from 'styled-components'

export const SuccessContainer = styled.div`
  @media (max-width: 600px) {
    .container {
      flex-direction: column;

      .flex-container-1,
      .flex-container-2 {
        margin: 0;
      }
    }
  }
  .container {
    display: flex;

    .flex-container-1 {
      margin-top: 7rem;
      margin-left: 10rem;

      h1 {
        font-family: 'Baloo 2', cursive;
        font-size: 2rem;
        font-weight: 800;
        line-height: 2.62rem;
        color: ${(props) => props.theme['yellow-dark']};
      }

      h2 {
        font-family: Roboto;
        font-size: 1.25rem;
        font-weight: 400;
        line-height: 1.62rem;
        color: ${(props) => props.theme['base-subtitle']};
      }
    }

    .flex-container-2 {
      margin-top: 11.25rem;
      margin-left: 6.37rem;
    }
  }
`
