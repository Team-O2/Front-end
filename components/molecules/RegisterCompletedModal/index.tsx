import { Modal } from 'components/atoms';
import Image from 'next/image';
import { CheckCircleIcon } from 'public/assets/images';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from 'stores/user';
import { RegisterSubmitWrapper } from './style';

interface IProps {
  isRegisterSubmit: boolean;
  setIsRegisterSubmit: (value: boolean) => void;
}

function RegisterCompletedModal({ isRegisterSubmit, setIsRegisterSubmit }: IProps): React.ReactElement {
  const userData = useRecoilValue(userState);
  return (
    <Modal isOpen={isRegisterSubmit} setIsOpen={setIsRegisterSubmit} isBlur={true}>
      <RegisterSubmitWrapper>
        <Image src={CheckCircleIcon} alt=""></Image>
        <h5>신청완료!</h5>
        <p>{userData?.nickname}님 챌린지가 정상적으로</p>
        <p> 신청되었습니다.</p>
      </RegisterSubmitWrapper>
    </Modal>
  );
}

export default RegisterCompletedModal;
