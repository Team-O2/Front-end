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
import { Logo } from 'assets/images';
import { Modal } from 'components/atoms';
import {
  ChallengeCard,
  ChallengeModalComment,
  DeleteModal,
  MyPageConcertCard,
  MyPageSection,
} from 'components/molecules';
import { MyCommentList, MyPageHeader } from 'components/organisms';
import dayjs from 'dayjs';
import React, { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userState, userStatusState } from 'stores/user';
import { IChallenge, IChallengeData } from 'types/challenge.type';
import { IConcert } from 'types/concert.type';
import { IMyPageHeader, IMyScrappedChallenge, IMyScrappedConcert, IMyUserCommentResponse } from 'types/myPage.type';
import { changeDateFormat } from 'utils';
import {
  Body,
  Bottom,
  ChallengeModalWrapper,
  CloseButton,
  CommentWrapper,
  Header,
  ModalUserImg,
  ModalUserInfo,
  ModalUserInfoWrapper,
  ModalWrapper,
  MoreButton,
  Switch,
  SwitchRadio,
  TextArea,
  Top,
  Wrapper,
} from './style';

function MyPage(): React.ReactElement {
  const [selectedSection, setSelectedSection] = useState('scrap');
  const [userInfo, setUserInfo] = useState<IMyPageHeader | null>(null);
  const [concertData, setConcertData] = useState<IMyScrappedConcert | null>(null);
  const [scrappedChallenge, setScrappedChallenge] = useState<IMyScrappedChallenge | null>(null);
  const [userChallengeList, setUserChallengeList] = useState<IChallengeData[] | null>(null);
  const [userComment, setUserComment] = useState<IMyUserCommentResponse | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('Concert');
  const [isReRender, setIsReRender] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [checkedCommentList, setCheckedCommentList] = useState<string[]>([]);
  const [isSelectAll, setIsSelectAll] = useState(false);
  const [challenge, setChallenge] = useState<IChallenge | null>(null);
  const [isChallengeModalOpen, setIsChallengeModalOpen] = useState(false);
  const [isFolded, setIsFolded] = useState(true);
  const globalUserInfo = useRecoilValue(userState);
  const globalUserStatusInfo = useRecoilValue(userStatusState);

  const onChangeSection = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSection(e.target.id);
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
    async (id: string) => {
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
    const id = e.currentTarget.value;
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

  const renderScrappedConcert = (data: IConcert[]) => {
    return data?.map((item: IConcert) => {
      return (
        <MyPageConcertCard
          key={item._id}
          id={item._id}
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
    return data?.map((item: IChallenge) => (
      <ChallengeCard
        imagePath={item.user?.img || Logo}
        isBookmarked={globalUserInfo?._id !== item?.user?._id}
        id={item._id}
        key={item._id}
        name={item.user?.nickname}
        content={`잘한 점: ${item.good} 못한 점: ${item.bad} 배운 점: ${item.learn}`}
        onClick={cancelChallengeBookmark}
        onButtonClick={fetchLearnMyselfData}
      />
    ));
  };

  return (
    <Wrapper>
      <Header>
        <MyPageHeader userInfo={userInfo} />
      </Header>
      <Body>
        <Switch>
          <li>
            <SwitchRadio type="radio" id="scrap" onChange={onChangeSection} checked={selectedSection === 'scrap'} />
            <label htmlFor="scrap">스크랩</label>
          </li>
          <li>
            <SwitchRadio
              type="radio"
              id="activity"
              onChange={onChangeSection}
              checked={selectedSection === 'activity'}
            />
            <label htmlFor="activity">나의 활동</label>
          </li>
        </Switch>
        <Top>
          {selectedSection === 'scrap' ? (
            <MyPageSection
              title="Share Together"
              subTitle={`${globalUserInfo?.nickname}님이 스크랩한 강연들이에요`}
              column={2}
              gap={30}
              path="/mypage/concert/scrap"
              data={concertData?.mypageConcertScrap}
              renderItemList={renderScrappedConcert}
            />
          ) : (
            <MyPageSection
              title="작성한 글"
              subTitle={`${globalUserInfo?.nickname}님이 작성한 런마셀들이에요`}
              column={4}
              gap={15}
              path="/mypage/challenge/mine"
              data={userChallengeList}
              renderItemList={renderChallenge}
            />
          )}
        </Top>
        <Bottom>
          {selectedSection === 'scrap' ? (
            <MyPageSection
              title="Learn Myself"
              subTitle={`${globalUserInfo?.nickname}님이 스크랩한 런마셀들이에요`}
              column={4}
              gap={15}
              path="/mypage/challenge/scrap"
              data={scrappedChallenge?.mypageChallengeScrap}
              renderItemList={renderChallenge}
            />
          ) : (
            userComment && (
              <MyCommentList
                userComment={userComment}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                handleModalOpen={handleModalOpen}
                checkedCommentList={checkedCommentList}
                setCheckedCommentList={setCheckedCommentList}
                isSelectAll={isSelectAll}
                setIsSelectAll={setIsSelectAll}
                handleDetailModal={fetchLearnMyselfData}
              />
            )
          )}
        </Bottom>
      </Body>
      <DeleteModal
        isDeleteModalOpen={isModalOpened}
        setIsDeleteModalOpen={setIsModalOpened}
        onClickDeleteButton={deleteSelectedCommentList}
      />
      <Modal isOpen={isChallengeModalOpen} setIsOpen={setIsChallengeModalOpen} isBlur={true}>
        <ChallengeModalWrapper>
          <ModalWrapper>
            <ModalUserInfo>
              <ModalUserImg src={challenge?.user?.img} />
              <ModalUserInfoWrapper>
                <div>
                  <div>{challenge?.user?.nickname}</div>
                  <div>{dayjs().format('MM.DD')}</div>
                </div>
                <div>{challenge?.interest?.map((item: string) => `#${item} `)}</div>
              </ModalUserInfoWrapper>
            </ModalUserInfo>
            <TextArea isFolded={isFolded}>
              <h3>잘한 점</h3>
              <p>{challenge?.good}</p>
              <h3>못한 점</h3>
              <p>{challenge?.bad}</p>
              <h3>배운 점</h3>
              <p>{challenge?.learn}</p>
            </TextArea>
            <MoreButton
              onClick={() => {
                setIsFolded(!isFolded);
              }}
            >
              {isFolded ? '더보기' : '접기'}
            </MoreButton>
            <CommentWrapper>
              {challenge?.comments.map((comment) => (
                <ChallengeModalComment key={comment._id} commentData={comment} />
              ))}
            </CommentWrapper>
          </ModalWrapper>
          <CloseButton
            onClick={() => {
              setIsChallengeModalOpen(false);
              setIsFolded(true);
            }}
          >
            닫기
          </CloseButton>
        </ChallengeModalWrapper>
      </Modal>
    </Wrapper>
  );
}

export default MyPage;
