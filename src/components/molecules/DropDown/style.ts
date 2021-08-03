import Styled from 'styled-components';
import { theme } from 'styled-tools';

export const Item = Styled.span<{ page: string }>`
  ${theme('font.body1')};
  font-size: 16px;
  width : 100%;
  display: block;
  color:${(props) => (props.page === 'adminwrite' ? '#0d0d0d' : '#8b8b8b')};
`;

export const SummaryOuter = Styled.div<{
  isOpen?: boolean;
  isChecked: boolean;
  page: string;
  isSetting?: boolean;
}>`
  cursor : pointer;
  width:${(props) => (props.isSetting ? '844px' : props.page === 'adminwrite' ? '412px' : '406px')};
  height:${(props) => (props.page === 'adminwrite' ? '60px' : '62.6px')};
  margin-top: 5px;
  border-radius: 4px;
  display : flex;
  align-items : center;
  border : ${(props) => (props.isOpen || props.isChecked ? 'double 1px transparent' : '1px solid #c1c1c1')};
  background-image : 
  ${(props) =>
    props.isOpen || props.isChecked
      ? 'linear-gradient(white, white), linear-gradient(to right, #36c8f5,#13e2dd)'
      : undefined};
  background-origin : 
  ${(props) => (props.isOpen || props.isChecked ? 'border-box' : undefined)};
  background-clip : 
  ${(props) => (props.isOpen || props.isChecked ? 'content-box, border-box' : undefined)};       
  position:${(props) => (props.page === 'adminwrite' ? 'relative' : undefined)};
`;

export const SummaryInner = Styled.div<{
  isOpen?: boolean;
  isChecked: boolean;
  page: string;
  isSetting?: boolean;
}>`
  display : flex;
  justify-content : space-between;
  align-items : center;
  width : 100%;
  padding : 0 15px 0 20px;
`;

export const SummaryValue = Styled.div`
  ${theme('font.body1')};
  font-size: 16px;
`;

export const Arrow = Styled.img`
  width: 17px;
  height: 10.4px;
`;

export const Line = Styled.div<{ page: string; isSetting?: boolean }>`
  padding : 0;
  width:${(props) => (props.isSetting ? '804px' : props.page === 'adminwrite' ? '100%' : '370px')};
  height : 1px;
  background-color : #dfdfdf;
  margin : 13px 0 14px 0 ;
`;

export const ListContainer = Styled.div<{ page: string; isSetting?: boolean }>`
  width:${(props) => (props.isSetting ? '844px' : props.page === 'adminwrite' ? '412px' : '406px')};
  max-height:${(props) => (props.page === 'adminwrite' ? '220px' : undefined)};
  overflow:${(props) => (props.page === 'adminwrite' ? 'scroll' : undefined)};
  margin-top: 5px;
  border: 1px solid #c1c1c1;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 20px 18px;
  position:${(props) => (props.page === 'adminwrite' ? 'absolute' : undefined)};
  z-index : 10;
  background-color : #ffffff;
`;

export const Label = Styled.label`
  position: relative;
  cursor: pointer;
`;

export const Input = Styled.input`
  -webkit-appearance: none;
  appearance: none;
  visibility: hidden;
  position: absolute;
  :checked + span {
    color: #36c8f5;
  }
`;
