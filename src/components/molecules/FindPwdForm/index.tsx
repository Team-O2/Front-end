import { sendEmail } from 'apis';
import { CheckedIcon } from 'assets/images';
import { Button, Label, Modal, StyledInput } from 'components/atoms';
import React, { useEffect, useState } from 'react';
import { SFindPWDFormWrap } from './style';

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
    setIsModalOpen(isSuccess);
  };

  useEffect(() => {
    setData({
      email: email,
      certifiNum: certifiNum,
    });
  }, [email, certifiNum, setData]);

  useEffect(() => {
    if (email.includes('@')) {
      setIsConditionMet({ ...isConditionMet, email: true });
    } else {
      setIsConditionMet({ ...isConditionMet, email: false });
      setEmailErrMsg('올바르지 않은 형식입니다');
    }
  }, [email, isConditionMet, setIsConditionMet]);
  useEffect(() => {
    const certifinumMatch = /[0-9]{6}$/;
    if (certifinumMatch.test(certifiNum)) {
      setIsConditionMet({ ...isConditionMet, certifiNum: true });
    } else {
      setIsConditionMet({ ...isConditionMet, certifiNum: false });
    }
  }, [certifiNum, isConditionMet, setIsConditionMet]);

  return (
    <SFindPWDFormWrap isConditionMet={isConditionMet}>
      <Label className="findPwd__label--subtitle">아이디</Label>
      <div className="findPwd__container--emailFlex">
        <StyledInput
          placeHolder="아이디(이메일)를 입력해 주세요"
          width="258px"
          height="60px"
          onChange={(value) => {
            if (typeof value === 'string') setEmail(value);
          }}
          isConditionMet={isConditionMet.email}
          errorMsg={emailErrMsg}
        />
        <Button className="findPwd__button--sendNum" disabled={!isConditionMet.email} onClick={numSendBtnHandler}>
          인증번호 전송
        </Button>
      </div>
      <Label className="findPwd__label--subtitle">인증번호</Label>
      <StyledInput
        placeHolder="인증번호를 입력해 주세요"
        width="406px"
        height="60px"
        onChange={(value) => {
          if (typeof value === 'string') setCertifiNum(value);
        }}
        isConditionMet={isConditionMet.certifiNum}
        errorMsg={errMsg}
      />
      <Modal isOpen={isModalOpen} isBlur={true} setIsOpen={setIsModalOpen}>
        <div className="modal__container">
          <div className="modal__iconBack">
            <img src={CheckedIcon} alt="modal__icon" />
          </div>
          <div className="modal__title dp4">전송완료!</div>
          <div className="modal__exp body4">
            <span>{email}</span>으로
            <br />
            인증번호를 보냈습니다.
            <br />
            이메일을 확인해주세요
          </div>
        </div>
      </Modal>
    </SFindPWDFormWrap>
  );
}
export default FindPWDForm;
