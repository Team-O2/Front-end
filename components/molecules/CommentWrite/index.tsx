import React from 'react';
import { CommentButton, CommentForm, CommentTextArea } from './style';

export interface IProps {
  value: string;
  isComment: boolean;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function CommentWrite({ value, isComment, handleChange, handleSubmit }: IProps): React.ReactElement {
  return (
    <CommentForm>
      <form>
        <CommentTextArea
          isCommentCheck={isComment}
          name="comment"
          onChange={handleChange}
          value={value}
          placeholder="댓글을 입력해 주세요"
        ></CommentTextArea>
        <CommentButton isCommentCheck={isComment} onClick={handleSubmit}>
          {isComment ? '댓글 작성' : '답글 작성'}
        </CommentButton>
      </form>
    </CommentForm>
  );
}

export default CommentWrite;
