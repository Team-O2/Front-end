import Styled from 'styled-components';
import { theme } from 'styled-tools';

export const Image = Styled.img`
  width: 260px;
  height: 260px;
`;

export const Exp = Styled.p`
  ${theme('font.body4')};
  color : #ffffff;
  text-align: center;
  margin-top : 48px;
`;

export const SSpeakerExpCard = Styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
`;
