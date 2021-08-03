import { getNoticeData } from 'apis';
import { DetailTitle } from 'components/molecules';
import { DetailContent, NoticeCommentList } from 'components/organisms';
import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import { INotice } from 'types/notice.type';
import { NoticeDetailWrapper } from './style';

interface MatchParams {
  id: string;
}

function NoticeDetail({ match }: RouteComponentProps<MatchParams>): React.ReactElement {
  const { id } = match.params;
  const [notice, setNotice] = useState<INotice | null>(null);
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
    <NoticeDetailWrapper>
      {notice && (
        <DetailTitle
          pageName="공지사항"
          title={notice.title}
          createdAt={notice.createdAt}
          authorNickname={notice.user.nickname}
          interestList={notice.interest}
        ></DetailTitle>
      )}
      {notice && (
        <DetailContent
          imgThumbnail={notice.imgThumbnail}
          desc={notice.text}
          commentNum={notice.commentNum}
        ></DetailContent>
      )}
      <NoticeCommentList
        commentList={commentList}
        noticeID={notice?._id}
        reLoadComment={reLoadComment}
      ></NoticeCommentList>
    </NoticeDetailWrapper>
  );
}

export default NoticeDetail;
