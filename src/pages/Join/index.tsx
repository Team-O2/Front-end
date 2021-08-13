import { postJoin } from 'apis';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import JoinTemplate from './template';

function Join(): React.ReactElement {
  const history = useHistory();
  const [isJoinButtonDisabled, setIsJoinButtonDisabled] = useState(true);
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
  const [gender, setGender] = useState('선택안함');
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
    setUserData({ ...userData, interest: selectedInterest });
  }, [selectedInterest]);
  useEffect(() => {
    setUserData({ ...userData, gender: changeGenderStringtoNum(gender) });
  }, [gender]);
  useEffect(() => {
    if (
      isConditionMet.email &&
      isConditionMet.password &&
      isConditionMet.passwordCheck &&
      isConditionMet.nickname &&
      isConditionMet.gender &&
      isConditionMet.policyMust
    ) {
      setIsJoinButtonDisabled(false);
    } else {
      setIsJoinButtonDisabled(true);
    }
  }, [isConditionMet]);

  return (
    <JoinTemplate
      isConditionMet={isConditionMet}
      setIsConditionMet={setIsConditionMet}
      userData={userData}
      setUserData={setUserData}
      isJoinButtonDisabled={isJoinButtonDisabled}
      joinBtnHandler={joinBtnHandler}
      isInterestModalOpen={isInterestModalOpen}
      setIsInterestModalOpen={setIsInterestModalOpen}
      handleInterestOnClick={handleInterestOnClick}
      selectedInterest={selectedInterest}
      modalBtnHandler={modalBtnHandler}
      gender={gender}
      setGender={setGender}
    />
  );
}

export default Join;
