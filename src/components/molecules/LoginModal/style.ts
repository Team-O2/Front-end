import { Button } from 'components/atoms';
import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const LoginNotice = Styled.div`
  padding: 0px 80px 0px 80px;
  img {
    display:flex;
    margin:auto;
    margin-top:-40px;
  }
`;

export const LoginNoticeTitle = Styled.div`
  padding:20px 0px 20px 0px;
  text-align: center;
  color: #000000;
  ${theme('font.dp4')};
`;

export const LoginNoticeDetail = Styled.div`
  text-align: center;
  color: ${palette('grayscale', 9)};
  ${theme('font.body3')};
`;

export const ButtonContainer = Styled.div`
  padding-top:50px;
  text-align: center;
`;

export const CancelButton = Styled(Button)`
  color: ${palette('grayscale', 2)};
  ${theme('font.subhead4')};
`;

export const LoginButton = Styled(Button)`
  padding-left:170px;
  color: ${palette('primary', 5)};
  ${theme('font.subhead4')};
`;

export const LoginModalWrapper = Styled.div`
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
