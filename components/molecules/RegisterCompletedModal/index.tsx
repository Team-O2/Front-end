import { Button, Icon, Modal } from 'components/atoms';
import { CheckCircleIcon } from 'public/assets/images';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from 'stores/user';
import { ButtonWrapper, ImgWrapper, RegisterSubmitWrapper } from './style';

interface IProps {
  isRegisterSubmit: boolean;
  setIsRegisterSubmit: (value: boolean) => void;
}

function RegisterCompletedModal({ isRegisterSubmit, setIsRegisterSubmit }: IProps): React.ReactElement {
  const userData = useRecoilValue(userState);
  const handleConfirmButton = () => {
    setIsRegisterSubmit(false);
  };
  return (
    <Modal isOpen={isRegisterSubmit} setIsOpen={setIsRegisterSubmit} isBlur={true}>
      <RegisterSubmitWrapper>
        <ImgWrapper>
          <Icon src={CheckCircleIcon} alt=""></Icon>
        </ImgWrapper>
        <h5>신청완료!</h5>
        <p>{userData?.nickname}님 챌린지가 정상적으로</p>
        <p> 신청되었습니다.</p>
        <ButtonWrapper>
          <Button onClick={handleConfirmButton}>확인</Button>
        </ButtonWrapper>
      </RegisterSubmitWrapper>
    </Modal>
  );
}

export default RegisterCompletedModal;
