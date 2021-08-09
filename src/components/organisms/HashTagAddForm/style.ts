import { Input } from 'components/atoms';
import Styled, { css } from 'styled-components';
import { palette, theme } from 'styled-tools';

export const HashTagInput = Styled(Input)`
  ${theme('font.body2')};
  width : 100%;
  height : 100%;
  border-radius:4px;
  padding : 18px 20px;
`;

export const HashTag = Styled.div`
  ${theme('font.body2')};
  padding : 5px 10px;
  background-color: #f5f5f5;
  color : ${palette('grayscale', 3)};
  min-height : 31px;
  max-width : 100%;
  white-space : break-all;
  border-radius: 50px;
  margin-bottom:10px;
`;

export const HashTagInputContainer = Styled.div<{ isFocused: boolean }>`
  ${(props) =>
    props.isFocused
      ? css`
          border: double 1px transparent;
          background-image: linear-gradient(white, white),
            linear-gradient(to right, ${palette('primary', 3)}, ${palette('primary', 0)});
          background-origin: border-box;
          background-clip: content-box, border-box;
        `
      : css`
          border: 1px solid ${palette('grayscale', 2)};
        `};
  width : 100%;
  height : 60px;
  border-radius: 4px;
`;

export const HashTagContainer = Styled.div`
  width : 100%;
  display : flex;
  column-gap: 10px;
  flex-direction: row;
  flex-wrap : wrap;
  margin-top : 20px;
  margin-bottom : 130px;
`;
export const Wrapper = Styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
  width : 844px;
  input{
    border : none;
    :focus{
        outline : none;
      }
  }
`;
