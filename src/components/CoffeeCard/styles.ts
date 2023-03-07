import styled from 'styled-components'

export const CoffeCardContainer = styled.div`
  @media (max-width: 600px) {
    width: 100%;

    margin: 0;
  }

  width: 28rem;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;

  margin-top: 0.94rem;
  margin-left: 2rem;

  padding-top: 2.5rem;
  padding-left: 2.5rem;
  padding-bottom: 1.5rem;

  .itens {
    margin-top: 1.5rem;
    margin-bottom: 0.84rem;
  }

  .itens,
  .delivery {
    width: 23rem;

    display: flex;
    justify-content: space-between;

    p {
      font-family: 'Roboto', sans-serif;
      font-size: 0.87rem;
      font-weight: 400;
      line-height: 1.12rem;
      color: ${(props) => props.theme['base-text']};
    }

    span {
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.31rem;
      color: ${(props) => props.theme['base-text']};
    }
  }

  .total {
    display: flex;
    justify-content: space-between;

    margin-top: 0.75rem;

    width: 23rem;

    p,
    span {
      font-family: 'Roboto', sans-serif;
      font-size: 20px;
      font-weight: 700;
      line-height: 26px;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  .confirm {
    width: 23rem;
    height: 2.87rem;

    border-radius: 6px;
    border: none;
    background: ${(props) => props.theme['yellow-']};

    font-family: 'Roboto', sans-serif;
    font-size: 0.87rem;
    font-weight: 700;
    line-height: 1.37rem;
    color: ${(props) => props.theme['white-']};

    margin-top: 1.5rem;

    transition: 0.3s;
  }

  .confirm:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
