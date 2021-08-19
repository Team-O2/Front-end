import { Button } from 'components/atoms';
import Styled from 'styled-components';
import { ifProp, palette, theme } from 'styled-tools';

export const PageNumber = Styled(Button)<{ isSelected?: boolean }>`
  ${theme('font.subhead4_eng')};
  color: ${ifProp('isSelected', '#03b6ce', '#6f6f6f')};
`;

export const PageNavi = Styled(Button)`
  margin: 0 25px;
`;

export const Title = Styled.h2`
  ${theme('font.dp2')};
  margin-bottom: 14px;
  color: ${palette('grayscale', -3)};
`;

export const SubTitle = Styled.h4`
  ${theme('font.body3')};
  margin-bottom: 60px;
  color: ${palette('grayscale', -4)};
`;

export const TagContainer = Styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  button {
    margin-right: 10px;
    ${ifProp({ name: '공지사항' }, theme('font.body4'), theme('font.body4_eng'))};
  }
`;

export const ButtonContainer = Styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  button:first-child {
    ${theme('font.body4')};
    margin-right: 17px;
    color: ${palette('grayscale', 4)};
  }
  button:nth-child(2) {
    ${theme('font.subhead4')};
    margin-right: 17px;
    color: ${palette('grayscale', 5)};
  }
`;

export const CommentContainer = Styled.div`
  width: 100%;
`;

export const NavigationContainer = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 24px;
    height: 24px;
  }

  ul li {
    margin: 0 15px;
    float: left;
  }
`;

export const Wrapper = Styled.div`
  width: 1062px;
`;
