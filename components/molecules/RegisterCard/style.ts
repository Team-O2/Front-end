import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

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
      ${theme('font.h2')};
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
      ${theme('font.h2')};
    }
`;

export const CardSettingWrapper = Styled.div`
    display: flex;
    flexDirection: row;
    justifyContent: space-between;

    h1{
      margin: 0 37px 0 0;
      margin-top:60px;
      width: 130px;
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
