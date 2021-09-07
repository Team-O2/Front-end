import { DetailTitle, LoginModal } from 'components/molecules';
import { CommentList, DetailContent } from 'components/organisms';
import React from 'react';
import { IConcertComment, IUserConcert } from 'types/concert.type';
import { ConcertDetailWrapper } from './detailstyle';
interface IProps {
  concert: IUserConcert | null;
  likeNum?: number;
  scrapNum?: number;
  onLike?: () => void;
  onScrap?: () => void;
  cancelLike?: () => void;
  cancelScrap?: () => void;
  isUserLike?: boolean;
  isUserScrap?: boolean;
  commentList: Array<IConcertComment>;
  isRerender: boolean;
  setIsRerender: (value: boolean) => void;
  isLoginModalOpen: boolean;
  setIsLoginModalOpen: (value: boolean) => void;
}
function ConcertDetailTemplate({
  concert,
  likeNum,
  scrapNum,
  onLike,
  onScrap,
  cancelLike,
  cancelScrap,
  isUserLike,
  isUserScrap,
  commentList,
  isRerender,
  setIsRerender,
  isLoginModalOpen,
  setIsLoginModalOpen,
}: IProps): React.ReactElement {
  return (
    <ConcertDetailWrapper>
      {concert && (
        <DetailTitle
          pageName="Share Together"
          title={concert.title}
          authorNickname={concert.authorNickname}
          createdAt={concert.createdAt}
          interestList={concert.interest}
        ></DetailTitle>
      )}
      {concert && (
        <DetailContent
          video={concert.videoLink}
          desc={concert.text}
          hashtag={concert.hashtag}
          likeNum={likeNum}
          commentNum={concert.commentNum}
          scrapNum={scrapNum}
          onLike={onLike}
          onScrap={onScrap}
          cancelLike={cancelLike}
          cancelScrap={cancelScrap}
          isUserLike={isUserLike}
          isUserScrap={isUserScrap}
        ></DetailContent>
      )}
      <CommentList
        commentList={commentList}
        concertID={concert?._id}
        isRerender={isRerender}
        setIsRerender={setIsRerender}
      ></CommentList>
      <LoginModal isLoginModalOpen={isLoginModalOpen} setIsLoginModalOpen={setIsLoginModalOpen} />
    </ConcertDetailWrapper>
  );
}

export default ConcertDetailTemplate;
