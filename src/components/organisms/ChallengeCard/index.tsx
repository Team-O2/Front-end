import { ChallengeListData } from 'apis';
import { ChallengeDetailCard } from 'components/molecules';
import React, { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import { IChallengeData } from 'types/challenge.type';
import { ChallengeCardWrapper } from './style';

interface IProps {
  challengeList: IChallengeData[] | null;
  setChallengeList: (value: IChallengeData[]) => void;
  generationNum: string;
}

function ChallengeCard({ challengeList, setChallengeList, generationNum }: IProps): React.ReactElement {
  const userStatusData = useRecoilValue(userStatusState);
  const [isReRenderFlag, setIsReRenderFlag] = useState(false);

  const ChallengeList = useCallback(async (): Promise<void> => {
    const data = await ChallengeListData(userStatusData ? userStatusData.token : null, generationNum, 0, 10);
    setChallengeList(data);
  }, [generationNum, setChallengeList, userStatusData]);

  useEffect(() => {
    ChallengeList();
  }, [isReRenderFlag, generationNum, ChallengeList]);

  return (
    <ChallengeCardWrapper>
      {challengeList?.length !== 0 ? (
        challengeList?.map((data: IChallengeData, id) => {
          return (
            <ChallengeDetailCard
              id={data?._id}
              nickname={data?.user?.nickname}
              image={data?.user?.img}
              createdAt={data?.createdAt}
              interest={data?.interest}
              good={data?.good}
              bad={data?.bad}
              learn={data?.learn}
              like={data?.likes}
              comments={data?.comments.length}
              isLike={data?.isLike}
              isScrap={data?.isScrap}
              onChange={ChallengeList}
              key={id}
            />
          );
        })
      ) : (
        <p>회고가 존재하지 않습니다 </p>
      )}
    </ChallengeCardWrapper>
  );
}

export default ChallengeCard;
