import { postNewPw } from 'apis';
import { CheckedIcon } from 'assets/images';
import { StyledInput } from 'components/atoms';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import {
  Background,
  Btn,
  CheckIcon,
  Container,
  InnerModalWrap,
  ModalText,
  ModalTitle,
  ModalWrap,
  PwdInputWrapper,
  Title,
} from './style';

function SetPwd({ history }: any): React.ReactElement {
  const userStatusData = useRecoilValue(userStatusState);

  // 기존 비밀번호 체크
  const [isOldPwOkay, setIsOldPwOkay] = useState(true);
  // 새 비밀번호 다시 입력한 것과 같은지 체크
  const [isOkay, setIsOkay] = useState({
    pw: false,
    pwCheck: false,
  });
  // 기존 비밀번호
  const [oldPw, setOldPw] = useState('');
  // 새 비밀번호
  const [pw, setPw] = useState({
    pw: '',
    pwCheck: '',
  });
  // 모달 오픈
  const [isOpen, setIsOpen] = useState(false);

  const handleClickBtn = async () => {
    const res = await postNewPw(userStatusData?.token, oldPw, pw.pw);
    if (res) {
      // 모달 오픈
      setIsOldPwOkay(true);
      setIsOpen(true);
      // 다음 페이지로 이동
    } else {
      setIsOldPwOkay(false);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    pw.pw !== '' && pw.pw.match(/([a-zA-Z0-9].*[!,@,#,$,%,^,&,*,?,_,~,-])|([!,@,#,$,%,^,&,*,?,_,~,-].*[a-zA-Z0-9])/)
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
    <div>
      <Container>
        <Title>비밀번호 변경</Title>
        <PwdInputWrapper>
          <StyledInput
            width="406px"
            height="60px"
            isPw={true}
            placeHolder="현재 비밀번호를 입력해 주세요"
            onChange={(e) => setOldPw(String(e))}
            isConditionMet={isOldPwOkay}
            errorMsg="현재 비밀번호가 일치하지 않습니다"
          />
        </PwdInputWrapper>
        <PwdInputWrapper>
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
        </PwdInputWrapper>
        <PwdInputWrapper>
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
        </PwdInputWrapper>
        <Btn
          isActive={isOkay.pw && isOkay.pwCheck}
          onClick={
            isOkay.pw && isOkay.pwCheck
              ? handleClickBtn
              : () => {
                  console.log('');
                }
          }
        >
          비밀번호 변경
        </Btn>
      </Container>
      {isOpen && <Modal setIsOpen={setIsOpen} history={history} />}
    </div>
  );
}

export default SetPwd;

const Modal = ({ setIsOpen, history }: { setIsOpen: React.Dispatch<React.SetStateAction<boolean>>; history: any }) => {
  return (
    <>
      <Background
        onClick={() => {
          setIsOpen(false);
          history.push('/setting');
        }}
      />
      <ModalWrap>
        <InnerModalWrap>
          <CheckIcon>
            <img src={CheckedIcon} alt="check_icon" />
          </CheckIcon>
          <ModalTitle>완료</ModalTitle>
          <ModalText>비밀번호 변경이 완료되었습니다.</ModalText>
        </InnerModalWrap>
      </ModalWrap>
    </>
  );
};
