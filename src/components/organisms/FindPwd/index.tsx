import { sendVerifinum } from 'apis';
import { Button, Label } from 'components/atoms';
import { FindPwdForm } from 'components/molecules';
import { SetNewPwd } from 'components/organisms';
import React, { useEffect, useState } from 'react';
import { SFindPWDWrap } from './style';

export interface IProps {
  className?: string;
}

function FindPWD(): React.ReactElement {
  const [data, setData] = useState({
    email: '',
    certifiNum: '',
  });
  const [isConditionMet, setIsConditionMet] = useState({
    email: false,
    certifiNum: false,
  });
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const finishBtnHandler = async () => {
    const isSuccess = await sendVerifinum(data.email, data.certifiNum);
    if (isSuccess) setIsChangePwd(true);
    else {
      setVerifiErrMsg('인증번호를 다시 확인해 주세요');
      setIsConditionMet({ ...isConditionMet, certifiNum: false });
    }
  };
  const [verifiErrMsg, setVerifiErrMsg] = useState('');
  const [isChangePwd, setIsChangePwd] = useState(false);

  useEffect(() => {
    if (isConditionMet.email && isConditionMet.certifiNum) setIsBtnDisabled(true);
    else setIsBtnDisabled(false);
  }, [isConditionMet.certifiNum, isConditionMet.email]);

  return !isChangePwd ? (
    <SFindPWDWrap isBtnDisabled={isBtnDisabled}>
      <Label className="findPwd__label--title">비밀번호 찾기</Label>
      <FindPwdForm
        setData={setData}
        isConditionMet={isConditionMet}
        setIsConditionMet={setIsConditionMet}
        errMsg={verifiErrMsg}
      />
      <Button
        className="findPwd__button"
        disabled={!(isConditionMet.email && isConditionMet.certifiNum)}
        onClick={finishBtnHandler}
      >
        인증완료
      </Button>
    </SFindPWDWrap>
  ) : (
    <SetNewPwd email={data.email} />
  );
}

export default FindPWD;
