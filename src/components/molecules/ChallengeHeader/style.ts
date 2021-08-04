import Styled from 'styled-components';
import { palette, theme } from 'styled-tools';

export const HeaderWrapper = Styled.div`
    margin: 100px auto 110px;
    color: ${palette('grayscale', 7)};
    ${theme('font.dp3_eng')};

    p{
      text-align:center;
    }
    h1{
      position: fixed;
      top: 27px;
      left: 288px;
      opacity: 0.1;
      border-radius: 100%;
      background: ${palette('primary', 2)};
      width: 206px;
      height: 206px;
    }
    h2{
      position: fixed;
      top: 258px;
      left: 1105px;
      opacity: 0.1;
      border-radius: 100%;
      background: ${palette('primary', 5)};
      width: 261px;
      height: 261px;
    }
    h3{
      position: fixed;
      top: 445px;
      left: 153px;
      opacity: 0.1;
      border-radius: 100%;
      background: ${palette('primary', 5)};
      width: 62px;
      height: 62px;
    }
    h4{
      position: fixed;
      top: 653px;
      left: 1305px;
      opacity: 0.07;
      border-radius:100%;
      background: ${palette('primary', 5)};
      width: 302px;
      height: 302px;
    }
    h5{
      position: fixed;
      top: 807px;
      left: 180px;
      border-radius:100%;
      background: ${palette('primary', 5)};
      width: 200px;
      height: 200px;
    }
`;

export const WriteButton = Styled.button`
    position: fixed;
    right: 40px;
    margin-top:60px;
    border:none;
    border-radius:100%;
    background-color:${palette('grayscale', 0)};
    height:64px;

    img{
      align-items:center;
      width:64px;
      height:64px;
    }
`;

export const AllFeedButtom = Styled.button`
    position: fixed;
    right: 40px;
    border:none;
    border-radius:100%;
    background-color:${palette('grayscale', 0)};
    padding-bottom: 40px;
    height:64px;

    img{
      align-items:center;
      width:64px;
      height:64px;
    }
`;

export const MyFeedButtom = Styled.button`
    position: fixed;
    right: 40px;
    border:none;
    border-radius:100%;
    background-color:${palette('grayscale', 0)};
    height:64px;

    img{
      align-items:center;
      width:64px;
      height:64px;
    }
`;

export const SChallengeHeader = Styled.div`
    margin:0 auto;
    width: 844px;
`;
