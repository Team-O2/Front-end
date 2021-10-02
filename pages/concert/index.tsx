import { getConcertSearchData } from 'apis';
import React, { useEffect, useState } from 'react';
import { IConcert } from 'types/concert.type';
import ConcertTemplate from '../../components/template/concert';

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
    <ConcertTemplate
      reRenderCategory={reRenderCategory}
      selectedCategory={selectedCategory}
      categoryChange={categoryChange}
      reRenderKeyword={reRenderKeyword}
      keywordChange={keywordChange}
      concertCardData={concertCardData}
      concertData={concertData}
      totalConcertNum={totalConcertNum}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    ></ConcertTemplate>
  );
}

export default Concert;
