import { LineIcon } from 'assets/images';
import { Link } from 'components/atoms';
import { LoginForm } from 'components/molecules';
import React from 'react';
import { ButtonWrapper, FindPwdBtn, JoinBtn, Line, LoginContainer, LoginLabel } from './style';

function CLogin(): React.ReactElement {
  return (
    <LoginContainer>
      <LoginLabel className="login__label">로그인</LoginLabel>
      <LoginForm />
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

export default CLogin;
