import { joinInputErrIcon as JoinErr } from 'assets/images';
import { Input, Label } from 'components/atoms';
import { DropDown, JoinCheck } from 'components/molecules';
import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';

interface userDataType {
  email: string;
  password: string;
  passwordCheck: string;
  nickname: string;
  gender: number;
  interest: Array<string>;
  marpolicy: boolean;
  policyMust: boolean;
}

interface conditionMet {
  email: boolean;
  password: boolean;
  passwordCheck: boolean;
  nickname: boolean;
  interest: boolean;
  policyMust: boolean;
  gender: boolean;
}

export interface IProps {
  className?: string;
  isConditionMet: conditionMet;
  userData: userDataType;
  setUserData: (value: userDataType) => void;
  setIsConditionMet: (value: conditionMet) => void;
}

const conditionMetStyle = {
  border: 'double 1px transparent',
  backgroundImage: 'linear-gradient(white, white), linear-gradient(to right, #36c8f5,#13e2dd)',
  backgroundOrigin: 'border-box',
  backgroundClip: 'content-box, border-box',
};
const conditionNotMetStyle = {
  border: 'solid 1px #f66436',
};
const defaultStyle = {
  border: 'solid 1px #c1c1c1',
};

function Joinform({ isConditionMet, userData, setUserData, setIsConditionMet }: IProps): React.ReactElement {
  const [gender, setGender] = useState('선택안함');
  const [isFocused, setIsFocused] = useState({
    email: false,
    password: false,
    passwordCheck: false,
    nickname: false,
  });
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
    <JoinformWrap>
      <Label className="join_subtitle">아이디(이메일)</Label>
      <div
        className="join_input"
        style={
          !isFocused.email
            ? defaultStyle
            : isFocused.email && isConditionMet.email
            ? conditionMetStyle
            : conditionNotMetStyle
        }
      >
        <Input
          name="userEmail"
          placeholder="이메일을 입력해 주세요"
          onChange={(e) => {
            setUserData({ ...userData, email: e.target.value });
          }}
          onFocus={() => {
            setIsFocused({ ...isFocused, email: true });
          }}
        />
        {isFocused.email && !isConditionMet.email && <img className="join__image--error" src={JoinErr}></img>}
      </div>
      {isFocused.email && !isConditionMet.email && <div className="join__exp--error">올바르지 않은 형식입니다</div>}
      <Label className="join_subtitle">비밀번호</Label>
      <div
        className="join_input"
        style={
          !isFocused.password
            ? defaultStyle
            : isFocused.password && isConditionMet.password
            ? conditionMetStyle
            : conditionNotMetStyle
        }
      >
        <Input
          type="password"
          name="userPwd"
          placeholder="비밀번호를 입력해 주세요"
          onChange={(e) => {
            setUserData({ ...userData, password: e.target.value });
          }}
          onFocus={() => {
            setIsFocused({ ...isFocused, password: true });
          }}
        />
        {isFocused.password && !isConditionMet.password && <img className="join__image--error" src={JoinErr}></img>}
      </div>
      {isFocused.password && !isConditionMet.password && (
        <div className="join__exp--error">영어 대문자, 소문자, 특수문자가 포함되어야 합니다</div>
      )}
      <div
        className="join_input join_pwd"
        style={
          !isFocused.passwordCheck
            ? defaultStyle
            : isFocused.passwordCheck && isConditionMet.passwordCheck
            ? conditionMetStyle
            : conditionNotMetStyle
        }
      >
        <Input
          type="password"
          name="userPwdCheck"
          placeholder="비밀번호를 입력해 주세요"
          onChange={(e) => {
            setUserData({ ...userData, passwordCheck: e.target.value });
          }}
          onFocus={() => {
            setIsFocused({ ...isFocused, passwordCheck: true });
          }}
        />
        {isFocused.passwordCheck && !isConditionMet.passwordCheck && (
          <img className="join__image--error" src={JoinErr}></img>
        )}
      </div>
      {isFocused.passwordCheck && !isConditionMet.passwordCheck && (
        <div className="join__exp--error">비밀번호가 일치하지 않습니다</div>
      )}
      <Label className="join_subtitle">닉네임</Label>
      <div
        className="join_input"
        style={
          !isFocused.nickname
            ? defaultStyle
            : isFocused.nickname && isConditionMet.nickname
            ? conditionMetStyle
            : conditionNotMetStyle
        }
      >
        <Input
          name="userNickname"
          placeholder="닉네임에는 한글, 숫자, 밑줄 및 마침표만 사용할 수 있습니다"
          onChange={(e) => {
            setUserData({ ...userData, nickname: e.target.value });
          }}
          onFocus={() => {
            setIsFocused({ ...isFocused, nickname: true });
          }}
        />
        {isFocused.nickname && !isConditionMet.nickname && <img className="join__image--error" src={JoinErr}></img>}
      </div>
      {isFocused.nickname && !isConditionMet.nickname && (
        <div className="join__exp--error">닉네임은 최대 6글자로 한글, 숫자, 밑줄 및 마침표만 사용할 수 있습니다</div>
      )}
      <Label className="join_subtitle">성별</Label>
      <DropDown
        className="join_dropdown"
        state={gender}
        setState={setGender}
        defaultMsg="성별 선택"
        itemList={['남성', '여성', '선택안함']}
        page="joinform"
      />
      <Label className="join_subtitle">약관동의</Label>
      <JoinCheck setUserData={setUserData} userData={userData} />
    </JoinformWrap>
  );
}

const JoinformWrap = Styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
  input {
    border : none;
    font-size : 16px;
    color : #0d0d0d;
    letter-spacing: -0.5px;
    text-align: left;
    width : 100%;
    height : 100%;
    padding: 18px 20px;
    border-radius: 4px;
    
    :placeholder{
      color : #c1c1c1;
    }
    :focus{
      outline : none;
    }
  }
  .check{
      width : 22px;
      margin : 10px;
  }

  .join{
    &_dropdown{
      width: 406px;
      height: 60px;
    }
    &_subtitle{
        width : 406px;
        font-size: 18px;
        font-weight: bold;
        color : #0d0d0d;
        margin-top : 40px;
        margin-bottom : 8px;
        line-height: 1.33;
        letter-spacing: -0.5px;
    }
    &_pwd{
        margin-top : 14px;
    }
    &_input{
      width: 406px;
      height: 60px;
      border : solid 1px #c1c1c1;
      border-radius : 4px;   
      display : flex;    
      align-items : center;  
    }
    &_button{
      width: 406px;
      height: 60px;
      border-radius: 4px;
      background-image: linear-gradient(to right, #36c8f5,#13e2dd );
      font-size : 16px;
      font-weight : bold;
      color : #ffffff;
      margin-top : 14px;
    }
    &__image--error{
      width : 24px;
      height : 24px;
      margin-right : 15px;
    }
    &__exp--error{
      width : 406px;
      text-align : left;
      margin-top : 5px;
      font-size: 14px;
      line-height: 1.5;
      letter-spacing: -0.5px;
      text-align: left;
      color: #f66436;
    }
  }

`;

export default Joinform;
