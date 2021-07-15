import TextArea from 'components/atoms/TextArea';
import { postChallengeComment } from 'libs/getChallenge';
import React from 'react';
import { useRecoilState } from 'recoil';
import { userStatusState } from 'stores/user';
import Styled from 'styled-components';

export interface IProps {
  className?: string;
  value: string;
  setValue: (value: string) => void;
  isComment: boolean;
  challengeID: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function ChallengeCommentWrite({
  className,
  value,
  setValue,
  isComment,
  onChange,
  challengeID,
}: IProps): React.ReactElement {
  const [userStatusData, setUserStatusData] = useRecoilState(userStatusState);

  const btnHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isComment) await postComment();
    else await postReComment();
  };

  const postComment = async () => {
    if (userStatusData) {
      await postChallengeComment(userStatusData.token, challengeID, { parentID: null, text: value });
    }
    setValue('');
  };

  const postReComment = async () => {
    if (userStatusData) {
      await postChallengeComment(userStatusData.token, challengeID, { parentID: null, text: value });
    }
    setValue('');
  };

  return (
    <SCommentWrite isCommentt={isComment} className={className}>
      <form className="form">
        <TextArea
          className="input"
          name="comment"
          onChange={onChange}
          value={value}
          placeholder="댓글을 입력해 주세요"
        ></TextArea>
        <div className="comment__button-submit">
          <button onClick={btnHandler} className="comment__submit">
            {isComment ? '댓글 작성' : '답글 작성'}
          </button>
        </div>
      </form>
    </SCommentWrite>
  );
}

const SCommentWrite = Styled.div<{ isCommentt: boolean }>`
  .form{
    display: flex;
    flex-direction: column;
  }
    font-family: 'AppleSDGothicNeo';
  .input {
    width: ${({ isCommentt }) => (isCommentt ? '724px' : '594px')};
    height: ${({ isCommentt }) => (isCommentt ? '110px' : '4px')};
    margin-right: ${({ isCommentt }) => (isCommentt ? '0px' : '54px')};
    margin: 0 0 8px;
    font-size: 16px;
    padding: 15px 15px 41px;
    opacity: 0.5;
    align-items:center;
    margin: 0 auto;

  } 
  .comment__submit{
      font-weight: bold;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: -0.5px;
      color: #555555;
      border:none;
      background-color:#FFFFFF;
      padding-top:8px;
      float:right;
      padding-right:58px;
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
