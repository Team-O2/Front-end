import {
  deleteConcertLike,
  deleteConcertScrap,
  getConcertData,
  getConcertUserData,
  postConcertLike,
  postConcertScrap,
} from 'apis';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import { IConcertComment, IUserConcert } from 'types/concert.type';
import ConcertDetailTemplate from '../../components/template/concert/detail';

function ConcertDetail(): React.ReactElement {
  const router = useRouter();
  const { id } = router.query;
  const [concert, setConcert] = useState<IUserConcert | null>(null);
  const [commentList, setCommentList] = useState<IConcertComment[]>([]);
  const [likeNum, setLikeNum] = useState(0);
  const [scrapNum, setScrapNum] = useState(0);
  const userStatusData = useRecoilValue(userStatusState);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isUserLike, setIsUserLike] = useState(false);
  const [isUserScrap, setIsUserScrap] = useState(false);
  const [isRerender, setIsRerender] = useState<boolean>(false);

  const getConcertContent = useCallback(async () => {
    if (userStatusData) {
      const data = await getConcertUserData(userStatusData.token, id);
      data && setConcert(data);
      data && setCommentList(data.comment);
      data && setLikeNum(data.likeNum);
      data && setScrapNum(data.scrapNum);
      data && setIsUserLike(data.isLike);
      data && setIsUserScrap(data.isScrap);
    } else {
      const data = await getConcertData(id);
      data && setConcert(data);
      data && setCommentList(data.comment);
      data && setLikeNum(data.likeNum);
      data && setScrapNum(data.scrapNum);
    }
  }, [id, userStatusData]);

  useEffect(() => {
    getConcertContent();
  }, [isRerender, getConcertContent]);

  const onLike = async () => {
    if (userStatusData) {
      await postConcertLike(userStatusData.token, id);
      setIsRerender(!isRerender);
    } else {
      setIsLoginModalOpen(true);
    }
  };
  const cancelLike = async () => {
    if (userStatusData) {
      await deleteConcertLike(userStatusData.token, id);
      setIsRerender(!isRerender);
    } else {
      setIsLoginModalOpen(true);
    }
  };
  const onScrap = async () => {
    if (userStatusData) {
      await postConcertScrap(userStatusData.token, id);
      setIsRerender(!isRerender);
    } else {
      setIsLoginModalOpen(true);
    }
  };
  const cancelScrap = async () => {
    if (userStatusData) {
      await deleteConcertScrap(userStatusData.token, id);
      setIsRerender(!isRerender);
    } else {
      setIsLoginModalOpen(true);
    }
  };

  return (
    <ConcertDetailTemplate
      concert={concert}
      likeNum={likeNum}
      scrapNum={scrapNum}
      onLike={onLike}
      onScrap={onScrap}
      cancelLike={cancelLike}
      cancelScrap={cancelScrap}
      isUserLike={isUserLike}
      isUserScrap={isUserScrap}
      commentList={commentList}
      isRerender={isRerender}
      setIsRerender={setIsRerender}
      isLoginModalOpen={isLoginModalOpen}
      setIsLoginModalOpen={setIsLoginModalOpen}
    ></ConcertDetailTemplate>
  );
}

export default ConcertDetail;
