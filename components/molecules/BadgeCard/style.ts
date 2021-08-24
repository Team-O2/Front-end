import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const Image = Styled.img`
  width : 130px;
  height : 130px;
`;

export const Title = Styled.h1`
  ${theme('font.subhead4')};
  margin-top: 10px;
  margin-bottom : 15px;
  color : ${palette('grayscale', 6)};
`;

export const Exp = Styled.p`
  ${theme('font.body3')};
  text-align : center;
  white-space : nowrap;
  color : ${palette('grayscale', 6)};
`;

export const SBadgeCard = Styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
`;
