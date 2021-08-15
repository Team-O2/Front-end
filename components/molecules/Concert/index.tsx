import dayjs from 'dayjs';
import Image from 'next/image';
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
  onClickFunc: () => void;
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
  onClickFunc,
}: IProps): React.ReactElement {
  const interestDivide = interestList?.join(' | ');
  return (
    <>
      <ConcertWrapper>
        <Info>
          <p>{authorNickname}</p>
          <p>{interestDivide}</p>
          <p>{`${dayjs(createdAt).format('YY.MM.DD')}`}</p>
        </Info>
        <Content onClick={onClickFunc}>
          <p>{title}</p>
          <p dangerouslySetInnerHTML={{ __html: `${text}` }} />
        </Content>
        <ThumbnailContainer onClick={onClickFunc}>
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
    </>
  );
}

export default Concert;
