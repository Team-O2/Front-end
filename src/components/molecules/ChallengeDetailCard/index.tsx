import {
  CancelChallengeLike,
  CancelChallengeScrap,
  ChallengeLike,
  ChallengeScrap,
  DeleteChallenge,
  getChallengeContent,
} from 'apis';
import {
  ClickGoodIcon,
  ColorScrapIcon,
  CommentCountIcon,
  DeleteIcon,
  EditIcon,
  GrayScrapIcon,
  LikeFilledIcon,
  LoginAlertIcon,
  MenuBarIcon,
} from 'assets/images';
import { Modal } from 'components/atoms';
import { ChallengeComment, DeleteModal } from 'components/molecules';
import dayjs from 'dayjs';
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useRecoilValue } from 'recoil';
import { userState, userStatusState } from 'stores/user';
import { ICommentData } from 'types/challenge.type';
import {
  ButtonWrapper,
  CancelButton,
  CommentButton,
  CommentFoldButton,
  Container,
  DeleteBar,
  DeleteButton,
  DeleteEditCardButton,
  FoldButton,
  FormDetailWrapper,
  IconWrapper,
  InterestTag,
  LoginButtonWrapper,
  LoginModalWrapper,
  LoginNoticeWrapper,
  MainCardWrapper,
  MenuBarWrapper,
  MenuButton,
  ProfileDetailWrapper,
  ProfileImage,
  ProfileWrapper,
} from './style';

