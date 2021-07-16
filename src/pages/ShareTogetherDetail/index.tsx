import {
  deleteConcertLike,
  deleteConcertScrap,
  getConcertData,
  postConcertLike,
  postConcertScrap,
} from 'apis/ShareTogether';
import DetailTitle from 'components/molecules/DetailTitle';
import CommentList from 'components/organisms/CommentList';
import DetailContent from 'components/organisms/DetailContent';
import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import Styled from 'styled-components';

interface MatchParams {
  id: string;
}
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

function ShareTogetherDetail({ match }: RouteComponentProps<MatchParams>): React.ReactElement {
  const { id } = match.params;
  const [concert, setConcert] = useState<IConcertData | null>(null);
  const [commentList, setCommentList] = useState([]);
  const [Likes, setLikes] = useState(0);
  const [likeClick, setLikeClick] = useState(false);
  const [scrap, setScrap] = useState(0);
  const [scrapClick, setScrapClick] = useState(false);
  const userStatusData = useRecoilValue(userStatusState);

  useEffect(() => {
    const getConcertList = async () => {
      const data = await getConcertData(id);
      data && setConcert(data);
      data && setCommentList(data.comments);
      data && setLikes(data.likes);
      data && setScrap(data.scrapNum);
    };
    getConcertList();
  }, [commentList, Likes, scrap, id]);

  const reLoadComment = (newComment: any) => {
    setCommentList(commentList?.concat(newComment));
  };

  const onLike = async () => {
    if (userStatusData) {
      const postLike = await postConcertLike(userStatusData.token, id);
      setLikeClick(!likeClick);
      if (postLike === true) {
        const deleteLike = await deleteConcertLike(userStatusData.token, id);
      }
    } else {
      alert('로그인 후 이용하세요');
    }
  };
  const onScrap = async () => {
    if (userStatusData) {
      const postScrap = await postConcertScrap(userStatusData.token, id);
      setScrapClick(!scrapClick);
      if (postScrap === true) {
        const deleteSrap = await deleteConcertScrap(userStatusData.token, id);
      }
    } else {
      alert('로그인 후 이용하세요');
    }
  };

  return (
    <SShareTogetherDetail>
      <DetailTitle
        title={concert?.title}
        speaker={concert?.authorNickname}
        createdAt={concert?.createdAt}
        interest={concert?.interest}
      ></DetailTitle>
      <DetailContent
        video={concert?.videoLink}
        desc={concert?.text}
        hashtag={concert?.hashtag}
        like={Likes}
        comments={concert?.commentNum}
        scrap={concert?.scrapNum}
        onLike={onLike}
        likeClick={likeClick}
        onScrap={onScrap}
        scrapClick={scrapClick}
      ></DetailContent>
      <CommentList commentList={commentList} concertID={concert?._id} reLoadComment={reLoadComment}></CommentList>
    </SShareTogetherDetail>
  );
}

const SShareTogetherDetail = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 845px;
`;
export default ShareTogetherDetail;
