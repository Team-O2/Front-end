import { getMyPageConcertList } from 'apis';
import { ConcertList } from 'components/organisms';
import React, { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import Styled from 'styled-components';
import { palette } from 'styled-tools';
import { IMyScrappedConcert } from 'types/myPage.type';

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
        <h2 className="h2">스크랩한</h2>
        <h2 className="h2_eng">Share Together</h2>
      </Header>
      {scrappedConcert?.totalScrapNum ? (
        <ConcertList
          concertData={scrappedConcert.mypageConcertScrap}
          totalConcertNum={scrappedConcert.totalScrapNum}
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
  margin: 100px 0 70vh 0;
  color: ${palette('grayscale', 2)};
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

export default ScrappedConcert;
