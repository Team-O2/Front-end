import React from 'react';
import Styled from 'styled-components';

import Label from 'components/atoms/Label';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import Line from '../../../assets/images/line.svg';

function Loginform(): React.ReactElement {
  return (
    <LoginformWrap>
      <Input className="login_input" inputName="userEmail" placeholder="이메일을 입력해 주세요"></Input>
      <Input className="login_input" inputName="userPwd" placeholder="비밀번호를 입력해 주세요"></Input>
      <Button className="login_button">로그인</Button>
    </LoginformWrap>
  );
}

const LoginformWrap = Styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
  .login{
    &_input{
      width: 406px;
      height: 60px;
      border-radius: 4px;
      border : solid 1px #c1c1c1;
      padding: 18px 20px;
      font-size : 16px;
      margin-bottom : 16px;
      color : #0d0d0d;
      :placeholder{
        color : #c1c1c1;
      }
      :focus{
        outline : none;
        border-style: solid;
        border-width: 1px;
        border-image: linear-gradient(to right, #36c8f5,#13e2dd );
        border-image-slice: 1;
        color : #0d0d0d;
      }
    }
    &_button{
      width: 406px;
      height: 60px;
      border-radius: 4px;
      background-image: linear-gradient(to right, #36c8f5,#13e2dd );
      font-size : 16px;
      font-weight : bold;
      color : #ffffff;
      margin-top : 14px;
    }
  }

`;

export default Loginform;
