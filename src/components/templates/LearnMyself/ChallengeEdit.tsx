import React from 'react';
import { RouteComponentProps } from 'react-router';
import TextEdit from '../../molecules/EditCard/index';

interface MatchParams {
  id: string;
}
<<<<<<< refs/remotes/origin/feat/Challenge

function ChallengeWrite({}): React.ReactElement {
  const onChangeForm = (form: { description1: string; description2: string; description3: string }) => {
    return;
  };

  return <TextEdit onChangeForm={onChangeForm} />;
=======
function ChallengeWrite({ match }: RouteComponentProps<MatchParams>): React.ReactElement {
  const { id } = match.params;
  return <TextEdit id={id} />;
>>>>>>> Feat: 챌린지디테일 내용가져오는 api 호출
}

export default ChallengeWrite;
