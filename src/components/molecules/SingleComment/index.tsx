import React, { useState } from 'react';
import Styled from 'styled-components';
import CommentWrite from '../CommentWrite';
import ReplyComment from '../ReplyComment';
import Profile from 'assets/images/Profile.svg';

interface IProps {
  childrenComment: {
    _id: string;
    userID: {
      _id: string;
      nickname: string;
    };
    text: string;
  }[];
  nickname: string;
  text: string;
}

interface IReply {
  _id: string;
  userID: {
    _id: string;
    nickname: string;
  };
  text: string;
}

function SingleComment({ nickname, childrenComment, text }: IProps): React.ReactElement {
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
      userID: {
        _id: '1',
        nickname: '대댓글임다',
      },
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
        <img className="comment__profile" src={Profile} alt="" />
        <div className="comment__writer">{nickname}</div>
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
                  nickname={data.userID.nickname}
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
