import { DetailTitle } from 'components/molecules';
import { DetailContent, NoticeCommentList } from 'components/organisms';
import React from 'react';
import { INotice, INoticeComment } from 'types/notice.type';
import { NoticeDetailWrapper } from './style';
interface IProps {
  notice: INotice | null;
  commentList: Array<INoticeComment>;
  isRerender: boolean;
  setIsRerender: (value: boolean) => void;
}
function NoticeDetailTemplate({ notice, commentList, isRerender, setIsRerender }: IProps): React.ReactElement {
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
        isRerender={isRerender}
        setIsRerender={setIsRerender}
      ></NoticeCommentList>
    </NoticeDetailWrapper>
  );
}

export default NoticeDetailTemplate;
