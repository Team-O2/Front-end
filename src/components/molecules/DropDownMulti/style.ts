import Styled, { css } from 'styled-components';
import { palette, theme } from 'styled-tools';

export const Item = Styled.span`
  ${theme('font.body1')};
  font-size: 16px;
  width: 100%;
  display: block;
  color: ${palette('grayscale', 4)};
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
  ${(props) =>
    props.isOpen || props.isChecked
      ? css`
          border: double 1px transparent;
          background-image: linear-gradient(white, white),
            linear-gradient(to right, ${palette('primary', 3)}, ${palette('primary', 0)});
          background-origin: border-box;
          background-clip: content-box, border-box;
        `
      : css`
          border: 1px solid ${palette('grayscale', 1)};
        `};   
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
  color: ${(props) => props.state.length === 0 && `${palette('grayscale', 2)}`};
`;

export const Arrow = Styled.img`
  width: 17px;
  height: 10.4px;
`;

export const Line = Styled.div`
  padding : 0;
  width:804px;
  height : 1px;
  background-color : ${palette('grayscale', 1)};
  margin : 13px 0 14px 0 ;
`;

export const ListContainer = Styled.div`
  width:844px;
  height: 212px;
  margin-top: 5px;
  border: 1px solid ${palette('grayscale', 2)};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 20px 18px;
  z-index : 10;
  background-color : ${palette('grayscale', 0)};
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
      background: ${palette('grayscale', 1)};    
      border-radius: 20px;  
  }  
  /* Handle on hover */  
  ::-webkit-scrollbar-thumb:hover {    
      background: ${palette('grayscale', 2)};  
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
    color: ${palette('primary', 3)};
  }
`;
