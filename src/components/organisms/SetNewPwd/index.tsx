import { patchNewPwd } from 'apis';
import { SetNewPwdForm, SettingPwdSuccessModal } from 'components/molecules';
import React, { useState } from 'react';
import { Container, Title } from './style';

interface IProps {
  email: string;
}

function SetNewPwd({ email }: IProps): React.ReactElement {
  // 모달 오픈
  const [isOpen, setIsOpen] = useState(false);

  // 새 비밀번호
  const [pw, setPw] = useState({
    pw: '',
    pwCheck: '',
  });

  const handleClickButton = async () => {
    const res = await patchNewPwd(email, pw.pw);
    if (res) {
      setIsOpen(true);
    }
  };

  return (
    <div>
      <Container>
        <Title>비밀번호 변경</Title>
        <SetNewPwdForm pw={pw} setPw={setPw} handleClickButton={handleClickButton} />
      </Container>
      {isOpen && <SettingPwdSuccessModal setIsOpen={setIsOpen} url="/login" />}
    </div>
  );
}

export default SetNewPwd;
