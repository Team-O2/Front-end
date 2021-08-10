import { postChallengeComment } from 'apis';
import { LoginModal } from 'components/molecules';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import { CommentSubmitButton, CommentWriteWrapper } from './style';

export interface IProps {
  className?: string;
  isComment: boolean;
  comments: number;
  challengeID: string;
  commentListFlag: boolean;
  setCommentListFlag: (value: boolean) => void;
  parentCommentId?: string;
}

function ChallengeCommentWrite({
  className,
  isComment,
  comments,
  challengeID,
  commentListFlag,
  setCommentListFlag,
  parentCommentId,
}: IProps): React.ReactElement {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const userStatusData = useRecoilValue(userStatusState);
  const [userStateNum, setUserState] = useState(userStatusData ? userStatusData.userType : 0);
  const [commentIsRender, setCommentIsRender] = useState<boolean>(false);
  const [commentCount, setCommentCount] = useState(comments);
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.currentTarget.value);
  };

  const btnHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (userStateNum === 0) {
      e.preventDefault();
      return setIsLoginModalOpen(true);
    } else {
      e.preventDefault();
      if (isComment) await postComment();
      else await postReComment();
    }
  };

  const postComment = async () => {
    setValue('');
    if (userStatusData) {
      await postChallengeComment(userStatusData.token, challengeID, { parentID: null, text: value });
    }
    setCommentListFlag(!commentListFlag);
    setCommentIsRender(true);
    setCommentCount(commentCount + 1);
    console.log(commentCount);
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
      <LoginModal isLoginModalOpen={isLoginModalOpen} setIsLoginModalOpen={setIsLoginModalOpen} />
    </CommentWriteWrapper>
  );
}
export default ChallengeCommentWrite;
