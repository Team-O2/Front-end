import { postConcertComment } from 'apis';
import { LoginAlertIcon } from 'assets/images';
import { Button, Link, Modal } from 'components/atoms';
import { CommentWrite, ReplyComment } from 'components/molecules';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userState, userStatusState } from 'stores/user';
import Styled from 'styled-components';
import { IReply } from 'types/challenge.type';

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
  const [loginModalOpen, setLoginModalOpen] = useState(false);

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
      setLoginModalOpen(true);
    }
  };

  return (
    <SSingleComment>
      <div className="comment">
        <img className="comment__profile" src={userID?.img} alt="" />
        <div className="comment__writer">{userID?.nickname}</div>
        <div className="comment__text">{text}</div>
        <div className="comment__toggle" onClick={onClickReplyOpen}>
          {isOpenReply ? '접기' : '답글보기'}
        </div>
      </div>
      <div className="reply">
        {isOpenReply && (
          <>
            <CommentWrite
              className="reply__write"
              value={replyValue}
              onChange={handleChange}
              onClick={onSubmit}
              onSubmit={onSubmit}
              isComment={false}
            ></CommentWrite>
            {replyList.map((data: IReply, index) => (
              <ReplyComment
                className="reply__comment"
                key={index}
                img={data.userID?.img}
                nickname={data.userID?.nickname}
                text={data.text}
              ></ReplyComment>
            ))}
          </>
        )}
      </div>
      <Modal isOpen={loginModalOpen} setIsOpen={setLoginModalOpen} isBlur={true}>
        <div className="login">
          <div className="login__notice">
            <img className="login__img" src={LoginAlertIcon} alt=""></img>
            <div className="login__title">앗!</div>
            <div className="login__detail">로그인이 필요한 서비스입니다</div>
          </div>
          <div className="login__button">
            <Button
              className="login__cancel"
              onClick={() => {
                setLoginModalOpen(false);
              }}
            >
              취소
            </Button>
            <Link to="/login">
              <Button className="login__login">로그인하기</Button>
            </Link>
          </div>
        </div>
      </Modal>
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
  .login{
  position: fixed;
  top:0;
  right:0;
  bottom:0;
  left:0;
  margin:auto;
  border-radius: 16px;
  background-color: #FFFFFF;
  width: 500px;
  height: 312px;
  &__notice{
    padding: 0px 80px 0px 80px;
  }
  &__img{
    display:flex;
    margin:auto;
    margin-top:-40px;
  }
  &__title{
    padding:20px 0px 20px 0px;
    text-align: center;
    line-height: 1.42;
    letter-spacing: -0.5px;
    color: #000000;
    font-size: 48px;
    font-weight: bold;
  }
  &__detail{
    text-align: center;
    line-height: 1.5;
    letter-spacing: -0.5px;
    color: var(--colors-grayscale-0-d-black);
    font-size: 16px;
  }
  &__button{
    padding-top:50px;
    text-align: center;
  }
  &__cancel{
    line-height: 1.33;
    letter-spacing: -0.5px;
    color:#c1c1c1;
    font-size: 18px;
    font-weight: bold;
  }
  &__login{
    padding-left:170px;
    line-height: 1.33;
    letter-spacing: -0.5px;
    color: #03b6ce;
    font-size: 18px;
    font-weight: bold;;
  }
}

`;
export default SingleComment;
