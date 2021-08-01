import { Button } from 'components/atoms';
import Styled from 'styled-components';

export const LoginformWrap = Styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
`;
export const LoginBtn = Styled(Button)`
  margin-top : 14px;
  border-radius: 4px;
  background-image: linear-gradient(to right, #36c8f5,#13e2dd );
  width: 406px;
  height: 60px;
  color : #ffffff;
  font-size : 16px;
  font-weight : bold;
`;
