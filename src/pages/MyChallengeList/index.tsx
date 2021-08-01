import { getUserChallengeList } from 'apis';
import { ChallengeDetailCard } from 'components/molecules';
import React, { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import { IChallengeData } from 'types/challenge.type';
import { Header, NoContents, Wrapper } from './style';

function MyChallengeList(): React.ReactElement {
  const [myChallengeList, setMyChallengeList] = useState<IChallengeData[] | null>(null);
  const [offset, setOffset] = useState(0);
  const globalUserState = useRecoilValue(userStatusState);

  const fetchMyLearnMyselfList = useCallback(
    async (offset: number) => {
      const data = await getUserChallengeList({ token: globalUserState?.token, limit: 1000, offset });
      data && setMyChallengeList(data);
    },
    [globalUserState?.token],
  );

  useEffect(() => {
    fetchMyLearnMyselfList(offset);
  }, [fetchMyLearnMyselfList, offset]);

  return (
    <Wrapper>
      <Header>내가 작성한 글</Header>
      {!!myChallengeList ? (
        myChallengeList?.map((data: IChallengeData, id) => {
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
              handleFetch={fetchMyLearnMyselfList}
              key={id}
            />
          );
        })
      ) : (
        <NoContents>
          <p>작성한 글이 없어요</p>
        </NoContents>
      )}
    </Wrapper>
  );
}

export default MyChallengeList;
