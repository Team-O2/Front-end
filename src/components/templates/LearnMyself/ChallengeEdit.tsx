import React from 'react';
import { RouteComponentProps } from 'react-router';
import TextEdit from '../../molecules/EditCard/index';

interface MatchParams {
  id: string;
}
function ChallengeWrite({ match }: RouteComponentProps<MatchParams>): React.ReactElement {
  const { id } = match.params;
  return <TextEdit id={id} />;
}

export default ChallengeWrite;
