import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const ConfirmModalWrapper = Styled.div`
  position: fixed;
  top:0;
  right:0;
  bottom:0;
  left:0;
  margin:auto;
  border-radius: 16px;
  background-color: ${palette('grayscale', 0)};
  width: 500px;
  height: 613px;
`;

export const ConfirmDetail = Styled.div`
  padding: 80px 80px 80px;

  h1{
    ${theme('font.h1')};
    color: ${palette('grayscale', 7)};
  }
  h2{
    padding-top:10px;
    padding-bottom:30px;
    color: ${palette('grayscale', 4)};
    ${theme('font.body3')};
  }
  img{
    margin-right: 8px;
  }
  h4{
    text-align: center;
    color: ${palette('grayscale', 7)};
    ${theme('font.body2')};
  }
  h5{
    padding-top:12px;
    text-align: center;
    color: ${palette('primary', 6)};
    ${theme('font.body2')};
  }
`;

export const DetailContent = Styled.div`
  border-radius: 30px;
  padding: 20px 40px 40px 40px;
  height:192px;
  text-align:left;
  background-color: #f9f9f9;

  h3{
    display:inline-block;
    padding-top:20px;
    width: calc(100% - 150px);
    text-align:left;
    color: ${palette('grayscale', 7)};
    ${theme('font.body2')};
  }
  p{
    display:inline-block;
    text-align:left;
    color: ${palette('grayscale', 7)};
    ${theme('font.subhead3')};
  }
  `;

export const CautionWrapper = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const ModalButton = Styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border:none;
  border-radius: 0px 0px 16px 16px;
  background: linear-gradient(91.91deg, ${palette('primary', 3)} 7.34%, ${palette('primary', 0)} 90.35%);
  width:500px;
  height:64px;

  img{
    display:inline-block;
    margin-right: 10px;
  }
  p{
    display:inline-block;
    border:none;
    border-radius: 0px 0px 16px 16px;
    background: linear-gradient(91.91deg, ${palette('primary', 3)} 7.34%, ${palette('primary', 0)} 90.35%);
    color: ${palette('grayscale', 0)};
    ${theme('font.subhead3')};
  }

`;
