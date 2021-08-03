import Styled from 'styled-components';
import { theme } from 'styled-tools';

export const SubTitle = Styled.div`
  ${theme('font.subhead4')}
  margin-top : 40px;
  margin-bottom : 8px;
  width : 406px;
`;

export const Wrapper = Styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
`;
