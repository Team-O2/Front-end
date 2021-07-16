import ViewListCard from 'components/molecules/ViewListCard';
import { ChallengeListData } from 'libs/getChallenge';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { userStatusState } from 'stores/user';
import Styled from 'styled-components';
import { IChallengeData } from '../../templates/LearnMyself/ChallengeList';

interface IProps {
  challengeList: IChallengeData[] | null;
  setChallengeList: (value: IChallengeData[]) => void;
  generationNum: string;
}

function ViewCardList({ challengeList, setChallengeList, generationNum }: IProps): React.ReactElement {
  const [userStatusData, setUserStatusData] = useRecoilState(userStatusState);
  const [reRenderFlag, setReRenderFlag] = useState(false);

  const ChallengeList = async (): Promise<void> => {
    if (userStatusData) {
      const data = await ChallengeListData(userStatusData.token, generationNum, 0, 50);
      data && setChallengeList(data);
    } else {
      const data = await ChallengeListData(null, generationNum, 0, 50);
      data && setChallengeList(data);
    }
  };
  useEffect(() => {
    ChallengeList();
  }, [reRenderFlag]);

  return (
    <SViewCardList>
      {challengeList?.map((data: IChallengeData, id) => {
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
      })}
    </SViewCardList>
  );
}

const SViewCardList = Styled.div`
`;

export default ViewCardList;
