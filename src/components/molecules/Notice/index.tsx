import { ThumbnailCommentIcon } from 'assets/images';
import dayjs from 'dayjs';
import React from 'react';
import { Content, Info, NoticeWrapper, ThumbnailContainer, ThumbnailInfo, ThumbnailOverlay } from './style';

interface IProps {
  imgThumbnail: string;
  authorNickname: string;
  interestList: string[];
  createdAt: string;
  title: string;
  text: string;
  commentNum: number;
  onClickFunc: () => void;
}

function Notice({
  imgThumbnail,
  authorNickname,
  interestList,
  createdAt,
  title,
  text,
  commentNum,
  onClickFunc,
}: IProps): React.ReactElement {
  const interestDivide = interestList?.join(' | ');
  return (
    <>
      <NoticeWrapper>
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
          <img className="content__right--img" src={imgThumbnail} alt="" />
          <ThumbnailOverlay>
            <ThumbnailInfo>
              <img src={ThumbnailCommentIcon} alt="" />
              <p> {commentNum}</p>
            </ThumbnailInfo>
          </ThumbnailOverlay>
        </ThumbnailContainer>
      </NoticeWrapper>
    </>
  );
}

export default Notice;
