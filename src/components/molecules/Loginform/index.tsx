import Button from 'components/atoms/Button';
import StyledInput from 'components/atoms/StyledInput';
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
  const [userStatusData, setUserStatusData] = useRecoilState(userStatusState);
  const [userData, setUserData] = useRecoilState(userState);
  const [isConditionMet, setIsConditionMet] = useState({
    email: true,
    pwd: true,
  });
  const errMsg = {
    email: '가입되지 않은 이메일입니다',
    pwd: '비밀번호를 다시 확인해 주세요',
  };

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
        console.log(data.message);
        if (data.message === '아이디가 존재하지 않습니다') {
          setIsConditionMet({ email: false, pwd: true });
        } else if (data.message === '비밀번호가 틀렸습니다') {
          setIsConditionMet({ email: true, pwd: false });
        }
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

  return (
    <LoginformWrap>
      <StyledInput
        className="email"
        placeHolder="이메일를 입력해 주세요"
        width="406px"
        height="60px"
        onChange={(value) => {
          if (typeof value === 'string') setLoginData({ ...loginData, email: value });
        }}
        isConditionMet={isConditionMet.email}
        errorMsg={errMsg.email}
      />
      <div className="margin"></div>
      <StyledInput
        placeHolder="비밀번호를 입력해 주세요"
        width="406px"
        height="60px"
        isPw={true}
        onChange={(value) => {
          if (typeof value === 'string') setLoginData({ ...loginData, password: value });
        }}
        isConditionMet={isConditionMet.pwd}
        errorMsg={errMsg.pwd}
      />
      <Button className="login_button" onClick={loginBtnHandler}>
        로그인
      </Button>
    </LoginformWrap>
  );
}

const LoginformWrap = Styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
  .margin{
    height : 9px;
  }
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
      font-family: AppleSDGothicNeo;
      font-size : 16px;
      color : #0d0d0d;
      ::placeholder{
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
