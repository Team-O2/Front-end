import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const RegisterSubmitWrapper = Styled.div`
    position: fixed;
    top:0;
    right:0;
    bottom:0;
    left:0;
    margin:auto;
    border-width: 1px;
    border-style: solid;
    border-radius: 16px;
    border-color:${palette('primary', 3)};
    background-color: ${palette('grayscale', 0)};
    width: 500px;
    height: 273px;

    img{
      display:flex;
      margin:auto;
      margin-top:-40px;
    }
    h5{
      background: linear-gradient(to right, ${palette('primary', 3)}, ${palette('primary', 0)});
      -webkit-background-clip: text;
      background-clip: text;
      padding-bottom:20px;
      text-align: center;
      -webkit-text-fill-color: transparent;
      ${theme('font.dp4')};
    }
    p{
      text-align: center;
      ${theme('font.body3')};
    }
`;

export const ImgWrapper = Styled.div`
  display: flex;
  justify-content: center;
  margin-top: -40px;
  margin-bottom: 12px;
`;

export const ButtonWrapper = Styled.div`
  padding-top: 32px;
  text-align: center;
  
  button:first-child {
    ${theme('font.subhead3')};
    color: ${palette('grayscale', 3)};
  }
`;
