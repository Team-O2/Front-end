import React from 'react';
import { SButton, SForm, STextArea } from './style';

export interface IProps {
  className?: string;
  value: string;
  isComment: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onClick: (e: any) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

function CommentWrite({ value, isComment, onChange, onClick, onSubmit }: IProps): React.ReactElement {
  return (
    <SForm>
      <form onSubmit={onSubmit}>
        <STextArea
          isCommentCheck={isComment}
          name="comment"
          onChange={onChange}
          value={value}
          placeholder="댓글을 입력해 주세요"
        ></STextArea>
        <SButton isCommentCheck={isComment} onClick={onClick}>
          {isComment ? '댓글 작성' : '답글 작성'}
        </SButton>
      </form>
    </SForm>
  );
}

export default CommentWrite;
