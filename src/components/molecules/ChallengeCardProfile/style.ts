import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const ProfileDetailWrapper = Styled.div`
    display:inline-block;
    width: calc(100% - 60px);

    h3{
        display:inline-block;
        margin-bottom: 10px;
        text-align: left;
        ${theme('font.subhead5')};
    }
    h4{
        display:inline-block;
        align-items: center;
        padding-left:10px;
        color: ${palette('grayscale', 3)};
        ${theme('font.body2')};
    }
`;

export const MenuBarWrapper = Styled.div`
    display:inline-block;
    padding-left: 0px;
`;

export const DeleteBar = Styled.div`
    display:inline-block;
`;

export const MenuButton = Styled.button`
    border:none;
    background-color:${palette('grayscale', 0)};
`;

export const DeleteEditCardButton = Styled.button`
    display:inline-block;
    border:none;
    background-color:${palette('grayscale', 0)};
    padding: 2px;
`;

export const ProfileWrapper = Styled.div`
    display:inline-block;
    width: calc( 100% - 140px);

`;

export const InterestTag = Styled.div`
    display : inline-block;
    align-items: center;
    margin-right : 5px;
    line-height: 20px;
    color: ${palette('grayscale', 5)};
    ${theme('font.subhead2')};

`;

export const ProfileImage = Styled.img`
    margin: 0 15px 0px 30px;
    border: solid 1px ${palette('grayscale', 0)};
    border-radius: 40px 40px 40px 40px;
    background-color: ${palette('grayscale', 1)};
    width: 80px;
    height: 80px;
`;
