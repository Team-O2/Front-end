import { ConcertTitle } from 'components/molecules';
import { CategoryList, ConcertCardList, ConcertList, SearchForm } from 'components/organisms';
import React from 'react';
import { IConcert } from 'types/concert.type';
import { ConcertWrapper } from './style';

interface IProps {
  reRenderCategory?: (interest: string) => void;
  selectedCategory?: string;
  categoryChange?: () => void;
  reRenderKeyword?: (keyword: string) => void;
  keywordChange?: () => void;
  concertCardData: Array<IConcert> | undefined;
  concertData: Array<IConcert> | undefined;
  totalConcertNum: number;
  currentPage: number;
  setCurrentPage: (value: number) => void;
}

function ConcertTemplate({
  reRenderCategory,
  selectedCategory,
  categoryChange,
  reRenderKeyword,
  keywordChange,
  concertCardData,
  concertData,
  totalConcertNum,
  currentPage,
  setCurrentPage,
}: IProps): React.ReactElement {
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

export default ConcertTemplate;
