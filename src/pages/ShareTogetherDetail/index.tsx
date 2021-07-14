import { getConcertData } from 'apis/ShareTogether';
import DetailTitle from 'components/molecules/DetailTitle';
import CommentList from 'components/organisms/CommentList';
import DetailContent from 'components/organisms/DetailContent';
import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { useRecoilState } from 'recoil';
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
  const [userStatusData, setUserStausData] = useRecoilState(userStatusState);

  useEffect(() => {
    const getConcertList = async () => {
      if (userStatusData) {
        const data = await getConcertData(userStatusData.token, id);
        data && setConcert(data);
        data && setCommentList(data.comments);
        data && setLikes(data.likes);
      } else {
        alert('로그인 후 이용하세요');
      }
    };
    getConcertList();
  }, []);

  const reLoadComment = (newComment: any) => {
    setCommentList(commentList?.concat(newComment));
  };
  const onLike = () => {
    setLikeClick(!likeClick);
    if (likeClick == true) {
      setLikes(Likes - 1);
    } else {
      setLikes(Likes + 1);
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
