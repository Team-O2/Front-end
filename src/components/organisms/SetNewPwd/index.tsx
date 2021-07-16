import checkIcon from 'assets/images/checkIcon.svg';
import StyledInput from 'components/atoms/StyledInput';
import { patchNewPwd } from 'libs/axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import styled, { css } from 'styled-components';
interface IProps {
  email: string;
  history?: any;
}

function SetNewPwd({ email }: IProps): React.ReactElement {
  const userStatusData = useRecoilValue(userStatusState);
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
        <div style={{ marginBottom: '60px', fontSize: '36px', fontWeight: 700, color: '#0d0d0d' }}>비밀번호 변경</div>
        <div style={{ marginBottom: '14px' }}>
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
        </div>
        <div style={{ marginBottom: '14px' }}>
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
        </div>
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

const Container = styled.div`
  position: relative;
  top: -60px;
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

interface IBtn {
  isActive: boolean;
}

const Btn = styled.div<IBtn>`
  cursor: pointer;

  width: 406px;
  height: 60px;
  border-radius: 4px;
  background-color: #dfdfdf;
  ${(props) =>
    props.isActive &&
    css`
      background-image: linear-gradient(to right, #36c8f5, #13e2dd);
    `}

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  font-weight: 700;
  line-height: 1.38;
  color: #ffffff;
`;

const Modal = ({ setIsOpen }: { setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const history = useHistory();
  return (
    <>
      <Background
        onClick={() => {
          setIsOpen(false);
          history.push('login');
        }}
      />
      <ModalWrap>
        <InnerModalWrap>
          <CheckIcon>
            <img src={checkIcon} alt="check_icon" />
          </CheckIcon>
          <ColoredTxt>완료</ColoredTxt>
          <div
            style={{
              width: '320px',
              height: '73px',
              textAlign: 'center',
              lineHeight: '73px',
              fontSize: '16px',
              fontWeight: 500,
              color: '#0d0d0d',
            }}
          >
            비밀번호 변경이 완료되었습니다
          </div>
        </InnerModalWrap>
      </ModalWrap>
    </>
  );
};

const Background = styled.div`
  position: fixed;
  top: 0;
  z-index: 1000;

  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;

  width: 500px;
  height: 273px;
  border-radius: 16px;
  border-width: 0.1rem;
  border-style: solid;
  border-image-source: linear-gradient(to top, #36c8f5, #13e2dd);
  border-image-slice: 1;
  background-image: linear-gradient(to bottom, #36c8f5, #13e2dd), linear-gradient(to top, #36c8f5, #13e2dd);
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

const InnerModalWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1002;

  width: 49.6rem;
  height: 26.9rem;
  border-radius: 15px;
  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CheckIcon = styled.div`
  position: relative;
  top: -2.8rem;

  width: 9rem;
  height: 9rem;
  border-radius: 4.5rem;
  background-image: linear-gradient(to right, #36c8f5, #13e2dd);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ColoredTxt = styled.div`
  width: 83px;
  height: 68px;
  position: relative;
  top: -8px;
  margin-bottom: 1.2rem;

  font-size: 4.6rem;
  font-weight: 700;
  text-align: center;
  line-height: 68px;
  background: linear-gradient(to right, #36c8f5, #13e2dd);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
