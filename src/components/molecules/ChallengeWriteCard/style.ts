import { Button } from 'components/atoms';
import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const Header = Styled.div`
    padding-top:100px;
    text-align:center;
    ${theme('font.dp3_eng')};
`;
export const InterestTagButton = Styled(Button)`
    margin : 12px 5px;
    border: solid 1px ${palette('grayscale', 4)};
    border-radius: 60px;
    background-color: ${palette('grayscale', 0)};
    padding : 12px 30px;
    height : 48px;
    color : ${palette('grayscale', 4)};
    ${theme('font.subhead3')};
`;

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

export const QuestionWrapper = Styled.div`
    margin: 0 auto;
    padding-top:60px;
    width:844px;

    h1 {
        line-height:38px;
        color: ${palette('grayscale', 7)};
        ${theme('font.subhead5')};
    }

    p {
        padding-bottom: 30px;
        text-align: right;
        color: #B1B1B1;
        ${theme('font.subhead2_eng')};
    }

    textarea{
        box-sizing: border-box;
        align-items: center;
        border: 1px solid ${palette('grayscale', 1)};
        padding: 40px 60px 40px 60px;
        width: 844px;
        height:369px;
        resize:none;
        ${theme('font.body4')};
    }
`;

export const TagWrapper = Styled.div`
    align-items:center;
    margin:0 auto;
    padding-top:60px;
    width:844px;
    text-align: left;
    ${theme('font.subhead5')};

    img{
        padding-bottom:5px;
        vertical-align : middle;
    }
`;

export const TagListWrapper = Styled.div`
    padding-top:20px;

    button{
        box-sizing: border-box;
        border: 1px solid rgba(223, 223, 223, 0.5);
        box-shadow: 0px 0px 15px rgba(23, 22, 91, 0.08);
        background: ${palette('grayscale', 0)};
        padding: 13px 30px 30px 30px;
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

export const ButtonWrapper = Styled.div`
    align-items: center;
    margin: 0 auto;
    width:844px;
`;

export const ColorButton = Styled(Button)`
    margin: 0 auto;
    margin-top:60px;
    border:none;
    border-radius: 4px;
    width:844px;
    height: 60px;
    text-align: center;
    color: ${palette('grayscale', 0)};
    background: linear-gradient(91.91deg, ${palette('primary', 3)} 7.34%, ${palette('primary', 0)} 90.35%);
    ${theme('font.subhead3')};
`;

export const BlackButton = Styled(Button)`
    margin: 0 auto;
    margin-top:60px;
    border:none;
    border-radius: 4px;
    width:844px;
    height: 60px;
    text-align: center;
    color: ${palette('grayscale', 0)};
    background: ${palette('grayscale', 1)};
    ${theme('font.subhead3')};
`;

export const CharacterStepImg = Styled.img`
    padding-left:55px;
`;
