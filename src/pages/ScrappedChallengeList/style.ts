import Styled from 'styled-components';
import { palette } from 'styled-tools';

export const NoContents = Styled.div`
  margin: 100px 0 70vh 0;
  color: ${palette('grayscale', 2)};
`;

export const Header = Styled.div`
  margin: 100px;
  text-align: center;
  color: ${palette('grayscale', 7)};
`;

export const Wrapper = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
