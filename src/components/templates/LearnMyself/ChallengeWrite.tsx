import React from 'react';
import { Link } from 'react-router-dom';
import TextWrite from '../../molecules/WriteCard/index';

const ChallengeWrite = () => {
  const onSubmit = (form: { description1: string; description2: string; description3: string }) => {
    console.log(form);
  };
  return <TextWrite onSubmit={onSubmit} />;
};

export default ChallengeWrite;
