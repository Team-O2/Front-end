import ChallengeCommentWrite from 'components/molecules/ChallengeCommentWrite';
import ChallengeSingleComment from 'components/molecules/ChallengeSingleWrite';
import { ICommentData } from 'components/molecules/ViewListCard';
// import { ICommentData } from 'components/organisms/ViewCardList';
import React from 'react';
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
  return (
    <SCommentList>
      <ChallengeCommentWrite
        className="comment__write"
        isComment={true} //댓글부분
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
display : flex;
flex-direction : column;
align-items : flex-end;
margin : 0 auto;
width : 724px;
  .comment__write{
    margin-bottom:30px;
  }
`;
export default ChallengeComment;
