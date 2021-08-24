import { challengeOpen } from 'apis';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import AdminChallengeOpenTemplate from './template';

function AdminChallengeOpen(): React.ReactElement {
  const history = useHistory();
  const userStatusData = useRecoilValue(userStatusState);
  const [image, setImage] = useState<File | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isConditionMet, setIsConditionMet] = useState({
    title: false,
    challengePeriod: {
      start: false,
      end: false,
    },
    applyPeriod: {
      start: false,
      end: false,
    },
    peopleNum: false,
  });
  const [challengeOpenData, setChallengeOpenData] = useState({
    title: '',
    challengePeriod: {
      start: '',
      end: '',
    },
    applyPeriod: {
      start: '',
      end: '',
    },
    peopleNum: 0,
  });
  const checkHandler = () => {
    setIsChecked(!isChecked);
  };
  const btnHandler = async () => {
    if (userStatusData) {
      const isSuccess = await challengeOpen(userStatusData.token, { ...challengeOpenData, img: image });
      isSuccess && history.goBack();
    } else {
      alert('로그인 후 이용하세요');
    }
  };
  const CheckDatePattern = (date: string) => /[0-9]{4}.[0-9]{2}.[0-9]{2}$/.test(date);
  const handleTitleOnChange = (value: string) => {
    setChallengeOpenData({ ...challengeOpenData, title: value });
  };
  const handleChallengeStOnChange = (value: string) => {
    setChallengeOpenData({
      ...challengeOpenData,
      challengePeriod: { ...challengeOpenData.challengePeriod, start: value },
    });
  };
  const handleChallengeEndOnChange = (value: string) => {
    setChallengeOpenData({
      ...challengeOpenData,
      challengePeriod: { ...challengeOpenData.challengePeriod, end: value },
    });
  };
  const handleApplyStOnChange = (value: string) => {
    setChallengeOpenData({
      ...challengeOpenData,
      applyPeriod: { ...challengeOpenData.applyPeriod, start: value },
    });
  };
  const handleApplyEndOnChange = (value: string) => {
    setChallengeOpenData({
      ...challengeOpenData,
      applyPeriod: { ...challengeOpenData.applyPeriod, end: value },
    });
  };
  const handleNumOnChange = (value: string) => {
    if (!isNaN(Number(value))) {
      setChallengeOpenData({ ...challengeOpenData, peopleNum: Number(value) });
    }
  };

  useEffect(() => {
    if (
      isConditionMet.title &&
      isConditionMet.challengePeriod.start &&
      isConditionMet.challengePeriod.end &&
      isConditionMet.applyPeriod.start &&
      isConditionMet.applyPeriod.end &&
      isConditionMet.peopleNum &&
      image != null &&
      isChecked
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [isConditionMet, image, isChecked]);
  useEffect(() => {
    if (challengeOpenData.title !== '') {
      setIsConditionMet({ ...isConditionMet, title: true });
    } else {
      setIsConditionMet({ ...isConditionMet, title: false });
    }
  }, [challengeOpenData.title]);
  useEffect(() => {
    if (challengeOpenData.peopleNum !== 0) {
      setIsConditionMet({ ...isConditionMet, peopleNum: true });
    } else {
      setIsConditionMet({ ...isConditionMet, peopleNum: false });
    }
  }, [challengeOpenData.peopleNum]);
  useEffect(() => {
    if (CheckDatePattern(challengeOpenData.challengePeriod.start)) {
      setIsConditionMet({ ...isConditionMet, challengePeriod: { ...isConditionMet.challengePeriod, start: true } });
    } else {
      setIsConditionMet({ ...isConditionMet, challengePeriod: { ...isConditionMet.challengePeriod, start: false } });
    }
  }, [challengeOpenData.challengePeriod.start]);
  useEffect(() => {
    if (CheckDatePattern(challengeOpenData.challengePeriod.end)) {
      setIsConditionMet({ ...isConditionMet, challengePeriod: { ...isConditionMet.challengePeriod, end: true } });
    } else {
      setIsConditionMet({ ...isConditionMet, challengePeriod: { ...isConditionMet.challengePeriod, end: false } });
    }
  }, [challengeOpenData.challengePeriod.end]);
  useEffect(() => {
    if (CheckDatePattern(challengeOpenData.applyPeriod.start)) {
      setIsConditionMet({ ...isConditionMet, applyPeriod: { ...isConditionMet.applyPeriod, start: true } });
    } else {
      setIsConditionMet({ ...isConditionMet, applyPeriod: { ...isConditionMet.applyPeriod, start: false } });
    }
  }, [challengeOpenData.applyPeriod.start]);
  useEffect(() => {
    if (CheckDatePattern(challengeOpenData.applyPeriod.end)) {
      setIsConditionMet({ ...isConditionMet, applyPeriod: { ...isConditionMet.applyPeriod, end: true } });
    } else {
      setIsConditionMet({ ...isConditionMet, applyPeriod: { ...isConditionMet.applyPeriod, end: false } });
    }
  }, [challengeOpenData.applyPeriod.end]);

  return (
    <AdminChallengeOpenTemplate
      isConditionMet={isConditionMet}
      setImage={setImage}
      isChecked={isChecked}
      checkHandler={checkHandler}
      isButtonDisabled={isButtonDisabled}
      btnHandler={btnHandler}
      handleTitleOnChange={handleTitleOnChange}
      handleChallengeStOnChange={handleChallengeStOnChange}
      handleChallengeEndOnChange={handleChallengeEndOnChange}
      handleApplyStOnChange={handleApplyStOnChange}
      handleApplyEndOnChange={handleApplyEndOnChange}
      handleNumOnChange={handleNumOnChange}
    />
  );
}

export default AdminChallengeOpen;
