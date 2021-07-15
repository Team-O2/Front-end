import { ICommentData } from 'components/molecules/ViewListCard';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from 'stores/user';
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
  _id?: string;
  parentID?: string;
  text?: string;
  nickname?: string;
}

function ChallengeSingleComment({
  commentData,
  challengeID,
  commentListFlag,
  setCommentListFlag,
}: IProps): React.ReactElement {
  const { childrenComment, _id, userID, text } = commentData;
  const [openReply, setOpenReply] = useState(false);
  const [replyValue, setReplyValue] = useState('');
  const [replyList, setReplyList] = useState(childrenComment);

  const onClickReplyOpen = () => {
    setOpenReply(!openReply);
  };
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReplyValue(event.currentTarget.value);
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
            <ChallengeCommentWrite
              className="reply__write"
              value={replyValue}
              setValue={setReplyValue}
              onChange={handleChange}
              isComment={false}
              challengeID={challengeID}
              commentListFlag={commentListFlag}
              setCommentListFlag={setCommentListFlag}
            ></ChallengeCommentWrite>
            {replyList.map((data: IReply) => (
              <ChallengeReplyComment
                className="reply__comment"
                key={data._id}
                nickname={data.nickname}
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
    align-items:center;
    margin: 0 auto;

    width: 724px;
    
    &__profile {
      width: 28px;
      height: 28px;
    }
    &__writer {
      padding-left: 13px;
      font-size: 16px;
      font-weight: bold;
    }
    &__text {
      width: 550px;
      font-size: 16px;
      color: #6f6f6f;
      padding-left:8px;
    }
    &__toggle {
      width: 50px;
      font-size: 14px;
      font-weight: bold;
      color: #36c8f5;
      text-align: right;
    }
  }
  .reply {
    display: flex;
    flex-direction: column;
    margin: 16px 0 31px;
    &__write {
      margin-left:130px;
    }
    &__comment {
      width: 724px;
    }
  }

  

`;
export default ChallengeSingleComment;
