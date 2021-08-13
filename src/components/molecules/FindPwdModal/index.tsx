import { CheckedIcon } from 'assets/images';
import { Modal } from 'components/atoms';
import React from 'react';
import { ModalEXP, ModalIconWrapper, ModalTitle, SuccessModal } from './style';

interface IProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  email: string;
}

function FindPwdModal({ isModalOpen, setIsModalOpen, email }: IProps) {
  return (
    <Modal isOpen={isModalOpen} isBlur={true} setIsOpen={setIsModalOpen}>
      <SuccessModal>
        <ModalIconWrapper>
          <img src={CheckedIcon} alt="modal__icon" />
        </ModalIconWrapper>
        <ModalTitle>전송완료!</ModalTitle>
        <ModalEXP>
          <span>{email}</span>으로
          <br />
          인증번호를 보냈습니다.
          <br />
          이메일을 확인해주세요
        </ModalEXP>
      </SuccessModal>
    </Modal>
  );
}

export default FindPwdModal;
