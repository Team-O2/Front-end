import LikeIconFilled from 'assets/images/heart_filled.svg';
import Button from 'components/atoms/Button';
import ChallengeComment from 'components/molecules/ChallengeComment';
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
import { userStatusState } from 'stores/user';
import Styled from 'styled-components';
import ColorScrapIcon from '../../../assets/images/color_scrapIcon.svg';
import CommentCount from '../../../assets/images/commentIcon.svg';
import DeleteIcon from '../../../assets/images/deleteIcon.svg';
import EditIcon from '../../../assets/images/editIcon.svg';
import ClickGood from '../../../assets/images/heartIcon.svg';
import MenuBar from '../../../assets/images/menu_bar.svg';
import ScrapIcon from '../../../assets/images/scrapIcon.svg';
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
  like?: number;
  commentlist: string[];
  comments?: number;
  scrap?: number;
  id: string;
  reRenderFlag: boolean;
  setReRenderFlag: (value: boolean) => void;
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
  comments,
  commentlist,
  scrap,
  id,
  reRenderFlag,
  setReRenderFlag,
}: IProps): React.ReactElement {
  const history = useHistory();
  const [userStatusData, setUserStatusData] = useRecoilState(userStatusState);
  const [isOpenComment, setIsOpenComment] = useState(false);
  const [lookMoreButton, setLookMoreButton] = useState(true);
  const [IsCommentButton, setIsCommentButton] = useState(true);
  const [IsMenuBar, setIsMenuBar] = useState(true);
  const [IsFoldComment, setIsFoldComment] = useState(true);
  const [closed, setClosed] = useState(false);
  const [scrapOpen, setScrap] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [userState, setUserState] = useState(userStatusData ? userStatusData.userType : 0);
  const [likes, setLikes] = useState(0);
  const [likeClick, setLikeClick] = useState(false);
  const [myCommentList, setMyCommentList] = useState<ICommentData[] | null>(null);
  const [commentListFlag, setCommentListFlag] = useState<boolean>(false);
  const [countScraps, setCountScraps] = useState(0);

  const getCommentList = useCallback(async () => {
    if (userStatusData) {
      const data = await getChallengeContent(id, userStatusData.token);
      data && setMyCommentList(data.comments);
    }
  }, [id, userStatusData]);

  useEffect(() => {
    getCommentList();
  }, [commentListFlag, getCommentList]);

  const deleteClickHandler = async () => {
    if (userStatusData) {
      const token = await userStatusData?.token;
      const data = await DeleteChallenge(id, token);
      data && setDeleteModalOpen(false);
      setReRenderFlag(!reRenderFlag);
    } else {
      alert('네트워크가 좋지 않습니다');
    }
  };

  const onClickLike = async () => {
    setLikeClick(!likeClick);
    if (userStatusData) {
      if (likeClick === true) {
        setLikes(likes - 1);
        const token = userStatusData.token;
        const data = await CancelChallengeLike(token, id);
      } else {
        setLikes(likes + 1);
        const token = userStatusData.token;
        const data = await ChallengeLike(token, id);
      }
    }
  };

  const submitScarp = async () => {
    if (userStatusData) {
      setScrap(true);
      setCountScraps(countScraps + 1);
      const token = userStatusData.token;
      const data = await ChallengeScrap(token, id);
    }
  };

  const cancelScrap = async () => {
    if (userStatusData) {
      setScrap(false);
      setCountScraps(countScraps - 1);
      const token = userStatusData.token;
      const data = await CancelChallengeScrap(token, id);
    }
  };

  if (deleteModalOpen === true) {
    document.body.style.overflow = 'hidden';
  } else document.body.style.overflow = 'unset';

  //user상태 :
  // 0: 비회원,
  // 1: 챌린지안하는유저,
  // 2: 챌린지하는유저,
  // 3: 챌린지하는유저&챌린지종료,
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
                  <div className="profile__nickname">{nickname}</div>
                  <p className="profile__time">{dayjs(createdAt).format('MM.DD')}</p>
                  {userState === 0 || userState === 1 ? (
                    scrapOpen === false ? (
                      <div className="menu__bar">
                        <Button className="menuIcon">
                          <img
                            src={ScrapIcon}
                            alt=""
                            onClick={() => {
                              submitScarp();
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
                  {likeClick ? (
                    <img className="icon__click" src={LikeIconFilled} onClick={onClickLike} alt="" />
                  ) : (
                    <img className="icon__click" src={ClickGood} onClick={onClickLike} alt="" />
                  )}
                  <p className="icon__count">{like}</p>
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
          onClickDeleteButton={() => {
            alert('글삭제 완료');
            setDeleteModalOpen(false);
          }}
        />
      </SViewListCard>
    </>
  );
}

const SViewListCard = Styled.div`
.container{
  padding-bottom:60px;
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
    padding-left: 520px;
}
.menuIcon{
    border:none;
    background-color:#FFFFFF;
}
.delete_bar{
    display:inline-block;
    padding-left: 480px;
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
`;

export default ViewListCard;
