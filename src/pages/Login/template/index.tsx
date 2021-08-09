import { LineIcon } from 'assets/images';
import { Link } from 'components/atoms';
import { LoginForm } from 'components/molecules';
import React from 'react';
import { ButtonWrapper, FindPwdBtn, JoinBtn, Line, LoginBtn, LoginContainer, LoginLabel } from './style';

interface IProps {
  getUserDetailData: (token: string) => Promise<boolean>;
  handleLoginBtn: () => Promise<void>;
  idInputChange: (value: string | number) => void;
  pwdInputChange: (value: string | number) => void;
  isConditionMet: {
    email: boolean;
    pwd: boolean;
  };
}

function LoginTemplate({
  getUserDetailData,
  handleLoginBtn,
  idInputChange,
  pwdInputChange,
  isConditionMet,
}: IProps): React.ReactElement {
  return (
    <LoginContainer>
      <LoginLabel>로그인</LoginLabel>
      <LoginForm idInputChange={idInputChange} pwdInputChange={pwdInputChange} isConditionMet={isConditionMet} />
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
