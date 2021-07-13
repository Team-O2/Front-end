import React, { useState } from 'react';
import Styled from 'styled-components';
import CommentWrite from '../CommentWrite';
import ReplyComment from '../ReplyComment';

interface IProps {
  childrenComment: {
    _id: string;
    nickname: string;
    text: string;
    createdAt?: string;
  }[];
  isDeleted?: boolean;
  _id?: string;
  userID: {
    img: string;
    _id: string;
    nickname: string;
  };
  text: string;
}

interface IReply {
  _id: string;
  nickname: string;
  text: string;
}
function SingleComment({ userID, childrenComment, text }: IProps): React.ReactElement {
  const [openReply, setOpenReply] = useState(false);
  const [replyValue, setReplyValue] = useState('');
  const [reply, setReply] = useState(childrenComment);

  const onClickReplyOpen = () => {
    setOpenReply(!openReply);
  };
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReplyValue(event.currentTarget.value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const replyListLength = reply?.length;
    const nextId = String(replyListLength && replyListLength + 1);
    const variables = {
      _id: nextId,
      nickname: '대댓글임다',
      text: replyValue,
    };
    setReply(reply.concat(variables));
    setReplyValue('');
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
        <img className="comment__profile" src={userID?.img} alt="" />
        <div className="comment__writer">{userID?.nickname}</div>
        <div className="comment__text">{text}</div>
        <div className="comment__toggle" onClick={onClickReplyOpen}>
          {openReply ? '접기' : '답글보기'}
        </div>
      </div>
      <div className="reply">
        {openReply && (
          <>
            <CommentWrite
              className="reply__write"
              value={replyValue}
              onChange={handleChange}
              onClick={onSubmit}
              onSubmit={onSubmit}
              isComment={false}
            ></CommentWrite>
            {reply &&
              reply.map((data: IReply) => (
                <ReplyComment
                  className="reply__comment"
                  key={data._id}
                  nickname={data.nickname}
                  text={data.text}
                ></ReplyComment>
              ))}
          </>
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
    line-height: 1.43;
    font-family: 'AppleSDGothicNeo';
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
      color: #6f6f6f;
      font-size: 16px;
    }
    &__toggle {
      width: 50px;
      text-align: right;
      color: #36c8f5;
      font-size: 14px;
      font-weight: bold;
    }
  }
  .reply {
    display: flex;
    flex-direction: column;
    margin: 16px 0 31px;
    &__write {
    display: flex;
    justify-content: flex-end;
    }
    &__comment {
      width: 712px;
    }
  }

`;
export default SingleComment;
