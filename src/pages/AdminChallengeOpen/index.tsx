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
  const btnHandler = async () => {
    if (userStatusData) {
      const isSuccess = await challengeOpen(userStatusData.token, { ...challengeOpenData, img: image });
      isSuccess && history.goBack();
    } else {
      alert('로그인 후 이용하세요');
    }
  };
  return (
    <AdminChallengeOpenTemplate
      isConditionMet={isConditionMet}
      setIsConditionMet={setIsConditionMet}
      challengeOpenData={challengeOpenData}
      setChallengeOpenData={setChallengeOpenData}
      setImage={setImage}
      isChecked={isChecked}
      checkHandler={checkHandler}
      isButtonDisabled={isButtonDisabled}
      btnHandler={btnHandler}
    />
  );
}

export default AdminChallengeOpen;
