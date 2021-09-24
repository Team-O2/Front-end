import { Img } from 'components/atoms';
import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const Text = Styled.div`
  display: flex;
  color: ${palette('grayscale', 7)};
`;

export const Info = Styled.div`
  & span:nth-of-type(1) {
    ${theme('font.subhead3_eng')};
  }
  span {
    margin-right:20px;
    ${theme('font.body3')};
  }
  p {
    margin-top: 10px;
    ${theme('font.body2_eng')};
  }
  span:hover {
    cursor:pointer;
  }
`;

export const Member = Styled.div`
  display: flex;
  margin-left: 140px;
  ${theme('font.body1_eng')};
`;

export const Planner = Styled.div`
  margin-right: 50px;
  & p:nth-of-type(1) {
    ${theme('font.subhead1_eng')};
  }
`;
export const Designer = Styled.div`
  margin-right: 50px;
  & p:nth-of-type(1) {
    ${theme('font.subhead1_eng')};
  }
`;
export const Developer = Styled.div`
  margin-right: 50px;
  & p:nth-of-type(1) {
    ${theme('font.subhead1_eng')};
  }
`;
export const Server = Styled.div`
  margin-right: 50px;
  & p:nth-of-type(1) {
    ${theme('font.subhead1_eng')};
  }
`;

export const Logo = Styled.div`
  margin-right: 985px;
  margin-bottom: 27px;
`;

export const FooterWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fbfbfb;
  width: 100%;
  height: 278px;
`;

export const ModalContainer = Styled.div`
  display : flex;
  position : fixed;
  top : 0;
  right : 0;
  bottom : 0;
  left : 0;
  flex-direction : column;
  margin : auto;
  border-radius: 16px;
  background-color : ${palette('grayscale', 0)};
  padding : 50px 50px 40px 40px;
  width : 600px;
  height : 730px;
`;
export const TitleContainer = Styled.div`
  display: flex;
  justify-content: center;
`;

export const CloseImage = Styled(Img)`
  width : 16px;
  height : 16px;
`;

export const Title = Styled.p`
  ${theme('font.h1')};
  color : ${palette('grayscale', 9)};
  margin-right: 130px;
  margin-left: 130px;
`;

export const ContentContainer = Styled.div`
  width: 510px;
  height: 562px;
  color :'#525252';
  opacity: 0.8;
  overflow:scroll;
`;

export const Content = Styled.div`
  ${theme('font.body3')};
  ol {
    list-style-type: decimal;
    list-style-position : inside;
  }
  h1 {
    ${theme('font.subhead4')};
    margin-top: 40px;
  }
  h2 {
    ${theme('font.subhead3')};
    margin: 20px auto ;
  }
`;
