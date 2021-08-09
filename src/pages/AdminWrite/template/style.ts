import { Button, Label } from 'components/atoms';
import Styled, { css } from 'styled-components';
import { palette, theme } from 'styled-tools';

export const PageLabel = Styled(Label)`
  margin-top : 60px;
  line-height: 1.5;
  letter-spacing: -0.5px;
  color : ${palette('grayscale', 7)};
  font-size: 16px;
`;

export const Title = Styled(Label)`
  ${theme('font.dp4')}
  margin-top:10px;
  margin-bottom : 110px;
  color:${palette('grayscale', 7)};
`;

export const WriteLabel = Styled(Label)`
  ${theme('font.subhead4')};
  width : 844px;
  color: ${palette('grayscale', 9)};
  margin-bottom : 8px;
`;

export const WriteButton = Styled(Button)<{ isButtonDisabled?: boolean }>`
/* 버튼 색이 안바뀜 */
  ${theme('font.subhead3')}
  width: 406px;
  height: 60px;
  border-radius: 4px;
  color : ${palette('grayscale', 0)}; 
  ${(props) =>
    props.isButtonDisabled
      ? css`
          background-color: ${palette('grayscale', 1)};
        `
      : css`
          background-image: linear-gradient(to right, ${palette('primary', 3)}, ${palette('primary', 0)});
        `}
  margin-bottom : 304px;
`;

export const Wrapper = Styled.div`
  display : flex;
  flex-direction: column;
  align-items: center;
`;
