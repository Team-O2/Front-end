import React, { useContext } from 'react';
import Styled from 'styled-components';
import Loginform from '../../molecules/Loginform/index';
import Label from 'components/atoms/Label';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import Line from '../../../assets/images/line.svg';

function CLogin(): React.ReactElement {
  return (
    <LoginWrap>
      <Label className="login_label" name="로그인" />
      <Loginform />
      <div className="etc_buttons">
        <Button className="etc_leftbtn">비밀번호 찾기</Button>
        <img className="etc_line" src={Line}></img>
        <Button className="etc_rightbtn">회원가입</Button>
      </div>
    </LoginWrap>
  );
}

const LoginWrap = Styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
  .login{
    &_label{
      font-size: 40px;
      font-weight: bold;
      margin-bottom : 60px;
    }
  }
  .etc{
    &_buttons{
      display : flex;
      align-items: center;
      margin-top : 20px;
    }
    &_line{
      width : 1px;
      height : 16px;
      object-fit : contain;
      background-color : #8b8b8b;
    }
    &_leftbtn{
      font-size : 16px;
      line-height : 1.5;
      color : #8b8b8b;
      margin-right : 15px;
    }
    &_rightbtn{
      font-size : 16px;
      font-weight : bold;
      line-height : 1.5;
      color : #8b8b8b;
      margin-left : 15px;
    }
  }
`;

export default CLogin;
