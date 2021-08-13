import { CheckedIcon } from 'assets/images';
import React from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './style';

interface IProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  url: string;
}

function SettingPwdSuccessModal({ setIsOpen, url }: IProps): React.ReactElement {
  const history = useHistory();

  return (
    <>
      <S.Background
        onClick={() => {
          setIsOpen(false);
          history.push(url);
        }}
      />
      <S.ModalWrap>
        <S.InnerModalWrap>
          <S.CheckIcon>
            <img src={CheckedIcon} alt="check_icon" />
          </S.CheckIcon>
          <S.ColoredTxt>완료</S.ColoredTxt>
          <S.Message>비밀번호 변경이 완료되었습니다</S.Message>
        </S.InnerModalWrap>
      </S.ModalWrap>
    </>
  );
}

export default SettingPwdSuccessModal;
