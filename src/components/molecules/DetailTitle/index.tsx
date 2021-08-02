import dayjs from 'dayjs';
import React from 'react';
import { Bottom, DetailTitleWrapper, Middle, Top } from './style';

interface IProps {
  pageName: string;
  authorNickname?: string;
  interestList?: string[];
  createdAt?: string;
  title?: string;
}

function DetailTitle({ pageName, title, authorNickname, createdAt, interestList }: IProps): React.ReactElement {
  const interestDivide = interestList?.join(' | ');
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
          <p>{`${dayjs(createdAt).format('YY.MM.DD')}`}</p>
          <p>{interestDivide}</p>
        </Bottom>
      </DetailTitleWrapper>
    </>
  );
}

export default DetailTitle;
