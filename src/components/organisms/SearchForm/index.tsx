import DiamondIcon from 'assets/images/diamond.svg';
import SearchBar from 'components/molecules/SearchBar';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Styled from 'styled-components';

interface MatchParams {
  path: string;
}
function SearchForm({ location }: RouteComponentProps<MatchParams>): React.ReactElement {
  const path = location.pathname;
  console.log(path);
  return (
    <SSearchForm>
      <div className="main">
        <img className="main__img" src={DiamondIcon} alt="" />
        <p className="main__title">전체</p>
        <SearchBar className="main__searchbar"></SearchBar>
      </div>
      <div className="detail">
        <p>12344개의 콘텐츠</p>
      </div>
    </SSearchForm>
  );
}

const SSearchForm = Styled.div`
  display: flex;
  flex-direction: column;
  height: 80px;
  margin-bottom: 60px;
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
        font-size: 32px;
        font-weight: bold;
        color: #242424;
    }
    &__searchbar {
        margin-right:33px;
    }
  }
  .detail {
    font-size: 16px;
    color: #3d3d3d;
    margin-top:12px;
  }
`;

export default withRouter(SearchForm);
