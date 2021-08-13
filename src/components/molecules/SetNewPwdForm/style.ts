import Styled, { css } from 'styled-components';
import { palette, theme } from 'styled-tools';

export const InputWrapper = Styled.div`
  margin-bottom: 14px;
`;

interface IBtn {
  isActive: boolean;
}

export const Btn = Styled.div<IBtn>`
  ${theme('font.subhead3')};
  cursor: pointer;
  width: 406px;
  height: 60px;
  border-radius: 4px;
  background-color: ${palette('grayscale', 1)};
  ${(props) =>
    props.isActive &&
    css`
      background-image: linear-gradient(to right, ${palette('primary', 3)}, ${palette('primary', 0)});
    `}
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${palette('grayscale', 0)};
`;
