import {
  deleteUserChallengeBookmark,
  deleteUserCommentList,
  getChallengeContent,
  getMyPageChallengeList,
  getMyPageConcertList,
  getMyPageUserInfo,
  getUserChallengeList,
  getUserCommentList,
} from 'apis';
import { ChallengeCard, MyPageConcertCard } from 'components/molecules';
import { Logo } from 'public/assets/images';
import React, { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userState, userStatusState } from 'stores/user';
import { IChallenge } from 'types/challenge.type';
import { IConcert } from 'types/concert.type';
import { IMyPageHeader, IMyScrappedChallenge, IMyScrappedConcert, IMyUserCommentResponse } from 'types/myPage.type';
import { changeDateFormat } from 'utils';
import MyPageTemplate from './template';

function MyPage(): React.ReactElement {
  const [selectedSection, setSelectedSection] = useState('scrap');
  const [userInfo, setUserInfo] = useState<IMyPageHeader | null>(null);
  const [concertData, setConcertData] = useState<IMyScrappedConcert | null>(null);
  const [scrappedChallenge, setScrappedChallenge] = useState<IMyScrappedChallenge | null>(null);
  const [userChallengeList, setUserChallengeList] = useState<IChallenge[] | null>(null);
  const [userComment, setUserComment] = useState<IMyUserCommentResponse | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('Concert');
  const [isReRender, setIsReRender] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [checkedCommentList, setCheckedCommentList] = useState<number[]>([]);
  const [isSelectAll, setIsSelectAll] = useState(false);
  const [challenge, setChallenge] = useState<IChallenge | null>(null);
  const [isChallengeModalOpen, setIsChallengeModalOpen] = useState(false);
  const [isFolded, setIsFolded] = useState(true);
  const globalUserInfo = useRecoilValue(userState);
  const globalUserStatusInfo = useRecoilValue(userStatusState);

  const onChangeSection = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSection(e.target.id);
  };

  const handleCommentFold = () => {
    setIsFolded(!isFolded);
  };

  const handleChallengeModalOpen = () => {
    setIsChallengeModalOpen(false);
    setIsFolded(true);
  };

  const handleModalOpen = () => {
    setIsModalOpened(true);
  };

  const deleteSelectedCommentList = async () => {
    await deleteUserCommentList({ token: globalUserStatusInfo?.token, commentIdList: checkedCommentList });
    setIsSelectAll(false);
    setIsReRender(!isReRender);
    setIsModalOpened(false);
  };

  const renderScrappedConcert = (data: IConcert[]) => {
    return data?.map((item: IConcert) => {
      return (
        <MyPageConcertCard
          key={item.id}
          id={item.id}
          tagName={item.interest[0]}
          title={item.title}
          content={item.text}
          date={changeDateFormat(item.createdAt)}
          imagePath={item.imgThumbnail}
        />
      );
    });
  };

  const renderChallenge = (data: IChallenge[]) => {
    console.log(data);
    return data?.map((item: IChallenge) => (
      <ChallengeCard
        imagePath={item?.img || Logo}
        isBookmarked={globalUserInfo?.id !== item?.userID}
        id={item.id}
        key={item.id}
        name={item?.nickname}
        content={`잘한 점: ${item.good} 못한 점: ${item.bad} 배운 점: ${item.learn}`}
        onClick={cancelChallengeBookmark}
        onButtonClick={fetchLearnMyselfData}
      />
    ));
  };

  const fetchMyPageUserInfo = useCallback(async () => {
    const data = await getMyPageUserInfo(globalUserStatusInfo?.token);
    setUserInfo(data);
  }, [globalUserStatusInfo?.token]);

  const fetchScrappedConcert = useCallback(async () => {
    const data = await getMyPageConcertList({ token: globalUserStatusInfo?.token });
    setConcertData(data);
  }, [globalUserStatusInfo?.token]);

  const fetchScrappedChallenge = useCallback(async () => {
    const data = await getMyPageChallengeList({ token: globalUserStatusInfo?.token });
    setScrappedChallenge(data);
  }, [globalUserStatusInfo?.token]);

  const fetchUserChallenge = useCallback(async () => {
    const data = await getUserChallengeList({ token: globalUserStatusInfo?.token });
    setUserChallengeList(data);
  }, [globalUserStatusInfo?.token]);

  const fetchLearnMyselfData = useCallback(
    async (id: number) => {
      const data = await getChallengeContent(id, globalUserStatusInfo?.token);
      if (data) {
        setChallenge(data);
        setIsChallengeModalOpen(true);
      } else {
        alert('네트워크 오류');
      }
    },
    [globalUserStatusInfo?.token],
  );

  const cancelChallengeBookmark = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const id = parseInt(e.currentTarget.value);
    await deleteUserChallengeBookmark({ token: globalUserStatusInfo?.token, challengeId: id });
    setIsReRender(!isReRender);
  };

  const fetchUserCommentList = useCallback(
    async (selectedCategory: string, pageIndex: number) => {
      const LIMIT_PER_PAGE = 5;
      const data = await getUserCommentList({
        token: globalUserStatusInfo?.token,
        category: selectedCategory,
        offset: (pageIndex - 1) * LIMIT_PER_PAGE,
      });
      setUserComment(data);
    },
    [globalUserStatusInfo?.token],
  );

  // FIXME: 리렌더플래그를 두개의 useEffect에 넣어둬서 같이 리렌더링 되는 문제가 생김.
  useEffect(() => {
    fetchScrappedChallenge();
  }, [isReRender, fetchScrappedChallenge]);

  useEffect(() => {
    fetchMyPageUserInfo();
    fetchScrappedConcert();
    fetchUserChallenge();
  }, [fetchMyPageUserInfo, fetchScrappedConcert, fetchUserChallenge]);

  useEffect(() => {
    fetchUserCommentList(selectedCategory, currentPage);
  }, [selectedCategory, currentPage, isReRender, fetchUserCommentList]);

  return (
    <MyPageTemplate
      userInfo={userInfo}
      globalUserInfo={globalUserInfo}
      concertData={concertData}
      scrappedChallenge={scrappedChallenge}
      userChallengeList={userChallengeList}
      userComment={userComment}
      challenge={challenge}
      selectedSection={selectedSection}
      selectedCategory={selectedCategory}
      isModalOpened={isModalOpened}
      isSelectAll={isSelectAll}
      isChallengeModalOpen={isChallengeModalOpen}
      isFolded={isFolded}
      currentPage={currentPage}
      checkedCommentList={checkedCommentList}
      onChangeSection={onChangeSection}
      setSelectedCategory={setSelectedCategory}
      setCurrentPage={setCurrentPage}
      setCheckedCommentList={setCheckedCommentList}
      setIsSelectAll={setIsSelectAll}
      setIsModalOpened={setIsModalOpened}
      setIsChallengeModalOpen={setIsChallengeModalOpen}
      renderScrappedConcert={renderScrappedConcert}
      renderChallenge={renderChallenge}
      handleModalOpen={handleModalOpen}
      handleCommentFold={handleCommentFold}
      fetchLearnMyselfData={fetchLearnMyselfData}
      deleteSelectedCommentList={deleteSelectedCommentList}
      handleChallengeModalOpen={handleChallengeModalOpen}
    />
  );
}

export default MyPage;
