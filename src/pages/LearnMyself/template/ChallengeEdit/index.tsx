import TextEdit from 'components/molecules/EditCard/index';
import React from 'react';
import { RouteComponentProps } from 'react-router';

interface MatchParams {
  id: string;
}
function ChallengeWrite({ match }: RouteComponentProps<MatchParams>): React.ReactElement {
  const { id } = match.params;
  return <TextEdit id={id} />;
}

export default ChallengeWrite;
