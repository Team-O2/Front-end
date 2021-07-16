import ViewCardList from 'components/organisms/ViewCardList';
import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import ChallengeHeader from '../../molecules/ChallengeHeader.tsx';

interface MatchParams {
  generationNum: string;
}

export interface IChallengeData {
  good: string;
  bad: string;
  learn: string;
  commentNum: number;
  comments: string[];
  generation: number;
  createdAt: string;
  isDeleted: boolean;
  scrapNum: number;
  interest: string[];
  likes: number;
  updatedAt: string;
  user: { img: string; nickname: string; _id: string };
  __v: number;
  _id: string;
}

function ChallengeView({ match }: RouteComponentProps<MatchParams>): React.ReactElement {
  const { generationNum } = match.params;
  const [challengeList, setChallengeList] = useState<IChallengeData[] | null>(null);
  return (
    <div>
      <ChallengeHeader
        challengeList={challengeList}
        setChallengeList={setChallengeList}
        generationNum={generationNum}
      />
      <ViewCardList challengeList={challengeList} setChallengeList={setChallengeList} generationNum={generationNum} />
    </div>
  );
}

export default ChallengeView;
