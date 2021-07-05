import React, { useState } from 'react';
import Styled from 'styled-components';
import CommentWrite from '../CommentWrite';
import Profile from 'assets/images/Profile.svg';

interface IProps {
  _id?: string;
  parentId?: string;
  author: string;
  text: string;
}

function SingleComment({ author, text }: IProps): React.ReactElement {
  const [openReply, setOpenReply] = useState(false);
  const [commentValue, setCommentValue] = useState('');

  const onClickReplyOpen = () => {
    setOpenReply(!openReply);
  };
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentValue(event?.currentTarget.value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  /*
    FIX ME : 코드 수정 후 서버연결 필요
    const variables = {
      author: 로그인한 유저,
      text: commentValue,
      parentId: 부모 댓글 아이디,
    }
    Axios.post('api/concert/comment',variables)
    .then(response =>{
        if(response.data.success){
           console.log(response.data.result)
        }else{
            alert('FAIL')
        }
    })
    */
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
      <div className="reply">
        {openReply && (
          <CommentWrite
            value={commentValue}
            onChange={handleChange}
            onClick={onSubmit}
            onSubmit={onSubmit}
            isComment={false}
          ></CommentWrite>
        )}
      </div>
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
