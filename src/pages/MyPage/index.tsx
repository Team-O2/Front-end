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

function MyPage(): React.ReactElement {
  const [userInfo, setUserInfo] = useState<IMyPageHeader | null>(null);
  const [shareTogetherData, setShareTogetherData] = useState<IMyScrappedShareTogether | null>(null);
  const [learnMyselfData, setLearnMyselfData] = useState<IMyScrappedLearnMyself | null>(null);
  const [userLearnMyselfData, setUserLearnMyselfData] = useState<IMyUserLearnMyself | null>(null);
  const [userCommentData, setUserCommentData] = useState<IMyUserCommentResponse | null>(null);
  const globalUserInfo = useRecoilValue(userState);
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


export default MyPage;
