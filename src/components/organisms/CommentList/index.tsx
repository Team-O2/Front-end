import { postConcertComment } from 'apis';
import { CommentWrite, LoginModal, SingleComment } from 'components/molecules';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import { SCommentWrite } from './style';

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
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
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
      await postConcertComment(userStatusData.token, concertID, variables);
      reLoadComment(variables);
      setCommentValue('');
    } else {
      setIsLoginModalOpen(true);
    }
  };
  return (
    <>
      <SCommentWrite>
        <CommentWrite
          className="comment__write"
          value={commentValue}
          isComment={true}
          onChange={handleChange}
          onClick={onSubmit}
          onSubmit={onSubmit}
        ></CommentWrite>
      </SCommentWrite>
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
      <LoginModal isLoginModalOpen={isLoginModalOpen} setIsLoginModalOpen={setIsLoginModalOpen} />
    </>
  );
}

export default CommentList;
