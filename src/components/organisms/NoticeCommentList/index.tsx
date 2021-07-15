import { postNoticeComment } from 'apis/ShareTogether';
import Button from 'components/atoms/Button';
import CommentWrite from 'components/molecules/CommentWrite';
import NoticeSingleComment from 'components/molecules/NoticeSingleComment';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import Styled from 'styled-components';
import DeleteModal from '../../../assets/images/delete_modal.png';
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
  noticeID?: string;
  reLoadComment: (newComment: INewComment) => void;
}

function NoticeCommentList({ commentList, noticeID, reLoadComment }: IProps): React.ReactElement {
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
      const postData = await postNoticeComment(userStatusData.token, noticeID, variables);
      reLoadComment(variables);
      setCommentValue('');
    } else {
      setLoginModalOpen(true);
    }
  };
  if (loginModalOpen === true) {
    document.body.style.overflow = 'hidden';
  } else document.body.style.overflow = 'unset';
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
      {commentList?.map((data: IData) => (
        <NoticeSingleComment
          key={data._id}
          _id={data._id}
          userID={data.userID}
          childrenComment={data.childrenComment}
          text={data.text}
          noticeID={noticeID}
        ></NoticeSingleComment>
      ))}
      <Modal isOpen={loginModalOpen} setIsOpen={setLoginModalOpen} isBlur={true}>
        <div className="login">
          <div className="login__notice">
            <img className="login__img" src={DeleteModal} alt=""></img>
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
            <Button className="login_login">로그인하기</Button>
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
  &__login{
    padding-left:170px;
    line-height: 1.33;
    letter-spacing: -0.5px;
    color: #C1C1C1;
    font-size: 18px;
    font-weight: bold;;

  }
  &__cancel{
    line-height: 1.33;
    letter-spacing: -0.5px;
    color: #E04747;
    font-size: 18px;
    font-weight: bold;

  }
}
`;
export default NoticeCommentList;
