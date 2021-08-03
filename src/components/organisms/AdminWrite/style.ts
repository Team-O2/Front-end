import { Button, Label } from 'components/atoms';
import Styled from 'styled-components';
import { theme } from 'styled-tools';

export const PageLabel = Styled(Label)`
  margin-top : 60px;
  line-height: 1.5;
  letter-spacing: -0.5px;
  color : #3d3d3d;
  font-size: 16px;
`;

export const Title = Styled(Label)`
  ${theme('font.dp4')}
  margin-top:10px;
  margin-bottom : 110px;
  color:#3d3d3d;
`;

export const WriteButton = Styled(Button)<{ isButtonDisabled?: boolean }>`
/* 버튼 색이 안바뀜 */
  ${theme('font.subhead3')}
  width: 406px;
  height: 60px;
  border-radius: 4px;
  color : #ffffff; 
  background-color : ${(props) => (props.isButtonDisabled ? '#dfdfdf' : undefined)};
  background-image : ${(props) =>
    !props.isButtonDisabled ? 'linear-gradient(to right, #36c8f5,#13e2dd )' : undefined};        
  margin-bottom : 304px;
`;

export const Wrapper = Styled.div`
  display : flex;
  flex-direction: column;
  align-items: center;
`;
