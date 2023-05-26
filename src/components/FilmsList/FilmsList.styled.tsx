import styled from '@emotion/styled';
import { colors } from '../../constants';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  li {
    a {
      transition: background-color 0.3s linear;
      display: block;
      border-radius: 5px;
      padding: 5px;
      width: fit-content;
      color: ${colors.text.primary};
      :hover {
        background-color: ${colors.link.bg.hover};
      }
    }
  }
`;
