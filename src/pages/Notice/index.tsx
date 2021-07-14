import { getNoticeListData, getNoticeSearchData } from 'apis/ShareTogether';
import Footer from 'components/organisms/Footer';
import Header from 'components/organisms/Header';
import NoticeHeader from 'components/organisms/NoticeHeader';
import SeachForm from 'components/organisms/SearchForm';
import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';
//import ConcertList from 'components/organisms/ConcertList';
interface INoticeData {
  likes: number;
  commentNum: number;
  scrapNum: number;
  generation: number;
  interest: string[];
  hashtag: string[];
  isDeleted: boolean;
  comments: string[];
  isNotice: boolean;
  _id: string;
  title: string;
  user: { _id: string; nickname: string; img: string };
  videoLink: string;
  imgThumbnail: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
function Notice(): React.ReactElement {
  const [noticeList, setnoticeList] = useState<INoticeData[] | null>(null);
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
      <Header />
      <NoticeHeader />
      <SNotice>
        <SeachForm reRenderKeyword={reRenderKeyword} concertListNum={noticeListNum}></SeachForm>
        {/*<ConcertList concertData={noticeList}></ConcertList>*/}
      </SNotice>
      <Footer />
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
