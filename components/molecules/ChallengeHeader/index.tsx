import { getChallengeSearchData } from 'apis';
import { CategoryList, SearchForm } from 'components/organisms';
import Image from 'next/image';
import Link from 'next/link';
import { AllFeedIcon, MyFeedIcon, WriteIcon } from 'public/assets/images';
import React, { useCallback, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import { IChallengeData } from 'types/challenge.type';
import { AllFeedButtom, HeaderWrapper, MyFeedButtom, SChallengeHeader, WriteButton } from './style';

interface IProps {
  challengeList: IChallengeData[] | null;
  setChallengeList: (value: IChallengeData[] | null) => void;
  generationNum: string | string[];
}

//userState상태 :
// 0: 비회원,
// 1: 챌린지안하는유저 (기간은 신청기간중),
// 2: 챌린지안하는유저 (기간은 신청기간이 아님),
// 3: 챌린지하는유저 (기간은 챌린지중),
// 4: 관리자

function ChallengeHeader({ challengeList, setChallengeList, generationNum }: IProps): React.ReactElement {
  const userStatusData = useRecoilValue(userStatusState);
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [keyword, setKeyword] = useState('');
  const [booleanMine, setBooleanMine] = useState(false);
  const [ismine, setIsmine] = useState(0);
  const userStateNum = userStatusData ? userStatusData.userType : 0;

  const getChallengeCategoryData = useCallback(
    async (
      token: string | null,
      selectedCategory: string,
      keyword: string,
      ismine: number,
      offset: number,
      limit: number,
      generationNum: string | string[],
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

  const indextoName = (index: string | number | string[]) => {
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
    setSelectedCategory(category);
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
      {userStateNum === 1 || userStateNum === 0 || userStateNum === 2 ? null : (
        <div>
          <WriteButton>
            <Link href={{ pathname: `/challenge/write` }}>
              <Image src={WriteIcon}></Image>
            </Link>
          </WriteButton>
          {booleanMine === true ? (
            <AllFeedButtom onClick={setMine}>
              <Image src={AllFeedIcon}></Image>
            </AllFeedButtom>
          ) : (
            <MyFeedButtom onClick={setMine}>
              <Image src={MyFeedIcon}></Image>
            </MyFeedButtom>
          )}
        </div>
      )}
    </SChallengeHeader>
  );
}
export default ChallengeHeader;
