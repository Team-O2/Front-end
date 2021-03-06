import { Link } from 'components/atoms';
import { LoginForm } from 'components/organisms';
import { LineIcon } from 'public/assets/images';
import React from 'react';
import { ButtonWrapper, FindPwdBtn, JoinBtn, Line, LoginBtn, LoginContainer, LoginLabel } from './style';

interface IProps {
  handleLoginEnter: (e: React.KeyboardEvent<HTMLInputElement>) => Promise<void>;
  handleLoginBtn: () => Promise<void>;
  idInputChange: (value: string) => void;
  pwdInputChange: (value: string) => void;
  isConditionMet: {
    email: boolean;
    pwd: boolean;
  };
}

function LoginTemplate({
  handleLoginEnter,
  handleLoginBtn,
  idInputChange,
  pwdInputChange,
  isConditionMet,
}: IProps): React.ReactElement {
  return (
    <LoginContainer>
      <LoginLabel>로그인</LoginLabel>
      <LoginForm
        idInputChange={idInputChange}
        pwdInputChange={pwdInputChange}
        isConditionMet={isConditionMet}
        handleLoginEnter={handleLoginEnter}
      />
      <LoginBtn onClick={handleLoginBtn}>로그인</LoginBtn>
      <ButtonWrapper>
        <Link to="/setting/password/find">
          <FindPwdBtn>비밀번호 찾기</FindPwdBtn>
        </Link>
        <Line src={LineIcon}></Line>
        <Link to="/join">
          <JoinBtn>회원가입</JoinBtn>
        </Link>
      </ButtonWrapper>
    </LoginContainer>
  );
}

export default LoginTemplate;
