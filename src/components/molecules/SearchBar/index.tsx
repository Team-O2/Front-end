import { SearchIcon } from 'assets/images';
import React from 'react';
import { SearchBarWrapper, SearchButton, SearchInput } from './style';

export interface IProps {
  className?: string;
  onClickSearch?: (e: React.MouseEvent) => void;
  onChangeKeyword: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar({ onClickSearch, onChangeKeyword }: IProps): React.ReactElement {
  return (
    <SearchBarWrapper>
      <SearchInput name="searchBar" onChange={onChangeKeyword} placeholder="키워드를 검색해 주세요"></SearchInput>
      <SearchButton onClick={onClickSearch}>
        <img src={SearchIcon} alt="" />
      </SearchButton>
    </SearchBarWrapper>
  );
}

export default SearchBar;
