import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

interface ISHeader {
  url?: string;
}

export const GenerationText = Styled.div`
    color: ${palette('grayscale', 0)};                                                                   
    width: 600px;
    height: 68px;
    text-align: left;
    ${theme('font.dp3_eng')};

`;

export const Container = Styled.div<ISHeader>`
    width: 100%;
    height:253px;
    position:relative;
    background: url(${(props) => props.url}) center center / cover;
    display: flex;
    align-items: center;
    justify-content: center;

`;
