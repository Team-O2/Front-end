import React from 'react';
import Styled from 'styled-components';
import Profile from 'assets/images/Profile.svg';

interface IProps {
  nickname: string;
  text: string;
  className?: string;
}

function Replycomment({ nickname, text }: IProps): React.ReactElement {
  return (
    <SReplyComment>
      <img className="profile" src={Profile} alt="" />
      <div className="writer">{nickname}</div>
      <div className="text">{text}</div>
    </SReplyComment>
  );
}
const SReplyComment = Styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top:20px;
    font-family: 'AppleSDGothicNeo';
    line-height: 1.43;
    .profile {
      width: 26px;
      height: 26px;
      margin-right: 10px;
    }
    .writer {
      font-size: 16px;
      font-weight: bold;
      color:#0d0d0d;
      margin-right: 22px;
    }
    .text {
      width: 586px;
      font-size: 16px;
      color: #6f6f6f;
    }
`;
export default Replycomment;
