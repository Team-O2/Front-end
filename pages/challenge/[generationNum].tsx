import { ChallengeListData } from 'apis';
import { ChallengeHeader } from 'components/molecules';
import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import { IChallengeData } from 'types/challenge.type';
import ChallengeMiddle from './template';

function ChallengeView(): React.ReactElement {
  const router = useRouter();
  const { generationNum } = router.query;
  const [challengeList, setChallengeList] = useState<IChallengeData[] | null>(null);
  const userStatusData = useRecoilValue(userStatusState);

  const getChallengeList = useCallback(
    async (token: string | null, offset: number, limit: number): Promise<void> => {
      const data = await ChallengeListData(token, generationNum, offset, limit);
      setChallengeList(data);
    },
    [generationNum],
  );

  React.useEffect(() => {
    getChallengeList(userStatusData && userStatusData.token, 0, 10);
  }, [getChallengeList, userStatusData]);

  return (
    <div>
      <ChallengeHeader
        challengeList={challengeList}
        setChallengeList={setChallengeList}
        generationNum={generationNum}
      />
      <ChallengeMiddle
        challengeList={challengeList}
        setChallengeList={setChallengeList}
        generationNum={generationNum}
      />
    </div>
  );
}

export default ChallengeView;
