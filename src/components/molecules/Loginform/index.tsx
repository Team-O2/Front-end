import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';

import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';

const existValueStyle = {
  border: 'double 1px transparent',
  backgroundImage: 'linear-gradient(white, white), linear-gradient(to right, #36c8f5,#13e2dd)',
  backgroundOrigin: 'border-box',
  backgroundClip: 'content-box, border-box',
};
const defaultStyle = {
  border: 'solid 1px #c1c1c1',
};

function Loginform(): React.ReactElement {
  const [userLogin, setUserLogin] = useState({
    // 값 저장
    email: '',
    password: '',
  });
  const [valueStatus, setValueStatus] = useState({
    // 값이 들어있는지 유무
    email: false,
    password: false,
  });
  const [focusStatus, setFocusStatus] = useState({
    // 인풋에 포커스가 되어있는지 유무
    email: false,
    password: false,
  });

  useEffect(() => {
    if (userLogin.email != '') {
      setValueStatus({ ...valueStatus, email: true });
    } else {
      setValueStatus({ ...valueStatus, email: false });
    }
  }, [userLogin.email]);

  useEffect(() => {
    if (userLogin.password != '') {
      setValueStatus({ ...valueStatus, password: true });
    } else {
      setValueStatus({ ...valueStatus, password: false });
    }
  }, [userLogin.password]);

  return (
    <LoginformWrap>
      <div className="login_div" style={valueStatus.email || focusStatus.email ? existValueStyle : defaultStyle}>
        <Input
          className="login_input"
          name="userEmail"
          type="text"
          placeholder="이메일을 입력해 주세요"
          onChange={(e) => {
            setUserLogin({ ...userLogin, email: e.target.value });
          }}
          onFocus={() => {
            setFocusStatus({ ...focusStatus, email: true });
          }}
          onBlur={() => {
            setFocusStatus({ ...focusStatus, email: false });
          }}
        ></Input>
      </div>
      <div className="login_div" style={valueStatus.password || focusStatus.password ? existValueStyle : defaultStyle}>
        <Input
          className="login_input"
          name="userPwd"
          type="password"
          placeholder="비밀번호를 입력해 주세요"
          onChange={(e) => {
            setUserLogin({ ...userLogin, password: e.target.value });
          }}
          onFocus={() => {
            setFocusStatus({ ...focusStatus, password: true });
          }}
          onBlur={() => {
            setFocusStatus({ ...focusStatus, password: false });
          }}
        ></Input>
      </div>
      <Button className="login_button">로그인</Button>
    </LoginformWrap>
  );
}

const LoginformWrap = Styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
  .login{
    &_div{
      width: 406px;
      height: 60px;
      border-radius: 4px;
      border : solid 1px #c1c1c1;
      margin-bottom : 16px;

    }
    &_input{
      width : 100%;
      height : 100%;
      border : none;
      border-radius: 4px;
      padding: 18px 20px;
      font-size : 16px;
      color : #0d0d0d;
      :placeholder{
        color : #c1c1c1;
      }
      :focus{
        outline : none;
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
