import { LineIcon } from 'assets/images';
import { Button, Label, Link } from 'components/atoms';
import { LoginForm } from 'components/molecules';
import React from 'react';
import Styled from 'styled-components';

function CLogin(): React.ReactElement {
  return (
    <LoginWrap>
      <Label className="login__label">로그인</Label>
      <LoginForm />
      <div className="etc__buttons">
        <Link to="/setting/password/find">
          <Button className="etc__leftbtn">비밀번호 찾기</Button>
        </Link>
        <img className="etc__line" src={LineIcon}></img>
        <Link to="/join">
          <Button className="etc__rightbtn">회원가입</Button>
        </Link>
      </div>
    </LoginWrap>
  );
}

const LoginWrap = Styled.div`
  display : flex;
  position: relative;
  top: -60px;
  flex-direction : column;
  align-items : center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  .login{
    &__label{
      margin-bottom : 60px;
      font-size: 40px;
      font-weight: bold;
    }
  }
  .etc{
    &__buttons{
      display : flex;
      align-items: center;
      margin-top : 20px;
    }
    &__line{
      background-color : #8b8b8b;
      width : 1px;
      height : 16px;
      object-fit : contain;
    }
    &__leftbtn{
      margin-right : 15px;
      line-height : 1.5;
      color : #8b8b8b;
      font-family: AppleSDGothicNeo;
      font-size : 16px;
    }
    &__rightbtn{
      margin-left : 15px;
      line-height : 1.5;
      color : #8b8b8b;
      font-family: AppleSDGothicNeo;
      font-size : 16px;
      font-weight : bold;
    }
  }
`;

export default CLogin;
