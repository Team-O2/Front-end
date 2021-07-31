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
import { Button, Modal } from 'components/atoms';
import { ChallengeComment, DeleteModal } from 'components/molecules';
import dayjs from 'dayjs';
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useRecoilValue } from 'recoil';
import { userState, userStatusState } from 'stores/user';
import { ICommentData } from 'types/challenge.type';
import SChallengeDetailCard from './style';

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
      <SChallengeDetailCard>
        <div className="container">
          <div className="detail">
            <div>
              <img className="detail__image" src={image} />
              <div className="profile">
                <div className="profile__sub">
                  <div className="profile__detail">
                    <div className="profile__nickname">{nickname}</div>
                    <p className="profile__time">{dayjs(createdAt).format('MM.DD')}</p>
                  </div>
                  {userStateNum === 0 || userStateNum === 1 || userStateNum === 2 || isMine === false ? (
                    scrapRender === false ? (
                      <div className="menu__bar">
                        <Button className="menuIcon">
                          <img
                            src={GrayScrapIcon}
                            alt=""
                            onClick={() => {
                              submitScarp();
                              userStateNum === 0 ? setIsConfirmLoginModal(true) : setIsConfirmLoginModal(false);
                            }}
                          />
                        </Button>
                      </div>
                    ) : (
                      <div className="menu__bar">
                        <Button className="menuIcon">
                          <img
                            src={ColorScrapIcon}
                            alt=""
                            onClick={() => {
                              cancelScrap();
                              userStateNum === 0 ? setIsConfirmLoginModal(true) : setIsConfirmLoginModal(false);
                            }}
                          />
                        </Button>
                      </div>
                    )
                  ) : isMenuBar === false ? (
                    <div className="delete_bar">
                      <Button
                        className="delete_icon"
                        onClick={() => {
                          setIsDeleteModalOpen(true);
                        }}
                      >
                        <img src={DeleteIcon} alt="" />
                      </Button>
                      <Button
                        className="edit_icon"
                        onClick={() => {
                          history.push(`/challenge/edit/${id}`);
                        }}
                      >
                        <img src={EditIcon} alt="" />
                      </Button>
                    </div>
                  ) : (
                    <div className="menu__bar">
                      <Button className="menuIcon">
                        <img
                          src={MenuBarIcon}
                          alt=""
                          onClick={() => {
                            setIsMenuBar(false);
                          }}
                        />
                      </Button>
                    </div>
                  )}
                </div>
                {interest &&
                  interest.map((item, id) => {
                    return (
                      <p className="profile__tag" key={id}>
                        #{item}
                      </p>
                    );
                  })}
              </div>
              <div className="text">
                <div className="detail__view">
                  <h3 className="view__title">잘한점</h3>
                  {isClosed === true ? (
                    <p className="view__content">{good}</p>
                  ) : (
                    <p className="view__full_content">{good}</p>
                  )}
                </div>
                <div className="detail__view">
                  <h3 className="view__title">못한점</h3>
                  {isClosed === true ? (
                    <p className="view__content">{bad}</p>
                  ) : (
                    <p className="view__full_content">{bad}</p>
                  )}
                </div>
                <div className="detail__view">
                  <h3 className="view__title">배운점</h3>
                  {isClosed === true ? (
                    <p className="view__content">{learn}</p>
                  ) : (
                    <p className="view__full_content">{learn}</p>
                  )}
                </div>
                {lookMoreButton === true ? (
                  <div className="button">
                    <button
                      className="more_button"
                      onClick={() => {
                        setLookMoreButton(false);
                        setIsClosed(true);
                      }}
                    >
                      더보기
                    </button>
                  </div>
                ) : (
                  <div className="button">
                    <button
                      className="fold_button"
                      onClick={() => {
                        setLookMoreButton(true);
                        setIsClosed(false);
                      }}
                    >
                      접기
                    </button>
                  </div>
                )}
                <div className="icon">
                  {likeRender ? (
                    <img
                      className="icon__click"
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
                      className="icon__click"
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
                  <p className="icon__count">{countLikes}</p>
                  <img className="icon__click" src={CommentCountIcon} alt="" />
                  <p className="icon__count">{comments}</p>
                </div>
                {isOpenComment === false ? (
                  <button
                    className="comment_button"
                    onClick={() => {
                      setIsOpenComment(true);
                      getCommentList();
                    }}
                  >
                    댓글 펼치기
                  </button>
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
                    <button
                      className="comment__card-fold"
                      onClick={() => {
                        setIsOpenComment(false);
                      }}
                    >
                      댓글 접기
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <DeleteModal
          isDeleteModalOpen={isDeleteModalOpen}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
          onClickDeleteButton={deleteClickHandler}
        />
        <Modal isOpen={isConfirmLoginModal} setIsOpen={setIsConfirmLoginModal} isBlur={true}>
          <div className="delete">
            <div className="delete__notice">
              <img className="delete__img" src={LoginAlertIcon} alt=""></img>
              <p className="delete__title">앗!</p>
              <p className="delete__detail">로그인이 필요한 서비스입니다</p>
            </div>
            <div className="login__button">
              <Button
                className="delete__cancel"
                onClick={() => {
                  setIsConfirmLoginModal(false);
                }}
              >
                취소
              </Button>
              <Button
                className="delete__delete"
                onClick={() => {
                  history.push('/login');
                }}
              >
                로그인하기
              </Button>
            </div>
          </div>
        </Modal>
      </SChallengeDetailCard>
    </>
  );
}
export default ChallengeDetailCard;
