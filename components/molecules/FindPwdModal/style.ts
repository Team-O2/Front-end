import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const SuccessModal = Styled.div`
    position : fixed;
    top : 0;
    left : 0;
    right : 0;
    bottom : 0;
    margin : auto;
    width: 500px;
    height: 273px;
    display : flex;
    flex-direction : column;
    align-items : center;
    border-radius: 16px;
    border-style: solid;
    border-width: 1px;
    border-image-source: linear-gradient(to right, ${palette('primary', 3)}, ${palette('primary', 0)});
    border-image-slice: 1;
    background-image: linear-gradient(to right, ${palette('grayscale', 0)}, ${palette(
  'grayscale',
  0,
)}), linear-gradient(to top, ${palette('primary', 3)}, ${palette('primary', 0)});
    background-origin: border-box;
    background-clip: content-box, border-box;
`;

export const ModalIconWrapper = Styled.div`
    display:flex;
    align-items : center;
    justify-content : center;
    margin-top:-40px;
    background-image: linear-gradient(to right, ${palette('primary', 3)}, ${palette('primary', 0)});
    width: 90px;
    height: 90px;
    border-radius :50px;
`;

export const ModalTitle = Styled.div`
    ${theme('font.dp4')};
    margin-top : 20px;
    margin-bottom : 20px;
    background-image: linear-gradient(to right, ${palette('primary', 3)}, ${palette('primary', 0)});
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const ModalEXP = Styled.div`
    ${theme('font.body4')};
    text-align : center;
`;
