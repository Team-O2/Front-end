import { Link } from 'components/atoms';
import React from 'react';
import { ConcertCardWrapper, Detail, Main, Overlay } from './style';
interface IProps {
  imgThumbnail: string;
  title: string;
  authorNickname: string;
  interestList: string[];
  concertID?: number;
}

function ConcertCard({ imgThumbnail, title, authorNickname, interestList, concertID }: IProps): React.ReactElement {
  const interestDivide = interestList?.join(' | ');
  return (
    <Link to={`/concert/${concertID}`}>
      <ConcertCardWrapper>
        <Main>
          <img src={imgThumbnail} alt="" />
          <p>{title}</p>
          <Overlay />
        </Main>
        <Detail>
          <p>{authorNickname}</p>
          <p>{interestDivide}</p>
        </Detail>
      </ConcertCardWrapper>
    </Link>
  );
}

export default ConcertCard;
