import ChallengeCommentWrite from 'components/molecules/ChallengeCommentWrite';
import ChallengeSingleComment from 'components/molecules/ChallengeSingleWrite';
import { ICommentData } from 'components/molecules/ViewListCard';
// import { ICommentData } from 'components/organisms/ViewCardList';
import React, { useEffect, useState } from 'react';
import Styled from 'styled-components';

interface IProps {
  commentList: Array<ICommentData> | null;
  challengeID: string;
}

function ChallengeComment({ commentList, challengeID }: IProps): React.ReactElement {
  const [commentValue, setCommentValue] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentValue(event.currentTarget.value);
  };
  useEffect(() => {
    console.log(commentValue);
  }, [commentValue]);

  return (
    <SCommentList>
      <ChallengeCommentWrite
        className="comment__write"
        value={commentValue}
        setValue={setCommentValue}
        isComment={true}
        onChange={handleChange}
        challengeID={challengeID}
      />
      {commentList?.map((data: ICommentData) => (
        <ChallengeSingleComment key={data._id} commentData={data} challengeID={challengeID} />
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
