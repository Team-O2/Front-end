import React from 'react';
import Styled from 'styled-components';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import SearchIcon from 'assets/images/icons_search.svg';

export interface IProps {
  className?: string;
}

function SearchBar({ ...props }: IProps): React.ReactElement {
  return (
    <SSearchBar {...props}>
      <Input className="input" name="searchBar" placeholder="키워드를 검색해 주세요"></Input>
      <Button className="button">
        <img src={SearchIcon} alt="" />
      </Button>
    </SSearchBar>
  );
}

const SSearchBar = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  .input {
    width: 298px;
    height: 46px;
    padding: 9px 18px 9px 20px;
    border: 1px solid #dfdfdf;
    border-radius: 72px;
    background-color: rgba(223, 223, 223, 0.2);
    color: #c1c1c1;
    font-size: 18px;
    :focus {outline:none;}
  }
  .button {
    width: 24px;
    height: 24px;
    background-color: rgba(223, 223, 223, 0.2);
    border: #ffffff;
    margin-left:-50px;
    margin-bottom:4px;
    opacity: 50%;
  }
`;

export default SearchBar;
