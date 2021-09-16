import { ChallengeReCommentList, ChallengeReCommentWrite } from 'components/molecules';
import React, { useState } from 'react';
import { IComment } from 'types/challenge.type';
import { CommentFold, CommentWrapper, RecommentWrapper, SingleCommentWrapper } from './style';

interface IProps {
  commentData: IComment;
  challengeID: number;
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
  const { id, userID, img, nickname, text, isDeleted, children } = commentData;
  const [openReply, setOpenReply] = useState(false);

  const onClickReplyOpen = () => {
    setOpenReply(!openReply);
  };

  return (
    <SingleCommentWrapper>
      <CommentWrapper>
        <img src={img} alt="" />
        <h1>{nickname}</h1>
        <h2>{isDeleted ? '삭제된 댓글입니다.' : text}</h2>
        <CommentFold onClick={onClickReplyOpen}>답글</CommentFold>
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
              parentCommentId={id}
            />
          </>
        )}
        {children?.map((data: IComment) => (
          <ChallengeReCommentList // 답글
            className="reply__comment"
            key={data.id}
            img={data.img}
            nickname={data.nickname}
            text={data.text}
            isDeleted={data.isDeleted}
          />
        ))}
      </RecommentWrapper>
    </SingleCommentWrapper>
  );
}

export default ChallengeSingleComment;
