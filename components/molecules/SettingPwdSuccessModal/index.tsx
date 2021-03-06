import { Button } from 'components/atoms';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { CheckedIcon } from 'public/assets/images';
import React from 'react';
import * as S from './style';
import { ButtonWrapper } from './style';

interface IProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  url: string;
}

function SettingPwdSuccessModal({ setIsOpen, url }: IProps): React.ReactElement {
  const history = useRouter();

  const handleOnClick = () => {
    setIsOpen(false);
    history.push(url);
  };

  return (
    <>
      <S.Background onClick={handleOnClick} />
      <S.ModalWrap>
        <S.InnerModalWrap>
          <S.CheckIcon>
            <Image src={CheckedIcon} alt="check_icon" />
          </S.CheckIcon>
          <S.ColoredTxt>완료</S.ColoredTxt>
          <S.Message>비밀번호 변경이 완료되었습니다</S.Message>
          <ButtonWrapper>
            <Button onClick={handleOnClick}>확인</Button>
          </ButtonWrapper>
        </S.InnerModalWrap>
      </S.ModalWrap>
    </>
  );
}

export default SettingPwdSuccessModal;
