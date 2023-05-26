import styled from '@emotion/styled';

import { colors } from '../../constants';

export const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    /* color: ${colors.text.primary}; */
  }
  /* p {
    color: ${colors.text.primary};
  } */
  /* h1,
  h2,
  h3 {
    color: ${colors.text.primary};
  } */
  .loader-container {
    display: flex;
    justify-content: center;
  }
  header {
    background-color: ${colors.bg.primary};
    padding: 10px 30px;
    ul {
      display: flex;
      gap: 20px;

      margin: 0;
      padding: 0;
      padding: 0;
      a {
        display: block;
        color: ${colors.link.primary};

        padding: 5px 10px;
        border-radius: 5px;
        transition: background-color 0.3s linear;
        &:hover {
          background-color: ${colors.link.bg.hover};
        }
        &.active {
          background-color: ${colors.link.bg.active};
        }
      }
    }
  }
  main {
    padding: 20px 30px;
    /* background-color: #f0d5b9; */
    a {
      display: block;
      color: ${colors.link.primary};
      background-color: ${colors.bg.primary};

      padding: 5px 10px;
      border-radius: 5px;
      transition: background-color 0.3s linear;
      &:hover {
        background-color: ${colors.link.bg.hover};
      }
      &.active {
        background-color: ${colors.link.bg.active};
      }
    }
  }
`;
