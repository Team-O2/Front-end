import { getNoticeData } from 'apis/ShareTogether';
import NoticeDetailTitle from 'components/molecules/NoticeDetailTitle';
import CommentList from 'components/organisms/CommentList';
import NoticeDetailContent from 'components/organisms/NoticeDetailContent';
import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
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
  const userStatusData = useRecoilValue(userStatusState);
  useEffect(() => {
    const getConcertList = async () => {
      if (userStatusData) {
        const data = await getNoticeData(userStatusData.token, id);
        data[0] && setNotice(data[0]);
        data[0] && setCommentList(data[0].comments);
      } else {
        alert('로그인 후 이용하세요');
      }
    };
    getConcertList();
  }, [commentList]);

  const reLoadComment = (newComment: any) => {
    setCommentList(commentList?.concat(newComment));
  };

  return (
      <SNoticeDetail>
        <NoticeDetailTitle
          title={notice?.title}
          createdAt={notice?.createdAt}
          speaker={notice?.user.nickname}
          interest={notice?.interest}
        ></NoticeDetailTitle>
        <NoticeDetailContent
          imgThumbnail={notice?.imgThumbnail}
          desc={notice?.text}
          comments={notice?.commentNum}
        ></NoticeDetailContent>
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
