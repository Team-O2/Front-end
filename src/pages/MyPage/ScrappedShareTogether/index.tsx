import { getShareTogetherListData } from 'apis/myPage';
import React, { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import Styled from 'styled-components';
import { palette } from 'styled-tools';
import { IMyScrappedShareTogether } from 'types/myPage';

function ScrappedShareTogether(): React.ReactElement {
  const [scrappedShareTogether, setScrappedShareTogether] = useState<IMyScrappedShareTogether | null>(null);
  const [offset, setOffset] = useState(0);
  const globalUserState = useRecoilValue(userStatusState);

  const fetchScrappedShareTogether = useCallback(
    async (offset: number) => {
      const data = await getShareTogetherListData({ token: globalUserState?.token, limit: 10, offset });
      data && setScrappedShareTogether(data);
    },
    [globalUserState?.token],
  );

  useEffect(() => {
    fetchScrappedShareTogether(offset);
  }, [fetchScrappedShareTogether, offset]);

  return (
    <Wrapper>
      <Header>
        <h2 className="h2">스크랩한</h2>
        <h2 className="h2_eng">Share Together</h2>
      </Header>
      {scrappedShareTogether?.totalScrapNum ? (
        1
        /* TODO: 여기에 페이지 네이션 넣기 */
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
