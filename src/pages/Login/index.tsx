import { getUserData, postLogin } from 'apis';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { userState, userStatusState } from 'stores/user';
import LoginTemplate from './template';

function Login(): React.ReactElement {
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

  const idInputChange = (value: string | number) => {
    if (typeof value === 'string') setLoginData({ ...loginData, email: value });
  };
  const pwdInputChange = (value: string | number) => {
    if (typeof value === 'string') setLoginData({ ...loginData, password: value });
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
    <LoginTemplate
      getUserDetailData={getUserDetailData}
      handleLoginBtn={handleLoginBtn}
      idInputChange={idInputChange}
      pwdInputChange={pwdInputChange}
      isConditionMet={isConditionMet}
    />
  );
}

export default Login;
