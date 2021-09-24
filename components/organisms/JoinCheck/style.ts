import { Button, Img } from 'components/atoms';
import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const BiggerCheckBox = Styled.input`
  display:none;
  margin-right : 16px;
  width : 22px;
  height : 22px
`;
export const SmallerCheckBox = Styled.input`
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
  background-color: ${palette('grayscale', 10)};
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
  color : ${palette('grayscale', 3)};
`;

export const FlexContainer = Styled.div`
  display : flex;
  align-items : center;
`;

export const ImgWrapper = Styled.div`
  margin-right : 14px;
`;

export const CheckAllImg = Styled(Img)`
  margin-right : 16px;
  width : 20px;
  height : 20px;
`;

export const CheckImg = Styled(Img)`
  margin-right : 17px;
  margin-left : 3.7px;
  width: 14.7px;
  height: 10.1px;
`;

export const Wrapper = Styled.div`
  display : flex;
  flex-direction: column;
  align-items : center;
  padding-top : 16px;
`;
