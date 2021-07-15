import React from 'react';
import Styled from 'styled-components';

interface IProps {
  profile?: string;
  nickname?: string;
  text?: string;
  className?: string;
  img?: string;
}

function Replycomment({ nickname, text, img }: IProps): React.ReactElement {
  return (
    <SReplyComment>
      <img className="profile" src={img} alt="" />
      <div className="writer">{nickname}</div>
      <div className="text">{text}</div>
    </SReplyComment>
  );
}
const SReplyComment = Styled.div`
    display: flex;
    justify-content: flex-end;
    margin:13px 0;
    line-height: 1.43;
    width : 585px;
    font-family: 'AppleSDGothicNeo';
    .profile {
      margin-right: 10px;
      width: 26px;
      height: 26px;
      border-radius: 100%;
    }
    .writer {
      margin-right: 10px;
      color:#0d0d0d;
      font-size: 16px;
      font-weight: bold;
      width : 90px;
    }
    .text {
      width: 100%;
      color: #6f6f6f;
      font-size: 16px;
      white-space : normal;
      word-break:break-all;
    }
`;
export default Replycomment;
