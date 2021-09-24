import { Img } from 'components/atoms';
import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';
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
margin-bottom: 30px;
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
word-break: keep-all;
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background-color: #8b8b8b;
}
::-webkit-scrollbar-button {
  width: 0;
  height: 0;
}
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
