import { postJoin } from 'apis';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import JoinTemplate from '../../components/template/join';

function Join(): React.ReactElement {
  const history = useRouter();
  const [isJoinButtonDisabled, setIsJoinButtonDisabled] = useState(true);
  const [isInterestModalOpen, setIsInterestModalOpen] = useState(false);
  const [isConditionMet, setIsConditionMet] = useState({
    email: false,
    password: false,
    passwordCheck: false,
    nickname: false,
    interest: false,
    policyMust: false,
  });
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    nickname: '',
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
      isMarketing: userData.marpolicy,
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
    />
  );
}

export default Join;
