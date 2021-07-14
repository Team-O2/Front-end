import React from 'react';
import TextEdit from '../../molecules/EditCard/index';

interface MatchParams {
  id: string;
}

function ChallengeWrite({}): React.ReactElement {
  const onChangeForm = (form: { description1: string; description2: string; description3: string }) => {
    return;
  };

  return <TextEdit onChangeForm={onChangeForm} />;
}

export default ChallengeWrite;
