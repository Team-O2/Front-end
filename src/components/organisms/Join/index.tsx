import { postJoin } from 'apis';
import { Modal } from 'components/atoms';
import { JoinForm } from 'components/molecules';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { interestList } from 'resources/string';
import {
  InterestButton,
  InterestButtonWrapper,
  JoinButton,
  JoinLabel,
  JoinWrap,
  ModalButton,
  ModalLabel,
  ModalWrapper,
} from './style';

function CJoin(): React.ReactElement {
  const history = useHistory();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isInterestModalOpen, setIsInterestModalOpen] = useState(false);
  const [isConditionMet, setIsConditionMet] = useState({
    email: false,
    password: false,
    passwordCheck: false,
    nickname: false,
    interest: false,
    policyMust: false,
    gender: false,
  });
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    nickname: '',
    gender: -1,
    interest: [''],
    marpolicy: false,
    policyMust: false,
  });
  const [selectedInterest, setSelectedInterest] = useState<string[]>([]);
  const handleInterestOnClick = (interest: string) => {
    if (selectedInterest.length === 0) {
      setSelectedInterest([interest]);
    }
    if (selectedInterest.length < 5) {
      if (!selectedInterest.includes(interest)) {
        setSelectedInterest([...selectedInterest, interest]);
      } else {
        setSelectedInterest(selectedInterest.filter((v) => v !== interest));
      }
    } else {
      if (selectedInterest.includes(interest)) {
        setSelectedInterest(selectedInterest.filter((v) => v !== interest));
      }
    }
  };
  const modalBtnHandler = async () => {
    //여기서 api호출!!
    const postData = {
      email: userData.email,
      password: userData.password,
      nickname: userData.nickname,
      interest: userData.interest,
      gender: userData.gender,
      marpolicy: userData.marpolicy,
    };
    const getData = await postJoin(postData);
    if (getData) {
      history.push('/');
    }
  };
  const joinBtnHandler = () => {
    setIsInterestModalOpen(true);
  };
  useEffect(() => {
    setUserData({ ...userData, interest: selectedInterest });
  }, [selectedInterest]);

  useEffect(() => {
    if (
      isConditionMet.email &&
      isConditionMet.password &&
      isConditionMet.passwordCheck &&
      isConditionMet.nickname &&
      isConditionMet.gender &&
      isConditionMet.policyMust
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [isConditionMet]);

  return (
    <JoinWrap>
      <JoinLabel>회원가입</JoinLabel>
      <JoinForm
        setIsConditionMet={setIsConditionMet}
        isConditionMet={isConditionMet}
        userData={userData}
        setUserData={setUserData}
      />
      <JoinButton disabled={isButtonDisabled} isButtonDisabled={isButtonDisabled} onClick={joinBtnHandler}>
        가입 완료
      </JoinButton>
      <Modal isOpen={isInterestModalOpen} setIsOpen={setIsInterestModalOpen} isBlur={true}>
        <ModalWrapper>
          <ModalLabel>관심있는 분야를 5개 선택해 주세요</ModalLabel>
          <InterestButtonWrapper>
            {interestList.map((interest, id) => {
              const handleOnClick = () => {
                handleInterestOnClick(interest);
              };
              return (
                <InterestButton
                  key={id}
                  onClick={handleOnClick}
                  order={
                    interest == selectedInterest[0]
                      ? 0
                      : interest == selectedInterest[1]
                      ? 1
                      : interest == selectedInterest[2]
                      ? 2
                      : interest == selectedInterest[3]
                      ? 3
                      : interest == selectedInterest[4]
                      ? 4
                      : -1
                  }
                >
                  {interest}
                </InterestButton>
              );
            })}
          </InterestButtonWrapper>
          <ModalButton
            selectedInterest={selectedInterest}
            disabled={selectedInterest.length > 0 ? false : true}
            onClick={modalBtnHandler}
          >
            <div>확인 ({selectedInterest.length}/5)</div>
          </ModalButton>
        </ModalWrapper>
      </Modal>
    </JoinWrap>
  );
}

export default CJoin;
