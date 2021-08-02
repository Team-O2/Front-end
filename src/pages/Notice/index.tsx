import { getNoticeListData, getNoticeSearchData } from 'apis';
import { NoticeHeader, NoticeList, SearchForm } from 'components/organisms';
import React, { useEffect, useState } from 'react';
import { INotice } from 'types/notice.type';
import { NoticeWrapper } from './style';

function Notice(): React.ReactElement {
  const [noticeList, setnoticeList] = useState<INotice[] | null>(null);
  const [keyword, setKeyword] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalNoticeNum, setTotalNoticeNum] = useState(0);

  useEffect(() => {
    const getNoticeList = async (pageIndex: number) => {
      const LIMIT_PER_PAGE = 8;
      const data = await getNoticeListData({ offset: (pageIndex - 1) * LIMIT_PER_PAGE });
      data && setnoticeList(data.notices);
      data && setTotalNoticeNum(data.totalNoticeNum);
    };
    getNoticeList(currentPage);
  }, [currentPage]);

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
  const noticeListNum = noticeList?.length;
  return (
    <>
      <NoticeHeader />
      <NoticeWrapper>
        <SearchForm
          reRenderKeyword={reRenderKeyword}
          keywordChange={keywordChange}
          contentListNum={noticeListNum}
          selectedCategory="공지사항"
        ></SearchForm>
        {noticeList && (
          <NoticeList
            noticeList={noticeList}
            totalNoticeNum={totalNoticeNum}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          ></NoticeList>
        )}
      </NoticeWrapper>
    </>
  );
}

export default Notice;
