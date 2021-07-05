import React, { useState } from 'react';
import Styled from 'styled-components';
import CommentWrite from 'components/molecules/CommentWrite';
import SingleComment from 'components/molecules/SingleComment';

interface IData {
  _id: string;
  author: string;
  text: string;
  reply: {
    _id: string;
    author: string;
    text: string;
  }[];
}
interface IProps {
  commentList: Array<IData> | undefined;
  concertId: string | undefined;
}

function CommentList({ commentList, concertId }: IProps): React.ReactElement {
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
        }else{
            alert('FAIL')
        }
    })
    */
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
          <SingleComment key={data._id} author={data.author} text={data.text} reply={data.reply}></SingleComment>
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
