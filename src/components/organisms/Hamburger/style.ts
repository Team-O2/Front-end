import { Button } from 'components/atoms';
import Styled from 'styled-components';
import { theme } from 'styled-tools';

export const HamburgerContainer = Styled.div`
  display : flex;
  position : fixed;
  top :0;
  flex-direction:column;
  z-index : 999;
  box-shadow: 0 4px 40px 0 rgba(30, 37, 98, 0.1);
  background-color : #ffffff;
  width: 282px;
  height : 100vh;
  animation : slideIn 0.5s;
  @keyframes slideIn {
    from {
      left : -282px;
    }
    to {
      left : 0%;
    }
  }
  span{
    font-weight : bold;
  }
`;

export const LogOutBtn = Styled.div`
  ${theme('font.body2')}
  font-size: 16px;
  color: #8b8b8b;
  margin-left: 8px;
  margin-right: 24px;
`;

export const SettingBtn = Styled.div`
  ${theme('font.body2')}
  font-size: 16px;
  color: #3d3d3d;
`;

export const BottomContainer = Styled.div`
  display: flex;
  position:relative;
  flex:none;
  align-items:flex-start;
  justify-content:flex-end;
  height : 84px;
`;

export const MiddleContainer = Styled.div`
  display : flex;
  flex:1;
  flex-direction : column;
  align-items : center;
  padding-top : 70px;
  overflow : scroll;
  ::-webkit-scrollbar {
    width: 0.8rem;
    height: 1rem;
  }
  ::-webkit-scrollbar-track {
    background: none;
  }
  ::-webkit-scrollbar-thumb {
    box-sizing: border-box;
    border-radius: 0.5rem;
    background: #c1c1c1;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #c1c1c1;
  }
`;

export const TopContainer = Styled.div`
  display : flex;
  flex:none;
  flex-direction : column;
  align-items : center;
  background-color: #edfeff;
  height : 376px;
`;

export const SubTitleImage = Styled.img`
  margin-right : 6px;
  width : 20px;
  height : 20px;
`;

export const UserNameLabel = Styled.div`
  ${theme('font.body2')};
  font-size : 16px;
  margin-top : 28px;
  color : #3d3d3d;
`;

export const UserIcon = Styled.img`
  margin : 120px 91px 0 91px;
  border : 1px solid #dfdfdf;
  border-radius:50px;
  width : 100px;
  height : 100px;
  object-fit:cover;
`;

export const NoLoginSubTitle = Styled.div`
  ${theme('font.body2')};
  font-size : 16px;
  margin-top : 16px;
  margin-bottom : 30px;
  -webkit-background-clip: text;
  background-clip: text;
  background-image:linear-gradient(to right, #34caf4, #13e2dd);
  text-align : center;
  -webkit-text-fill-color: transparent;
`;

export const UnChallengeUserSubTitle = Styled(Button)<{ color?: string }>`
  ${theme('font.subhead3_eng')};
  display : flex;
  align-items : center;
  margin-top : 30px;
  line-height: 1.5;
  letter-spacing: -0.5px;
  color: ${(props) => props.color};
  font-weight: bold;
`;

export const ChallengeEndUser = Styled(Button)`
  color: #03b6ce;
  ${theme('font.subhead3_eng')};
  margin-top : 30px;
`;

export const LoginImage = Styled.img`
  margin-right : 6px;
  width : 20px;
  height : 20px;
`;

export const LoginButton = Styled(Button)`
  display : flex;
  align-items : center;
  justify-content : center;
  width : 100%;
`;

export const LoginExp = Styled.div`
  ${theme('font.subhead3')};
  height: 18px;
  color : #3d3d3d;
`;

export const TitleBtn = Styled(Button)`
  margin : 10px 0;
  height : 20px;
  color : #3d3d3d;
  font-family : AppleSDGothicNeo;
  font-size : 16px;
  :hover {
    font-weight: bold;
  }
`;

export const EngTitleBtn = Styled(Button)`
  margin : 10px 0;
  height : 20px;
  color : #3d3d3d;
  font-size : 16px;
  font-family : HomepageBaukasten;
  :hover {
    font-weight: bold;
  }
`;

export const Line = Styled.div`
  margin : 20px 0;
  background-color: #c1c1c1;
  width :164px;
  height: 1px;
`;

export const Padding = Styled.div`
  line-height : 60px;
  color:rgba(0,0,0,0);
`;

export const Hide = Styled.div`
  position : absolute;
  top:-50px;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff);
  width : 100%;
  height : 50px;
`;
