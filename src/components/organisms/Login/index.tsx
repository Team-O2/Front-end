import Line from 'assets/images/line.svg';
import { Link } from 'components/atoms';
import Button from 'components/atoms/Button';
import Label from 'components/atoms/Label';
import React from 'react';
import Styled from 'styled-components';
import Loginform from '../../molecules/Loginform/index';

function CLogin(): React.ReactElement {
  return (
    <LoginWrap>
      <Label className="login__label">로그인</Label>
      <Loginform />
      <div className="etc__buttons">
        <Link to="/findPwd">
          <Button className="etc__leftbtn">비밀번호 찾기</Button>
        </Link>
        <img className="etc__line" src={Line}></img>
        <Link to="/join">
          <Button className="etc__rightbtn">회원가입</Button>
        </Link>
      </div>
    </LoginWrap>
  );
}

const LoginWrap = Styled.div`
  position: relative;
  top: -60px;
  width: 100%;
  height: 100vh;
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content: center;
  .login{
    &__label{
      font-size: 40px;
      font-weight: bold;
      margin-bottom : 60px;
    }
  }
  .etc{
    &__buttons{
      display : flex;
      align-items: center;
      margin-top : 20px;
    }
    &__line{
      width : 1px;
      height : 16px;
      object-fit : contain;
      background-color : #8b8b8b;
    }
    &__leftbtn{
      font-size : 16px;
      line-height : 1.5;
      color : #8b8b8b;
      margin-right : 15px;
      font-family: AppleSDGothicNeo;
    }
    &__rightbtn{
      font-size : 16px;
      font-weight : bold;
      line-height : 1.5;
      color : #8b8b8b;
      margin-left : 15px;
      font-family: AppleSDGothicNeo;
    }
  }
`;

export default CLogin;
