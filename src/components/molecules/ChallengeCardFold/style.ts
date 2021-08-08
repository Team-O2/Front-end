import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const CommentFoldButton = Styled.button`

    border-radius: 0px 0px 18px 18px;
    background: ${palette('grayscale', 7)};
    width: 844px;
    height: 63px;
    line-height: 22px;
    color: ${palette('grayscale', 0)};
    ${theme('font.subhead3')};
`;

export const CommentButton = Styled.button`
    align-items: center;
    border-radius: 0px 0px 18px 18px;
    background: ${palette('grayscale', 7)};
    width: 844px;
    height: 63px;
    text-align: center;
    color: ${palette('grayscale', 0)};
    ${theme('font.subhead3')};

`;
