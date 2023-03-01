import styled from 'styled-components'

export const PaymentContainer = styled.div`
  @media (max-width: 600px) {
    margin-top: 1rem;
    margin-left: 0.2rem;

    width: 100%;
    height: 19.69rem;

    padding: 2rem;

    h1 {
      display: flex;
      justify-content: center;
      margin-bottom: 1rem;
    }
    h1,
    p {
      text-align: center;
    }

    .button-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  width: 40rem;
  height: 12.94rem;

  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};

  margin-left: 10rem;
  margin-top: 0.75rem;

  padding: 2.5rem;

  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.31rem;
    color: ${(props) => props.theme['base-subtitle']};

    display: flex;
    gap: 0.5rem;

    svg {
      margin-top: -2px;
    }
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 0.87rem;
    font-weight: 400;
    line-height: 1.12rem;
    color: ${(props) => props.theme['base-text']};

    margin-top: 2px;
    margin-left: 1.87rem;
  }

  .button-container {
    display: flex;
    gap: 0.75rem;

    margin-top: 2rem;

    button {
      width: 11.16rem;
      height: 3.19rem;

      padding-left: 1rem;

      font-family: Roboto;
      font-size: 0.75rem;
      font-weight: 400;
      line-height: 1.19rem;

      color: ${(props) => props.theme['base-text']};
    }
  }
`
