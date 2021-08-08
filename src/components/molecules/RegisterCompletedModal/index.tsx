import { CheckCircleIcon } from 'assets/images';
import { Modal } from 'components/atoms';
import React from 'react';
import { useRecoilState } from 'recoil';
import { userState } from 'stores/user';
import { RegisterSubmitWrapper } from './style';

interface IProps {
  isRegisterSubmit: boolean;
  setIsRegisterSubmit: (value: boolean) => void;
}

function RegisterCompletedModal({ isRegisterSubmit, setIsRegisterSubmit }: IProps): React.ReactElement {
  const [userData, setUserData] = useRecoilState(userState);
  return (
    <Modal isOpen={isRegisterSubmit} setIsOpen={setIsRegisterSubmit} isBlur={true}>
      <RegisterSubmitWrapper>
        <img src={CheckCircleIcon} alt=""></img>
        <h5>신청완료!</h5>
        <p>{userData?.nickname}님 챌린지가 정상적으로</p>
        <p> 신청되었습니다.</p>
      </RegisterSubmitWrapper>
    </Modal>
  );
}

export default RegisterCompletedModal;
