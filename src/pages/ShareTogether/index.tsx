import ConcertTitle from 'components/molecules/ConcertTitle';
import CategoryList from 'components/organisms/CategoryList';
import ConcertCardList from 'components/organisms/ConcertCardList';
import ConcertList from 'components/organisms/ConcertList';
import Footer from 'components/organisms/Footer';
import Header from 'components/organisms/Header';
import SeachForm from 'components/organisms/SearchForm';
import { getConcertListData } from 'libs/axios';
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
  useEffect(() => {
    getConcertList(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjBlNmIyYzRhZjM0ZDUxYmEwNmQzZGJiIn0sImlhdCI6MTYyNjEwNTQzMCwiZXhwIjoxNjI3MzE1MDMwfQ.JoWA_yA5o9v7LRMObG2RC-PTlfEhBS6v2eoYumcWSa4',
    );
  }, []);
  const getConcertList = async (token: string): Promise<void> => {
    const data = await getConcertListData(token);
    data && setConcertList(data);
  };
  const reRender = (category: string) => {
    //console.log(category);
  };

  concertList?.sort(function (a: IConcertData, b: IConcertData) {
    return b.likes - a.likes;
  });
  const concertCardData = concertList?.slice(undefined, 3);
  const concertData = concertList?.slice(3);

  return (
    <>
      <Header />
      <SShareTogether>
        <ConcertTitle></ConcertTitle>
        <CategoryList reRender={reRender}></CategoryList>
        <SeachForm></SeachForm>
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
