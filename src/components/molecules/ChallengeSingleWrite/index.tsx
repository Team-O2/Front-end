import { ICommentData } from 'components/molecules/ViewListCard';
import React, { useState } from 'react';
import Styled from 'styled-components';
import ChallengeCommentWrite from '../ChallengeCommentWrite';
import ChallengeReplyComment from '../ReplyComment';

interface IProps {
  commentData: ICommentData;
  challengeID: string;
  commentListFlag: boolean;
  setCommentListFlag: (value: boolean) => void;
}

interface IReply {
  _id: string;
  userID: {
    img: string;
    _id: string;
    nickname: string;
  };
  text: string;
}

function ChallengeSingleComment({
  commentData,
  challengeID,
  commentListFlag,
  setCommentListFlag,
}: IProps): React.ReactElement {
  const { childrenComment, _id, userID, text } = commentData;
  const [openReply, setOpenReply] = useState(false);

  const onClickReplyOpen = () => {
    setOpenReply(!openReply);
  };

  return (
    <SSingleComment>
      <div className="comment">
        <img className="comment__profile" src={userID?.img} alt="" />
        <div className="comment__writer">{userID?.nickname}</div>
        <div className="comment__text">{text}</div>
        <div className="comment__toggle" onClick={onClickReplyOpen}>
          {openReply ? '접기' : '답글보기'}
        </div>
      </div>
      <div className="reply">
        {openReply && (
          <>
            <ChallengeCommentWrite // 답글 작성부분
              className="reply__write"
              isComment={false} //답글부분
              challengeID={challengeID}
              commentListFlag={commentListFlag}
              setCommentListFlag={setCommentListFlag}
              parentCommentId={_id}
            />
                className="reply__comment"
                key={data._id}
                img={data.userID.img}
                nickname={data.userID.nickname}
                text={data.text}
              ></ChallengeReplyComment>
            ))}
          </>
        )}
      </div>
    </SSingleComment>
  );
}
const SSingleComment = Styled.div`
  display: flex;
  flex-direction: column;
  .comment {
    display: flex;
    justify-content: space-between;
    font-family: 'AppleSDGothicNeo';
    line-height: 1.43;
    align-items:flex-start;
    margin: 0 auto ;
    width: 724px;   
    &__profile {
      width: 28px;
      height: 28px;
      border-radius : 100%;
    }
    &__writer {
      margin: 0 13px;
      font-size: 16px;
      font-weight: bold;
      width : 86px;
    }
    &__text {
      /* flex : auto; */
      /* background-color : beige; */
      width : 585px;
      font-size: 16px;
      color: #6f6f6f;
      margin-right : 8px;
      white-space : normal;
      word-break:break-all;
    }
    &__toggle {
      width: 50px;
      text-align : right;
      font-size: 14px;
      font-weight: bold;
      color: #36c8f5;
      white-space : nowrap;
      cursor : pointer;
    }
  }
  .reply {
    display: flex;
    flex-direction: column;
    align-items : flex-end;
    margin: 8px 0 31px;
    &__write {
      margin-bottom:20px;
    }
  }

  

`;
export default ChallengeSingleComment;
