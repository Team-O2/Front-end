import Styled from 'styled-components';
import { theme } from 'styled-tools';

export const Input = Styled.input`
  border : none;
  ${theme('font.body1')};
  font-size: 16px;  
  color : #0d0d0d;
  text-align: left;
  width : 100%;
  height : 100%;
  padding: 18px 20px;
  border-radius: 4px;
  font-style: AppleSDGothicNeo;
  :placeholder{
    color : #c1c1c1;
  }
  :focus{
    outline : none;
  }
`;

export const InputContainer = Styled.div<{ width: string; height: string; condition: number }>`
  /* condition 
    -1 : 기본
    0 : 컨디션 X
    1 : 컨디션 O   */
  border : ${(props) =>
    props.condition == -1
      ? 'solid 1px #c1c1c1'
      : props.condition == 1
      ? 'double 1px transparent'
      : 'solid 1px #f66436'};
  background-image : ${(props) =>
    props.condition == 1 && 'linear-gradient(white, white), linear-gradient(to right, #36c8f5,#13e2dd)'};
  background-origin : ${(props) => props.condition == 1 && 'border-box'};
  background-clip : ${(props) => props.condition == 1 && 'content-box, border-box'};
  border-radius : 4px;   
  display : flex;    
  align-items : center;  
  width : ${(props) => props.width};
  height : ${(props) => props.height};
  margin-bottom : 5px;
`;

export const ErrorImage = Styled.img`
  width : 24px;
  height : 24px;
  margin-right : 15px;
`;

export const ErrorMsg = Styled.div`
  ${theme('font.body2')};
  text-align : left;
  text-align: left;
  color: #f66436;
`;

export const SStyledInput = Styled.div<{
  margin?: string;
}>`
  display : flex;
  flex-direction : column;
  margin : ${(props) => props.margin};
`;
