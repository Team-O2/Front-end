import { getMyPageChallengeList } from 'apis';
import { ChallengeDetailCard } from 'components/molecules';
import React, { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import { IChallengeData } from 'types/challenge.type';
import { IMyScrappedChallenge } from 'types/myPage.type';
import { Header, NoContents, Wrapper } from './style';

function ScrappedChallenge(): React.ReactElement {
  const [scrappedChallenge, setScrappedChallenge] = useState<IMyScrappedChallenge | null>(null);
  const [offset, setOffset] = useState(0);
  const globalUserState = useRecoilValue(userStatusState);

  const fetchScrappedChallenge = useCallback(
    async (offset: number) => {
      // TODO: 페이지네이션 구현하면 나중에 총 갯수 조정할 것.
      const data = await getMyPageChallengeList({ token: globalUserState?.token, limit: 1000, offset });
      data && setScrappedChallenge(data);
    },
    [globalUserState?.token],
  );

  useEffect(() => {
    fetchScrappedChallenge(offset);
  }, [fetchScrappedChallenge, offset]);

  return (
    <Wrapper>
      <Header>
        <h2>스크랩한</h2>
        <h2>Learn Myself</h2>
      </Header>
      {scrappedChallenge?.totalScrapNum ? (
        scrappedChallenge?.mypageChallengeScrap.map((data: IChallengeData, id) => {
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
              handleFetch={fetchScrappedChallenge}
              key={id}
            />
          );
        })
      ) : (
        <NoContents>스크랩한 글이 없어요</NoContents>
      )}
    </Wrapper>
  );
}

export default ScrappedChallenge;
