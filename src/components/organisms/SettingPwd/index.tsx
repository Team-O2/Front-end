import { StyledInput } from 'components/atoms';
import { SetNewPwdForm } from 'components/molecules';
import React from 'react';
import * as S from './style';

interface IProps {
  isOldPwOkay: boolean;
  pw: {
    pw: string;
    pwCheck: string;
  };
  setPw: (value: { pw: string; pwCheck: string }) => void;
  handleClickButton: () => Promise<void>;
  handleOnChange: (value: string) => void;
}

function SettingPwd({ isOldPwOkay, pw, setPw, handleOnChange, handleClickButton }: IProps): React.ReactElement {
  return (
    <S.Container>
      <S.Title>비밀번호 변경</S.Title>
      <S.PwdInputWrapper>
        <StyledInput
          width="406px"
          height="60px"
          isPw={true}
          placeHolder="현재 비밀번호를 입력해 주세요"
          onChange={handleOnChange}
          isConditionMet={isOldPwOkay}
          errorMsg="현재 비밀번호가 일치하지 않습니다"
        />
      </S.PwdInputWrapper>
      <SetNewPwdForm pw={pw} setPw={setPw} handleClickButton={handleClickButton} />
    </S.Container>
  );
}

export default SettingPwd;
