import { getShareTogetherListData } from 'apis';
import ConcertList from 'components/organisms/ConcertList';
import React, { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import Styled from 'styled-components';
import { palette } from 'styled-tools';
import { IMyScrappedShareTogether } from 'types/myPage';

function ScrappedShareTogether(): React.ReactElement {
  const [scrappedShareTogether, setScrappedShareTogether] = useState<IMyScrappedShareTogether | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const globalUserState = useRecoilValue(userStatusState);

  const fetchScrappedShareTogether = useCallback(
    async (pageIndex: number) => {
      const LIMIT_PER_PAGE = 10;
      const data = await getShareTogetherListData({
        token: globalUserState?.token,
        limit: 10,
        offset: (pageIndex - 1) * LIMIT_PER_PAGE,
      });
      data && setScrappedShareTogether(data);
    },
    [globalUserState?.token],
  );

  useEffect(() => {
    fetchScrappedShareTogether(currentPage);
  }, [currentPage, fetchScrappedShareTogether]);

  return (
    <Wrapper>
      <Header>
        <h2 className="h2">스크랩한</h2>
        <h2 className="h2_eng">Share Together</h2>
      </Header>
      {scrappedShareTogether?.totalScrapNum ? (
        <ConcertList
          concertData={scrappedShareTogether.mypageConcertScrap}
          totalConcertNum={scrappedShareTogether.totalScrapNum}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
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

export default ScrappedShareTogether;
