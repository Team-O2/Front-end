import { Button } from 'components/atoms';
import React, { useState } from 'react';
import { IComment } from 'types/challenge.type';
import { CommentWrapper, UserThumbnail } from './style';

interface IProps {
  commentData: IComment;
}

function ChallengeModalComment({ commentData }: IProps): React.ReactElement {
  const [isFolded, setIsFolded] = useState(true);

  const handleClick = () => {
    setIsFolded(!isFolded);
  };

  return (
    <>
      <CommentWrapper>
        <UserThumbnail width={28} height={28} src={commentData.img} />
        <h4>{commentData.nickname}</h4>
        <p>{commentData.isDeleted ? '삭제된 댓글입니다.' : commentData.text}</p>
        {commentData.children?.length > 0 && <Button onClick={handleClick}>{isFolded ? '답글보기' : '접기'}</Button>}
      </CommentWrapper>
      {!isFolded &&
        commentData.children?.map((children) => (
          <CommentWrapper key={children.id} isChild>
            <UserThumbnail width={26} height={26} src={children.img} />
            <h4>{children.nickname}</h4>
            <p>{children.isDeleted ? '삭제된 댓글입니다.' : children.text}</p>
          </CommentWrapper>
        ))}
    </>
  );
}

export default ChallengeModalComment;
