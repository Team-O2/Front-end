import { Button } from 'components/atoms';
import Styled from 'styled-components';
import { theme } from 'styled-tools';

export const LabelIcon = Styled.img`
width: 20px;
height: 20px;
margin: 0 0 0 1px;
object-fit: contain;
`;

export const Label = Styled.div<{ isOpened?: boolean; isEnglish: boolean }>`
font-size: 16px;
line-height: 1.25;
letter-spacing: normal;
text-align: left;
font-family : ${(props) => (props.isEnglish ? 'HomepageBaukasten' : 'AppleSDGothicNeo')};
fontWeight : ${(props) => (props.isOpened ? 'bold' : 'normal')};
:hover{
  font-weight: bold;
}
`;

export const Title = Styled(Button)`
display : flex;
align-items : center;
justify-content : center;
color : #3d3d3d;
`;

export const Detail = Styled.div`
width : 100%;
display : flex;
justify-content:center;
`;

export const DetailContainer = Styled.div`
width : 98px;
display : flex;
flex-direction : column;
align-items : center;
position : relative;
margin-top : 20px;
`;

export const DetailBtnContainer = Styled.div`
width : 100px;
display : flex;
flex-direction : column;
max-height : 229px;
overflow-y: scroll;
align-items : center;
::-webkit-scrollbar {
width: 0.3rem;
}
::-webkit-scrollbar-track {
  background: none;
}
::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 0.5rem;
  box-sizing: border-box;
}
::-webkit-scrollbar-thumb:hover {
  background: #c1c1c1;
}
`;

export const DetailBtn = Styled(Button)`
${theme('font.body2_eng')}
height: 18px;
margin: 5px 0;
color : #8b8b8b;
white-space: nowrap;
:hover{
  ${theme('font.subhead2_eng')};
}
`;

export const FakeBtn = Styled(Button)`
color : rgba(0,0,0,0);
line-height : 30px;
`;

export const Hide = Styled.div`
width : 100%;
height : 36px;
background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff);
position : absolute;
bottom : 0px;
`;

export const Wrapper = Styled.div`
display : flex;
flex-direction: column;
align-items : center;
justify-content : center; 
`;
