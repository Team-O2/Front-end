import React from 'react';
import { RouteComponentProps } from 'react-router';

interface MatchParams {
  id: string;
}
function ShareTogetherDetail({ match }: RouteComponentProps<MatchParams>): React.ReactElement {
  const { id } = match.params;
  console.log(match);
  return <div>{id}</div>;
}

export default ShareTogetherDetail;
