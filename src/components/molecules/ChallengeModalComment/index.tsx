import { Button, Img } from 'components/atoms';
import React, { useState } from 'react';
import { IParentComment } from 'types/challenge.type';
import { CommentWrapper } from './style';

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
        <Img className="img" src={commentData.userID?.img} />
        <h4 className="subhead3">{commentData.userID?.nickname}</h4>
        <p className="body3">{commentData.isDeleted ? '삭제된 댓글입니다.' : commentData.text}</p>
        {commentData?.childrenComment?.length > 0 && (
          <Button className="subhead2" onClick={handleClick}>
            {isFolded ? '답글보기' : '접기'}
          </Button>
        )}
      </CommentWrapper>
      {!isFolded &&
        commentData.childrenComment.map((children) => (
          <CommentWrapper key={children._id} isChild>
            <Img className="img" src={children.userID?.img} />
            <h4 className="subhead3">{children.userID?.nickname}</h4>
            <p className="body3">{children.isDeleted ? '삭제된 댓글입니다.' : children.text}</p>
          </CommentWrapper>
        ))}
    </>
  );
}

export default ChallengeModalComment;
