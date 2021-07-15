import ChallengeCommentWrite from 'components/molecules/ChallengeCommentWrite';
import ChallengeSingleComment from 'components/molecules/ChallengeSingleWrite';
import { ICommentData } from 'components/molecules/ViewListCard';
// import { ICommentData } from 'components/organisms/ViewCardList';
import React, { useState } from 'react';
import Styled from 'styled-components';

interface IProps {
  commentList: Array<ICommentData> | null;
  challengeID: string;
  commentListFlag: boolean;
  setCommentListFlag: (value: boolean) => void;
}

function ChallengeComment({
  commentList,
  challengeID,
  commentListFlag,
  setCommentListFlag,
}: IProps): React.ReactElement {
  const [commentValue, setCommentValue] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentValue(event.currentTarget.value);
  };

  return (
    <SCommentList>
      <ChallengeCommentWrite
        className="comment__write"
        value={commentValue}
        setValue={setCommentValue}
        isComment={true}
        onChange={handleChange}
        challengeID={challengeID}
        commentListFlag={commentListFlag}
        setCommentListFlag={setCommentListFlag}
      />
      {commentList?.map((data: ICommentData) => (
        <ChallengeSingleComment
          key={data._id}
          commentData={data}
          challengeID={challengeID}
          commentListFlag={commentListFlag}
          setCommentListFlag={setCommentListFlag}
        />
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
