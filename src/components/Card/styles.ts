import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 16rem;
  height: 19.38rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 6px 36px;

  background: ${(props) => props.theme['base-card']};

  img {
    width: 7.5rem;
    height: 7.5rem;

    margin-top: -1.25rem;
  }

  .tag {
    width: 5.06rem;
    height: 1.31rem;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 0.75rem;

    background: ${(props) => props.theme['yellow-light']};
    border-radius: 50px;

    font-size: 0.62rem;
    color: ${(props) => props.theme['yellow-dark']};
  }

  .coffee-name {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 1.62rem;

    margin-top: 1.25rem;
  }

  .coffee-description {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.87rem;
    color: ${(props) => props.theme['base-label']};
    line-height: 1.14rem;
    text-align: center;

    margin: 0.5rem 1.25rem;
  }

  .price-and-quantity {
    display: flex;
    align-items: center;

    margin-top: 2.06rem;

    .buy {
      font-family: 'Baloo 2', cursive;
      font-weight: 800;
      line-height: 1.95rem;
      color: ${(props) => props.theme['base-text']};
      font-size: 0.87rem;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: space-around;

      width: 4.5rem;
      height: 2.37rem;

      border-radius: 6px;
      background: ${(props) => props.theme['base-button']};

      margin-left: 1.44rem;

      font-size: 1rem;
      font-weight: 400;
      line-height: 1.3rem;
      font-family: 'Roboto', sans-serif;
      color: ${(props) => props.theme['base-title']};

      button {
        border: none;
        background: transparent;
      }
    }

    .add-cart {
      width: 2.37rem;
      height: 2.37rem;

      margin-left: 0.5rem;

      display: flex;
      align-items: center;
      justify-content: center;

      border: none;
      border-radius: 6px;
      background: ${(props) => props.theme['purple-dark']};

      svg {
        fill: white;
      }
    }
  }
`
