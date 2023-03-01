import styled from 'styled-components'

export const Container = styled.div`
  .flex-container {
    display: flex;
  }
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

  .title-2 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.12rem;
    font-weight: 700;
    line-height: 1.44rem;
    color: ${(props) => props.theme['base-subtitle']};
    text-align: left;

    margin-top: 2.5rem;
    margin-left: 2rem;
  }
`
