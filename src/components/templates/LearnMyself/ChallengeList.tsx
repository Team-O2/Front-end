import ViewCardList from 'components/organisms/ViewCardList';
import React, { useState } from 'react';
import ChallengeHeader from '../../molecules/ChallengeHeader.tsx';

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

const ChallengeView = () => {
  const [challengeList, setChallengeList] = useState<IChallengeData[] | null>(null);
  return (
    <div>
      <ChallengeHeader challengeList={challengeList} setChallengeList={setChallengeList} />
      <ViewCardList challengeList={challengeList} setChallengeList={setChallengeList} />
    </div>
  );
};

export default ChallengeView;
