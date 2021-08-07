import {
  deleteConcertLike,
  deleteConcertScrap,
  getConcertData,
  getConcertUserData,
  postConcertLike,
  postConcertScrap,
} from 'apis';
import React, { useCallback, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { useRecoilValue } from 'recoil';
import { userStatusState } from 'stores/user';
import { IConcert } from 'types/concert.type';
import ConcertDetailTemplate from './template';

interface MatchParams {
  id: string;
}

function ConcertDetail({ match }: RouteComponentProps<MatchParams>): React.ReactElement {
  const { id } = match.params;
  const [concert, setConcert] = useState<IConcert | null>(null);
  const [commentList, setCommentList] = useState([]);
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
  }, [id, userStatusData]);

  useEffect(() => {
    getConcertContent();
  }, [isRerender, getConcertContent]);

  const onLike = async () => {
    if (userStatusData) {
      const postLike = await postConcertLike(userStatusData.token, id);
      if (postLike === true) {
        await deleteConcertLike(userStatusData.token, id);
        setIsRerender(!isRerender);
      }
      setIsRerender(!isRerender);
    } else {
      setIsLoginModalOpen(true);
    }
  };
  const onScrap = async () => {
    if (userStatusData) {
      const postScrap = await postConcertScrap(userStatusData.token, id);
      if (postScrap === true) {
        await deleteConcertScrap(userStatusData.token, id);
        setIsRerender(!isRerender);
      }
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
