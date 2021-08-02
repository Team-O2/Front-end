import { LoginAlertIcon } from 'assets/images';
import { Button, Link, Modal } from 'components/atoms';
import React from 'react';
import Styled from 'styled-components';

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
      <Wrapper>
        <div className="login__notice">
          <img className="login__img" src={LoginAlertIcon} alt=""></img>
          <div className="login__title">앗!</div>
          <div className="login__detail">로그인이 필요한 서비스입니다</div>
        </div>
        <div className="login__button">
          <Button className="login__cancel" onClick={handleCloseButton}>
            취소
          </Button>
          <Link to="/login">
            <Button className="login__login">로그인하기</Button>
          </Link>
        </div>
      </Wrapper>
    </Modal>
  );
}

const Wrapper = Styled.div`
  position: fixed;
  top:0;
  right:0;
  bottom:0;
  left:0;
  margin:auto;
  border-radius: 16px;
  background-color: #FFFFFF;
  width: 500px;
  height: 312px;
  &__notice{
    padding: 0px 80px 0px 80px;
  }
  &__img{
    display:flex;
    margin:auto;
    margin-top:-40px;
  }
  &__title{
    padding:20px 0px 20px 0px;
    text-align: center;
    line-height: 1.42;
    letter-spacing: -0.5px;
    color: #000000;
    font-size: 48px;
    font-weight: bold;
  }
  &__detail{
    text-align: center;
    line-height: 1.5;
    letter-spacing: -0.5px;
    color: var(--colors-grayscale-0-d-black);
    font-size: 16px;
  }
  &__button{
    padding-top:50px;
    text-align: center;
  }
  &__cancel{
    line-height: 1.33;
    letter-spacing: -0.5px;
    color:#c1c1c1;
    font-size: 18px;
    font-weight: bold;
  }
  &__login{
    padding-left:170px;
    line-height: 1.33;
    letter-spacing: -0.5px;
    color: #03b6ce;
    font-size: 18px;
    font-weight: bold;;
  }
`;
export default LoginModal;
