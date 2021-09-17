import { ConcertCard } from 'components/molecules';
import React from 'react';
import { IConcert } from 'types/concert.type';
import { ConcertCardListWrapper } from './style';
interface IProps {
  concertCardData: Array<IConcert> | undefined;
}

function ConcertCardList({ concertCardData }: IProps): React.ReactElement {
  return (
    <ConcertCardListWrapper>
      {concertCardData?.map(
        (card: IConcert) =>
          card && (
            <ConcertCard
              imgThumbnail={card.imgThumbnail}
              title={card.title}
              authorNickname={card.authorNickname}
              interestList={card.interest}
              key={card.id}
              concertID={card.id}
            ></ConcertCard>
          ),
      )}
    </ConcertCardListWrapper>
  );
}

export default ConcertCardList;
