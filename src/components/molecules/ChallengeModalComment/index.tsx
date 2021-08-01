import { Button } from 'components/atoms';
import React, { useState } from 'react';
import { IParentComment } from 'types/challenge.type';
import { CommentWrapper, UserThumbnail } from './style';

interface IProps {
  commentData: IParentComment; // | IComment;
}

function ChallengeModalComment({ commentData }: IProps): React.ReactElement {
  const [isFolded, setIsFolded] = useState(true);

  const handleClick = () => {
    setIsFolded(!isFolded);
  };

  return (
    <>
      <CommentWrapper>
        <UserThumbnail src={commentData.userID?.img} />
        <h4>{commentData.userID?.nickname}</h4>
        <p>{commentData.isDeleted ? '삭제된 댓글입니다.' : commentData.text}</p>
        {commentData?.childrenComment?.length > 0 && (
          <Button onClick={handleClick}>{isFolded ? '답글보기' : '접기'}</Button>
        )}
      </CommentWrapper>
      {!isFolded &&
        commentData.childrenComment.map((children) => (
          <CommentWrapper key={children._id} isChild>
            <UserThumbnail isChild src={children.userID?.img} />
            <h4>{children.userID?.nickname}</h4>
            <p>{children.isDeleted ? '삭제된 댓글입니다.' : children.text}</p>
          </CommentWrapper>
        ))}
    </>
  );
}

export default ChallengeModalComment;
