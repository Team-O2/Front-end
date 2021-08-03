import Styled from 'styled-components';
import { theme } from 'styled-tools';

export const Item = Styled.span`
  ${theme('font.body1')};
  font-size: 16px;
  width : 100%;
  display: block;
  color: #8b8b8b;
`;

export const SummaryOuter = Styled.div<{
  isOpen?: boolean;
  isChecked: boolean;
}>`
  cursor : pointer;
  width:844px;
  height:62.6px;
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
`;

export const SummaryInner = Styled.div`
  display : flex;
  justify-content : space-between;
  align-items : center;
  width : 100%;
  height: 100%;
  padding : 0 15px 0 20px;
`;

export const SummaryValue = Styled.div<{ state: string[] }>`
  ${theme('font.body1')};
  font-size: 16px;
  color: ${(props) => props.state.length === 0 && '#c1c1c1'};
`;

export const Arrow = Styled.img`
  width: 17px;
  height: 10.4px;
`;

export const Line = Styled.div`
  padding : 0;
  width:804px;
  height : 1px;
  background-color : #dfdfdf;
  margin : 13px 0 14px 0 ;
`;

export const ListContainer = Styled.div`
  width:844px;
  height: 212px;
  margin-top: 5px;
  border: 1px solid #c1c1c1;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 20px 18px;
  z-index : 10;
  background-color : #ffffff;
  overflow-y: scroll;
  ::-webkit-scrollbar {    
      width: 4px;  
      height: 38px;
  }  
  /* Track */  
  ::-webkit-scrollbar-track {    
      background: none;  
  }  
  /* Handle */  
  ::-webkit-scrollbar-thumb {   
      background: #dfdfdf;    
      border-radius: 20px;  
  }  
  /* Handle on hover */  
  ::-webkit-scrollbar-thumb:hover {    
      background: #c1c1c1;  
  }
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
