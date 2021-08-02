import React from 'react';
import { ReplyCommentWrapper, Text, Writer } from './style';

interface IProps {
  nickname?: string;
  text?: string;
  className?: string;
  img?: string;
}

function ReplyComment({ nickname, text, img }: IProps): React.ReactElement {
  return (
    <ReplyCommentWrapper>
      <img className="profile" src={img} alt="" />
      <Writer>{nickname}</Writer>
      <Text>{text}</Text>
    </ReplyCommentWrapper>
  );
}
export default React.memo(ReplyComment);
