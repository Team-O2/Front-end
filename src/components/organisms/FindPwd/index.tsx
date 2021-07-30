import { sendVerifinum } from 'apis';
import Button from 'components/atoms/Button';
import Label from 'components/atoms/Label';
import FindPWDForm from 'components/molecules/FindPwdForm';
import SetNewPwd from 'components/organisms/SetNewPwd';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SFindPWDWrap from './style';

export interface IProps {
  className?: string;
}

function FindPWD(): React.ReactElement {
  const history = useHistory();
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
  });
  return !isChangePwd ? (
    <SFindPWDWrap isBtnDisabled={isBtnDisabled}>
      <Label className="findPwd__label--title">비밀번호 찾기</Label>
      <FindPWDForm
        data={data}
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
