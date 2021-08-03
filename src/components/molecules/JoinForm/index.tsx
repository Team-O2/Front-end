import { StyledInput } from 'components/atoms';
import { DropDown, JoinCheck } from 'components/molecules';
import React, { useEffect, useState } from 'react';
import { IJoinConditionMet } from 'types/join.type';
import { IUserDataType } from 'types/user.type';
import { SubTitle, Wrapper } from './style';

export interface IProps {
  className?: string;
  isConditionMet: IJoinConditionMet;
  userData: IUserDataType;
  setUserData: (value: IUserDataType) => void;
  setIsConditionMet: (value: IJoinConditionMet) => void;
}

function JoinForm({ isConditionMet, userData, setUserData, setIsConditionMet }: IProps): React.ReactElement {
  const [gender, setGender] = useState('선택안함');
  const changeGenderStringtoNum = (gender: string) => {
    switch (gender) {
      case '남성':
        return 0;
      case '여성':
        return 1;
      default:
        return 2;
    }
  };

  useEffect(() => {
    setUserData({ ...userData, gender: changeGenderStringtoNum(gender) });
  }, [gender]);

  //입력값이 달라질때마다 조건 충족여부 파악하는 useEffect
  useEffect(() => {
    if (userData.email.includes('@')) {
      setIsConditionMet({ ...isConditionMet, email: true });
    } else {
      setIsConditionMet({ ...isConditionMet, email: false });
    }
  }, [userData.email]);
  useEffect(() => {
    if (userData.password.match(/([a-zA-Z0-9].*[!,@,#,$,%,^,&,*,?,_,~,-])|([!,@,#,$,%,^,&,*,?,_,~,-].*[a-zA-Z0-9])/)) {
      setIsConditionMet({ ...isConditionMet, password: true });
    } else {
      setIsConditionMet({ ...isConditionMet, password: false });
    }
  }, [userData.password]);
  useEffect(() => {
    if (userData.password.length > 0 && userData.password === userData.passwordCheck) {
      setIsConditionMet({ ...isConditionMet, passwordCheck: true });
    } else {
      setIsConditionMet({ ...isConditionMet, passwordCheck: false });
    }
  }, [userData.passwordCheck]);
  useEffect(() => {
    const check = /^[ㄱ-ㅎ|가-힣|0-9|.,_,]+$/;
    if (!check.test(userData.nickname) || userData.nickname.length > 6) {
      setIsConditionMet({ ...isConditionMet, nickname: false });
    } else if (userData.nickname.length > 0) {
      setIsConditionMet({ ...isConditionMet, nickname: true });
    } else {
      setIsConditionMet({ ...isConditionMet, nickname: false });
    }
  }, [userData.nickname]);
  useEffect(() => {
    if (userData.policyMust) {
      setIsConditionMet({ ...isConditionMet, policyMust: true });
    } else {
      setIsConditionMet({ ...isConditionMet, policyMust: false });
    }
  }, [userData.policyMust]);
  useEffect(() => {
    if (userData.gender != -1) {
      setIsConditionMet({ ...isConditionMet, gender: true });
    } else {
      setIsConditionMet({ ...isConditionMet, gender: false });
    }
  }, [userData.gender]);

  return (
    <Wrapper>
      <SubTitle>아이디(이메일)</SubTitle>
      <StyledInput
        placeHolder="이메일을 입력해 주세요"
        width="406px"
        height="60px"
        errorMsg="올바르지 않은 형식입니다"
        onChange={(value) => {
          if (typeof value === 'string') setUserData({ ...userData, email: value });
        }}
        isConditionMet={isConditionMet.email}
      />
      <SubTitle>비밀번호</SubTitle>
      <StyledInput
        placeHolder="비밀번호를 입력해 주세요"
        width="406px"
        height="60px"
        errorMsg="영어 대문자, 소문자, 특수문자가 포함되어야 합니다"
        onChange={(value) => {
          if (typeof value === 'string') setUserData({ ...userData, password: value });
        }}
        isConditionMet={isConditionMet.password}
      />
      <StyledInput
        placeHolder="비밀번호를 입력해 주세요"
        width="406px"
        height="60px"
        errorMsg="비밀번호가 일치하지 않습니다"
        onChange={(value) => {
          if (typeof value === 'string') setUserData({ ...userData, passwordCheck: value });
        }}
        isConditionMet={isConditionMet.passwordCheck}
        margin="14px 0 0 0"
      />
      <SubTitle>닉네임</SubTitle>
      <StyledInput
        placeHolder="닉네임에는 한글, 숫자, 밑줄 및 마침표만 사용할 수 있습니다"
        width="406px"
        height="60px"
        errorMsg="닉네임은 최대 6글자로 한글, 숫자, 밑줄 및 마침표만 사용할 수 있습니다"
        onChange={(value) => {
          if (typeof value === 'string') setUserData({ ...userData, nickname: value });
        }}
        isConditionMet={isConditionMet.nickname}
      />
      <SubTitle>성별</SubTitle>
      <DropDown
        className="join_dropdown"
        state={gender}
        setState={setGender}
        defaultMsg="성별 선택"
        itemList={['남성', '여성', '선택안함']}
        page="joinform"
      />
      <SubTitle>약관동의</SubTitle>
      <JoinCheck setUserData={setUserData} userData={userData} />
    </Wrapper>
  );
}

export default JoinForm;
