import TextWrite from 'components/molecules/WriteCard';
import React from 'react';

const ChallengeWrite = () => {
  const onChangeForm = (form: { description1: string; description2: string; description3: string }) => {
    return;
  };

  return <TextWrite onChangeForm={onChangeForm} />;
};

export default ChallengeWrite;
