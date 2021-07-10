import Label from 'components/atoms/Label';
import React, { useState, useEffect } from 'react';
import Styled from 'styled-components';
import FindPWDForm from 'components/molecules/FindPwdForm';
import Button from 'components/atoms/Button';

export interface IProps {
  className?: string;
}

function FindPWD({ ...props }: IProps): React.ReactElement {
  const [data, setData] = useState({
    email: '',
    certifiNum: 0,
  });
  const [isConditionMet, setIsConditionMet] = useState({
    email: false,
    certifiNum: false,
  });
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  useEffect(() => {
    if (isConditionMet.email && isConditionMet.certifiNum) setIsBtnDisabled(true);
    else setIsBtnDisabled(false);
  });
  return (
    <FindPWDWrap isBtnDisabled={isBtnDisabled}>
      <Label name="비밀번호 찾기" className="findPwd__label--title" />
      <FindPWDForm
        data={data}
        setData={setData}
        isConditionMet={isConditionMet}
        setIsConditionMet={setIsConditionMet}
      />
      <Button className="findPwd__button" disabled={isConditionMet.email && isConditionMet.certifiNum}>
        인증완료
      </Button>
    </FindPWDWrap>
  );
}

const FindPWDWrap = Styled.div<{ isBtnDisabled: boolean }>`
    display : flex;
    flex-direction : column;
    align-items : center;
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
