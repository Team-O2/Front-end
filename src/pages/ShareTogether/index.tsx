import { getConcertSearchData } from 'apis/ShareTogether';
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
  const [currentPage, setCurrentPage] = useState(1);
  const [totalConcertNum, setTotalConcertNum] = useState(0);
  const userStatusData = useRecoilValue(userStatusState);

  useEffect(() => {
    const getConcertCategoryList = async (pageIndex: number) => {
      const LIMIT_PER_PAGE = 11;
      if (userStatusData) {
        const data = await getConcertSearchData({
          token: userStatusData.token,
          keyword: keyword,
          offset: (pageIndex - 1) * LIMIT_PER_PAGE,
          tag: selectedCategory,
        });
        data && setConcertList(data.concerts);
        data && setTotalConcertNum(data.totalConcertNum);
      } else {
        alert('로그인 후 이용하세요');
      }
    };
    getConcertCategoryList(currentPage);
  }, [selectedCategory, keyword, userStatusData, currentPage]);

  const reRenderCategory = (category: string) => {
    setSelectedCategory(category);
  };
  const reRenderKeyword = (keyword: string) => {
    setKeyword(keyword);
  };
  const categoryChange = () => {
    setCurrentPage(1);
  };
  const keywordChange = () => {
    setCurrentPage(1);
  };
  const concertCardData = concertList?.slice(undefined, 3);
  const concertData = concertList?.slice(3);
  const concertListNum = concertList?.length;

  return (
    <SShareTogether>
      <ConcertTitle></ConcertTitle>
      <CategoryList
        reRenderCategory={reRenderCategory}
        selectedCategory={selectedCategory}
        categoryChange={categoryChange}
      ></CategoryList>
      <SeachForm
        reRenderKeyword={reRenderKeyword}
        keywordChange={keywordChange}
        selectedCategory={selectedCategory}
        concertListNum={concertListNum}
      ></SeachForm>
      <ConcertCardList concertCardData={concertCardData} />
      <ConcertList
        concertData={concertData}
        totalConcertNum={totalConcertNum}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></ConcertList>
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
