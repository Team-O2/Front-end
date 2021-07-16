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
    margin-left: 133px;
    
    width : 585px;
    line-height: 1.43;
    font-family: 'AppleSDGothicNeo';
    .profile {
      margin-right: 10px;
      border-radius: 100%;
      width: 26px;
      height: 26px;
    }
    .writer {
      margin-right: 10px;
      width : 90px;
      color:#0d0d0d;
      font-size: 16px;
      font-weight: bold;
    }
    .text {
      width: 100%;
      white-space : normal;
      word-break:break-all;
      color: #6f6f6f;
      font-size: 16px;
    }
`;
export default React.memo(Replycomment);
