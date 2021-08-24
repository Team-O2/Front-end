import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const Container = Styled.div`
    margin: 0 auto;
    text-align: center;
`;

export const Header = Styled.div`
    position: sticky;
    top: 60px;
    background-color:${palette('grayscale', 0)};
    width: 100%;

    p{
      padding-top:25px;
      height: 70px;
      text-align: center;
      ${theme('font.body4')};
    }
    span{
      display: inline-block;
      opacity: 0.4;
      background-color: ${palette('grayscale', 10)};
      width: 100%;
      height: 2px;
    }
`;

export const CardWrapper = Styled.div`
    display:inline-block;
    padding:60px 0px 0px 20px;
    vertical-align: top;
`;

export const CardDetailWrapper = Styled.div`
    margin-bottom:30px;
    border-radius: 10px;
    box-shadow: 0 0 24px 0 rgba(13, 12, 63, 0.1);
    padding: 50px 30px;
    width: 354px;
    height: 487px;

    h1{
      margin: 0 243px 4px 0;
      width: 51px;
      height: 21px;
      text-align: center;
      color: ${palette('grayscale', 7)};
      ${theme('font.body2')};
    }
    h2{
      margin: 4px 0 0;
      width: 294px;
      height: 44px;
      text-align: left;
      color: ${palette('grayscale', 7)};
      ${theme('font.dp1')};
    }
    h3{
      margin-top:40px;
      width: 62px;
      height: 21px;
      color: ${palette('grayscale', 7)};
      ${theme('font.body2')};
    }
    h4{
      margin: 4px 0 0;
      width: 294px;
      height: 44px;
      text-align: left;
      color: ${palette('grayscale', 7)};
      ${theme('font.dp1')};
    }
`;

export const RegisterImg = Styled.div`
    display:inline-block;
    padding-top:60px;
    width: 677px;
    height: 1414px;
`;

export const CardSettingWrapper = Styled.div`
    display: flex;
    flexDirection: row;
    justifyContent: space-between;

    h1{
      margin: 0 37px 0 0;
      margin-top:60px;
      width: 89px;
      height: 21px;
      text-align: center;
      color: ${palette('grayscale', 7)};
      ${theme('font.body2')};
    }
    p{
      width: 126px;
      height: 18px;
      color: ${palette('grayscale', 2)};
      ${theme('font.body1')};
    }
`;

export const BoxWrapper = Styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 60px;
    border: solid 1px ${palette('grayscale', 1)};
    border-radius: 4px;
    padding: 0 16px;
    width: 119px;
    height: 36px;
    margin-left : 49px;
    ${theme('font.subhead3_eng')};

    p{
      border:none;
      background-color: ${palette('grayscale', 0)};
      cursor: pointer;
    }
`;

export const ChallengeSetting = Styled.div`
    display:inline-block;
`;

export const RegisterButton = Styled.div`
    margin-top:50px;

    button{
      border:none;
      border-radius: 4px;
      background: linear-gradient(91.91deg, ${palette('primary', 3)} 7.34%, ${palette('primary', 0)} 90.35%);
      width:294px;
      height:60px;
      color: ${palette('grayscale', 0)};
      ${theme('font.subhead3')};
    }
`;

export const NoticeCardWrapper = Styled.div`
    border-radius: 10px;
    box-shadow: 0 0 24px 0 rgba(13, 12, 63, 0.1);
    padding: 30px 30px 30px 28px;
    width: 354px;
    height: 282px;

    h1{
      margin-top:20px;
      text-align: left;
      color: ${palette('grayscale', 3)};
      ${theme('font.subhead3_eng')};
    }
    p{
      text-align: left;
      color: ${palette('grayscale', 4)};
      ${theme('font.body3')};
    }
`;

export const NoticeHeaderWrapper = Styled.div`
    text-align: left;
    color: ${palette('grayscale', 7)};
    ${theme('font.body4')};

    img{
      float:right;
    }
`;
