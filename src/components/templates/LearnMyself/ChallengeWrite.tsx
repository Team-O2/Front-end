import React from 'react';
import TextWrite from '../../molecules/WriteCard/index';

const ChallengeWrite = () => {
  const onChangeForm = (form: { description1: string; description2: string; description3: string }) => {};

  return <TextWrite onChangeForm={onChangeForm} />;
};

export default ChallengeWrite;
