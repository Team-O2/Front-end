import { getLearnMyselfListData } from 'apis';
import ViewListCard from 'components/molecules/ViewListCard';
import { IChallengeData } from 'pages/LearnMyself/template/ChallengeList';
import React, { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import Styled from 'styled-components';
import { palette } from 'styled-tools';
import { IMyScrappedLearnMyself } from 'types/myPage';

function ScrappedLearnMyself(): React.ReactElement {
  const [scrappedLearnMyself, setScrappedLearnMyself] = useState<IMyScrappedLearnMyself | null>(null);
  const [offset, setOffset] = useState(0);
  const globalUserState = useRecoilValue(userStatusState);

  const fetchScrappedLearnMyself = useCallback(
    async (offset: number) => {
      // TODO: 페이지네이션 구현하면 나중에 총 갯수 조정할 것.
      const data = await getLearnMyselfListData({ token: globalUserState?.token, limit: 1000, offset });
      data && setScrappedLearnMyself(data);
    },
    [globalUserState?.token],
  );

  useEffect(() => {
    fetchScrappedLearnMyself(offset);
  }, [fetchScrappedLearnMyself, offset]);

  return (
    <Wrapper>
      <Header>
        <h2 className="h2">스크랩한</h2>
        <h2 className="h2_eng">Learn Myself</h2>
      </Header>
      {scrappedLearnMyself?.totalScrapNum ? (
        scrappedLearnMyself?.mypageChallengeScrap.map((data: IChallengeData, id) => {
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
              isLike={data?.isLike}
              isScrap={data?.isScrap}
              handleFetch={fetchScrappedLearnMyself}
              key={id}
            />
          );
        })
      ) : (
        <NoContents>
          <p className="subhead4">스크랩한 글이 없어요</p>
        </NoContents>
      )}
    </Wrapper>
  );
}

const NoContents = Styled.div`
  color: ${palette('grayscale', 2)};
  margin: 100px 0 70vh 0;
`;

const Header = Styled.div`
  margin: 100px;
  text-align: center;
  color: ${palette('grayscale', 7)};
`;

const Wrapper = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ScrappedLearnMyself;
