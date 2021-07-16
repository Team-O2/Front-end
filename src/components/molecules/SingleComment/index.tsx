import { postConcertComment } from 'apis/ShareTogether';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userState, userStatusState } from 'stores/user';
import Styled from 'styled-components';
import CommentWrite from '../CommentWrite';
import ReplyComment from '../ReplyComment';

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

interface IReply {
  isDeleted?: boolean;
  _id?: string;
  userID?: {
    img: string;
    _id: string;
    nickname: string;
  };
  text?: string;
}

function SingleComment({ _id, userID, childrenComment, text, concertID }: IProps): React.ReactElement {
  const [openReply, setOpenReply] = useState(false);
  const [replyValue, setReplyValue] = useState('');
  const [replyList, setReplyList] = useState(childrenComment);
  const userStatusData = useRecoilValue(userStatusState);
  const userData = useRecoilValue(userState);

  const onClickReplyOpen = () => {
    setOpenReply(!openReply);
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
      alert('로그인 후 이용하세요');
    }
  };

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
            {replyList.map((data: IReply) => (
              <ReplyComment
                className="reply__comment"
                key={data._id}
                img={data.userID?.img}
                nickname={data.userID?.nickname}
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
