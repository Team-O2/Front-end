import {
  deleteUserCommentList,
  deleteUserLearnMyselfBookmark,
  getChallengeContent,
  getLearnMyselfListData,
  getMyPageUserInfo,
  getShareTogetherListData,
  getUserCommentListData,
  getUserLearnMyselfListData,
} from 'apis';
import { Logo } from 'assets/images';
import { Button, Img } from 'components/atoms';
import Modal from 'components/atoms/Modal';
import { ChallengeModalComment, LearnMyselfCard, MyPageSection, ShareTogetherCard } from 'components/molecules';
import DeleteModal from 'components/molecules/DeleteModal';
import { MyCommentList, MyPageHeader } from 'components/organisms';
import dayjs from 'dayjs';
import { IChallengeData } from 'pages/LearnMyself/template/ChallengeList';
import React, { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userState, userStatusState } from 'stores/user';
import Styled from 'styled-components';
import { ifProp, palette } from 'styled-tools';
import { IChallenge } from 'types/learnMySelf';
import {
  ILearnMySelf,
  IMyPageHeader,
  IMyScrappedLearnMyself,
  IMyScrappedShareTogether,
  IMyUserCommentResponse,
} from 'types/myPage';
import { IShareTogether } from 'types/shareTogether';
import { changeDateFormat } from 'utils';

