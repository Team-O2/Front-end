import { CancelChallengeLike, ChallengeLike } from 'apis';
import Image from 'next/image';
import { ClickGoodIcon, CommentCountIcon, LikeFilledIcon } from 'public/assets/images';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import { ButtonWrapper, FoldButton, IconWrapper } from './style';

interface IProps {
  setIsClosed: (value: boolean) => void;
  isClosed: boolean;
  setIsLoginModalOpen: (value: boolean) => void;
  isLike?: boolean;
  like: number;
  comments?: number;
  id: number;
}

function ChallengeCardBottom({
  setIsClosed,
  setIsLoginModalOpen,
  like,
  isLike,
  comments,
  id,
  isClosed,
}: IProps): React.ReactElement {
  const userStatusData = useRecoilValue(userStatusState);
  const [countLikes, setCountLikes] = useState(like);
  const [likeRender, setLikeRender] = useState(isLike);
  const [lookMoreButton, setLookMoreButton] = useState(true);
  const userStateNum = userStatusData ? userStatusData.userType : 0;

  const submitLike = async () => {
    if (userStatusData) {
      const token = userStatusData.token;
      const submitSuccess = await ChallengeLike(token, id);
      if (submitSuccess) {
        setLikeRender(true);
        setCountLikes(countLikes + 1);
      }
    }
  };

  const cancelLike = async () => {
    if (userStatusData) {
      const token = userStatusData.token;
      const cancelSuccess = await CancelChallengeLike(token, id);
      if (cancelSuccess) {
        setLikeRender(false);
        setCountLikes(countLikes - 1);
      }
    }
  };

  const foldHandleOnClick = () => {
    setLookMoreButton(!lookMoreButton);
    setIsClosed(!isClosed);
  };

  const likeCancelHandelOnClick = () => {
    cancelLike();
    {
      userStateNum === 0 ? setIsLoginModalOpen(true) : setIsLoginModalOpen(false);
    }
  };

  const likeSubmitHandelOnClick = () => {
    submitLike();
    {
      userStateNum === 0 ? setIsLoginModalOpen(true) : setIsLoginModalOpen(false);
    }
  };

  return (
    <>
      {lookMoreButton === true ? (
        <ButtonWrapper>
          <FoldButton
            onClick={() => {
              foldHandleOnClick();
            }}
          >
            더보기
          </FoldButton>
        </ButtonWrapper>
      ) : (
        <ButtonWrapper>
          <FoldButton
            onClick={() => {
              foldHandleOnClick();
            }}
          >
            접기
          </FoldButton>
        </ButtonWrapper>
      )}
      <IconWrapper>
        {likeRender ? (
          <Image
            src={LikeFilledIcon}
            onClick={() => {
              likeCancelHandelOnClick();
            }}
            alt=""
          />
        ) : (
          <Image
            src={ClickGoodIcon}
            onClick={() => {
              likeSubmitHandelOnClick();
            }}
            alt=""
          />
        )}
        <h2>{countLikes}</h2>
        <Image src={CommentCountIcon} alt="" />
        <h2>{comments}</h2>
      </IconWrapper>
    </>
  );
}

export default ChallengeCardBottom;
