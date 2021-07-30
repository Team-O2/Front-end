import ChallengeCard from 'components/molecules/ChallengeWriteCard';
import React from 'react';

const ChallengeWrite = () => {
  const onChangeForm = (form: { description1: string; description2: string; description3: string }) => {
    return;
  };

  return <ChallengeCard onChangeForm={onChangeForm} />;
};

export default ChallengeWrite;
