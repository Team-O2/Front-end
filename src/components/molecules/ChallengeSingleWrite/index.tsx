import { ChallengeReCommentList, ChallengeReCommentWrite } from 'components/molecules';
import { ICommentData } from 'components/molecules/ChallengeDetailCard';
import React, { useState } from 'react';
import SSingleComment from './style';

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
            <ChallengeReCommentWrite // 답글 작성부분
              className="reply__write"
              isComment={false} //답글부분
              challengeID={challengeID}
              commentListFlag={commentListFlag}
              setCommentListFlag={setCommentListFlag}
              parentCommentId={_id}
            />
            {childrenComment.map((data: IReply) => (
              <ChallengeReCommentList // 답글
                className="reply__comment"
                key={data._id}
                img={data.userID.img}
                nickname={data.userID.nickname}
                text={data.text}
              />
            ))}
          </>
        )}
      </div>
    </SSingleComment>
  );
}

export default ChallengeSingleComment;
