import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import Button from 'components/atoms/Button';
import Modal from '../../atoms/Modal/index';
import ClickGood from '../../../assets/images/heartIcon.svg';
import CommentCount from '../../../assets/images/commentIcon.svg';
import DeleteIcon from '../../../assets/images/deleteIcon.svg';
import EditIcon from '../../../assets/images/editIcon.svg';
import MenuBar from '../../../assets/images/menu_bar.svg';
import DeleteModal from '../../../assets/images/delete_modal.png';

interface IProps {
  nickname?: string;
  time?: string;
  tag?: string;
  content1?: string;
  content2?: string;
  content3?: string;
  countGood?: number;
  countCommit?: number;
  image?: string;
  profile_image?: any;
  comment?: string;
  recomment?: string;
  placeholder?: string;
  className?: string;
  challengeData?: any;
}

function ViewListCard({
  nickname,
  time,
  tag,
  content1,
  content2,
  content3,
  countGood,
  countCommit,
  image,
  profile_image,
  comment,
  recomment,
  challengeData,
}: IProps) {
  const [isOpenComment, setIsOpenComment] = useState(false);
  const [lookMoreButton, setLookMoreButton] = useState(true);
  const [IsCommentButton, setIsCommentButton] = useState(true);
  const [IsMenuBar, setIsMenuBar] = useState(true);
  const [IsFoldComment, setIsFoldComment] = useState(true);
  const [IsFoldRecomment, setIsFoldRecomment] = useState(true);
  const [closed, setClosed] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  if (deleteModalOpen === true) {
    document.body.style.overflow = 'hidden';
  } else document.body.style.overflow = 'unset';

  return (
    <>
      <SViewListCard>
        <div className="container">
          <div className="detail">
            <div>
              <img
                className="detail__image"
                src="https://mblogthumb-phinf.pstatic.net/MjAyMDA2MjBfMjQ5/MDAxNTkyNjIzNTA3NjIz.bTrVaHFL6fy7V4X5PWL7EFxecY-NUC497LMcP6R-bJkg.POQkqqJjuUgI6iEBMnuwTKu3TgFYvZIKm6-TnVMOgzcg.JPEG.jdawoon09/IMG_8393.JPG?type=w800"
              />
              <div className="profile">
                <div className="profile__sub">
                  <div className="profile__nickname">{nickname}</div>
                  <p className="profile__time">{time}</p>
                  {IsMenuBar === false ? (
                    <div className="delete_bar">
                      <Button
                        className="delete_icon"
                        onClick={() => {
                          setDeleteModalOpen(true);
                        }}
                      >
                        <img src={DeleteIcon} alt="" />
                      </Button>
                      <Button className="edit_icon">
                        <Link to="/edit">
                          <img src={EditIcon} alt="" />
                        </Link>
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
                <div className="profile__tag">{tag}</div>
              </div>
              <div className="text">
                <div className="detail__view">
                  <h3 className="view__title">잘한점</h3>
                  {closed === true ? (
                    <p className="view__content">{content1}</p>
                  ) : (
                    <p className="view__full_content">{content1}</p>
                  )}
                </div>
                <div className="detail__view">
                  <h3 className="view__title">못한점</h3>
                  {closed === true ? (
                    <p className="view__content">{content2}</p>
                  ) : (
                    <p className="view__full_content">{content2}</p>
                  )}
                </div>
                <div className="detail__view">
                  <h3 className="view__title">배운점</h3>
                  {closed === true ? (
                    <p className="view__content">{content3}</p>
                  ) : (
                    <p className="view__full_content">{content3}</p>
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
                  <img className="icon__click" src={ClickGood} alt="" />
                  <p className="icon__count">{countGood}</p>
                  <img className="icon__click" src={CommentCount} alt="" />
                  <p className="icon__count">{countCommit}</p>
                </div>
                {isOpenComment === false ? (
                  <button
                    className="comment_button"
                    onClick={() => {
                      setIsOpenComment(true);
                      setIsCommentButton(false);
                    }}
                  >
                    댓글 펼치기
                  </button>
                ) : (
                  <div>
                    {IsFoldComment === false ? null : (
                      <div className="comment">
                        <div className="comment__sub">
                          <div className="comment__text">
                            <textarea className="comment__textarea" placeholder="ㅣ댓글을 입력해 주세요."></textarea>
                          </div>
                          <div className="comment__button-submit">
                            <button className="comment__submit">댓글작성</button>
                          </div>
                        </div>
                        <div className="user">
                          <img
                            className="user__image"
                            src="https://mblogthumb-phinf.pstatic.net/MjAyMDA2MjBfMjQ5/MDAxNTkyNjIzNTA3NjIz.bTrVaHFL6fy7V4X5PWL7EFxecY-NUC497LMcP6R-bJkg.POQkqqJjuUgI6iEBMnuwTKu3TgFYvZIKm6-TnVMOgzcg.JPEG.jdawoon09/IMG_8393.JPG?type=w800"
                          ></img>
                          <h4 className="user__nickname">{nickname}</h4>
                          <p className="user__comment">{comment}</p>
                          {IsFoldRecomment === true ? (
                            <button
                              className="comment__fold2"
                              onClick={() => {
                                setIsFoldRecomment(false);
                              }}
                            >
                              답글보기
                            </button>
                          ) : (
                            <button
                              className="comment__fold"
                              onClick={() => {
                                setIsFoldRecomment(true);
                              }}
                            >
                              접기
                            </button>
                          )}
                        </div>
                        {IsFoldRecomment === true ? null : (
                          <div>
                            <div className="recomment">
                              <div className="recomment__text">
                                <textarea
                                  className="recomment__textarea"
                                  placeholder="ㅣ댓글을 입력해 주세요."
                                ></textarea>
                              </div>
                              <div className="recomment__button-submit">
                                <button className="recomment__submit">답글작성</button>
                              </div>
                            </div>
                            <div className="recomment__user">
                              <img
                                className="recomment__user-image"
                                src="https://mblogthumb-phinf.pstatic.net/MjAyMDA2MjBfMjQ5/MDAxNTkyNjIzNTA3NjIz.bTrVaHFL6fy7V4X5PWL7EFxecY-NUC497LMcP6R-bJkg.POQkqqJjuUgI6iEBMnuwTKu3TgFYvZIKm6-TnVMOgzcg.JPEG.jdawoon09/IMG_8393.JPG?type=w800"
                              ></img>
                              <h4 className="recomment__user-nickname">{nickname}</h4>
                              <p className="recomment__user-comment">{recomment}</p>
                            </div>
                          </div>
                        )}
                      </div>
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
        <Modal isOpen={deleteModalOpen} setIsOpen={setDeleteModalOpen} isBlur={true}>
          <div className="delete">
            <div className="delete__notice">
              <img className="delete__img" src={DeleteModal} alt=""></img>
              <div className="delete__title">잠깐!</div>
              <div className="delete__detail">삭제된 글은 복구가 불가능합니다.</div>
              <div className="delete__detail">글을 삭제하시겠어요?</div>
            </div>
            <div className="delete__button">
              <Button
                className="delete__cancel"
                onClick={() => {
                  setDeleteModalOpen(false);
                }}
              >
                취소
              </Button>
              <Button className="delete__delete">삭제</Button>
            </div>
          </div>
        </Modal>
      </SViewListCard>
    </>
  );
}

const SViewListCard = Styled.div`

.container{
    padding-top: 96px;
}
.detail{
    padding-top:40px;
    position: relative;
    margin: 0 auto;
    align-items: center;
    width : 844px;
    background: #FFFFFF;
    box-shadow: 0px 0px 24px rgba(13, 12, 63, 0.1);
    border-radius: 18px;
    &__image{
        width: 80px;
        height: 80px;
        border-radius: 40px 40px 40px 40px;
        margin: 0 15px 0px 30px;
        border: solid 1px var(--colors-grayscale-df-light-gray-1);
        background-color: var(--colors-grayscale-ff);
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
    border:none;
    display:inline-block;
    background-color:#FFFFFF;
}
.edit_icon{
    border:none;
    display:inline-block;
    background-color:#FFFFFF;
}
.profile{
    display:inline-block;
    &__nickname{
        margin-bottom: 10px;
        display:inline-block;
        font-size: 24px;
        font-weight: bold;
        line-height: 1.33;
        letter-spacing: -0.5px;
        text-align: left;
    }
    &__time{
        display:inline-block;
        padding-left:10px;
        font-size: 14px;
        line-height: 21px;
        align-items: center;
        letter-spacing: -0.5px;
        color: #8B8B8B;
    }
    &__tag{
        font-weight: bold;
        font-size: 14px;
        line-height: 20px;
        align-items: center;
        color: #6F6F6F;
    }
}
.button{
    align-items: center;
    margin: 0 auto;
    padding: 50px 385px 0px 385px;

}
.more_button{
    font-weight: bold;
    font-size: 18px;
    letter-spacing: -0.5px;
    color: #03B6CE;
    background: #FFFFFF;
    border:0;
}
.fold_button{
    font-weight: bold;
    font-size: 18px;
    letter-spacing: -0.5px;
    color: #03B6CE;
    background: #FFFFFF;
    border:0;
}
.comment_button{
    width: 844px;
    height: 63px;
    left: 0px;
    top: 544px;
    background: #3D3D3D;
    border-radius: 0px 0px 18px 18px;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    align-items: center;
    text-align: center;
    letter-spacing: -0.5px;
    color: #FFFFFF;
}
.detail__view{
    padding: 30px 30px 0 60px;
}
.view__title{
    font-size: 16px;
    font-weight: bold;
    line-height: 1.38;
    letter-spacing: -0.5px;
    text-align: left;
}
.view__content{
    max-height: 100%;
    width:724px;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: -0.5px;
    text-align: left;
}
.view__full_content{
    width:724px;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: -0.5px;
    text-align: left;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    
}
.icon{
    padding: 33px 620px 0px 30px; 
    padding-bottom:50px;
    &__click{
        display:inline-block
        width: 24px;
        height:24px;
    }
    &__count{
        display:inline-block;
        width: 60px;
        margin: 4px 0 3.2px 8px;
        font-size: 18px;
    }
}
.comment__card-fold{
    background: #3D3D3D;
    border-radius: 0px 0px 18px 18px;
    width: 844px;
    height: 63px;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.5px;
    color: #FFFFFF;
}
.comment{
    &__sub{
        display: flex;
        flex-direction:column;
        align-items: flex-end;
    }
    &__text{
        text-align:center;
        margin: 0 auto;
    }
    &__textarea{
        width: 724px;
        height: 110px;
        margin: 0 0 8px;
        font-size: 16px;
        padding: 15px 15px 71px;
        opacity: 0.5;
    }
    &__button-submit{
        padding-right:54px;
    }
    &__submit{
        font-weight: bold;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: -0.5px;
        color: #555555;
        border:none;
        background-color:#FFFFFF;
    }
}
.user{
    width: 724px;
    height: 110px;
    align-items: center;
    margin: 0 auto;
    padding-top:61px;
    &__image{
        width: 28px;
        height: 28px;
        display:inline-block;
        border-radius: 18px 18px 18px 18px;
        margin: 5px 13px 0px 0;
        background-color: #777777;
    }
    &__nickname{
        width:81px;
        height:22px;
        margin: 3px 8px 24px 0px;
        display:inline-block;
        font-weight: bold;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: -0.5px;
        color: #0D0D0D;
    }
    &__comment{
        display:inline-block;
        width: 527px;
        height:48px;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.5px;
        color: #6F6F6F;
    }
}
.comment__fold{
    font-weight: bold;
    padding-left:34px;
    font-size: 14px;
    letter-spacing: -0.5px;
    color: #36C8F5;
    border:none;
    background-color: #FFFFFF;
}
.comment__fold2{
    display:inline-block;
    font-weight: bold;
    font-size: 14px;
    letter-spacing: -0.5px;
    color: #36C8F5;
    border:none;
    background-color: #FFFFFF;
}
.recomment{
    display: flex;
    flex-direction:column;
    align-items: flex-end;
    padding-right: 60px;
    
    &__text{
        text-align:center;
        padding-left:140px;
    }
    &__textarea{
        width: 594px;
        height: 54px;
        font-size: 16px;
        padding: 15px;
        opacity: 0.5;
        margin: 0 0 8px;
    }
    &__submit{
        font-weight: bold;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.5px;
        color: #555555;
        border: none;
        background-color: #FFFFFF;
    }
    &__user{
        padding-left: 190px;
        padding-bottom:40px;

        &-image{
            display:inline-block;
            width: 26px;
            height: 26px; 
            border-radius: 18px 18px 18px 18px;
        }
        &-nickname{
            display:inline-block;
            padding: 30px 22px 20px 10px;
            font-weight: bold;
            font-size: 16px;
            line-height: 22px;
            letter-spacing: -0.5px;
            color: #0D0D0D;
        }
        &-comment{
            display: inline-block;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: -0.5px;
            color: #6F6F6F;
        }
    }
}

.delete{
  position: fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  margin:auto;
  width: 500px;
  height: 312px;
  border-radius: 16px;
  background-color: #FFFFFF;

  &__notice{
    padding: 0px 80px 0px 80px;
  }

  &__img{
    display:flex;
    margin:auto;
    margin-top:-40px;

  }
  &__title{
    font-size: 48px;
    font-weight: bold;
    line-height: 1.42;
    letter-spacing: -0.5px;
    text-align: center;
    color: #000000;
    padding:20px 0px 20px 0px;
  }
  &__detail{
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: -0.5px;
    text-align: center;
    color: var(--colors-grayscale-0-d-black);
  }
  &__button{
    padding-top:50px;
    text-align: center;

  }
  &__delete{
    padding-left:170px;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.33;
    letter-spacing: -0.5px;
    color: #C1C1C1;;

  }
  &__cancel{
    font-size: 18px;
    font-weight: bold;
    line-height: 1.33;
    letter-spacing: -0.5px;
    color: #E04747;

  }
}
`;

export default ViewListCard;
