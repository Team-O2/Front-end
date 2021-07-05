import React, { useState } from 'react';
import Styled from 'styled-components';
import CommentWrite from 'components/molecules/CommentWrite';
import SingleComment from 'components/molecules/SingleComment';

interface IProps {
  selectedConcert:
    | {
        concertId: string;
        image: string;
        speaker: string;
        interest: string[];
        createdAt: string;
        title: string;
        desc: string;
        like: number;
        comments: {
          _id: string;
          author: string;
          text: string;
          reply: {
            _id: string;
            author: string;
            text: string;
          }[];
        }[];
      }
    | undefined;
}

interface IComment {
  _id: string;
  author: string;
  text: string;
  reply: {
    _id: string;
    author: string;
    text: string;
  }[];
}

function CommentList({ selectedConcert }: IProps): React.ReactElement {
  const [commentValue, setCommentValue] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentValue(event.currentTarget.value);
  };
  const onSubmit = (event: any) => {
    event.preventDefault();
    /*
    FIX ME : 서버연결 필요
    const variables = {
        postId: selectedConcertId,
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
      ></CommentWrite>
      {selectedConcert &&
        selectedConcert.comments.map((data: IComment) => (
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
