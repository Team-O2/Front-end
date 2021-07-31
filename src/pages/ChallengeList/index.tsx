import { ChallengeListData } from 'apis';
import ChallengeHeader from 'components/molecules/ChallengeHeader';
import ChallengeCard from 'components/organisms/ChallengeCard';
import React, { useCallback, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import { IChallengeData } from 'types/challenge.type';

interface MatchParams {
  generationNum: string;
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
      <ChallengeCard challengeList={challengeList} setChallengeList={setChallengeList} generationNum={generationNum} />
    </div>
  );
}

export default ChallengeView;
