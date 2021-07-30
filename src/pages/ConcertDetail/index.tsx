import {
  deleteConcertLike,
  deleteConcertScrap,
  getConcertData,
  getConcertUserData,
  postConcertLike,
  postConcertScrap,
} from 'apis';
import { LoginModal } from 'assets/images';
import { Button, Modal } from 'components/atoms';
import { DetailTitle } from 'components/molecules';
import { CommentList, DetailContent } from 'components/organisms';
import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import Styled from 'styled-components';

interface MatchParams {
  id: string;
}
interface IConcertData {
  videoLink: string;
  imgThumbnail: string;
  likes: number;
  commentNum: number;
  scrapNum: number;
  interest: string[];
  hashtag: string[];
  isDeleted: boolean;
  comments: string[];
  isNotice: boolean;
  _id: string;
  title: string;
  user: { _id: string; nickname: string; img: string };
  createdAt: string;
  text: string;
  authorNickname: string;
  updatedAt: string;
  __v: number;
}

function ConcertDetail({ match }: RouteComponentProps<MatchParams>): React.ReactElement {
  const { id } = match.params;
  const [concert, setConcert] = useState<IConcertData | null>(null);
  const [commentList, setCommentList] = useState([]);
  const [likeNum, setLikeNum] = useState(0);
  const [scrapNum, setScrapNum] = useState(0);
  const userStatusData = useRecoilValue(userStatusState);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [isUserLike, setIsUserLike] = useState(false);
  const [isUserScrap, setIsUserScrap] = useState(false);
  useEffect(() => {
    const getConcertList = async () => {
      if (userStatusData) {
        const data = await getConcertUserData(userStatusData.token, id);
        data && setConcert(data);
        data && setCommentList(data.comments);
        data && setLikeNum(data.likes);
        data && setScrapNum(data.scrapNum);
        data && setIsUserLike(data.isLike);
        data && setIsUserScrap(data.isScrap);
      } else {
        const data = await getConcertData(id);
        data && setConcert(data);
        data && setCommentList(data.comments);
        data && setLikeNum(data.likes);
        data && setScrapNum(data.scrapNum);
      }
    };
    getConcertList();
  }, [commentList, likeNum, scrapNum, id, userStatusData]);

  const reLoadComment = (newComment: any) => {
    setCommentList(commentList?.concat(newComment));
  };

  const onLike = async () => {
    if (userStatusData) {
      const postLike = await postConcertLike(userStatusData.token, id);
      if (postLike === true) {
        await deleteConcertLike(userStatusData.token, id);
      }
    } else {
      setLoginModalOpen(true);
    }
  };
  const onScrap = async () => {
    if (userStatusData) {
      const postScrap = await postConcertScrap(userStatusData.token, id);
      if (postScrap === true) {
        await deleteConcertScrap(userStatusData.token, id);
      }
    } else {
      setLoginModalOpen(true);
    }
  };

  return (
    <SShareTogetherDetail>
      <DetailTitle
        title={concert?.title}
        authorNickname={concert?.authorNickname}
        createdAt={concert?.createdAt}
        interestList={concert?.interest}
      ></DetailTitle>
      <DetailContent
        video={concert?.videoLink}
        desc={concert?.text}
        hashtag={concert?.hashtag}
        likeNum={likeNum}
        commentNum={concert?.commentNum}
        scrapNum={scrapNum}
        onLike={onLike}
        onScrap={onScrap}
        isUserLike={isUserLike}
        isUserScrap={isUserScrap}
      ></DetailContent>
      <CommentList commentList={commentList} concertID={concert?._id} reLoadComment={reLoadComment}></CommentList>
      <Modal isOpen={loginModalOpen} setIsOpen={setLoginModalOpen} isBlur={true}>
        <div className="login">
          <div className="login__notice">
            <img className="login__img" src={LoginModal} alt=""></img>
            <div className="login__title">앗!</div>
            <div className="login__detail">로그인이 필요한 서비스입니다</div>
          </div>
          <div className="login__button">
            <Button
              className="login__cancel"
              onClick={() => {
                setLoginModalOpen(false);
              }}
            >
              취소
            </Button>
            <Link to="/login">
              <Button className="login__login">로그인하기</Button>
            </Link>
          </div>
        </div>
      </Modal>
    </SShareTogetherDetail>
  );
}

const SShareTogetherDetail = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 845px;
  .login{
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
  &__button{
    padding-top:50px;
    text-align: center;
  }
  &__cancel{
    line-height: 1.33;
    letter-spacing: -0.5px;
    color:#c1c1c1;
    font-size: 18px;
    font-weight: bold;
  }
  &__login{
    padding-left:170px;
    line-height: 1.33;
    letter-spacing: -0.5px;
    color: #03b6ce;
    font-size: 18px;
    font-weight: bold;;
  }
}
`;
export default ConcertDetail;
