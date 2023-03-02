import styled from 'styled-components'

export const SuccessCardContainer = styled.div`
  @media (max-width: 600px) {
    width: 100%;
  }

  width: 32.87rem;
  height: 16.87rem;

  border-radius: 6px 36px;
  border: 1px solid #dbac2c;

  margin-top: 2.5rem;

  padding-top: 2.5rem;
  padding-left: 2.5rem;

  .adress,
  .delivery-forecast,
  .payment {
    display: flex;
    gap: 0.75rem;
  }

  .adress {
    .text {
      p {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.31rem;
        color: ${(props) => props.theme['base-text']};
      }

      strong {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.31rem;
        color: ${(props) => props.theme['base-subtitle']};
      }
    }
  }

  .delivery-forecast {
    margin-top: 2rem;

    .text-2 {
      p {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.31rem;
        color: ${(props) => props.theme['base-text']};
      }

      strong {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.31rem;
        color: ${(props) => props.theme['base-subtitle']};
      }
    }
  }

  .payment {
    margin-top: 2rem;

    .text-3 {
      p {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.31rem;
        color: ${(props) => props.theme['base-text']};
      }

      strong {
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.31rem;
        color: ${(props) => props.theme['base-subtitle']};
      }
    }
  }
`
