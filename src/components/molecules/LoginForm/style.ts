import { Button } from 'components/atoms';
import Styled from 'styled-components';
import { palette } from 'styled-tools';

export const LoginformWrap = Styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
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
