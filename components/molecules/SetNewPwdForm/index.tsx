import { StyledInput } from 'components/atoms';
import React, { useEffect, useState } from 'react';
import * as S from './style';

interface IPW {
  pw: string;
  pwCheck: string;
}

interface IProps {
  pw: IPW;
  setPw: (value: IPW) => void;
  handleClickButton: () => Promise<void>;
}

function SetNewPwdForm({ pw, setPw, handleClickButton }: IProps): React.ReactElement {
  // 새 비밀번호 다시 입력한 것과 같은지 체크
  const [isOkay, setIsOkay] = useState({
    pw: false,
    pwCheck: false,
  });

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    pw.pw !== '' && pw.pw.match('^(?=.*[a-z])(?=.*[A-Z])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&]')
      ? setIsOkay({
          ...isOkay,
          pw: true,
        })
      : setIsOkay({
          ...isOkay,
          pw: false,
        });
  }, [pw.pw]);

  useEffect(() => {
    pw.pwCheck === pw.pw
      ? setIsOkay({
          ...isOkay,
          pwCheck: true,
        })
      : setIsOkay({
          ...isOkay,
          pwCheck: false,
        });
  }, [pw.pwCheck]);

  return (
    <>
      <S.InputWrapper>
        <StyledInput
          width="406px"
          height="60px"
          isPw={true}
          placeHolder="새로운 비밀번호를 입력해 주세요"
          onChange={(e) =>
            setPw({
              ...pw,
              pw: String(e),
            })
          }
          isConditionMet={isOkay.pw}
          errorMsg="영어 대문자, 소문자, 특수문자가 포함되어야 합니다"
        />
      </S.InputWrapper>
      <S.InputWrapper>
        <StyledInput
          width="406px"
          height="60px"
          isPw={true}
          placeHolder="새로운 비밀번호를 다시 입력해 주세요"
          onChange={(e) =>
            setPw({
              ...pw,
              pwCheck: String(e),
            })
          }
          isConditionMet={isOkay.pwCheck}
          errorMsg="비밀번호가 일치하지 않습니다"
        />
      </S.InputWrapper>
      <S.Btn
        isActive={isOkay.pw && isOkay.pwCheck}
        onClick={
          isOkay.pw && isOkay.pwCheck
            ? handleClickButton
            : () => {
                console.log('');
              }
        }
      >
        비밀번호 변경
      </S.Btn>
    </>
  );
}

export default SetNewPwdForm;
