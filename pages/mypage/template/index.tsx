import { DeleteModal, MyPageSection } from 'components/molecules';
import { MyCommentList, MyPageCommentModal, MyPageHeader } from 'components/organisms';
import React from 'react';
import { IChallenge } from 'types/challenge.type';
import { IConcert } from 'types/concert.type';
import { IUserState } from 'types/global.type';
import { IMyPageHeader, IMyScrappedChallenge, IMyScrappedConcert, IMyUserCommentResponse } from 'types/myPage.type';
import * as S from './style';

export interface IProps {
  userInfo: IMyPageHeader | null;
  globalUserInfo: IUserState | null;
  concertData: IMyScrappedConcert | null;
  scrappedChallenge: IMyScrappedChallenge | null;
  userChallengeList: IChallenge[] | null;
  userComment: IMyUserCommentResponse | null;
  challenge: IChallenge | null;
  selectedSection: string;
  selectedCategory: string;
  isModalOpened: boolean;
  isSelectAll: boolean;
  isChallengeModalOpen: boolean;
  isFolded: boolean;
  currentPage: number;
  checkedCommentList: number[];
  onChangeSection: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setSelectedCategory: (value: string) => void;
  setCurrentPage: (value: number) => void;
  setCheckedCommentList: (value: number[]) => void;
  setIsSelectAll: (value: boolean) => void;
  setIsModalOpened: (value: boolean) => void;
  setIsChallengeModalOpen: (value: boolean) => void;
  renderScrappedConcert: (data: IConcert[]) => React.ReactElement[];
  renderChallenge: (data: IChallenge[]) => React.ReactElement[];
  handleModalOpen: () => void;
  handleCommentFold: () => void;
  fetchLearnMyselfData: (id: number) => Promise<void>;
  deleteSelectedCommentList: () => Promise<void>;
  handleChallengeModalOpen: () => void;
}

function MyPageTemplate({
  userInfo,
  globalUserInfo,
  concertData,
  scrappedChallenge,
  userChallengeList,
  userComment,
  challenge,
  selectedSection,
  selectedCategory,
  isModalOpened,
  isSelectAll,
  isChallengeModalOpen,
  isFolded,
  currentPage,
  checkedCommentList,
  onChangeSection,
  setSelectedCategory,
  setCurrentPage,
  setCheckedCommentList,
  setIsSelectAll,
  setIsModalOpened,
  setIsChallengeModalOpen,
  renderScrappedConcert,
  renderChallenge,
  handleModalOpen,
  handleCommentFold,
  fetchLearnMyselfData,
  deleteSelectedCommentList,
  handleChallengeModalOpen,
}: IProps): React.ReactElement {
  return (
    <S.Wrapper>
      <S.Header>
        <MyPageHeader userInfo={userInfo} />
      </S.Header>
      <S.Body>
        <S.Switch>
          <li>
            <S.SwitchRadio type="radio" id="scrap" onChange={onChangeSection} checked={selectedSection === 'scrap'} />
            <label htmlFor="scrap">스크랩</label>
          </li>
          <li>
            <S.SwitchRadio
              type="radio"
              id="activity"
              onChange={onChangeSection}
              checked={selectedSection === 'activity'}
            />
            <label htmlFor="activity">나의 활동</label>
          </li>
        </S.Switch>
        <S.Top>
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
        </S.Top>
        <S.Bottom>
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
        </S.Bottom>
      </S.Body>
      <DeleteModal
        isDeleteModalOpen={isModalOpened}
        setIsDeleteModalOpen={setIsModalOpened}
        onClickDeleteButton={deleteSelectedCommentList}
      />
      <MyPageCommentModal
        isFolded={isFolded}
        isChallengeModalOpen={isChallengeModalOpen}
        challenge={challenge}
        handleCommentFold={handleCommentFold}
        setIsChallengeModalOpen={setIsChallengeModalOpen}
        handleChallengeModalOpen={handleChallengeModalOpen}
      />
    </S.Wrapper>
  );
}

export default MyPageTemplate;
