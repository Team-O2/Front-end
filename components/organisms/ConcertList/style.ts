import { Button } from 'components/atoms';
import Styled from 'styled-components';
import { ifProp, theme } from 'styled-tools';

export const PageNumber = Styled(Button)<{ isSelected?: boolean }>`
  ${theme('font.subhead4_eng')};
  color: ${ifProp('isSelected', '#03b6ce', '#6f6f6f')};
`;

export const PageNavi = Styled(Button)`
  margin: 0 25px;
`;

export const NavigationContainer = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px auto 76px;
  img {
    width: 24px;
    height: 24px;
  }
  ul li {
    float: left;
    margin: 0 15px;
  }
`;

export const ConcertListWrapper = Styled.div`
  margin-top: 60px;
`;
