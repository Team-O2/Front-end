import { getNoticeData } from 'apis';
import { NoticeDetailTitle } from 'components/molecules';
import { NoticeCommentList, NoticeDetailContent } from 'components/organisms';
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
      const data = await getNoticeData(id);
      data[0] && setNotice(data[0]);
      data[0] && setCommentList(data[0].comments);
    };
    getConcertList();
  }, [commentList, userStatusData, id]);

  const reLoadComment = (newComment: any) => {
    setCommentList(commentList?.concat(newComment));
  };

  return (
    <SNoticeDetail>
      {notice && (
        <NoticeDetailTitle
          title={notice.title}
          createdAt={notice.createdAt}
          adminNickname={notice.user.nickname}
          interestList={notice.interest}
        ></NoticeDetailTitle>
      )}
      {notice && (
        <NoticeDetailContent
          imgThumbnail={notice.imgThumbnail}
          desc={notice.text}
          commentNum={notice.commentNum}
        ></NoticeDetailContent>
      )}
      <NoticeCommentList
        commentList={commentList}
        noticeID={notice?._id}
        reLoadComment={reLoadComment}
      ></NoticeCommentList>
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
