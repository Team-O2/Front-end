import checkIcon from 'assets/images/checkIcon.svg';
import Button from 'components/atoms/Button';
import Label from 'components/atoms/Label';
import Modal from 'components/atoms/Modal';
import StyledInput from 'components/atoms/StyledInput';
import { sendEmail } from 'libs/axios';
import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';

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
  data: IData;
  setData: (value: IData) => void;
  isConditionMet: IIsconditionMet;
  setIsConditionMet: (value: IIsconditionMet) => void;
}

function FindPWDForm({ data, setData, isConditionMet, setIsConditionMet }: IProps): React.ReactElement {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [certifiNum, setCertifiNum] = useState('');
  const [emailErrMsg, setEmailErrMsg] = useState('');
  const numSendBtnHandler = async () => {
    const isSuccess = await sendEmail(email);
    // setIsModalOpen(isSuccess);
  };

  useEffect(() => {
    setData({
      email: email,
      certifiNum: certifiNum,
    });
  }, [email, certifiNum]);

  useEffect(() => {
    if (email.includes('@')) {
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
    <FindPWDFormWrap isConditionMet={isConditionMet}>
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
      />
      <Modal isOpen={isModalOpen} isBlur={true} setIsOpen={setIsModalOpen}>
        <div className="modal__container">
          <div className="modal__iconBack">
            <img src={checkIcon} alt="modal__icon" />
          </div>
          <div className="modal__title">전송완료!</div>
          <div className="modal__exp">비밀번호 변경이 완료되었습니다</div>
        </div>
      </Modal>
    </FindPWDFormWrap>
  );
}

const FindPWDFormWrap = Styled.div<{ isConditionMet: { email: boolean; certifiNum: boolean } }>`
    width : 406px;
    display :flex;
    flex-direction : column;

    .findPwd{
        &__label{
            &--subtitle{
                font-size: 18px;
                font-weight: bold;
                line-height: 1.33;
                letter-spacing: -0.5px;
                color : #0d0d0d;
                margin-bottom : 8px;
            }
        }
        &__button{
            &--sendNum{
                background-image : ${(props) =>
                  props.isConditionMet.email && 'linear-gradient(to right , #36c8f5, #13e2dd)'};
                background-color : ${(props) => !props.isConditionMet.email && '#dfdfdf'};
                width : 134px;
                height 60px;
                padding : 19px 25px;
                border-radius : 4px;
                color : #ffffff;
                font-size : 16px;
                font-weight : bold;
                line-height: 1.38;
                letter-spacing: -0.5px;
                
            }
        }
        &__container{
            &--emailFlex{
                display : flex;
                justify-content : space-between;
                margin-bottom : 40px;
            }
        }
    }
`;

export default FindPWDForm;
