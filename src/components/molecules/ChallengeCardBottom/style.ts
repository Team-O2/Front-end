import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const IconWrapper = Styled.div`
    padding: 33px 620px 0px 30px; 
    padding-bottom:50px;

    h2{
        display:inline-block;
        margin: 4px 0 3.2px 8px;
        width: 60px;
        font-size: 18px;
    }
    img{
        display:inline-block;
        width: 24px;
        height:24px;
    }
`;

export const ButtonWrapper = Styled.div`
    align-items: center;
    margin: 0 auto;
    padding: 50px 385px 0px 385px;
`;

export const FoldButton = Styled.button`
    border:0;
    background: ${palette('grayscale', 0)};
    color: ${palette('primary', 5)};
    ${theme('font.subhead4')};
`;
