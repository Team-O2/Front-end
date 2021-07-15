import { getLearnMyselfListData } from 'apis/myPage';
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
      const data = await getLearnMyselfListData({ token: globalUserState?.token, limit: 10, offset });
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
        1
      ) : (
        /* TODO: 여기에 페이지 네이션 넣기 */
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
