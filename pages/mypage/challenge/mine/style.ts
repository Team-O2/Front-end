import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const NoContents = Styled.div`
  ${theme('font.subhead4')};
  color: ${palette('grayscale', 2)};
  margin: 100px 0 70vh 0;
`;

export const Header = Styled.h2`
  ${theme('font.h2_eng')};
  margin: 100px;
  text-align: center;
  color: ${palette('grayscale', 7)};
`;

export const Wrapper = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
