import { ChallengeReCommentList, ChallengeReCommentWrite } from 'components/molecules';
import React, { useState } from 'react';
import { ICommentData, IReply } from 'types/challenge.type';
import { CommentFold, CommentWrapper, RecommentWrapper, SingleCommentWrapper } from './style';

interface IProps {
  commentData: ICommentData;
  challengeID: string;
  commentListFlag: boolean;
  comments: number;
  setCommentListFlag: (value: boolean) => void;
}

function ChallengeSingleComment({
  commentData,
  challengeID,
  commentListFlag,
  comments,
  setCommentListFlag,
}: IProps): React.ReactElement {
  const { childrenComment, _id, userID, text, isDeleted } = commentData;
  const [openReply, setOpenReply] = useState(false);

  const onClickReplyOpen = () => {
    setOpenReply(!openReply);
  };

  return (
    <SingleCommentWrapper>
      <CommentWrapper>
        <img src={userID?.img} alt="" />
        <h1>{userID?.nickname}</h1>
        <h2>{isDeleted ? '삭제된 댓글입니다.' : text}</h2>
        <CommentFold onClick={onClickReplyOpen}>{openReply ? '접기' : '답글보기'}</CommentFold>
      </CommentWrapper>
      <RecommentWrapper>
        {openReply && (
          <>
            <ChallengeReCommentWrite // 답글 작성부분
              className="reply__write"
              isComment={false} //답글부분
              challengeID={challengeID}
              comments={comments}
              commentListFlag={commentListFlag}
              setCommentListFlag={setCommentListFlag}
              parentCommentId={_id}
            />
            {childrenComment.map((data: IReply) => (
              <ChallengeReCommentList // 답글
                className="reply__comment"
                key={data._id}
                img={data.userID?.img}
                nickname={data.userID?.nickname}
                text={data.text}
                isDeleted={data.isDeleted}
              />
            ))}
          </>
        )}
      </RecommentWrapper>
    </SingleCommentWrapper>
  );
}

export default ChallengeSingleComment;
