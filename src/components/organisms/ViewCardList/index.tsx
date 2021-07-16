import ViewListCard from 'components/molecules/ViewListCard';
import { ChallengeListData } from 'libs/getChallenge';
import React, { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import Styled from 'styled-components';
import { IChallengeData } from '../../templates/LearnMyself/ChallengeList';

interface IProps {
  challengeList: IChallengeData[] | null;
  setChallengeList: (value: IChallengeData[]) => void;
  generationNum: string;
}

function ViewCardList({ challengeList, setChallengeList, generationNum }: IProps): React.ReactElement {
  const userStatusData = useRecoilValue(userStatusState);
  const [reRenderFlag, setReRenderFlag] = useState(false);

  const ChallengeList = useCallback(async (): Promise<void> => {
    const data = await ChallengeListData(userStatusData ? userStatusData.token : null, generationNum, 0, 10);
    setChallengeList(data);
  }, [generationNum, setChallengeList, userStatusData]);

  useEffect(() => {
    ChallengeList();
  }, [reRenderFlag, generationNum, ChallengeList]);

  return (
    <SViewCardList>
      {challengeList?.length !== 0 ? (
        challengeList?.map((data: IChallengeData, id) => {
          return (
            <ViewListCard
              id={data?._id}
              nickname={data?.user?.nickname}
              image={data?.user?.img}
              createdAt={data?.createdAt}
              interest={data?.interest}
              good={data?.good}
              bad={data?.bad}
              learn={data?.learn}
              like={data?.likes}
              commentlist={data?.comments}
              comments={data?.comments.length}
              scrap={data?.scrapNum}
              reRenderFlag={reRenderFlag}
              setReRenderFlag={setReRenderFlag}
              key={id}
            />
          );
        })
      ) : (
        <div className="exp body4">회고가 존재하지 않습니다 </div>
      )}
    </SViewCardList>
  );
}

const SViewCardList = Styled.div`

.exp{
  margin : 100px 0 100px 0;
  width : 100%;
  text-align  :center;
  
}
`;

export default ViewCardList;
