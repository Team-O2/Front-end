import { Img } from 'components/atoms';
import Styled, { css } from 'styled-components';
import { ifProp, palette, theme } from 'styled-tools';

export const Input = Styled.input<{ readOnly: boolean }>`
  border: none;
  ${ifProp('readOnly', theme('font.subhead3'), theme('font.body3'))};
  color: ${ifProp({ readOnly: true }, palette('grayscale', 4), palette('grayscale', 9))};
  background: ${ifProp('readOnly', palette('grayscale', 1))};
  width: 100%;
  height: 100%;
  padding: 18px 20px;
  border-radius: 4px;
  :placeholder{
    color: ${palette('grayscale', 2)};
  }
  :focus{
    outline: none;
  }
`;

export const InputContainer = Styled.div<{ width: string; height: string; condition: number; readOnly: boolean }>`
  /* condition 
    -1 : 기본
    0 : 컨디션 X
    1 : 컨디션 O   */
  ${(props) =>
    props.readOnly
      ? css`
          border: solid 1px ${palette('grayscale', 2)};
        `
      : props.condition == -1
      ? css`
          border: solid 1px ${palette('grayscale', 2)};
        `
      : props.condition == 1
      ? css`
          border: double 1px transparent;
          background-image: linear-gradient(white, white),
            linear-gradient(to right, ${palette('primary', 3)}, ${palette('primary', 0)});
          background-origin: border-box;
          background-clip: content-box, border-box;
        `
      : css`
          border: solid 1px ${palette('primary', 6)};
        `};
  border-radius : 4px;   
  display : flex;    
  align-items : center;  
  width : ${(props) => props.width};
  height : ${(props) => props.height};
  margin-bottom : 5px;
`;

export const ErrorImage = Styled(Img)`
  width : 24px;
  height : 24px;
  margin-right : 15px;
`;

export const ErrorMsg = Styled.div`
  ${theme('font.body2')};
  text-align : left;
  text-align: left;
  color: ${palette('primary', 6)};
`;

export const SStyledInput = Styled.div<{
  margin?: string;
}>`
  display : flex;
  flex-direction : column;
  margin : ${(props) => props.margin};
`;
