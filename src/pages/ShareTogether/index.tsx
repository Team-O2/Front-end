import { getConcertListData, getConcertSearchData } from 'apis/ShareTogether';
import ConcertTitle from 'components/molecules/ConcertTitle';
import CategoryList from 'components/organisms/CategoryList';
import ConcertCardList from 'components/organisms/ConcertCardList';
import ConcertList from 'components/organisms/ConcertList';
import Footer from 'components/organisms/Footer';
import Header from 'components/organisms/Header';
import SeachForm from 'components/organisms/SearchForm';
import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';

interface IConcertData {
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
function ShareTogether(): React.ReactElement {
  const [concertList, setConcertList] = useState<IConcertData[] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [keyword, setKeyword] = useState('');
  useEffect(() => {
    getConcertList(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjBlZDg2NTZkOWM0ZTg0NzM4NzM1OTYyIn0sImlhdCI6MTYyNjE3OTI4OSwiZXhwIjoxNjI3Mzg4ODg5fQ.kmF5YDPDVAv6XyR6wNW_7JWm_3byloniqKSM7zcrDbg',
    );
  }, []);
  useEffect(() => {
    getConcertCategoryList(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjBlZDg2NTZkOWM0ZTg0NzM4NzM1OTYyIn0sImlhdCI6MTYyNjE3OTI4OSwiZXhwIjoxNjI3Mzg4ODg5fQ.kmF5YDPDVAv6XyR6wNW_7JWm_3byloniqKSM7zcrDbg',
      selectedCategory,
      keyword,
    );
  }, [selectedCategory, keyword]);
  const getConcertList = async (token: string): Promise<void> => {
    const data = await getConcertListData(token);
    data && setConcertList(data);
  };
  const getConcertCategoryList = async (token: string, selectedCategory: string, keyword: string): Promise<void> => {
    const data = await getConcertSearchData(token, selectedCategory, keyword);
    data && setConcertList(data);
  };
  const reRenderCategory = (category: string) => {
    setSelectedCategory(category);
  };
  const reRenderKeyword = (keyword: string) => {
    setKeyword(keyword);
  };
  const concertCardData = concertList?.slice(undefined, 3);
  const concertData = concertList?.slice(3);
  const concertListNum = concertList?.length;
  return (
    <>
      <Header />
      <SShareTogether>
        <ConcertTitle></ConcertTitle>
        <CategoryList reRenderCategory={reRenderCategory} selectedCategory={selectedCategory}></CategoryList>
        <SeachForm
          reRenderKeyword={reRenderKeyword}
          selectedCategory={selectedCategory}
          concertListNum={concertListNum}
        ></SeachForm>
        <ConcertCardList concertCardData={concertCardData} />
        <ConcertList concertData={concertData}></ConcertList>
      </SShareTogether>
      <Footer />
    </>
  );
}

const SShareTogether = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 845px;
`;
export default ShareTogether;
