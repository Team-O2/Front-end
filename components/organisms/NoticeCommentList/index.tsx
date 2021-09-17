import { postNoticeComment } from 'apis';
import { CommentWrite, LoginModal, NoticeSingleComment } from 'components/molecules';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import { INoticeComment } from 'types/notice.type';
import { CommentContainer, CommentWriteContainer } from './style';

interface IProps {
  commentList: Array<INoticeComment>;
  noticeID?: number;
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
      <CommentContainer>
        {commentList?.map((data: INoticeComment, index) => (
          <NoticeSingleComment
            key={index}
            childrenComment={data.children}
            isDeleted={data.isDeleted}
            parentCommentID={data.id}
            userID={data.userID}
            nickname={data.nickname}
            img={data.img}
            text={data.text}
            noticeID={noticeID}
            isRerender={isRerender}
            setIsRerender={setIsRerender}
          ></NoticeSingleComment>
        ))}
      </CommentContainer>
      <LoginModal isLoginModalOpen={isLoginModalOpen} setIsLoginModalOpen={setIsLoginModalOpen} />
    </>
  );
}

export default NoticeCommentList;
