import { Button, Label } from 'components/atoms';
import Styled, { css } from 'styled-components';
import { palette, theme } from 'styled-tools';

export const InterestButtonWrapper = Styled.div`
  display : flex;
  flex-direction : row;
  justify-content : center;
  flex-wrap: wrap;
`;

export const InterestButton = Styled(Button)<{ order: number }>`
  ${theme('font.subhead4')}
  border: solid 1px ${palette('grayscale', 4)};
  ${(props) =>
    props.order == 0
      ? css`
          background-color: ${palette('primary', 0)};
          border-color: ${palette('primary', 0)};
        `
      : props.order == 1
      ? css`
          background-color: ${palette('primary', 3)};
          border-color: ${palette('primary', 3)};
        `
      : props.order == 2
      ? css`
          background-color: ${palette('primary', 2)};
          border-color: ${palette('primary', 2)};
        `
      : props.order == 3
      ? css`
          background-color: ${palette('primary', 5)};
          border-color: ${palette('primary', 5)};
        `
      : props.order == 4
      ? css`
          background-color: ${palette('primary', 4)};
          border-color: ${palette('primary', 4)};
        `
      : css`
          background-color: ${palette('grayscale', 0)};
          border-color: ${palette('grayscale', 4)};
        `}};
  padding : 12px 30px;
  margin : 12px 5px;
  height : 48px;
  border-radius: 60px;
  ${(props) =>
    props.order == -1
      ? css`
          color: ${palette('grayscale', 4)};
        `
      : css`
          color: ${palette('grayscale', 0)};
        `};
  ;
`;

export const ModalButton = Styled(Button)<{ selectedInterest: string[] }>`
  width: 406px;
  height: 60px;
  padding: 19px 172px 19px 170px;
  border-radius: 4px;
  background-color : ${palette('grayscale', 1)}; 
  ${theme('font.subhead3')}
  color : ${palette('grayscale', 0)};
  margin-top : 38px;
   ${(props) =>
     props.selectedInterest.length > 0
       ? css`
           background-color: ${palette('grayscale', 9)};
         `
       : css`
           background-color: ${palette('grayscale', 1)};
         `};
`;

export const ModalLabel = Styled(Label)`
  ${theme('font.h1')}
  color : ${palette('grayscale', 9)};
  margin-bottom : 38px;
`;

export const ModalWrapper = Styled.div`
  position : fixed;
  top : 0;
  left : 0;
  right : 0;
  bottom : 0;
  margin : auto;
  width : 1030px;
  height : 614px;
  border-radius: 16px;
  padding: 40px 100px;
  box-shadow: -4px 11px 24px 0 rgba(13, 12, 63, 0.1);
  background-color : ${palette('grayscale', 0)};
  display : flex;
  flex-direction : column;
  align-items : center;
`;

export const JoinLabel = Styled(Label)`
  font-size: 40px;
  font-weight: bold;
  margin-bottom : 20px;
`;

export const JoinButton = Styled(Button)<{ isButtonDisabled: boolean }>`
  width: 406px;
  height: 60px;
  border-radius: 4px;
  font-size : 16px;
  font-weight : bold;     
  color : ${palette('grayscale', 0)}; 
  margin-top : 60px;
   ${(props) =>
     props.isButtonDisabled
       ? css`
           background-color: ${palette('grayscale', 1)};
         `
       : css`
           background-image: linear-gradient(to right, ${palette('primary', 3)}, ${palette('primary', 0)});
         `};
`;

export const JoinWrap = Styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
  margin-top : 100px;
  margin-bottom : 250px;
`;
