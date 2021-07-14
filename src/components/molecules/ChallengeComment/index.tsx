import ChallengeCommentWrite from 'components/molecules/ChallengeCommentWrite';
import ChallengeSingleComment from 'components/molecules/ChallengeSingleWrite';
import { ICommentData } from 'components/organisms/ViewCardList';
import React, { useState } from 'react';
import Styled from 'styled-components';

interface INewComment {
  _id: string;
  userID: {
    _id: string;
    nickname: string;
  };
  text: string;
}

interface IProps {
  commentList?: Array<ICommentData>;
  reLoadComment: (newComment: INewComment) => void;
}

function ChallengeComment({ commentList, reLoadComment }: IProps): React.ReactElement {
  const [commentValue, setCommentValue] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentValue(event.currentTarget.value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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

  console.log('ChallengeCommentList', commentList);
  return (
    <SCommentList>
      <ChallengeCommentWrite
        className="comment__write"
        value={commentValue}
        isComment={true}
        onChange={handleChange}
        onClick={onSubmit}
        onSubmit={onSubmit}
      ></ChallengeCommentWrite>
      {commentList &&
        commentList.map((data: ICommentData) => (
          <ChallengeSingleComment
            key={data._id}
            nickname={data.userID.nickname}
            childrenComment={data.childrenComment}
            text={data.text}
          ></ChallengeSingleComment>
        ))}
    </SCommentList>
  );
}
const SCommentList = Styled.div`
  .comment__write{
    margin-bottom:68px;
  }
`;
export default ChallengeComment;
