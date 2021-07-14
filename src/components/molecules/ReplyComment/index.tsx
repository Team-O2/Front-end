import React from 'react';
import Styled from 'styled-components';

interface IProps {
  profile?: string;
  nickname?: string;
  text?: string;
  className?: string;
}

function Replycomment({ profile, nickname, text }: IProps): React.ReactElement {
  return (
    <SReplyComment>
      <img className="profile" src={profile} alt="" />
      <div className="writer">{nickname}</div>
      <div className="text">{text}</div>
    </SReplyComment>
  );
}
const SReplyComment = Styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top:20px;
    line-height: 1.43;
    font-family: 'AppleSDGothicNeo';
    .profile {
      margin-right: 10px;
      width: 26px;
      height: 26px;
    }
    .writer {
      margin-right: 22px;
      color:#0d0d0d;
      font-size: 16px;
      font-weight: bold;
    }
    .text {
      width: 586px;
      color: #6f6f6f;
      font-size: 16px;
    }
`;
export default Replycomment;
