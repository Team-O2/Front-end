import { ChallengeListData } from 'apis';
import ChallengeHeader from 'components/molecules/ChallengeHeader.tsx';
import ViewCardList from 'components/organisms/ViewCardList';
import React, { useCallback, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';

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
  isLike: boolean;
  isScrap: boolean;
  user: { img: string; nickname: string; _id: string };
  __v: number;
  _id: string;
}

function ChallengeView({ match }: RouteComponentProps<MatchParams>): React.ReactElement {
  const { generationNum } = match.params;
  const [challengeList, setChallengeList] = useState<IChallengeData[] | null>(null);
  const userStatusData = useRecoilValue(userStatusState);
  const [isClickedEntire, setIsClickedEntire] = useState(false);

  const getChallengeList = useCallback(
    async (token: string | null, offset: number, limit: number): Promise<void> => {
      const data = await ChallengeListData(token, generationNum, offset, limit);
      setChallengeList(data);
    },
    [generationNum],
  );

  React.useEffect(() => {
    getChallengeList(userStatusData && userStatusData.token, 0, 10);
  }, [getChallengeList, isClickedEntire, userStatusData]);

  return (
    <div>
      <ChallengeHeader
        challengeList={challengeList}
        setChallengeList={setChallengeList}
        generationNum={generationNum}
        isClickedEntire={isClickedEntire}
        setIsClickedEntire={setIsClickedEntire}
      />
      <ViewCardList challengeList={challengeList} setChallengeList={setChallengeList} generationNum={generationNum} />
    </div>
  );
}

export default ChallengeView;
