import { getNoticeData } from 'apis/ShareTogether';
import DetailTitle from 'components/molecules/DetailTitle';
import CommentList from 'components/organisms/CommentList';
import DetailContent from 'components/organisms/DetailContent';
import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import Styled from 'styled-components';

interface MatchParams {
  id: string;
}
interface INoticeData {
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

function NoticeDetail({ match }: RouteComponentProps<MatchParams>): React.ReactElement {
  const { id } = match.params;
  const [notice, setNotice] = useState<INoticeData | null>(null);
  const [commentList, setCommentList] = useState([]);
  useEffect(() => {
    getNotice(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjBlZDg2NTZkOWM0ZTg0NzM4NzM1OTYyIn0sImlhdCI6MTYyNjE3OTI4OSwiZXhwIjoxNjI3Mzg4ODg5fQ.kmF5YDPDVAv6XyR6wNW_7JWm_3byloniqKSM7zcrDbg',
      id,
    );
  }, []);
  const getNotice = async (token: string, noticeID: string): Promise<void> => {
    const data = await getNoticeData(token, noticeID);
    data && setNotice(data);
    data && setCommentList(data.comments);
  };
  const reLoadComment = (newComment: any) => {
    setCommentList(commentList?.concat(newComment));
  };

  return (
    <SNoticeDetail>
      <DetailTitle
        title={notice?.title}
        speaker={notice?.authorNickname}
        createdAt={notice?.createdAt}
        interest={notice?.interest}
      ></DetailTitle>
      <DetailContent
        video={notice?.videoLink}
        desc={notice?.text}
        hashtag={notice?.hashtag}
        comments={notice?.commentNum}
        scrap={notice?.scrapNum}
      ></DetailContent>
      <CommentList commentList={commentList} concertID={notice?._id} reLoadComment={reLoadComment}></CommentList>
    </SNoticeDetail>
  );
}

const SNoticeDetail = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 845px;
`;
export default NoticeDetail;
