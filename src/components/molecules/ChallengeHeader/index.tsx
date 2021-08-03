import { getChallengeSearchData } from 'apis';
import { AllFeedIcon, MyFeedIcon, WriteIcon } from 'assets/images';
import { CategoryList, SearchForm } from 'components/organisms';
import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import { AllFeedButtom, HeaderWrapper, MyFeedButtom, SChallengeHeader, WriteButton } from './style';

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
      <HeaderWrapper>
        <p>Learn Myself {indextoName(generationNum)}</p>
        <h1></h1>
        <h2></h2>
        <h3></h3>
        <h4></h4>
        <h5></h5>
      </HeaderWrapper>
      <CategoryList reRenderCategory={reRenderCategory} selectedCategory={selectedCategory} />
      <SearchForm
        reRenderKeyword={reRenderKeyword}
        selectedCategory={selectedCategory}
        contentListNum={challengeListNum}
      />
      {userStateNum === 1 || userStateNum === 0 ? null : (
        <div>
          <WriteButton>
            <Link to="/challenge/write">
              <img src={WriteIcon}></img>
            </Link>
          </WriteButton>
          {booleanMine === true ? (
            <AllFeedButtom onClick={setMine}>
              <img src={AllFeedIcon}></img>
            </AllFeedButtom>
          ) : (
            <MyFeedButtom onClick={setMine}>
              <img src={MyFeedIcon}></img>
            </MyFeedButtom>
          )}
        </div>
      )}
    </SChallengeHeader>
  );
}
export default ChallengeHeader;
