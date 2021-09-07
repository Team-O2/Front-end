import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const NoticeWrapper = Styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    ${theme('font.h1')};
    text-align: center;
    color: ${theme('grayscale', 9)};
    margin-bottom: 8px;
  }

  p {
    ${theme('font.body2')};
    text-align: center;
    color: ${theme('grayscale', 9)};
  }
`;

export const ImgWrapper = Styled.div`
  display: flex;
  justify-content: center;
  margin-top: -30px;
  margin-bottom: 12px;
`;

export const ButtonWrapper = Styled.div`
  padding-top: 32px;
  text-align: center;
  
  button:first-child {
    ${theme('font.subhead3')};
    color: ${palette('grayscale', 2)};
  }

  button:nth-child(2) {
    ${theme('font.subhead3')};
    padding-left:170px;
    color: ${palette('primary', 7)};
  }
`;

export const Wrapper = Styled.div`
  position: fixed;
  top:0;
  right:0;
  bottom:0;
  left:0;
  margin:auto;
  border-radius: 16px;
  border: solid 1px ${palette('primary', 7)};
  background-color: ${palette('grayscale', 0)};
  width: 330px;
  height: 200px;
`;
