import LikeIconFilled from 'assets/images/heart_filled.svg';
import Button from 'components/atoms/Button';
import dayjs from 'dayjs';
import {
  CancelChallengeLike,
  CancelChallengeScrap,
  ChallengeLike,
  ChallengeScrap,
  DeleteChallenge,
  getChallengeContent,
} from 'libs/getChallenge';
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useRecoilState } from 'recoil';
import { userState, userStatusState } from 'stores/user';
import Styled from 'styled-components';
import ColorScrapIcon from '../../../assets/images/color_scrapIcon.svg';
import CommentCount from '../../../assets/images/commentIcon.svg';
import DeleteIcon from '../../../assets/images/deleteIcon.svg';
import EditIcon from '../../../assets/images/editIcon.svg';
import ClickGood from '../../../assets/images/heartIcon.svg';
import LoginAlert from '../../../assets/images/loginAlert.svg';
import MenuBar from '../../../assets/images/menu_bar.svg';
import ScrapIcon from '../../../assets/images/scrapIcon.svg';
import Modal from '../../atoms/Modal';
import ChallengeComment from '../ChallengeComment';
import DeleteModal from '../DeleteModal';

export interface ICommentData {
  childrenComment: {
    _id: string;
    userID: {
      img: string;
      _id: string;
      nickname: string;
    };
    text: string;
  }[];
  _id: string;
  userID: {
    img: string;
    _id: string;
    nickname: string;
  };
  text: string;
}

interface IProps {
  nickname?: string;
  image?: string;
  createdAt?: string;
  interest?: string[];
  good?: string;
  bad?: string;
  learn?: string;
  like: number;
  commentlist: string[];
  comments?: number;
  isLike?: boolean;
  isScrap?: boolean;
  id: string;
  onChange: (value?: number) => void;
}

