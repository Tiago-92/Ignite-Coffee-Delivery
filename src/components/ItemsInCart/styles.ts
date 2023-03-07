import styled from 'styled-components'

export const ItemsContainer = styled.div`
  display: flex;
  gap: 1.5rem;

  margin-bottom: 1.5rem;

  img {
    width: 4rem;
    height: 4rem;
  }
  .coffee-details {
    width: 23rem;
    height: 5rem;

    border-bottom: 1px solid ${(props) => props.theme['base-button']};

    .coffee-type {
      display: flex;
      img {
        width: 4rem;
        height: 4rem;
      }

      p {
        margin-left: 1.25rem;

        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.31rem;
        color: ${(props) => props.theme['base-subtitle']};
      }

      span {
        margin-left: 4.9rem;

        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.31rem;
        color: ${(props) => props.theme['base-text']};
      }
    }

    .quantity {
      display: flex;
      gap: 0.5rem;

      margin-top: 0.5rem;
      margin-left: 1.25rem;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;

        width: 4.5rem;
        height: 2rem;

        border-radius: 6px;
        background: ${(props) => props.theme['base-button']};

        button {
          width: 0.87rem;
          height: 0.87rem;

          border: none;
          background: transparent;
        }
      }

      div {
        button {
          width: 5.69rem;
          height: 2rem;

          display: flex;
          justify-content: center;

          font-family: 'Roboto', sans-serif;
          font-size: 0.75rem;
          font-weight: 400;
          line-height: 1.19rem;
          color: ${(props) => props.theme['base-text']};

          svg {
            width: 1rem;
            height: 1rem;
          }
        }
      }
    }
  }
`
