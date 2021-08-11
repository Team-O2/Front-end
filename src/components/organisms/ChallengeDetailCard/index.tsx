import { DeleteChallenge } from 'apis';
import {
  ChallengeCardBottom,
  ChallengeCardFold,
  ChallengeCardList,
  ChallengeCardProfile,
  DeleteModal,
  LoginModal,
} from 'components/molecules';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userState, userStatusState } from 'stores/user';
import { Container, MainCardWrapper } from './style';

interface IProps {
  nickname?: string;
  image?: string;
  createdAt?: string;
  interest?: string[];
  good?: string;
  bad?: string;
  learn?: string;
  like: number;
  comments: number;
  isLike?: boolean;
  isScrap?: boolean;
  id: string;
  onChange?: () => void;
  handleFetch?: (offset: number) => void;
}

function ChallengeDetailCard({
  nickname,
  image,
  createdAt,
  interest,
  good,
  bad,
  learn,
  like,
  isLike,
  isScrap,
  comments,
  id,
  onChange,
  handleFetch,
}: IProps): React.ReactElement {
  const userStatusData = useRecoilValue(userStatusState);
  const userData = useRecoilValue(userState);
  const [isClosed, setIsClosed] = useState(false);
  const [userStateNickname, setUserStateNickname] = useState(userData ? userData.nickname : 0);
  const [isMine, setIsMine] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRerender, setIsRerender] = useState<boolean>(false);

  useEffect(() => {
    setIsMine(nickname === userStateNickname);
    document.body.style.overflow = isDeleteModalOpen || isLoginModalOpen === true ? 'hidden' : 'unset';
  }, [isDeleteModalOpen, isLoginModalOpen, nickname, userStateNickname]);

  const deleteClickHandler = async () => {
    if (userStatusData) {
      const token = userStatusData?.token;
      const data = await DeleteChallenge(id, token);
      data && setIsDeleteModalOpen(false);
      onChange?.();
      handleFetch?.(0);
    } else {
      alert('네트워크가 좋지 않습니다');
    }
  };

  return (
    <>
      <Container>
        <MainCardWrapper>
          <ChallengeCardProfile
            setIsDeleteModalOpen={setIsDeleteModalOpen}
            setIsLoginModalOpen={setIsLoginModalOpen}
            isMine={isMine}
            nickname={nickname}
            image={image}
            createdAt={createdAt}
            isScrap={isScrap}
            interest={interest}
            id={id}
          />
          <ChallengeCardList good={good} bad={bad} learn={learn} isClosed={isClosed} />
          {
            <ChallengeCardBottom
              isClosed={isClosed}
              setIsClosed={setIsClosed}
              setIsLoginModalOpen={setIsLoginModalOpen}
              comments={comments}
              isLike={isLike}
              like={like}
              id={id}
            />
          }
          <ChallengeCardFold id={id} comments={comments} setIsLoginModalOpen={setIsLoginModalOpen} />
        </MainCardWrapper>
      </Container>
      <DeleteModal
        isDeleteModalOpen={isDeleteModalOpen}
        setIsDeleteModalOpen={setIsDeleteModalOpen}
        onClickDeleteButton={deleteClickHandler}
      />
      <LoginModal isLoginModalOpen={isLoginModalOpen} setIsLoginModalOpen={setIsLoginModalOpen} />
    </>
  );
}

export default ChallengeDetailCard;
