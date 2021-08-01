import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const NoticeWrapper = Styled.div`
  padding: 0px 80px 0px 80px;

  img {
    display:flex;
    margin:auto;
    margin-top:-40px;
  }

  h1 {
    ${theme('font.dp4')};
    padding:20px 0px 20px 0px;
    text-align: center;
    color: ${theme('grayscale', 9)};
  }

  p {
    ${theme('font.body3')};
    text-align: center;
    color: ${theme('grayscale', 9)};
  }
`;

export const ButtonWrapper = Styled.div`
  padding-top:50px;
  text-align: center;
  
  button:first-child {
    ${theme('font.subhead4')};
    color: ${palette('grayscale', 2)};
  }

  button:nth-child(2) {
    ${theme('font.subhead4')};
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
  background-color: #FFFFFF;
  width: 500px;
  height: 312px;
`;
