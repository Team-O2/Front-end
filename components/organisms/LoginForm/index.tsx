import { StyledInput } from 'components/atoms';
import React from 'react';
import { Form, LoginformWrap } from './style';

interface IProps {
  idInputChange: (value: string) => void;
  pwdInputChange: (value: string) => void;
  isConditionMet: {
    email: boolean;
    pwd: boolean;
  };
  handleLoginEnter: (e: React.KeyboardEvent<HTMLInputElement>) => Promise<void>;
}
const errMsg = {
  email: '가입되지 않은 이메일입니다',
  pwd: '비밀번호를 다시 확인해 주세요',
};

function LoginForm({ idInputChange, isConditionMet, pwdInputChange, handleLoginEnter }: IProps): React.ReactElement {
  return (
    <LoginformWrap>
      <Form>
        <StyledInput
          placeHolder="이메일을 입력해 주세요"
          width="406px"
          height="60px"
          margin="0 0 9px 0"
          onChange={idInputChange}
          isConditionMet={isConditionMet.email}
          errorMsg={errMsg.email}
        />
        <StyledInput
          placeHolder="비밀번호를 입력해 주세요"
          width="406px"
          height="60px"
          isPw={true}
          onChange={pwdInputChange}
          isConditionMet={isConditionMet.pwd}
          errorMsg={errMsg.pwd}
          onKeyUp={handleLoginEnter}
        />
      </Form>
    </LoginformWrap>
  );
}

export default LoginForm;
