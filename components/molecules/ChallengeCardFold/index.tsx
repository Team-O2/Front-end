import { getChallengeContent } from 'apis';
import { ChallengeComment } from 'components/molecules';
import React, { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import { IComment } from 'types/challenge.type';
import { CommentButton, CommentFoldButton } from './style';

interface IProps {
  id: number;
  comments: number;
  setIsLoginModalOpen: (value: boolean) => void;
}

function ChallengeCardFold({ id, comments, setIsLoginModalOpen }: IProps): React.ReactElement {
  const userStatusData = useRecoilValue(userStatusState);
  const userStateNum = userStatusData ? userStatusData.userType : 0;
  const [isOpenComment, setIsOpenComment] = useState(false);
  const [isCommentListFlag, setIsCommentListFlag] = useState<boolean>(false);
  const [myCommentList, setMyCommentList] = useState<IComment[] | null>(null);
  const isFoldComment = true;

  const getCommentList = useCallback(async () => {
    if (userStatusData) {
      const data = await getChallengeContent(id, userStatusData.token);
      data && setMyCommentList(data.comment);
    }
  }, [id, userStatusData]);

  useEffect(() => {
    getCommentList();
  }, [isCommentListFlag, getCommentList]);

  function commentAuthorization() {
    if (userStateNum === 0) {
      return setIsLoginModalOpen(true);
    } else {
      setIsOpenComment(true);
      getCommentList();
    }
  }

  return (
    <>
      {isOpenComment === false ? (
        <CommentButton
          onClick={() => {
            commentAuthorization();
          }}
        >
          댓글 펼치기
        </CommentButton>
      ) : (
        <div>
          {isFoldComment === true ? (
            <ChallengeComment
              commentList={myCommentList}
              challengeID={id}
              comments={comments}
              commentListFlag={isCommentListFlag}
              setCommentListFlag={setIsCommentListFlag}
            />
          ) : null}
          <CommentFoldButton
            onClick={() => {
              setIsOpenComment(false);
            }}
          >
            댓글 접기
          </CommentFoldButton>
        </div>
      )}
    </>
  );
}

export default ChallengeCardFold;
