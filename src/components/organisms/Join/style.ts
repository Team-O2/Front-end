import { Button, Label } from 'components/atoms';
import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const InterestButtonWrapper = Styled.div`
  display : flex;
  flex-direction : row;
  justify-content : center;
  flex-wrap: wrap;
`;

export const InterestButton = Styled(Button)<{ order: number }>`
  ${theme('font.subhead4')}
  background-color :  ${(props) =>
    props.order == 0
      ? `${palette('primary', 0)}`
      : props.order == 1
      ? `${palette('primary', 3)}`
      : props.order == 2
      ? `${palette('primary', 2)}`
      : props.order == 3
      ? `${palette('primary', 5)}`
      : props.order == 4
      ? `${palette('primary', 4)}`
      : `${palette('grayscale', 0)}`}};
  padding : 12px 30px;
  margin : 12px 5px;
  height : 48px;
  border-radius: 60px;
  border: solid 1px ${palette('grayscale', 4)};
  border-color : ${(props) =>
    props.order == 0
      ? `${palette('primary', 0)}`
      : props.order == 1
      ? `${palette('primary', 3)}`
      : props.order == 2
      ? `${palette('primary', 2)}`
      : props.order == 3
      ? `${palette('primary', 5)}`
      : props.order == 4
      ? `${palette('primary', 4)}`
      : `${palette('grayscale', 0)}`}};
  color : ${(props) => (props.order == -1 ? `${palette('grayscale', 4)}` : `${palette('grayscale', 0)}`)}
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
  background-color : ${(props) =>
    props.selectedInterest.length > 0 ? `${palette('grayscale', 9)}` : `${palette('grayscale', 1)}`};
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
  background-color : ${(props) => (props.isButtonDisabled ? `${palette('grayscale', 1)}` : undefined)};
  background-image : ${(props) =>
    !props.isButtonDisabled
      ? `linear-gradient(to right, ${palette('primary', 3)},${palette('primary', 0)} )`
      : undefined};
`;

export const JoinWrap = Styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
  margin-top : 100px;
  margin-bottom : 250px;
`;
