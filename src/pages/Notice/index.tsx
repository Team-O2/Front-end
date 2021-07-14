import { getNoticeListData, getNoticeSearchData } from 'apis/ShareTogether';
import ConcertList from 'components/organisms/ConcertList';
import NoticeHeader from 'components/organisms/NoticeHeader';
import SeachForm from 'components/organisms/SearchForm';
import React, { useEffect, useState } from 'react';
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
  useEffect(() => {
    getNoticeList(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjBlZDg2NTZkOWM0ZTg0NzM4NzM1OTYyIn0sImlhdCI6MTYyNjE3OTI4OSwiZXhwIjoxNjI3Mzg4ODg5fQ.kmF5YDPDVAv6XyR6wNW_7JWm_3byloniqKSM7zcrDbg',
    );
  }, []);
  useEffect(() => {
    getNoticeSearchList(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjBlZDg2NTZkOWM0ZTg0NzM4NzM1OTYyIn0sImlhdCI6MTYyNjE3OTI4OSwiZXhwIjoxNjI3Mzg4ODg5fQ.kmF5YDPDVAv6XyR6wNW_7JWm_3byloniqKSM7zcrDbg',
      keyword,
    );
  }, [keyword]);
  const getNoticeList = async (token: string): Promise<void> => {
    const data = await getNoticeListData(token);
    data && setnoticeList(data);
  };
  const getNoticeSearchList = async (token: string, keyword: string): Promise<void> => {
    const data = await getNoticeSearchData(token, keyword);
    data && setnoticeList(data);
  };

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
        <ConcertList concertData={noticeList}></ConcertList>
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