function MyPage(): React.ReactElement {
  const [selectedSection, setSelectedSection] = useState('scrap');
  const [userInfo, setUserInfo] = useState<IMyPageHeader | null>(null);
  const [shareTogetherData, setShareTogetherData] = useState<IMyScrappedShareTogether | null>(null);
  const [learnMyselfData, setLearnMyselfData] = useState<IMyScrappedLearnMyself | null>(null);
  const [userLearnMyselfData, setUserLearnMyselfData] = useState<IChallengeData[] | null>(null);
  const [userCommentData, setUserCommentData] = useState<IMyUserCommentResponse | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('Concert');
  const [reRenderFlag, setReRenderFlag] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkedCommentList, setCheckedCommentList] = useState<string[]>([]);
  const [isSelectAll, setIsSelectAll] = useState(false);
  const [challengeData, setChallengeData] = useState<IChallenge | null>(null);
  const [isChallengeModalOpen, setIsChallengeModalOpen] = useState(false);
  const [isFolded, setIsFolded] = useState(true);
  const globalUserInfo = useRecoilValue(userState);
  const globalUserStatusInfo = useRecoilValue(userStatusState);

  const onChangeSection = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSection(e.target.id);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const deleteSelectedCommentList = async () => {
    await deleteUserCommentList({ token: globalUserStatusInfo?.token, commentIdList: checkedCommentList });
    setIsSelectAll(false);
    setReRenderFlag(!reRenderFlag);
    setIsModalOpen(false);
  };

  const fetchMyPageUserInfo = useCallback(async () => {
    const data = await getMyPageUserInfo(globalUserStatusInfo?.token);
    setUserInfo(data);
  }, [globalUserStatusInfo?.token]);

  const fetchScrappedShareTogetherData = useCallback(async () => {
    const data = await getShareTogetherListData({ token: globalUserStatusInfo?.token });
    setShareTogetherData(data);
  }, [globalUserStatusInfo?.token]);

  const fetchScrappedLearnMyselfData = useCallback(async () => {
    const data = await getLearnMyselfListData({ token: globalUserStatusInfo?.token });
    setLearnMyselfData(data);
  }, [globalUserStatusInfo?.token]);

  const fetchUserLearnMyselfData = useCallback(async () => {
    const data = await getUserLearnMyselfListData({ token: globalUserStatusInfo?.token });
    setUserLearnMyselfData(data);
  }, [globalUserStatusInfo?.token]);

  const fetchLearnMyselfData = useCallback(
    async (id: string) => {
      const data = await getChallengeContent(id, globalUserStatusInfo?.token);
      if (data) {
        setChallengeData(data);
        setIsChallengeModalOpen(true);
      } else {
        alert('네트워크 오류');
      }
    },
    [globalUserStatusInfo?.token],
  );

  const cancelLearnMyselfBookmark = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const id = e.currentTarget.value;
    await deleteUserLearnMyselfBookmark({ token: globalUserStatusInfo?.token, learnMyselfId: id });
    setReRenderFlag(!reRenderFlag);
  };

  const fetchUserCommentListData = useCallback(
    async (selectedCategory: string, pageIndex: number) => {
      const LIMIT_PER_PAGE = 5;
      const data = await getUserCommentListData({
        token: globalUserStatusInfo?.token,
        category: selectedCategory,
        offset: (pageIndex - 1) * LIMIT_PER_PAGE,
      });
      setUserCommentData(data);
    },
    [globalUserStatusInfo?.token],
  );

  // FIXME: 리렌더플래그를 두개의 useEffect에 넣어둬서 같이 리렌더링 되는 문제가 생김.
  useEffect(() => {
    fetchScrappedLearnMyselfData();
  }, [reRenderFlag, fetchScrappedLearnMyselfData]);

  useEffect(() => {
    fetchMyPageUserInfo();
    fetchScrappedShareTogetherData();
    fetchUserLearnMyselfData();
  }, [fetchMyPageUserInfo, fetchScrappedShareTogetherData, fetchUserLearnMyselfData]);

  useEffect(() => {
    fetchUserCommentListData(selectedCategory, currentPage);
  }, [selectedCategory, currentPage, reRenderFlag, fetchUserCommentListData]);

  const renderScrappedShareTogether = (data: IShareTogether[]) => {
    return data?.map((item: IShareTogether) => {
      return (
        <ShareTogetherCard
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

  const renderLearnMyself = (data: ILearnMySelf[]) => {
    return data?.map((item: ILearnMySelf) => (
      <LearnMyselfCard
        imagePath={item.user?.img || Logo}
        isBookmarked={globalUserInfo?._id !== item?.user?._id}
        id={item._id}
        key={item._id}
        name={item.user?.nickname}
        content={`잘한 점: ${item.good} 못한 점: ${item.bad} 배운 점: ${item.learn}`}
        onClick={cancelLearnMyselfBookmark}
        onButtonClick={fetchLearnMyselfData}
      />
    ));
  };

  return (
    <Wrapper>
      <div className="mypage__header">
        <MyPageHeader userInfo={userInfo} />
      </div>
      <div className="mypage__body">
        <Switch>
          <li>
            <SwitchRadio type="radio" id="scrap" onChange={onChangeSection} checked={selectedSection === 'scrap'} />
            <label className="subhead5" htmlFor="scrap">
              스크랩
            </label>
          </li>
          <li>
            <SwitchRadio
              type="radio"
              id="activity"
              onChange={onChangeSection}
              checked={selectedSection === 'activity'}
            />
            <label className="subhead5" htmlFor="activity">
              나의 활동
            </label>
          </li>
        </Switch>
        <div className="mypage__top">
          {selectedSection === 'scrap' ? (
            <MyPageSection
              title="Share Together"
              subTitle={`${globalUserInfo?.nickname}님이 스크랩한 강연들이에요`}
              column={2}
              gap={30}
              path="/mypage/concert/scrap"
              data={shareTogetherData?.mypageConcertScrap}
              renderItemList={renderScrappedShareTogether}
            />
          ) : (
            <MyPageSection
              title="작성한 글"
              subTitle={`${globalUserInfo?.nickname}님이 작성한 런마셀들이에요`}
              column={4}
              gap={15}
              path="/mypage/challenge/mine"
              data={userLearnMyselfData}
              renderItemList={renderLearnMyself}
            />
          )}
        </div>
        <div className="mypage__bottom">
          {selectedSection === 'scrap' ? (
            <MyPageSection
              title="Learn Myself"
              subTitle={`${globalUserInfo?.nickname}님이 스크랩한 런마셀들이에요`}
              column={4}
              gap={15}
              path="/mypage/challenge/scrap"
              data={learnMyselfData?.mypageChallengeScrap}
              renderItemList={renderLearnMyself}
            />
          ) : (
            userCommentData && (
              <MyCommentList
                userCommentData={userCommentData}
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
        </div>
      </div>
      <DeleteModal
        isDeleteModalOpen={isModalOpen}
        setIsDeleteModalOpen={setIsModalOpen}
        onClickDeleteButton={deleteSelectedCommentList}
      />
      <Modal isOpen={isChallengeModalOpen} setIsOpen={setIsChallengeModalOpen} isBlur={true}>
        <LearnMyselfModalWrapper isFolded={isFolded}>
          <div className="wrapper">
            <div className="userInfo">
              <Img className="userInfo__img" src={challengeData?.user?.img} />
              <div className="userInfo__infoWrapper">
                <div className="userInfo__infoWrapper--top subhead5">
                  <div>{challengeData?.user?.nickname}</div>
                  <div className="userInfo__infoWrapper--date body2">{dayjs().format('MM.DD')}</div>
                </div>
                <div className="userInfo__infoWrapper--tags subhead2">
                  {challengeData?.interest?.map((item: string) => `#${item} `)}
                </div>
              </div>
            </div>
            <div className="textArea">
              <h3 className="textArea__title subhead3">잘한 점</h3>
              <p className="textArea__contents body3">{challengeData?.good}</p>
              <h3 className="textArea__title subhead3">못한 점</h3>
              <p className="textArea__contents body3">{challengeData?.bad}</p>
              <h3 className="textArea__title subhead3">배운 점</h3>
              <p className="textArea__contents body3">{challengeData?.learn}</p>
            </div>
            <Button
              className="button__more subhead4"
              onClick={() => {
                setIsFolded(!isFolded);
              }}
            >
              {isFolded ? '더보기' : '접기'}
            </Button>
            <div className="comment">
              {challengeData?.comments.map((comment) => (
                <ChallengeModalComment key={comment._id} commentData={comment} />
              ))}
            </div>
          </div>

          <Button
            className="button__close subhead3"
            onClick={() => {
              setIsChallengeModalOpen(false);
              setIsFolded(true);
            }}
          >
            닫기
          </Button>
        </LearnMyselfModalWrapper>
      </Modal>
    </Wrapper>
  );
}

const LearnMyselfModalWrapper = Styled.div<{ isFolded: boolean }>`
  position: fixed;
  top:0;
  right:0;
  bottom:0;
  left:0;
  margin:auto;
  border-radius: 18px;
  width: 844px;
  height: 607px;

  .wrapper {
    width: 100%;
    height: 544px;
    border-radius: 18px 18px 0 0;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
  }

  .userInfo {
    display: flex;
    margin: 40px 30px 20px 30px;
    width: calc(100% - 60px);
    height: 80px;
    &__img {
      margin-right: 15px;
      border-radius: 50%;
      width: 80px;
      height: 80px;
    }
    &__infoWrapper {
      display: flex;
      justify-content: center;
      flex-direction: column;

      &--top {
        display: flex;
        align-items: center;
        color: ${palette('grayscale', 7)};
      }

      &--date {
        margin: auto 10px;
        color: ${palette('grayscale', 4)};
      }

      &--tags {
        color: ${palette('grayscale', 5)}
      }
    }
  }
  
  .textArea {
    margin: 0 60px;
    width: calc(100% - 120px);
    h3 {
      margin: 30px 0 6px 0;
      color: ${palette('grayscale', 7)};
    }
    p {
      color: ${palette('grayscale', 6)};
      word-wrap: break-word;
      overflow: ${ifProp('isFolded', 'hidden')};
      text-overflow: ${ifProp('isFolded', 'ellipsis')};
      white-space: ${ifProp('isFolded', 'nowrap')};
    }
  }

  .comment {
    margin: 0 60px;
    width: calc(100% - 120px);
  }

  .button {
    &__more {
      color: ${palette('primary', 5)};
      margin: 50px 0;
    }

    &__close {
      position: absolute;
      bottom: 0px;
      width: 100%;
      height: 63px;
      color: #fff;
      background-color: ${palette('grayscale', 7)};
      border-radius: 0 0 18px 18px;
      
    }
  }
`;

const SwitchRadio = Styled.input`
  display: none;
  
  + label {
    cursor: pointer;
    color: ${palette('grayscale', 3)};
  }
  :checked + label {
    color: ${palette('grayscale', 6)};
    padding-bottom: 2px;
    background: 
      linear-gradient(to right, ${palette('primary', 3)}, ${palette('primary', 0)})
      left 
      bottom
      #fff
      no-repeat; 
    background-size: 100% 2px;
  }
`;

const Switch = Styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  li {
    margin: 0 20px;
  }
`;

const Wrapper = Styled.div`
  .mypage {
    &__top, &__bottom, &__header {
      display: flex;
      justify-content: center;
      width: 100vw;
    }
    &__header {
      height: 581px;
      background-color: ${palette('grayscale', -2)};
    }
    &__body {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &__top {
      margin: 120px 0 150px 0;
    }
    &__bottom {
      padding: 150px 0;
      background-color: #f7f7f7;
    }
  }
`;

export default MyPage;
