import React, { useState } from 'react';
import Styled from 'styled-components';
import CommentWrite from 'components/molecules/CommentWrite';
import SingleComment from 'components/molecules/SingleComment';

interface IData {
  childrenComment: {
    _id: string;
    userID: {
      _id: string;
      nickname: string;
    };
    text: string;
  }[];
  _id: string;
  userID: {
    _id: string;
    nickname: string;
  };
  text: string;
}

interface INewComment {
  _id: string;
  userID: {
    _id: string;
    nickname: string;
  };
  text: string;
}

interface IProps {
  commentList: Array<IData> | undefined;
  reLoadComment: (newComment: INewComment) => void;
}

function CommentList({ commentList, reLoadComment }: IProps): React.ReactElement {
  const [commentValue, setCommentValue] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentValue(event.currentTarget.value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    /*
    FIX ME : 코드 수정 후 서버연결 필요
    const variables = {
      postId: selectedConcertId,
      _id: 댓글 아이디
      author: 로그인한 유저,
      text: commentValue,
    }
    Axios.post('api/concert/comment',variables)
    .then(response =>{
        if(response.data.success){
           console.log(response.data.result)
           reLoad(response.data.result)
        }else{
            alert('FAIL')
        }
    })
    */
    const commentListLength = commentList?.length;
    const nextId = String(commentListLength && commentListLength + 1);
    const variables = {
      _id: nextId,
      userID: {
        _id: '1',
        nickname: '깡또아 뚜아',
      },
      text: commentValue,
    };
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
      {commentList &&
        commentList.map((data: IData) => (
          <SingleComment
            key={data._id}
            nickname={data.userID.nickname}
            childrenComment={data.childrenComment}
            text={data.text}
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
