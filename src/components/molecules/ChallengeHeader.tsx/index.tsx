import CategoryList from 'components/organisms/CategoryList';
import { ChallengeListData, getChallengeSearchData } from 'libs/getChallenge';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
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
  generationNum: string;
}

//user상태 :
// 0: 비회원,
// 1: 챌린지안하는유저,
// 2: 챌린지하는유저,
// 3: 챌린지하는유저&챌린지종료,
// 4: 관리자

function ChallengeHeader({ challengeList, setChallengeList, generationNum }: IProps) {
  const userStatusData = useRecoilValue(userStatusState);
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [keyword, setKeyword] = useState('');
  const [isClickedEntire, setISClickedEntire] = useState(false);
  const [ismine, setIsmine] = useState(false);

  const [userStateNum, setUserState] = useState(userStatusData ? userStatusData.userType : 0);

  React.useEffect(() => {
    if (userStatusData) getChallengeList(userStatusData.token, 0, 10);
    else getChallengeList(null, 0, 10);
  }, [isClickedEntire]);
  React.useEffect(() => {
    if (userStatusData)
      getChallengeCategoryData(userStatusData.token, selectedCategory, keyword, ismine, 0, 50, generationNum);
    else getChallengeCategoryData(null, selectedCategory, keyword, ismine, 0, 50, generationNum);
  }, [selectedCategory, keyword]);
  const getChallengeList = async (token: string | null, offset: number, limit: number): Promise<void> => {
    const data = await ChallengeListData(token, generationNum, offset, limit);
    setChallengeList(data);
  };
  const indextoName = (index: string | number) => {
    switch (+index) {
      case 1:
        return '1st';
      case 2:
        return `2nd`;
      case 3:
        return `3rd`;
      default:
        return `${index}th`;
    }
  };

  const getChallengeCategoryData = async (
    token: string | null,
    selectedCategory: string,
    keyword: string,
    ismine: boolean,
    offset: number,
    limit: number,
    generationNum: string,
  ): Promise<void> => {
    const data = await getChallengeSearchData(generationNum, token, selectedCategory, keyword, ismine, offset, limit);
    setChallengeList(data);
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

  function setMine() {
    setIsmine(!ismine);
  }

  const challengeListNum = challengeList?.length;

  return (
    <SChallengeHeader>
      <div className="title">
        <p className="title__text">Learn Myself {indextoName(generationNum)}</p>
        <p className="circle__ani1"></p>
        <p className="circle__ani2"></p>
        <p className="circle__ani3"></p>
        <p className="circle__ani4"></p>
        <p className="circle__ani5"></p>
      </div>
      <CategoryList reRenderCategory={reRenderCategory} selectedCategory={selectedCategory} />
      <SearchForm
        reRenderKeyword={reRenderKeyword}
        selectedCategory={selectedCategory}
        concertListNum={challengeListNum}
      />
      {userStateNum === 1 || userStateNum === 0 ? null : (
        <div>
          <button className="button__icon">
            <Link to="/write">
              <img className="write__icon" src={WriteIcon}></img>
            </Link>
          </button>
          {ismine === true ? (
            <button className="button__icon2" onClick={setMine}>
              <img className="allfeed__icon" src={AllFeedIcon}></img>
            </button>
          ) : (
            <button className="button__icon3" onClick={setMine}>
              <img className="myfeed__icon" src={MyFeedIcon}></img>
            </button>
          )}
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
    .circle__ani1{
      position: fixed;
      width: 206px;
      height: 206px;
      left: 288px;
      top: 27px;
      background: #58E2FF;
      border-radius: 100%;
      opacity: 0.1;
    }
    
    .circle__ani2{
      position: fixed;
      width: 261px;
      height: 261px;
      left: 1505px;
      top: 258px;
      border-radius: 100%;
      background: #03B6CE;
      opacity: 0.1;
    }

    .circle__ani3{
      position: fixed;
      width: 62px;
      height: 62px;
      left: 153px;
      top: 445px;
      border-radius: 100%;
      background: #03B6CE;
      opacity: 0.1;
    }
    .circle__ani4{
      position: fixed;
      width: 302px;
      height: 302px;
      left: 1206px;
      top: 783px;
      border-radius:100%;
      background: #03B6CE;
      opacity: 0.07;
    }
    .circle__ani5{
      position: fixed;
      width: 200px;
      height: 200px;
      left: 180px;
      top: 807px;
      border-radius:100%;


      background: rgba(3, 182, 206, 0.07);
    }
    .circle__ani6{
      position: absolute;
      width: 99px;
      height: 99px;
      left: 1600px;
      top: 1590px;
      background: rgba(3, 182, 206, 0.5);
      opacity: 0.1;
      transform: matrix(1, 0, 0, -1, 0, 0);
    }




`;

export default ChallengeHeader;
