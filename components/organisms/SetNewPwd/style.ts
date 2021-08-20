import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const Title = Styled.div`
  ${theme('font.dp1')};
  margin-bottom: 60px;
  color: ${palette('grayscale', 9)};
`;

export const Container = Styled.div`
  position: relative;
  top: -60px;
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
