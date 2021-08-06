import { postConcertComment } from 'apis';
import { CommentWrite, LoginModal, SingleComment } from 'components/molecules';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import { IConcertComment } from 'types/concert.type';
import { CommentWriteContainer } from './style';

interface IProps {
  commentList: Array<IConcertComment>;
  concertID?: string;
  isRerender: boolean;
  setIsRerender: (value: boolean) => void;
}

function CommentList({ commentList, concertID, isRerender, setIsRerender }: IProps): React.ReactElement {
  const [commentValue, setCommentValue] = useState('');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const userStatusData = useRecoilValue(userStatusState);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentValue(event.currentTarget.value);
  };
  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (userStatusData) {
      await postConcertComment(userStatusData.token, concertID, { parentID: null, text: commentValue });
      setCommentValue('');
      setIsRerender(!isRerender);
    } else {
      setIsLoginModalOpen(true);
    }
  };

  return (
    <>
      <CommentWriteContainer>
        <CommentWrite
          value={commentValue}
          isComment={true}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        ></CommentWrite>
      </CommentWriteContainer>
      {commentList?.map((data: IConcertComment, index) => (
        <SingleComment
          key={index}
          parentCommentID={data._id}
          userID={data.userID}
          childrenComment={data.childrenComment}
          text={data.text}
          concertID={concertID}
          isRerender={isRerender}
          setIsRerender={setIsRerender}
        ></SingleComment>
      ))}
      <LoginModal isLoginModalOpen={isLoginModalOpen} setIsLoginModalOpen={setIsLoginModalOpen} />
    </>
  );
}

export default CommentList;