function ViewListCard({
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
  commentlist,
  id,
  onChange,
}: IProps): React.ReactElement {
  const history = useHistory();
  const [userStatusData, setUserStatusData] = useRecoilState(userStatusState);
  const [userData, setUserData] = useRecoilState(userState);
  const [isOpenComment, setIsOpenComment] = useState(false);
  const [lookMoreButton, setLookMoreButton] = useState(true);
  const [IsCommentButton, setIsCommentButton] = useState(true);
  const [IsMenuBar, setIsMenuBar] = useState(true);
  const [IsFoldComment, setIsFoldComment] = useState(true);
  const [closed, setClosed] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [countLikes, setCountLikes] = useState(like);
  const [myCommentList, setMyCommentList] = useState<ICommentData[] | null>(null);
  const [commentListFlag, setCommentListFlag] = useState<boolean>(false);
  const [userStateNum, setUserState] = useState(userStatusData ? userStatusData.userType : 0);
  const [confirmLoginModal, setConfirmLoginModal] = useState(false);
  const [userStateNickname, setUserStateNickname] = useState(userData ? userData.nickname : 0);
  const [isMine, setIsMine] = useState(false);
  const [likeRender, setLikeRender] = useState(isLike);

  const getCommentList = useCallback(async () => {
    if (userStatusData) {
      const data = await getChallengeContent(id, userStatusData.token);
      data && setMyCommentList(data.comments);
    }
  }, [id, userStatusData]);

  useEffect(() => {
    getCommentList();
  }, [commentListFlag, getCommentList]);

  useEffect(() => {
    setIsMine(nickname === userStateNickname);
    document.body.style.overflow = deleteModalOpen === true ? 'hidden' : 'unset';
  }, [deleteModalOpen, nickname, userStateNickname]);

  const deleteClickHandler = async () => {
    if (userStatusData) {
      const token = userStatusData?.token;
      const data = await DeleteChallenge(id, token);
      data && setDeleteModalOpen(false);
      onChange();
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
      await ChallengeScrap(token, id);
    }
  };

  const cancelScrap = async () => {
    if (userStatusData) {
      const token = userStatusData.token;
      await CancelChallengeScrap(token, id);
    }
  };

  // user상태 :
  // 0: 비회원,
  // 1: 챌린지안하는유저 (기간은 신청기간 중)
  // 2: 챌린지 안하는 유저 (기간은 신청기간이 아님)
  // 3: 챌린지 하는 유저 (기간은 챌린지 중)
  // 4: 관리자

  return (
    <>
      <SViewListCard>
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
                    isScrap === false ? (
                      <div className="menu__bar">
                        <Button className="menuIcon">
                          <img
                            src={ScrapIcon}
                            alt=""
                            onClick={() => {
                              submitScarp();
                              userStateNum === 0 ? setConfirmLoginModal(true) : setConfirmLoginModal(false);
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
                              userStateNum === 0 ? setConfirmLoginModal(true) : setConfirmLoginModal(false);
                            }}
                          />
                        </Button>
                      </div>
                    )
                  ) : IsMenuBar === false ? (
                    <div className="delete_bar">
                      <Button
                        className="delete_icon"
                        onClick={() => {
                          setDeleteModalOpen(true);
                        }}
                      >
                        <img src={DeleteIcon} alt="" />
                      </Button>
                      <Button
                        className="edit_icon"
                        onClick={() => {
                          history.push(`/edit/${id}`);
                        }}
                      >
                        <img src={EditIcon} alt="" />
                      </Button>
                    </div>
                  ) : (
                    <div className="menu__bar">
                      <Button className="menuIcon">
                        <img
                          src={MenuBar}
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
                  {closed === true ? (
                    <p className="view__content">{good}</p>
                  ) : (
                    <p className="view__full_content">{good}</p>
                  )}
                </div>
                <div className="detail__view">
                  <h3 className="view__title">못한점</h3>
                  {closed === true ? (
                    <p className="view__content">{bad}</p>
                  ) : (
                    <p className="view__full_content">{bad}</p>
                  )}
                </div>
                <div className="detail__view">
                  <h3 className="view__title">배운점</h3>
                  {closed === true ? (
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
                        setClosed(true);
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
                        setClosed(false);
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
                      src={LikeIconFilled}
                      onClick={() => {
                        cancelLike();
                        {
                          userStateNum === 0 ? setConfirmLoginModal(true) : setConfirmLoginModal(false);
                        }
                      }}
                      alt=""
                    />
                  ) : (
                    <img
                      className="icon__click"
                      src={ClickGood}
                      onClick={() => {
                        submitLike();
                        {
                          userStateNum === 0 ? setConfirmLoginModal(true) : setConfirmLoginModal(false);
                        }
                      }}
                      alt=""
                    />
                  )}
                  <p className="icon__count">{countLikes}</p>
                  <img className="icon__click" src={CommentCount} alt="" />
                  <p className="icon__count">{comments}</p>
                </div>
                {isOpenComment === false ? (
                  <button
                    className="comment_button"
                    onClick={() => {
                      setIsOpenComment(true);
                      setIsCommentButton(false);
                      getCommentList();
                    }}
                  >
                    댓글 펼치기
                  </button>
                ) : (
                  <div>
                    {IsFoldComment === false ? null : (
                      <ChallengeComment
                        commentList={myCommentList}
                        challengeID={id}
                        commentListFlag={commentListFlag}
                        setCommentListFlag={setCommentListFlag}
                      />
                    )}
                    <button
                      className="comment__card-fold"
                      onClick={() => {
                        setIsOpenComment(false);
                        setIsCommentButton(false);
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
          isDeleteModalOpen={deleteModalOpen}
          setIsDeleteModalOpen={setDeleteModalOpen}
          onClickDeleteButton={deleteClickHandler}
        />
        <Modal isOpen={confirmLoginModal} setIsOpen={setConfirmLoginModal} isBlur={true}>
          <div className="delete">
            <div className="delete__notice">
              <img className="delete__img" src={LoginAlert} alt=""></img>
              <p className="delete__title">앗!</p>
              <p className="delete__detail">로그인이 필요한 서비스입니다</p>
            </div>
            <div className="login__button">
              <Button
                className="delete__cancel"
                onClick={() => {
                  setConfirmLoginModal(false);
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
      </SViewListCard>
    </>
  );
}

const SViewListCard = Styled.div`
.container{
  padding-top: 60px;
}
.detail{
    position: relative;
    align-items: center;
    margin: 0 auto;
    border-radius: 18px;
    box-shadow: 0px 0px 24px rgba(13, 12, 63, 0.1);
    background: #FFFFFF;
    padding-top:40px;
    width : 844px;
    &__image{
        margin: 0 15px 0px 30px;
        border: solid 1px var(--colors-grayscale-df-light-gray-1);
        border-radius: 40px 40px 40px 40px;
        background-color: var(--colors-grayscale-ff);
        width: 80px;
        height: 80px;
    }
}
.menu__bar{
    display:inline-block;
    padding-left: 0px;
}
.menuIcon{
    border:none;
    background-color:#FFFFFF;
}
.delete_bar{
    display:inline-block;

    
}
.delete_icon{
    display:inline-block;
    border:none;
    background-color:#FFFFFF;
}
.edit_icon{
    display:inline-block;
    border:none;
    background-color:#FFFFFF;
}
.profile{
    display:inline-block;
    width: calc( 100% - 140px);
    &__nickname{
        display:inline-block;
        margin-bottom: 10px;
        text-align: left;
        line-height: 1.33;
        letter-spacing: -0.5px;
        font-size: 24px;
        font-weight: bold;
    }
    &__time{
        display:inline-block;
        align-items: center;
        padding-left:10px;
        line-height: 21px;
        letter-spacing: -0.5px;
        color: #8B8B8B;
        font-size: 14px;
    }
    &__tag{
        display : inline-block;
        align-items: center;
        margin-right : 5px;
        line-height: 20px;
        color: #6F6F6F;
        font-size: 14px;
        font-weight: bold;
    }
}
.button{
    align-items: center;
    margin: 0 auto;
    padding: 50px 385px 0px 385px;

}
.more_button{
    border:0;
    background: #FFFFFF;
    letter-spacing: -0.5px;
    color: #03B6CE;
    font-size: 18px;
    font-weight: bold;
}
.fold_button{
    border:0;
    background: #FFFFFF;
    letter-spacing: -0.5px;
    color: #03B6CE;
    font-size: 18px;
    font-weight: bold;
}
.comment_button{
    top: 544px;
    left: 0px;
    align-items: center;
    border-radius: 0px 0px 18px 18px;
    background: #3D3D3D;
    width: 844px;
    height: 63px;
    text-align: center;
    line-height: 22px;
    letter-spacing: -0.5px;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: bold;
}
.detail__view{
    padding: 30px 30px 0 60px;
}
.view__title{
    text-align: left;
    line-height: 1.38;
    letter-spacing: -0.5px;
    font-size: 16px;
    font-weight: bold;
}
.view__content{
    width:724px;
    max-height: 100%;
    text-align: left;
    line-height: 1.5;
    letter-spacing: -0.5px;
    font-size: 16px;
}
.view__full_content{
    width:724px;
    overflow:hidden;
    text-align: left;
    text-overflow:ellipsis;
    line-height: 1.5;
    letter-spacing: -0.5px;
    white-space:nowrap;
    font-size: 16px;
    
}
.icon{
    padding: 33px 620px 0px 30px; 
    padding-bottom:50px;
    &__click{
        display:inline-block;
        width: 24px;
        height:24px;
    }
    &__count{
        display:inline-block;
        margin: 4px 0 3.2px 8px;
        width: 60px;
        font-size: 18px;
    }
}
.comment__card-fold{
    border-radius: 0px 0px 18px 18px;
    background: #3D3D3D;
    width: 844px;
    height: 63px;
    line-height: 22px;
    letter-spacing: -0.5px;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: bold;
}


.delete {
  position: fixed;
  top:0;
  right:0;
  bottom:0;
  left:0;
  margin:auto;
  border-radius: 16px;
  background-color: #FFFFFF;
  width: 500px;
  height: 312px;
  &__notice{
    padding: 0px 80px 0px 80px;
  }

  &__img{
    display:flex;
    margin:auto;
    margin-top:-40px;

  }
  &__title{
    padding:20px 0px 20px 0px;
    text-align: center;
    line-height: 1.42;
    letter-spacing: -0.5px;
    color: #000000;
    font-size: 48px;
    font-weight: bold;
  }
  &__detail{
    text-align: center;
    line-height: 1.5;
    letter-spacing: -0.5px;
    color: var(--colors-grayscale-0-d-black);
    font-size: 16px;
  }
  &__delete{
    padding-left:170px;
    line-height: 1.33;
    letter-spacing: -0.5px;
    color: #03B6CE;
    font-size: 18px;
    font-weight: bold;;

  }
  &__cancel{
    line-height: 1.33;
    letter-spacing: -0.5px;
    color: #C1C1C1;
    font-size: 18px;
    font-weight: bold;
  }
}
.login__button{
  padding-top:70px;
  text-align: center;
}
.profile__detail{
  display:inline-block;
  width: calc(100% - 70px);
}
`;

export default ViewListCard;
