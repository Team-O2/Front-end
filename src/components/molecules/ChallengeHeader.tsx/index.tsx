import CategoryList from 'components/organisms/CategoryList';
import { ChallengeListData, getChallengeSearchData } from 'libs/getChallenge';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import AllFeedIcon from '../../../assets/images/allfeedIcon.svg';
import MyFeedIcon from '../../../assets/images/myfeedIcon.svg';
import WriteIcon from '../../../assets/images/writeIcon.svg';
import SearchForm from '../../organisms/SearchForm';

interface IChallengeDataList {
  good: string;
  bad: string;
  learn: string;
  commentNum: number;
  comments: string[];
  generation: number;
  createdAt: string;
  isDeleted: boolean;
  scrapNum: number;
  interest: string[];
  likes: number;
  updatedAt: string;
  user: { img: string; nickname: string; _id: string };
  __v: number;
  _id: string;
}
interface IProps {
  challengeList: IChallengeDataList[] | null;
  setChallengeList: (value: IChallengeDataList[]) => void;
}

//user상태 :
// 0: 비회원,
// 1: 챌린지안하는유저,
// 2: 챌린지하는유저,
// 3: 챌린지하는유저&챌린지종료,
// 4: 관리자

function ChallengeHeader({ challengeList, setChallengeList }: IProps) {
  const [userState, setUserState] = useState(2);

  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [keyword, setKeyword] = useState('');
  const [isClickedEntire, setISClickedEntire] = useState(false);
  const [ismine, setIsmine] = useState(false);
  React.useEffect(() => {
    getChallengeList(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjBlZDg2NTZkOWM0ZTg0NzM4NzM1OTYyIn0sImlhdCI6MTYyNjE3OTI4OSwiZXhwIjoxNjI3Mzg4ODg5fQ.kmF5YDPDVAv6XyR6wNW_7JWm_3byloniqKSM7zcrDbg',
    );
  }, [isClickedEntire]);
  React.useEffect(() => {
    getChallengeCategoryData(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjBlZDg2NTZkOWM0ZTg0NzM4NzM1OTYyIn0sImlhdCI6MTYyNjE3OTI4OSwiZXhwIjoxNjI3Mzg4ODg5fQ.kmF5YDPDVAv6XyR6wNW_7JWm_3byloniqKSM7zcrDbg',
      selectedCategory,
      keyword,
      ismine,
    );
  }, [selectedCategory, keyword]);
  const getChallengeList = async (token: string): Promise<void> => {
    const data = await ChallengeListData(token);
    data && setChallengeList(data);
  };

  const getChallengeCategoryData = async (
    token: string,
    selectedCategory: string,
    keyword: string,
    ismine: boolean,
  ): Promise<void> => {
    const data = await getChallengeSearchData(token, selectedCategory, keyword, ismine);
    data && setChallengeList(data);
  };

  const reRenderCategory = (category: string) => {
    if (category === '전체') {
      setSelectedCategory('');
      setISClickedEntire(!isClickedEntire);
    } else {
      setSelectedCategory(category);
    }
  };
  const reRenderKeyword = (keyword: string) => {
    setKeyword(keyword);
  };
  const reRenderIsMine = (ismine: boolean) => {
    setIsmine(false);
  };

  const challengeListNum = challengeList?.length;

  return (
    <SChallengeHeader>
      <div className="title">
        <p className="title__text">Learn Myself 2nd</p>
      </div>
      <CategoryList reRenderCategory={reRenderCategory} selectedCategory={selectedCategory} />
      <SearchForm
        reRenderKeyword={reRenderKeyword}
        selectedCategory={selectedCategory}
        concertListNum={challengeListNum}
      />
      {userState === 1 || userState === 0 ? null : (
        <div>
          <button className="button__icon">
            <Link to="/write">
              <img className="write__icon" src={WriteIcon}></img>
            </Link>
          </button>
          <button className="button__icon2">
            <img className="allfeed__icon" src={AllFeedIcon}></img>
          </button>
          <button className="button__icon3">
            <img className="myfeed__icon" src={MyFeedIcon}></img>
          </button>
        </div>
      )}
    </SChallengeHeader>
  );
}

const SChallengeHeader = Styled.div`
    width: 844px;
    margin:0 auto;

    .title{
      font-size: 46px;
      font-family: 'HomepageBaukasten';
      font-weight: bold;
      color: #3d3d3d;
      margin: 100px auto 110px;
      &__text{
        text-align:center;
      }
    }
    .header{
        display: inline-block;

        &__icon{
            padding-top:300px;
            display:inline-block;
        }

        &__category{
            display: inline-block;
            font-family: AppleSDGothicNeo;
            font-size: 32px;
            font-weight: bold;
            line-height: 1.31;
            letter-spacing: -0.5px;
            padding-left:10px;
        }
    }
    .icon{
        width:24px;
        height:24px;
    }
    .button__icon{
        position: fixed;
        margin-top:60px;
        right: 40px;
        border-radius:100%;
        height:64px;
        background-color:#FFFFFF;
        border:none;
    }

    .button__icon2{
        position: fixed;
        padding-bottom: 40px;
        right: 40px;
        border-radius:100%;
        height:64px;
        background-color:#FFFFFF;
        border:none;

    }
    .button__icon3{
        position: fixed;
        right: 40px;
        border-radius:100%;
        height:64px;
        background-color:#FFFFFF;
        border:none;

    }
    
    .write__icon{
        width:64px;
        height:64px;
        align-items:center;
    }
    .allfeed__icon{
        width:64px;
        height:64px;
        align-items:center;
    }
    .myfeed__icon{
        width:64px;
        height:64px;
        align-items:center;
    }

`;

export default ChallengeHeader;
