import { Modal } from 'components/atoms';
import Link from 'next/link';
import { LoginAlertIcon } from 'public/assets/images';
import React from 'react';
import {
  ButtonContainer,
  CancelButton,
  LoginButton,
  LoginModalWrapper,
  LoginNotice,
  LoginNoticeDetail,
  LoginNoticeTitle,
} from './style';
interface IProps {
  isLoginModalOpen: boolean;
  setIsLoginModalOpen: (value: boolean) => void;
}

function LoginModal({ isLoginModalOpen, setIsLoginModalOpen }: IProps): React.ReactElement {
  const handleCloseButton = () => {
    setIsLoginModalOpen(false);
  };
  return (
    <Modal isOpen={isLoginModalOpen} setIsOpen={setIsLoginModalOpen} isBlur={true}>
      <LoginModalWrapper>
        <LoginNotice>
          <img src={LoginAlertIcon} alt=""></img>
          <LoginNoticeTitle>앗!</LoginNoticeTitle>
          <LoginNoticeDetail>로그인이 필요한 서비스입니다</LoginNoticeDetail>
        </LoginNotice>
        <ButtonContainer>
          <CancelButton onClick={handleCloseButton}>취소</CancelButton>
          <Link href="/login">
            <LoginButton>로그인하기</LoginButton>
          </Link>
        </ButtonContainer>
      </LoginModalWrapper>
    </Modal>
  );
}

export default LoginModal;