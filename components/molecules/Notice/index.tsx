import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import { ThumbnailCommentIcon, ThumbnailLikeIcon } from 'public/assets/images';
import React from 'react';
import { ConcertWrapper, Content, Info, ThumbnailContainer, ThumbnailInfo, ThumbnailOverlay } from './style';

interface IProps {
  imgThumbnail: string;
  authorNickname: string;
  interestList: string[];
  createdAt: string;
  title: string;
  text: string;
  commentNum: number;
  likeNum?: number;
  noticeID?: string;
}

function Notice({
  imgThumbnail,
  authorNickname,
  interestList,
  createdAt,
  title,
  text,
  commentNum,
  likeNum,
  noticeID,
}: IProps): React.ReactElement {
  const interestDivide = interestList?.join(' | ');
  return (
    <Link
      href={{
        pathname: `/notice/${noticeID}`,
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
                  <Image src={ThumbnailLikeIcon} alt="" />
                  <p> {likeNum}</p>
                </>
              )}
              <Image src={ThumbnailCommentIcon} alt="" />
              <p> {commentNum}</p>
            </ThumbnailInfo>
          </ThumbnailOverlay>
        </ThumbnailContainer>
      </ConcertWrapper>
    </Link>
  );
}

export default Notice;
