import { Icon, Modal } from 'components/atoms';
import { ChallengeModalComment } from 'components/molecules';
import React from 'react';
import { IChallenge } from 'types/challenge.type';
import { getTimeForToday } from 'utils';
import * as S from './style';

export interface IProps {
  isFolded: boolean;
  isChallengeModalOpen: boolean;
  challenge: IChallenge | null;
  handleCommentFold: () => void;
  setIsChallengeModalOpen: (value: boolean) => void;
  handleChallengeModalOpen: () => void;
}

function MyPageCommentModal({
  isFolded,
  isChallengeModalOpen,
  challenge,
  handleCommentFold,
  setIsChallengeModalOpen,
  handleChallengeModalOpen,
}: IProps): React.ReactElement {
  return (
    <Modal isOpen={isChallengeModalOpen} setIsOpen={setIsChallengeModalOpen} isBlur={true}>
      <S.ChallengeModalWrapper>
        <S.ModalWrapper>
          <S.ModalUserInfo>
            <S.ModalUserImgWrapper>
              {challenge?.img && <Icon size={80} src={challenge.img} circular="true" />}
            </S.ModalUserImgWrapper>
            <S.ModalUserInfoWrapper>
              <div>
                <div>{challenge?.nickname}</div>
                <div>{challenge?.createdAt && getTimeForToday(challenge.createdAt)}</div>
              </div>
              <div>{challenge?.interest?.map((item: string) => `#${item} `)}</div>
            </S.ModalUserInfoWrapper>
          </S.ModalUserInfo>
          <S.TextArea isFolded={isFolded}>
            <h3>잘한 점</h3>
            <p>{challenge?.good}</p>
            <h3>못한 점</h3>
            <p>{challenge?.bad}</p>
            <h3>배운 점</h3>
            <p>{challenge?.learn}</p>
          </S.TextArea>
          <S.MoreButton onClick={handleCommentFold}>{isFolded ? '더보기' : '접기'}</S.MoreButton>
          <S.CommentWrapper>
            {challenge?.comment.map((comment) => (
              <ChallengeModalComment key={comment.id} commentData={comment} />
            ))}
          </S.CommentWrapper>
        </S.ModalWrapper>
        <S.CloseButton onClick={handleChallengeModalOpen}>닫기</S.CloseButton>
      </S.ChallengeModalWrapper>
    </Modal>
  );
}

export default MyPageCommentModal;
