import { Button, CheckBox } from 'components/atoms';
import Styled from 'styled-components';
import { theme } from 'styled-tools';

export const BiggerCheckBox = Styled(CheckBox)`
  display:none;
  margin-right : 16px;
  width : 22px;
  height : 22px
`;
export const SmallerCheckBox = Styled(CheckBox)`
  display:none;
  margin-right : 16px;
  width : 22px;
  height : 22px
`;

export const PolicyCheck = Styled.div`
  display : flex;
  align-items : center;
  justify-content : space-between;
  margin-top : 19px;
  width : 406px;
`;

export const Line = Styled.div`
  margin-top : 18px;
  background-color: #c4c4c4;
  width: 406px;
  height: 2px;
`;
export const Label = Styled.label`
  ${theme('font.body2')};
  display : flex;
  align-items : center;
  vertical-align : center;
  width : 320px;
`;
export const BiggerLabel = Styled.label`
  ${theme('font.body2')};
  font-size : 16px;
  display : flex;
  align-items : center;
`;

export const MoreBtn = Styled(Button)`
  ${theme('font.body2')};
  color : #a5a5a5;
`;

export const Titie = Styled.div`
  ${theme('font.h1')};
  margin-bottom : 40px;
  text-align: left;
  color : #0d0d0d;
`;

export const Content = Styled.p`
  ${theme('font.body1')};
  font-size: 16px;
  height : 100%;
  overflow: scroll;
  text-align: left;
  color: #525252;
`;

export const CloseImage = Styled.img`
  position : absolute;
  top : 54px;
  right : 44px;
  width : 16px;
  height : 16px;
`;

export const FlexContainer = Styled.div`
  display : flex;
  align-items : center;
`;

export const ModalContainer = Styled.div`
  display : flex;
  position : fixed;
  top : 0;
  right : 0;
  bottom : 0;
  left : 0;
  flex-direction : column;
  align-items : center;
  margin : auto;
  border-radius: 16px;
  background-color : #ffffff;
  padding : 50px 50px 40px 40px;
  width : 600px;
  height : 730px;
`;

export const CheckAllImg = Styled.img`
  margin-right : 16px;
  width : 20px;
  height : 20px;
`;

export const CheckImg = Styled.img`
  margin-right : 17px;
  margin-left : 3.7px;
  width: 14.7px;
  height: 10.1px;
`;

export const Wrapper = Styled.div`
  display : flex;
  flex-direction: column;
  align-items : center;
`;
