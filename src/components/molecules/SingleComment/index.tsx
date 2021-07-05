import React, { useState } from 'react';
import Styled from 'styled-components';
import CommentWrite from '../CommentWrite';
import Profile from 'assets/images/Profile.svg';

interface IProps {
  author: string;
  text: string;
  reply: {
    _id: string;
    author: string;
    text: string;
  }[];
}

function SingleComment({ author, text, reply }: IProps): React.ReactElement {
  const [openReply, setOpenReply] = useState(false);

  const onClickReplyOpen = () => {
    setOpenReply(!openReply);
  };
  return (
    <SSingleComment>
      <div className="comment">
        <img className="comment__profile" src={Profile} alt="" />
        <div className="comment__writer">{author}</div>
        <div className="comment__text">{text}</div>
        <div className="comment__toggle" onClick={onClickReplyOpen}>
          {openReply ? '접기' : '답글보기'}
        </div>
      </div>
      <div className="reply">{openReply && <CommentWrite isComment={false}></CommentWrite>}</div>
    </SSingleComment>
  );
}
const SSingleComment = Styled.div`
  display: flex;
  flex-direction: column;
  .comment {
    display: flex;
    justify-content: space-between;
    font-family: 'AppleSDGothicNeo';
    line-height: 1.43;
    &__profile {
      width: 28px;
      height: 28px;
    }
    &__writer {
      font-size: 16px;
      font-weight: bold;
    }
    &__text {
      width: 647px;
      font-size: 16px;
      color: #6f6f6f;
    }
    &__toggle {
      width: 50px;
      font-size: 14px;
      font-weight: bold;
      color: #36c8f5;
      text-align: right;
    }
  }
  .reply {
    display: flex;
    justify-content: flex-end;
    margin: 16px 0 31px;
  }
`;
export default SingleComment;
