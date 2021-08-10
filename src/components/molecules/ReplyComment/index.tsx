import React from 'react';
import { ReplyCommentWrapper, Text, Writer } from './style';

interface IProps {
  nickname?: string;
  text?: string;
  className?: string;
  img?: string;
  isDeleted?: boolean;
}

function ReplyComment({ nickname, text, img, isDeleted }: IProps): React.ReactElement {
  return (
    <ReplyCommentWrapper>
      <img src={img} alt="" />
      <Writer>{nickname}</Writer>
      <Text>{isDeleted ? '삭제된 댓글입니다.' : text}</Text>
    </ReplyCommentWrapper>
  );
}
export default React.memo(ReplyComment);
