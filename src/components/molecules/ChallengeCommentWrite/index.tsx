import { postChallengeComment } from 'apis';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import { CommentSubmitButton, CommentWriteWrapper } from './style';

export interface IProps {
  className?: string;
  isComment: boolean;
  challengeID: string;
  commentListFlag: boolean;
  setCommentListFlag: (value: boolean) => void;
  parentCommentId?: string;
}

function ChallengeCommentWrite({
  className,
  isComment,
  challengeID,
  commentListFlag,
  setCommentListFlag,
  parentCommentId,
}: IProps): React.ReactElement {
  const userStatusData = useRecoilValue(userStatusState);
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.currentTarget.value);
  };

  const btnHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isComment) await postComment();
    else await postReComment();
  };

  const postComment = async () => {
    setValue('');
    if (userStatusData) {
      await postChallengeComment(userStatusData.token, challengeID, { parentID: null, text: value });
    }
    setCommentListFlag(!commentListFlag);
  };

  const postReComment = async () => {
    setValue('');
    if (userStatusData) {
      await postChallengeComment(userStatusData.token, challengeID, { parentID: parentCommentId, text: value });
    }
    setCommentListFlag(!commentListFlag);
  };

  return (
    <CommentWriteWrapper isCommentt={isComment} className={className}>
      <form>
        <textarea name="comment" onChange={handleChange} value={value} placeholder="댓글을 입력해 주세요"></textarea>
        <CommentSubmitButton onClick={btnHandler}>{isComment ? '댓글 작성' : '답글 작성'}</CommentSubmitButton>
      </form>
    </CommentWriteWrapper>
  );
}
export default ChallengeCommentWrite;
