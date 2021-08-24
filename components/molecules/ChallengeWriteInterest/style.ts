import { Button } from 'components/atoms';
import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

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
