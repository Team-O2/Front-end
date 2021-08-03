import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const Main = Styled.div`
  position: relative;
  width: 271px;
  height: 220px;
  text-align: left;
  color: ${palette('grayscale', 0)};
  font-size: 20px;
  img {
    border-radius: 7px 7px 0px 0px;
    width: 271px;
    height: 220px;
  }
  p {
    position: absolute;
    bottom: 29px;
    z-index: 2;
    margin: auto 16px;
    font-family: 'AppleSDGothicNeo';
    font-weight: bold;
  }
`;

export const Overlay = Styled.div`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.5;
  z-index: 1;
  border-radius: 7px 7px 0px 0px;
  background-color: #000;
  width: 100%;
  height: 220px;
`;

export const Detail = Styled.div`
  margin : 16px;
  line-height: 22px;
  color: ${palette('grayscale', 6)};
  ${theme('font.subhead3')};
  & p:nth-of-type(2) {
    line-height: 21px;
    color: ${palette('grayscale', 4)};
    ${theme('font.body2')};
  }
`;

export const ConcertCardWrapper = Styled.div`
  border-radius: 7px;
  box-shadow: 0px 0px 24px rgba(13, 12, 63, 0.1);
  width: 271px;
  height: 299px;
`;
