import { Button, Modal } from 'components/atoms';
import Image from 'next/image';
import { CheckedIcon } from 'public/assets/images';
import React from 'react';
import { ButtonWrapper, ModalEXP, ModalIconWrapper, ModalTitle, SuccessModal } from './style';

interface IProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  email: string;
}

function FindPwdModal({ isModalOpen, setIsModalOpen, email }: IProps): React.ReactElement {
  const handleConfirmButton = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal isOpen={isModalOpen} isBlur={true} setIsOpen={setIsModalOpen}>
      <SuccessModal>
        <ModalIconWrapper>
          <Image src={CheckedIcon} alt="modal__icon" />
        </ModalIconWrapper>
        <ModalTitle>전송완료!</ModalTitle>
        <ModalEXP>
          <span>{email}</span>으로
          <br />
          인증번호를 보냈습니다.
          <br />
          이메일을 확인해주세요
        </ModalEXP>
        <ButtonWrapper>
          <Button onClick={handleConfirmButton}>확인</Button>
        </ButtonWrapper>
      </SuccessModal>
    </Modal>
  );
}

export default FindPwdModal;
