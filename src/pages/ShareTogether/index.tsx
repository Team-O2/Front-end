import { getConcertListData, getConcertSearchData } from 'apis/ShareTogether';
import ConcertTitle from 'components/molecules/ConcertTitle';
import CategoryList from 'components/organisms/CategoryList';
import ConcertCardList from 'components/organisms/ConcertCardList';
import ConcertList from 'components/organisms/ConcertList';
import SeachForm from 'components/organisms/SearchForm';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import Styled from 'styled-components';

interface IConcertData {
  videoLink: string;
  imgThumbnail: string;
  likes: number;
  commentNum: number;
  scrapNum: number;
  interest: string[];
  hashtag: string[];
  isDeleted: boolean;
  comments: string[];
  isNotice: boolean;
  _id: string;
  title: string;
  user: { _id: string; nickname: string; img: string };
  createdAt: string;
  text: string;
  authorNickname: string;
  updatedAt: string;
  __v: number;
}
function ShareTogether(): React.ReactElement {
  const [concertList, setConcertList] = useState<IConcertData[] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [keyword, setKeyword] = useState('');
  const [isClickedEntire, setISClickedEntire] = useState(false);
  const userStatusData = useRecoilValue(userStatusState);
  useEffect(() => {
    const getConcertList = async () => {
      if (userStatusData) {
        const data = await getConcertListData(userStatusData.token);
        data && setConcertList(data);
      } else {
        alert('로그인 후 이용하세요');
      }
    };
    getConcertList();
  }, [isClickedEntire, userStatusData]);

  useEffect(() => {
    const getConcertCategoryList = async () => {
      if (userStatusData) {
        const data = await getConcertSearchData(userStatusData.token, selectedCategory, keyword);
        data && setConcertList(data.concerts);
      } else {
        alert('로그인 후 이용하세요');
      }
    };
    getConcertCategoryList();
  }, [selectedCategory, keyword, userStatusData]);

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
  const concertCardData = concertList?.slice(undefined, 3);
  const concertData = concertList?.slice(3);
  const concertListNum = concertList?.length;

  return (
    <SShareTogether>
      <ConcertTitle></ConcertTitle>
      <CategoryList reRenderCategory={reRenderCategory} selectedCategory={selectedCategory}></CategoryList>
      <SeachForm
        reRenderKeyword={reRenderKeyword}
        selectedCategory={selectedCategory}
        concertListNum={concertListNum}
      ></SeachForm>
      <ConcertCardList concertCardData={concertCardData} />
      <ConcertList concertData={concertData}></ConcertList>
    </SShareTogether>
  );
}

const SShareTogether = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 845px;
`;
export default ShareTogether;
