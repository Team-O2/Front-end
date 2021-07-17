import CategoryList from 'components/organisms/CategoryList';
import { getChallengeSearchData } from 'libs/getChallenge';
import React, { useCallback, useState } from 'react';
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
  isLike: boolean;
  likes: number;
  isScrap: boolean;
  updatedAt: string;
  user: { img: string; nickname: string; _id: string };
  __v: number;
  _id: string;
}
interface IProps {
  challengeList: IChallengeDataList[] | null;
  setChallengeList: (value: IChallengeDataList[]) => void;
  generationNum: string;
  isClickedEntire: boolean;
  setIsClickedEntire: (value: boolean) => void;
}

//user상태 :
// 0: 비회원,
// 1: 챌린지안하는유저,
// 2: 챌린지하는유저,
// 3: 챌린지하는유저&챌린지종료,
// 4: 관리자

function ChallengeHeader({
  isClickedEntire,
  setIsClickedEntire,
  challengeList,
  setChallengeList,
  generationNum,
}: IProps): React.ReactElement {
  const userStatusData = useRecoilValue(userStatusState);
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [keyword, setKeyword] = useState('');
  const [booleanMine, setBooleanMine] = useState(false);
  const [ismine, setIsmine] = useState(0);
  const [userStateNum, setUserState] = useState(userStatusData ? userStatusData.userType : 0);

  const getChallengeCategoryData = useCallback(
    async (
      token: string | null,
      selectedCategory: string,
      keyword: string,
      ismine: number,
      offset: number,
      limit: number,
      generationNum: string,
    ): Promise<void> => {
      const data = await getChallengeSearchData(generationNum, token, selectedCategory, keyword, ismine, offset, limit);
      setChallengeList(data);
    },
    [setChallengeList],
  );

  React.useEffect(() => {
    getChallengeCategoryData(
      userStatusData && userStatusData.token,
      selectedCategory,
      keyword,
      ismine,
      0,
      10,
      generationNum,
    );
  }, [selectedCategory, keyword, userStatusData, getChallengeCategoryData, ismine, generationNum]);

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

  const reRenderCategory = (category: string) => {
    if (category === '전체') {
      setSelectedCategory('');
      setIsClickedEntire(!isClickedEntire);
    } else {
      setSelectedCategory(category);
    }
  };
  const reRenderKeyword = (keyword: string) => {
    setKeyword(keyword);
  };

  const setMine = () => {
    setBooleanMine(!booleanMine);
    if (booleanMine === true) {
      setIsmine(0);
    } else if (booleanMine === false) {
      setIsmine(1);
    }
  };

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
          {booleanMine === true ? (
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
    margin:0 auto;
    width: 844px;

    .title{
      margin: 100px auto 110px;
      color: #3d3d3d;
      font-family: 'HomepageBaukasten';
      font-size: 46px;
      font-weight: bold;
      &__text{
        text-align:center;
      }
    }
    .header{
        display: inline-block;

        &__icon{
            display:inline-block;
            padding-top:300px;
        }

        &__category{
            display: inline-block;
            padding-left:10px;
            line-height: 1.31;
            letter-spacing: -0.5px;
            font-family: AppleSDGothicNeo;
            font-size: 32px;
            font-weight: bold;
        }
    }
    .icon{
        width:24px;
        height:24px;
    }
    .button__icon{
        position: fixed;
        right: 40px;
        margin-top:60px;
        border:none;
        border-radius:100%;
        background-color:#FFFFFF;
        height:64px;
    }

    .button__icon2{
        position: fixed;
        right: 40px;
        border:none;
        border-radius:100%;
        background-color:#FFFFFF;
        padding-bottom: 40px;
        height:64px;

    }
    .button__icon3{
        position: fixed;
        right: 40px;
        border:none;
        border-radius:100%;
        background-color:#FFFFFF;
        height:64px;

    }
    
    .write__icon{
        align-items:center;
        width:64px;
        height:64px;
    }
    .allfeed__icon{
        align-items:center;
        width:64px;
        height:64px;
    }
    .myfeed__icon{
        align-items:center;
        width:64px;
        height:64px;
    }
    .circle__ani1{
      position: fixed;
      top: 27px;
      left: 288px;
      opacity: 0.1;
      border-radius: 100%;
      background: #58E2FF;
      width: 206px;
      height: 206px;
    }
    
    .circle__ani2{
      position: fixed;
      top: 258px;
      left: 1505px;
      opacity: 0.1;
      border-radius: 100%;
      background: #03B6CE;
      width: 261px;
      height: 261px;
    }

    .circle__ani3{
      position: fixed;
      top: 445px;
      left: 153px;
      opacity: 0.1;
      border-radius: 100%;
      background: #03B6CE;
      width: 62px;
      height: 62px;
    }
    .circle__ani4{
      position: fixed;
      top: 783px;
      left: 1206px;
      opacity: 0.07;
      border-radius:100%;
      background: #03B6CE;
      width: 302px;
      height: 302px;
    }
    .circle__ani5{
      position: fixed;
      top: 807px;
      left: 180px;
      border-radius:100%;


      background: rgba(3, 182, 206, 0.07);
      width: 200px;
      height: 200px;
    }
    .circle__ani6{
      position: absolute;
      top: 1590px;
      left: 1600px;
      transform: matrix(1, 0, 0, -1, 0, 0);
      opacity: 0.1;
      background: rgba(3, 182, 206, 0.5);
      width: 99px;
      height: 99px;
    }




`;

export default ChallengeHeader;
