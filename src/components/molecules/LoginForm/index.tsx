import { getUserData, postLogin } from 'apis';
import { StyledInput } from 'components/atoms';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userState, userStatusState } from 'stores/user';
import { LoginBtn, LoginformWrap } from './style';

function LoginForm(): React.ReactElement {
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

  const handleLoginBtn = async () => {
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
    if (data) {
      if (data.status === 200) {
        setUserStatusData({
          token: data.token,
          userType: data.data.userState,
          totalGeneration: data.data.totalGeneration,
          registGeneration: data.data.registGeneration,
          progressGeneration: data.data.progressGeneration ? data.data.progressGeneration : 0,
        });
        return data.token;
      } else {
        if (data.message === '아이디가 존재하지 않습니다') {
          setIsConditionMet({ email: false, pwd: true });
        } else if (data.message === '비밀번호가 틀렸습니다') {
          setIsConditionMet({ email: true, pwd: false });
        }
      }
    } else {
      alert('네트워크가 좋지 않습니다');
    }
    return '';
  };
  const getUserDetailData = async (token: string): Promise<boolean> => {
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
        placeHolder="이메일을 입력해 주세요"
        width="406px"
        height="60px"
        margin="0 0 9px 0"
        onChange={(value) => {
          if (typeof value === 'string') setLoginData({ ...loginData, email: value });
        }}
        isConditionMet={isConditionMet.email}
        errorMsg={errMsg.email}
      />
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
      <LoginBtn className="login_button" onClick={handleLoginBtn}>
        로그인
      </LoginBtn>
    </LoginformWrap>
  );
}

export default LoginForm;
