import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const Label = Styled.div`
  ${theme('font.body3')};
  margin-right : 41px;
  width : 90px;
  color:${palette('grayscale', 5)};;
`;
export const Exp = Styled.div`
  ${theme('font.subhead3')};
  color : ${palette('grayscale', 5)};;
`;
export const RowContainer = Styled.div`
  display : flex;
  flex-direction : row;
  justify-content : flex-start;
  margin-bottom : 9px;
`;
export const Image = Styled.img`
  margin-bottom : 30px;
  border-top-left-radius:18px;
  border-top-right-radius:18px;
  width : 402px;
  height : 148px;
  object-fit: cover;
`;
export const BottomContainer = Styled.div`
  display : flex;
  flex-direction : column;
  width : 322px;
`;
export const Title = Styled.div`
  margin-bottom : 40px;
  width : 322px;
  line-height: 1.31;
  letter-spacing: -0.5px;
  color : ${palette('grayscale', 7)};;
  font-size: 32px;
  font-weight: bold;
`;
export const SAdminChallengeCard = Styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
  border-radius: 18px;
  box-shadow: 0 0 24px 0 rgba(13, 12, 63, 0.1);
  background-color: ${palette('grayscale', 0)};;
  cursor : pointer;
  width: 402px;
  height: 484px;
`;
