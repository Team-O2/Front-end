import { DiamondIcon } from 'assets/images';
import { SearchBar } from 'components/molecules';
import React, { useState } from 'react';
import Styled from 'styled-components';
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
    <SSearchForm>
      <div className="main">
        <img className="main__img" src={DiamondIcon} alt="" />
        <p className="main__title">{selectedCategory}</p>
        <SearchBar
          onChangeKeyword={onChangeKeyword}
          onClickSearch={onClickSearch}
          className="main__searchbar"
        ></SearchBar>
      </div>
      <div className="detail">
        <p>{contentListNum}개의 콘텐츠</p>
      </div>
    </SSearchForm>
  );
}

const SSearchForm = Styled.div`
  display: flex;
  flex-direction: column;
  height: 80px;
  .main {
    display: flex;
    flex-direction: row;
    align-items: center;
    &__img {
        width: 22px;
        height: 22px;
    }
    &__title {
        flex:1;
        margin-left: 10px;
        color: #242424;
        font-size: 32px;
        font-weight: bold;
    }
    &__searchbar {
        margin-right:33px;
    }
  }
  .detail {
    margin-top:12px;
    color: #3d3d3d;
    font-size: 16px;
  }
`;

export default SearchForm;
