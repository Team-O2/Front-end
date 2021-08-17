import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import { ThumbnailCommentIcon, ThumbnailLikeIcon } from 'public/assets/images';
import React from 'react';
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
  concertID?: string;
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
    <Link
      href={{
        pathname: `/concert/${concertID}`,
      }}
      passHref
    >
      <ConcertWrapper>
        <Info>
          <p>{authorNickname}</p>
          <p>{interestDivide}</p>
          <p>{`${dayjs(createdAt).format('YY.MM.DD')}`}</p>
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
                    <Image src={ThumbnailLikeIcon} alt="" />
                  </ThumbnailIcon>
                  <p> {likeNum}</p>
                </>
              )}
              <ThumbnailIcon>
                <Image src={ThumbnailCommentIcon} alt="" />
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