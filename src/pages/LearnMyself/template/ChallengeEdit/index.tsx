import ChallengeEdit from 'components/molecules/ChallengeEditCard/index';
import React from 'react';
import { RouteComponentProps } from 'react-router';

interface MatchParams {
  id: string;
}
function ChallengeWrite({ match }: RouteComponentProps<MatchParams>): React.ReactElement {
  const { id } = match.params;
  return <ChallengeEdit id={id} />;
}

export default ChallengeWrite;
