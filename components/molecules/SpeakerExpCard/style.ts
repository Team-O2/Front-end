import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const Exp = Styled.p`
  ${theme('font.body4')};
  color : ${palette('grayscale', 0)};
  text-align: center;
  margin-top : 48px;
`;

export const SSpeakerExpCard = Styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
`;

export const ImgWrapper = Styled.div`
  height : 230px;
  display : flex;
  align-items : flex-end;
`;
