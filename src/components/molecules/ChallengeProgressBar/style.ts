import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const CharacterWrapper = Styled.div`
    position:sticky;
    top:20px;
    margin: 0 auto;
    background-color: ${palette('grayscale', 0)};
    padding-top:60px;
    width:844px;

    img{
        padding-top:29px;
    }
    p{
        padding-top:12.32px;
        padding-bottom: 12px;
        ${theme('font.subhead2')};
        color : ${palette('grayscale', 5)};
    }
    h1{
        padding-top:29px;
        padding-left:200px;
    }
    h2{
        padding-left:450px;
    }
    h3{
        text-align:end;
    }
`;

export const ProgressBarStep0 = Styled.span`
    display: inline-block;
    background-color: #d6d3d3;
    width: 844px;
    height: 5px;

    span{
        display: inline-block;
        background-color: ${palette('primary', 3)};
        width: 1%;
        height: 5px;
    }
`;

export const ProgressBarStep1 = Styled.span`
    display: inline-block;
    background-color: #d6d3d3;
    width: 844px;
    height: 5px;

    span{
        display: inline-block;
        background-color: ${palette('primary', 3)};
        width: 34%;
        height: 5px;
    }
`;

export const ProgressBarStep2 = Styled.span`
    display: inline-block;
    background-color: #d6d3d3;
    width: 844px;
    height: 5px;

    span{
        display: inline-block;
        background-color: ${palette('primary', 3)};
        width: 67%;
        height: 5px;
    }
`;

export const ProgressBarStep3 = Styled.span`
    display: inline-block;
    background-color: #d6d3d3;
    width: 844px;
    height: 5px;

    span{
        display: inline-block;
        background-color: ${palette('primary', 3)};
        width: 100%;
        height: 5px;
    }
`;

export const CharacterStepImg = Styled.img`
    padding-left:55px;
`;
