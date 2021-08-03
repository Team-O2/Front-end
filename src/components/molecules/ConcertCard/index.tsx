import React from 'react';
import { ConcertCardWrapper, Detail, Main, Overlay } from './style';

interface IProps {
  imgThumbnail: string;
  title: string;
  authorNickname: string;
  interestList: string[];
  onClickFunc: () => void;
}

function ConcertCard({ imgThumbnail, title, authorNickname, interestList, onClickFunc }: IProps): React.ReactElement {
  const interestDivide = interestList?.join(' | ');
  return (
    <>
      <ConcertCardWrapper>
        <Main onClick={onClickFunc}>
          <img src={imgThumbnail} alt="" />
          <p>{title}</p>
          <Overlay />
        </Main>
        <Detail onClick={onClickFunc}>
          <p>{authorNickname}</p>
          <p>{interestDivide}</p>
        </Detail>
      </ConcertCardWrapper>
    </>
  );
}

export default ConcertCard;
