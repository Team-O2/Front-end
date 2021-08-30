import { DropDown } from 'components/molecules';
import { InterestModal, JoinCheck, JoinForm } from 'components/organisms';
import React from 'react';
import { IJoinConditionMet, IJoinData } from 'types/join.type';
import { JoinButton, JoinLabel, JoinWrap, SubTitle } from './style';

interface IProps {
  isConditionMet: IJoinConditionMet;
  setIsConditionMet: (value: IJoinConditionMet) => void;
  userData: IJoinData;
  setUserData: (value: IJoinData) => void;
  isJoinButtonDisabled: boolean;
  joinBtnHandler: () => void;
  isInterestModalOpen: boolean;
  setIsInterestModalOpen: (value: boolean) => void;
  handleInterestOnClick: (interest: string) => void;
  selectedInterest: string[];
  modalBtnHandler: () => Promise<void>;
  gender: string;
  setGender: (gender: string) => void;
}

function JoinTemplate({
  isConditionMet,
  setIsConditionMet,
  userData,
  setUserData,
  isJoinButtonDisabled,
  joinBtnHandler,
  isInterestModalOpen,
  setIsInterestModalOpen,
  handleInterestOnClick,
  selectedInterest,
  modalBtnHandler,
  gender,
  setGender,
}: IProps): React.ReactElement {
  return (
    <JoinWrap>
      <JoinLabel>회원가입</JoinLabel>
      <JoinForm
        setIsConditionMet={setIsConditionMet}
        isConditionMet={isConditionMet}
        userData={userData}
        setUserData={setUserData}
      />
      <SubTitle>성별</SubTitle>
      <DropDown
        state={gender}
        setState={setGender}
        defaultMsg="성별 선택"
        itemList={['남성', '여성', '선택안함']}
        page="joinform"
      />
      <SubTitle>약관동의</SubTitle>
      <JoinCheck setUserData={setUserData} userData={userData} />
      <JoinButton disabled={isJoinButtonDisabled} isButtonDisabled={isJoinButtonDisabled} onClick={joinBtnHandler}>
        관심사 선택하기
      </JoinButton>
      <InterestModal
        isInterestModalOpen={isInterestModalOpen}
        setIsInterestModalOpen={setIsInterestModalOpen}
        handleInterestOnClick={handleInterestOnClick}
        selectedInterest={selectedInterest}
        modalBtnHandler={modalBtnHandler}
      />
    </JoinWrap>
  );
}

export default JoinTemplate;
