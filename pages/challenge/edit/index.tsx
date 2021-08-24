import { ChallengeEditCard } from 'components/organisms';
import React from 'react';
import { RouteComponentProps } from 'react-router';

interface MatchParams {
  id: string;
}
function ChallengeWrite({ match }: RouteComponentProps<MatchParams>): React.ReactElement {
  const { id } = match.params;
  return <ChallengeEditCard id={id} />;
}

export default ChallengeWrite;
