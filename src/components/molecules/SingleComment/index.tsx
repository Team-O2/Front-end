import { postConcertComment } from 'apis';
import { LoginModal, ReplyComment } from 'components/molecules';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userState, userStatusState } from 'stores/user';
import { IReply } from 'types/challenge.type';
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
    isDeleted?: boolean;
    _id?: string;
    userID?: {
      img: string;
      _id: string;
      nickname: string;
    };
    text?: string;
  }[];
  isDeleted?: boolean;
  _id: string;
  userID: {
    img: string;
    _id: string;
    nickname: string;
  };
  text: string;
  concertID?: string;
}

function SingleComment({ _id, userID, childrenComment, text, concertID }: IProps): React.ReactElement {
  const [isOpenReply, setIsOpenReply] = useState(false);
  const [replyValue, setReplyValue] = useState('');
  const [replyList, setReplyList] = useState(childrenComment);
  const userStatusData = useRecoilValue(userStatusState);
  const userData = useRecoilValue(userState);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const onClickReplyOpen = () => {
    setIsOpenReply(!isOpenReply);
  };
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReplyValue(event.currentTarget.value);
  };
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const variables = {
      parentID: _id,
      text: replyValue,
    };
    if (userStatusData) {
      await postConcertComment(userStatusData.token, concertID, variables);
      userData &&
        setReplyList(
          replyList.concat({
            text: variables.text,
            userID: {
              img: userData.img,
              _id: userData._id,
              nickname: userData.nickname,
            },
          }),
        );
      setReplyValue('');
    } else {
      setIsLoginModalOpen(true);
    }
  };

  return (
    <SingleCommentWrapper>
      <CommentContainer>
        <img className="comment__profile" src={userID?.img} alt="" />
        <CommentWriter>{userID?.nickname}</CommentWriter>
        <CommentText>{text}</CommentText>
        <CommentToggle onClick={onClickReplyOpen}>{isOpenReply ? '접기' : '답글보기'}</CommentToggle>
      </CommentContainer>
      <ReplyContainer>
        {isOpenReply && (
          <>
            <ReplyCommentWrite
              value={replyValue}
              onChange={handleChange}
              onClick={onSubmit}
              onSubmit={onSubmit}
              isComment={false}
            ></ReplyCommentWrite>
            <ReplyContent>
              {replyList.map((data: IReply, index) => (
                <ReplyComment
                  key={index}
                  img={data.userID?.img}
                  nickname={data.userID?.nickname}
                  text={data.text}
                ></ReplyComment>
              ))}
            </ReplyContent>
          </>
        )}
      </ReplyContainer>
      <LoginModal isLoginModalOpen={isLoginModalOpen} setIsLoginModalOpen={setIsLoginModalOpen} />
    </SingleCommentWrapper>
  );
}

export default SingleComment;
