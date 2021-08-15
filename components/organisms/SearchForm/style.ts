import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const Main = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    width: 22px;
    height: 22px;
  }
  p {
    flex:1;
    margin-left: 10px;
    color: ${palette('grayscale', 8)};
    ${theme('font.h2')};
  }
`;

export const Detail = Styled.div`
  margin-top: 12px;
  color: ${palette('grayscale', 7)};
  ${theme('font.body3_eng')};
`;

export const SearchFormWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  height: 80px;
`;
