import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  width: 40rem;
  height: 23.25rem;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  margin-top: 0.94rem;
  margin-left: 10rem;

  @media (max-width: 600px) {
    width: 100%;
    height: 26.25rem;

    margin: 0;

    p {
      margin: 0;
    }
  }

  h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.31rem;
    text-align: left;
    color: ${(props) => props.theme['base-subtitle']};

    display: flex;
    align-items: center;
    gap: 0.5rem;

    padding-top: 2.5rem;
    padding-left: 2.5rem;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 0.87rem;
    font-weight: 400;
    line-height: 1.12rem;
    text-align: left;
    color: ${(props) => props.theme['base-text']};

    margin-top: 2px;
    margin-left: 4.37rem;
  }
`

export const CheckoutForm = styled.form`
  @media (max-width: 600px) {
    margin: 0;
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;

    .input-container {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      padding-left: 2rem;

      margin-top: 2rem;

      .zip-code {
        input {
          width: 15.62rem;
        }
      }

      .street {
        input {
          width: 21rem;
        }
      }

      .input-flex {
        display: flex;
        flex-direction: row;
        gap: 1rem;

        .number,
        .complement {
          input {
            width: 10rem;
          }
        }
      }

      .input-flex2 {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;

        .neighborhood,
        .city {
          input {
            width: 10rem;
          }
        }

        .FU {
          input {
            width: 3.75rem;
          }
        }
      }
    }
  }

  @media (min-width: 600px) {
    .input-container {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      margin-top: 2rem;
      margin-left: 2.5rem;

      .zip-code {
        input {
          width: 12.5rem;
        }
      }

      .street {
        input {
          width: 35rem;
        }
      }

      .input-flex {
        display: flex;
        gap: 0.75rem;

        .number {
          input {
            width: 12.5rem;
          }
        }
        .complement {
          input {
            width: 21.75rem;
          }
        }
      }

      .input-flex2 {
        display: flex;
        gap: 0.75rem;

        .neighborhood {
          width: 12.5rem;
        }

        .city {
          input {
            width: 17.25rem;
          }
        }

        .FU {
          input {
            width: 3.75rem;
          }
        }
      }
    }
  }
`
