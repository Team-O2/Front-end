import { getNoticeListData, getNoticeSearchData } from 'apis/ShareTogether';
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
  const [noticeList, setnoticeList] = useState<INoticeData[] | undefined>(undefined);
  const [keyword, setKeyword] = useState('');
  const userStatusData = useRecoilValue(userStatusState);
  useEffect(() => {
    const getNoticeList = async () => {
      if (userStatusData) {
        const data = await getNoticeListData(userStatusData.token);
        data && setnoticeList(data);
      } else {
        alert('로그인 후 이용하세요');
      }
    };
    getNoticeList();
  }, [userStatusData]);
  useEffect(() => {
    const getNoticeSearchList = async () => {
      if (userStatusData) {
        const data = await getNoticeSearchData(userStatusData.token, keyword);
        data && setnoticeList(data);
      } else {
        alert('로그인 후 이용하세요');
      }
    };
    getNoticeSearchList();
  }, [keyword, userStatusData]);

  const reRenderKeyword = (keyword: string) => {
    setKeyword(keyword);
  };
  const noticeListNum = noticeList?.length;
  return (
    <>
      <NoticeHeader />
      <SNotice>
        <SeachForm
          reRenderKeyword={reRenderKeyword}
          concertListNum={noticeListNum}
          selectedCategory="공지사항"
        ></SeachForm>
        <NoticeList noticeList={noticeList}></NoticeList>
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
