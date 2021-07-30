import { postChallengeComment } from 'apis';
import { Button } from 'components/atoms';
import TextArea from 'components/atoms/TextArea';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { userStatusState } from 'stores/user';
import SCommentWrite from './style';

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
  const [userStatusData, setUserStatusData] = useRecoilState(userStatusState);
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
    <SCommentWrite isCommentt={isComment} className={className}>
      <form className="form">
        <TextArea
          className="input"
          name="comment"
          onChange={handleChange}
          value={value}
          placeholder="댓글을 입력해 주세요"
        ></TextArea>
        <div className="comment__button-submit">
          <Button onClick={btnHandler} className="comment__submit">
            {isComment ? '댓글 작성' : '답글 작성'}
          </Button>
        </div>
      </form>
    </SCommentWrite>
  );
}
export default ChallengeCommentWrite;
