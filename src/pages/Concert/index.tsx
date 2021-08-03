import { getConcertSearchData } from 'apis';
import { ConcertTitle } from 'components/molecules';
import { CategoryList, ConcertCardList, ConcertList, SearchForm } from 'components/organisms';
import React, { useEffect, useState } from 'react';
import { IConcert } from 'types/concert.type';
import { ConcertWrapper } from './style';

function Concert(): React.ReactElement {
  const [concertList, setConcertList] = useState<IConcert[] | null>(null);
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
    <ConcertWrapper>
      <ConcertTitle></ConcertTitle>
      <CategoryList
        reRenderCategory={reRenderCategory}
        selectedCategory={selectedCategory}
        categoryChange={categoryChange}
      ></CategoryList>
      <SearchForm
        reRenderKeyword={reRenderKeyword}
        keywordChange={keywordChange}
        selectedCategory={selectedCategory}
        contentListNum={totalConcertNum}
      ></SearchForm>
      <ConcertCardList concertCardData={concertCardData} />
      <ConcertList
        concertData={concertData}
        totalConcertNum={totalConcertNum}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></ConcertList>
    </ConcertWrapper>
  );
}

export default Concert;
