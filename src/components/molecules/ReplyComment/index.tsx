import React from 'react';
import Styled from 'styled-components';
import Profile from 'assets/images/Profile.svg';

interface IProps {
  _id?: string;
  parentId?: string;
  author: string;
  text: string;
}

function Replycomment({ author, text }: IProps): React.ReactElement {
  return (
    <SReplyComment>
      <img className="comment__profile" src={Profile} alt="" />
      <div className="comment__writer">{author}</div>
      <div className="comment__text">{text}</div>
    </SReplyComment>
  );
}
const SReplyComment = Styled.div`
    display: flex;
    font-family: 'AppleSDGothicNeo';
    line-height: 1.43;
    &__profile {
      width: 26px;
      height: 26px;
    }
    &__writer {
      font-size: 16px;
      font-weight: bold;
      color:#0d0d0d;
    }
    &__text {
      width: 586px;
      font-size: 16px;
      color: #6f6f6f;
    }
`;
export default Replycomment;
