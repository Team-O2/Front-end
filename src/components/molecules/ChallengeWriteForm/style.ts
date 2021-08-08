import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

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