interface IProps {
  nickname?: string;
  image?: string;
  createdAt?: string;
  interest?: string[];
  good?: string;
  bad?: string;
  learn?: string;
  like: number;
  comments?: number;
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
  const history = useHistory();
  const userStatusData = useRecoilValue(userStatusState);
  const userData = useRecoilValue(userState);
  const [isOpenComment, setIsOpenComment] = useState(false);
  const [lookMoreButton, setLookMoreButton] = useState(true);
  const [isMenuBar, setIsMenuBar] = useState(true);
  const [isFoldComment, setIsFoldComment] = useState(true);
  const [isClosed, setIsClosed] = useState(false);
  const [countLikes, setCountLikes] = useState(like);
  const [myCommentList, setMyCommentList] = useState<ICommentData[] | null>(null);
  const [isCommentListFlag, setIsCommentListFlag] = useState<boolean>(false);
  const [userStateNum, setUserState] = useState(userStatusData ? userStatusData.userType : 0);
  const [userStateNickname, setUserStateNickname] = useState(userData ? userData.nickname : 0);
  const [isMine, setIsMine] = useState(false);
  const [likeRender, setLikeRender] = useState(isLike);
  const [scrapRender, setScrapRender] = useState(isScrap);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isConfirmLoginModal, setIsConfirmLoginModal] = useState(false);

  const getCommentList = useCallback(async () => {
    if (userStatusData) {
      const data = await getChallengeContent(id, userStatusData.token);
      data && setMyCommentList(data.comments);
    }
  }, [id, userStatusData]);

  useEffect(() => {
    getCommentList();
  }, [isCommentListFlag, getCommentList]);

  useEffect(() => {
    setIsMine(nickname === userStateNickname);
    document.body.style.overflow = isDeleteModalOpen === true ? 'hidden' : 'unset';
  }, [isDeleteModalOpen, nickname, userStateNickname]);

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

  const submitScarp = async () => {
    if (userStatusData) {
      const token = userStatusData.token;
      const submitSuccess = await ChallengeScrap(token, id);
      if (submitSuccess) {
        setScrapRender(true);
      }
    }
  };

  const cancelScrap = async () => {
    if (userStatusData) {
      const token = userStatusData.token;
      const cancelSuccess = await CancelChallengeScrap(token, id);
      if (cancelSuccess) {
        setScrapRender(false);
      }
    }
  };

  // userState상태 :
  // 0: 비회원,
  // 1: 챌린지안하는유저 (기간은 신청기간 중)
  // 2: 챌린지 안하는 유저 (기간은 신청기간이 아님)
  // 3: 챌린지 하는 유저 (기간은 챌린지 중)
  // 4: 관리자

  return (
    <>
      <Container>
        <MainCardWrapper>
          <div>
            <ProfileImage src={image} />
            <ProfileWrapper>
              <div>
                <ProfileDetailWrapper>
                  <h3>{nickname}</h3>
                  <h4>{dayjs(createdAt).format('MM.DD')}</h4>
                </ProfileDetailWrapper>
                {userStateNum === 0 || userStateNum === 1 || userStateNum === 2 || isMine === false ? (
                  scrapRender === false ? (
                    <MenuBarWrapper>
                      <MenuButton>
                        <img
                          src={GrayScrapIcon}
                          alt=""
                          onClick={() => {
                            submitScarp();
                            userStateNum === 0 ? setIsConfirmLoginModal(true) : setIsConfirmLoginModal(false);
                          }}
                        />
                      </MenuButton>
                    </MenuBarWrapper>
                  ) : (
                    <MenuBarWrapper>
                      <MenuButton>
                        <img
                          src={ColorScrapIcon}
                          alt=""
                          onClick={() => {
                            cancelScrap();
                            userStateNum === 0 ? setIsConfirmLoginModal(true) : setIsConfirmLoginModal(false);
                          }}
                        />
                      </MenuButton>
                    </MenuBarWrapper>
                  )
                ) : isMenuBar === false ? (
                  <DeleteBar>
                    <DeleteEditCardButton
                      onClick={() => {
                        setIsDeleteModalOpen(true);
                      }}
                    >
                      <img src={DeleteIcon} alt="" />
                    </DeleteEditCardButton>
                    <DeleteEditCardButton
                      onClick={() => {
                        history.push(`/challenge/edit/${id}`);
                      }}
                    >
                      <img src={EditIcon} alt="" />
                    </DeleteEditCardButton>
                  </DeleteBar>
                ) : (
                  <MenuBarWrapper>
                    <MenuButton>
                      <img
                        src={MenuBarIcon}
                        alt=""
                        onClick={() => {
                          setIsMenuBar(false);
                        }}
                      />
                    </MenuButton>
                  </MenuBarWrapper>
                )}
              </div>
              {interest &&
                interest.map((item, id) => {
                  return <InterestTag key={id}>#{item}</InterestTag>;
                })}
            </ProfileWrapper>
            <div>
              <FormDetailWrapper>
                <h1>잘한점</h1>
                {isClosed === true ? <h5>{good}</h5> : <h2>{good}</h2>}
              </FormDetailWrapper>
              <FormDetailWrapper>
                <h1>못한점</h1>
                {isClosed === true ? <h5>{bad}</h5> : <h2>{bad}</h2>}
              </FormDetailWrapper>
              <FormDetailWrapper>
                <h1>배운점</h1>
                {isClosed === true ? <h5>{learn}</h5> : <h2>{learn}</h2>}
              </FormDetailWrapper>
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
                        userStateNum === 0 ? setIsConfirmLoginModal(true) : setIsConfirmLoginModal(false);
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
                        userStateNum === 0 ? setIsConfirmLoginModal(true) : setIsConfirmLoginModal(false);
                      }
                    }}
                    alt=""
                  />
                )}
                <h2>{countLikes}</h2>
                <img src={CommentCountIcon} alt="" />
                <h2>{comments}</h2>
              </IconWrapper>
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
            </div>
          </div>
        </MainCardWrapper>
      </Container>
      <DeleteModal
        isDeleteModalOpen={isDeleteModalOpen}
        setIsDeleteModalOpen={setIsDeleteModalOpen}
        onClickDeleteButton={deleteClickHandler}
      />
      <Modal isOpen={isConfirmLoginModal} setIsOpen={setIsConfirmLoginModal} isBlur={true}>
        <LoginModalWrapper>
          <LoginNoticeWrapper>
            <img src={LoginAlertIcon} alt=""></img>
            <h1>앗!</h1>
            <p>로그인이 필요한 서비스입니다</p>
          </LoginNoticeWrapper>
          <LoginButtonWrapper>
            <CancelButton
              onClick={() => {
                setIsConfirmLoginModal(false);
              }}
            >
              취소
            </CancelButton>
            <DeleteButton
              onClick={() => {
                history.push('/login');
              }}
            >
              로그인하기
            </DeleteButton>
          </LoginButtonWrapper>
        </LoginModalWrapper>
      </Modal>
    </>
  );
}

export default ChallengeDetailCard;
