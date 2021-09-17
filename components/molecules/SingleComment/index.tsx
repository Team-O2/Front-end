import { postConcertComment } from 'apis';
import { LoginModal, ReplyComment } from 'components/molecules';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import { IReply } from 'types/concert.type';
import {
  CommentContainer,
  CommentText,
  CommentToggle,
  CommentWriter,
  ReplyCommentWrite,
  ReplyContainer,
  ReplyContent,
  SingleCommentWrapper,
} from './style';

interface IProps {
  childrenComment: {
    id: string;
    userID: number;
    nickname: string;
    img: string;
    text: string;
    isDeleted: boolean;
  }[];
  isDeleted: boolean;
  id: string;
  userID: number;
  nickname: string;
  img: string;
  parentCommentID: string;
  text: string;
  concertID?: string;
  isRerender: boolean;
  setIsRerender: (value: boolean) => void;
}

function SingleComment({
  parentCommentID,
  nickname,
  img,
  childrenComment,
  text,
  concertID,
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
      await postConcertComment(userStatusData.token, concertID, { parentID: parentCommentID, text: replyValue });
      setReplyValue('');
      setIsRerender(!isRerender);
    } else {
      setIsLoginModalOpen(true);
    }
  };

  return (
    <SingleCommentWrapper>
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
    </SingleCommentWrapper>
  );
}

export default SingleComment;
