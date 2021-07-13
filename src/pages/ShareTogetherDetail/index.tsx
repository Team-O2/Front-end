import DetailTitle from 'components/molecules/DetailTitle';
import CommentList from 'components/organisms/CommentList';
import DetailContent from 'components/organisms/DetailContent';
import Footer from 'components/organisms/Footer';
import Header from 'components/organisms/Header';
import { getConcertData } from 'libs/axios';
import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
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
  useEffect(() => {
    getConcertList(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjBlNmIyYzRhZjM0ZDUxYmEwNmQzZGJiIn0sImlhdCI6MTYyNjEwNTQzMCwiZXhwIjoxNjI3MzE1MDMwfQ.JoWA_yA5o9v7LRMObG2RC-PTlfEhBS6v2eoYumcWSa4',
      id,
    );
  }, []);
  const getConcertList = async (token: string, condertID: string): Promise<void> => {
    const data = await getConcertData(token, condertID);
    //console.log(data);
    data && setConcert(data);
    data && setCommentList(data.comments);
    data && setLikes(data.likes);
  };
  console.log(commentList);
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
    <>
      <Header />
      <SShareTogetherDetail>
        <DetailTitle
          title={concert?.title}
          speaker={concert?.authorNickname}
          createdAt={concert?.createdAt}
          interest={concert?.interest}
        ></DetailTitle>
        <DetailContent
          image={concert?.imgThumbnail}
          desc={concert?.text}
          hashtag={concert?.hashtag}
          like={Likes}
          comments={concert?.commentNum}
          scrap={concert?.scrapNum}
          onLike={onLike}
          likeClick={likeClick}
        ></DetailContent>
        <CommentList commentList={commentList} reLoadComment={reLoadComment}></CommentList>
      </SShareTogetherDetail>
      <Footer />
    </>
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
