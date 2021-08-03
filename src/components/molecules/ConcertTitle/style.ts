import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const ConcertTitleWrapper = Styled.div`
  color: ${palette('grayscale', 7)};
  ${theme('font.dp3_eng')};
  margin: 100px auto 110px;
`;
