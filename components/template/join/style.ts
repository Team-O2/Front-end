import { Button, Label } from 'components/atoms';
import Styled, { css } from 'styled-components';
import { palette, theme } from 'styled-tools';

export const JoinLabel = Styled(Label)`
  font-size: 40px;
  font-weight: bold;
  margin-bottom : 20px;
`;

export const SubTitle = Styled.div`
  ${theme('font.subhead4')}
  margin-top : 40px;
  margin-bottom : 8px;
  width : 406px;
`;

export const JoinButton = Styled(Button)<{ isButtonDisabled: boolean }>`
  width: 406px;
  height: 60px;
  border-radius: 4px;
  font-size : 16px;
  font-weight : bold;     
  color : ${palette('grayscale', 0)}; 
  margin-top : 60px;
   ${(props) =>
     props.isButtonDisabled
       ? css`
           background-color: ${palette('grayscale', 1)};
         `
       : css`
           background-image: linear-gradient(to right, ${palette('primary', 3)}, ${palette('primary', 0)});
         `};
`;

export const JoinWrap = Styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
  margin-top : 100px;
  margin-bottom : 250px;
`;
