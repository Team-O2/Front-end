import { Button, CheckBox, Label } from 'components/atoms';
import Styled from 'styled-components';
import { theme } from 'styled-tools';

export const PhotoUploadBottomDesc = Styled.div`
  ${theme('font.body2_eng')}
  color : #a5a5a5;
`;

export const PhotoUploadMiddleDesc = Styled.div`
  ${theme('font.subhead3')}
  color : #a5a5a5;
  text-align: center;
  margin-top :4px;
  margin-bottom : 20px;
`;

export const PhotoUploadImage = Styled.img`
  width : 38px;
  height : 38px;
`;

export const PhotoUploadContainer = Styled.div`
  width: 262px;
  height: 216px;
  background-color : #f2f2f2;
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : center;
`;

export const CheckExp = Styled.label`
  ${theme('font.body4')}
  color : #8b8b8b;
  display : flex;
  align-items : center;
`;

export const CheckImage = Styled.img`
  width : 24px;
  height : 24px;
  margin-right : 16px;
`;

export const SCheckBox = Styled(CheckBox)`
  display : none;
`;

export const PageLabel = Styled(Label)`
  margin-top : 60px;
  line-height: 1.5;
  letter-spacing: -0.5px;
  color : #3d3d3d;
  font-size: 16px;
`;

export const Title = Styled(Label)`
  ${theme('font.dp4')}
  margin-top:10px;
  margin-bottom : 110px;
  color:#3d3d3d;
`;

export const UploadContainer = Styled.div`
  width : 844px;
  display : flex;
  flex-direction : column;
`;

export const CheckContainer = Styled.div`
  margin-top : 200px;
  margin-bottom : 40px;
`;
export const ElementLabel = Styled(Label)`
  ${theme('font.subhead4')}
  color: #0d0d0d;
  margin-bottom :11px;
`;

export const OpenButton = Styled(Button)<{ isButtonDisabled?: boolean }>`
/* 버튼 색이 안바뀜 */
  ${theme('font.subhead3')}
  width: 406px;
  height: 60px;
  border-radius: 4px;
  color : #ffffff; 
  background-image : ${(props) =>
    !props.isButtonDisabled ? 'linear-gradient(to right, #36c8f5,#13e2dd )' : '#dfdfdf'};    
  background-color : ${(props) => (props.isButtonDisabled ? '#dfdfdf' : undefined)};
  margin-bottom : 304px;
`;

export const Wrapper = Styled.div`
  display : flex;
  flex-direction: column;
  align-items: center;
`;
