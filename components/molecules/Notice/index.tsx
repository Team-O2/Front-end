import { Img, Link } from 'components/atoms';
import dayjs from 'dayjs';
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

  const timeForToday = (value: string) => {
    const today = new Date();
    const timeValue = new Date(value);

    const uploadTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
    if (uploadTime < 1) {
      return '방금전';
    } else if (uploadTime < 60) {
      return `${uploadTime}분전`;
    }

    const uploadTimeHour = Math.floor(uploadTime / 60);
    if (uploadTimeHour < 24) {
      return `${uploadTimeHour}시간전`;
    }

    const uploadTimeDay = Math.floor(uploadTimeHour / 60 / 24);
    if (uploadTimeDay < 365) {
      return dayjs(createdAt).format('YY.MM.DD');
    }
  };
  return (
    <Link to={`/notice/${noticeID}`}>
      <ConcertWrapper>
        <Info>
          <p>{authorNickname}</p>
          <p>{interestDivide}</p>
          <p>{timeForToday(createdAt)}</p>
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

export default Notice;
