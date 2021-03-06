import { sendEmail } from 'apis';
import { StyledInput } from 'components/atoms';
import { FindPwdModal } from 'components/molecules';
import React, { useEffect, useState } from 'react';
import { InputForm, NumberSendButton, SubTitle, Wrapper } from './style';

interface IData {
  email: string;
  certifiNum: string;
}

interface IIsconditionMet {
  email: boolean;
  certifiNum: boolean;
}

export interface IProps {
  className?: string;
  setData: (value: IData) => void;
  isConditionMet: IIsconditionMet;
  setIsConditionMet: (value: IIsconditionMet) => void;
  errMsg?: string;
}

function FindPWDForm({ setData, isConditionMet, setIsConditionMet, errMsg }: IProps): React.ReactElement {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [certifiNum, setCertifiNum] = useState('');
  const [emailErrMsg, setEmailErrMsg] = useState('');
  const numSendBtnHandler = async () => {
    const isSuccess = await sendEmail(email);
    setIsModalOpen(true);
  };

  useEffect(() => {
    setData({
      email: email,
      certifiNum: certifiNum,
    });
  }, [email, certifiNum, setData]);

  useEffect(() => {
    const emailCheck = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if (emailCheck.test(email)) {
      setIsConditionMet({ ...isConditionMet, email: true });
    } else {
      setIsConditionMet({ ...isConditionMet, email: false });
      setEmailErrMsg('올바르지 않은 형식입니다');
    }
  }, [email]);

  useEffect(() => {
    const certifinumMatch = /[0-9]{6}$/;
    if (certifinumMatch.test(certifiNum)) {
      setIsConditionMet({ ...isConditionMet, certifiNum: true });
    } else {
      setIsConditionMet({ ...isConditionMet, certifiNum: false });
    }
  }, [certifiNum]);

  return (
    <Wrapper>
      <SubTitle>아이디</SubTitle>
      <InputForm>
        <StyledInput
          placeHolder="아이디(이메일)를 입력해 주세요"
          width="258px"
          height="60px"
          onChange={(value) => {
            setEmail(value);
          }}
          isConditionMet={isConditionMet.email}
          errorMsg={emailErrMsg}
        />
        <NumberSendButton isConditionMet={isConditionMet} disabled={!isConditionMet.email} onClick={numSendBtnHandler}>
          인증번호 전송
        </NumberSendButton>
      </InputForm>
      <SubTitle>인증번호</SubTitle>
      <StyledInput
        placeHolder="인증번호를 입력해 주세요"
        width="406px"
        height="60px"
        onChange={(value) => {
          setCertifiNum(value);
        }}
        isConditionMet={isConditionMet.certifiNum}
        errorMsg={errMsg}
      />
      {isModalOpen && <FindPwdModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} email={email} />}
    </Wrapper>
  );
}
export default FindPWDForm;
