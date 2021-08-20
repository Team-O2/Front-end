import { ChallengeCommentWrite, ChallengeSingleComment } from 'components/molecules';
import React from 'react';
import { ICommentData } from 'types/challenge.type';
import { CommentListWrapper } from './style';

interface IProps {
  commentList: Array<ICommentData> | null;
  challengeID: string;
  comments: number;
  commentListFlag: boolean;
  setCommentListFlag: (value: boolean) => void;
}

function ChallengeComment({
  commentList,
  challengeID,
  commentListFlag,
  comments,
  setCommentListFlag,
}: IProps): React.ReactElement {
  return (
    <CommentListWrapper>
      <ChallengeCommentWrite
        className="comment__write"
        isComment={true} //댓글부분
        challengeID={challengeID}
        comments={comments}
        commentListFlag={commentListFlag}
        setCommentListFlag={setCommentListFlag}
      />
      {commentList?.map((data: ICommentData) => (
        <ChallengeSingleComment
          key={data._id}
          commentData={data}
          comments={comments}
          challengeID={challengeID}
          commentListFlag={commentListFlag}
          setCommentListFlag={setCommentListFlag}
        />
      ))}
    </CommentListWrapper>
  );
}

export default ChallengeComment;
