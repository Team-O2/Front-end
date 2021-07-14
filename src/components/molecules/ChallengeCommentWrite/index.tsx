import TextArea from 'components/atoms/TextArea';
import React from 'react';
import Styled from 'styled-components';

export interface IProps {
  className?: string;
  value?: string;
  isComment?: boolean;
  isCommentt?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onClick?: (event: any) => void;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

function ChallengeCommentWrite({
  className,
  value,
  isComment,
  onChange,
  onClick,
  onSubmit,
}: IProps): React.ReactElement {
  return (
    <SCommentWrite isCommentt={isComment} className={className}>
      <form className="form" onSubmit={onSubmit}>
        <TextArea
          className="input"
          name="comment"
          onChange={onChange}
          value={value}
          placeholder=" | 댓글을 입력해 주세요"
        ></TextArea>
        <div className="comment__button-submit">
          <button onClick={onClick} className="comment__submit">
            {isComment ? '댓글 작성' : '답글 작성'}
          </button>
        </div>
      </form>
    </SCommentWrite>
  );
}

const SCommentWrite = Styled.div`
  .form{
    display: flex;
    flex-direction: column;
  }
    font-family: 'AppleSDGothicNeo';
  .input {
    width: ${({ isCommentt }: IProps) => (isCommentt ? '724px' : '594px')};
    height: ${({ isCommentt }: IProps) => (isCommentt ? '110px' : '4px')};
    margin-right: ${({ isCommentt }: IProps) => (isCommentt ? '0px' : '54px')};
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
    font-size: ${({ isCommentt }: IProps) => (isCommentt ? '16px' : '14px')};
    font-weight: bold;
    color:#555555;
    margin-top: 8px;
    &:hover{
      cursor: pointer;
      opacity: 70%;
    }
`;

export default ChallengeCommentWrite;
