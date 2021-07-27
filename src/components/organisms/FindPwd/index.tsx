import { sendVerifinum } from 'apis';
import Button from 'components/atoms/Button';
import Label from 'components/atoms/Label';
import FindPWDForm from 'components/molecules/FindPwdForm';
import SetNewPwd from 'components/organisms/SetNewPwd';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Styled from 'styled-components';

export interface IProps {
  className?: string;
}

function FindPWD(): React.ReactElement {
  const history = useHistory();
  const [data, setData] = useState({
    email: '',
    certifiNum: '',
  });
  const [isConditionMet, setIsConditionMet] = useState({
    email: false,
    certifiNum: false,
  });
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const finishBtnHandler = async () => {
    const isSuccess = await sendVerifinum(data.email, data.certifiNum);
    if (isSuccess) setIsChangePwd(true);
    else {
      setVerifiErrMsg('인증번호를 다시 확인해 주세요');
      setIsConditionMet({ ...isConditionMet, certifiNum: false });
    }
  };
  const [verifiErrMsg, setVerifiErrMsg] = useState('');
  const [isChangePwd, setIsChangePwd] = useState(false);
  useEffect(() => {
    if (isConditionMet.email && isConditionMet.certifiNum) setIsBtnDisabled(true);
    else setIsBtnDisabled(false);
  });
  return !isChangePwd ? (
    <FindPWDWrap isBtnDisabled={isBtnDisabled}>
      <Label className="findPwd__label--title">비밀번호 찾기</Label>
      <FindPWDForm
        data={data}
        setData={setData}
        isConditionMet={isConditionMet}
        setIsConditionMet={setIsConditionMet}
        errMsg={verifiErrMsg}
      />
      <Button
        className="findPwd__button"
        disabled={!(isConditionMet.email && isConditionMet.certifiNum)}
        onClick={finishBtnHandler}
      >
        인증완료
      </Button>
    </FindPWDWrap>
  ) : (
    <SetNewPwd email={data.email} />
  );
}

const FindPWDWrap = Styled.div<{ isBtnDisabled: boolean }>`
    display : flex;
    flex-direction : column;
    align-items : center;
    margin-top : 230px;
    margin-bottom : 250px;
    .modal{
      &__container{
        
      }
      &__iconBack{

      }
    }
    .findPwd{
        &__label{
            &--title{
                font-size: 36px;
                font-weight: bold;
                line-height: 1.22;
                letter-spacing: -0.5px;
                color : #0d0d0d;
                margin-bottom : 60px;
            }
            &--subtitle{
                font-size: 18px;
                font-weight: bold;
                line-height: 1.33;
                letter-spacing: -0.5px;
                color : #0d0d0d;
            }
        }
        &__button{
            margin-top : 14px;
            width : 406px;
            height : 60px;
            padding : 19px 176px;
            border-radius : 4px;
            color : #ffffff;
            font-size: 16px;
            font-weight: bold;
            line-height: 1.38;
            letter-spacing: -0.5px;
            background-image : ${(props) => props.isBtnDisabled && 'linear-gradient(to right , #36c8f5, #13e2dd)'};
            background-color : ${(props) => !props.isBtnDisabled && '#dfdfdf'};
        }
    }
`;

export default FindPWD;
