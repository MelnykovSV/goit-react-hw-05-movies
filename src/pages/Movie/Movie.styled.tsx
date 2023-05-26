import styled from '@emotion/styled';
import { colors } from '../../constants';

export const Container = styled.div`
  a {
    display: block;
    color: ${colors.link.primary};
    background-color: ${colors.bg.primary};
    width: fit-content;

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
  nav {
    ul {
      display: flex;
      gap: 20px;
    }
  }
`;
