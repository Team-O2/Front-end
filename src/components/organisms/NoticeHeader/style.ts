import { Button } from 'components/atoms';
import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const Background = Styled.div`
  width: 100%;
  height: 310px;
  background-image: linear-gradient(to right,#36c8f5,#13e2dd );
`;

export const Text = Styled.div`
  display: flex;
  position:absolute;
  top: 60%;
  left: 30%;
  flex-direction: column;
  transform: translate( -50%, -50% );
  color: white;
  & p:nth-of-type(1) {
    ${theme('font.dp4')};
  }
  & p:nth-of-type(2) {
    ${theme('font.subhead4')};
}
`;

export const ConcertButton = Styled(Button)`
  margin-top:37px;
  margin-bottom:85px;
  border-radius: 4px;
  background-color: white;
  width: 175px;
  height: 44px;
  color: ${palette('primary', 0)};
  ${theme('font.subhead4')};
`;

export const NoticeHeaderWrapper = Styled.div`
  position: relative;
  margin-bottom: 138px;
  img {
    position: absolute;
    top: 15%;
    left: 60%;
  }
`;
