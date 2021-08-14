import Styled from 'styled-components';
import { palette } from 'styled-tools';

export const ButtonWrapper = Styled.div`
display : flex;
align-items : center;
margin-left : 50px;
height : 60px;
`;

export const HeaderButton = Styled.img`
margin-right : 20px;
width : 32px;
`;

export const HeaderWrapper = Styled.div`
position: fixed;
top:0;
left:0;
z-index:999;
background-color : ${palette('grayscale', 8)};
width : 100vw;
height : 60px;
`;

export const HideWrap = Styled.div`
width : 100vw;
height : 60px;
`;
