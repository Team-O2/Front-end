import { ChallengeCommentWrite, ChallengeSingleComment } from 'components/molecules';
import React from 'react';
import { ICommentData } from 'types/challenge.type';
import { CommentListWrapper } from './style';

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
    <CommentListWrapper>
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
    </CommentListWrapper>
  );
}

export default ChallengeComment;
