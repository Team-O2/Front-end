import { getNoticeListData, getNoticeSearchData } from 'apis';
import NoticeHeader from 'components/organisms/NoticeHeader';
import NoticeList from 'components/organisms/NoticeList';
import SeachForm from 'components/organisms/SearchForm';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import Styled from 'styled-components';

interface INoticeData {
  videoLink: string;
  imgThumbnail: string;
  likes: number;
  commentNum: number;
  scrapNum: number;
  interest: string[];
  hashtag: string[];
  isDeleted: boolean;
  comments: string[];
  isNotice: boolean;
  _id: string;
  title: string;
  user: { _id: string; nickname: string; img: string };
  createdAt: string;
  text: string;
  authorNickname: string;
  updatedAt: string;
  __v: number;
}
function Notice(): React.ReactElement {
  const [noticeList, setnoticeList] = useState<INoticeData[] | null>(null);
  const [keyword, setKeyword] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const userStatusData = useRecoilValue(userStatusState);
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
      <SNotice>
        <SeachForm
          reRenderKeyword={reRenderKeyword}
          keywordChange={keywordChange}
          contentListNum={noticeListNum}
          selectedCategory="공지사항"
        ></SeachForm>
        {noticeList && (
          <NoticeList
            noticeList={noticeList}
            totalNoticeNum={totalNoticeNum}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          ></NoticeList>
        )}
      </SNotice>
    </>
  );
}

const SNotice = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 845px;
`;
export default Notice;
