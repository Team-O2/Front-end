import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const MainCardWrapper = Styled.div`
    position: relative;
    align-items: center;
    margin: 0 auto;
    border-radius: 18px;
    box-shadow: 0px 0px 24px rgba(13, 12, 63, 0.1);
    background: ${palette('grayscale', 0)};
    padding-top: 40px;
    width : 844px;
`;

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

export const DeleteBar = Styled.div`
    display:inline-block;
`;

export const FormDetailWrapper = Styled.div`
    padding: 30px 30px 0 60px;

    h1{
        text-align: left;
        ${theme('font.subhead3')};
    }
    h5{
        width:724px;
        max-height: 100%;
        text-align: left;
        ${theme('font.body3')};
    }
    h2{
        width:724px;
        overflow:hidden;
        text-align: left;
        text-overflow:ellipsis;
        white-space:nowrap;
        ${theme('font.body3')};
    }

`;

export const CommentFoldButton = Styled.button`

    border-radius: 0px 0px 18px 18px;
    background: ${palette('grayscale', 7)};
    width: 844px;
    height: 63px;
    line-height: 22px;
    color: ${palette('grayscale', 0)};
    ${theme('font.subhead3')};
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

export const Container = Styled.div`
    padding-top: 60px;
`;

export const ProfileImage = Styled.img`
    margin: 0 15px 0px 30px;
    border: solid 1px ${palette('grayscale', 0)};
    border-radius: 40px 40px 40px 40px;
    background-color: ${palette('grayscale', 1)};
    width: 80px;
    height: 80px;
`;

export const LoginButtonWrapper = Styled.div`
    padding-top:70px;
    text-align: center;
`;

export const CancelButton = Styled.button`
    border : 0;
    background-color : ${palette('grayscale', 0)};
    color: ${palette('grayscale', 2)};
    ${theme('font.subhead4')};
`;

export const DeleteButton = Styled.button`
    padding-left:170px;
    border : 0;
    background-color : ${palette('grayscale', 0)};
    color: ${palette('primary', 5)};
    ${theme('font.subhead4')};

`;

export const LoginModalWrapper = Styled.div`
    position: fixed;
    top:0;
    right:0;
    bottom:0;
    left:0;
    margin:auto;
    border-radius: 16px;
    background-color: ${palette('grayscale', 0)};
    width: 500px;
    height: 312px;
`;

export const LoginNoticeWrapper = Styled.div`
    padding: 0px 80px 0px 80px;
    img{
        display:flex;
        margin:auto;
        margin-top:-40px;
    }
    h1{
        padding:20px 0px 20px 0px;
        text-align: center;
        ${theme('font.dp4')};
    }
    p{
        text-align: center;
        color: ${palette('grayscale', 9)};
        ${theme('font.body3')};
    }
`;
