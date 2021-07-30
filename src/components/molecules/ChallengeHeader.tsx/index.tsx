import { getChallengeSearchData } from 'apis';
import { AllFeedIcon, MyFeedIcon, WriteIcon } from 'assets/images/index';
import CategoryList from 'components/organisms/CategoryList';
import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import SearchForm from '../../organisms/SearchForm';
import SChallengeHeader from './style';

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

//userState상태 :
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
        contentListNum={challengeListNum}
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
export default ChallengeHeader;
