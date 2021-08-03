import { Button } from 'components/atoms';
import Styled from 'styled-components';
import { ifProp, theme } from 'styled-tools';

export const CategoryBtn = Styled(Button)<{ isCategoryClicked?: boolean; readMore?: boolean }>`
  white-space : nowrap; 
  color: ${ifProp('isCategoryClicked', '#ffffff', ifProp('readMore', '#8b8b8b', '#03b6ce'))};
  ${theme('font.subhead3')};
`;

export const CategoryButtonWrapper = Styled(Button)<{ isCategoryClicked?: boolean; readMore?: boolean }>`
  height: 46px;
  border-radius: 60px;
  padding: 12px 30px;
  margin-right: 10px;
  background-color:${ifProp('isCategoryClicked', '#03b6ce', '#ffffff')};
  border: ${({ isCategoryClicked }) =>
    isCategoryClicked ? '1px solid #03b6ce' : ({ readMore }) => (readMore ? '1px solid #8b8b8b' : '1px solid #03b6ce')};
`;
