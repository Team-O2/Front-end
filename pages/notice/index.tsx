import { getNoticeSearchData } from 'apis';
import React, { useEffect, useState } from 'react';
import { INotice } from 'types/notice.type';
import NoticeTemplate from './template/index';

function Notice(): React.ReactElement {
  const [noticeList, setnoticeList] = useState<INotice[] | null>(null);
  const [keyword, setKeyword] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalNoticeNum, setTotalNoticeNum] = useState(0);

  useEffect(() => {
    const getNoticeSearchList = async (pageIndex: number) => {
      const LIMIT_PER_PAGE = 8;
      const data = await getNoticeSearchData({
        keyword: keyword,
        offset: (pageIndex - 1) * LIMIT_PER_PAGE,
      });
      data && setnoticeList(data.searchData);
      data && setTotalNoticeNum(data.totalNoticeSearchNum);
    };
    getNoticeSearchList(currentPage);
  }, [keyword, currentPage]);

  const reRenderKeyword = (keyword: string) => {
    setKeyword(keyword);
  };
  const keywordChange = () => {
    setCurrentPage(1);
  };

  return (
    <NoticeTemplate
      reRenderKeyword={reRenderKeyword}
      keywordChange={keywordChange}
      noticeList={noticeList}
      totalNoticeNum={totalNoticeNum}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    ></NoticeTemplate>
  );
}

export default Notice;
