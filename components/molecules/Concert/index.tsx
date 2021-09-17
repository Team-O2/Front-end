import { Img, Link } from 'components/atoms';
import { ThumbnailCommentIcon, ThumbnailLikeIcon } from 'public/assets/images';
import React from 'react';
import { getTimeForToday } from 'utils';
import {
  ConcertWrapper,
  Content,
  Info,
  ThumbnailContainer,
  ThumbnailIcon,
  ThumbnailInfo,
  ThumbnailOverlay,
} from './style';

interface IProps {
  imgThumbnail: string;
  authorNickname: string;
  interestList: string[];
  createdAt: string;
  title: string;
  text: string;
  commentNum: number;
  likeNum?: number;
  concertID?: number;
}

function Concert({
  imgThumbnail,
  authorNickname,
  interestList,
  createdAt,
  title,
  text,
  commentNum,
  likeNum,
  concertID,
}: IProps): React.ReactElement {
  const interestDivide = interestList?.join(' | ');

  return (
    <Link to={`/concert/${concertID}`}>
      <ConcertWrapper>
        <Info>
          <p>{authorNickname}</p>
          <p>{interestDivide}</p>
          <p>{getTimeForToday(createdAt)}</p>
        </Info>
        <Content>
          <p>{title}</p>
          <p dangerouslySetInnerHTML={{ __html: `${text}` }} />
        </Content>
        <ThumbnailContainer>
          <img src={imgThumbnail} alt="" />
          <ThumbnailOverlay>
            <ThumbnailInfo>
              {likeNum === undefined ? (
                <div></div>
              ) : (
                <>
                  <ThumbnailIcon>
                    <Img src={ThumbnailLikeIcon} alt="" />
                  </ThumbnailIcon>
                  <p> {likeNum}</p>
                </>
              )}
              <ThumbnailIcon>
                <Img src={ThumbnailCommentIcon} alt="" />
              </ThumbnailIcon>
              <p> {commentNum}</p>
            </ThumbnailInfo>
          </ThumbnailOverlay>
        </ThumbnailContainer>
      </ConcertWrapper>
    </Link>
  );
}

export default Concert;
