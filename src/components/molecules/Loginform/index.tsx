import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';
import { getUserData, postLogin } from 'libs/axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userState, userStatusState } from 'stores/user';
import Styled from 'styled-components';

function Loginform(): React.ReactElement {
  const history = useHistory();
  const [loginData, setLoginData] = useState({
    // 값 저장
    email: '',
    password: '',
  });
  const [isValueExist, setIsValueExist] = useState({
    // 값이 들어있는지 유무
    email: false,
    password: false,
  });
  const [isFocused, setIsFocused] = useState({
    // 인풋에 포커스가 되어있는지 유무
    email: false,
    password: false,
  });
  const [userStatusData, setUserStatusData] = useRecoilState(userStatusState);
  const [userData, setUserData] = useRecoilState(userState);

  const loginBtnHandler = async () => {
    const token = await getUserStatusData();
    const isSuccess = await getUserDetailData(token);
    isSuccess && history.push('/');
  };
  useEffect(() => {
    if (userStatusData && userData) {
      alert('이미 로그인이 되어있습니다. ');
      history.push('/');
    }
  }, []);

  const getUserStatusData = async () => {
    const data = await postLogin(loginData);
    if (data !== undefined) {
      if (data.status === 200) {
        setUserStatusData({
          token: data.token,
          userType: data.data.userState,
          totalGeneration: data.data.totalGeneration,
          registGeneration: data.data.registGeneration,
          progressGeneration: data.data.progressGeneration,
        });
        return data.token;
      } else {
        alert(data.message);
      }
    } else {
      alert('네트워크가 좋지 않습니다');
    }
    return false;
  };
  const getUserDetailData = async (token: string) => {
    if (token) {
      const data = await getUserData(token);
      if (data !== undefined) {
        setUserData({
          interest: data.interest,
          marpolicy: data.marpolicy,
          img: data.img,
          _id: data._id,
          email: data.email,
          nickname: data.nickname,
          gender: data.gender,
        });
        return true;
      } else {
        alert('네트워크가 좋지 않습니다');
      }
    }
    return false;
  };

  useEffect(() => {
    if (loginData.email != '') {
      setIsValueExist({ ...isValueExist, email: true });
    } else {
      setIsValueExist({ ...isValueExist, email: false });
    }
  }, [loginData.email]);

  useEffect(() => {
    if (loginData.password != '') {
      setIsValueExist({ ...isValueExist, password: true });
    } else {
      setIsValueExist({ ...isValueExist, password: false });
    }
  }, [loginData.password]);

  return (
    <LoginformWrap isValueExist={isValueExist} isFocused={isFocused}>
      <div className="login_div login_div--id">
        <Input
          className="login_input"
          name="userEmail"
          type="text"
          placeholder="이메일을 입력해 주세요"
          onChange={(e) => {
            setLoginData({ ...loginData, email: e.target.value });
          }}
          onFocus={() => {
            setIsFocused({ ...isFocused, email: true });
          }}
          onBlur={() => {
            setIsFocused({ ...isFocused, email: false });
          }}
        ></Input>
      </div>
      <div className="login_div login_div--pwd">
        <Input
          className="login_input"
          name="userPwd"
          type="password"
          placeholder="비밀번호를 입력해 주세요"
          onChange={(e) => {
            setLoginData({ ...loginData, password: e.target.value });
          }}
          onFocus={() => {
            setIsFocused({ ...isFocused, password: true });
          }}
          onBlur={() => {
            setIsFocused({ ...isFocused, password: false });
          }}
        ></Input>
      </div>
      <Button className="login_button" onClick={loginBtnHandler}>
        로그인
      </Button>
    </LoginformWrap>
  );
}

const LoginformWrap = Styled.div<{
  isValueExist?: { email: boolean; password: boolean };
  isFocused: { email: boolean; password: boolean };
}>`
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
      &--id{
        border : ${(props) =>
          props.isValueExist?.email || props.isFocused.email ? 'double 1px transparent' : '1px solid #c1c1c1'};
        background-image : ${(props) =>
          props.isValueExist?.email || props.isFocused.email
            ? 'linear-gradient(white, white), linear-gradient(to right, #36c8f5,#13e2dd)'
            : undefined};
        background-origin : ${(props) =>
          props.isValueExist?.email || props.isFocused.email ? 'border-box' : undefined};
        background-clip : ${(props) =>
          props.isValueExist?.email || props.isFocused.email ? 'content-box, border-box' : undefined};        
      }
      &--pwd{
        border : ${(props) =>
          props.isValueExist?.password || props.isFocused.password ? 'double 1px transparent' : '1px solid #c1c1c1'};
        background-image : ${(props) =>
          props.isValueExist?.password || props.isFocused.password
            ? 'linear-gradient(white, white), linear-gradient(to right, #36c8f5,#13e2dd)'
            : undefined};
        background-origin : ${(props) =>
          props.isValueExist?.password || props.isFocused.password ? 'border-box' : undefined};
        background-clip : ${(props) =>
          props.isValueExist?.password || props.isFocused.password ? 'content-box, border-box' : undefined};        
      }
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
