import { patchNewPwd } from 'apis';
import { CheckedIcon } from 'assets/images';
import { StyledInput } from 'components/atoms';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Background,
  Btn,
  CheckIcon,
  ColoredTxt,
  Container,
  InnerModalWrap,
  InputWrapper,
  Message,
  ModalWrap,
  Title,
} from './style';

interface IProps {
  email: string;
  history?: any;
}

function SetNewPwd({ email }: IProps): React.ReactElement {
  // 새 비밀번호 다시 입력한 것과 같은지 체크
  const [isOkay, setIsOkay] = useState({
    pw: false,
    pwCheck: false,
  });
  // 새 비밀번호
  const [pw, setPw] = useState({
    pw: '',
    pwCheck: '',
  });
  // 모달 오픈
  const [isOpen, setIsOpen] = useState(false);

  const handleClickBtn = async () => {
    const res = await patchNewPwd(email, pw.pw);
    if (res) {
      setIsOpen(true);
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
        <InputWrapper>
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
        </InputWrapper>
        <InputWrapper>
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
        </InputWrapper>
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
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </div>
  );
}

export default SetNewPwd;

const Modal = ({ setIsOpen }: { setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const history = useHistory();
  return (
    <>
      <Background
        onClick={() => {
          setIsOpen(false);
          history.push('/login');
        }}
      />
      <ModalWrap>
        <InnerModalWrap>
          <CheckIcon>
            <img src={CheckedIcon} alt="check_icon" />
          </CheckIcon>
          <ColoredTxt>완료</ColoredTxt>
          <Message>비밀번호 변경이 완료되었습니다</Message>
        </InnerModalWrap>
      </ModalWrap>
    </>
  );
};
