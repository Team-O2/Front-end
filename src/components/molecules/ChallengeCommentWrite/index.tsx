import { postChallengeComment } from 'apis';
import { Button } from 'components/atoms';
import TextArea from 'components/atoms/TextArea';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { userStatusState } from 'stores/user';
import Styled from 'styled-components';

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

const SCommentWrite = Styled.div<{ isCommentt: boolean }>`
  .form{
    display: flex;
    flex-direction: column;
    align-items : flex-end;
  }
    font-family: 'AppleSDGothicNeo';
  .input {
    width: ${({ isCommentt }) => (isCommentt ? '724px' : '591px')};
    height: ${({ isCommentt }) => (isCommentt ? '110px' : '54px')};
    margin: 0 0 8px;
    font-size: 16px;
    padding: 15px 15px;
    opacity: 0.5;
    align-items:center;
    /* margin: 0 auto; */

  } 
  .comment__submit{
      font-weight: bold;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: -0.5px;
      color: #555555;
      border:none;
      background-color:#FFFFFF;
  }
  .button {
    font-size: ${({ isCommentt }) => (isCommentt ? '16px' : '14px')};
    font-weight: bold;
    color:#555555;
    margin-top: 8px;
    &:hover{
      cursor: pointer;
      opacity: 70%;
    }
`;

export default ChallengeCommentWrite;
