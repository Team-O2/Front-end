import { postNoticeComment } from 'apis';
import { CommentWrite, LoginModal, NoticeSingleComment } from 'components/molecules';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import { INoticeComment, INoticeNewComment } from 'types/notice.type';
import { CommentWriteContainer } from './style';

interface IProps {
  commentList: Array<INoticeComment>;
  noticeID?: string;
  reLoadComment: (newComment: INoticeNewComment) => void;
}

function NoticeCommentList({ commentList, noticeID, reLoadComment }: IProps): React.ReactElement {
  const [commentValue, setCommentValue] = useState('');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const userStatusData = useRecoilValue(userStatusState);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentValue(event.currentTarget.value);
  };
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const variables = {
      text: commentValue,
    };
    if (userStatusData) {
      await postNoticeComment(userStatusData.token, noticeID, variables);
      reLoadComment(variables);
      setCommentValue('');
    } else {
      setIsLoginModalOpen(true);
    }
  };
  if (isLoginModalOpen === true) {
    document.body.style.overflow = 'hidden';
  } else document.body.style.overflow = 'unset';
  return (
    <>
      <CommentWriteContainer>
        <CommentWrite
          value={commentValue}
          isComment={true}
          onChange={handleChange}
          onClick={onSubmit}
          onSubmit={onSubmit}
        ></CommentWrite>
      </CommentWriteContainer>
      {commentList?.map((data: INoticeComment, index) => (
        <NoticeSingleComment
          key={index}
          _id={data._id}
          userID={data.userID}
          childrenComment={data.childrenComment}
          text={data.text}
          noticeID={noticeID}
        ></NoticeSingleComment>
      ))}
      <LoginModal isLoginModalOpen={isLoginModalOpen} setIsLoginModalOpen={setIsLoginModalOpen} />
    </>
  );
}

export default NoticeCommentList;
