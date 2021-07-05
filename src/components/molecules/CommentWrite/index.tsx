import React from 'react';
import Styled from 'styled-components';
import TextArea from 'components/atoms/TextArea';

export interface IProps {
  className?: string;
  value?: string;
  isComment?: boolean;
  isCommentt?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onClick?: (event: any) => void;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

function CommentWrite({ className, value, isComment, onChange, onClick, onSubmit }: IProps): React.ReactElement {
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
        <p onClick={onClick} className="button">
          {isComment ? '댓글 작성' : '답글 작성'}
        </p>
      </form>
    </SCommentWrite>
  );
}

const SCommentWrite = Styled.div`
  .form{
    display: flex;
    flex-direction: column;
    font-family: 'AppleSDGothicNeo';
  .input {
    width: ${({ isCommentt }: IProps) => (isCommentt ? undefined : '713px')};
    height: ${({ isCommentt }: IProps) => (isCommentt ? '110px' : '53px')};
    border: 1px solid #dfdfdf;
    padding: 10px;
    :focus {outline:none;}
  }
  .button {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    font-size: ${({ isCommentt }: IProps) => (isCommentt ? '16px' : '14px')};
    font-weight: bold;
    color:#555555;
    margin-top: 8px;
    &:hover{
      cursor: pointer;
      opacity: 70%;
    }
  }
  }
  
`;

export default CommentWrite;
