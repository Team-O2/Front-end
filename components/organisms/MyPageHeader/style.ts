import { Icon } from 'components/atoms';
import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const Wrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserInfo = Styled.div`
  margin-right: 50px;
`;

export const Thumbnail = Styled(Icon)`
  width : 74px;
  height : 74px;
  margin-bottom: 36px;
  border: solid 1px ${palette('grayscale', 0)};
`;

export const Text = Styled.p`
  ${theme('font.dp1')};
  color: ${palette('grayscale', 0)};
`;

export const TextEng = Styled.span`
  ${theme('font.dp1_eng')};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-image: linear-gradient(to right, ${palette('primary', 3)}, ${palette('primary', 0)});
`;

export const EditIcon = Styled(Icon)`
  margin: 10px 0 0 20px;
`;

export const Tag = Styled.div`
  ${theme('font.body3')};
  margin-top: 40px;
  color: ${palette('grayscale', 1)};
`;
