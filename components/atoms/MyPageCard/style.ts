import Styled from 'styled-components';
import { palette, prop, theme } from 'styled-tools';

export const Wrapper = Styled.span`
  display: inline-block;
`;

export const Text = Styled.p`
  ${theme('font.subhead2_eng')};
  color: ${palette('grayscale', 2)};
`;

export const Card = Styled.div<{ width?: string }>`
  margin: 10px 20px 0 0;
  width: ${prop('width')}px;
  height: 313px;
  flex-grow: 0;
  border-radius: 4px;
  background-color: #fbfbfb;
`;
