import styled from 'styled-components'

export const SectionContainer = styled.section`
  display: flex;

  margin-top: 5.87rem;
  margin-left: 10rem;

  .title-subtitle {
    h1 {
      font-family: 'Baloo 2', cursive;
      font-weight: 800;
      font-size: 3rem;
      line-height: 3.9rem;
      color: ${(props) => props.theme['base-title']};
    }

    h2 {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1.25rem;
      line-height: 1.62rem;
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-subtitle']};

      margin-top: 1rem;
    }
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 4.12rem;

    width: 35.44rem;
    height: 5.25rem;
  }
`
