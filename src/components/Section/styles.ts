import styled from 'styled-components'

export const SectionContainer = styled.section`
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;

    width: 100%;

    margin: 0;
    padding: 1.87rem;

    .title-subtitle {
      .title {
        font-size: 2.19rem;
        line-height: 2.5rem;
        text-align: left;
      }

      .subtitle {
        font-size: 1.12rem;
      }

      .list {
        gap: 0.94rem;
        width: 100%;

        span {
          margin: 0;
        }
      }
    }

    .coffee-image {
      margin-top: 35px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  display: flex;
  gap: 3.5rem;

  margin-top: 5.87rem;
  margin-left: 10rem;
  margin-right: 10rem;

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
    height: 7rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      font-family: 'Roboto' sans-serif;
      font-weight: 400;
      line-height: 1.3rem;
      font-size: 1rem;
      color: ${(props) => props.theme['base-text']};
    }

    .item-right-1,
    .item-right-2 {
      margin-left: 2.5rem;
    }
  }
`
