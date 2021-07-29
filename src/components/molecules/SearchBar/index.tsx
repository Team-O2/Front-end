import { SearchIcon } from 'assets/images';
import { Button, Input } from 'components/atoms';
import React from 'react';
import Styled from 'styled-components';

export interface IProps {
  className?: string;
  onClickSearch?: (e: React.MouseEvent) => void;
  onChangeKeyword: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar({ onClickSearch, onChangeKeyword }: IProps): React.ReactElement {
  return (
    <SSearchBar>
      <Input className="input" name="searchBar" onChange={onChangeKeyword} placeholder="키워드를 검색해 주세요"></Input>
      <Button className="button" onClick={onClickSearch}>
        <img src={SearchIcon} alt="" />
      </Button>
    </SSearchBar>
  );
}

const SSearchBar = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 33px;
  .input {
    border: 1px solid #dfdfdf;
    border-radius: 72px;
    background-color: rgba(223, 223, 223, 0.2);
    padding: 9px 18px 9px 20px;
    width: 298px;
    height: 46px;
    color: #c1c1c1;
    font-size: 18px;
    :focus {outline:none;}
  }
  .button {
    opacity: 50%;
    margin-bottom:4px;
    margin-left:-50px;
    border: #ffffff;
    background-color: rgba(223, 223, 223, 0.2);
    width: 24px;
    height: 24px;
  }
`;

export default SearchBar;
