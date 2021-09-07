import dayjs from 'dayjs';
import React from 'react';
import { Bottom, DetailTitleWrapper, Middle, Top } from './style';

interface IProps {
  pageName: string;
  title: string;
  createdAt: string;
  authorNickname: string;
  interestList: string[];
}

function DetailTitle({ pageName, title, authorNickname, createdAt, interestList }: IProps): React.ReactElement {
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
    <>
      <DetailTitleWrapper>
        <Top>
          <p>{pageName}</p>
        </Top>
        <Middle>
          <p>{title}</p>
        </Middle>
        <Bottom>
          <p>{authorNickname}</p>
          <p>{timeForToday(createdAt)}</p>
          <p>{interestDivide}</p>
        </Bottom>
      </DetailTitleWrapper>
    </>
  );
}

export default DetailTitle;
