import { postConcertComment } from 'apis/ShareTogether';
import Button from 'components/atoms/Button';
import CommentWrite from 'components/molecules/CommentWrite';
import SingleComment from 'components/molecules/SingleComment';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import Styled from 'styled-components';
import LoginModal from '../../../assets/images/loginAlert.svg';
import Modal from '../../atoms/Modal/index';
interface IData {
  childrenComment: {
    _id: string;
    nickname: string;
    text: string;
    createdAt?: string;
  }[];
  isDeleted?: boolean;
  _id: string;
  userID: {
    img: string;
    _id: string;
    nickname: string;
  };
  text: string;
}

interface INewComment {
  parentID?: string;
  text: string;
}

interface IProps {
  commentList: Array<IData>;
  concertID?: string;
  reLoadComment: (newComment: INewComment) => void;
}

function CommentList({ commentList, concertID, reLoadComment }: IProps): React.ReactElement {
  const [commentValue, setCommentValue] = useState('');
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const userStatusData = useRecoilValue(userStatusState);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentValue(event.currentTarget.value);
  };
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const variables = {
      text: commentValue,
    };
    if (userStatusData) {
      const postData = await postConcertComment(userStatusData.token, concertID, variables);
      reLoadComment(variables);
      setCommentValue('');
    } else {
      setLoginModalOpen(true);
    }
  };
  return (
    <SCommentList>
      <CommentWrite
        className="comment__write"
        value={commentValue}
        isComment={true}
        onChange={handleChange}
        onClick={onSubmit}
        onSubmit={onSubmit}
      ></CommentWrite>
      {commentList?.map((data: IData, index) => (
        <SingleComment
          key={index}
          _id={data._id}
          userID={data.userID}
          childrenComment={data.childrenComment}
          text={data.text}
          concertID={concertID}
        ></SingleComment>
      ))}
      <Modal isOpen={loginModalOpen} setIsOpen={setLoginModalOpen} isBlur={true}>
        <div className="login">
          <div className="login__notice">
            <img className="login__img" src={LoginModal} alt=""></img>
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
    </SCommentList>
  );
}
const SCommentList = Styled.div`
  .comment__write{
    margin-bottom:68px;
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
export default CommentList;
