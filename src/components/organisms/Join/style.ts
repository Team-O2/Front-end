import { Button, Label } from 'components/atoms';
import Styled from 'styled-components';
import { theme } from 'styled-tools';

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
      ? '#13E2DD'
      : props.order == 1
      ? '#36C8F5'
      : props.order == 2
      ? '#58E2FF'
      : props.order == 3
      ? '#03B6CE'
      : props.order == 4
      ? '#00BAFA'
      : '#ffffff'}};
  padding : 12px 30px;
  margin : 12px 5px;
  height : 48px;
  border-radius: 60px;
  border: solid 1px #8b8b8b;
  border-color : ${(props) =>
    props.order == 0
      ? '#13E2DD'
      : props.order == 1
      ? '#36C8F5'
      : props.order == 2
      ? '#58E2FF'
      : props.order == 3
      ? '#03B6CE'
      : props.order == 4
      ? '#00BAFA'
      : '#8b8b8b'};
  color : ${(props) => (props.order == -1 ? '#8b8b8b' : '#ffffff')}
  ;
`;

export const ModalButton = Styled(Button)<{ selectedInterest: string[] }>`
  width: 406px;
  height: 60px;
  padding: 19px 172px 19px 170px;
  border-radius: 4px;
  background-color : #dfdfdf; 
  ${theme('font.subhead3')}
  color : #ffffff;
  margin-top : 38px;
  background-color : ${(props) => (props.selectedInterest.length > 0 ? '#0d0d0d' : '#dfdfdf')};
`;

export const ModalLabel = Styled(Label)`
  ${theme('font.h1')}
  color : #0d0d0d;
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
  background-color : #ffffff;
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
  color : #ffffff; 
  margin-top : 60px;
  background-color : ${(props) => (props.isButtonDisabled ? '#dfdfdf' : undefined)};
  background-image : ${(props) =>
    !props.isButtonDisabled ? 'linear-gradient(to right, #36c8f5,#13e2dd )' : undefined};
`;

export const JoinWrap = Styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
  margin-top : 100px;
  margin-bottom : 250px;
`;
