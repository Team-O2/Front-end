import { CancelChallengeLike, ChallengeLike } from 'apis';
import { ClickGoodIcon, CommentCountIcon, LikeFilledIcon } from 'assets/images';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import { ButtonWrapper, FoldButton, IconWrapper } from './style';

interface IProps {
  setIsClosed: (value: boolean) => void;
  setIsLoginModalOpen: (value: boolean) => void;
  isLike?: boolean;
  like: number;
  comments?: number;
  id: string;
}

function ChallengeCardBottom({
  setIsClosed,
  setIsLoginModalOpen,
  like,
  isLike,
  comments,
  id,
}: IProps): React.ReactElement {
  const userStatusData = useRecoilValue(userStatusState);
  const [countLikes, setCountLikes] = useState(like);
  const [likeRender, setLikeRender] = useState(isLike);
  const [lookMoreButton, setLookMoreButton] = useState(true);
  const [userStateNum, setUserState] = useState(userStatusData ? userStatusData.userType : 0);

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

  return (
    <>
      {lookMoreButton === true ? (
        <ButtonWrapper>
          <FoldButton
            onClick={() => {
              setLookMoreButton(false);
              setIsClosed(true);
            }}
          >
            더보기
          </FoldButton>
        </ButtonWrapper>
      ) : (
        <ButtonWrapper>
          <FoldButton
            onClick={() => {
              setLookMoreButton(true);
              setIsClosed(false);
            }}
          >
            접기
          </FoldButton>
        </ButtonWrapper>
      )}
      <IconWrapper>
        {likeRender ? (
          <img
            src={LikeFilledIcon}
            onClick={() => {
              cancelLike();
              {
                userStateNum === 0 ? setIsLoginModalOpen(true) : setIsLoginModalOpen(false);
              }
            }}
            alt=""
          />
        ) : (
          <img
            src={ClickGoodIcon}
            onClick={() => {
              submitLike();
              {
                userStateNum === 0 ? setIsLoginModalOpen(true) : setIsLoginModalOpen(false);
              }
            }}
            alt=""
          />
        )}
        <h2>{countLikes}</h2>
        <img src={CommentCountIcon} alt="" />
        <h2>{comments}</h2>
      </IconWrapper>
    </>
  );
}

export default ChallengeCardBottom;
