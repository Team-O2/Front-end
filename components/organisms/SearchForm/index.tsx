import { SearchBar } from 'components/molecules';
import Image from 'next/image';
import { DiamondIcon } from 'public/assets/images';
import React, { useState } from 'react';
import { Detail, Main, SearchFormWrapper } from './style';
interface IProps {
  reRenderKeyword?: (keyword: string) => void;
  selectedCategory?: string;
  contentListNum?: number;
  keywordChange?: () => void;
}

function SearchForm({ reRenderKeyword, selectedCategory, contentListNum, keywordChange }: IProps): React.ReactElement {
  const [searchValue, setSearchValue] = useState('');
  const onChangeKeyword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  };
  const onClickSearch = (event: React.MouseEvent) => {
    event.preventDefault();
    reRenderKeyword && reRenderKeyword(searchValue);
    keywordChange && keywordChange();
  };
  return (
    <SearchFormWrapper>
      <Main>
        <Image src={DiamondIcon} alt="" />
        <p>{selectedCategory}</p>
        <SearchBar onChangeKeyword={onChangeKeyword} onClickSearch={onClickSearch}></SearchBar>
      </Main>
      <Detail>
        <p>{contentListNum}개의 콘텐츠</p>
      </Detail>
    </SearchFormWrapper>
  );
}

export default SearchForm;
