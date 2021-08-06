import { postNoticeComment } from 'apis';
import { CommentWrite, LoginModal, NoticeSingleComment } from 'components/molecules';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import { INoticeComment } from 'types/notice.type';
import { CommentWriteContainer } from './style';

interface IProps {
  commentList: Array<INoticeComment>;
  noticeID?: string;
  isRerender: boolean;
  setIsRerender: (value: boolean) => void;
}

function NoticeCommentList({ commentList, noticeID, isRerender, setIsRerender }: IProps): React.ReactElement {
  const [commentValue, setCommentValue] = useState('');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const userStatusData = useRecoilValue(userStatusState);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentValue(event.currentTarget.value);
  };
  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (userStatusData) {
      await postNoticeComment(userStatusData.token, noticeID, { parentID: null, text: commentValue });
      setCommentValue('');
      setIsRerender(!isRerender);
    } else {
      setIsLoginModalOpen(true);
    }
  };

  return (
    <>
      <CommentWriteContainer>
        <CommentWrite
          value={commentValue}
          isComment={true}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        ></CommentWrite>
      </CommentWriteContainer>
      {commentList?.map((data: INoticeComment, index) => (
        <NoticeSingleComment
          key={index}
          parentCommentID={data._id}
          userID={data.userID}
          childrenComment={data.childrenComment}
          text={data.text}
          noticeID={noticeID}
          isRerender={isRerender}
          setIsRerender={setIsRerender}
        ></NoticeSingleComment>
      ))}
      <LoginModal isLoginModalOpen={isLoginModalOpen} setIsLoginModalOpen={setIsLoginModalOpen} />
    </>
  );
}

export default NoticeCommentList;
