import {
  getLearnMyselfListData,
  getMyPageUserInfo,
  getShareTogetherListData,
  getUserCommentListData,
  getUserLearnMyselfListData,
} from 'apis/myPage';
import { Logo } from 'assets/images';
import { LearnMyselfCard, MyPageSection, ShareTogetherCard } from 'components/molecules';
import { MyCommentList, MyPageHeader } from 'components/organisms';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from 'stores/user';
import Styled from 'styled-components';
import { palette } from 'styled-tools';
import {
  ILearnMySelf,
  IMyPageHeader,
  IMyScrappedLearnMyself,
  IMyScrappedShareTogether,
  IMyUserCommentResponse,
  IMyUserLearnMyself,
} from 'types/myPage';
import { IShareTogether } from 'types/shareTogether';
import { changeDateFormat } from 'utils';


function MyPage(): React.ReactElement {
  const [selectedSection, setSelectedSection] = useState('scrap');
  const [userInfo, setUserInfo] = useState<IMyPageHeader | null>(null);
  const [shareTogetherData, setShareTogetherData] = useState<IMyScrappedShareTogether | null>(null);
  const [learnMyselfData, setLearnMyselfData] = useState<IMyScrappedLearnMyself | null>(null);
  const [userLearnMyselfData, setUserLearnMyselfData] = useState<IMyUserLearnMyself | null>(null);
  const [userCommentData, setUserCommentData] = useState<IMyUserCommentResponse | null>(null);
  const globalUserInfo = useRecoilValue(userState);

  const onChangeSection = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSection(e.target.id);
  };

  const fetchMyPageUserInfo = async () => {
    const data = await getMyPageUserInfo(TOKEN);
    setUserInfo(data);
  };

  const fetchScrappedShareTogetherData = async () => {
    const data = await getShareTogetherListData({ token: TOKEN });
    setShareTogetherData(data);
  };

  const fetchScrappedLearnMyselfData = async () => {
    const data = await getLearnMyselfListData({ token: TOKEN });
    setLearnMyselfData(data);
  };

  const fetchUserLearnMyselfData = async () => {
    const data = await getUserLearnMyselfListData({ token: TOKEN });
    setUserLearnMyselfData(data);
  };

  const fetchUserCommentListData = async () => {
    const data = await getUserCommentListData({ token: TOKEN });
    setUserCommentData(data);
  };

  useEffect(() => {
    fetchMyPageUserInfo();
    fetchScrappedShareTogetherData();
    fetchScrappedLearnMyselfData();
    fetchUserLearnMyselfData();
    fetchUserCommentListData();
  }, []);

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
        isBookmarked={true}
        id={item._id}
        key={item._id}
        name={item.user?.nickname}
        content={`잘한 점: ${item.good} 못한 점: ${item.bad} 배운 점: ${item.learn}`}
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
              subTitle={`${globalUserInfo.nickname}님이 스크랩한 강연들이에요`}
              column={2}
              gap={30}
              path="/mypage/share-together/scrap/more"
              data={shareTogetherData?.mypageConcertScrap}
              renderItemList={renderScrappedShareTogether}
            />
          ) : (
            <MyPageSection
              title="작성한 글"
              subTitle={`${globalUserInfo.nickname}님이 작성한 런마셀들이에요`}
              column={4}
              gap={15}
              path="/mypage/learn-myself/scrap/more"
              data={userLearnMyselfData?.mypageChallengeScrap}
              renderItemList={renderLearnMyself}
            />
          )}
        </div>
        <div className="mypage__bottom">
          {selectedSection === 'scrap' ? (
            <MyPageSection
              title="Learn Myself"
              subTitle={`${globalUserInfo.nickname}님이 스크랩한 런마셀들이에요`}
              column={4}
              gap={15}
              path="/mypage/learn-myself/mine/more"
              data={learnMyselfData?.mypageChallengeScrap}
              renderItemList={renderLearnMyself}
            />
          ) : (
            userCommentData && <MyCommentList userCommentData={userCommentData} />
          )}
        </div>
      </div>
    </Wrapper>
  );
}

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
