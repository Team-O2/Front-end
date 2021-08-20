import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const FormInputContainer = Styled.div``;

export const InputWrapper = Styled.div`
  margin-bottom: 50px;
`;

export const Title = Styled.div`
  ${theme('font.subhead4')};
  width: 844px;
  margin-bottom: 10px;
  color: ${palette('grayscale', 9)};
`;
