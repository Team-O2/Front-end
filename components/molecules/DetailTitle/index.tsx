import React from 'react';
import { getTimeForToday } from 'utils';
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
          <p>{getTimeForToday(createdAt)}</p>
          <p>{interestDivide}</p>
        </Bottom>
      </DetailTitleWrapper>
    </>
  );
}

export default DetailTitle;
