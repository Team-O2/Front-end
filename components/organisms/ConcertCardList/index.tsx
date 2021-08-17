import { ConcertCard } from 'components/molecules';
import React from 'react';
import { useHistory } from 'react-router';
import { IConcert } from 'types/concert.type';
import { ConcertCardListWrapper } from './style';
interface IProps {
  concertCardData: Array<IConcert> | undefined;
}

function ConcertCardList({ concertCardData }: IProps): React.ReactElement {
  const history = useHistory();
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
              key={card._id}
              onClickFunc={() => history.push(`/concert/${card._id}`)}
            ></ConcertCard>
          ),
      )}
    </ConcertCardListWrapper>
  );
}

export default ConcertCardList;
