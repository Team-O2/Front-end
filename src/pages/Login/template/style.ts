import { Button, Label } from 'components/atoms';
import Styled from 'styled-components';
import { palette } from 'styled-tools';

export const Line = Styled.img`
background-color : ${palette('grayscale', 4)};
width : 1px;
height : 16px;
object-fit : contain;
`;

export const LoginBtn = Styled(Button)`
  margin-top : 14px;
  border-radius: 4px;
  background-image: linear-gradient(to right, ${palette('primary', 3)},${palette('primary', 0)} );
  width: 406px;
  height: 60px;
  color : ${palette('grayscale', 0)};
  font-size : 16px;
  font-weight : bold;
`;

export const JoinBtn = Styled(Button)`
margin-left : 15px;
line-height : 1.5;
color : ${palette('grayscale', 4)};
font-family: AppleSDGothicNeo;
font-size : 16px;
font-weight : bold;
`;

export const FindPwdBtn = Styled(Button)`
margin-right : 15px;
line-height : 1.5;
color : ${palette('grayscale', 4)};
font-family: AppleSDGothicNeo;
font-size : 16px;
`;

export const ButtonWrapper = Styled.div`
display : flex;
align-items: center;
margin-top : 20px;
`;

export const LoginLabel = Styled(Label)`
margin-bottom : 60px;
font-size: 40px;
font-weight: bold;
`;

export const LoginContainer = Styled.div`
display : flex;
position: relative;
top: -60px;
flex-direction : column;
align-items : center;
justify-content: center;
width: 100%;
height: 100vh;
`;
