import { postNoticeComment } from 'apis';
import { LoginModal, ReplyComment } from 'components/molecules';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import { IReply } from 'types/notice.type';
import {
  CommentContainer,
  CommentText,
  CommentToggle,
  CommentWriter,
  NoticeSingleCommentWrapper,
  ReplyCommentWrite,
  ReplyContainer,
  ReplyContent,
} from './style';

interface IProps {
  childrenComment: {
    id: number;
    userID: number;
    nickname: string;
    img: string;
    text: string;
    isDeleted: boolean;
  }[];
  isDeleted: boolean;
  parentCommentID: number;
  userID: number;
  nickname: string;
  img: string;
  text: string;
  noticeID?: number;
  isRerender: boolean;
  setIsRerender: (value: boolean) => void;
}

function NoticeSingleComment({
  parentCommentID,
  nickname,
  img,
  childrenComment,
  text,
  noticeID,
  isRerender,
  setIsRerender,
  isDeleted,
}: IProps): React.ReactElement {
  const [isOpenReply, setIsOpenReply] = useState(false);
  const [replyValue, setReplyValue] = useState('');
  const userStatusData = useRecoilValue(userStatusState);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const onClickReplyOpen = () => {
    setIsOpenReply(!isOpenReply);
  };
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReplyValue(event.currentTarget.value);
  };
  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (userStatusData) {
      await postNoticeComment(userStatusData.token, noticeID, { parentID: parentCommentID, text: replyValue });
      setReplyValue('');
      setIsRerender(!isRerender);
    } else {
      setIsLoginModalOpen(true);
    }
  };

  return (
    <NoticeSingleCommentWrapper>
      <CommentContainer>
        <img src={img} alt="" />
        <CommentWriter>{nickname}</CommentWriter>
        <CommentText>{isDeleted ? '삭제된 댓글입니다.' : text}</CommentText>
        <CommentToggle onClick={onClickReplyOpen}>답글</CommentToggle>
      </CommentContainer>
      <ReplyContainer>
        {isOpenReply && (
          <ReplyCommentWrite
            value={replyValue}
            isComment={false}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          ></ReplyCommentWrite>
        )}
        <ReplyContent>
          {childrenComment.map((data: IReply, index) => (
            <ReplyComment
              key={index}
              img={data.img}
              nickname={data.nickname}
              text={data.text}
              isDeleted={data.isDeleted}
            ></ReplyComment>
          ))}
        </ReplyContent>
      </ReplyContainer>
      <LoginModal isLoginModalOpen={isLoginModalOpen} setIsLoginModalOpen={setIsLoginModalOpen} />
    </NoticeSingleCommentWrapper>
  );
}

export default NoticeSingleComment;
