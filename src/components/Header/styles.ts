import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 6.5rem;

  padding: 2rem 10rem 0 10rem;

  @media (max-width: 600px) {
    width: 100%;
    padding: 0;

    justify-content: space-around;

    margin-top: 1.87rem;
  }

  .location {
    display: flex;
    gap: 0.75rem;

    width: 12.06rem;

    span {
      display: flex;
      gap: 4px;
      align-items: center;

      padding-left: 8px;

      width: 8.94rem;
      height: 2.37rem;

      border-radius: 6px;
      background: ${(props) => props.theme['purple-light']};

      color: ${(props) => props.theme['purple-dark']};
      font-size: 0.87rem;
      font-weight: 400;
    }

    button {
      border: none;
      position: relative;

      .totalCart {
        position: absolute;
        right: -8.35px;
        top: -8px;

        display: flex;
        align-items: center;

        font-size: 0.75rem;

        width: 1.25rem;
        height: 1.25rem;

        border-radius: 1000px;
        background: ${(props) => props.theme['yellow-dark']};

        color: ${(props) => props.theme['white-']};
      }
    }
  }
`
