import { getMyPageConcertList } from 'apis';
import { ConcertList } from 'components/organisms';
import React, { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import { IMyScrappedConcert } from 'types/myPage.type';
import { Header, NoContents, Wrapper } from './style';

function ScrappedConcert(): React.ReactElement {
  const [scrappedConcert, setScrappedConcert] = useState<IMyScrappedConcert | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const globalUserState = useRecoilValue(userStatusState);

  const fetchScrappedConcert = useCallback(
    async (pageIndex: number) => {
      const LIMIT_PER_PAGE = 10;
      const data = await getMyPageConcertList({
        token: globalUserState?.token,
        limit: 10,
        offset: (pageIndex - 1) * LIMIT_PER_PAGE,
      });
      data && setScrappedConcert(data);
    },
    [globalUserState?.token],
  );

  useEffect(() => {
    fetchScrappedConcert(currentPage);
  }, [currentPage, fetchScrappedConcert]);

  return (
    <Wrapper>
      <Header>
        <h2>스크랩한</h2>
        <h2>Share Together</h2>
      </Header>
      {scrappedConcert?.totalScrapNum ? (
        <ConcertList
          concertData={scrappedConcert.mypageConcertScrap}
          totalConcertNum={scrappedConcert.totalScrapNum}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : (
        <NoContents>스크랩한 글이 없어요</NoContents>
      )}
    </Wrapper>
  );
}

export default ScrappedConcert;
