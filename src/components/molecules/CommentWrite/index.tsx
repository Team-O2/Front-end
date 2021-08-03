import React from 'react';
import { CommentButton, CommentForm, CommentTextArea } from './style';

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
    <CommentForm>
      <form onSubmit={onSubmit}>
        <CommentTextArea
          isCommentCheck={isComment}
          name="comment"
          onChange={onChange}
          value={value}
          placeholder="댓글을 입력해 주세요"
        ></CommentTextArea>
        <CommentButton isCommentCheck={isComment} onClick={onClick}>
          {isComment ? '댓글 작성' : '답글 작성'}
        </CommentButton>
      </form>
    </CommentForm>
  );
}

export default CommentWrite;
