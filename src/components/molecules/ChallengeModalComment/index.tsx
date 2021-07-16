import { Button, Img } from 'components/atoms';
import React, { useState } from 'react';
import Styled from 'styled-components';
import { ifNotProp, ifProp, palette } from 'styled-tools';
import { IParentComment } from 'types/learnMySelf';

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

const CommentWrapper = Styled.div<{ isChild?: boolean }>`
  display: flex;
  position: relative;
  width: ${ifProp('isChild', 'calc(100% - 130px)', '100%')};
  margin-top: ${ifNotProp('isChild', '20px')};
  margin-left: ${ifProp('isChild', '130px')};
  margin-bottom: ${ifProp('isChild', '16px', '20px')};
  
  .img {
    width: ${ifProp('isChild', '26px', '28px')};
    height: ${ifProp('isChild', '26px', '28px')};
    border-radius: 50%;
  }

  h4 {
    width: 81px;
    margin: 3px 8px 0 13px;
    color: ${palette('grayscale', -1)};
  }

  p {
    word-wrap: break-word;
    width: ${ifProp('isChild', '372px', '500px')};
    margin-top: 1px;
    color: ${palette('grayscale', 5)};
  }

  button {
    position: absolute;
    top: 0;
    right: 0;
    color: ${palette('primary', 3)};
  }
`;

export default ChallengeModalComment;
