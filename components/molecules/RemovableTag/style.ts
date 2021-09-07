import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const RemovableContainer = Styled.div`
  ${theme('font.subhead3')};
  margin-right: 10px;
  padding: 12px 30px;
  border-radius: 60px;
  border: solid 1px ${palette('primary', 5)};
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${palette('primary', 5)};

  p {
    margin-right: 10px;
  }

  div {
    width: 14px;
  }
`;
