import { NoticeHeader, NoticeList, SearchForm } from 'components/organisms';
import React from 'react';
import { INotice } from 'types/notice.type';
import { NoticeWrapper } from './style';

interface IProps {
  reRenderKeyword: (keyword: string) => void;
  keywordChange: () => void;
  noticeList: Array<INotice> | null;
  totalNoticeNum: number;
  currentPage: number;
  setCurrentPage: (value: number) => void;
}

function NoticeTemplate({
  reRenderKeyword,
  keywordChange,
  totalNoticeNum,
  noticeList,
  currentPage,
  setCurrentPage,
}: IProps): React.ReactElement {
  return (
    <>
      <NoticeHeader />
      <NoticeWrapper>
        <SearchForm
          reRenderKeyword={reRenderKeyword}
          keywordChange={keywordChange}
          contentListNum={totalNoticeNum}
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

export default NoticeTemplate;
