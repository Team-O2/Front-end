import { postConcertComment } from 'apis/ShareTogether';
import CommentWrite from 'components/molecules/CommentWrite';
import SingleComment from 'components/molecules/SingleComment';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from 'stores/user';
import Styled from 'styled-components';

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
  const user = useRecoilValue(userState);
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentValue(event.currentTarget.value);
  };
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const variables = {
      /*
      _id: concertID,
      userID: {
        img: user.img,
        _id: user._id,
        nickname: user.nickname,
      },*/
      text: commentValue,
    };
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjBlZDg2NTZkOWM0ZTg0NzM4NzM1OTYyIn0sImlhdCI6MTYyNjE3OTI4OSwiZXhwIjoxNjI3Mzg4ODg5fQ.kmF5YDPDVAv6XyR6wNW_7JWm_3byloniqKSM7zcrDbg';
    const postData = await postConcertComment(token, concertID, variables);
    reLoadComment(variables);
    setCommentValue('');
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
      {commentList?.map((data: IData) => (
        <SingleComment
          key={data._id}
          _id={data._id}
          userID={data.userID}
          childrenComment={data.childrenComment}
          text={data.text}
          concertID={concertID}
        ></SingleComment>
      ))}
    </SCommentList>
  );
}
const SCommentList = Styled.div`
  .comment__write{
    margin-bottom:68px;
  }
`;
export default CommentList;
