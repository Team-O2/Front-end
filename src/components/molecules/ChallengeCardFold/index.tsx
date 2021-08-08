import { getChallengeContent } from 'apis';
import { ChallengeComment } from 'components/molecules';
import React, { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import { ICommentData } from 'types/challenge.type';
import { CommentButton, CommentFoldButton } from './style';

interface IProps {
  id: string;
}

function ChallengeCardFold({ id }: IProps): React.ReactElement {
  const [isOpenComment, setIsOpenComment] = useState(false);
  const [isFoldComment, setIsFoldComment] = useState(true);
  const userStatusData = useRecoilValue(userStatusState);
  const [isCommentListFlag, setIsCommentListFlag] = useState<boolean>(false);
  const [myCommentList, setMyCommentList] = useState<ICommentData[] | null>(null);

  const getCommentList = useCallback(async () => {
    if (userStatusData) {
      const data = await getChallengeContent(id, userStatusData.token);
      data && setMyCommentList(data.comments);
    }
  }, [id, userStatusData]);

  useEffect(() => {
    getCommentList();
  }, [isCommentListFlag, getCommentList]);
  return (
    <>
      {isOpenComment === false ? (
        <CommentButton
          onClick={() => {
            setIsOpenComment(true);
            getCommentList();
          }}
        >
          댓글 펼치기
        </CommentButton>
      ) : (
        <div>
          {isFoldComment === false ? null : (
            <ChallengeComment
              commentList={myCommentList}
              challengeID={id}
              commentListFlag={isCommentListFlag}
              setCommentListFlag={setIsCommentListFlag}
            />
          )}
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
