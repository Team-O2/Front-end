import { ChallengeWriteCard } from 'components/organisms';
import React from 'react';

const ChallengeWrite = () => {
  const onChangeForm = (form: { description1: string; description2: string; description3: string }) => {
    return;
  };

  return <ChallengeWriteCard onChangeForm={onChangeForm} />;
};

export default ChallengeWrite;
