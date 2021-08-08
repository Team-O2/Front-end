import React from 'react';
import { FormDetailWrapper } from './style';

interface IProps {
  good?: string;
  bad?: string;
  learn?: string;
  isClosed: boolean;
}

function ChallengeCardList({ good, bad, learn, isClosed }: IProps): React.ReactElement {
  return (
    <div>
      <FormDetailWrapper>
        <h1>잘한점</h1>
        {isClosed === true ? <h5>{good}</h5> : <h2>{good}</h2>}
      </FormDetailWrapper>
      <FormDetailWrapper>
        <h1>못한점</h1>
        {isClosed === true ? <h5>{bad}</h5> : <h2>{bad}</h2>}
      </FormDetailWrapper>
      <FormDetailWrapper>
        <h1>배운점</h1>
        {isClosed === true ? <h5>{learn}</h5> : <h2>{learn}</h2>}
      </FormDetailWrapper>
    </div>
  );
}

export default ChallengeCardList;
