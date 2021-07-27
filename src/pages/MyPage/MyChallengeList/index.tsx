import { getUserLearnMyselfListData } from 'apis';
import ViewListCard from 'components/molecules/ViewListCard';
import { IChallengeData } from 'pages/LearnMyself/template/ChallengeList';
import React, { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import Styled from 'styled-components';
import { palette } from 'styled-tools';

function MyChallengeList(): React.ReactElement {
  const [myLearnMyselfList, setMyLearnMyselfList] = useState<IChallengeData[] | null>(null);
  const [offset, setOffset] = useState(0);
  const globalUserState = useRecoilValue(userStatusState);

  const fetchMyLearnMyselfList = useCallback(
    async (offset: number) => {
      const data = await getUserLearnMyselfListData({ token: globalUserState?.token, limit: 1000, offset });
      data && setMyLearnMyselfList(data);
    },
    [globalUserState?.token],
  );

  useEffect(() => {
    fetchMyLearnMyselfList(offset);
  }, [fetchMyLearnMyselfList, offset]);

  return (
    <Wrapper>
      <Header>
        <h2 className="h2_eng">내가 작성한 글</h2>
      </Header>
      {!!myLearnMyselfList ? (
        myLearnMyselfList?.map((data: IChallengeData, id) => {
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
              handleFetch={fetchMyLearnMyselfList}
              key={id}
            />
          );
        })
      ) : (
        <NoContents>
          <p className="subhead4">작성한한 글이 없어요</p>
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

export default MyChallengeList;
