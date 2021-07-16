import { getConcertSearchData } from 'apis/ShareTogether';
import ConcertTitle from 'components/molecules/ConcertTitle';
import CategoryList from 'components/organisms/CategoryList';
import ConcertCardList from 'components/organisms/ConcertCardList';
import ConcertList from 'components/organisms/ConcertList';
import SeachForm from 'components/organisms/SearchForm';
import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';

export interface IConcertData {
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
  const [currentPage, setCurrentPage] = useState(1);
  const [totalConcertNum, setTotalConcertNum] = useState(0);

  useEffect(() => {
    const getConcertCategoryList = async (pageIndex: number) => {
      const LIMIT_PER_PAGE = 11;
      const data = await getConcertSearchData({
        keyword: keyword,
        offset: (pageIndex - 1) * LIMIT_PER_PAGE,
        tag: selectedCategory,
      });
      data && setConcertList(data.concerts);
      data && setTotalConcertNum(data.totalConcertNum);
    };
    getConcertCategoryList(currentPage);
  }, [selectedCategory, keyword, currentPage]);

  const reRenderCategory = (category: string) => {
    setSelectedCategory(category);
  };
  const reRenderKeyword = (keyword: string) => {
    setKeyword(keyword);
  };
  const categoryChange = () => {
    setCurrentPage(1);
  };
  const keywordChange = () => {
    setCurrentPage(1);
  };
  const concertCardData = concertList?.slice(undefined, 3);
  const concertData = concertList?.slice(3);

  return (
    <SShareTogether>
      <ConcertTitle></ConcertTitle>
      <CategoryList
        reRenderCategory={reRenderCategory}
        selectedCategory={selectedCategory}
        categoryChange={categoryChange}
      ></CategoryList>
      <SeachForm
        reRenderKeyword={reRenderKeyword}
        keywordChange={keywordChange}
        selectedCategory={selectedCategory}
        concertListNum={totalConcertNum}
      ></SeachForm>
      <ConcertCardList concertCardData={concertCardData} />
      <ConcertList
        concertData={concertData}
        totalConcertNum={totalConcertNum}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></ConcertList>
    </SShareTogether>
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
