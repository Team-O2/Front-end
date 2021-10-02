import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const NoContents = Styled.p`
  ${theme('font.subhead4')};
  margin: 100px 0 70vh 0;
  color: ${palette('grayscale', 2)};
`;

export const Header = Styled.div`
  ${theme('font.h2')};
  margin: 100px;
  text-align: center;
  color: ${palette('grayscale', 7)};
  
  h2:nth-child(2) {
    ${theme('font.h2_eng')};
  }
`;

export const Wrapper = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
