import { SearchIcon } from 'assets/images';
import React from 'react';
import { SButton, SearchBarWrapper, SInput } from './style';

export interface IProps {
  className?: string;
  onClickSearch?: (e: React.MouseEvent) => void;
  onChangeKeyword: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar({ onClickSearch, onChangeKeyword }: IProps): React.ReactElement {
  return (
    <SearchBarWrapper>
      <SInput name="searchBar" onChange={onChangeKeyword} placeholder="키워드를 검색해 주세요"></SInput>
      <SButton onClick={onClickSearch}>
        <img src={SearchIcon} alt="" />
      </SButton>
    </SearchBarWrapper>
  );
}

export default SearchBar;
